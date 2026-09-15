"use strict";
/*
 * Contact form endpoint (Vercel serverless function): POST /api/contact
 *
 * 1. Sends the lead to the owner's Telegram chat (critical path: if it fails, the visitor sees an error).
 * 2. Sends the visitor a confirmation email through Brevo.
 *
 * Secrets and the sender address live in Vercel environment variables, never in this public repository:
 *   BREVO_API_KEY, CONTACT_FROM_EMAIL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 *
 * The confirmation email never repeats the visitor's free text, so the form cannot be used to relay spam
 * to arbitrary addresses.
 */

// labels of the form's select options, written by the site generator (build.js)
const OPTIONS = require("./_options.json");
const SITE = "https://visualandgrowth.com";
const BRAND = "Visual & Growth";
const ALLOWED_HOSTS = /^(visualandgrowth\.com|www\.visualandgrowth\.com|[a-z0-9-]+\.vercel\.app|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9.-]{1,253}\.[a-z]{2,}$/i;

// best effort per instance: a few messages per address in a short window
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  return list.length > MAX_HITS;
}

const clean = (v, max) => String(v == null ? "" : v).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\s+/g, " ");
const escHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// names go into an email we send to a third party: no links, no markup
const safeName = (v) => oneLine(v, 80).replace(/https?:\/\/\S+|www\.\S+/gi, "").replace(/[<>]/g, "").trim();

function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch (e) { return null; }
  }
  return null;
}

async function telegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) throw new Error("telegram not configured");
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat, text: text.slice(0, 4000), disable_web_page_preview: true }),
  });
  if (!res.ok) throw new Error("telegram HTTP " + res.status);
}

function confirmationEmail(name, servicio, modelo) {
  const hello = name ? `Hola, ${name}:` : "Hola:";
  const lines = [];
  if (servicio) lines.push(["Servicio de interés", servicio]);
  if (modelo) lines.push(["Modelo de colaboración", modelo]);
  const text = [
    hello,
    "",
    "Gracias por escribirnos. Hemos recibido tu mensaje y nuestro equipo ya lo está revisando. Te responderemos lo antes posible para entender tu situación y proponerte el enfoque y el modelo de colaboración más adecuados.",
    ...(lines.length ? ["", "Resumen de tu solicitud:", ...lines.map(([k, v]) => `- ${k}: ${v}`)] : []),
    "",
    "Si quieres añadir algo, responde a este correo.",
    "",
    "Un saludo,",
    BRAND,
    SITE,
    "",
    `Recibes este correo porque has enviado el formulario de contacto de visualandgrowth.com. Más información sobre el tratamiento de tus datos: ${SITE}/privacidad`,
  ].join("\n");
  const rows = lines.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#5b5b5b;white-space:nowrap">${escHtml(k)}</td><td style="padding:6px 0;color:#1e1e1e">${escHtml(v)}</td></tr>`).join("");
  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f7f7f3;font-family:Arial,Helvetica,sans-serif;color:#1e1e1e">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f3;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#1e1e1e;padding:22px 28px;color:#ffffff;font-size:18px;font-weight:bold">Visual <span style="color:#ffc600">&amp;</span> Growth</td></tr>
<tr><td style="padding:28px;font-size:15px;line-height:1.6">
<p style="margin:0 0 14px">${escHtml(hello)}</p>
<p style="margin:0 0 14px">Gracias por escribirnos. Hemos recibido tu mensaje y nuestro equipo ya lo está revisando. Te responderemos lo antes posible para entender tu situación y proponerte el enfoque y el modelo de colaboración más adecuados.</p>
${rows ? `<p style="margin:18px 0 6px;font-weight:bold">Resumen de tu solicitud</p><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:14px">${rows}</table>` : ""}
<p style="margin:18px 0 0">Si quieres añadir algo, responde a este correo.</p>
<p style="margin:18px 0 0">Un saludo,<br><strong>${BRAND.replace("&", "&amp;")}</strong><br><a href="${SITE}" style="color:#1e1e1e">visualandgrowth.com</a></p>
</td></tr>
<tr><td style="padding:18px 28px;border-top:1px solid #eeeeea;font-size:12px;line-height:1.5;color:#5b5b5b">Recibes este correo porque has enviado el formulario de contacto de visualandgrowth.com. Más información sobre el tratamiento de tus datos en nuestra <a href="${SITE}/privacidad" style="color:#5b5b5b">política de privacidad</a>.</td></tr>
</table></td></tr></table></body></html>`;
  return { text, html };
}

async function brevo(to, name, servicio, modelo) {
  const key = process.env.BREVO_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !from) throw new Error("brevo not configured");
  const { text, html } = confirmationEmail(name, servicio, modelo);
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": key, "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: BRAND, email: from },
      replyTo: { name: BRAND, email: from },
      to: [name ? { email: to, name } : { email: to }],
      subject: "Hemos recibido tu mensaje | Visual & Growth",
      htmlContent: html,
      textContent: text,
      tags: ["contacto-web"],
    }),
  });
  if (!res.ok) throw new Error("brevo HTTP " + res.status);
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }

  // same-site requests only
  const origin = req.headers.origin;
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch (e) {}
    if (!ALLOWED_HOSTS.test(host)) return res.status(403).json({ ok: false, error: "origin" });
  }

  const b = readBody(req);
  if (!b) return res.status(400).json({ ok: false, error: "body" });

  // bots: honeypot filled or form sent too fast. Answer as if it had worked.
  if (clean(b.website, 200) || (Number(b.form_ms) > 0 && Number(b.form_ms) < 2500)) return res.status(200).json({ ok: true });

  const ip = oneLine((req.headers["x-forwarded-for"] || "").split(",")[0] || req.socket?.remoteAddress || "", 64);
  if (limited(ip)) return res.status(429).json({ ok: false, error: "rate" });

  const d = {
    nombre: oneLine(b.nombre, 100),
    empresa: oneLine(b.empresa, 120),
    email: oneLine(b.email, 254).toLowerCase(),
    telefono: oneLine(b.telefono, 40).replace(/[^\d+()\s.-]/g, ""),
    servicio: oneLine(b.servicio, 120),
    modelo: oneLine(b.modelo, 120),
    sector: oneLine(b.sector, 120),
    mensaje: clean(b.mensaje, 5000),
    privacidad: b.privacidad === "aceptada",
    comunicaciones: b.comunicaciones === "si",
  };
  if (d.nombre.length < 2 || !d.empresa || !EMAIL_RE.test(d.email) || d.mensaje.length < 2 || !d.privacidad) {
    return res.status(422).json({ ok: false, error: "fields" });
  }

  const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const lead = [
    "Nuevo contacto desde visualandgrowth.com",
    "",
    `Nombre: ${d.nombre}`,
    `Empresa: ${d.empresa}`,
    `Email: ${d.email}`,
    `Teléfono: ${d.telefono || "no indicado"}`,
    `Servicio: ${d.servicio || "no indicado"}`,
    d.sector ? `Sector: ${d.sector}` : null,
    `Modelo: ${d.modelo || "no indicado"}`,
    `Acepta información comercial: ${d.comunicaciones ? "sí" : "no"}`,
    `Fecha: ${fecha}`,
    "",
    "Mensaje:",
    d.mensaje.slice(0, 3000),
  ].filter((l) => l !== null).join("\n");

  try {
    await telegram(lead);
  } catch (e) {
    console.error("contact: lead notification failed:", e.message);
    return res.status(502).json({ ok: false, error: "notify" });
  }

  try {
    // only the fixed option labels are repeated in the email, never free text
    const svc = OPTIONS.services.includes(d.servicio) ? d.servicio : "";
    const mod = OPTIONS.models.includes(d.modelo) ? d.modelo : "";
    await brevo(d.email, safeName(d.nombre), svc, mod);
  } catch (e) {
    console.error("contact: confirmation email failed:", e.message);
    try { await telegram(`Aviso: no se pudo enviar el email de confirmación a ${d.email} (${e.message}). Contesta tú directamente.`); } catch (e2) {}
  }

  return res.status(200).json({ ok: true });
};

// exported for local tests
module.exports.confirmationEmail = confirmationEmail;

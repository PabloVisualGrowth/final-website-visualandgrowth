(function () {
  "use strict";

  // tells the <head> failsafe that reveal animations are wired up
  window.vgReady = true;
  var root = document.documentElement;

  var CONTACT_EMAIL = "pabloperez@visualandgrowth.com";
  // Set to an n8n (or similar) webhook URL to receive the contact form as JSON.
  // While empty, the form opens the visitor's email client with the message prefilled
  // and says so, instead of claiming the message was received.
  var CONTACT_ENDPOINT = "";

  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 10); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // services dropdown
  var ddBtn = document.querySelector("[data-dd-btn]");
  var dd = document.querySelector("[data-dd]");
  if (ddBtn && dd) {
    var closeTimer;
    var setOpen = function (open) {
      dd.classList.toggle("open", open);
      ddBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    var hoverable = window.matchMedia("(hover:hover)").matches;
    var li = ddBtn.parentElement;
    if (hoverable) {
      li.addEventListener("mouseenter", function () { clearTimeout(closeTimer); setOpen(true); });
      li.addEventListener("mouseleave", function () { closeTimer = setTimeout(function () { setOpen(false); }, 160); });
    }
    ddBtn.addEventListener("click", function () { setOpen(!dd.classList.contains("open")); });
    document.addEventListener("click", function (e) { if (!li.contains(e.target)) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setOpen(false); } });
  }

  // mobile menu
  var burger = document.querySelector("[data-burger]");
  var mnav = document.querySelector("[data-mnav]");
  if (burger && mnav) {
    var iconOpen = burger.innerHTML;
    var iconClose = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
    var toggle = function (open) {
      mnav.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.innerHTML = open ? iconClose : iconOpen;
    };
    burger.addEventListener("click", function () { toggle(!mnav.classList.contains("open")); });
    mnav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
  }

  // accordions
  document.querySelectorAll(".acc-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc-item");
      var open = !item.classList.contains("open");
      item.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  // reveal on scroll
  // stagger delays come from CSS (nth-child), so nothing is written to the DOM before observing
  var reveals = document.querySelectorAll("[data-reveal], [data-stagger] > *");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // cookie consent: Google Tag Manager only loads after the visitor accepts analytics cookies.
  // The <head> script reads the stored choice, loads GTM if granted and adds .cc to show the banner if unset.
  var KEY = "vg-consent";
  var banner = document.querySelector("[data-cookie]");
  var save = function (v) { try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {} };
  var clearAnalyticsCookies = function () {
    var host = window.location.hostname;
    var base = host.split(".").slice(-2).join(".");
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (!/^(_ga|_gid|_gat)/.test(name)) return;
      ["", host, "." + host, "." + base].forEach(function (d) {
        document.cookie = name + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
      });
    });
  };
  if (banner) {
    var show = function () { banner.classList.add("show"); };
    var hide = function () { banner.classList.remove("show"); root.classList.remove("cc"); };
    if (window.vgConsent && !window.vgConsent() && !root.classList.contains("cc")) show();
    banner.querySelector("[data-cookie-ok]").addEventListener("click", function () {
      save("granted");
      if (typeof window.vgLoadGTM === "function") window.vgLoadGTM();
      hide();
    });
    banner.querySelector("[data-cookie-no]").addEventListener("click", function () {
      save("denied");
      if (typeof window.gtag === "function") window.gtag("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
      hide();
    });
    document.querySelectorAll("[data-cookie-open]").forEach(function (b) { b.addEventListener("click", show); });
  }

  // contact form
  var form = document.querySelector("[data-contact]");
  if (form) {
    var card = form.closest(".form-card");
    var msg = form.querySelector("[data-form-msg]");
    var btn = form.querySelector("button[type=submit]");
    var mailLink = '<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a>";
    var say = function (html, isError) {
      msg.innerHTML = html;
      msg.classList.toggle("is-error", !!isError);
      msg.hidden = false;
    };

    // service CTAs link to /contacto?servicio=<slug>
    try {
      var wanted = new URLSearchParams(window.location.search).get("servicio");
      if (wanted) {
        var opts = form.querySelectorAll("#f-servicio option[data-slug]");
        for (var i = 0; i < opts.length; i++) {
          if (opts[i].getAttribute("data-slug") === wanted) { opts[i].selected = true; break; }
        }
      }
    } catch (err) {}

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.querySelector("[name=website]").value) return;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = {};
      new FormData(form).forEach(function (v, k) { if (k !== "website") data[k] = String(v).trim(); });
      data.source = "visualandgrowth.com/contacto";
      data.sent_at = new Date().toISOString();
      // proof of consent, stored with the request
      data.privacidad_texto = "He leído y acepto la política de privacidad.";
      data.comunicaciones = data.comunicaciones ? "si" : "no";
      var track = function (name) {
        try { (window.dataLayer = window.dataLayer || []).push({ event: name, servicio: data.servicio || "" }); } catch (err) {}
      };
      if (CONTACT_ENDPOINT) {
        btn.disabled = true;
        msg.hidden = true;
        fetch(CONTACT_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
          .then(function (res) {
            if (!res.ok) throw new Error("HTTP " + res.status);
            card.classList.add("sent");
            track("contact_submit");
          })
          .catch(function () {
            btn.disabled = false;
            say("No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos a " + mailLink + ".", true);
          });
      } else {
        var body = [
          "Nombre: " + (data.nombre || ""),
          "Empresa: " + (data.empresa || ""),
          "Email: " + (data.email || ""),
          "Teléfono: " + (data.telefono || ""),
          "Servicio de interés: " + (data.servicio || ""),
          "Modelo de colaboración: " + (data.modelo || ""),
          "Acepta recibir información comercial: " + data.comunicaciones,
          "",
          data.mensaje || ""
        ].join("\n");
        window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Contacto web: " + (data.empresa || data.nombre || "")) + "&body=" + encodeURIComponent(body);
        track("contact_mailto");
        say("Hemos abierto tu programa de correo con el mensaje preparado: solo tienes que enviarlo. Si no se ha abierto, escríbenos a " + mailLink + ".");
      }
    });
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

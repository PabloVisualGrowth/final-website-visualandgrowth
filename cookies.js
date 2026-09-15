/* Visual & Growth: cookie banner for the newsletter page.
   Shares the stored choice ("vg-consent", renewed after 12 months) with the rest of the site.
   Google Tag Manager and Analytics are loaded by window.vgLoadGTM only after "Aceptar". */
(function () {
  "use strict";
  var KEY = "vg-consent";
  var css = "" +
    "#vg-cookies{position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(16px);z-index:9000;width:min(680px,calc(100vw - 32px));" +
    "opacity:0;visibility:hidden;transition:opacity .4s ease,transform .4s ease,visibility .4s;background:rgba(14,12,16,.92);border:1px solid rgba(255,196,10,.18);" +
    "border-radius:18px;padding:18px 22px;box-shadow:0 24px 70px rgba(0,0,0,.5);display:flex;align-items:center;gap:18px;flex-wrap:wrap;font-family:'Space Grotesk',system-ui,sans-serif}" +
    "#vg-cookies.show{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}" +
    "#vg-cookies p{flex:1 1 280px;min-width:240px;margin:0;font-size:12.5px;line-height:1.5;color:rgba(244,246,252,.75)}" +
    "#vg-cookies a{color:#ffc40a}" +
    "#vg-cookies .ck-btns{display:flex;gap:10px;flex:0 0 auto}" +
    "#vg-cookies button{font-family:inherit;font-weight:500;font-size:13px;cursor:pointer;border-radius:100px;padding:11px 20px;" +
    "border:1px solid #f4f6fc;background:#f4f6fc;color:#0a0a0a;transition:background .25s,border-color .25s}" +
    "#vg-cookies button:hover{background:#ffc40a;border-color:#ffc40a}" +
    "@media(max-width:560px){#vg-cookies{flex-direction:column;align-items:stretch}#vg-cookies .ck-btns button{flex:1}}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var el = document.createElement("div");
  el.id = "vg-cookies";
  el.setAttribute("role", "region");
  el.setAttribute("aria-label", "Aviso de cookies");
  el.innerHTML =
    '<p>Con tu permiso, usamos cookies analíticas de Google para saber cómo se usa la web y mejorarla. ' +
    'Puedes aceptarlas o rechazarlas, y cambiar tu elección cuando quieras. Más información en la <a href="/cookies">política de cookies</a>.</p>' +
    '<div class="ck-btns"><button type="button" data-no>Rechazar</button><button type="button" data-ok>Aceptar</button></div>';
  document.body.appendChild(el);

  var save = function (v) { try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {} };
  var show = function () { el.classList.add("show"); };
  var hide = function () { el.classList.remove("show"); };
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

  el.querySelector("[data-ok]").addEventListener("click", function () {
    save("granted");
    if (typeof window.vgLoadGTM === "function") window.vgLoadGTM();
    hide();
  });
  el.querySelector("[data-no]").addEventListener("click", function () {
    save("denied");
    if (typeof window.gtag === "function") window.gtag("consent", "update", { analytics_storage: "denied" });
    clearAnalyticsCookies();
    hide();
  });
  document.querySelectorAll("[data-cookie-open]").forEach(function (b) { b.addEventListener("click", show); });

  var current = typeof window.vgConsent === "function" ? window.vgConsent() : null;
  if (!current) show();
})();

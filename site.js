(function () {
  "use strict";

  var CONTACT_EMAIL = "pabloperez@visualandgrowth.com";
  // Set to an n8n (or similar) webhook URL to receive the contact form as JSON.
  // While empty, the form opens the visitor's email client with the message prefilled.
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
  var reveals = document.querySelectorAll("[data-reveal]");
  document.querySelectorAll("[data-stagger]").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.setAttribute("data-reveal", "");
      child.style.setProperty("--d", (i * 0.08) + "s");
    });
  });
  reveals = document.querySelectorAll("[data-reveal]");
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

  // cookie consent (Google Consent Mode v2)
  var KEY = "vg-consent";
  var banner = document.querySelector("[data-cookie]");
  var grant = function () {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" });
    }
  };
  var deny = function () {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    }
  };
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (banner) {
    var show = function () { banner.classList.add("show"); };
    var hide = function () { banner.classList.remove("show"); };
    if (!stored) setTimeout(show, 600);
    banner.querySelector("[data-cookie-ok]").addEventListener("click", function () {
      try { localStorage.setItem(KEY, "granted"); } catch (e) {}
      grant(); hide();
    });
    banner.querySelector("[data-cookie-no]").addEventListener("click", function () {
      try { localStorage.setItem(KEY, "denied"); } catch (e) {}
      deny(); hide();
    });
    document.querySelectorAll("[data-cookie-open]").forEach(function (b) { b.addEventListener("click", show); });
  }

  // contact form
  var form = document.querySelector("[data-contact]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.querySelector("[name=website]").value) return;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = {};
      new FormData(form).forEach(function (v, k) { if (k !== "website") data[k] = String(v).trim(); });
      data.source = "visualandgrowth.com/contacto";
      data.sent_at = new Date().toISOString();
      var card = form.closest(".form-card");
      var done = function () {
        card.classList.add("sent");
        try { (window.dataLayer = window.dataLayer || []).push({ event: "contact_submit" }); } catch (err) {}
      };
      if (CONTACT_ENDPOINT) {
        var btn = form.querySelector("button[type=submit]");
        btn.disabled = true;
        fetch(CONTACT_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
          .then(done).catch(done);
      } else {
        var body = [
          "Nombre: " + (data.nombre || ""),
          "Empresa: " + (data.empresa || ""),
          "Email: " + (data.email || ""),
          "Teléfono: " + (data.telefono || ""),
          "Servicio de interés: " + (data.servicio || ""),
          "Modelo de colaboración: " + (data.modelo || ""),
          "",
          data.mensaje || ""
        ].join("\n");
        window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Contacto web: " + (data.empresa || data.nombre || "")) + "&body=" + encodeURIComponent(body);
        done();
      }
    });
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

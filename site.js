(function () {
  "use strict";

  // tells the <head> failsafe that reveal animations are wired up
  window.vgReady = true;
  var root = document.documentElement;

  // Vercel function (api/contact.js): notifies the team on Telegram and emails the visitor a confirmation
  var CONTACT_ENDPOINT = "/api/contact";

  var nav = document.querySelector(".nav");

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
    // "Servicios" folds the nine services so the main links and the CTA fit on one screen
    var svcBtn = mnav.querySelector("[data-mnav-svc]");
    var svcList = document.getElementById("mnav-svc");
    if (svcBtn && svcList) {
      svcBtn.addEventListener("click", function () {
        var open = svcBtn.getAttribute("aria-expanded") !== "true";
        svcBtn.setAttribute("aria-expanded", open ? "true" : "false");
        svcList.hidden = !open;
      });
    }
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
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // wrap each word of an element in spans, keeping inner elements (strong, a, span.mark) intact.
  // The text stays in the DOM, so crawlers and screen readers read it as before.
  var splitWords = function (el, make) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    var n = 0;
    nodes.forEach(function (node) {
      var frag = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach(function (part) {
        if (!part) return;
        if (/^\s+$/.test(part) || /^[.,:;!?¿¡)»"]+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        frag.appendChild(make(part, n++));
      });
      node.parentNode.replaceChild(frag, node);
    });
    return n;
  };

  var splitTitle = function (h) {
      splitWords(h, function (word, i) {
        var outer = document.createElement("span");
        outer.className = "w";
        var inner = document.createElement("span");
        inner.className = "wi";
        inner.style.setProperty("--i", i);
        inner.textContent = word;
        outer.appendChild(inner);
        return outer;
      });
  };
  var prepareScrub = function (box) {
      var total = splitWords(box, function (word, i) {
        var span = document.createElement("span");
        span.className = "rw";
        span.style.setProperty("--i", i);
        span.textContent = word;
        return span;
      });
      box.style.setProperty("--n", total);
      box.classList.add("scrub");
      scrubs.push(box);
      requestFrame();
  };

  // scroll-linked effects share one rAF-throttled handler
  var scrubs = [];
  var hero = document.querySelector(".hero");
  var ticking = false;
  var frame = function () {
    ticking = false;
    var vh = window.innerHeight;
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
    scrubs.forEach(function (box) {
      var r = box.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) return;
      // 0 when the text top reaches 90% of the viewport, 1 when its bottom reaches 60%
      var p = (vh * 0.9 - r.top) / (r.height + vh * 0.3);
      box.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(3));
    });
    if (hero && !reduceMotion && window.scrollY < vh * 1.2) hero.style.setProperty("--py", (window.scrollY * 0.12).toFixed(1));
  };
  var requestFrame = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(frame); } };
  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", requestFrame);
  requestFrame();

  if (!reduceMotion && "IntersectionObserver" in window) {
    // titles are split only when they are about to enter the screen; those already visible stay as they are
    var splitIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        splitIO.unobserve(en.target);
        if (en.target.hasAttribute("data-scrub")) prepareScrub(en.target);
        else if (en.boundingClientRect.top > window.innerHeight * 0.92) splitTitle(en.target);
      });
    }, { rootMargin: "0px 0px 60% 0px" });
    document.querySelectorAll("[data-reveal] .h-sec, [data-scrub]").forEach(function (el) { splitIO.observe(el); });
  }

  // decorative loops only run while their section is on screen
  if ("IntersectionObserver" in window) {
    var loopIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("inview", en.isIntersecting); });
    });
    document.querySelectorAll(".lines, .chips").forEach(function (el) { loopIO.observe(el.closest(".sec")); });
  }

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
    var formReady = Date.now();
    var say = function (html, isError) {
      msg.innerHTML = html;
      msg.classList.toggle("is-error", !!isError);
      msg.hidden = false;
    };

    // service CTAs link to /contacto?servicio=<slug>, sector pages to /contacto?sector=<slug>
    try {
      var sectorSlug = new URLSearchParams(window.location.search).get("sector");
      var sectorNames = JSON.parse(form.getAttribute("data-sectors") || "{}");
      if (sectorSlug && sectorNames[sectorSlug]) form.querySelector("#f-sector").value = sectorNames[sectorSlug];
    } catch (err) {}
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
        try { (window.dataLayer = window.dataLayer || []).push({ event: name, servicio: data.servicio || "", sector: data.sector || "" }); } catch (err) {}
      };
      data.form_ms = Date.now() - formReady;
      btn.disabled = true;
      msg.hidden = true;
      fetch(CONTACT_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(function (res) {
          if (!res.ok) { var err = new Error("HTTP " + res.status); err.status = res.status; throw err; }
          card.classList.add("sent");
          var ok = card.querySelector(".form-ok");
          if (ok) ok.hidden = false;
          track("contact_submit");
        })
        .catch(function (err) {
          btn.disabled = false;
          if (err && err.status === 429) say("Has enviado varios mensajes seguidos. Espera unos minutos y vuelve a intentarlo.", true);
          else if (err && err.status === 422) say("Revisa los campos obligatorios: nombre, empresa, un email válido y tu mensaje.", true);
          else say('No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos o escríbenos a la dirección que figura en el <a href="/aviso-legal">aviso legal</a>.', true);
        });
    });
  }

  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();

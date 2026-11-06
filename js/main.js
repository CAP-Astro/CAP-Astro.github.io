(function () {
  "use strict";

  var projects = window.CAPASTRO_PROJECTS || [];
  var STATUS = {
    online: { label: "Online", led: "led--ok" },
    beta: { label: "Beta", led: "led--beta" },
    dev: { label: "In dev", led: "led--dev" }
  };
  var ACCENT = { online: "var(--green)", beta: "var(--amber)", dev: "var(--cyan)" };
  var LINK_LABELS = { website: "Website", download: "Download", github: "GitHub", docs: "Docs" };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (k === "style") node.style.cssText = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function badge(status) {
    var s = STATUS[status] || STATUS.online;
    return el("span", { class: "badge badge--" + (STATUS[status] ? status : "online") }, [
      el("span", { class: "led " + s.led, "aria-hidden": "true" }),
      document.createTextNode(s.label)
    ]);
  }

  /* ---------- Module grid ---------- */
  var grid = document.getElementById("module-grid");
  var filtersEl = document.getElementById("filters");
  var activeFilter = "All";

  function renderGrid() {
    grid.textContent = "";
    projects
      .filter(function (p) { return activeFilter === "All" || p.category === activeFilter; })
      .forEach(function (p) {
        var idx = projects.indexOf(p);
        var card = el("button", {
          class: "card", type: "button",
          style: "--accent:" + (ACCENT[p.status] || ACCENT.online),
          "aria-label": "Open details for " + p.name
        }, [
          el("div", { class: "card__top" }, [
            el("span", { class: "card__code mono", text: p.code }),
            badge(p.status)
          ]),
          p.image ? el("div", { class: "card__shot" }, [
            el("img", { src: p.image, alt: "", loading: "lazy", style: p.thumbPosition ? "object-position:" + p.thumbPosition : "" })
          ]) : null,
          el("div", { class: "card__body" }, [
            el("h3", { class: "card__name", text: p.name }),
            p.full ? el("p", { class: "card__full", text: p.full }) : el("p", { class: "card__full", text: (p.category || "").toLowerCase() }),
            el("p", { class: "card__desc", text: p.summary }),
            el("div", { class: "card__foot" }, [
              el("div", { class: "tags" }, (p.tags || []).map(function (t) { return el("span", { class: "tag", text: t }); })),
              el("span", { class: "card__open", text: "open ›" })
            ])
          ])
        ]);
        card.addEventListener("click", function () { openModal(idx, card); });
        grid.appendChild(card);
      });
  }

  function renderFilters() {
    var cats = ["All"];
    projects.forEach(function (p) { if (p.category && cats.indexOf(p.category) === -1) cats.push(p.category); });
    if (cats.length <= 2) return; // no point filtering a single category
    cats.forEach(function (c) {
      var b = el("button", { class: "filter", type: "button", "aria-pressed": String(c === activeFilter), text: c });
      b.addEventListener("click", function () {
        activeFilter = c;
        Array.prototype.forEach.call(filtersEl.children, function (x) {
          x.setAttribute("aria-pressed", String(x.textContent === c));
        });
        renderGrid();
      });
      filtersEl.appendChild(b);
    });
  }

  /* A feature is a string, or { text, items: [strings] } for a sub-list */
  function featureItem(f) {
    if (typeof f === "string") return el("li", { text: f });
    return el("li", null, [
      document.createTextNode(f.text),
      el("ul", { class: "features features--sub" }, (f.items || []).map(function (s) { return el("li", { text: s }); }))
    ]);
  }

  /* ---------- Detail modal ---------- */
  var modal = document.getElementById("module-modal");
  var modalBody = document.getElementById("modal-body");
  var modalCode = document.getElementById("modal-code");
  var lastTrigger = null;

  function openModal(i, trigger) {
    var p = projects[i];
    lastTrigger = trigger;
    modalCode.textContent = p.code + " · " + (p.category || "module");
    modalBody.textContent = "";

    var shot = el("div", { class: "modal__shot" });
    if (p.image) {
      shot.className += " modal__shot--img";
      var zoom = el("button", { type: "button", class: "modal__zoom", "aria-label": "View " + p.name + " screenshot full size" }, [
        el("img", { src: p.image, alt: p.name + " screenshot" }),
        el("span", { class: "modal__zoom-hint mono", text: "⤢ click to enlarge" })
      ]);
      zoom.addEventListener("click", function () { openLightbox(p.image, p.name + " screenshot"); });
      shot.appendChild(zoom);
    } else {
      shot.appendChild(el("span", { class: "mono dim", text: "[ screenshot pending ]" }));
    }

    var linkKeys = Object.keys(p.links || {}).filter(function (k) { return p.links[k]; });

    [
      el("div", { class: "modal__title" }, [el("h2", { id: "modal-title", text: p.name }), badge(p.status)]),
      el("p", { class: "modal__full", text: p.full || " " }),
      shot
    ]
      .concat((p.details || []).map(function (d) { return el("p", { text: d }); }))
      .concat(p.features && p.features.length ? [
        el("h3", { text: p.featuresTitle || "Capabilities" }),
        el("ul", { class: "features" }, p.features.map(featureItem))
      ] : [])
      .concat(linkKeys.length ? [
        el("div", { class: "modal__links" }, linkKeys.map(function (k, n) {
          return el("a", {
            class: "btn btn--sm" + (n === 0 ? " btn--primary" : ""),
            href: p.links[k], target: "_blank", rel: "noopener",
            text: LINK_LABELS[k] || k
          });
        }))
      ] : [])
      .forEach(function (n) { modalBody.appendChild(n); });

    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }

  function closeModal() {
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  modal.addEventListener("close", function () { if (lastTrigger) lastTrigger.focus(); });

  /* ---------- Screenshot viewer ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
  }
  function closeLightbox() {
    if (typeof lightbox.close === "function") lightbox.close();
    else lightbox.removeAttribute("open");
  }
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });

  /* ---------- Telemetry ---------- */
  var SYNODIC = 29.530588853;
  var NEW_MOON_REF = Date.UTC(2000, 0, 6, 18, 14); // reference new moon

  function moon(now) {
    var age = ((now - NEW_MOON_REF) / 86400000) % SYNODIC;
    if (age < 0) age += SYNODIC;
    var illum = (1 - Math.cos((2 * Math.PI * age) / SYNODIC)) / 2;
    var names = ["New moon", "Waxing crescent", "First quarter", "Waxing gibbous",
                 "Full moon", "Waning gibbous", "Last quarter", "Waning crescent"];
    var phase = names[Math.floor(((age / SYNODIC) * 8) + 0.5) % 8];
    var daysToNew = SYNODIC - age;
    return { age: age, illum: illum, phase: phase, daysToNew: daysToNew };
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    var now = new Date();
    var time = pad(now.getUTCHours()) + ":" + pad(now.getUTCMinutes()) + ":" + pad(now.getUTCSeconds());
    var date = now.getUTCFullYear() + "-" + pad(now.getUTCMonth() + 1) + "-" + pad(now.getUTCDate());
    document.getElementById("utc-clock").textContent = time;
    document.getElementById("t-time").textContent = time;
    document.getElementById("t-date").textContent = date;
  }

  function updateMoon() {
    var m = moon(Date.now());
    var pct = Math.round(m.illum * 100);
    document.getElementById("t-moon").textContent = m.phase;
    document.getElementById("t-illum").textContent = pct + "%";
    document.getElementById("moonbar-fill").style.width = pct + "%";
    var note;
    if (pct <= 25) note = "Dark skies window: good conditions for deep-sky imaging.";
    else if (pct >= 75) note = "Bright moon: narrowband targets recommended.";
    else note = "Moderate moonlight · next new moon in " + Math.round(m.daysToNew) + " days.";
    document.getElementById("t-note").textContent = "> " + note;
  }

  /* ---------- Init ---------- */
  var count = pad(projects.length);
  document.getElementById("module-count").textContent = projects.length;
  document.getElementById("t-modules").textContent = count;
  document.getElementById("year").textContent = new Date().getFullYear();

  renderFilters();
  renderGrid();
  tick();
  updateMoon();
  setInterval(tick, 1000);
  setInterval(updateMoon, 60000);
})();

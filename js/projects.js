/*
 * CAPAstro project data — edit this file to update the site.
 *
 * Fields:
 *   code      Module ID shown on the card (e.g. "MOD-01")
 *   name      Short display name
 *   full      Full name / expansion of the acronym ("" to hide)
 *   status    "online" (released) | "beta" | "dev" (in development)
 *   category  Used for the filter buttons (any text; filters build themselves)
 *   summary   One or two sentences for the card
 *   details   Longer paragraph(s) for the detail window (array of strings)
 *   features  Bullet list for the detail window. Each item is a string, or
 *             { text: "Heading", items: ["sub-point", ...] } for a sub-list
 *   featuresTitle  Optional heading for that list (default "Capabilities")
 *   tags      Short keywords
 *   image     Path to a screenshot, e.g. "images/dsof.png" (null = placeholder)
 *   thumbPosition  Optional: which part of the screenshot the card shows
 *             (CSS object-position, default "left top"; e.g. "right center")
 *   links     Any of { website, download, github, docs } — omit what you don't have
 *
 * NOTE: Everything marked TODO is placeholder text. Replace it with real details.
 */
window.CAPASTRO_PROJECTS = [
  {
    code: "MOD-01",
    name: "DSOF",
    full: "Deep Sky Object Finder · v2.0.2",
    status: "online",
    category: "Planning",
    summary: "An observing and astrophotography planner that shows which deep-sky objects are up tonight from your location, and when to image them.",
    details: [
      "DSOF (Deep Sky Object Finder) is an observing and astrophotography planner. For your location and date it works out which deep-sky objects (galaxies, nebulae, star clusters and more) will be above your minimum altitude tonight, when each one rises, culminates and sets, and its best imaging window.",
      "It ships with a catalogue of nearly 500 targets, with magnitude, size, type and constellation data from SIMBAD, and lets you add your own."
    ],
    features: [
      "Filter and sort targets by type, magnitude, size, difficulty, constellation/season and culmination time",
      "Transit graph for each target showing altitude through the night, plus moon rise/set and separation",
      "Field of view preview with a real sky image and reticules for two equipment setups",
      "Weather dashboard (Meteoblue): cloud cover, seeing, humidity, dew point, temperature and wind",
      "Year Planner showing the best targets and new/full moon dates for the next 12 months",
      "Quick links to Windy clouds, light pollution and aurora maps"
    ],
    tags: ["planning", "~500 targets", "SIMBAD data"],
    image: "images/dsof.webp",
    links: {}
  },
  {
    code: "MOD-02",
    name: "AstroConX",
    full: "Remote dashboard for N.I.N.A.",
    status: "online",
    category: "Control",
    summary: "A modern web dashboard for controlling N.I.N.A. remotely from any browser on your local network.",
    details: [
      "A modern web dashboard for remotely controlling N.I.N.A. (Nighttime Imaging 'N' Astronomy) over your local network. Connects via the NINA Advanced API plugin to provide real-time equipment control, imaging, sequence management, guiding, and weather monitoring - all from your browser."
    ],
    featuresTitle: "Modules",
    features: [
      "Dashboard, Overview and Split View",
      "Equipment: Camera, Focuser, Filter Wheel, Flat Panel, Rotator, Guider and Mount",
      "Safety Monitor and Polar Alignment",
      "Sequence, Image History and Stack",
      "Sky Atlas and Dark Watch",
      "Weather (Meteoblue forecast) and AllSky",
      "CCTV, Rig Map and Logging",
      "Night Vision mode and Settings"
    ],
    tags: ["web", "n.i.n.a.", "remote"],
    image: "images/astroconx.webp",
    links: {}
  },
  {
    code: "MOD-03",
    name: "MCC",
    full: "Mount Command Center · v1.3.5",
    status: "online",
    category: "Control",
    summary: "A Windows controller for Sky-Watcher equatorial mounts that serves the mount to N.I.N.A., PHD2 and other software over ASCOM Alpaca.",
    details: [
      "A Windows mount controller for Sky-Watcher equatorial mounts on an EQDIR / USB cable, in the spirit of EQMOD and Green Swamp Server. It talks straight to the mount's motor board and serves the mount to astronomy software as an ASCOM Alpaca telescope."
    ],
    features: [
      "Direct Sky-Watcher motor-controller protocol over serial (auto-detects 9600 / 115200 baud)",
      "Built-in protocol-level simulator for trying everything with no mount attached",
      "GoTo with automatic pier-side choice, a GoTo flip margin, and a second catch-up pass",
      "Sidereal, lunar, solar and custom tracking (custom RA and Dec rates for comets and drift compensation)",
      "Multi-point alignment model (Nearest point or 3-point + nearest), with Dialog based or Append on sync modes",
      "Limits: separate East and West meridian limits, a horizon profile with a graph, park on limit, and auto meridian flip",
      "Time to horizon and time to meridian limit readouts",
      "Park to home, the current position or named positions; unpark with tracking; timed park",
      "Park position survives a power cycle, the same way EQMOD does it",
      "Separate RA and DEC slew rates (1x to 800x) and reverse switches",
      "Pulse guiding for PHD2, with separate RA and DEC rates, a minimum pulse width and DEC backlash",
      "Software PEC: learns the periodic error from the guider's RA corrections over two worm turns, then corrects it while tracking. Find phase lines the curve up again after a power-up without a park. On an EQ6-R it took RA guiding from about 1.0\" to 0.69\" RMS",
      "Built-in PPEC controls (train, on, off) for mounts that have it, with a PPEC Assistant that walks through checks, PHD2 settings, a baseline, training and playback, and recovers the axis if playback races or crawls",
      "Safety: a position watchdog that stops tracking on a jump or drift, an RA axis hard limit 8.5 h from home, limits that allow for the board coasting, a mount-lost fault, and a disk log with a sample of the mount's state every 5 seconds",
      "GPS: reads a USB GPS to fill in the site and check the PC clock",
      "Multiple saved sites, plus the pole star hour angle for polar alignment",
      "Live 3D mount view that follows the real axes (slide-out panel)",
      "ASCOM Alpaca server (ITelescopeV3) with UDP discovery: works with N.I.N.A., PHD2, SharpCap, Stellarium, Cartes du Ciel and other Alpaca clients",
      "Classic ASCOM driver that starts the app on demand, as EQMOD does",
      "Several programs can share the mount at once, like a hub",
      "Red night-vision mode"
    ],
    tags: ["windows", "sky-watcher", "ascom alpaca"],
    image: "images/mcc.png",
    links: {}
  },
  {
    code: "MOD-04",
    name: "Second Light AU",
    full: "Astrophotography gear marketplace",
    status: "online",
    category: "Community",
    summary: "An Australian marketplace for buying and selling pre-loved astrophotography gear, with prices in AUD and filters by state.",
    details: [
      "A marketplace where registered users buy and sell astrophotography equipment only, built for the Australian market: prices in AUD and filters by state and territory.",
      "Second Light doesn't handle sales. Buyers message sellers and pay them directly. Revenue comes from sellers."
    ],
    featuresTitle: "Business model",
    features: [
      "Listing fee: a percentage of the asking price, with a minimum and a cap (default 2%, A$2 minimum, A$40 cap).",
      "Paid upgrades: Featured, Home page spotlight and Bump.",
      "Launch mode: listing is free for everyone. Members who join during launch become Founding members, with upgrade credits and a lifetime discount on listing fees.",
      "After launch: each new member's first listing is free."
    ],
    tags: ["web", "australia", "marketplace"],
    image: "images/second-light.png",
    links: {}
  },
  {
    code: "MOD-05",
    name: "BPP",
    full: "Batch Photon Processor · v1.0.0",
    status: "online",
    category: "Processing",
    summary: "A PixInsight script that takes linear master lights through to stretched final images.",
    details: [
      "CAPAstro Image Processor: a PixInsight script for processing linear master lights to stretched final images.",
      "It works through seven steps in order, with an image preview alongside, and Process All runs the whole chain in one go."
    ],
    featuresTitle: "Processing steps",
    features: [
      "Load Image: OSC or narrowband, with optional GradientCorrection or GraXpert background extraction",
      "Deconvolution",
      "Color Calibration",
      "Contrast Enhancement",
      "Remove Stars",
      "Noise Reduction",
      "Stretch"
    ],
    tags: ["pixinsight", "script"],
    image: "images/bpp.webp",
    links: {}
  },
  {
    code: "MOD-06",
    name: "CAPBlink",
    full: "Sub-frame viewer and culling tool · v1.0.1",
    status: "online",
    category: "Analysis",
    summary: "A Blink-style sub-frame viewer and culling tool that runs in your browser. Your files never leave your PC.",
    details: [
      "A PixInsight Blink-style sub-frame viewer and culling tool that runs in a browser tab. Everything happens locally: your files are never uploaded."
    ],
    features: [
      "Mono and OSC frames. Bayer frames are debayered on the GPU using the BAYERPAT header, with a manual override.",
      "Grouped by filter. Frames are grouped by the FILTER keyword. Blinking, the arrow keys and the chart stay inside the current filter; PageUp/PageDown switch filters.",
      "Auto stretch (STF). Either each frame is stretched on its own, or one reference frame per filter sets the stretch for all, so clouds and gradients stand out.",
      "Fast blinking. Screen-sized previews are cached on the GPU. Zooming past them loads full resolution on demand, and neighbouring frames are loaded ahead.",
      "Stats. Median, noise (MAD), mean and standard deviation per frame, plus N.I.N.A.'s Stars[..] and HFR[..] values when they appear in file names. All are sortable and can be plotted.",
      "Culling. Mark frames with X or the ✕ in each row, or select several rows (Ctrl/Shift+click, Ctrl+A). Move rejects moves them into a rejected/ subfolder next to each file (Chrome / Edge). Export list downloads a list of rejected file names instead.",
      "Convenience. Light and dark themes, a resizable file list, and the last opened folder is remembered."
    ],
    tags: ["browser", "fits", "local only"],
    image: "images/capblink.webp",
    thumbPosition: "right center",
    links: {}
  },
  {
    code: "MOD-07",
    name: "FST",
    full: "Frame Selector Tool · v0.24e",
    status: "online",
    category: "Analysis",
    summary: "A PixInsight script that flags weak subframes by star count and HFR, lets you inspect them, and moves the rejects aside.",
    details: [
      "A PixInsight script for quickly culling astrophotography subframes. FST reads star count and HFR values embedded in your filenames, compares each frame against the average for its filter, flags the poor ones, lets you visually inspect them, and moves the rejects out of the way."
    ],
    features: [
      "Load frames — add individual files, or add a whole folder (scanned recursively).",
      "Per-filter analysis — average star count and HFR are calculated separately for each filter, so frames are only compared against others of the same filter. Frames without a Filter[] token are grouped as \"All\".",
      { text: "Flagging rules", items: [
        "Stars: flag if the star count is at or below N% of the filter average.",
        "HFR: flag if the HFR is N% or more above the filter average.",
        "Require both Stars AND HFR: only flag frames that fail both tests (otherwise either test is enough)."
      ] },
      "Filename match — flag files by exact name or substring.",
      "Results table — Reject checkbox, Filename, Filter, Stars, Stars %Avg, HFR, HFR %Avg, Score and Status columns; sortable ascending/descending.",
      { text: "Preview & playback", items: [
        "Built-in preview with an automatic median/MAD screen stretch (STF), cached for fast stepping.",
        "Step up/down through frames, or play through them at 0.0–1.0 s per frame, with a dedicated Stop button.",
        "Auto Inspect loads each frame into the preview as you move the selection.",
        "Inspect opens the selected frame in PixInsight."
      ] },
      "Safe removal — Remove moves checked frames into a Rejected_FST folder beside the originals (existing names are never overwritten). Enable Permanently delete to delete instead, after an extra confirmation.",
      "Remembers settings — thresholds, flag mode, filename match, window size and column widths persist between sessions."
    ],
    tags: ["pixinsight", "script", "culling"],
    image: "images/fst.webp",
    links: {}
  },
  {
    code: "MOD-08",
    name: "SuperMegaMosaic",
    full: "Super Mega Mosaic · v1.22",
    status: "online",
    category: "Processing",
    summary: "A PixInsight mosaic processor, accelerated by a Rust engine, that batch-processes master panels into a finished mosaic.",
    details: [
      "Super Mega Mosaic: a PixInsight mosaic processor accelerated by the Rust engine.",
      "The workflow runs in one window: add files, rename them or autodetect their filters, choose an output folder, pick processes and options, then process the batch."
    ],
    featuresTitle: "What's inside",
    features: [
      { text: "Processing chain (each step optional)", items: [
        "GraXpert, BlurXTerminator, ChannelCombination, NoiseXTerminator and StarXTerminator",
        "AutoBG, MAS stretch (Default or Mild) and SCNR with adjustable amount",
        "OSC mode, plus colour calibration with ColourCalib"
      ] },
      "Channel combinations (multi-select): SHO, HSO, HOS, SOH, OSH, OHS, RGB and Foraxx",
      { text: "Mosaic assembly", items: [
        "Reference panel and residual model (Guarded planar recommended), with adjustable feather width",
        "Reproject panels, harmonise backgrounds, weight by noise and low-frequency refinement",
        "Smart autocrop and a detailed report"
      ] },
      "mmm Rust engine (accelerated) with selectable blend modes, including Pyramid for best quality",
      "Superbatch, persistent settings and a live log"
    ],
    tags: ["pixinsight", "mosaic", "rust"],
    image: "images/supermegamosaic.png",
    links: {}
  }
];

(function () {
  "use strict";
  const KEY = "chotuTeacherCourse";
  const STEPS = ["teach", "act0", "act1", "practice", "mastery"];
  let save = { progress: {}, demoPremium: false };
  let current = null; // { unit, step, practice, pi, mastery, mi, correct, acted }
  let booted = false;

  function C() { return window.Chotu; }
  function sfx() { return window.ChotuSfx || { start(){}, clap(){}, pop(){}, chime(){}, coin(){}, bell(){}, correct(){}, wrong(){}, whoosh(){}, unlock(){}, tick(){}, rain(){} }; }
  function load() {
    try { const r = localStorage.getItem(KEY); if (r) save = Object.assign(save, JSON.parse(r)); } catch (e) {}
  }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} }

  function unitsFor(age) {
    const all = window.COURSE_UNITS || [];
    return all.filter((u) => u.level === age);
  }
  function unitById(id) { return (window.COURSE_UNITS || []).find((u) => u.id === id); }

  function isPremiumOn() {
    const st = C() && C().state;
    if (save.demoPremium) return true;
    if (st && (st.plan === "premium" || st.plan === "family" || st.plan === "trial")) {
      // trial opens previews already; still respect toggle for locked premium units on trial? Task: premium unlocked via demo toggle. Trial already opened premium previews. I'll allow trial + premium + family + toggle.
      if (st.plan === "premium" || st.plan === "family") return true;
    }
    return !!save.demoPremium;
  }

  function statusOf(u) {
    if (u.premium && !isPremiumOn()) return "premium-locked";
    const p = save.progress[u.id];
    if (p && p.done) return "done";
    // first basic unit of each subject unlocked; otherwise previous same-subject must be done
    const sibs = unitsFor(u.level).filter((x) => x.subject === u.subject && !x.premium === !u.premium).sort((a, b) => a.n - b.n);
    const prev = sibs.filter((x) => x.n < u.n).pop();
    if (!prev) return "open";
    if (save.progress[prev.id] && save.progress[prev.id].done) return "open";
    return "locked";
  }

  function counts(age) {
    const list = unitsFor(age).filter((u) => !u.premium);
    const done = list.filter((u) => save.progress[u.id] && save.progress[u.id].done).length;
    return { done, total: list.length };
  }

  function poseSrc(pose) {
    const map = {
      idle: "assets/chotu.png",
      wave: "assets/chotu-wave.png",
      clap: "assets/chotu-clap.png",
      point: "assets/chotu-point.png",
      listen: "assets/chotu-listen.png",
      jump: "assets/chotu-jump.png"
    };
    return map[pose] || map.idle;
  }

  function sceneHTML(scene) {
    const rain = Array.from({ length: 16 }, (_, i) =>
      '<span class="rain-drop" style="left:' + (4 + i * 6) + '%;animation-delay:' + (i * 0.09) + 's;animation-duration:' + (0.9 + (i % 3) * 0.2) + 's"></span>'
    ).join("");
    const layers = {
      market: '<div class="awning"></div><div class="crate"></div><div class="crate"></div><div class="ground"></div>',
      home: '<div class="window"></div><div class="ground"></div>',
      school: '<div class="chalk">s a t p</div><div class="ground"></div>',
      diwali: '<div class="diya-row"><span>🪔</span><span>🪔</span><span>🪔</span><span>🪔</span></div><div class="ground"></div>',
      monsoon: '<div class="cloud"></div><div class="cloud two"></div>' + rain + '<div class="ground"></div>'
    };
    return '<div class="scene scene-' + (scene || "home") + '">' + (layers[scene] || layers.home) + "</div>";
  }

  function actorHTML(pose, anim) {
    return '<div class="chotu-actor actor-' + (anim || pose || "bob") + '"><img alt="Chotu" src="' + poseSrc(pose || "idle") + '"></div>';
  }

  function renderMap() {
    load();
    const age = C().state.age;
    const root = C().$("#map-root");
    const prog = C().$("#map-progress");
    if (!root) return;
    const c = counts(age);
    const txt = C().txt;
    if (prog) prog.textContent = txt("This year: " + c.done + " of " + c.total + " Basic units done", "इस वर्ष: " + c.done + " / " + c.total + " बेसिक इकाई पूरी");
    const groups = [
      { key: "english", title: txt("English · 10 Basic units", "अंग्रेज़ी · 10 बेसिक इकाई") },
      { key: "maths", title: txt("Maths · 10 Basic units", "गणित · 10 बेसिक इकाई") },
      { key: "premium", title: txt("Premium units", "प्रीमियम इकाई") }
    ];
    root.innerHTML = "";
    groups.forEach((g) => {
      const list = unitsFor(age).filter((u) => g.key === "premium" ? u.premium : (u.subject === g.key && !u.premium));
      if (!list.length) return;
      const block = document.createElement("div");
      block.className = "map-block";
      block.innerHTML = "<h2>" + g.title + "</h2>";
      const grid = document.createElement("div");
      grid.className = "map-grid";
      list.sort((a, b) => a.n - b.n).forEach((u) => {
        const st = statusOf(u);
        const b = document.createElement("button");
        b.type = "button";
        b.className = "unit-card " + st;
        const mark = st === "done" ? "✓" : (st === "locked" || st === "premium-locked" ? "🔒" : String(u.n));
        const logic = u.logic ? '<span class="ulogic">🧩 ' + txt("Logic inside", "तर्क अंदर") + "</span>" : "";
        const prem = u.premium ? '<span class="tag-prem">' + C().t("premiumTag") + "</span> " : "";
        b.innerHTML = '<span class="unum">' + mark + "</span>" + prem + C().txt(u.titleEn, u.titleHi) + "<small>" + C().txt(u.shortEn || "", u.shortHi || "") + "</small>" + logic;
        b.addEventListener("click", () => {
          if (st === "locked") { C().toast(C().txt("Finish the unit before this first.", "पहले पिछली इकाई पूरी करो।")); return; }
          if (st === "premium-locked") { C().toast(C().txt("Unlock Premium on the plans screen to try this.", "इसे आज़माने के लिए योजना स्क्रीन पर प्रीमियम खोलो।")); return; }
          openUnit(u.id);
        });
        grid.appendChild(b);
      });
      block.appendChild(grid);
      root.appendChild(block);
    });
    updateHomeProgress();
  }

  function updateHomeProgress() {
    const el = C().$("#home-course-progress");
    if (!el || !C().state) return;
    const c = counts(C().state.age);
    el.textContent = C().txt(c.done + " / " + c.total + " units completed this year", "इस वर्ष " + c.done + " / " + c.total + " इकाई पूरी");
  }

  function openMap() {
    C().showScreen("map");
    renderMap();
  }

  function openUnit(id) {
    const u = unitById(id);
    if (!u) return;
    const practice = C().shuffle((u.practice || []).slice());
    const mastery = C().shuffle((u.mastery || u.practice || []).slice()).slice(0, u.masteryCount || 5);
    current = {
      unit: u, step: "teach",
      practice, pi: 0,
      mastery, mi: 0,
      correct: 0, answered: false,
      actIndex: 0, actDone: {}
    };
    C().showScreen("unit");
    drawUnit();
  }

  function stepList(u) {
    const acts = (u.activities || []).slice(0, 3);
    const names = [C().txt("Teach", "पढ़ाओ")];
    acts.forEach((a, i) => names.push(C().txt(a.titleEn || ("Play " + (i + 1)), a.titleHi || ("खेल " + (i + 1)))));
    names.push(C().txt("Practice", "अभ्यास"));
    names.push(C().txt("Star check", "स्टार जाँच"));
    return names;
  }

  function phaseIndex() {
    const u = current.unit;
    const nAct = Math.min((u.activities || []).length, 3);
    if (current.step === "teach") return 0;
    if (current.step === "activity") return 1 + current.actIndex;
    if (current.step === "practice") return 1 + nAct;
    return 1 + nAct + 1;
  }

  function drawSteps() {
    const box = C().$("#unit-steps");
    if (!box) return;
    const names = stepList(current.unit);
    const on = phaseIndex();
    box.innerHTML = names.map((n, i) => '<span class="' + (i < on ? "ok" : i === on ? "on" : "") + '">' + n + "</span>").join("");
  }

  function setBar(cur, total) {
    const bar = C().$("#unit-progress");
    const lab = C().$("#unit-progress-label");
    const t = Math.max(total, 1);
    if (bar) bar.style.width = Math.round((cur / t) * 100) + "%";
    if (lab) lab.textContent = cur + " / " + t;
  }

  function fb(ok, msg) {
    const el = C().$("#unit-feedback");
    if (!el) return;
    el.textContent = msg || (ok ? C().praise() : C().retry());
    el.className = "feedback " + (ok ? "ok" : "no");
    if (ok) sfx().correct(); else sfx().wrong();
  }
  function clearFb() {
    const el = C().$("#unit-feedback");
    if (el) { el.textContent = ""; el.className = "feedback"; }
  }

  function nextBtn(label, show) {
    const b = C().$("#btn-unit-next");
    const h = C().$("#btn-unit-home");
    if (h) h.classList.add("hidden");
    if (!b) return;
    b.classList.toggle("hidden", show === false);
    if (label) b.textContent = label;
  }

  function drawUnit() {
    drawSteps();
    clearFb();
    const stage = C().$("#unit-stage");
    if (!stage) return;
    const u = current.unit;
    const title = C().$("#top-title");
    if (title) title.textContent = C().txt(u.titleEn, u.titleHi);
    if (current.step === "teach") return drawTeach(stage, u);
    if (current.step === "activity") return drawActivity(stage, u.activities[current.actIndex], u);
    if (current.step === "practice") return drawQuestion(stage, current.practice[current.pi], current.pi, current.practice.length, "practice");
    if (current.step === "mastery") return drawQuestion(stage, current.mastery[current.mi], current.mi, current.mastery.length, "mastery");
    if (current.step === "result") return drawResult(stage);
  }

  function drawTeach(stage, u) {
    const t = u.teach || {};
    stage.innerHTML = '<div class="teach-stage">' + sceneHTML(u.scene) + actorHTML(t.pose || "wave", t.anim || "wave") +
      '<p class="teach-caption"><span class="unit-link">' + C().txt("Chotu teaches", "छोटू सिखाते हैं") + "</span>" + C().txt(t.capEn, t.capHi) + "</p></div>" +
      '<button type="button" class="btn btn-sun" id="btn-teach-hear">' + C().txt("Hear Chotu", "छोटू को सुनो") + "</button>";
    setBar(1, 1);
    nextBtn(C().txt("Let's play", "चलो खेलें"), true);
    const hear = C().$("#btn-teach-hear");
    const speak = () => C().speakRaw(C().txt(t.speakEn, t.speakHi));
    if (hear) hear.addEventListener("click", speak);
    speak();
    if (u.scene === "monsoon") sfx().rain();
    if (u.scene === "diwali") sfx().chime();
    if (u.scene === "market") sfx().bell();
  }

  function optionWrap(options, onPick) {
    return C().optionButtons(options, (val, btn, wrap) => onPick(val, btn, wrap));
  }

  function markOk(wrap, btn, ok) { C().markAnswer(wrap, btn, ok); }

  function drawActivity(stage, act, u) {
    if (!act) { advance(); return; }
    current.answered = !!current.actDone[current.actIndex];
    const title = "<p class='sub'>" + C().txt(act.titleEn || "", act.titleHi || "") + "</p>";
    if (act.promptEn) {
      C().speakRaw(C().txt(act.speakEn || act.promptEn, act.speakHi || act.promptHi || act.promptEn));
    }
    setBar(current.actIndex + 1, (u.activities || []).length);
    nextBtn(C().txt("Next", "आगे"), true);

    if (act.type === "match") return drawMatch(stage, act, title);
    if (act.type === "sequence") return drawSequence(stage, act, title);
    if (act.type === "sort") return drawSort(stage, act, title);
    if (act.type === "ten-frame") return drawFrame(stage, act, title);
    if (act.type === "word-build") return drawBuild(stage, act, title);
    if (act.type === "compare") return drawCompare(stage, act, title);
    if (act.type === "clap") return drawClap(stage, act, title);
    if (act.type === "trace") return drawTrace(stage, act, title);
    // default mcq / count / story / pattern
    stage.innerHTML = title + visual(act);
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(act.answer);
      markOk(wrap, btn, ok);
      fb(ok);
      if (ok) { current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
    };
    stage.appendChild(optionWrap(act.options || [], onPick));
  }

  function visual(act) {
    if (act.showEmoji) return '<div class="prompt-card"><span style="font-size:2.6rem">' + act.showEmoji + "</span></div>";
    if (act.sentence) return '<div class="prompt-card"><p class="sentence">' + act.sentence + "</p></div>";
    if (act.pattern) return '<div class="pattern-row">' + act.pattern.map((p) => '<div class="pat' + (p === "?" ? " mystery" : "") + '">' + p + "</div>").join("") + "</div>";
    if (act.objects) {
      const n = Number(act.objects.n || 0);
      const e = act.objects.emoji || "🥭";
      return '<div class="prompt-card">' + e.repeat(Math.max(0, n)).split("").map(() => "").join("") + Array.from({ length: n }, () => '<span style="font-size:2rem">' + e + "</span>").join("") + "</div>";
    }
    if (act.qEn) return "<p class='sub'>" + C().txt(act.qEn, act.qHi || act.qEn) + "</p>";
    return "";
  }

  function drawMatch(stage, act, title) {
    const pairs = C().shuffle((act.pairs || []).slice());
    const left = C().shuffle(pairs.map((p) => ({ side: "l", key: p.key, label: C().txt(p.leftEn, p.leftHi) })));
    const right = C().shuffle(pairs.map((p) => ({ side: "r", key: p.key, label: C().txt(p.rightEn, p.rightHi) })));
    stage.innerHTML = title + "<p class='hint'>" + C().txt("Tap a pair that belongs together.", "जोड़ी पर टैप करो।") + "</p><div class='match-grid' id='match-grid'></div>";
    const grid = C().$("#match-grid");
    let pick = null, found = 0;
    function card(item) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "match-card"; b.textContent = item.label;
      b.addEventListener("click", () => {
        if (b.classList.contains("paired")) return;
        if (!pick) { pick = { item, b }; b.classList.add("on"); return; }
        if (pick.b === b) { b.classList.remove("on"); pick = null; return; }
        const ok = pick.item.key === item.key && pick.item.side !== item.side;
        if (ok) {
          pick.b.classList.add("paired"); b.classList.add("paired");
          pick.b.classList.remove("on"); found++; sfx().pop();
          if (found >= pairs.length) { fb(true, C().txt("All pairs matched!", "सभी जोड़ियाँ मिल गईं!")); current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
        } else { fb(false); pick.b.classList.remove("on"); }
        pick = null;
      });
      return b;
    }
    left.concat(right).forEach((it) => grid.appendChild(card(it)));
  }

  function drawSequence(stage, act, title) {
    const items = C().shuffle((act.items || []).slice());
    const order = act.order || items.slice();
    stage.innerHTML = title + "<p class='hint'>" + C().txt("Tap in the right order.", "सही क्रम में टैप करो।") + "</p><div class='seq-row' id='seq-row'></div><p class='hint' id='seq-built'></p>";
    const row = C().$("#seq-row");
    let built = [];
    items.forEach((it) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "seq-item"; b.textContent = typeof it === "string" ? it : C().txt(it.en, it.hi);
      const val = typeof it === "string" ? it : it.id;
      b.addEventListener("click", () => {
        if (b.classList.contains("on")) return;
        built.push(val); b.classList.add("on");
        const lab = C().$("#seq-built"); if (lab) lab.textContent = built.join(" → ");
        if (built.length === order.length) {
          const ok = built.every((v, i) => String(v) === String(order[i]));
          fb(ok, ok ? C().txt("Yes, that is the order!", "हाँ, यही क्रम है!") : C().retry());
          if (ok) { current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
          else { built = []; C().$$("#seq-row .seq-item").forEach((el) => el.classList.remove("on")); if (lab) lab.textContent = ""; }
        }
      });
      row.appendChild(b);
    });
  }

  function drawSort(stage, act, title) {
    const groups = act.groups || [];
    stage.innerHTML = title + "<div class='sort-row' id='sort-groups'></div><div class='sort-row' id='sort-items'></div>";
    const gbox = C().$("#sort-groups");
    const ibox = C().$("#sort-items");
    let placed = 0, total = 0;
    groups.forEach((g) => {
      const z = document.createElement("div");
      z.className = "drop-zone"; z.setAttribute("data-group", g.id);
      z.innerHTML = "<strong>" + C().txt(g.en, g.hi) + "</strong>";
      gbox.appendChild(z);
    });
    const items = C().shuffle([].concat.apply([], groups.map((g) => (g.items || []).map((it) => ({ group: g.id, label: typeof it === "string" ? it : C().txt(it.en, it.hi) })))));
    total = items.length;
    items.forEach((it) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "sort-item"; b.textContent = it.label;
      b.addEventListener("click", () => {
        C().$$("#sort-items .sort-item").forEach((el) => el.classList.remove("on"));
        b.classList.add("on"); b._group = it.group;
        stage._sortPick = b;
      });
      ibox.appendChild(b);
    });
    C().$$("#sort-groups .drop-zone").forEach((z) => {
      z.addEventListener("click", () => {
        const b = stage._sortPick; if (!b) return;
        const ok = b._group === z.getAttribute("data-group");
        if (ok) { z.appendChild(b); b.classList.remove("on"); placed++; stage._sortPick = null; sfx().pop();
          if (placed >= total) { fb(true, C().txt("Sorted well!", "बहुत अच्छा छाँटा!")); current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
        } else fb(false);
      });
    });
  }

  function drawFrame(stage, act, title) {
    const filled = act.filled || 0;
    const ask = act.ask || "howmany";
    let cells = "";
    for (let i = 0; i < 10; i++) cells += '<div class="frame-cell">' + (i < filled ? '<span class="dot"></span>' : "") + "</div>";
    stage.innerHTML = title + '<div class="frame-box">' + cells + "</div><p class='sub'>" + C().txt(act.qEn, act.qHi) + "</p>";
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(act.answer);
      markOk(wrap, btn, ok); fb(ok);
      if (ok) { current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
    };
    stage.appendChild(optionWrap(act.options || [], onPick));
  }

  function drawBuild(stage, act, title) {
    const tiles = act.tiles || [];
    const word = act.word;
    stage.innerHTML = title + "<p class='hint'>" + C().txt("Tap the sounds in order to build the word.", "शब्द बनाने के लिए ध्वनियाँ क्रम से टैप करो।") + "</p><div class='tile-row' id='build-tiles'></div><p class='sub' id='build-out'></p>";
    const row = C().$("#build-tiles");
    let out = [];
    C().shuffle(tiles.slice()).forEach((t) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "tile sound-tile"; b.textContent = t;
      b.addEventListener("click", () => {
        if (b.classList.contains("used")) return;
        out.push(t); b.classList.add("used");
        const el = C().$("#build-out"); if (el) el.textContent = out.join("-");
        if (out.length === tiles.length) {
          const ok = out.join("") === (act.order || tiles).join("");
          fb(ok, ok ? word : C().retry());
          if (ok) { current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
          else { out = []; C().$$("#build-tiles .tile").forEach((el) => el.classList.remove("used")); if (el) el.textContent = ""; }
        }
      });
      row.appendChild(b);
    });
  }

  function drawCompare(stage, act, title) {
    stage.innerHTML = title + '<div class="compare-row" id="compare-row"></div>';
    const row = C().$("#compare-row");
    (act.items || []).forEach((it) => {
      const d = document.createElement("button");
      d.type = "button"; d.className = "compare-item";
      const h = 20 + (it.size || 1) * 18;
      d.innerHTML = '<div class="bar" style="height:' + h + 'px;background:' + (it.color || "var(--sky)") + '"></div>' + (it.emoji || "") + "<div>" + C().txt(it.en, it.hi) + "</div>";
      d.addEventListener("click", () => {
        const ok = String(it.id) === String(act.answer);
        fb(ok);
        if (ok) { current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
      });
      row.appendChild(d);
    });
  }

  function drawClap(stage, act, title) {
    const beats = act.beats || 3;
    stage.innerHTML = title + "<p class='hint'>" + C().txt("Clap with Chotu. Tap the button " + beats + " times.", "छोटू के साथ ताली बजाओ। बटन " + beats + " बार दबाओ।") + "</p>" +
      '<div class="teach-stage" style="min-height:200px">' + sceneHTML(current.unit.scene) + actorHTML("clap", "clap") + "</div>" +
      '<button type="button" class="btn btn-primary pulse-btn" id="clap-btn">👏</button><p class="sub" id="clap-count">0 / ' + beats + "</p>";
    let n = 0;
    C().$("#clap-btn").addEventListener("click", () => {
      n++; sfx().clap();
      const el = C().$("#clap-count"); if (el) el.textContent = n + " / " + beats;
      if (n === beats) { fb(true, C().txt("Great clapping!", "बहुत बढ़िया तालियाँ!")); current.actDone[current.actIndex] = true; current.answered = true; C().addStars(1); }
    });
  }

  function drawTrace(stage, act, title) {
    stage.innerHTML = title + "<p class='hint'>" + C().txt("Trace the sound you already know, then tap Next.", "जानी हुई ध्वनि का रेखाचित्र बनाओ, फिर आगे दबाओ।") + "</p>" +
      "<p class='sub' style='font-size:3rem;font-weight:700'>" + (act.glyph || "s") + "</p>" +
      '<canvas id="mini-slate" width="320" height="200" style="width:100%;background:#2a2a2a;border-radius:16px;touch-action:none"></canvas>' +
      '<button type="button" class="btn btn-white" id="mini-clear">' + C().txt("Clear", "मिटाओ") + "</button>";
    const c = C().$("#mini-slate");
    const ctx = c.getContext("2d");
    ctx.strokeStyle = "#f4f1e8"; ctx.lineWidth = 6; ctx.lineCap = "round";
    let drawing = false, last = null;
    function pos(e) {
      const r = c.getBoundingClientRect();
      const p = e.touches ? e.touches[0] : e;
      return { x: (p.clientX - r.left) * (c.width / r.width), y: (p.clientY - r.top) * (c.height / r.height) };
    }
    function start(e) { drawing = true; last = pos(e); e.preventDefault(); }
    function move(e) {
      if (!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); last = p; e.preventDefault();
    }
    function end() { drawing = false; current.actDone[current.actIndex] = true; current.answered = true; }
    c.addEventListener("pointerdown", start); c.addEventListener("pointermove", move);
    c.addEventListener("pointerup", end); c.addEventListener("pointerleave", end);
    C().$("#mini-clear").addEventListener("click", () => { ctx.clearRect(0, 0, c.width, c.height); });
  }

  function drawQuestion(stage, item, idx, total, kind) {
    if (!item) { advance(); return; }
    current.answered = false;
    setBar(idx + 1, total);
    nextBtn(C().txt("Next", "आगे"), true);
    const q = "<p class='sub'>" + C().txt(item.qEn, item.qHi) + "</p>" + visual(item);
    stage.innerHTML = q;
    C().speakRaw(C().txt(item.speakEn || item.qEn, item.speakHi || item.qHi));
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(item.answer);
      markOk(wrap, btn, ok); fb(ok);
      if (!current.answered && ok) { current.correct += 1; C().addStars(1); }
      current.answered = true;
      item._ok = ok;
    };
    stage.appendChild(optionWrap(item.options || [], onPick));
  }

  function drawResult(stage) {
    const need = current.unit.masteryNeed || 4;
    const got = current.correct;
    const total = current.mastery.length;
    const pass = got >= need;
    stage.innerHTML = '<div class="mastery-result">' + actorHTML(pass ? "jump" : "listen", pass ? "jump" : "listen") +
      '<p class="big">' + (pass ? "⭐" : "🌱") + "</p><p class='sub'>" +
      (pass ? C().txt("You did it! The next unit is open.", "शाबाश! अगली इकाई खुल गई।")
            : C().txt("Almost. Let's try the star check again.", "लगभग हो गया। स्टार जाँच फिर से करो।")) +
      "</p><p class='hint'>" + got + " / " + total + "</p></div>";
    setBar(got, total);
    if (pass) {
      save.progress[current.unit.id] = { done: true, score: got, at: Date.now() };
      persist(); sfx().unlock();
      C().speakRaw(C().txt("You did it! The next unit is open.", "शाबाश! अगली इकाई खुल गई।"));
      nextBtn(C().txt("Back to the map", "मानचित्र पर जाएँ"), true);
      const h = C().$("#btn-unit-home"); if (h) h.classList.remove("hidden");
    } else {
      C().speakRaw(C().txt("Let's try the star check again.", "स्टार जाँच फिर से करते हैं।"));
      nextBtn(C().txt("Try again", "फिर कोशिश करो"), true);
    }
    updateHomeProgress();
  }

  function advance() {
    if (!current) return;
    const u = current.unit;
    const nAct = (u.activities || []).length;
    if (current.step === "teach") {
      current.step = nAct ? "activity" : "practice"; current.actIndex = 0; drawUnit(); return;
    }
    if (current.step === "activity") {
      if (current.actIndex < nAct - 1) { current.actIndex += 1; drawUnit(); return; }
      current.step = "practice"; current.pi = 0; current.correct = 0; drawUnit(); return;
    }
    if (current.step === "practice") {
      if (current.pi < current.practice.length - 1) { current.pi += 1; drawUnit(); return; }
      current.step = "mastery"; current.mi = 0; current.correct = 0; drawUnit(); return;
    }
    if (current.step === "mastery") {
      if (current.mi < current.mastery.length - 1) { current.mi += 1; drawUnit(); return; }
      current.step = "result"; drawUnit(); return;
    }
    if (current.step === "result") {
      const need = u.masteryNeed || 4;
      if (current.correct >= need) { openMap(); return; }
      current.step = "mastery";
      current.mastery = C().shuffle((u.mastery || u.practice || []).slice()).slice(0, u.masteryCount || 5);
      current.mi = 0; current.correct = 0; drawUnit();
    }
  }

  function setPremium(on) {
    save.demoPremium = !!on;
    persist();
    const t = C().$("#toggle-premium");
    if (t) t.checked = save.demoPremium;
    if (C().state && C().state.screen === "map") renderMap();
  }

  function boot() {
    if (booted) { updateHomeProgress(); return; }
    booted = true;
    load();
    const t = C().$("#toggle-premium");
    if (t) {
      t.checked = !!save.demoPremium;
      t.addEventListener("change", () => setPremium(t.checked));
    }
    const mapBtn = C().$("#card-map");
    if (mapBtn) mapBtn.addEventListener("click", openMap);
    const next = C().$("#btn-unit-next");
    if (next) next.addEventListener("click", advance);
    const home = C().$("#btn-unit-home");
    if (home) home.addEventListener("click", openMap);
    // subject cards open the map
    ["card-english", "card-maths", "card-logic"].forEach((id) => {
      const b = C().$("#" + id);
      if (b) b.addEventListener("click", (e) => { e.stopImmediatePropagation?.(); openMap(); }, true);
    });
    updateHomeProgress();
  }

  window.ChotuCourse = {
    boot, openMap, openUnit, renderMap, updateHomeProgress, setPremium,
    isPremiumOn, statusOf, unitsFor, counts,
    onI18n() { if (C().state.screen === "map") renderMap(); if (C().state.screen === "home") updateHomeProgress(); },
    onScreen(id) { if (id === "map") renderMap(); if (id === "home") updateHomeProgress(); }
  };
  if (window.Chotu) window.ChotuCourse.boot();
})();

(function () {
  "use strict";
  const KEY = "chotuTeacherCourse";
  const STEPS = ["teach", "act0", "act1", "practice", "mastery"];
  let save = { progress: {}, demoPremium: false };
  let current = null; // { unit, step, practice, pi, mastery, mi, correct, acted }
  let booted = false;
  let mapFilter = null; // null = whole course, or "english" | "maths" | "logic"
  const UI = () => window.ChotuUI;

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

  function subjectTitle(f) {
    const txt = C().txt;
    if (f === "english") return txt("English", "अंग्रेज़ी");
    if (f === "maths") return txt("Maths", "गणित");
    if (f === "logic") return txt("Thinking & Logic", "सोच और तर्क");
    return txt("Course map", "कोर्स मानचित्र");
  }

  function renderMap() {
    load();
    const age = C().state.age;
    const root = C().$("#map-root");
    const prog = C().$("#map-progress");
    if (!root) return;
    const c = counts(age);
    const txt = C().txt;
    const top = C().$("#top-title");
    if (top && C().state.screen === "map") top.textContent = subjectTitle(mapFilter);
    if (prog) prog.textContent = txt("This year: " + c.done + " of " + c.total + " Basic units done", "इस वर्ष: " + c.done + " / " + c.total + " बेसिक इकाई पूरी");
    // subject tabs
    const tabs = C().$("#map-tabs");
    if (tabs) {
      const defs = [[null, "🗺️ " + txt("All", "सब")], ["english", "🔤 " + txt("English", "अंग्रेज़ी")], ["maths", "🔢 " + txt("Maths", "गणित")], ["logic", "🧩 " + txt("Logic", "तर्क")]];
      tabs.innerHTML = "";
      defs.forEach(([key, label]) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "subject-tab" + (mapFilter === key ? " on" : "");
        b.setAttribute("data-subject", key || "all");
        b.textContent = label;
        b.addEventListener("click", () => { mapFilter = key; renderMap(); });
        tabs.appendChild(b);
      });
      const how = document.createElement("button");
      how.type = "button"; how.className = "howto-link"; how.id = "btn-howto";
      how.textContent = "❓ " + txt("How to play with Chotu", "छोटू के साथ कैसे खेलें");
      how.addEventListener("click", () => UI().howTo(() => {}));
      tabs.appendChild(how);
    }
    const groups = [
      { key: "english", title: txt("English · 10 Basic units", "अंग्रेज़ी · 10 बेसिक इकाई") },
      { key: "maths", title: txt("Maths · 10 Basic units", "गणित · 10 बेसिक इकाई") },
      { key: "logic", title: txt("Thinking & Logic units", "सोच और तर्क की इकाइयाँ") },
      { key: "premium", title: txt("Premium units", "प्रीमियम इकाई") }
    ];
    const show = (g) => mapFilter === null ? g.key !== "logic" : g.key === mapFilter;
    root.innerHTML = "";
    groups.filter(show).forEach((g) => {
      const list = unitsFor(age).filter((u) => g.key === "premium" ? u.premium : g.key === "logic" ? (u.logic && !u.premium) : (u.subject === g.key && !u.premium));
      if (!list.length) return;
      const block = document.createElement("div");
      block.className = "map-block"; block.setAttribute("data-block", g.key);
      block.innerHTML = "<h2>" + g.title + "</h2>";
      const grid = document.createElement("div");
      grid.className = "map-grid";
      let marked = false;
      list.sort((a, b) => (a.subject === b.subject ? 0 : a.subject === "english" ? -1 : 1) || a.n - b.n).forEach((u) => {
        const st = statusOf(u);
        const b = document.createElement("button");
        b.type = "button";
        b.className = "unit-card " + st + (st === "open" && !marked ? " next" : "");
        if (st === "open") marked = true;
        b.setAttribute("data-unit", u.id); b.setAttribute("data-subject", u.subject);
        const mark = st === "done" ? "✓" : (st === "locked" || st === "premium-locked" ? "🔒" : String(u.n));
        const logic = u.logic ? '<span class="ulogic">🧩 ' + txt("Logic inside", "तर्क अंदर") + "</span>" : "";
        const prem = u.premium ? '<span class="tag-prem">' + C().t("premiumTag") + "</span> " : "";
        const subj = g.key === "logic" ? '<span class="usubj">' + (u.subject === "maths" ? txt("Maths", "गणित") : txt("English", "अंग्रेज़ी")) + "</span>" : "";
        b.innerHTML = '<span class="unum">' + mark + "</span>" + prem + subj + C().txt(u.titleEn, u.titleHi) + "<small>" + C().txt(u.shortEn || "", u.shortHi || "") + "</small>" + logic;
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

  function openMap(subject) {
    mapFilter = (subject === "english" || subject === "maths" || subject === "logic") ? subject : null;
    C().showScreen("map");
    renderMap();
  }

  function buildDecks(u, avoid) {
    const pool = UI().dedupe(u.practice || []);
    pool.forEach((it, i) => { if (!it.id) it.id = u.id + "-p" + i; delete it._order; });
    const mc = Math.min(u.masteryCount || 4, Math.max(3, Math.floor(pool.length / 3)));
    const pc = Math.max(0, Math.min(u.practiceCount || 6, pool.length - mc));
    let deck = C().shuffle(pool);
    if (avoid && avoid.size) {
      const fresh = deck.filter((x) => !avoid.has(x.id)), used = deck.filter((x) => avoid.has(x.id));
      deck = fresh.concat(used);
    }
    return { pool, practice: deck.slice(0, pc), mastery: deck.slice(pc, pc + mc) };
  }

  function openUnit(id) {
    const u = unitById(id);
    if (!u) return;
    const d = buildDecks(u);
    current = {
      unit: u, step: "objective",
      practice: d.practice, pi: 0,
      mastery: d.mastery, mi: 0,
      correct: 0, answered: false,
      actIndex: 0, actDone: {}, actItems: {},
      session: { lastPos: -1 }, used: new Set()
    };
    if (!save.progress[u.id]) { save.progress[u.id] = { started: true, at: Date.now() }; persist(); }
    C().showScreen("unit");
    const stage = C().$("#unit-stage");
    if (!UI().howToSeen()) {
      if (stage) stage.innerHTML = "";
      nextBtn("", false);
      UI().howTo(() => { if (current && current.unit === u && C().state.screen === "unit") drawUnit(); });
    } else drawUnit();
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
    if (current.step === "objective") return -1;
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

  function setBar(cur, total, label) {
    const bar = C().$("#unit-progress");
    const lab = C().$("#unit-progress-label");
    const dots = C().$("#unit-dots");
    const t = Math.max(total, 1);
    if (bar) bar.style.width = Math.round((cur / t) * 100) + "%";
    if (lab) lab.textContent = cur + " / " + t;
    if (dots) {
      let h = "";
      for (let i = 1; i <= t; i++) h += '<i class="' + (i < cur ? "ok" : i === cur ? "on" : "") + '"></i>';
      const words = label ? C().txt(label[0], label[1]) + " " : "";
      dots.innerHTML = '<div class="dots-row">' + h + '</div><div class="dots-label">' + words + C().txt(cur + " of " + t, t + " में से " + cur) + "</div>";
    }
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
    if (!current) return;
    UI().stopRec();
    drawSteps();
    clearFb();
    const stage = C().$("#unit-stage");
    if (!stage) return;
    const u = current.unit;
    const title = C().$("#top-title");
    if (title) title.textContent = C().txt(u.titleEn, u.titleHi);
    const dots = C().$("#unit-dots"); if (dots && current.step === "objective") dots.innerHTML = "";
    if (current.step === "objective") return drawObjective(stage, u);
    if (current.step === "teach") return drawTeach(stage, u);
    if (current.step === "activity") return drawActivity(stage, u.activities[current.actIndex], u);
    if (current.step === "practice") return drawQuestion(stage, current.practice[current.pi], current.pi, current.practice.length, "practice");
    if (current.step === "mastery") return drawQuestion(stage, current.mastery[current.mi], current.mi, current.mastery.length, "mastery");
    if (current.step === "result") return drawResult(stage);
  }

  function objText(u) { return C().txt(u.objEn || u.titleEn, u.objHi || u.titleHi); }
  function sumText(u) { return C().txt(u.sumEn || u.titleEn, u.sumHi || u.titleHi); }
  function goalText(u) { return C().txt(u.goalEn || ("Learns: " + u.titleEn), u.goalHi || ("सीखना: " + u.titleHi)); }

  function drawObjective(stage, u) {
    const head = C().txt("Today we will learn:", "आज हम सीखेंगे:");
    const goal = objText(u);
    const subj = u.subject === "maths" ? C().txt("Maths", "गणित") : u.subject === "english" ? C().txt("English", "अंग्रेज़ी") : C().txt("Premium", "प्रीमियम");
    const spoken = head.replace(":", ".") + " " + goal + ".";
    stage.innerHTML = '<div class="obj-card"><img class="obj-chotu" src="assets/chotu-point.png" alt="Chotu pointing">' +
      '<p class="obj-head">🎯 ' + head + '</p><p class="obj-big">' + UI().esc(goal) + '</p>' +
      '<p class="obj-unit">' + subj + " · " + C().txt("Unit ", "इकाई ") + u.n + "</p></div>";
    stage.appendChild(UI().sayAgainBtn(spoken));
    const dots = C().$("#unit-dots"); if (dots) dots.innerHTML = "";
    nextBtn(C().txt("Let's start!", "चलो शुरू करें!"), true);
    C().speakRaw(spoken);
  }

  function drawTeach(stage, u) {
    const t = u.teach || {};
    const cap = C().txt(t.capEn, t.capHi);
    const spoken = C().txt(t.speakEn, t.speakHi || t.speakEn);
    stage.innerHTML = '<div class="teach-stage">' + sceneHTML(u.scene) + actorHTML(t.pose || "wave", t.anim || "wave") + "</div>";
    stage.appendChild(UI().banner(cap, spoken, () => { if (t.sound) UI().playSound(t.sound); }));
    setBar(1, 1, ["Learn", "सीखो"]);
    nextBtn(C().txt("Let's play", "चलो खेलें"), true);
    if (u.scene === "monsoon") sfx().rain();
    if (u.scene === "diwali") sfx().chime();
    if (u.scene === "market") sfx().bell();
    if (t.sound) UI().playSound(t.sound);
    setTimeout(() => { if (current && current.step === "teach" && C().state.screen === "unit") C().speakRaw(spoken); }, t.sound ? 900 : 50);
  }

  function optionWrap(options, onPick) {
    return C().optionButtons(options, (val, btn, wrap) => onPick(val, btn, wrap));
  }

  function markOk(wrap, btn, ok) { C().markAnswer(wrap, btn, ok); }

  function showNext() { nextBtn(null, true); }
  function actFinished() { current.actDone[current.actIndex] = true; current.answered = true; showNext(); }

  function defaultInstr(act) {
    const m = {
      match: ["Tap two things that go together.", "साथ वाली दो चीज़ों पर टैप करो।"],
      sequence: ["Tap in the right order.", "सही क्रम में टैप करो।"],
      sort: ["Tap a thing. Then tap its box.", "एक चीज़ पर टैप करो। फिर उसके डिब्बे पर टैप करो।"],
      "ten-frame": ["Look at the frame. Tap the answer.", "फ्रेम देखो। जवाब पर टैप करो।"],
      "word-build": ["Tap the sounds in order.", "आवाज़ें क्रम से टैप करो।"],
      compare: ["Tap the right one.", "सही वाले पर टैप करो।"],
      clap: ["Clap with Chotu.", "छोटू के साथ ताली बजाओ।"],
      trace: ["Trace with your finger.", "उँगली से बनाओ।"]
    };
    return m[act.type] || ["Tap the right answer.", "सही जवाब पर टैप करो।"];
  }

  function drawActivity(stage, act, u) {
    if (!act) { advance(); return; }
    current.answered = !!current.actDone[current.actIndex];
    const nAct = Math.min((u.activities || []).length, 3);
    setBar(current.actIndex + 1, nAct, ["Play", "खेल"]);
    nextBtn(C().txt("Next", "आगे"), !!current.actDone[current.actIndex]);
    const d = defaultInstr(act);
    const instr = C().txt(act.instrEn || act.promptEn || d[0], act.instrHi || act.promptHi || d[1]);
    const spoken = C().txt(act.speakEn || act.instrEn || act.promptEn || d[0], act.speakHi || act.instrHi || act.promptHi || d[1]);

    if (act.type === "say") {
      UI().sayTask(stage, {
        instr, spoken, word: act.word, emoji: act.emoji, accept: act.accept,
        micLabel: C().txt(act.micEn || "Tap and say", act.micHi || "टैप करो और बोलो"),
        onDone: actFinished
      });
      if (current.actDone[current.actIndex]) { const mic = stage.querySelector(".mic-big"); if (mic) mic.classList.add("done"); }
      return;
    }
    if (!act.type || act.type === "mcq" || act.type === "count" || act.type === "story" || act.type === "pattern") {
      const item = current.actItems[current.actIndex] || (current.actItems[current.actIndex] = Object.assign({}, act, {
        instrEn: act.instrEn || act.qEn || act.promptEn || act.titleEn, instrHi: act.instrHi || act.qHi || act.promptHi || act.titleHi,
        qEn: act.qEn || act.promptEn, qHi: act.qHi || act.promptHi
      }));
      UI().ask(stage, item, {
        session: current.session, visualHTML: visual(act), qid: current.unit.id + "-act" + current.actIndex,
        onDone: () => { actFinished(); }
      });
      return;
    }
    stage.innerHTML = "";
    const holder = document.createElement("div");
    stage.appendChild(UI().banner(instr, spoken));
    stage.appendChild(holder);
    const fn = { match: drawMatch, sequence: drawSequence, sort: drawSort, "ten-frame": drawFrame, "word-build": drawBuild, compare: drawCompare, clap: drawClap, trace: drawTrace }[act.type];
    if (!fn) { advance(); return; }
    fn(holder, act, "");
    holder.querySelectorAll("p.hint").forEach((p, i) => { if (i === 0 && (act.type === "clap" || act.type === "trace")) p.remove(); });
    const target = holder.querySelector(".match-card, .seq-item, .sort-item, .compare-item, .tile, #clap-btn, .choice-btn");
    UI().hand(target, stage);
    C().speakRaw(spoken);
  }

  function visual(act) {
    if (act.showEmoji) return '<div class="prompt-card"><span class="big-emoji">' + act.showEmoji + "</span></div>";
    if (act.sentence) return '<div class="prompt-card"><p class="sentence">' + act.sentence + "</p></div>";
    if (act.pattern) return '<div class="pattern-row">' + act.pattern.map((p) => '<div class="pat' + (p === "?" ? " mystery" : "") + '">' + p + "</div>").join("") + "</div>";
    if (act.objects) {
      const n = Number(act.objects.n || 0);
      const e = act.objects.emoji || "🥭";
      return '<div class="prompt-card">' + e.repeat(Math.max(0, n)).split("").map(() => "").join("") + Array.from({ length: n }, () => '<span style="font-size:2rem">' + e + "</span>").join("") + "</div>";
    }
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
          if (found >= pairs.length) { fb(true, C().txt("All pairs matched!", "सभी जोड़ियाँ मिल गईं!")); actFinished(); C().addStars(1); }
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
          if (ok) { actFinished(); C().addStars(1); }
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
          if (placed >= total) { fb(true, C().txt("Sorted well!", "बहुत अच्छा छाँटा!")); actFinished(); C().addStars(1); }
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
      if (ok) { actFinished(); C().addStars(1); }
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
          if (ok) { actFinished(); C().addStars(1); }
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
        if (ok) { actFinished(); C().addStars(1); }
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
      if (n === beats) { fb(true, C().txt("Great clapping!", "बहुत बढ़िया तालियाँ!")); actFinished(); C().addStars(1); }
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
    function end() { drawing = false; actFinished(); }
    c.addEventListener("pointerdown", start); c.addEventListener("pointermove", move);
    c.addEventListener("pointerup", end); c.addEventListener("pointerleave", end);
    C().$("#mini-clear").addEventListener("click", () => { ctx.clearRect(0, 0, c.width, c.height); });
  }

  function drawQuestion(stage, item, idx, total, kind) {
    if (!item) { advance(); return; }
    current.answered = false;
    setBar(idx + 1, total, kind === "mastery" ? ["Star check", "स्टार जाँच"] : ["Question", "प्रश्न"]);
    nextBtn(C().txt("Next", "आगे"), false);
    current.used.add(item.id);
    UI().ask(stage, item, {
      session: current.session, visualHTML: visual(item), qid: item.id,
      onDone: (res) => {
        current.answered = true;
        if (res.ok && kind === "mastery") current.correct += 1;
        item._ok = res.ok;
        showNext();
      }
    });
  }

  function drawResult(stage) {
    const total = current.mastery.length;
    const need = Math.max(1, Math.ceil(total * 0.75));
    const got = current.correct;
    const pass = got >= need;
    const u = current.unit;
    const stars = pass ? (got === total ? 3 : 2) : 0;
    setBar(got, total, ["Right", "सही"]);
    const starRow = [1, 2, 3].map((i) => '<span class="rs ' + (i <= stars ? "on" : "") + '">⭐</span>').join("");
    if (pass) {
      const learnt = C().txt("You learnt:", "तुमने सीखा:");
      const spoken = learnt + " " + sumText(u);
      stage.innerHTML = '<div class="mastery-result summary-card"><img class="res-chotu" src="assets/chotu-jump.png" alt="Chotu cheering">' +
        '<p class="sum-head">🎉 ' + learnt + '</p><p class="sum-big">' + UI().esc(sumText(u)) + '</p>' +
        '<div class="result-stars">' + starRow + '</div><p class="hint">' + C().txt("Star check: ", "स्टार जाँच: ") + got + " / " + total + "</p></div>";
      stage.appendChild(UI().sayAgainBtn(spoken));
      if (!current.saved) {
        current.saved = true;
        save.progress[u.id] = { done: true, score: got, stars: stars, at: Date.now() };
        persist(); sfx().unlock(); C().addStars(stars);
      }
      C().speakRaw(spoken);
      nextBtn(C().txt("Back to the map", "मानचित्र पर जाएँ"), true);
    } else {
      const m = C().txt("Almost! Let's try the star check again.", "लगभग हो गया! स्टार जाँच फिर से करते हैं।");
      stage.innerHTML = '<div class="mastery-result"><img class="res-chotu" src="assets/chotu-listen.png" alt="Chotu">' + '<p class="big">🌱</p><p class="sum-big">' + m + "</p>" +
        '<div class="result-stars">' + starRow + '</div><p class="hint">' + got + " / " + total + "</p></div>";
      stage.appendChild(UI().sayAgainBtn(m));
      C().speakRaw(m);
      nextBtn(C().txt("Try again", "फिर कोशिश करो"), true);
    }
    const h = C().$("#btn-unit-home"); if (h) h.classList.add("hidden");
    updateHomeProgress();
  }

  function advance() {
    if (!current) return;
    const u = current.unit;
    const nAct = Math.min((u.activities || []).length, 3);
    if (current.step === "objective") { current.step = "teach"; drawUnit(); return; }
    if (current.step === "teach") {
      current.step = nAct ? "activity" : "practice"; current.actIndex = 0; drawUnit(); return;
    }
    if (current.step === "activity") {
      if (current.actIndex < nAct - 1) { current.actIndex += 1; drawUnit(); return; }
      current.step = current.practice.length ? "practice" : "mastery"; current.pi = 0; current.mi = 0; current.correct = 0; drawUnit(); return;
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
      const need = Math.max(1, Math.ceil(current.mastery.length * 0.75));
      if (current.correct >= need) { openMap(mapFilter); return; }
      const d = buildDecks(u, current.used);
      current.mastery = d.mastery; current.step = "mastery"; current.mi = 0; current.correct = 0; current.saved = false;
      drawUnit();
    }
  }

  function renderGoals() {
    const root = C().$("#goals-root");
    if (!root) return;
    load();
    const age = C().state.age;
    const txt = C().txt;
    const lvl = { nursery: txt("Nursery", "नर्सरी"), lkg: "LKG", ukg: "UKG", class1: txt("Class 1", "कक्षा 1") }[age] || age;
    let h = "<h3>" + txt("Learning goals", "सीखने के लक्ष्य") + " · " + lvl + "</h3>";
    unitsFor(age).filter((u) => !u.premium).sort((a, b) => (a.subject === b.subject ? 0 : a.subject === "english" ? -1 : 1) || a.n - b.n).forEach((u) => {
      const p = save.progress[u.id];
      const st = p && p.done ? "done" : p && p.started ? "going" : "new";
      const label = st === "done" ? "✓ " + txt("Done", "पूरा") : st === "going" ? "▶ " + txt("In progress", "जारी है") : "○ " + txt("Not started", "शुरू नहीं हुआ");
      h += '<div class="goal-row ' + st + '" data-unit="' + u.id + '"><div class="goal-top"><strong>' + (u.subject === "maths" ? txt("Maths", "गणित") : txt("English", "अंग्रेज़ी")) + " " + u.n + " · " +
        UI().esc(txt(u.titleEn, u.titleHi)) + '</strong><span class="goal-st">' + label + '</span></div><div class="goal-txt">🎯 ' + UI().esc(goalText(u)) + "</div></div>";
    });
    root.innerHTML = h;
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
    if (mapBtn) mapBtn.addEventListener("click", () => openMap(null));
    const next = C().$("#btn-unit-next");
    if (next) next.addEventListener("click", advance);
    const home = C().$("#btn-unit-home");
    if (home) home.addEventListener("click", () => openMap(mapFilter));
    // Each subject tile opens ITS OWN subject (this used to open the same English-first map for all three)
    [["card-english", "english"], ["card-maths", "maths"], ["card-logic", "logic"]].forEach(([id, subject]) => {
      const b = C().$("#" + id);
      if (b) b.addEventListener("click", (e) => { e.stopImmediatePropagation(); openMap(subject); }, true);
    });
    updateHomeProgress();
  }

  window.ChotuCourse = {
    boot, openMap, openUnit, renderMap, updateHomeProgress, setPremium,
    isPremiumOn, statusOf, unitsFor, counts,
    onI18n() {
      if (C().state.screen === "map") renderMap();
      if (C().state.screen === "home") updateHomeProgress();
      if (C().state.screen === "report") renderGoals();
      if (C().state.screen === "unit" && current) { C().stopSpeak(); drawUnit(); }
    },
    onScreen(id) { if (id === "map") renderMap(); if (id === "home") updateHomeProgress(); if (id === "report") renderGoals(); },
    renderGoals, getFilter: () => mapFilter, current: () => current
  };
  if (window.Chotu) window.ChotuCourse.boot();
})();

(function () {
  "use strict";
  const KEY = "chotuTeacherDemo";
  const OUTFITS = [
    { id: "default", cost: 0, en: "Everyday", hi: "रोज़मर्रा" },
    { id: "cap", cost: 5, en: "Red cap", hi: "लाल टोपी" },
    { id: "glasses", cost: 8, en: "Smart glasses", hi: "चश्मा" },
    { id: "sash", cost: 10, en: "Festive sash", hi: "पटका" },
    { id: "garland", cost: 12, en: "Flower garland", hi: "हार" },
    { id: "festive", cost: 15, en: "Festival look", hi: "त्योहार" }
  ];
  const STICKERS = [
    { id: "mango", e: "🥭", en: "Mango", hi: "आम" },
    { id: "diya", e: "🪔", en: "Diya", hi: "दीया" },
    { id: "kite", e: "🪁", en: "Kite", hi: "पतंग" },
    { id: "lotus", e: "🌸", en: "Lotus", hi: "कमल" },
    { id: "laddoo", e: "🍬", en: "Laddoo", hi: "लड्डू" },
    { id: "cricket", e: "🏏", en: "Cricket", hi: "क्रिकेट" },
    { id: "rainbow", e: "🌈", en: "Rainbow", hi: "इंद्रधनुष" },
    { id: "slate", e: "📝", en: "Slate", hi: "स्लेट" },
    { id: "rupee", e: "🪙", en: "Rupee", hi: "रुपया" },
    { id: "peacock", e: "🦚", en: "Peacock", hi: "मोर" }
  ];

  let save = {
    stars: 0, stickers: [], outfit: "default", unlocked: ["default"],
    streak: 1, lastDay: "", episodeDay: "", watchedEpisode: false,
    limitMinutes: 0, playMs: 0, tiredDay: "", liked: {}
  };
  let playStartedAt = 0;
  let tickTimer = null;
  let reelIndex = 0;
  let swipeY = null;
  let swipeStart = 0;
  let booted = false;
  let gateAnswer = 15;
  let gateNext = "limit";

  function C() { return window.Chotu; }
  function today() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function yesterday(iso) {
    const d = new Date(iso + "T12:00:00");
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) save = Object.assign(save, JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* ignore */ }
  }

  function updateStreak() {
    const d = today();
    if (save.lastDay === d) return;
    if (save.lastDay && yesterday(d) === save.lastDay) save.streak = (save.streak || 0) + 1;
    else save.streak = 1;
    if (save.episodeDay !== d) {
      save.episodeDay = d;
      save.watchedEpisode = false;
    }
    save.lastDay = d;
    if (save.tiredDay && save.tiredDay !== d) {
      save.playMs = 0;
      save.tiredDay = "";
    }
    persist();
  }

  function wrapFigures() {
    const acc = '<span class="acc acc-cap"></span><span class="acc acc-glasses"></span><span class="acc acc-sash"></span><span class="acc acc-garland"></span>';
    (C().$$("img.chotu") || []).forEach((img) => {
      if (img.closest(".chotu-figure")) return;
      const wrap = document.createElement("div");
      const extra = (img.className || "").replace(/\bchotu\b/g, "").trim();
      wrap.className = "chotu-figure" + (extra ? " " + extra : "");
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
      wrap.insertAdjacentHTML("beforeend", acc);
    });
    applyOutfit();
  }

  function applyOutfit() {
    const id = save.outfit || "default";
    C().$$(".chotu-figure").forEach((el) => {
      el.classList.remove("outfit-default", "outfit-cap", "outfit-glasses", "outfit-sash", "outfit-garland", "outfit-festive");
      el.classList.add("outfit-" + id);
    });
  }

  function renderHomeMeta() {
    const t = C().t;
    const txt = C().txt;
    const streak = C().$("#streak-pill");
    if (streak) streak.textContent = "🔥 " + (save.streak || 1);
    const badge = C().$("#episode-badge");
    const tag = C().$("#reels-new-tag");
    const showNew = !save.watchedEpisode;
    if (badge) badge.classList.toggle("hidden", !showNew);
    if (tag) tag.classList.toggle("hidden", !showNew);
    const star = C().$("#star-count");
    if (star) star.textContent = String(C().state.stars);
  }

  function onStars(n) {
    save.stars = C().state.stars;
    if (n > 0 && Math.random() < 0.45) {
      const locked = STICKERS.filter((s) => save.stickers.indexOf(s.id) === -1);
      if (locked.length) {
        const got = locked[Math.floor(Math.random() * locked.length)];
        save.stickers.push(got.id);
        C().toast(C().txt("New sticker: " + got.en, "नया स्टिकर: " + got.hi));
      }
    }
    persist();
    renderHomeMeta();
  }

  /* ---------- Reels ---------- */
  function reelsFor(age) {
    const all = REELS[age] || REELS.nursery;
    return all;
  }

  function openReels() {
    if (isTired()) { C().showScreen("tired"); return; }
    reelIndex = 0;
    if (!save.watchedEpisode) {
      const day = new Date().getDate();
      reelIndex = day % Math.max(reelsFor(C().state.age).length, 1);
    }
    C().showScreen("reels");
    buildReels();
    goReel(reelIndex, true);
    save.watchedEpisode = true;
    persist();
    renderHomeMeta();
  }

  function bgFor(kind, i) {
    const bgs = {
      chant: "linear-gradient(180deg,#ff6b6b 0%,#ffd93d 100%)",
      story: "linear-gradient(180deg,#4cc9f0 0%,#4361ee 100%)",
      maths: "linear-gradient(180deg,#2ecf75 0%,#1ea7e6 100%)",
      quiz: "linear-gradient(180deg,#9b59ff 0%,#e056fd 100%)"
    };
    const festive = "linear-gradient(180deg,#e63946 0%,#f4a261 55%,#ffe566 100%)";
    const rain = "linear-gradient(180deg,#14213d 0%,#4cc9f0 100%)";
    if (kind === "story" && i % 3 === 1) return festive;
    if (kind === "story" && i % 3 === 2) return rain;
    return bgs[kind] || bgs.chant;
  }

  function animHTML(reel) {
    const a = reel.anim;
    if (a === "letter") return '<div class="bounce-letter">' + (reel.letter || "s") + "</div>";
    if (a === "rain") {
      let d = "";
      for (let i = 0; i < 14; i++) d += '<span class="drop" style="left:' + (6 + i * 7) + "%;animation-delay:" + (i * 0.12) + 's"></span>';
      return d + '<div class="wave-item">☂️</div>';
    }
    if (a === "diya") return '<div class="diya">🪔</div>';
    if (a === "mango") return '<div>' + "🥭".repeat(reel.count || 3).split("").map(function (x, i) { return '<span class="mango-pop" style="animation-delay:' + (i * 0.12) + 's">🥭</span>'; }).join("") + "</div>";
    // the above split on UTF may be wrong for emoji - use array instead in caller
    if (a === "coin") return '<div class="spin-coin">🪙</div>';
    if (a === "wave") return '<div class="wave-item">' + (reel.icon || "🚢") + "</div>";
    if (a === "caps") return '<div class="cap-fly">🧢</div><div style="font-size:4rem">🐒🐒</div>';
    if (a === "rainbow") return '<div style="width:80%">' + ["#e63946","#f4a261","#ffe566","#2ecf75","#4cc9f0","#9b59ff"].map(function (c, i) { return '<div class="rainbow-bar" style="background:' + c + ";animation-delay:" + (i * 0.1) + 's"></div>'; }).join("") + "</div>";
    if (a === "clap") return '<div class="clap">👏</div>';
    if (a === "market") return '<div class="wave-item">🥭</div><div class="spin-coin" style="font-size:3rem">🪙</div><div class="wave-item">🛎️</div>';
    if (a === "frame") {
      let cells = "";
      for (let i = 0; i < 10; i++) cells += '<div class="tf-cell">' + (i < (reel.filled || 6) ? '<span class="tf-dot"></span>' : "") + "</div>";
      return '<div class="ten-frame" style="background:#fff">' + cells + "</div>";
    }
    if (a === "plates") return '<div class="plates"><div class="plate">🍬🍬</div><div class="plate">🍬🍬</div><div class="plate">🍬🍬</div></div>';
    if (a === "place") return '<div class="bounce-letter" style="font-size:5rem">' + (reel.letter || "47") + "</div>";
    return '<div class="bounce-letter">⭐</div>';
  }

  function mangoAnim(n) {
    let html = "<div>";
    for (let i = 0; i < n; i++) html += '<span class="mango-pop" style="animation-delay:' + (i * 0.12) + 's">🥭</span>';
    return html + "</div>";
  }

  function buildReels() {
    const vp = C().$("#reels-viewport");
    if (!vp) return;
    const list = reelsFor(C().state.age);
    vp.innerHTML = "";
    list.forEach((reel, i) => {
      const el = document.createElement("div");
      el.className = "reel";
      el.setAttribute("data-index", String(i));
      el.style.background = bgFor(reel.kind, i);
      el.style.transform = "translateY(" + ((i - reelIndex) * 100) + "%)";
      const anim = document.createElement("div");
      anim.className = "reel-anim";
      anim.innerHTML = reel.anim === "mango" ? mangoAnim(reel.count || 3) : animHTML(reel);
      const cap = document.createElement("p");
      cap.className = "reel-caption";
      cap.textContent = C().txt(reel.capEn, reel.capHi);
      el.appendChild(anim);
      el.appendChild(cap);
      if (reel.quiz) {
        const box = document.createElement("div");
        box.className = "reel-quiz";
        box.appendChild(C().optionButtons(reel.quiz.options, (val, btn, wrap) => {
          const ok = String(val) === String(reel.quiz.answer);
          C().markAnswer(wrap, btn, ok);
          if (ok) {
            C().addStars(1);
            C().speakRaw(C().praise());
          } else {
            C().speakRaw(C().retry());
          }
        }));
        el.appendChild(box);
      }
      vp.appendChild(el);
    });
    bindSwipe(vp);
  }

  function layoutReels() {
    const list = C().$$("#reels-viewport .reel");
    list.forEach((el) => {
      const i = Number(el.getAttribute("data-index"));
      el.style.transform = "translateY(" + ((i - reelIndex) * 100) + "%)";
    });
    const n = reelsFor(C().state.age).length;
    const idx = C().$("#reel-index");
    if (idx) idx.textContent = (reelIndex + 1) + " / " + n;
    const like = C().$("#reel-like");
    const id = likeId();
    if (like) like.classList.toggle("liked", !!save.liked[id]);
    const lc = C().$("#reel-like-count");
    if (lc) lc.textContent = save.liked[id] ? "1" : "0";
  }

  function likeId() {
    return C().state.age + ":" + reelIndex;
  }

  function goReel(i, speak) {
    const list = reelsFor(C().state.age);
    if (!list.length) return;
    reelIndex = (i + list.length) % list.length;
    layoutReels();
    const reel = list[reelIndex];
    if (speak !== false) C().speakRaw(C().txt(reel.speakEn, reel.speakHi));
  }

  function bindSwipe(vp) {
    if (vp._swipeBound) return;
    vp._swipeBound = true;
    vp.addEventListener("pointerdown", (e) => {
      swipeY = e.clientY;
      swipeStart = Date.now();
    });
    vp.addEventListener("pointerup", (e) => {
      if (swipeY == null) return;
      const dy = e.clientY - swipeY;
      swipeY = null;
      if (Math.abs(dy) < 40) return;
      if (dy < 0) goReel(reelIndex + 1, true);
      else goReel(reelIndex - 1, true);
    });
    vp.addEventListener("pointercancel", () => { swipeY = null; });
    vp.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) < 20) return;
      e.preventDefault();
      if (e.deltaY > 0) goReel(reelIndex + 1, true);
      else goReel(reelIndex - 1, true);
    }, { passive: false });
  }

  function likeReel() {
    const id = likeId();
    if (save.liked[id]) return;
    save.liked[id] = true;
    C().addStars(1);
    persist();
    layoutReels();
  }

  /* ---------- Rewards ---------- */
  function openRewards() {
    C().showScreen("rewards");
    renderRewards();
  }

  function renderRewards() {
    applyOutfit();
    const t = C().t;
    const txt = C().txt;
    const starsEl = C().$("#rewards-stars");
    if (starsEl) starsEl.textContent = txt("You have " + C().state.stars + " stars", "तुम्हारे पास " + C().state.stars + " सितारे हैं");
    const grid = C().$("#outfit-grid");
    if (grid) {
      grid.innerHTML = "";
      OUTFITS.forEach((o) => {
        const unlocked = save.unlocked.indexOf(o.id) !== -1 || o.cost === 0;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "outfit-card" + (save.outfit === o.id ? " equipped" : "") + (unlocked ? "" : " locked");
        const label = unlocked
          ? (save.outfit === o.id ? t("wearing") : t("wear"))
          : t("unlock") + " · ⭐" + o.cost;
        b.innerHTML = "<div>" + txt(o.en, o.hi) + "</div><small>" + label + "</small>";
        b.addEventListener("click", () => buyOrWear(o));
        grid.appendChild(b);
      });
    }
    const sg = C().$("#sticker-grid");
    if (sg) {
      sg.innerHTML = "";
      STICKERS.forEach((s) => {
        const have = save.stickers.indexOf(s.id) !== -1;
        const d = document.createElement("div");
        d.className = "sticker-card" + (have ? "" : " locked");
        d.innerHTML = s.e + "<small>" + (have ? txt(s.en, s.hi) : t("stickerLocked")) + "</small>";
        sg.appendChild(d);
      });
    }
  }

  function buyOrWear(o) {
    if (save.unlocked.indexOf(o.id) === -1) {
      if (C().state.stars < o.cost) {
        C().toast(C().t("needStars"));
        C().speakRaw(C().t("needStars"));
        return;
      }
      C().state.stars -= o.cost;
      const el = C().$("#star-count");
      if (el) el.textContent = String(C().state.stars);
      save.stars = C().state.stars;
      save.unlocked.push(o.id);
      C().toast(C().txt("Unlocked!", "खुल गया!"));
    }
    save.outfit = o.id;
    persist();
    applyOutfit();
    renderRewards();
  }

  /* ---------- Time limit ---------- */
  function isTired() {
    if (!save.limitMinutes) return false;
    if (save.tiredDay === today()) return true;
    return currentPlayMs() >= save.limitMinutes * 60000;
  }

  function currentPlayMs() {
    if (!playStartedAt) return save.playMs || 0;
    return (save.playMs || 0) + (Date.now() - playStartedAt);
  }

  function onPlayStart() {
    if (save.tiredDay && save.tiredDay !== today()) {
      save.playMs = 0;
      save.tiredDay = "";
      persist();
    }
    if (!playStartedAt) playStartedAt = Date.now();
    startTick();
  }

  function startTick() {
    if (tickTimer) clearInterval(tickTimer);
    tickTimer = setInterval(() => {
      if (!save.limitMinutes || !playStartedAt) return;
      if (C().state.screen === "tired" || C().state.screen === "gate" || C().state.screen === "parent" || C().state.screen === "splash") return;
      if (isTired()) endPlay();
    }, 400);
  }

  function endPlay() {
    save.playMs = currentPlayMs();
    save.tiredDay = today();
    playStartedAt = 0;
    persist();
    C().showScreen("tired");
    C().speakRaw(C().t("tiredSpeech"));
  }

  function openLimitGate() {
    gateNext = "limit";
    openGate();
  }

  function openGate() {
    const a = 6 + Math.floor(Math.random() * 8);
    const b = 5 + Math.floor(Math.random() * 8);
    gateAnswer = a + b;
    const q = C().$("#gate-question");
    if (q) q.textContent = C().txt("What is " + a + " + " + b + "?", a + " + " + b + " क्या होता है?");
    const fb = C().$("#gate-feedback");
    if (fb) { fb.textContent = ""; fb.className = "feedback"; }
    const box = C().$("#gate-options");
    if (box) {
      box.innerHTML = "";
      const opts = C().shuffle([gateAnswer, gateAnswer + 2, gateAnswer - 1].filter((x, i, arr) => arr.indexOf(x) === i && x > 0));
      box.appendChild(C().optionButtons(opts, (val, btn, wrap) => {
        const ok = Number(val) === gateAnswer;
        C().markAnswer(wrap, btn, ok);
        if (ok) {
          if (fb) { fb.textContent = C().praise(); fb.className = "feedback ok"; }
          setTimeout(() => C().showScreen(gateNext), 400);
        } else if (fb) { fb.textContent = C().retry(); fb.className = "feedback no"; }
      }));
    }
    C().showScreen("gate");
  }

  function renderLimit() {
    const box = C().$("#limit-options");
    if (!box) return;
    const opts = [
      { m: 0, key: "limitOff" },
      { m: 1, key: "limit1" },
      { m: 10, key: "limit10" },
      { m: 20, key: "limit20" },
      { m: 30, key: "limit30" }
    ];
    box.innerHTML = "";
    opts.forEach((o) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "limit-btn" + (Number(save.limitMinutes) === o.m ? " active" : "");
      b.textContent = C().t(o.key);
      b.setAttribute("data-minutes", String(o.m));
      b.addEventListener("click", () => setLimit(o.m));
      box.appendChild(b);
    });
    const cur = C().$("#limit-current");
    if (cur) {
      const label = opts.filter((o) => o.m === Number(save.limitMinutes))[0];
      cur.textContent = label ? C().t(label.key) : C().t("limitOff");
    }
  }

  function setLimit(m) {
    save.limitMinutes = m;
    save.playMs = 0;
    save.tiredDay = "";
    playStartedAt = Date.now();
    persist();
    renderLimit();
    C().toast(C().t(m === 0 ? "limitOff" : (m === 1 ? "limit1" : m === 10 ? "limit10" : m === 20 ? "limit20" : "limit30")));
    startTick();
  }

  function onScreen(id) {
    if (id === "tired") return;
    if (isTired() && id !== "gate" && id !== "limit" && id !== "parent" && id !== "splash") {
      C().showScreen("tired");
      return;
    }
    if (id === "reels") {
      const toast = C().$("#toast");
      if (toast) toast.classList.remove("show");
      layoutReels();
    }
    if (id === "rewards") renderRewards();
    if (id === "limit") renderLimit();
    if (id === "home") renderHomeMeta();
    applyOutfit();
  }

  function onI18n() {
    renderHomeMeta();
    if (C().state.screen === "rewards") renderRewards();
    if (C().state.screen === "limit") renderLimit();
    if (C().state.screen === "reels") {
      const list = reelsFor(C().state.age);
      C().$$("#reels-viewport .reel-caption").forEach((el, i) => {
        if (list[i]) el.textContent = C().txt(list[i].capEn, list[i].capHi);
      });
    }
  }

  function boot() {
    if (booted) {
      renderHomeMeta();
      applyOutfit();
      return;
    }
    booted = true;
    load();
    updateStreak();
    C().state.stars = save.stars || 0;
    const star = C().$("#star-count");
    if (star) star.textContent = String(C().state.stars);
    wrapFigures();
    renderHomeMeta();
    const prev = C().$("#reel-prev");
    const next = C().$("#reel-next");
    const like = C().$("#reel-like");
    if (prev) prev.addEventListener("click", () => goReel(reelIndex - 1, true));
    if (next) next.addEventListener("click", () => goReel(reelIndex + 1, true));
    if (like) like.addEventListener("click", likeReel);
    const tiredHome = C().$("#btn-tired-home");
    const tiredParent = C().$("#btn-tired-parent");
    if (tiredHome) tiredHome.addEventListener("click", () => C().showScreen("splash"));
    if (tiredParent) tiredParent.addEventListener("click", () => { gateNext = "limit"; openGate(); });
    startTick();
  }

  /* 8+ reels per level */
  const REELS = {
    nursery: [
      { kind: "chant", anim: "letter", letter: "s", capEn: "Sss… sun and sat. Sing it with Chotu!", capHi: "Sss… सन और सैट। छोटू के साथ गाओ!", speakEn: "Sss, sss, sun and sat. S is for sun.", speakHi: "Sss, सन और सैट। S सूरज के लिए।" },
      { kind: "story", anim: "rain", capEn: "Monsoon! Pitter patter on the roof.", capHi: "मानसून! छत पर टप-टप बारिश।", speakEn: "It is raining. Pitter patter on the roof. Let's listen.", speakHi: "बारिश हो रही है। छत पर टप-टप। सुनो।" },
      { kind: "maths", anim: "mango", count: 3, capEn: "Look first. Three mangoes. Don't count yet!", capHi: "पहले देखो। तीन आम। अभी मत गिनो!", speakEn: "Look. Three mangoes. You can see three without counting.", speakHi: "देखो। तीन आम। बिना गिने तीन दिख सकते हैं।" },
      { kind: "quiz", anim: "letter", letter: "p", capEn: "What is the first sound of pot?", capHi: "पॉट की पहली ध्वनि क्या है?", speakEn: "Pot. What is the first sound?", speakHi: "पॉट। पहली ध्वनि क्या है?", quiz: { options: ["p", "s", "a"], answer: "p" } },
      { kind: "story", anim: "diya", capEn: "Diwali night. One little diya glows.", capHi: "दिवाली की रात। एक छोटा दीया जलता है।", speakEn: "Happy Diwali! One little diya glows in the dark.", speakHi: "दिवाली मुबारक! एक छोटा दीया अंधेरे में जलता है।" },
      { kind: "maths", anim: "mango", count: 5, capEn: "Five mangoes on a five-frame in your mind.", capHi: "मन में पाँच-फ्रेम पर पाँच आम।", speakEn: "Five mangoes. A full five-frame.", speakHi: "पाँच आम। पूरा पाँच-फ्रेम।" },
      { kind: "chant", anim: "letter", letter: "a", capEn: "A-a-ant, A se aam. Sing with me!", capHi: "A-a-ऐंट, A से आम। साथ गाओ!", speakEn: "A, a, ant. A se aam, mango.", speakHi: "A, ऐंट। A से आम।" },
      { kind: "quiz", anim: "mango", count: 4, capEn: "How many mangoes? Tap the number.", capHi: "कितने आम? संख्या दबाओ।", speakEn: "How many mangoes do you see?", speakHi: "कितने आम दिख रहे हैं?", quiz: { options: ["3", "4", "5"], answer: "4" } },
      { kind: "story", anim: "market", capEn: "At the market: a bell, a mango, a coin.", capHi: "बाज़ार में: घंटी, आम, सिक्का।", speakEn: "We are at the market. Hear the bell. I spy a mango.", speakHi: "हम बाज़ार में हैं। घंटी सुनो। मुझे एक आम दिखता है।" },
      { kind: "chant", anim: "clap", capEn: "Clap the beats: ma-chh-li, three claps!", capHi: "तालियाँ: म-छ-ली, तीन तालियाँ!", speakEn: "Machli, jal ki rani. Clap the parts: ma, chhli.", speakHi: "मछली जल की रानी। भागों पर ताली बजाओ।" }
    ],
    lkg: [
      { kind: "chant", anim: "letter", letter: "cat", capEn: "C-a-t, cat! Blend the sounds together.", capHi: "C-a-t, कैट! ध्वनियाँ जोड़ो।", speakEn: "C, a, t. Cat. Blend it with me.", speakHi: "C, a, t. कैट। साथ जोड़ो।" },
      { kind: "story", anim: "market", capEn: "At the market, Amma buys a pan and a lid.", capHi: "बाज़ार में अम्मा कड़ाही और ढक्कन लेती हैं।", speakEn: "Amma is at the market. She buys a pan and a lid.", speakHi: "अम्मा बाज़ार में हैं। वे पैन और ढक्कन लेती हैं।" },
      { kind: "maths", anim: "frame", filled: 6, capEn: "Six on the ten-frame. How many more to make 10?", capHi: "दस-फ्रेम पर छह। 10 के लिए कितने और?", speakEn: "Six are filled. How many more to make ten? Four.", speakHi: "छह भरे हैं। दस बनाने के लिए चार और।" },
      { kind: "quiz", anim: "letter", letter: "pin", capEn: "Blend p-i-n. What word is this?", capHi: "p-i-n जोड़ो। यह कौन सा शब्द है?", speakEn: "P, i, n. What word is this?", speakHi: "P, i, n। यह कौन सा शब्द है?", quiz: { options: ["pin", "pan", "pen"], answer: "pin" } },
      { kind: "story", anim: "diya", capEn: "Diwali rangoli: diya, diya, flower, diya…", capHi: "दिवाली रंगोली: दीया, दीया, फूल, दीया…", speakEn: "A Diwali pattern. Diya, diya, flower. What comes next? A diya.", speakHi: "दिवाली का पैटर्न। दीया, दीया, फूल। आगे दीया।" },
      { kind: "maths", anim: "letter", letter: "7+3", capEn: "Number bond trick: 7 and 3 make 10.", capHi: "जोड़ की तरकीब: 7 और 3 मिलकर 10।", speakEn: "Seven and three make ten. That is a number bond.", speakHi: "सात और तीन मिलकर दस। यह एक जोड़ है।" },
      { kind: "story", anim: "rain", capEn: "A paper boat floats in the monsoon puddle.", capHi: "मानसून के गड्ढे में कागज़ की नाव।", speakEn: "The monsoon puddle has a little paper boat.", speakHi: "बारिश के गड्ढे में कागज़ की छोटी नाव है।" },
      { kind: "quiz", anim: "frame", filled: 8, capEn: "Eight are filled. How many more to make 10?", capHi: "आठ भरे हैं। 10 के लिए कितने और?", speakEn: "Eight on the ten-frame. How many more to make ten?", speakHi: "दस-फ्रेम पर आठ। दस के लिए कितने और?", quiz: { options: ["1", "2", "3"], answer: "2" } },
      { kind: "chant", anim: "letter", letter: "pot", capEn: "P-o-t, pot. Indian words can be CVC too!", capHi: "P-o-t, पॉट। भारतीय शब्द भी ऐसे बनते हैं!", speakEn: "P, o, t. Pot. A pot of dal.", speakHi: "P, o, t. पॉट। दाल का पतीला।" },
      { kind: "maths", anim: "mango", count: 5, capEn: "Five, then five more, is a full ten-frame.", capHi: "पाँच, फिर पाँच और, पूरा दस-फ्रेम।", speakEn: "Five and five more make ten.", speakHi: "पाँच और पाँच मिलकर दस।" }
    ],
    ukg: [
      { kind: "chant", anim: "wave", icon: "🚢", capEn: "Sh-sh-ship, sh-sh-shop. Feel the sh sound!", capHi: "Sh-sh-शिप, sh-sh-शॉप। sh ध्वनि सुनो!", speakEn: "Sh, ship. Sh, shop. That is the sh sound.", speakHi: "Sh, शिप। Sh, शॉप। यह sh ध्वनि है।" },
      { kind: "story", anim: "market", capEn: "Rupee shop: a pencil is ₹8, an eraser is ₹5.", capHi: "रुपये की दुकान: पेंसिल ₹8, रबर ₹5।", speakEn: "At the shop a pencil is 8 rupees and an eraser is 5. That is 13 in all.", speakHi: "दुकान में पेंसिल 8 रुपये, रबर 5। कुल 13।" },
      { kind: "maths", anim: "letter", letter: "10", capEn: "Mental trick: 8 + 6 is 8 + 2 + 4. Make 10 first!", capHi: "तरकीब: 8 + 6 यानी पहले 10 बनाओ!", speakEn: "Eight plus six. Make ten first. Eight plus two is ten, and four more is fourteen.", speakHi: "आठ जमा छह। पहले दस बनाओ। आठ जमा दो दस, और चार, चौदह।" },
      { kind: "quiz", anim: "wave", icon: "🚢", capEn: "The ship is on the sand. Which word has sh?", capHi: "शिप रेत पर है। sh वाला शब्द कौन सा?", speakEn: "The ship is on the sand. Which word has the sh sound?", speakHi: "शिप रेत पर है। sh वाला शब्द कौन सा है?", quiz: { options: ["ship", "sand", "the"], answer: "ship" } },
      { kind: "story", anim: "diya", capEn: "Diwali rangoli has a rule. Can you say it?", capHi: "दिवाली रंगोली का एक नियम है। बता सकते हो?", speakEn: "The rangoli goes flower, lamp, flower, lamp. The rule is ABAB.", speakHi: "रंगोली है फूल, दीया, फूल, दीया। नियम ABAB है।" },
      { kind: "maths", anim: "coin", capEn: "You have ₹20. A book is ₹12. ₹8 comes back.", capHi: "तुम्हारे पास ₹20। किताब ₹12। ₹8 वापस।", speakEn: "You have 20 rupees. The book is 12. Eight rupees come back.", speakHi: "20 रुपये हैं। किताब 12 की है। 8 वापस आते हैं।" },
      { kind: "story", anim: "rain", capEn: "We play in the rain, then dry our feet.", capHi: "हम बारिश में खेलते हैं, फिर पाँव सुखाते हैं।", speakEn: "We play in the rain. Then we dry our feet. What might happen next?", speakHi: "हम बारिश में खेलते हैं। फिर पाँव सुखाते हैं। आगे क्या हो सकता है?" },
      { kind: "quiz", anim: "coin", capEn: "A toffee is ₹7. You have ₹10. How much comes back?", capHi: "टॉफ़ी ₹7। तुम्हारे पास ₹10। कितने वापस?", speakEn: "A toffee is 7 rupees. You have 10. How much comes back?", speakHi: "टॉफ़ी 7 रुपये की है। 10 हैं। कितने वापस?", quiz: { options: ["2", "3", "4"], answer: "3" } },
      { kind: "chant", anim: "letter", letter: "ch", capEn: "Ch-ch-chair, ch-ch-chapati. That's ch!", capHi: "Ch-ch-चेयर, ch-ch-चपाती। यह ch है!", speakEn: "Ch, chair. Ch, chapati. That is the ch sound.", speakHi: "Ch, चेयर। Ch, चपाती। यह ch ध्वनि है।" },
      { kind: "maths", anim: "place", letter: "10+10", capEn: "Tens and ones: two tens make 20.", capHi: "दहाई और इकाई: दो दहाई यानी 20।", speakEn: "Two tens make twenty. That is how we build 20.", speakHi: "दो दहाई मिलकर बीस। ऐसे 20 बनता है।" }
    ],
    class1: [
      { kind: "story", anim: "caps", capEn: "The monkeys took the caps! Who took them?", capHi: "बंदर टोपियाँ ले गए! उन्हें किसने लिया?", speakEn: "The cap seller sat under a tree. The monkeys took the caps.", speakHi: "टोपी वाला पेड़ के नीचे बैठा। बंदर टोपियाँ ले गए।" },
      { kind: "maths", anim: "plates", capEn: "3 plates, 2 laddoos each. 2+2+2=6. That's 3 times 2.", capHi: "3 थाली, 2-2 लड्डू। 2+2+2=6। यह 3 गुना 2 है।", speakEn: "Three plates with two laddoos. Two plus two plus two is six. That is 3 times 2.", speakHi: "तीन थालियों में दो-दो लड्डू। 2 जमा 2 जमा 2, 6। यह 3 गुना 2 है।" },
      { kind: "maths", anim: "place", letter: "47", capEn: "4 tens and 7 ones make 47, not 74.", capHi: "4 दहाई और 7 इकाई = 47, 74 नहीं।", speakEn: "Four tens and seven ones. That number is forty-seven, not seventy-four.", speakHi: "चार दहाई और सात इकाई। यह सैंतालीस है, चौहत्तर नहीं।" },
      { kind: "quiz", anim: "caps", capEn: "The monkeys took the caps. Who took them?", capHi: "बंदर टोपियाँ ले गए। उन्हें किसने लिया?", speakEn: "Who took the caps?", speakHi: "टोपी कौन ले गया?", quiz: { options: ["the monkeys", "the frogs", "the birds"], answer: "the monkeys" } },
      { kind: "story", anim: "diya", capEn: "Utsav! Diwali patterns have a rule. Say it.", capHi: "उत्सव! दिवाली पैटर्न का नियम बताओ।", speakEn: "At the festival the diyas go 2, 4, 6. The rule is add 2.", speakHi: "त्योहार पर दीये 2, 4, 6। नियम है 2 जोड़ना।" },
      { kind: "story", anim: "rainbow", capEn: "Anandi saw a rainbow, and our flag has three colours.", capHi: "आनंदी ने इंद्रधनुष देखा, झंडे में तीन रंग हैं।", speakEn: "Anandi saw a rainbow in the sky. Our flag has three colours.", speakHi: "आनंदी ने आसमान में इंद्रधनुष देखा। हमारे झंडे में तीन रंग हैं।" },
      { kind: "maths", anim: "coin", capEn: "A notebook is ₹12. You have ₹20. ₹8 comes back.", capHi: "कॉपी ₹12। तुम्हारे पास ₹20। ₹8 वापस।", speakEn: "A notebook is 12 rupees. You have 20. Eight rupees come back.", speakHi: "कॉपी 12 रुपये की है। 20 हैं। 8 वापस।" },
      { kind: "quiz", anim: "place", letter: "50", capEn: "Which is closer to 50: 47 or 74?", capHi: "50 के पास कौन है: 47 या 74?", speakEn: "Which is closer to 50, 47 or 74?", speakHi: "50 के पास कौन है, 47 या 74?", quiz: { options: ["47", "74", "40"], answer: "47" } },
      { kind: "chant", anim: "clap", capEn: "Two little hands can clap, clap, clap!", capHi: "दो छोटे हाथ ताली बजाएँ, ताली, ताली!", speakEn: "Two little hands can clap. That is from our Class 1 book.", speakHi: "दो छोटे हाथ ताली बजा सकते हैं। यह हमारी कक्षा 1 की किताब से है।" },
      { kind: "story", anim: "market", capEn: "At the farm, the cows eat grass. What do they eat?", capHi: "खेत पर गायें घास खाती हैं। वे क्या खाती हैं?", speakEn: "The cows eat grass on the farm.", speakHi: "गायें खेत पर घास खाती हैं।" }
    ]
  };

  window.ChotuFun = {
    boot: boot,
    onScreen: onScreen,
    onI18n: onI18n,
    onStars: onStars,
    onPlayStart: onPlayStart,
    openReels: openReels,
    openRewards: openRewards,
    openLimitGate: openLimitGate,
    goReel: goReel,
    setLimit: setLimit,
    advancePlayTime: function (ms) {
      save.playMs = (save.playMs || 0) + ms;
      persist();
      if (isTired()) endPlay();
    },
    getSave: function () { return save; }
  };
  if (window.Chotu) window.ChotuFun.boot();
})();

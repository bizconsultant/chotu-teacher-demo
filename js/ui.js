/* Chotu Teacher shared learning UI: instruction banner, "Say again", pointing hand,
   tap questions with hints/retries, voice (mic) tasks, and the "How to play" intro.
   Used by the unit player (course.js) and by Rhymes. */
(function () {
  "use strict";
  const SEEN_KEY = "chotuHowtoSeen";
  const C = () => window.Chotu;
  const sfx = () => window.ChotuSfx || { pop() {}, correct() {}, wrong() {}, chime() {}, bell() {}, rain() {}, clap() {}, tick() {}, start() {}, coin() {}, whoosh() {} };
  const txt = (en, hi) => C().txt(en, hi);
  const log = [];
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  function dedupe(pool) {
    const seen = new Set();
    return (pool || []).filter((it) => {
      const k = [it.qEn || it.instrEn || "", it.qHi || "", String(it.answer), (it.showEmoji || ""), it.sound || "", it.readWord || "", it.sentence || "", it.frame != null ? "f" + it.frame : ""].join("|");
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  // ---- instruction banner with the big "Say again" button -------------------------
  function banner(instr, spoken, onAgain) {
    const d = document.createElement("div");
    d.className = "instr";
    d.innerHTML = '<img class="instr-chotu" src="assets/chotu-point.png" alt="">' +
      '<p class="instr-text">' + esc(instr) + "</p>" +
      '<button type="button" class="say-again" aria-label="' + esc(txt("Say again", "फिर से सुनो")) + '"><span class="sa-ico">🔁</span> ' + esc(txt("Say again", "फिर से सुनो")) + "</button>";
    d.querySelector(".say-again").addEventListener("click", () => {
      sfx().pop();
      if (onAgain) onAgain();
      C().speakRaw(spoken);
    });
    return d;
  }

  function sayAgainBtn(spoken, extra) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "say-again";
    b.innerHTML = '<span class="sa-ico">🔁</span> ' + esc(txt("Say again", "फिर से सुनो"));
    b.addEventListener("click", () => { sfx().pop(); if (extra) extra(); C().speakRaw(spoken); });
    return b;
  }

  // ---- pointing hand ---------------------------------------------------------------
  function hand(target, root) {
    if (!target) return;
    target.classList.add("has-hand");
    const h = document.createElement("span");
    h.className = "hand";
    h.setAttribute("aria-hidden", "true");
    h.textContent = "👆";
    target.appendChild(h);
    const kill = () => {
      (root || document).querySelectorAll(".hand").forEach((x) => x.remove());
      (root || document).querySelectorAll(".has-hand").forEach((x) => x.classList.remove("has-hand"));
    };
    (root || target).addEventListener("pointerdown", () => setTimeout(kill, 0), { capture: true, once: true });
  }

  function orderOptions(item, session) {
    if (item._order) return item._order.map((v) => item.options.find((o) => String((o && o.value != null) ? o.value : o) === v)).filter(Boolean);
    const opts = (item.options || []).slice();
    const val = (o) => String((o && o.value != null) ? o.value : o);
    let best = C().shuffle(opts);
    if (opts.length > 1) {
      for (let t = 0; t < 12; t++) {
        const idx = best.findIndex((o) => val(o) === String(item.answer));
        if (!session || idx !== session.lastPos) break;
        best = C().shuffle(opts);
      }
    }
    if (session) session.lastPos = best.findIndex((o) => val(o) === String(item.answer));
    item._order = best.map(val);
    return best;
  }

  function playSound(name) {
    const s = sfx();
    if (name === "bell") s.bell(); else if (name === "rain") s.rain(); else if (name === "clap") s.clap(); else if (name === "chime") s.chime(); else if (name === "tick") s.tick();
  }

  /* ask(stage, item, {session, visualHTML, onDone, showHand, qid})
     Renders: instruction banner (+ spoken), picture, options, feedback.
     Wrong: gentle hint + retry; after 2 wrong tries the right answer glows. */
  function ask(stage, item, ctx) {
    ctx = ctx || {};
    stage.innerHTML = "";
    const instr = txt(item.instrEn || item.qEn || "", item.instrHi || item.qHi || item.qEn || "");
    const spoken = txt(item.speakEn || item.instrEn || item.qEn || "", item.speakHi || item.speakEn || item.instrHi || item.qHi || "");
    stage.appendChild(banner(instr, spoken, item.sound ? () => playSound(item.sound) : null));
    if (ctx.visualHTML) { const v = document.createElement("div"); v.innerHTML = ctx.visualHTML; while (v.firstChild) stage.appendChild(v.firstChild); }
    if (item.sound) {
      const sb = document.createElement("button");
      sb.type = "button"; sb.className = "sound-btn"; sb.textContent = "🔊 " + txt("Play sound", "आवाज़ सुनो");
      sb.addEventListener("click", () => playSound(item.sound));
      stage.appendChild(sb);
    }
    if (ctx.qid) log.push(ctx.qid);
    const wrap = document.createElement("div");
    wrap.className = "choice-row big-choices";
    const fbk = document.createElement("div");
    fbk.className = "fbk"; fbk.setAttribute("role", "status");
    const ordered = orderOptions(item, ctx.session);
    let tries = 0, done = false;
    const val = (o) => String((o && o.value != null) ? o.value : o);
    const labelOf = (o) => (typeof o === "object" ? txt(o.label || o.value, o.labelHi || o.label || o.value) : String(o));
    const buttons = [];
    ordered.forEach((o) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "choice-btn big"; b.setAttribute("data-value", val(o));
      b.innerHTML = (typeof o === "object" && o.emoji ? '<span class="emoji">' + o.emoji + "</span>" : "") + '<span class="olabel">' + esc(labelOf(o)) + "</span>";
      b.addEventListener("click", () => {
        if (done || b.disabled) return;
        sfx().pop();
        const ok = val(o) === String(item.answer);
        if (ok) {
          done = true;
          b.classList.add("selected", "cheer");
          buttons.forEach((x) => { x.disabled = true; });
          const first = tries === 0;
          const msg = C().praise();
          fbk.className = "fbk ok"; fbk.innerHTML = "<span class='fbk-star'>⭐</span> " + esc(msg);
          sfx().correct();
          if (first) C().addStars(1);
          C().speakRaw(msg, null, { remember: false });
          if (ctx.onDone) ctx.onDone({ ok: first, tries, revealed: false });
        } else {
          tries += 1;
          b.classList.add("wrong"); b.disabled = true;
          sfx().wrong();
          const left = buttons.filter((x) => !x.disabled).length;
          if (tries >= 2) {
            done = true;
            const rb = buttons.find((x) => x.getAttribute("data-value") === String(item.answer));
            buttons.forEach((x) => { x.disabled = true; });
            if (rb) { rb.classList.add("reveal"); }
            const ro = ordered.find((x) => val(x) === String(item.answer));
            const lab = labelOf(ro);
            const m = txt("This one is right: " + lab + ". Let's go on.", "सही यह है: " + lab + "। चलो आगे चलें।");
            fbk.className = "fbk reveal-msg"; fbk.textContent = "👉 " + m;
            C().speakRaw(m, null, { remember: false });
            if (ctx.onDone) ctx.onDone({ ok: false, tries, revealed: true });
          } else {
            const hint = txt(item.hintEn || "Look again. You can do it!", item.hintHi || "फिर से देखो। तुम कर सकते हो!");
            fbk.className = "fbk no"; fbk.innerHTML = "🙂 " + esc(C().retry()) + "<br><small>💡 " + esc(hint) + "</small>";
            C().speakRaw(C().retry() + " " + hint, null, { remember: false });
            if (left === 1) { const last = buttons.find((x) => !x.disabled); if (last) last.classList.add("reveal"); }
          }
        }
      });
      buttons.push(b); wrap.appendChild(b);
    });
    stage.appendChild(wrap);
    stage.appendChild(fbk);
    if (ctx.showHand !== false && buttons[0]) hand(buttons[0], stage);
    if (item.sound) { playSound(item.sound); setTimeout(() => C().speakRaw(spoken), 1300); } else C().speakRaw(spoken);
  }

  // ---- voice task: glowing mic, "Tap and say", tap fallback -----------------------------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  let activeRec = null;
  function stopRec() { if (activeRec) { try { activeRec.abort(); } catch (e) {} activeRec = null; } }

  // sayTask(stage, {instr, spoken, word, emoji, accept, lang, micLabel, onDone, extraHTML})
  function sayTask(stage, o) {
    stopRec();
    stage.innerHTML = "";
    stage.appendChild(banner(o.instr, o.spoken));
    const card = document.createElement("div");
    card.className = "say-card";
    card.innerHTML = '<div class="say-emoji">' + (o.emoji || "") + '</div><div class="say-word">' + esc(o.word || "") + "</div>";
    stage.appendChild(card);
    const mic = document.createElement("button");
    mic.type = "button"; mic.className = "mic-big";
    mic.innerHTML = '<span class="mic-ico">🎤</span><span class="mic-label">' + esc(o.micLabel || txt("Tap and say", "टैप करो और बोलो")) + "</span>";
    stage.appendChild(mic);
    const status = document.createElement("p");
    status.className = "mic-note"; status.setAttribute("role", "status");
    stage.appendChild(status);
    const fall = document.createElement("button");
    fall.type = "button"; fall.className = "btn btn-white say-fallback hidden";
    fall.textContent = "✋ " + txt("I said it", "मैंने बोल दिया");
    stage.appendChild(fall);
    let finished = false;
    function finish(heard) {
      if (finished) return;
      finished = true; stopRec();
      mic.classList.remove("listening"); mic.classList.add("done");
      sfx().correct();
      C().addStars(1);
      const msg = C().praise();
      status.className = "mic-note ok";
      status.textContent = "⭐ " + msg + (heard ? "  (" + txt("I heard", "मैंने सुना") + ": “" + heard + "”)" : "");
      C().speakRaw(msg, null, { remember: false });
      fall.classList.add("hidden");
      if (o.onDone) o.onDone();
    }
    fall.addEventListener("click", () => finish(""));
    const showFallback = (msg) => { fall.classList.remove("hidden"); if (msg) { status.className = "mic-note"; status.textContent = msg; } };
    if (!SR) showFallback(txt("This phone cannot listen yet. Say it out loud, then tap ✋.", "यह फ़ोन अभी सुन नहीं सकता। ज़ोर से बोलो, फिर ✋ दबाओ।"));
    mic.addEventListener("click", () => {
      if (finished) return;
      sfx().pop();
      if (!SR) { showFallback(); C().speakRaw(o.spoken); return; }
      stopRec();
      let rec;
      try { rec = new SR(); } catch (e) { showFallback(txt("The mic is not available. Tap ✋ after you say it.", "माइक नहीं चल रहा। बोलने के बाद ✋ दबाओ।")); return; }
      activeRec = rec;
      rec.lang = o.lang || "en-IN"; rec.interimResults = false; rec.maxAlternatives = 3; rec.continuous = false;
      let got = false;
      rec.onstart = () => { mic.classList.add("listening"); status.className = "mic-note"; status.textContent = "👂 " + txt("Chotu is listening…", "छोटू सुन रहा है…"); };
      rec.onresult = (e) => {
        got = true;
        const heard = (e.results[0] && e.results[0][0] && e.results[0][0].transcript || "").toLowerCase();
        const acc = (o.accept || []).concat(String(o.word || "").toLowerCase().split(/[ ,]+/)).filter(Boolean);
        const hit = acc.some((w) => heard.indexOf(w) >= 0);
        if (hit || !o.strict) finish(heard); else showFallback(txt("Nice try! Let's say it again.", "अच्छा प्रयास! फिर से बोलते हैं।"));
      };
      rec.onerror = (e) => {
        mic.classList.remove("listening");
        const code = e && e.error;
        showFallback(code === "not-allowed" || code === "service-not-allowed"
          ? txt("The mic is blocked. Tap ✋ after you say it.", "माइक बंद है। बोलने के बाद ✋ दबाओ।")
          : txt("I could not hear you. Try again, or tap ✋.", "मैं सुन नहीं पाया। फिर कोशिश करो, या ✋ दबाओ।"));
      };
      rec.onend = () => { mic.classList.remove("listening"); if (!got && !finished && fall.classList.contains("hidden")) showFallback(txt("I did not hear anything. Tap the mic again, or tap ✋.", "कुछ सुनाई नहीं दिया। माइक फिर दबाओ, या ✋ दबाओ।")); };
      try { rec.start(); } catch (e) { showFallback(); }
    });
    C().speakRaw(o.spoken);
    return { stop: stopRec };
  }

  // ---- "How to play with Chotu" guided intro (about 30 seconds) -------------------------
  function seen() { try { return localStorage.getItem(SEEN_KEY) === "1"; } catch (e) { return false; } }
  function markSeen() { try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) {} }

  function howTo(onFinish) {
    const phone = document.getElementById("phone");
    if (!phone) { if (onFinish) onFinish(); return; }
    const old = document.getElementById("howto"); if (old) old.remove();
    const ov = document.createElement("div");
    ov.id = "howto"; ov.className = "howto";
    phone.appendChild(ov);
    let step = 0, closed = false;
    function close() {
      if (closed) return; closed = true; markSeen(); ov.remove(); C().stopSpeak();
      if (onFinish) onFinish();
    }
    const dots = () => '<div class="howto-dots">' + [0, 1, 2].map((i) => '<i class="' + (i === step ? "on" : i < step ? "ok" : "") + '"></i>').join("") + "</div>";
    function draw() {
      const skip = '<button type="button" class="howto-skip" id="howto-skip">' + esc(txt("Skip", "छोड़ो")) + "</button>";
      if (step === 0) {
        const line = txt("Tap the mango 🥭", "आम 🥭 पर टैप करो।");
        const say = txt("Chotu will ask you something. Like this. Tap the mango.", "छोटू तुमसे कुछ पूछेगा। ऐसे। आम पर टैप करो।");
        ov.innerHTML = skip + dots() + '<h2 class="howto-h">' + esc(txt("1. Tap", "1. टैप करो")) + "</h2>" +
          '<img class="howto-chotu" src="assets/chotu-point.png" alt="">' +
          '<p class="howto-text">' + esc(line) + "</p>" +
          '<div class="choice-row big-choices"><button type="button" class="choice-btn big has-hand" id="ht-apple"><span class="emoji">🍎</span><span class="olabel">' + esc(txt("apple", "सेब")) + '</span></button>' +
          '<button type="button" class="choice-btn big has-hand" id="ht-mango"><span class="emoji">🥭</span><span class="olabel">' + esc(txt("mango", "आम")) + '</span><span class="hand">👆</span></button></div>' +
          '<p class="howto-fb" id="ht-fb"></p>' +
          '<button type="button" class="say-again" id="ht-again"><span class="sa-ico">🔁</span> ' + esc(txt("Say again", "फिर से सुनो")) + "</button>";
        ov.querySelector(".has-hand#ht-apple").classList.remove("has-hand");
        const fb = ov.querySelector("#ht-fb");
        ov.querySelector("#ht-mango").addEventListener("click", () => { sfx().correct(); fb.textContent = "⭐ " + C().praise(); C().speakRaw(C().praise(), null, { remember: false }); setTimeout(() => { step = 1; draw(); }, 1500); });
        ov.querySelector("#ht-apple").addEventListener("click", () => { sfx().wrong(); fb.textContent = "🙂 " + txt("Try the mango 🥭", "आम 🥭 को आज़माओ"); C().speakRaw(txt("Try the mango.", "आम पर टैप करो।"), null, { remember: false }); });
        ov.querySelector("#ht-again").addEventListener("click", () => C().speakRaw(say));
        C().speakRaw(say);
      } else if (step === 1) {
        const say = txt("Sometimes I will ask you to speak. Tap the mic. Then say hello.", "कभी मैं तुम्हें बोलने को कहूँगा। माइक दबाओ। फिर हैलो बोलो।");
        ov.innerHTML = skip + dots() + '<h2 class="howto-h">' + esc(txt("2. Tap and say", "2. टैप करो और बोलो")) + "</h2>" +
          '<img class="howto-chotu" src="assets/chotu-listen.png" alt="">' +
          '<p class="howto-text">' + esc(txt("Say: Hello Chotu 👋", "बोलो: हैलो छोटू 👋")) + "</p>" +
          '<button type="button" class="mic-big" id="ht-mic"><span class="mic-ico">🎤</span><span class="mic-label">' + esc(txt("Tap and say", "टैप करो और बोलो")) + "</span></button>" +
          '<p class="howto-fb" id="ht-fb"></p>' +
          '<button type="button" class="say-again" id="ht-again"><span class="sa-ico">🔁</span> ' + esc(txt("Say again", "फिर से सुनो")) + "</button>";
        ov.querySelector("#ht-mic").addEventListener("click", () => { sfx().correct(); ov.querySelector("#ht-fb").textContent = "👏 " + txt("Great! You can also tap ✋ if the mic is shy.", "बहुत बढ़िया! माइक न चले तो ✋ भी दबा सकते हो।"); C().speakRaw(txt("Great! That is how we talk.", "बहुत बढ़िया! ऐसे हम बात करते हैं।"), null, { remember: false }); setTimeout(() => { step = 2; draw(); }, 2200); });
        ov.querySelector("#ht-again").addEventListener("click", () => C().speakRaw(say));
        C().speakRaw(say);
      } else {
        const say = txt("Every right answer gives you a star. Collect stars and unlock stickers. Let's play!", "हर सही जवाब पर एक तारा मिलता है। तारे जमा करो और स्टिकर खोलो। चलो खेलें!");
        ov.innerHTML = dots() + '<h2 class="howto-h">' + esc(txt("3. Get stars", "3. तारे पाओ")) + "</h2>" +
          '<img class="howto-chotu" src="assets/chotu-clap.png" alt="">' +
          '<p class="howto-text">' + esc(txt("Right answer = ⭐", "सही जवाब = ⭐")) + "</p>" +
          '<div class="howto-stars"><span>⭐</span><span>⭐</span><span>⭐</span></div>' +
          '<button type="button" class="btn btn-leaf" id="ht-go">' + esc(txt("Start learning!", "सीखना शुरू करो!")) + "</button>" +
          '<button type="button" class="say-again" id="ht-again"><span class="sa-ico">🔁</span> ' + esc(txt("Say again", "फिर से सुनो")) + "</button>";
        ov.querySelector("#ht-go").addEventListener("click", close);
        ov.querySelector("#ht-again").addEventListener("click", () => C().speakRaw(say));
        sfx().chime();
        C().speakRaw(say);
      }
      const sk = ov.querySelector("#howto-skip"); if (sk) sk.addEventListener("click", close);
    }
    draw();
    return { close };
  }

  window.ChotuUI = { dedupe, banner, sayAgainBtn, hand, ask, sayTask, stopRec, howTo, howToSeen: seen, orderOptions, playSound, log, esc };
})();

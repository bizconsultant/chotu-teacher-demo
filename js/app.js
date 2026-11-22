(function () {
  "use strict";

  const I18N = {
    en: {
      appName: "Chotu Teacher",
      langBtn: "हिन्दी",
      splashHello: "Hi! I am Chotu Teacher.",
      splashLine: "Let's learn English and Maths together — with lots of fun!",
      greet: "Hi Chotu!",
      start: "Let's go!",
      back: "Back",
      parentTitle: "For parents",
      parentIntro: "Try free for 3 days, then choose a plan. This demo does not take payment.",
      trialBadge: "3-day free trial",
      basicName: "Basic",
      premiumName: "Premium",
      perMonth: "/ month",
      basicList: [
        "English and Maths basics for Nursery, LKG and UKG",
        "Chotu speaks every instruction in English or Hindi",
        "Letters, phonics, numbers, shapes and counting",
        "Finger tracing on the slate",
        "Stars and a simple activity log"
      ],
      premiumList: [
        "Everything in Basic",
        "Talk to Chotu — the child answers by voice",
        "Pronunciation coaching in English and Hindi",
        "Hindi akshar path (swar, vyanjan, simple words)",
        "Indian everyday maths, including rupee coins",
        "Weekly parent report mapped to school topics",
        "Smart practice that reteaches a weak skill",
        "Offline lesson packs and a PIN screen-time lock"
      ],
      startTrial: "Start 3-day trial",
      chooseBasic: "Choose Basic",
      choosePremium: "Choose Premium",
      demoOnly: "Demo only — no payment is collected.",
      homeTitle: "Let's learn!",
      pickAge: "Pick an age band",
      nursery: "Nursery",
      nurseryAge: "3–4 years",
      lkg: "LKG",
      lkgAge: "4–5 years",
      ukg: "UKG",
      ukgAge: "5–6 years",
      english: "English",
      maths: "Maths",
      slate: "Slate",
      talk: "Talk to Chotu",
      rupees: "Rupee coins",
      report: "Parent report",
      premiumTag: "Premium",
      stars: "Stars",
      englishTitle: "Letters A–E",
      tapLetter: "Tap a letter. Chotu will say it!",
      startQuiz: "Find the letter",
      quizTitle: "Find the letter",
      findLetter: "Find this letter:",
      nextQ: "Next",
      doneLesson: "All done! Home",
      mathsTitle: "Counting 1–10",
      countIntro: "Count the mangoes and laddoos.",
      howMany: "How many?",
      hearCount: "Hear Chotu count",
      startMathsQuiz: "How many?",
      mathsQuizTitle: "How many?",
      slateTitle: "Chotu's slate",
      slateHint: "Trace the letter or number with your finger.",
      clear: "Clear",
      nextGlyph: "Next",
      done: "Done",
      talkTitle: "Talk to Chotu",
      talkHint: "Say a letter A to E, or a number 1 to 10.",
      listen: "I'm listening… say a letter or number",
      tapMic: "Tap the mic and speak",
      noSpeech: "Voice listening is not available in this browser. Tap a letter or number instead.",
      fallbackTitle: "Or tap here:",
      mic: "Speak to Chotu",
      stop: "Stop",
      reportTitle: "Weekly parent report",
      sampleData: "Sample data — not a real child",
      childName: "Child",
      sampleChild: "Aarav, LKG",
      week: "Week of 16 Nov 2026",
      englishProgress: "English",
      mathsProgress: "Maths",
      speaking: "Speaking practice",
      hindiPath: "Hindi akshar",
      nextFocus: "Next week",
      engVal: "Letters A–E, starting sounds",
      mathVal: "Counting to 10, rupee play",
      speakVal: "Said 12 words clearly",
      hindiVal: "Swar अ आ इ",
      nextVal: "Letter F, numbers 11–20",
      rupeeTitle: "Rupee coins",
      rupeeQ: "How many rupees in all?",
      rupeeNext: "Next coins",
      great: "Yes! Super star!",
      tryAgain: "Almost! Try again.",
      heard: "I heard:",
      greetSpeech: "Hi! I am Chotu Teacher. Let's learn English and Maths together, with lots of fun!",
      letterSpeech: {
        A: "A for Apple. A se Aam.",
        B: "B for Ball. B se Bandar.",
        C: "C for Cat. C se Chidiya.",
        D: "D for Dog. D se Diya.",
        E: "E for Elephant. E se Elephant."
      },
      letterLabel: {
        A: "A for Apple · A se Aam (mango)",
        B: "B for Ball · B se Bandar (monkey)",
        C: "C for Cat · C se Chidiya (bird)",
        D: "D for Dog · D se Diya (lamp)",
        E: "E for Elephant · E se Elephant"
      },
      mangoes: "mangoes",
      laddoos: "laddoos",
      countSpeech: (n, item) => "There are " + n + " " + item + ".",
      praise: ["Yes! Super star!", "Wah! Very good!", "Fantastic!", "You did it!"],
      retry: ["Almost! Try again.", "Have another look.", "You can do it!"],
      planTrial: "You are on the 3-day free trial. All Premium previews are open.",
      planBasic: "Basic plan (demo). Premium cards still open as a preview.",
      planPremium: "Premium plan (demo). Enjoy Talk to Chotu and more!",
      heardUnknown: "I did not catch a letter or number. Please try again, or tap a button."
    },
    hi: {
      appName: "छोटू टीचर",
      langBtn: "English",
      splashHello: "नमस्ते! मैं छोटू टीचर हूँ।",
      splashLine: "चलो, अंग्रेज़ी और गणित मज़े-मज़े से सीखते हैं!",
      greet: "नमस्ते छोटू!",
      start: "चलो शुरू करें!",
      back: "वापस",
      parentTitle: "माता-पिता के लिए",
      parentIntro: "3 दिन मुफ़्त आज़माएँ, फिर योजना चुनें। यह डेमो भुगतान नहीं लेता।",
      trialBadge: "3 दिन का मुफ़्त ट्रायल",
      basicName: "बेसिक",
      premiumName: "प्रीमियम",
      perMonth: "/ महीना",
      basicList: [
        "नर्सरी, एलकेजी और यूकेजी के लिए अंग्रेज़ी और गणित की मूल बातें",
        "छोटू हर निर्देश अंग्रेज़ी या हिन्दी में बोलता है",
        "अक्षर, ध्वनियाँ, संख्याएँ, आकृतियाँ और गिनती",
        "स्लेट पर उँगली से अक्षर बनाना",
        "सितारे और एक सरल गतिविधि सूची"
      ],
      premiumList: [
        "बेसिक की सारी बातें",
        "छोटू से बातें — बच्चा आवाज़ में जवाब दे",
        "अंग्रेज़ी और हिन्दी में उच्चारण की मदद",
        "हिन्दी अक्षर पथ (स्वर, व्यंजन, सरल शब्द)",
        "भारतीय रोज़मर्रा का गणित, रुपये के सिक्के सहित",
        "स्कूल के विषयों से जुड़ी साप्ताहिक रिपोर्ट",
        "कमज़ोर कौशल को फिर से सिखाने वाला अभ्यास",
        "ऑफ़लाइन पाठ और पिन वाला स्क्रीन-टाइम लॉक"
      ],
      startTrial: "3 दिन का ट्रायल शुरू करें",
      chooseBasic: "बेसिक चुनें",
      choosePremium: "प्रीमियम चुनें",
      demoOnly: "केवल डेमो — कोई भुगतान नहीं लिया जाता।",
      homeTitle: "चलो सीखें!",
      pickAge: "आयु वर्ग चुनें",
      nursery: "नर्सरी",
      nurseryAge: "3–4 साल",
      lkg: "एलकेजी",
      lkgAge: "4–5 साल",
      ukg: "यूकेजी",
      ukgAge: "5–6 साल",
      english: "अंग्रेज़ी",
      maths: "गणित",
      slate: "स्लेट",
      talk: "छोटू से बातें",
      rupees: "रुपये के सिक्के",
      report: "अभिभावक रिपोर्ट",
      premiumTag: "प्रीमियम",
      stars: "सितारे",
      englishTitle: "अक्षर A–E",
      tapLetter: "एक अक्षर दबाएँ। छोटू उसे बोलेगा!",
      startQuiz: "अक्षर ढूँढो",
      quizTitle: "अक्षर ढूँढो",
      findLetter: "यह अक्षर ढूँढो:",
      nextQ: "अगला",
      doneLesson: "हो गया! होम",
      mathsTitle: "गिनती 1–10",
      countIntro: "आम और लड्डू गिनो।",
      howMany: "कितने हैं?",
      hearCount: "छोटू से गिनती सुनो",
      startMathsQuiz: "कितने हैं?",
      mathsQuizTitle: "कितने हैं?",
      slateTitle: "छोटू की स्लेट",
      slateHint: "उँगली से अक्षर या संख्या बनाओ।",
      clear: "साफ़ करो",
      nextGlyph: "अगला",
      done: "हो गया",
      talkTitle: "छोटू से बातें",
      talkHint: "A से E तक कोई अक्षर, या 1 से 10 तक कोई संख्या बोलो।",
      listen: "मैं सुन रहा हूँ… एक अक्षर या संख्या बोलो",
      tapMic: "माइक दबाकर बोलो",
      noSpeech: "इस ब्राउज़र में आवाज़ सुनना उपलब्ध नहीं है। अक्षर या संख्या दबाएँ।",
      fallbackTitle: "या यहाँ दबाएँ:",
      mic: "छोटू से बोलो",
      stop: "रोको",
      reportTitle: "साप्ताहिक अभिभावक रिपोर्ट",
      sampleData: "नमूना डेटा — यह कोई असली बच्चा नहीं है",
      childName: "बच्चा",
      sampleChild: "आरव, एलकेजी",
      week: "सप्ताह: 16 नवम्बर 2026",
      englishProgress: "अंग्रेज़ी",
      mathsProgress: "गणित",
      speaking: "बोलने का अभ्यास",
      hindiPath: "हिन्दी अक्षर",
      nextFocus: "अगला सप्ताह",
      engVal: "अक्षर A–E, पहली ध्वनियाँ",
      mathVal: "10 तक गिनती, रुपये का खेल",
      speakVal: "12 शब्द साफ़ बोले",
      hindiVal: "स्वर अ आ इ",
      nextVal: "अक्षर F, संख्या 11–20",
      rupeeTitle: "रुपये के सिक्के",
      rupeeQ: "कुल कितने रुपये हैं?",
      rupeeNext: "अगले सिक्के",
      great: "हाँ! सुपर स्टार!",
      tryAgain: "लगभग! फिर से कोशिश करो।",
      heard: "मैंने सुना:",
      greetSpeech: "नमस्ते! मैं छोटू टीचर हूँ। चलो, अंग्रेज़ी और गणित मज़े-मज़े से सीखते हैं!",
      letterSpeech: {
        A: "A फॉर एपल। अ से आम।",
        B: "B फॉर बॉल। ब से बंदर।",
        C: "C फॉर कैट। च से चिड़िया।",
        D: "D फॉर डॉग। द से दिया।",
        E: "E फॉर एलिफेंट। ई से एलिफेंट।"
      },
      letterLabel: {
        A: "A for Apple · अ से आम",
        B: "B for Ball · ब से बंदर",
        C: "C for Cat · च से चिड़िया",
        D: "D for Dog · द से दिया",
        E: "E for Elephant · ई से एलिफेंट"
      },
      mangoes: "आम",
      laddoos: "लड्डू",
      countSpeech: (n, item) => item + " हैं " + n + "।",
      praise: ["हाँ! सुपर स्टार!", "वाह! बहुत अच्छे!", "शानदार!", "कर लिया तुमने!"],
      retry: ["लगभग! फिर से देखो।", "एक और बार देखो।", "तुम कर सकते हो!"],
      planTrial: "आप 3 दिन के मुफ़्त ट्रायल पर हैं। सारे प्रीमियम पूर्वावलोकन खुले हैं।",
      planBasic: "बेसिक योजना (डेमो)। प्रीमियम कार्ड पूर्वावलोकन के रूप में खुले हैं।",
      planPremium: "प्रीमियम योजना (डेमो)। छोटू से बातें और भी मज़ेदार हैं!",
      heardUnknown: "मुझे अक्षर या संख्या साफ़ नहीं सुनाई दी। फिर से बोलो, या बटन दबाओ।"
    }
  };

  const LETTERS = ["A", "B", "C", "D", "E"];
  const GLYPHS = ["A", "B", "C", "1", "2", "5"];

  const state = {
    lang: "en",
    stars: 0,
    plan: "none",
    age: "nursery",
    screen: "splash",
    selectedLetter: "A",
    quizIndex: 0,
    quizCorrect: "A",
    quizChoices: ["A", "B", "C"],
    mathsCount: 3,
    mathsItem: "mango",
    mathsChoices: [2, 3, 4],
    quizAnswered: false,
    slateIndex: 0,
    rupeeCoins: [1, 2, 2],
    rupeeChoices: [3, 5, 7],
    rupeeAnswered: false,
    listening: false
  };

  let recognition = null;
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function t(key) {
    const pack = I18N[state.lang] || I18N.en;
    return pack[key];
  }

  function applyI18n() {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-list]").forEach((el) => {
      const key = el.getAttribute("data-i18n-list");
      const items = t(key);
      el.innerHTML = "";
      if (Array.isArray(items)) {
        items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          el.appendChild(li);
        });
      }
    });
    const langBtn = $("#lang-btn");
    if (langBtn) langBtn.textContent = t("langBtn");
    const starCount = $("#star-count");
    if (starCount) starCount.textContent = String(state.stars);
    document.documentElement.lang = state.lang === "hi" ? "hi" : "en";
    const title = $("#top-title");
    if (title) title.textContent = t(screenTitleKey(state.screen));
    const mic = $("#btn-mic");
    if (mic) mic.textContent = state.listening ? t("stop") : t("mic");
    updatePlanBanner();
    updatePhonic();
    updateQuizPrompt();
    updateMathsView();
    updateRupeeView();
    updateTalkStatus();
  }

  function screenTitleKey(id) {
    const titles = {
      splash: "appName",
      parent: "parentTitle",
      home: "homeTitle",
      english: "englishTitle",
      "english-quiz": "quizTitle",
      maths: "mathsTitle",
      "maths-quiz": "mathsQuizTitle",
      slate: "slateTitle",
      talk: "talkTitle",
      report: "reportTitle",
      rupees: "rupeeTitle"
    };
    return titles[id] || "appName";
  }

  function showScreen(id) {
    state.screen = id;
    $$(".screen").forEach((s) => s.classList.toggle("active", s.id === "screen-" + id));
    const scroller = $(".screens");
    if (scroller) scroller.scrollTop = 0;
    const back = $("#back-btn");
    if (back) back.classList.toggle("hidden", id === "splash");
    const title = $("#top-title");
    if (title) title.textContent = t(screenTitleKey(id));
    if (id === "slate") setTimeout(resizeSlate, 40);
    if (id === "talk") updateTalkStatus();
    if (state.listening) stopListening();
  }

  function pickVoice(langCode) {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    if (!voices.length) return null;
    const want = langCode.toLowerCase();
    const norm = (v) => (v.lang || "").toLowerCase().replace("_", "-");
    return (
      voices.find((v) => norm(v) === want) ||
      voices.find((v) => norm(v).startsWith(want.slice(0, 2) + "-in")) ||
      voices.find((v) => norm(v).startsWith(want.slice(0, 2))) ||
      null
    );
  }

  function speakRaw(text, langOverride) {
    if (!window.speechSynthesis || !text) return;
    const lang = langOverride || (state.lang === "hi" ? "hi-IN" : "en-IN");
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.pitch = 1.6;
    u.rate = 0.95;
    const voice = pickVoice(lang);
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
  }

  function greet() {
    speakRaw(t("greetSpeech"));
  }

  function addStars(n) {
    state.stars += n;
    const el = $("#star-count");
    if (el) el.textContent = String(state.stars);
    const burst = document.createElement("div");
    burst.className = "star-burst";
    burst.textContent = "⭐";
    burst.setAttribute("aria-hidden", "true");
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 800);
  }

  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 1600);
  }

  function updatePlanBanner() {
    const el = $("#plan-banner");
    if (!el) return;
    if (state.plan === "trial") el.textContent = t("planTrial");
    else if (state.plan === "basic") el.textContent = t("planBasic");
    else if (state.plan === "premium") el.textContent = t("planPremium");
    else el.textContent = "";
  }

  function setPlan(plan) {
    state.plan = plan;
    updatePlanBanner();
    showScreen("home");
  }

  function setAge(age) {
    state.age = age;
    $$(".age-chip").forEach((b) => b.classList.toggle("active", b.getAttribute("data-age") === age));
  }

  function updatePhonic() {
    const letter = state.selectedLetter;
    const pack = I18N[state.lang];
    const box = $("#phonic");
    if (!box) return;
    box.innerHTML = '<span class="big">' + letter + "</span>" + (pack.letterLabel[letter] || "");
  }

  function sayLetter(letter) {
    state.selectedLetter = letter;
    $$(".letter-pad .letter-btn").forEach((b) =>
      b.classList.toggle("active", b.getAttribute("data-letter") === letter)
    );
    updatePhonic();
    const pack = I18N[state.lang];
    const text = pack.letterSpeech[letter];
    const lang = state.lang === "hi" ? "hi-IN" : "en-IN";
    speakRaw(text, lang);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function newLetterQuiz() {
    const correct = LETTERS[state.quizIndex % LETTERS.length];
    const others = shuffle(LETTERS.filter((l) => l !== correct)).slice(0, 2);
    state.quizCorrect = correct;
    state.quizChoices = shuffle([correct].concat(others));
    state.quizAnswered = false;
    updateQuizPrompt();
    const fb = $("#english-feedback");
    if (fb) {
      fb.textContent = "";
      fb.className = "feedback";
    }
  }

  function updateQuizPrompt() {
    const el = $("#quiz-letter");
    if (el) el.textContent = state.quizCorrect;
    const box = $("#quiz-options");
    if (!box) return;
    box.innerHTML = "";
    state.quizChoices.forEach((l) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "letter-btn";
      b.textContent = l;
      b.setAttribute("data-choice", l);
      b.addEventListener("click", () => answerLetter(l));
      box.appendChild(b);
    });
  }

  function answerLetter(choice) {
    if (state.quizAnswered) return;
    const fb = $("#english-feedback");
    const pack = I18N[state.lang];
    if (choice === state.quizCorrect) {
      state.quizAnswered = true;
      const msg = pack.praise[Math.floor(Math.random() * pack.praise.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback ok";
      }
      speakRaw(msg);
      addStars(1);
    } else {
      const msg = pack.retry[Math.floor(Math.random() * pack.retry.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback no";
      }
      speakRaw(msg);
    }
  }

  function mangoSVG() {
    return (
      '<svg class="obj" viewBox="0 0 64 64" aria-hidden="true">' +
      '<ellipse cx="32" cy="38" rx="18" ry="22" fill="#FFB703" transform="rotate(-18 32 38)"/>' +
      '<ellipse cx="32" cy="38" rx="12" ry="16" fill="#FCD34D" transform="rotate(-18 32 38)" opacity="0.7"/>' +
      '<path d="M40 16 Q46 8 54 12" stroke="#2D6A4F" fill="none" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="50" cy="14" rx="8" ry="4" fill="#40916C" transform="rotate(-28 50 14)"/>' +
      "</svg>"
    );
  }

  function laddooSVG() {
    return (
      '<svg class="obj" viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="32" cy="34" r="20" fill="#C17F2A"/>' +
      '<circle cx="32" cy="32" r="18" fill="#E09F3E"/>' +
      '<circle cx="32" cy="32" r="12" fill="#F4D35E"/>' +
      '<circle cx="24" cy="26" r="2.2" fill="#C17F2A"/>' +
      '<circle cx="36" cy="24" r="2" fill="#C17F2A"/>' +
      '<circle cx="40" cy="34" r="2.1" fill="#C17F2A"/>' +
      '<circle cx="28" cy="38" r="1.8" fill="#C17F2A"/>' +
      "</svg>"
    );
  }

  function renderObjects(container, count, item) {
    if (!container) return;
    container.innerHTML = "";
    const html = item === "laddoo" ? laddooSVG() : mangoSVG();
    for (let i = 0; i < count; i++) container.insertAdjacentHTML("beforeend", html);
  }

  function setupMathsLesson() {
    state.mathsCount = 4;
    state.mathsItem = "mango";
    updateMathsView();
    speakCount();
  }

  function updateMathsView() {
    const lessonBox = $("#maths-objects");
    if (lessonBox && state.screen === "maths") {
      renderObjects(lessonBox, state.mathsCount, state.mathsItem);
    }
    const quizBox = $("#maths-quiz-objects");
    if (quizBox && state.screen === "maths-quiz") {
      renderObjects(quizBox, state.mathsCount, state.mathsItem);
    }
    const label = $("#maths-label");
    if (label) {
      const item = state.mathsItem === "laddoo" ? t("laddoos") : t("mangoes");
      label.textContent = state.mathsCount + " " + item;
    }
    const opts = $("#maths-options");
    if (opts && state.screen === "maths-quiz") {
      opts.innerHTML = "";
      state.mathsChoices.forEach((n) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "letter-btn";
        b.textContent = String(n);
        b.addEventListener("click", () => answerMaths(n));
        opts.appendChild(b);
      });
    }
  }

  function speakCount() {
    const item = state.mathsItem === "laddoo" ? t("laddoos") : t("mangoes");
    const pack = I18N[state.lang];
    speakRaw(pack.countSpeech(state.mathsCount, item));
  }

  function cycleMathsLesson() {
    const n = (state.mathsCount % 10) + 1;
    state.mathsCount = n;
    state.mathsItem = n % 2 === 0 ? "laddoo" : "mango";
    updateMathsView();
    speakCount();
  }

  function newMathsQuiz() {
    const n = 1 + Math.floor(Math.random() * 10);
    state.mathsCount = n;
    state.mathsItem = n % 2 === 0 ? "laddoo" : "mango";
    const wrongs = [];
    while (wrongs.length < 2) {
      const w = 1 + Math.floor(Math.random() * 10);
      if (w !== n && wrongs.indexOf(w) === -1) wrongs.push(w);
    }
    state.mathsChoices = shuffle([n].concat(wrongs));
    state.quizAnswered = false;
    const fb = $("#maths-feedback");
    if (fb) {
      fb.textContent = "";
      fb.className = "feedback";
    }
    updateMathsView();
  }

  function answerMaths(n) {
    if (state.quizAnswered) return;
    const fb = $("#maths-feedback");
    const pack = I18N[state.lang];
    if (n === state.mathsCount) {
      state.quizAnswered = true;
      const msg = pack.praise[Math.floor(Math.random() * pack.praise.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback ok";
      }
      speakRaw(msg);
      addStars(1);
    } else {
      const msg = pack.retry[Math.floor(Math.random() * pack.retry.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback no";
      }
      speakRaw(msg);
    }
  }

  /* Slate */
  const slate = {
    ctx: null,
    canvas: null,
    drawing: false,
    last: null
  };

  function resizeSlate() {
    const c = $("#slate");
    if (!c) return;
    const rect = c.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    c.width = Math.max(1, Math.floor(rect.width * dpr));
    c.height = Math.max(1, Math.floor(280 * dpr));
    slate.canvas = c;
    slate.ctx = c.getContext("2d");
    drawGlyphGuide();
  }

  function drawGlyphGuide() {
    const c = slate.canvas;
    const ctx = slate.ctx;
    if (!c || !ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#2b2b2b";
    ctx.fillRect(0, 0, c.width, c.height);
    const g = GLYPHS[state.slateIndex % GLYPHS.length];
    ctx.save();
    ctx.fillStyle = "rgba(255,255,255,0.16)";
    ctx.font = "bold " + Math.floor(c.height * 0.72) + "px " + "Fredoka, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(g, c.width / 2, c.height / 2 + c.height * 0.04);
    ctx.restore();
    const label = $("#slate-glyph");
    if (label) label.textContent = g;
  }

  function slatePos(e) {
    const c = slate.canvas;
    const r = c.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return {
      x: ((src.clientX - r.left) / r.width) * c.width,
      y: ((src.clientY - r.top) / r.height) * c.height
    };
  }

  function slateStart(e) {
    e.preventDefault();
    slate.drawing = true;
    slate.last = slatePos(e);
  }

  function slateMove(e) {
    if (!slate.drawing) return;
    e.preventDefault();
    const p = slatePos(e);
    const ctx = slate.ctx;
    ctx.strokeStyle = "#f4f1e8";
    ctx.lineWidth = Math.max(10, slate.canvas.width * 0.028);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(slate.last.x, slate.last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    slate.last = p;
  }

  function slateEnd(e) {
    if (e) e.preventDefault();
    slate.drawing = false;
    slate.last = null;
  }

  /* Talk to Chotu */
  function parseSpeech(text) {
    const s = (text || "").toLowerCase().trim();
    const map = {
      a: "A",
      ay: "A",
      eh: "A",
      apple: "A",
      aam: "A",
      "ए": "A",
      "अ": "A",
      "आम": "A",
      b: "B",
      bee: "B",
      ball: "B",
      bandar: "B",
      "बी": "B",
      "ब": "B",
      "बंदर": "B",
      c: "C",
      see: "C",
      sea: "C",
      cat: "C",
      chidiya: "C",
      "सी": "C",
      "च": "C",
      "चिड़िया": "C",
      d: "D",
      dee: "D",
      dog: "D",
      diya: "D",
      "डी": "D",
      "द": "D",
      "दिया": "D",
      e: "E",
      ee: "E",
      elephant: "E",
      "ई": "E",
      "एलीफेंट": "E",
      one: "1",
      "1": "1",
      ek: "1",
      "एक": "1",
      two: "2",
      "2": "2",
      do: "2",
      "दो": "2",
      three: "3",
      "3": "3",
      teen: "3",
      "तीन": "3",
      four: "4",
      "4": "4",
      char: "4",
      "चार": "4",
      five: "5",
      "5": "5",
      paanch: "5",
      panch: "5",
      "पाँच": "5",
      "पांच": "5",
      six: "6",
      "6": "6",
      chhe: "6",
      "छह": "6",
      seven: "7",
      "7": "7",
      saat: "7",
      "सात": "7",
      eight: "8",
      "8": "8",
      aath: "8",
      "आठ": "8",
      nine: "9",
      "9": "9",
      nau: "9",
      "नौ": "9",
      ten: "10",
      "10": "10",
      das: "10",
      "दस": "10"
    };
    if (map[s]) return map[s];
    const words = s.split(/[\s,।.]+/);
    for (let i = 0; i < words.length; i++) {
      if (map[words[i]]) return map[words[i]];
    }
    const m = s.match(/\b([1-9]|10)\b/);
    if (m) return m[1];
    const letter = s.match(/\b([a-e])\b/i);
    if (letter) return letter[1].toUpperCase();
    return null;
  }

  function respondToToken(token) {
    const status = $("#talk-heard");
    if (LETTERS.indexOf(token) !== -1) {
      if (status) status.textContent = t("heard") + " " + token;
      sayLetter(token);
      addStars(1);
      return;
    }
    if (/^(?:[1-9]|10)$/.test(token)) {
      const n = parseInt(token, 10);
      state.mathsCount = n;
      state.mathsItem = n % 2 === 0 ? "laddoo" : "mango";
      if (status) status.textContent = t("heard") + " " + token;
      speakCount();
      addStars(1);
      return;
    }
    if (status) status.textContent = t("heardUnknown");
    speakRaw(t("heardUnknown"));
  }

  function updateTalkStatus() {
    const hint = $("#talk-support");
    const fallback = $("#talk-fallback");
    if (!hint || !fallback) return;
    if (!SpeechRec) {
      hint.textContent = t("noSpeech");
      fallback.classList.remove("hidden");
    } else if (state.listening) {
      hint.textContent = t("listen");
    } else {
      hint.textContent = t("tapMic");
    }
  }

  function startListening() {
    if (!SpeechRec) {
      updateTalkStatus();
      return;
    }
    try {
      if (recognition) {
        recognition.onend = null;
        recognition.abort();
      }
    } catch (err) {
      /* ignore */
    }
    recognition = new SpeechRec();
    recognition.lang = state.lang === "hi" ? "hi-IN" : "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.onresult = function (ev) {
      let text = "";
      if (ev.results && ev.results[0] && ev.results[0][0]) text = ev.results[0][0].transcript || "";
      const token = parseSpeech(text);
      if (token) respondToToken(token);
      else {
        const status = $("#talk-heard");
        if (status) status.textContent = t("heard") + " " + (text || "…");
        speakRaw(t("heardUnknown"));
      }
    };
    recognition.onerror = function () {
      state.listening = false;
      $("#screen-talk").classList.remove("listening");
      updateTalkStatus();
    };
    recognition.onend = function () {
      state.listening = false;
      $("#screen-talk").classList.remove("listening");
      updateTalkStatus();
    };
    try {
      recognition.start();
      state.listening = true;
      $("#screen-talk").classList.add("listening");
      const mic = $("#btn-mic");
      if (mic) mic.textContent = t("stop");
      updateTalkStatus();
    } catch (err) {
      state.listening = false;
      updateTalkStatus();
    }
  }

  function stopListening() {
    state.listening = false;
    const screen = $("#screen-talk");
    if (screen) screen.classList.remove("listening");
    const mic = $("#btn-mic");
    if (mic) mic.textContent = t("mic");
    try {
      if (recognition) recognition.stop();
    } catch (err) {
      /* ignore */
    }
    updateTalkStatus();
  }

  /* Rupees */
  function newRupeeRound() {
    const sets = [
      [1, 1, 2],
      [2, 2],
      [5],
      [1, 2, 5],
      [2, 2, 1, 1],
      [10],
      [5, 2, 1],
      [1, 1, 1, 2]
    ];
    const coins = sets[Math.floor(Math.random() * sets.length)];
    state.rupeeCoins = coins;
    const total = coins.reduce((a, b) => a + b, 0);
    const wrongs = [];
    while (wrongs.length < 2) {
      const w = total + (Math.floor(Math.random() * 5) - 2);
      if (w > 0 && w !== total && wrongs.indexOf(w) === -1) wrongs.push(w);
    }
    state.rupeeChoices = shuffle([total].concat(wrongs));
    state.rupeeAnswered = false;
    const fb = $("#rupee-feedback");
    if (fb) {
      fb.textContent = "";
      fb.className = "feedback";
    }
    updateRupeeView();
  }

  function updateRupeeView() {
    const box = $("#coin-row");
    if (!box) return;
    box.innerHTML = "";
    state.rupeeCoins.forEach((v) => {
      const d = document.createElement("div");
      d.className = "coin";
      d.textContent = "₹" + v;
      box.appendChild(d);
    });
    const opts = $("#rupee-options");
    if (!opts) return;
    opts.innerHTML = "";
    state.rupeeChoices.forEach((n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "letter-btn";
      b.textContent = "₹" + n;
      b.addEventListener("click", () => answerRupee(n));
      opts.appendChild(b);
    });
  }

  function answerRupee(n) {
    if (state.rupeeAnswered) return;
    const total = state.rupeeCoins.reduce((a, b) => a + b, 0);
    const fb = $("#rupee-feedback");
    const pack = I18N[state.lang];
    if (n === total) {
      state.rupeeAnswered = true;
      const msg = pack.praise[Math.floor(Math.random() * pack.praise.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback ok";
      }
      speakRaw(msg);
      addStars(1);
    } else {
      const msg = pack.retry[Math.floor(Math.random() * pack.retry.length)];
      if (fb) {
        fb.textContent = msg;
        fb.className = "feedback no";
      }
      speakRaw(msg);
    }
  }

  function bind() {
    $("#lang-btn").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "hi" : "en";
      applyI18n();
    });
    $("#back-btn").addEventListener("click", () => {
      const map = {
        parent: "splash",
        home: "parent",
        english: "home",
        "english-quiz": "english",
        maths: "home",
        "maths-quiz": "maths",
        slate: "home",
        talk: "home",
        report: "home",
        rupees: "home"
      };
      showScreen(map[state.screen] || "home");
    });
    $("#btn-greet").addEventListener("click", greet);
    $("#btn-start").addEventListener("click", () => showScreen("parent"));
    $("#btn-trial").addEventListener("click", () => setPlan("trial"));
    $("#btn-basic").addEventListener("click", () => setPlan("basic"));
    $("#btn-premium").addEventListener("click", () => setPlan("premium"));
    $$(".age-chip").forEach((b) =>
      b.addEventListener("click", () => setAge(b.getAttribute("data-age")))
    );
    $("#card-english").addEventListener("click", () => {
      state.selectedLetter = "A";
      showScreen("english");
      updatePhonic();
      $$(".letter-pad .letter-btn").forEach((b) =>
        b.classList.toggle("active", b.getAttribute("data-letter") === "A")
      );
    });
    $("#card-maths").addEventListener("click", () => {
      showScreen("maths");
      setupMathsLesson();
    });
    $("#card-slate").addEventListener("click", () => {
      showScreen("slate");
      setTimeout(resizeSlate, 40);
    });
    $("#card-talk").addEventListener("click", () => {
      showScreen("talk");
      buildTalkFallback();
    });
    $("#card-rupees").addEventListener("click", () => {
      showScreen("rupees");
      newRupeeRound();
    });
    $("#card-report").addEventListener("click", () => showScreen("report"));

    $$(".letter-pad .letter-btn").forEach((b) =>
      b.addEventListener("click", () => sayLetter(b.getAttribute("data-letter")))
    );
    $("#btn-english-quiz").addEventListener("click", () => {
      state.quizIndex = 0;
      showScreen("english-quiz");
      newLetterQuiz();
    });
    $("#btn-english-next").addEventListener("click", () => {
      state.quizIndex = (state.quizIndex + 1) % LETTERS.length;
      newLetterQuiz();
    });
    $("#btn-english-home").addEventListener("click", () => showScreen("home"));
    $("#btn-maths-count").addEventListener("click", cycleMathsLesson);
    $("#btn-maths-quiz").addEventListener("click", () => {
      showScreen("maths-quiz");
      newMathsQuiz();
    });
    $("#btn-maths-next").addEventListener("click", newMathsQuiz);
    $("#btn-maths-home").addEventListener("click", () => showScreen("home"));

    const c = $("#slate");
    c.addEventListener("pointerdown", slateStart);
    c.addEventListener("pointermove", slateMove);
    c.addEventListener("pointerup", slateEnd);
    c.addEventListener("pointercancel", slateEnd);
    c.addEventListener("pointerleave", slateEnd);
    $("#btn-slate-clear").addEventListener("click", drawGlyphGuide);
    $("#btn-slate-next").addEventListener("click", () => {
      state.slateIndex += 1;
      drawGlyphGuide();
    });
    $("#btn-slate-done").addEventListener("click", () => {
      addStars(1);
      speakRaw(I18N[state.lang].praise[0]);
      showScreen("home");
    });

    $("#btn-mic").addEventListener("click", () => {
      if (state.listening) stopListening();
      else startListening();
    });
    $("#btn-rupee-next").addEventListener("click", newRupeeRound);

    window.addEventListener("resize", () => {
      if (state.screen === "slate") resizeSlate();
    });
    if (window.speechSynthesis) {
      speechSynthesis.getVoices();
      speechSynthesis.addEventListener("voiceschanged", () => {
        /* voices now available */
      });
    }
  }

  function buildTalkFallback() {
    const box = $("#talk-keys");
    if (!box) return;
    box.innerHTML = "";
    LETTERS.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]).forEach((tok) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "letter-btn";
      b.textContent = tok;
      b.style.minHeight = "56px";
      b.addEventListener("click", () => respondToToken(tok));
      box.appendChild(b);
    });
    box.style.display = "grid";
    box.style.gridTemplateColumns = "repeat(5, 1fr)";
    box.style.gap = "8px";
  }

  function init() {
    bind();
    applyI18n();
    showScreen("splash");
    buildTalkFallback();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

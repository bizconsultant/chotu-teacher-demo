/* Chotu Teacher: Rhymes (Nursery and LKG).
   Traditional nursery rhymes in the public domain, recited slowly by Chotu with karaoke-style
   highlighting, a simple tune (Web Audio), "Sing with me" (mic with tap fallback) and a short fun check. */
(function () {
  "use strict";
  const C = () => window.Chotu;
  const UI = () => window.ChotuUI;
  const KEY = "chotuRhymes";
  const sfx = () => window.ChotuSfx || { pop() {}, correct() {}, chime() {} };
  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { store = {}; }
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

  const O = (v, e, en, hi) => ({ value: v, emoji: e, label: en, labelHi: hi || en });
  const N = (n) => ({ value: String(n), emoji: "", label: String(n), labelHi: String(n) });
  const EMO = /\s*[\u{1F000}-\u{1FFFF}\u{2190}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]+\s*/gu;
  const plain = (t) => String(t).replace(EMO, " ").replace(/\s+([.?!।])/g, "$1").replace(/\s+/g, " ").trim();
  function Q(id, qEn, qHi, vis, opts, ans, hEn, hHi) {
    qEn = plain(qEn); qHi = plain(qHi);
    return { id, qEn, qHi, instrEn: qEn, instrHi: qHi, speakEn: qEn.replace(/[^\w\s?',.!]/g, ""), speakHi: qHi, showEmoji: vis, options: opts, answer: ans, hintEn: hEn, hintHi: hHi };
  }

  // note names -> frequency (C4 = 261.63)
  const NOTE = { C: 261.63, D: 293.66, E: 329.63, F: 349.23, G: 392.0, A: 440.0, B: 493.88, c: 523.25 };
  const TW = [["C", "C", "G", "G", "A", "A", "G"], ["F", "F", "E", "E", "D", "D", "C"], ["G", "G", "F", "F", "E", "E", "D"], ["G", "G", "F", "F", "E", "E", "D"], ["C", "C", "G", "G", "A", "A", "G"], ["F", "F", "E", "E", "D", "D", "C"]];
  const PENTA = ["C", "D", "E", "G", "A", "c"];
  function gentle(lines) { // simple rising and falling pentatonic phrases for rhymes without a fixed tune here
    return lines.map((_, li) => Array.from({ length: 12 }, (__, i) => PENTA[Math.abs(((i + li * 2) % 10) - 5) % 6]));
  }

  const RHYMES = [
    { id: "twinkle", emoji: "⭐", lang: "en-IN", titleEn: "Twinkle Twinkle Little Star", titleHi: "ट्विंकल ट्विंकल लिटिल स्टार",
      lines: ["Twinkle, twinkle, little star,", "How I wonder what you are!", "Up above the world so high,", "Like a diamond in the sky.", "Twinkle, twinkle, little star,", "How I wonder what you are!"],
      tune: TW,
      quiz: [
        Q("tw1", "Tap what twinkles in the sky ⭐", "आसमान में जो टिमटिमाता है उस पर टैप करो। ⭐", "", [O("star", "⭐", "star", "तारा"), O("car", "🚗", "car", "गाड़ी"), O("fish", "🐟", "fish", "मछली")], "star", "Twinkle, twinkle, little…?", "ट्विंकल, ट्विंकल, लिटिल…?"),
        Q("tw2", "The star is like a … in the sky 💎", "आसमान में तारा किसके जैसा है? 💎", "", [O("diamond", "💎", "diamond", "हीरा"), O("ball", "⚽", "ball", "गेंद"), O("apple", "🍎", "apple", "सेब")], "diamond", "Like a diamond in the sky.", "आसमान में हीरे जैसा।"),
        Q("tw3", "Finish it: Twinkle, twinkle, little …", "पूरा करो: ट्विंकल, ट्विंकल, लिटिल …", "", [O("star", "⭐", "star", "स्टार"), O("sun", "☀️", "sun", "सूरज"), O("moon", "🌙", "moon", "चाँद")], "star", "It is a little star.", "यह एक छोटा तारा है।")
      ] },
    { id: "baa", emoji: "🐑", lang: "en-IN", titleEn: "Baa Baa Black Sheep", titleHi: "बा बा ब्लैक शीप",
      lines: ["Baa, baa, black sheep, have you any wool?", "Yes sir, yes sir, three bags full.", "One for the master, one for the dame,", "And one for the little boy who lives down the lane."],
      tune: [["C", "C", "G", "G", "A", "B", "c", "A", "G"], ["F", "F", "E", "E", "D", "D", "C"], ["G", "G", "F", "F", "E", "E", "D", "D", "D"], ["G", "G", "F", "F", "E", "E", "D", "D", "C", "C", "C", "C"]],
      quiz: [
        Q("ba1", "How many bags of wool? 🧺", "ऊन के कितने थैले? 🧺", "🧺 🧺 🧺", [N(2), N(3), N(4)], "3", "Yes sir, yes sir, three bags full.", "हाँ जी, हाँ जी, तीन थैले भरे।"),
        Q("ba2", "What colour is the sheep? 🐑", "भेड़ किस रंग की है? 🐑", "", [O("black", "⚫", "black", "काली"), O("pink", "🩷", "pink", "गुलाबी"), O("red", "🔴", "red", "लाल")], "black", "Baa, baa, black sheep.", "बा, बा, ब्लैक शीप।"),
        Q("ba3", "Who gets the last bag? 🧺", "आख़िरी थैला किसे मिलता है? 🧺", "", [O("boy", "👦", "little boy", "छोटा लड़का"), O("cat", "🐱", "cat", "बिल्ली"), O("cow", "🐮", "cow", "गाय")], "boy", "One for the little boy who lives down the lane.", "एक गली के छोटे लड़के के लिए।")
      ] },
    { id: "johny", emoji: "🧒", lang: "en-IN", titleEn: "Johny Johny Yes Papa", titleHi: "जॉनी जॉनी यस पापा",
      lines: ["Johny, Johny? Yes, Papa?", "Eating sugar? No, Papa!", "Telling lies? No, Papa!", "Open your mouth! Ha, ha, ha!"],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("jo1", "Who says “Yes, Papa?” 🧒", "“यस पापा” कौन कहता है? 🧒", "", [O("johny", "🧒", "Johny", "जॉनी"), O("papa", "👨", "Papa", "पापा")], "johny", "Papa calls Johny. Johny says, Yes, Papa!", "पापा जॉनी को बुलाते हैं। जॉनी कहता है, यस पापा!"),
        Q("jo2", "Papa asks: Eating …? 🍬", "पापा पूछते हैं: क्या खा रहे हो? 🍬", "", [O("sugar", "🍬", "sugar", "चीनी"), O("apple", "🍎", "apple", "सेब"), O("book", "📖", "book", "किताब")], "sugar", "Eating sugar? No, Papa!", "चीनी खा रहे हो? नहीं पापा!"),
        Q("jo3", "At the end, what do they do? 😄", "आख़िर में वे क्या करते हैं? 😄", "", [O("laugh", "😄", "laugh", "हँसते हैं"), O("cry", "😢", "cry", "रोते हैं"), O("sleep", "😴", "sleep", "सोते हैं")], "laugh", "Ha, ha, ha!", "हा, हा, हा!")
      ] },
    { id: "humpty", emoji: "🥚", lang: "en-IN", titleEn: "Humpty Dumpty", titleHi: "हम्प्टी डम्प्टी",
      lines: ["Humpty Dumpty sat on a wall,", "Humpty Dumpty had a great fall.", "All the king's horses and all the king's men", "Couldn't put Humpty together again."],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("hu1", "Where did Humpty sit? 🧱", "हम्प्टी कहाँ बैठा था? 🧱", "", [O("wall", "🧱", "wall", "दीवार"), O("tree", "🌳", "tree", "पेड़"), O("bed", "🛏️", "bed", "बिस्तर")], "wall", "Humpty Dumpty sat on a wall.", "हम्प्टी डम्प्टी दीवार पर बैठा था।"),
        Q("hu2", "Humpty Dumpty is an … 🥚", "हम्प्टी डम्प्टी क्या है? 🥚", "", [O("egg", "🥚", "egg", "अंडा"), O("ball", "⚽", "ball", "गेंद"), O("apple", "🍎", "apple", "सेब")], "egg", "He is a round egg.", "वह एक गोल अंडा है।"),
        Q("hu3", "Who tried to help Humpty? 💂", "हम्प्टी की मदद कौन करने आया? 💂", "", [O("men", "💂", "the king's men", "राजा के सिपाही"), O("cows", "🐮", "cows", "गायें"), O("fish", "🐟", "fish", "मछलियाँ")], "men", "All the king's horses and all the king's men.", "राजा के सारे घोड़े और सारे सिपाही।")
      ] },
    { id: "jack", emoji: "🪣", lang: "en-IN", titleEn: "Jack and Jill", titleHi: "जैक एंड जिल",
      lines: ["Jack and Jill went up the hill", "To fetch a pail of water.", "Jack fell down and broke his crown,", "And Jill came tumbling after."],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("ja1", "What did Jack and Jill go up? ⛰️", "जैक और जिल किस पर चढ़े? ⛰️", "", [O("hill", "⛰️", "hill", "पहाड़ी"), O("tree", "🌳", "tree", "पेड़"), O("bus", "🚌", "bus", "बस")], "hill", "Jack and Jill went up the hill.", "जैक और जिल पहाड़ी पर चढ़े।"),
        Q("ja2", "What did they fetch? 🪣", "वे क्या लेने गए? 🪣", "", [O("water", "💧", "water", "पानी"), O("milk", "🥛", "milk", "दूध"), O("sand", "🏖️", "sand", "रेत")], "water", "To fetch a pail of water.", "बाल्टी भर पानी लेने।"),
        Q("ja3", "Who fell down first? 🧒", "पहले कौन गिरा? 🧒", "", [O("jack", "🧒", "Jack", "जैक"), O("jill", "👧", "Jill", "जिल")], "jack", "Jack fell down first. Then Jill came after.", "पहले जैक गिरा। फिर जिल आई।")
      ] },
    { id: "machli", emoji: "🐟", lang: "hi-IN", titleEn: "Machli Jal Ki Rani Hai", titleHi: "मछली जल की रानी है", hindi: true,
      lines: ["मछली जल की रानी है,", "जीवन उसका पानी है।", "हाथ लगाओगे डर जाएगी,", "पानी में फिर तैर जाएगी।"],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("ma1", "Where does the fish live? 💧", "मछली कहाँ रहती है? 💧", "", [O("water", "💧", "in water", "पानी में"), O("tree", "🌳", "on a tree", "पेड़ पर"), O("house", "🏠", "in a house", "घर में")], "water", "जीवन उसका पानी है।", "जीवन उसका पानी है।"),
        Q("ma2", "The fish is the queen of …", "मछली किसकी रानी है?", "", [O("water", "💧", "water (jal)", "जल की"), O("sky", "☁️", "sky", "आसमान की"), O("jungle", "🌲", "jungle", "जंगल की")], "water", "मछली जल की रानी है।", "मछली जल की रानी है।"),
        Q("ma3", "What does the fish do in water? 🏊", "मछली पानी में क्या करती है? 🏊", "", [O("swim", "🏊", "swims", "तैरती है"), O("fly", "🕊️", "flies", "उड़ती है"), O("run", "🏃", "runs", "दौड़ती है")], "swim", "पानी में फिर तैर जाएगी।", "पानी में फिर तैर जाएगी।")
      ] },
    { id: "chanda", emoji: "🌙", lang: "hi-IN", titleEn: "Chanda Mama Door Ke", titleHi: "चंदा मामा दूर के", hindi: true,
      lines: ["चंदा मामा दूर के,", "पुए पकाए बूर के।", "आप खाएँ थाली में,", "मुन्ने को दें प्याली में।"],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("ch1", "Who is Chanda Mama? 🌙", "चंदा मामा कौन हैं? 🌙", "", [O("moon", "🌙", "the moon", "चाँद"), O("sun", "☀️", "the sun", "सूरज"), O("star", "⭐", "a star", "तारा")], "moon", "चंदा मामा दूर आसमान में रहते हैं।", "चंदा मामा दूर आसमान में रहते हैं।"),
        Q("ch2", "What did Chanda Mama cook? 🥞", "चंदा मामा ने क्या पकाया? 🥞", "", [O("pua", "🥞", "pua (sweet pancake)", "पुए"), O("cake", "🎂", "cake", "केक"), O("rice", "🍚", "rice", "चावल")], "pua", "पुए पकाए बूर के।", "पुए पकाए बूर के।"),
        Q("ch3", "Munna gets it in a … ☕", "मुन्ने को किसमें मिलता है? ☕", "", [O("cup", "☕", "cup (pyali)", "प्याली"), O("plate", "🍽️", "plate (thali)", "थाली"), O("bag", "👜", "bag", "थैला")], "cup", "मुन्ने को दें प्याली में।", "मुन्ने को दें प्याली में।")
      ] }
  ];
  // Short, simple objective and summary for each rhyme
  const META = {
    twinkle: ["Today we will learn: Twinkle Twinkle Little Star ⭐", "आज हम सीखेंगे: ट्विंकल ट्विंकल लिटिल स्टार ⭐", "You learnt: Twinkle Twinkle Little Star!", "तुमने सीखा: ट्विंकल ट्विंकल लिटिल स्टार!"],
    baa: ["Today we will learn: Baa Baa Black Sheep 🐑", "आज हम सीखेंगे: बा बा ब्लैक शीप 🐑", "You learnt: three bags full of wool!", "तुमने सीखा: तीन थैले भरे ऊन के!"],
    johny: ["Today we will learn: Johny Johny Yes Papa 🧒", "आज हम सीखेंगे: जॉनी जॉनी यस पापा 🧒", "You learnt: Johny Johny Yes Papa!", "तुमने सीखा: जॉनी जॉनी यस पापा!"],
    humpty: ["Today we will learn: Humpty Dumpty 🥚", "आज हम सीखेंगे: हम्प्टी डम्प्टी 🥚", "You learnt: Humpty Dumpty sat on a wall!", "तुमने सीखा: हम्प्टी डम्प्टी दीवार पर बैठा!"],
    jack: ["Today we will learn: Jack and Jill 🪣", "आज हम सीखेंगे: जैक एंड जिल 🪣", "You learnt: Jack and Jill went up the hill!", "तुमने सीखा: जैक और जिल पहाड़ी पर चढ़े!"],
    machli: ["Today we will learn: Machli Jal Ki Rani Hai 🐟", "आज हम सीखेंगे: मछली जल की रानी है 🐟", "You learnt: the fish is the queen of water!", "तुमने सीखा: मछली जल की रानी है!"],
    chanda: ["Today we will learn: Chanda Mama Door Ke 🌙", "आज हम सीखेंगे: चंदा मामा दूर के 🌙", "You learnt: Chanda Mama is the moon far away!", "तुमने सीखा: चंदा मामा दूर आसमान में हैं!"]
  };

  // ------------------------------------------------------------ illustrations (SVG + CSS)
  const SC = {
    twinkle: '<svg viewBox="0 0 320 170" role="img" aria-label="A twinkling star in the night sky"><defs><linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b1f5e"/><stop offset="1" stop-color="#3b4aa8"/></linearGradient></defs><rect width="320" height="170" rx="18" fill="url(#gSky)"/>' +
      '<circle cx="270" cy="34" r="18" fill="#fff6c8"/><circle cx="278" cy="30" r="16" fill="#2a3290"/>' +
      '<g class="stars"><circle class="ts t1" cx="40" cy="40" r="3" fill="#fff"/><circle class="ts t2" cx="80" cy="120" r="2.5" fill="#fff"/><circle class="ts t3" cx="240" cy="110" r="3" fill="#fff"/><circle class="ts t4" cx="120" cy="30" r="2.5" fill="#fff"/><circle class="ts t2" cx="290" cy="80" r="2" fill="#fff"/><circle class="ts t1" cx="20" cy="95" r="2" fill="#fff"/></g>' +
      '<g class="bigstar"><polygon points="160,28 174,64 212,66 182,89 192,126 160,105 128,126 138,89 108,66 146,64" fill="#ffe14d" stroke="#fff3a0" stroke-width="3"/><circle cx="150" cy="82" r="3" fill="#2b2450"/><circle cx="170" cy="82" r="3" fill="#2b2450"/><path d="M150 94 Q160 104 170 94" stroke="#2b2450" stroke-width="3" fill="none" stroke-linecap="round"/></g>' +
      '<g class="diamond" opacity="0"><text x="150" y="160" font-size="26">💎</text></g></svg>',
    baa: '<svg viewBox="0 0 320 170" role="img" aria-label="A black sheep with three bags of wool"><rect width="320" height="170" rx="18" fill="#bfe9ff"/><circle cx="40" cy="36" r="20" fill="#ffe566"/>' +
      '<ellipse cx="160" cy="190" rx="220" ry="70" fill="#5ed17f"/>' +
      '<g class="sheep"><g fill="#2f2f3d"><circle cx="82" cy="106" r="22"/><circle cx="106" cy="94" r="22"/><circle cx="130" cy="106" r="22"/><circle cx="96" cy="124" r="20"/><circle cx="122" cy="124" r="20"/></g><ellipse cx="68" cy="112" rx="17" ry="20" fill="#1b1b24"/><circle cx="62" cy="106" r="3.5" fill="#fff"/><circle cx="62" cy="106" r="1.5" fill="#000"/><path d="M60 124 Q68 129 76 124" stroke="#fff" stroke-width="2" fill="none"/><g stroke="#1b1b24" stroke-width="7" stroke-linecap="round"><line x1="94" y1="140" x2="94" y2="158"/><line x1="124" y1="140" x2="124" y2="158"/></g></g>' +
      '<g class="bag b1"><path d="M190 150 Q186 118 204 112 Q222 118 218 150 Z" fill="#ecc98e" stroke="#b5894a" stroke-width="2"/><path d="M198 113 L210 113" stroke="#b5894a" stroke-width="4"/><text x="196" y="140" font-size="14" font-weight="700" fill="#7a5524">1</text></g>' +
      '<g class="bag b2"><path d="M222 150 Q218 118 236 112 Q254 118 250 150 Z" fill="#ecc98e" stroke="#b5894a" stroke-width="2"/><path d="M230 113 L242 113" stroke="#b5894a" stroke-width="4"/><text x="228" y="140" font-size="14" font-weight="700" fill="#7a5524">2</text></g>' +
      '<g class="bag b3"><path d="M254 150 Q250 118 268 112 Q286 118 282 150 Z" fill="#ecc98e" stroke="#b5894a" stroke-width="2"/><path d="M262 113 L274 113" stroke="#b5894a" stroke-width="4"/><text x="260" y="140" font-size="14" font-weight="700" fill="#7a5524">3</text></g></svg>',
    johny: '<div class="jj" role="img" aria-label="Johny and Papa talking"><div class="jj-papa">👨</div><div class="jj-bubble papa-b" id="jj-b1">Johny, Johny?</div><div class="jj-boy" id="jj-boy">🧒</div><div class="jj-bubble boy-b" id="jj-b2">Yes, Papa?</div><div class="jj-sugar">🍬</div></div>',
    humpty: '<svg viewBox="0 0 320 170" role="img" aria-label="Humpty Dumpty on a wall"><rect width="320" height="170" rx="18" fill="#cfeeff"/><rect x="0" y="108" width="320" height="62" fill="#d97b4a"/><g stroke="#a85a33" stroke-width="2"><line x1="0" y1="128" x2="320" y2="128"/><line x1="0" y1="148" x2="320" y2="148"/><line x1="60" y1="108" x2="60" y2="128"/><line x1="140" y1="108" x2="140" y2="128"/><line x1="220" y1="108" x2="220" y2="128"/><line x1="100" y1="128" x2="100" y2="148"/><line x1="180" y1="128" x2="180" y2="148"/><line x1="260" y1="128" x2="260" y2="148"/></g>' +
      '<g class="egg"><ellipse cx="160" cy="74" rx="28" ry="34" fill="#fff8e6" stroke="#e0c78a" stroke-width="3"/><circle cx="150" cy="68" r="3.5" fill="#2b2450"/><circle cx="170" cy="68" r="3.5" fill="#2b2450"/><path d="M150 82 Q160 90 170 82" stroke="#2b2450" stroke-width="3" fill="none" stroke-linecap="round"/><path class="crack" d="M136 74 L148 82 L142 90 L158 98" stroke="#b5894a" stroke-width="3" fill="none"/></g>' +
      '<g class="helpers"><text x="30" y="104" font-size="30">🐴</text><text x="70" y="104" font-size="30">💂</text><text x="230" y="104" font-size="30">🐴</text><text x="270" y="104" font-size="30">💂</text></g></svg>',
    jack: '<svg viewBox="0 0 320 170" role="img" aria-label="Jack and Jill going up a hill"><rect width="320" height="170" rx="18" fill="#c6ecff"/><polygon points="0,170 180,40 320,170" fill="#5ed17f"/><polygon points="180,40 205,62 160,62" fill="#fff"/><path d="M40 160 Q130 120 180 62" stroke="#c99a5e" stroke-width="8" fill="none" stroke-linecap="round"/>' +
      '<g class="jackg"><text x="110" y="118" font-size="34">🧒</text></g><g class="jillg"><text x="145" y="92" font-size="34">👧</text></g><text class="pail" x="205" y="64" font-size="26">🪣</text><text x="230" y="156" font-size="22">💧</text></svg>',
    machli: '<svg viewBox="0 0 320 170" role="img" aria-label="A fish swimming with bubbles"><defs><linearGradient id="gW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd6ff"/><stop offset="1" stop-color="#1e88d8"/></linearGradient></defs><rect width="320" height="170" rx="18" fill="url(#gW)"/><g class="bubbles" fill="none" stroke="#fff" stroke-width="2"><circle class="bb b1" cx="60" cy="150" r="6"/><circle class="bb b2" cx="120" cy="150" r="4"/><circle class="bb b3" cx="230" cy="150" r="7"/><circle class="bb b4" cx="280" cy="150" r="4"/></g><g class="fishg"><text x="120" y="100" font-size="58">🐟</text></g><g fill="#2eaa5a"><path d="M20 170 Q26 130 32 170Z"/><path d="M34 170 Q42 120 50 170Z"/><path d="M280 170 Q288 128 296 170Z"/></g></svg>',
    chanda: '<svg viewBox="0 0 320 170" role="img" aria-label="Chanda Mama, the smiling moon"><rect width="320" height="170" rx="18" fill="#1b1f5e"/><g><circle class="ts t1" cx="40" cy="40" r="3" fill="#fff"/><circle class="ts t2" cx="270" cy="120" r="3" fill="#fff"/><circle class="ts t3" cx="90" cy="130" r="2.5" fill="#fff"/><circle class="ts t4" cx="250" cy="30" r="2.5" fill="#fff"/></g><g class="moon"><circle cx="160" cy="76" r="48" fill="#fff3b0"/><circle cx="144" cy="68" r="4" fill="#8a7a3a"/><circle cx="176" cy="68" r="4" fill="#8a7a3a"/><path d="M142 88 Q160 104 178 88" stroke="#8a7a3a" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="132" cy="84" r="6" fill="#ffd2a0" opacity=".7"/><circle cx="188" cy="84" r="6" fill="#ffd2a0" opacity=".7"/></g><text class="plate" x="40" y="160" font-size="26">🍽️</text><text class="cupe" x="250" y="160" font-size="26">☕</text></svg>'
  };
  const BUBBLES = { johny: [["Johny, Johny?", "Yes, Papa?", "🧒"], ["Eating sugar?", "No, Papa!", "🙅"], ["Telling lies?", "No, Papa!", "🙅"], ["Open your mouth!", "Ha, ha, ha!", "😄"]] };

  // ------------------------------------------------------------ screens
  const screens = document.querySelector(".screens");
  function mk(id, html) {
    const s = document.createElement("section");
    s.className = "screen"; s.id = "screen-" + id; s.innerHTML = html;
    if (screens) screens.appendChild(s);
    return s;
  }
  const listEl = mk("rhymes", '<div id="rhymes-intro"></div><div class="rhyme-grid" id="rhyme-grid"></div>');
  const playEl = mk("rhyme", '<div class="rhyme-obj" id="rhyme-obj"></div><div class="rhyme-scene" id="rhyme-scene" data-line="-1"></div>' +
    '<div class="rhyme-lyrics" id="rhyme-lyrics"></div><p class="rhyme-instr" id="rhyme-instr"></p>' +
    '<div id="rhyme-sing"></div><div id="rhyme-quiz"></div><div class="rhyme-ctl" id="rhyme-ctl"></div>');

  // ------------------------------------------------------------ state + audio
  let cur = null;           // current rhyme
  let timers = [];
  let token = 0;            // cancels in-flight playback
  let ac = null;
  let mode = "idle";        // idle | listen | tune | sing | quiz
  function tone(note, dur, vol) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      if (!ac) ac = new AC();
      if (ac.state === "suspended") ac.resume();
      const f = NOTE[note] || 330;
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = "triangle"; o.frequency.value = f;
      const t = ac.currentTime;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.06, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.4));
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + (dur || 0.4) + 0.05);
    } catch (e) {}
  }
  function stopAll() {
    token += 1;
    timers.forEach(clearTimeout); timers = [];
    C().stopSpeak();
    if (UI()) UI().stopRec();
    mode = "idle";
    const sc = document.getElementById("rhyme-scene"); if (sc) sc.classList.remove("playing");
    document.querySelectorAll(".rhyme-ctl button.active").forEach((b) => b.classList.remove("active"));
  }
  const later = (fn, ms, my) => timers.push(setTimeout(() => { if (my === token) fn(); }, ms));
  const txt = (a, b) => C().txt(a, b);
  const esc = (s) => UI().esc(s);
  const titleOf = (r) => txt(r.titleEn, r.titleHi);

  function syl(w) {
    if (/[\u0900-\u097F]/.test(w)) return Math.max(1, (w.match(/[\u0904-\u0939\u0958-\u0961]/g) || []).length - (w.match(/\u094D/g) || []).length);
    let s = w.toLowerCase().replace(/[^a-z]/g, "");
    if (!s) return 1;
    let n = (s.match(/[aeiouy]+/g) || []).length;
    if (/[^aeiouy]e$/.test(s) && !/[^aeiouy]le$/.test(s)) n -= 1;
    return Math.max(1, n);
  }
  const wordsOf = (line) => line.split(/\s+/).filter(Boolean);

  // ------------------------------------------------------------ list screen
  function openList() {
    C().showScreen("rhymes");
  }
  function renderList() {
    const intro = document.getElementById("rhymes-intro");
    const spoken = txt("Pick a rhyme. Tap it, and Chotu will sing.", "एक कविता चुनो। उस पर टैप करो, छोटू गाएगा।");
    intro.innerHTML = "";
    const ban = UI().banner(txt("Pick a rhyme 🎵", "एक कविता चुनो 🎵"), spoken);
    intro.appendChild(ban);
    const grid = document.getElementById("rhyme-grid");
    grid.innerHTML = "";
    RHYMES.forEach((r, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "rhyme-card"; b.setAttribute("data-rhyme", r.id);
      const st = store[r.id] || {};
      b.innerHTML = '<span class="rc-emoji">' + r.emoji + '</span><span class="rc-title">' + esc(titleOf(r)) + '</span>' +
        '<span class="rc-meta">' + (r.hindi ? "हिन्दी" : "English") + (st.stars ? " · " + "⭐".repeat(Math.min(3, st.stars)) : "") + (st.sang ? " · 🎤" : "") + "</span>";
      b.addEventListener("click", () => openRhyme(r.id));
      grid.appendChild(b);
      if (i === 0) UI().hand(b, listEl);
    });
    return spoken;
  }

  // ------------------------------------------------------------ player screen
  function openRhyme(id) {
    cur = RHYMES.find((r) => r.id === id);
    if (!cur) return;
    C().showScreen("rhyme");
  }
  function renderRhyme(speakIntro) {
    stopAll();
    if (!cur) return;
    const r = cur;
    const meta = META[r.id];
    const objTxt = txt(meta[0], meta[1]);
    document.getElementById("rhyme-obj").textContent = "🎯 " + objTxt;
    const sc = document.getElementById("rhyme-scene");
    sc.setAttribute("data-line", "-1"); sc.setAttribute("data-rhyme", r.id);
    sc.innerHTML = SC[r.id] || "";
    const ly = document.getElementById("rhyme-lyrics");
    ly.innerHTML = r.lines.map((ln, i) => '<p class="rline" data-i="' + i + '">' + wordsOf(ln).map((w, k) => '<span class="w" data-k="' + k + '">' + esc(w) + "</span>").join(" ") + "</p>").join("");
    const instrTxt = txt("Tap ▶ to hear Chotu sing.", "छोटू को सुनने के लिए ▶ दबाओ।");
    const instr = document.getElementById("rhyme-instr");
    instr.innerHTML = '<span class="ri-text">' + esc(instrTxt) + '</span>';
    instr.appendChild(UI().sayAgainBtn(txt("Today we will learn ", "आज हम सीखेंगे ") + titleOf(r) + ". " + instrTxt, null));
    const ctl = document.getElementById("rhyme-ctl");
    ctl.innerHTML = "";
    const mkBtn = (cls, label, fn, id) => { const b = document.createElement("button"); b.type = "button"; b.className = "rbtn " + cls; b.id = id; b.innerHTML = label; b.addEventListener("click", fn); ctl.appendChild(b); return b; };
    const listen = mkBtn("rb-listen", "<span>▶</span> " + esc(txt("Listen with Chotu", "छोटू के साथ सुनो")), () => playListen(), "rb-listen");
    mkBtn("rb-sing", "<span>🎤</span> " + esc(txt("Sing with me", "मेरे साथ गाओ")), () => startSing(), "rb-sing");
    mkBtn("rb-tune", "<span>🎵</span> " + esc(txt("Play the tune", "धुन सुनो")), () => playTune(), "rb-tune");
    mkBtn("rb-quiz", "<span>⭐</span> " + esc(txt("Fun check", "मज़ेदार जाँच")), () => startQuiz(), "rb-quiz");
    UI().hand(listen, playEl);
    document.getElementById("rhyme-sing").innerHTML = "";
    document.getElementById("rhyme-quiz").innerHTML = "";
    playEl.scrollTop = 0;
    const top = C().$("#top-title"); if (top) top.textContent = titleOf(r);
    if (speakIntro) C().speakRaw(txt("Today we will learn ", "आज हम सीखेंगे ") + titleOf(r) + ". " + instrTxt, C().state.lang === "hi" ? "hi-IN" : "en-IN");
  }

  function setLine(i) {
    const sc = document.getElementById("rhyme-scene");
    if (sc) { sc.setAttribute("data-line", String(i)); }
    document.querySelectorAll("#rhyme-lyrics .rline").forEach((el) => {
      const idx = Number(el.getAttribute("data-i"));
      el.classList.toggle("cur", idx === i); el.classList.toggle("past", idx < i);
      if (idx !== i) el.querySelectorAll(".w").forEach((w) => w.classList.remove("on", "done"));
    });
    const el = document.querySelector('#rhyme-lyrics .rline[data-i="' + i + '"]');
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    if (cur && cur.id === "johny" && BUBBLES.johny[i]) {
      const b = BUBBLES.johny[i];
      const b1 = document.getElementById("jj-b1"), b2 = document.getElementById("jj-b2"), boy = document.getElementById("jj-boy");
      if (b1) b1.textContent = b[0]; if (b2) b2.textContent = b[1]; if (boy) boy.textContent = b[2];
    }
  }
  function lightWord(i, k) {
    const ws = document.querySelectorAll('#rhyme-lyrics .rline[data-i="' + i + '"] .w');
    ws.forEach((w, idx) => { w.classList.toggle("on", idx === k); w.classList.toggle("done", idx < k); });
  }
  function finishLine(i) {
    document.querySelectorAll('#rhyme-lyrics .rline[data-i="' + i + '"] .w').forEach((w) => { w.classList.remove("on"); w.classList.add("done"); });
  }
  function noteFor(r, li, si) { const row = r.tune[li] || r.tune[0]; return row[Math.min(si, row.length - 1)]; }

  // word timers: highlight each word for its share of the estimated line time, with a soft note per syllable.
  function startWordTimers(li, perSyl, my, withTones, state) {
    const ws = wordsOf(cur.lines[li]);
    let t = 120, si = 0;
    ws.forEach((w, k) => {
      const n = syl(w);
      const start = t, notes = [];
      for (let j = 0; j < n; j++) notes.push(noteFor(cur, li, si + j));
      later(() => { if (state && state.boundary) return; lightWord(li, k); if (withTones) tone(notes[0], 0.35, 0.05); }, start, my);
      if (withTones && n > 1) for (let j = 1; j < n; j++) later(() => tone(notes[j], 0.3, 0.04), start + j * perSyl * 1000, my);
      si += n; t += n * perSyl * 1000;
    });
    return t;
  }

  function reciteLine(li, my, opts, done) {
    const r = cur;
    setLine(li);
    const slow = C().getSpeed() === "slow";
    const rate = slow ? 0.62 : 0.8;
    const perSyl = slow ? 0.5 : 0.36;
    const state = { boundary: false };
    const text = r.lines[li];
    startWordTimers(li, perSyl, my, opts.tones !== false, state);
    // if the device reports word boundaries, follow them exactly instead
    const ws = wordsOf(text);
    const starts = []; let pos = 0; ws.forEach((w) => { starts.push(pos); pos += w.length + 1; });
    C().speak(text, {
      lang: r.lang, split: false, rate, pitch: 1.4,
      onBoundary: (ci) => {
        if (my !== token) return;
        let k = 0; for (let j = 0; j < starts.length; j++) if (ci >= starts[j]) k = j;
        if (ci > 0 || starts.length === 1) { state.boundary = true; lightWord(li, k); }
      },
      onDone: () => { if (my !== token) return; finishLine(li); later(done, slow ? 700 : 350, my); }
    });
  }

  function setActive(id) {
    document.querySelectorAll(".rhyme-ctl button").forEach((b) => b.classList.toggle("active", b.id === id));
  }

  function playListen(after) {
    stopAll(); sfx().pop();
    const my = token; mode = "listen";
    const sc = document.getElementById("rhyme-scene"); sc.classList.add("playing");
    setActive("rb-listen");
    const instr = document.querySelector("#rhyme-instr .ri-text"); if (instr) instr.textContent = txt("Listen to Chotu… 👂", "छोटू को सुनो… 👂");
    let i = 0;
    const next = () => {
      if (my !== token) return;
      if (i >= cur.lines.length) { endPlay(my, after); return; }
      reciteLine(i++, my, {}, next);
    };
    next();
  }
  function endPlay(my, after) {
    if (my !== token) return;
    mode = "idle"; setLine(-1); document.querySelectorAll("#rhyme-lyrics .rline").forEach((e) => e.classList.remove("cur", "past"));
    document.getElementById("rhyme-scene").classList.remove("playing");
    document.querySelectorAll(".rhyme-ctl button.active").forEach((b) => b.classList.remove("active"));
    const instr = document.querySelector("#rhyme-instr .ri-text"); if (instr) instr.textContent = txt("Now tap 🎤 and sing with me!", "अब 🎤 दबाओ और मेरे साथ गाओ!");
    if (!after) { const sb = document.getElementById("rb-sing"); if (sb) UI().hand(sb, playEl); }
    if (after) after();
  }

  function playTune() {
    stopAll(); sfx().pop();
    const my = token; mode = "tune";
    document.getElementById("rhyme-scene").classList.add("playing");
    setActive("rb-tune");
    const instr = document.querySelector("#rhyme-instr .ri-text"); if (instr) instr.textContent = txt("Hum along with the tune 🎵", "धुन के साथ गुनगुनाओ 🎵");
    const beat = C().getSpeed() === "slow" ? 0.5 : 0.38;
    let t = 200;
    cur.lines.forEach((line, li) => {
      later(() => setLine(li), t, my);
      let si = 0;
      wordsOf(line).forEach((w, k) => {
        const n = syl(w), start = t;
        later(() => lightWord(li, k), start, my);
        for (let j = 0; j < n; j++) { const note = noteFor(cur, li, si + j); later(() => tone(note, beat * 0.9, 0.1), start + j * beat * 1000, my); }
        si += n; t += n * beat * 1000;
      });
      later(() => finishLine(li), t, my);
      t += 500;
    });
    later(() => endPlay(my), t, my);
  }

  // ------------------------------------------------------------ Sing with me
  function startSing() {
    stopAll(); sfx().pop();
    const my = token; mode = "sing";
    setActive("rb-sing");
    const box = document.getElementById("rhyme-sing");
    document.getElementById("rhyme-quiz").innerHTML = "";
    let i = 0, sung = 0;
    if (box.scrollIntoView) setTimeout(() => box.scrollIntoView({ block: "nearest", behavior: "smooth" }), 200);
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    function round() {
      if (my !== token) return;
      if (i >= cur.lines.length) { finish(); return; }
      const li = i;
      box.innerHTML = "";
      const head = document.createElement("p"); head.className = "sing-head";
      head.textContent = txt("Line " + (li + 1) + " of " + cur.lines.length + ": listen first", cur.lines.length + " में से लाइन " + (li + 1) + ": पहले सुनो");
      box.appendChild(head);
      reciteLine(li, my, {}, () => {
        if (my !== token) return;
        head.textContent = txt("Your turn! Tap and say the line 🎤", "अब तुम्हारी बारी! टैप करो और लाइन बोलो 🎤");
        const mic = document.createElement("button");
        mic.type = "button"; mic.className = "mic-big";
        mic.innerHTML = '<span class="mic-ico">🎤</span><span class="mic-label">' + esc(txt("Tap and say", "टैप करो और बोलो")) + "</span>";
        const note = document.createElement("p"); note.className = "mic-note"; note.setAttribute("role", "status");
        const fall = document.createElement("button"); fall.type = "button"; fall.className = "btn btn-white say-fallback" + (SR ? " hidden" : "");
        fall.textContent = "✋ " + txt("I sang it", "मैंने गा दिया");
        box.appendChild(mic); box.appendChild(note); box.appendChild(fall);
        if (mic.scrollIntoView) setTimeout(() => mic.scrollIntoView({ block: "center", behavior: "smooth" }), 150);
        C().speakRaw(txt("Your turn!", "अब तुम्हारी बारी!"), null, { remember: false });
        let done = false;
        const ok = (heard) => {
          if (done || my !== token) return; done = true; UI().stopRec();
          sung++; sfx().correct(); mic.classList.add("done"); mic.classList.remove("listening");
          note.className = "mic-note ok"; note.textContent = "⭐ " + C().praise();
          fall.classList.add("hidden");
          later(() => { i++; round(); }, 1100, my);
        };
        fall.addEventListener("click", () => ok(""));
        if (!SR) { note.textContent = txt("This phone cannot listen yet. Sing out loud, then tap ✋.", "यह फ़ोन अभी सुन नहीं सकता। ज़ोर से गाओ, फिर ✋ दबाओ।"); return; }
        mic.addEventListener("click", () => {
          if (done) return; sfx().pop(); UI().stopRec();
          let rec; try { rec = new SR(); } catch (e) { fall.classList.remove("hidden"); return; }
          rec.lang = cur.lang; rec.interimResults = false; rec.maxAlternatives = 1;
          let got = false;
          rec.onstart = () => { mic.classList.add("listening"); note.className = "mic-note"; note.textContent = "👂 " + txt("Chotu is listening…", "छोटू सुन रहा है…"); };
          rec.onresult = (e) => { got = true; ok((e.results[0] && e.results[0][0] && e.results[0][0].transcript) || ""); };
          rec.onerror = () => { mic.classList.remove("listening"); fall.classList.remove("hidden"); note.textContent = txt("I could not hear you. Try again, or tap ✋.", "मैं सुन नहीं पाया। फिर कोशिश करो, या ✋ दबाओ।"); };
          rec.onend = () => { mic.classList.remove("listening"); if (!got && !done) { fall.classList.remove("hidden"); } };
          try { rec.start(); } catch (e) { fall.classList.remove("hidden"); }
        });
      });
    }
    function finish() {
      mode = "idle"; setLine(-1);
      document.querySelectorAll(".rhyme-ctl button.active").forEach((b) => b.classList.remove("active"));
      store[cur.id] = Object.assign(store[cur.id] || {}, { sang: true }); persist();
      C().addStars(2); sfx().chime();
      const m = txt("You sang the whole rhyme! Well done!", "तुमने पूरी कविता गाई! शाबाश!");
      box.innerHTML = '<div class="sing-done"><p class="sum-head">🎉 ' + esc(m) + '</p><div class="result-stars"><span class="rs on">⭐</span><span class="rs on">⭐</span></div></div>';
      const q = document.createElement("button"); q.type = "button"; q.className = "btn btn-leaf"; q.textContent = "⭐ " + txt("Fun check", "मज़ेदार जाँच");
      q.addEventListener("click", startQuiz); box.appendChild(q);
      C().speakRaw(m);
    }
    round();
  }

  // ------------------------------------------------------------ Fun check (2-3 questions, no repeats)
  function startQuiz() {
    stopAll(); sfx().pop();
    mode = "quiz"; setActive("rb-quiz");
    document.getElementById("rhyme-sing").innerHTML = "";
    const box = document.getElementById("rhyme-quiz");
    const items = C().shuffle(UI().dedupe(cur.quiz));
    items.forEach((it) => delete it._order);
    const session = { lastPos: -1 };
    let i = 0, right = 0;
    function show() {
      box.innerHTML = "";
      const head = document.createElement("p"); head.className = "sing-head";
      head.textContent = txt("Fun check " + (i + 1) + " of " + items.length, "मज़ेदार जाँच: " + items.length + " में से " + (i + 1));
      const dots = document.createElement("div"); dots.className = "dots-row";
      dots.innerHTML = items.map((_, k) => '<i class="' + (k < i ? "ok" : k === i ? "on" : "") + '"></i>').join("");
      box.appendChild(head); box.appendChild(dots);
      const stage = document.createElement("div"); box.appendChild(stage);
      const nxt = document.createElement("button"); nxt.type = "button"; nxt.className = "btn btn-sun hidden"; nxt.textContent = txt("Next", "आगे");
      box.appendChild(nxt);
      UI().ask(stage, items[i], {
        session, qid: "rhyme-" + cur.id + "-" + items[i].id,
        visualHTML: items[i].showEmoji ? '<div class="prompt-card"><span class="big-emoji">' + items[i].showEmoji + "</span></div>" : "",
        onDone: (res) => {
          if (res.ok) right++;
          nxt.textContent = i < items.length - 1 ? txt("Next", "आगे") : txt("Finish ⭐", "पूरा करो ⭐");
          nxt.classList.remove("hidden");
          if (nxt.scrollIntoView) nxt.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      });
      nxt.addEventListener("click", () => { if (i < items.length - 1) { i++; show(); } else end(); });
      box.scrollIntoView && box.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    function end() {
      mode = "idle";
      const stars = right >= items.length ? 3 : right >= 2 ? 2 : 1;
      store[cur.id] = Object.assign(store[cur.id] || {}, { stars: Math.max((store[cur.id] || {}).stars || 0, stars) }); persist();
      C().addStars(stars); sfx().chime();
      const meta = META[cur.id];
      const learnt = txt(meta[2], meta[3]);
      box.innerHTML = '<div class="summary-card"><img class="res-chotu" src="assets/chotu-jump.png" alt="Chotu cheering"><p class="sum-head">🎉 ' + esc(txt("You learnt:", "तुमने सीखा:")) + '</p><p class="sum-big">' + esc(learnt.replace(/^[^:]*:\s*/, "")) + '</p><div class="result-stars">' +
        [1, 2, 3].map((k) => '<span class="rs ' + (k <= stars ? "on" : "") + '">⭐</span>').join("") + '</div><p class="hint">' + right + " / " + items.length + "</p></div>";
      const again = document.createElement("button"); again.type = "button"; again.className = "btn btn-sun"; again.textContent = "🎵 " + txt("More rhymes", "और कविताएँ");
      again.addEventListener("click", openList); box.appendChild(again);
      box.appendChild(UI().sayAgainBtn(learnt));
      C().speakRaw(learnt);
      box.scrollIntoView && box.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    show();
  }

  // ------------------------------------------------------------ wiring
  function setTitle(id) {
    const top = C().$("#top-title");
    if (!top) return;
    if (id === "rhymes") top.textContent = txt("Rhymes", "कविताएँ");
  }
  function refreshTile() {
    const tile = document.getElementById("card-rhymes");
    if (!tile) return;
    const age = C().state.age;
    tile.classList.toggle("hidden", !(age === "nursery" || age === "lkg"));
    const l = document.getElementById("rhymes-tile-label"); if (l) l.textContent = txt("Rhymes", "कविताएँ");
    const s = document.getElementById("rhymes-tile-sub"); if (s) s.textContent = txt("Twinkle Twinkle, Baa Baa…", "ट्विंकल ट्विंकल, बा बा…");
  }
  window.ChotuHooks = window.ChotuHooks || [];
  window.ChotuHooks.push({
    onHome: refreshTile,
    onI18n() {
      refreshTile();
      const sc = C().state.screen;
      if (sc === "rhymes") renderList();
      if (sc === "rhyme") renderRhyme(false);
    },
    onScreen(id) {
      if (id !== "rhyme") stopAll();
      if (id === "rhymes") { setTitle(id); const sp = renderList(); C().speakRaw(sp); }
      if (id === "rhyme") renderRhyme(true);
    }
  });
  const tile = document.getElementById("card-rhymes");
  if (tile) tile.addEventListener("click", openList);
  window.ChotuRhymes = { RHYMES, openList, openRhyme, stopAll, getStore: () => store };
})();

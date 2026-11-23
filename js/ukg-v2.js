/* Chotu Teacher: UKG pass.
   1. Aligns the title, goal and Thinking & Logic flag of ALL 26 UKG units with the
      "Chotu Teacher: Age-wise Syllabus" Page (UKG, age 5).
   2. Rewrites the first three UKG units in syllabus order (English 1, English 2, Maths 1)
      to the same standard as the reworked Nursery units, with 20-item pools:
      about 8 for practice, 5 for the star check, and the rest fresh for a retry. */
(function () {
  "use strict";
  const U = window.COURSE_UNITS || [];

  // ---------------------------------------------------------------- syllabus alignment (all UKG units)
  // [id, titleEn, titleHi, goalEn, goalHi, logic?]
  const SYL = [
    ["ukg-eng-1", "Phase 2 fluency, then Phase 3: j, v, w, x, y, z, qu, and sh, ch, th, ng", "चरण 2 की धाराप्रवाहता, फिर चरण 3: j, v, w, x, y, z, qu और sh, ch, th, ng",
      "Reads and builds words with sh, ch, th and ng, and recognises the sounds j, v, w, x, y, z and qu.", "sh, ch, th, ng वाले शब्द पढ़ना और बनाना, और j, v, w, x, y, z, qu की आवाज़ें पहचानना।"],
    ["ukg-eng-2", "More Phase 3 vowel digraphs, such as ai, ee, igh, oa and oo", "और चरण 3 स्वर युग्म: ai, ee, igh, oa और oo",
      "Reads words with ai, ee, igh, oa and oo in words and short phrases, and sorts words by their vowel sound.", "ai, ee, igh, oa, oo वाले शब्द और छोटे वाक्यांश पढ़ना, और स्वर की आवाज़ से शब्द छाँटना।"],
    ["ukg-eng-3", "Phase 4 adjacent consonants: st, tr, cl, mp and similar", "चरण 4 पास-पास व्यंजन: st, tr, cl, mp और इसी तरह के",
      "Blends adjacent consonants such as st, tr, cl and mp when reading and building words.", "st, tr, cl, mp जैसे पास-पास के व्यंजनों को जोड़कर शब्द पढ़ना और बनाना।"],
    ["ukg-eng-4", "Decodable readers with why and predict, in an Indian setting", "भारतीय परिवेश में पढ़ने योग्य कहानियाँ: क्यों और आगे क्या होगा",
      "Reads a short decodable story set in India and answers who, what, why and what might happen next.", "भारतीय परिवेश की छोटी कहानी पढ़ना और कौन, क्या, क्यों और आगे क्या होगा बताना।"],
    ["ukg-eng-5", "Write sentences from sounds, with a capital and a full stop, and days of the week", "ध्वनियों से वाक्य लिखो, बड़े अक्षर और पूर्ण विराम के साथ, और सप्ताह के दिन",
      "Writes a sentence from sounds with a capital letter and a full stop, and names the days of the week.", "ध्वनियों से बड़े अक्षर और पूर्ण विराम वाला वाक्य लिखना, और सप्ताह के दिन बताना।"],
    ["ukg-eng-6", "Grammar in meaning: is, am, are, these and those, inside a story", "अर्थ में व्याकरण: is, am, are, these, those, कहानी के भीतर",
      "Chooses is, am, are, these and those correctly inside a meaningful caption.", "सार्थक कैप्शन में is, am, are, these, those सही चुनना।"],
    ["ukg-eng-7", "Retell beginning, middle and end, act out, and reuse new words after a week", "शुरुआत, मध्य और अंत दोहराओ, अभिनय करो, और एक हफ्ते बाद नए शब्द फिर इस्तेमाल करो",
      "Retells a story in beginning, middle and end, and uses new words again after a week.", "कहानी को शुरुआत, मध्य और अंत में दोहराना, और एक हफ्ते बाद नए शब्द फिर इस्तेमाल करना।"],
    ["ukg-eng-8", "Read an unseen short text, and infer a feeling", "अनदेखा छोटा पाठ पढ़ो, और भावना का अनुमान लगाओ",
      "Reads a new short text and infers how a character feels, using words from the text.", "नया छोटा पाठ पढ़कर बताना कि पात्र कैसा महसूस करता है, पाठ के शब्दों के आधार पर।"],
    ["ukg-eng-9", "Write three connected sentences about a picture or a festival, with a word bank", "चित्र या त्योहार पर तीन जुड़े वाक्य लिखो, शब्द बैंक के साथ",
      "Writes three connected sentences about a picture or festival, using a word bank.", "शब्द बैंक की मदद से चित्र या त्योहार पर तीन जुड़े वाक्य लिखना।"],
    ["ukg-eng-10", "Class 1 readiness: fluency, four comprehension questions, three sentences", "कक्षा 1 की तैयारी: धाराप्रवाहता, चार समझ के प्रश्न, तीन वाक्य",
      "Shows Class 1 readiness: reads fluently, answers four comprehension questions and writes three sentences.", "कक्षा 1 की तैयारी: धाराप्रवाह पढ़ना, चार प्रश्नों के उत्तर और तीन वाक्य लिखना।"],
    ["ukg-math-1", "Bonds to 10 by heart, and mental make-10 talk", "10 के जोड़ याद करो, और मन में 10 बनाने की बात करो",
      "Knows number pairs to 10 by heart and uses make-10 steps within 20, saying the steps out loud.", "10 के जोड़ याद होना, और 20 तक 10 बनाने के चरण बोलकर जोड़ना।", true],
    ["ukg-math-2", "Bonds to 20, and add or subtract within 20 with CPA and a reason", "20 के जोड़, और 20 तक जोड़-घटाव: वस्तु, चित्र और कारण के साथ",
      "Knows bonds to 20 and adds or subtracts within 20 using objects, pictures and a reason.", "20 के जोड़ जानना, और वस्तु, चित्र और कारण के साथ 20 तक जोड़-घटाव करना।", true],
    ["ukg-math-3", "Tens and ones to 100, with bundles, and place-value talk", "100 तक दहाई और इकाई, गुच्छों के साथ, और स्थानीय मान की बात",
      "Reads, writes and orders numbers to 100 using tens and ones.", "दहाई और इकाई से 100 तक संख्याएँ पढ़ना, लिखना और क्रम में रखना।"],
    ["ukg-math-4", "Story problems with a part-whole or bar picture, and how do you know", "कहानी के सवाल: भाग-पूर्ण या पट्टी चित्र के साथ, और कैसे पता चला",
      "Solves a story problem with a picture or part-whole model and explains how they knew.", "चित्र या भाग-पूर्ण मॉडल से कहानी का सवाल हल करना और बताना कि कैसे पता चला।", true],
    ["ukg-math-5", "Rupee reasoning: enough or not enough, and simple change", "रुपये का तर्क: काफी है या नहीं, और आसान खुले पैसे",
      "Decides whether the money is enough or not enough, and gives simple change.", "तय करना कि पैसे काफी हैं या नहीं, और आसान खुले पैसे देना।"],
    ["ukg-math-6", "Time at o'clock, a day's sequence, and which activity takes longer", "पूरे घंटे का समय, दिन का क्रम, और कौन-सा काम ज़्यादा समय लेता है",
      "Tells o'clock time, orders a day's events and says which takes longer.", "पूरे घंटे का समय बताना, दिन के काम क्रम में रखना, और बताना कौन-सा ज़्यादा समय लेता है।"],
    ["ukg-math-7", "Measurement with informal units, estimate then check, and record", "अनौपचारिक इकाइयों से मापन, अनुमान फिर जाँच, और लिखना",
      "Estimates, then measures with informal units and records the result.", "अनुमान लगाकर, अनौपचारिक इकाइयों से मापना और नतीजा लिखना।"],
    ["ukg-math-8", "3D shape properties, roll or stack, and a shape logic puzzle", "3D आकृति के गुण, लुढ़कना या जमना, और आकृति की तर्क पहेली",
      "Describes 3D shapes by faces, rolling or stacking, and explains which shape does not belong.", "3D आकृतियों को फलक, लुढ़कने या जमने से बताना, और कारण सहित अलग आकृति पहचानना।", true],
    ["ukg-math-9", "Pictograph or simple table, with three questions including how do you know", "चित्र ग्राफ या सरल तालिका, तीन प्रश्न: कैसे पता चला भी",
      "Answers three questions on a pictograph or table, including how they know.", "चित्र ग्राफ या तालिका पर तीन प्रश्नों के उत्तर देना, कैसे पता चला यह बताते हुए।", true],
    ["ukg-math-10", "Spaced mastery and a puzzle week: mental add or subtract within 20, place value, money, data", "दोहराई हुई महारत और पहेली सप्ताह: 20 तक मानसिक जोड़-घटाव, स्थानीय मान, पैसे, आँकड़े",
      "Shows mastery: mental add and subtract within 20, place value, money and data, with a puzzle.", "महारत: 20 तक मानसिक जोड़-घटाव, स्थानीय मान, पैसे और आँकड़े, एक पहेली के साथ।", true],
    ["ukg-prem-1", "Talk to Chotu, reading aloud and conversation", "छोटू से बातें: ज़ोर से पढ़ना और बातचीत",
      "Reads 4 sentences aloud and replies in a full sentence on 3 prompts.", "4 वाक्य ज़ोर से पढ़ना और 3 सवालों पर पूरे वाक्य में जवाब देना।"],
    ["ukg-prem-2", "Pronunciation and fluency coaching", "उच्चारण और धाराप्रवाहता कोचिंग",
      "A second reading is clearer or less hesitant, and is logged for the parent.", "दूसरी बार पढ़ना ज़्यादा साफ़ और सहज होता है, और अभिभावक के लिए दर्ज होता है।"],
    ["ukg-prem-3", "Hindi literacy: all swar and vyanjan, then 2 and 3 letter words without matra", "हिन्दी साक्षरता: सभी स्वर और व्यंजन, फिर मात्रा के बिना 2 और 3 अक्षर के शब्द",
      "Reads and writes a taught set of 2 and 3 letter Hindi words without matra.", "सिखाए गए 2 और 3 अक्षर के हिन्दी शब्द मात्रा के बिना पढ़ना और लिखना।"],
    ["ukg-prem-4", "Coached slate for words and sentences", "शब्दों और वाक्यों की कोच स्लेट",
      "Writes 2 short sentences that a parent can read.", "2 छोटे वाक्य लिखना जिन्हें अभिभावक पढ़ सकें।"],
    ["ukg-prem-5", "Adaptive reteach and NCF-mapped parent report", "ज़रूरत के हिसाब से दोबारा सिखाना, और एनसीएफ से जुड़ी अभिभावक रिपोर्ट",
      "The retaught skill moves up a step. The parent sees what is secure, emerging or not yet.", "दोबारा सिखाया कौशल एक कदम आगे बढ़ता है। अभिभावक देखते हैं क्या पक्का, उभरता या अभी बाकी है।"],
    ["ukg-prem-6", "Tables of 2 and 5, as a stretch only", "2 और 5 के पहाड़े, केवल अतिरिक्त चुनौती के रूप में",
      "Says the 2 and 5 patterns to 20, then 50, without a written table.", "2 और 5 के पैटर्न 20 और फिर 50 तक, बिना लिखी तालिका के बोलना।"]
  ];
  SYL.forEach(([id, tEn, tHi, gEn, gHi, logic]) => {
    const u = U.find((x) => x.id === id);
    if (!u) return;
    u.titleEn = tEn; u.titleHi = tHi; u.goalEn = gEn; u.goalHi = gHi;
    u.logic = !!logic; // Thinking & Logic thread, per the syllabus Page
  });

  // ---------------------------------------------------------------- helpers
  // picture option: value is the English word; Hindi label shows meaning + word
  const P = (emoji, en, hi) => ({ value: en, label: en, labelHi: hi ? hi + " · " + en : en, emoji });
  const T = (v, hi) => ({ value: v, label: v, labelHi: hi || v, emoji: "" });
  const num = (n) => ({ value: String(n), label: String(n), labelHi: String(n), emoji: "" });
  const EMOJI_RE = /\s*[\u{1F000}-\u{1FFFF}\u{2190}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]+\s*/gu;
  const strip = (t) => String(t).replace(EMOJI_RE, " ").replace(/\s+([.?!।])/g, "$1").replace(/\s+/g, " ").trim();
  let seq = 0;
  function Q(uid, qEn, qHi, opts, ans, hintEn, hintHi, extra) {
    seq += 1;
    return Object.assign({
      id: uid + "-q" + seq, qEn, qHi, instrEn: qEn, instrHi: qHi, speakEn: strip(qEn), speakHi: strip(qHi),
      options: opts, answer: ans, hintEn, hintHi
    }, extra || {});
  }
  const READ_EN = "Read the word. Tap its picture.", READ_HI = "शब्द पढ़ो। उसकी तस्वीर पर टैप करो।";
  // Child reads the word on screen; Chotu does NOT say it.
  function read(uid, word, parts, opts) {
    return Q(uid, READ_EN, READ_HI, opts, word,
      "Sound it out slowly: " + parts + ". Then find the picture.", "धीरे-धीरे आवाज़ें जोड़ो: " + parts + "। फिर तस्वीर ढूँढो।", { readWord: word });
  }
  const finish = (id, data, counts) => {
    const u = U.find((x) => x.id === id);
    if (!u) return;
    Object.assign(u, data, counts, { mastery: [], v2: true });
  };
  const COUNTS = { practiceCount: 8, masteryCount: 5, masteryNeed: 4 };

  // ================================================================ English 1: sh ch th ng + j v w x y z qu
  const E1 = "ukg-eng-1";
  const e1 = {
    shortEn: "Read ship, chop and this, then build sh words from sounds.", shortHi: "ship, chop और this पढ़ो, फिर ध्वनियों से sh वाले शब्द बनाओ।",
    objEn: "reading words with sh, ch, th and ng 🚢", objHi: "sh, ch, th और ng वाले शब्द पढ़ना 🚢",
    sumEn: "Two letters can make one sound: sh in ship, ch in chip, th in bath, ng in ring.", sumHi: "दो अक्षर मिलकर एक आवाज़ बनाते हैं: ship में sh, chip में ch, bath में th, ring में ng।",
    scene: "school",
    teach: {
      pose: "point", anim: "bob",
      capEn: "Two letters, one sound! sh in ship 🚢, ch in chip 🍟, th in bath 🛁, ng in ring 💍.",
      capHi: "दो अक्षर, एक आवाज़! ship 🚢 में sh, chip 🍟 में ch, bath 🛁 में th, ring 💍 में ng।",
      speakEn: "Some sounds use two letters. S H says sh, as in ship. C H says ch, as in chip. T H says th, as in bath. N G says ng, as in ring.",
      speakHi: "कुछ आवाज़ें दो अक्षरों से बनती हैं। एस एच, श, जैसे ship में। सी एच, च, जैसे chip में। टी एच, थ, जैसे bath में। एन जी, जैसे ring में।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: ship 🚢", instrHi: "बोलो: ship 🚢 (जहाज़)", speakEn: "Say ship. Sh, sh, ship.", speakHi: "बोलो, शिप। श, श, शिप।",
        word: "ship", emoji: "🚢", accept: ["ship", "sheep", "sip", "shape", "chip", "sh"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "word-build", titleEn: "Build it", titleHi: "बनाओ", instrEn: "Build the word ship 🚢. Tap the sounds in order: sh, i, p.", instrHi: "ship 🚢 शब्द बनाओ। आवाज़ें क्रम से टैप करो: sh, i, p।",
        speakEn: "Build the word ship. Tap the sounds in order: sh, i, p.", speakHi: "शिप शब्द बनाओ। आवाज़ें क्रम से टैप करो: श, इ, प।",
        word: "ship", tiles: ["sh", "i", "p"], order: ["sh", "i", "p"] },
      { type: "mcq", titleEn: "Find it", titleHi: "ढूँढो", instrEn: "Tap the picture that begins with ch.", instrHi: "जिस तस्वीर की शुरुआत ch से होती है उस पर टैप करो।",
        speakEn: "Tap the picture that begins with ch.", speakHi: "जिस तस्वीर की शुरुआत च से होती है उस पर टैप करो।",
        options: [P("🧀", "cheese", "पनीर"), P("☀️", "sun", "सूरज"), P("🚢", "ship", "जहाज़")], answer: "cheese",
        hintEn: "Ch, ch, cheese! Which picture starts like that?", hintHi: "च, च, चीज़! किस तस्वीर की शुरुआत ऐसी है?" }
    ],
    practice: [
      read(E1, "shop", "sh-o-p", [P("🛍️", "shop", "दुकान"), P("🪑", "chair", "कुर्सी"), P("💍", "ring", "अँगूठी")]),
      read(E1, "chip", "ch-i-p", [P("🍟", "chip", "चिप्स"), P("🚢", "ship", "जहाज़"), P("💍", "ring", "अँगूठी")]),
      read(E1, "bath", "b-a-th", [P("🛁", "bath", "नहाना"), P("🦇", "bat", "चमगादड़"), P("👜", "bag", "थैला")]),
      read(E1, "ring", "r-i-ng", [P("💍", "ring", "अँगूठी"), P("🐀", "rat", "चूहा"), P("🌧️", "rain", "बारिश")]),
      read(E1, "ship", "sh-i-p", [P("🚢", "ship", "जहाज़"), P("🐑", "sheep", "भेड़"), P("🐚", "shell", "सीपी")]),
      read(E1, "chick", "ch-i-ck", [P("🐥", "chick", "चूज़ा"), P("🍟", "chip", "चिप्स"), P("🪑", "chair", "कुर्सी")]),
      read(E1, "king", "k-i-ng", [P("🤴", "king", "राजा"), P("🪁", "kite", "पतंग"), P("💍", "ring", "अँगूठी")]),
      Q(E1, "Which word ends with sh?", "कौन-सा शब्द sh पर खत्म होता है?", [T("fish"), T("fist"), T("fit")], "fish", "Fi-sh. Listen for the sh sound at the end.", "फि-श। आख़िर में श की आवाज़ सुनो।"),
      Q(E1, "Which two letters make the first sound in ship?", "ship की पहली आवाज़ कौन-से दो अक्षर बनाते हैं?", [T("sh"), T("ch"), T("th")], "sh", "Shh, like asking for quiet: sh, ship.", "श, जैसे चुप कराते हैं: श, शिप।", { showEmoji: "🚢" }),
      Q(E1, "Which two letters make the first sound in chick?", "chick की पहली आवाज़ कौन-से दो अक्षर बनाते हैं?", [T("ch"), T("sh"), T("th")], "ch", "Ch, ch, chick. Like a train: ch-ch-ch.", "च, च, चिक। जैसे रेल: छुक-छुक।", { showEmoji: "🐥" }),
      Q(E1, "Which two letters make the last sound in tooth?", "tooth की आख़िरी आवाज़ कौन-से दो अक्षर बनाते हैं?", [T("th"), T("sh"), T("ch")], "th", "Put your tongue out a little: th, tooth.", "जीभ थोड़ी बाहर निकालो: थ, टूथ।", { showEmoji: "🦷" }),
      Q(E1, "Which two letters make the last sound in ring?", "ring की आख़िरी आवाज़ कौन-से दो अक्षर बनाते हैं?", [T("ng"), T("nd"), T("nk")], "ng", "Ri-ng. The sound hums in your nose.", "रि-ng। आवाज़ नाक में गूँजती है।", { showEmoji: "💍" }),
      Q(E1, "Which word has the ch sound?", "किस शब्द में ch की आवाज़ है?", [T("chop"), T("shop"), T("top")], "chop", "Say each word slowly. Which one starts with ch?", "हर शब्द धीरे बोलो। किसकी शुरुआत च से है?"),
      Q(E1, "Which word has the th sound?", "किस शब्द में th की आवाज़ है?", [T("thin"), T("tin"), T("shin")], "thin", "Th, th, thin. Tongue out a little.", "थ, थ, थिन। जीभ थोड़ी बाहर।"),
      Q(E1, "Which word does not have sh? Tap the odd one out.", "किस शब्द में sh नहीं है? जो अलग है उस पर टैप करो।", [T("ship"), T("shop"), T("chip")], "chip", "Ship and shop both start with sh. Which one is different?", "ship और shop दोनों sh से शुरू होते हैं। कौन अलग है?"),
      Q(E1, "Which word does not end with ng? Tap the odd one out.", "किस शब्द के अंत में ng नहीं है? जो अलग है उस पर टैप करो।", [T("king"), T("ring"), T("kid")], "kid", "King and ring both end with ng. Which one is different?", "king और ring दोनों ng पर खत्म होते हैं। कौन अलग है?"),
      Q(E1, "Tap the picture that begins with qu.", "जिस तस्वीर की शुरुआत qu से होती है उस पर टैप करो।", [P("👸", "queen", "रानी"), P("🦆", "duck", "बतख"), P("🐄", "cow", "गाय")], "queen", "Qu says kw, like in quack. Which picture starts like that?", "qu की आवाज़ क्व है। किस तस्वीर की शुरुआत ऐसी है?"),
      Q(E1, "Tap the picture that begins with v.", "जिस तस्वीर की शुरुआत v से होती है उस पर टैप करो।", [P("🚐", "van", "वैन"), P("✈️", "jet", "जेट"), P("🕸️", "web", "जाला")], "van", "V, v, van. Your teeth touch your lip.", "व, व, वैन। दाँत होंठ को छूते हैं।"),
      Q(E1, "Tap the picture that begins with z.", "जिस तस्वीर की शुरुआत z से होती है उस पर टैप करो।", [P("🦓", "zebra", "ज़ेबरा"), P("🚐", "van", "वैन"), P("🕸️", "web", "जाला")], "zebra", "Z, z, buzzing like a bee. Which picture starts like that?", "ज़, ज़, मधुमक्खी जैसी भिनभिन। किस तस्वीर की शुरुआत ऐसी है?"),
      Q(E1, "Which picture ends with the x sound?", "किस तस्वीर के अंत में x की आवाज़ है?", [P("📦", "box", "डिब्बा"), P("🛏️", "bed", "बिस्तर"), P("👜", "bag", "थैला")], "box", "Bo-x. The last sound is ks.", "बॉ-क्स। आख़िरी आवाज़ क्स है।")
    ]
  };
  finish(E1, e1, COUNTS);

  // ================================================================ English 2: ai ee igh oa oo
  const E2 = "ukg-eng-2";
  const e2 = {
    shortEn: "Read rain, feet, night, boat and moon, and sort words by the vowel team.", shortHi: "rain, feet, night, boat और moon पढ़ो, और स्वर युग्म से शब्द छाँटो।",
    objEn: "vowel teams: ai, ee, igh, oa and oo 🌧️", objHi: "स्वर युग्म: ai, ee, igh, oa और oo 🌧️",
    sumEn: "Letters can team up: ai in rain, ee in feet, igh in night, oa in boat, oo in moon.", sumHi: "अक्षर मिलकर साथ काम करते हैं: rain में ai, feet में ee, night में igh, boat में oa, moon में oo।",
    scene: "monsoon",
    teach: {
      pose: "point", anim: "bob",
      capEn: "Vowels can team up! ai in rain 🌧️, ee in feet 🦶, igh in night 🌃, oa in boat ⛵, oo in moon 🌙.",
      capHi: "स्वर साथ मिलकर काम करते हैं! rain 🌧️ में ai, feet 🦶 में ee, night 🌃 में igh, boat ⛵ में oa, moon 🌙 में oo।",
      speakEn: "Letters can team up to say one sound. A I says ay, as in rain. E E says ee, as in feet. I G H says eye, as in night. O A says oh, as in boat. O O says oo, as in moon.",
      speakHi: "अक्षर मिलकर एक आवाज़ बनाते हैं। ए आई, ए, जैसे rain में। ई ई, ई, जैसे feet में। आई जी एच, आई, जैसे night में। ओ ए, ओ, जैसे boat में। ओ ओ, ऊ, जैसे moon में।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: rain 🌧️", instrHi: "बोलो: rain 🌧️ (बारिश)", speakEn: "Say rain. Ay, ay, rain.", speakHi: "बोलो, रेन। ए, ए, रेन।",
        word: "rain", emoji: "🌧️", accept: ["rain", "rein", "ran", "train", "ray"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "sort", titleEn: "Sort the words", titleHi: "शब्द छाँटो", instrEn: "Tap a word. Then tap the box with the same vowel team.", instrHi: "एक शब्द पर टैप करो। फिर उसी स्वर युग्म वाले डिब्बे पर टैप करो।",
        speakEn: "Tap a word. Then tap the box with the same vowel team.", speakHi: "एक शब्द पर टैप करो। फिर उसी स्वर युग्म वाले डिब्बे पर टैप करो।",
        groups: [
          { id: "ai", en: "ai", hi: "ai", items: ["rain", "snail"] },
          { id: "ee", en: "ee", hi: "ee", items: ["feet", "tree"] },
          { id: "oa", en: "oa", hi: "oa", items: ["boat", "goat"] }
        ] },
      { type: "mcq", titleEn: "Find it", titleHi: "ढूँढो", instrEn: "Read the word. Tap its picture.", instrHi: "शब्द पढ़ो। उसकी तस्वीर पर टैप करो।", speakEn: "Read the word. Tap its picture.", speakHi: "शब्द पढ़ो। उसकी तस्वीर पर टैप करो।",
        readWord: "bee", options: [P("🐝", "bee", "मधुमक्खी"), P("🐻", "bear", "भालू"), P("🛏️", "bed", "बिस्तर")], answer: "bee",
        hintEn: "Sound it out: b-ee. The ee says ee.", hintHi: "आवाज़ें जोड़ो: b-ee। ee की आवाज़ ई है।" }
    ],
    practice: [
      read(E2, "train", "t-r-ai-n", [P("🚂", "train", "रेल"), P("🚌", "bus", "बस"), P("🚗", "car", "गाड़ी")]),
      read(E2, "snail", "s-n-ai-l", [P("🐌", "snail", "घोंघा"), P("🐍", "snake", "साँप"), P("🐟", "fish", "मछली")]),
      read(E2, "tree", "t-r-ee", [P("🌳", "tree", "पेड़"), P("🚂", "train", "रेल"), P("🚚", "truck", "ट्रक")]),
      read(E2, "feet", "f-ee-t", [P("🦶", "feet", "पैर"), P("🐟", "fish", "मछली"), P("🌀", "fan", "पंखा")]),
      read(E2, "goat", "g-oa-t", [P("🐐", "goat", "बकरी"), P("⛵", "boat", "नाव"), P("🧥", "coat", "कोट")]),
      read(E2, "soap", "s-oa-p", [P("🧼", "soap", "साबुन"), P("🧦", "sock", "मोज़ा"), P("☀️", "sun", "सूरज")]),
      read(E2, "spoon", "s-p-oo-n", [P("🥄", "spoon", "चम्मच"), P("🕷️", "spider", "मकड़ी"), P("🧦", "sock", "मोज़ा")]),
      read(E2, "light", "l-igh-t", [P("💡", "light", "बल्ब"), P("👄", "lip", "होंठ"), P("🦵", "leg", "टाँग")]),
      read(E2, "night", "n-igh-t", [P("🌃", "night", "रात"), P("🥜", "nut", "मूँगफली"), P("🥅", "net", "जाली")]),
      read(E2, "moon", "m-oo-n", [P("🌙", "moon", "चाँद"), P("🐭", "mouse", "चूहा"), P("👨", "man", "आदमी")]),
      read(E2, "boot", "b-oo-t", [P("🥾", "boot", "जूता"), P("📖", "book", "किताब"), P("⛵", "boat", "नाव")]),
      Q(E2, "Which vowel team is in rain?", "rain में कौन-सा स्वर युग्म है?", [T("ai"), T("ee"), T("oa")], "ai", "Rain says ay. Which team says ay?", "rain में ए की आवाज़ है। कौन-सा युग्म ए बोलता है?", { showEmoji: "🌧️" }),
      Q(E2, "Which vowel team is in feet?", "feet में कौन-सा स्वर युग्म है?", [T("ee"), T("oo"), T("igh")], "ee", "Feet says ee. Two e letters!", "feet में ई की आवाज़ है। दो e अक्षर!", { showEmoji: "🦶" }),
      Q(E2, "Which vowel team is in night?", "night में कौन-सा स्वर युग्म है?", [T("igh"), T("ai"), T("oa")], "igh", "Night says eye. Three letters make it: i, g, h.", "night में आई की आवाज़ है। तीन अक्षर: i, g, h।", { showEmoji: "🌃" }),
      Q(E2, "Which vowel team is in boat?", "boat में कौन-सा स्वर युग्म है?", [T("oa"), T("ee"), T("ai")], "oa", "Boat says oh. Which team says oh?", "boat में ओ की आवाज़ है। कौन-सा युग्म ओ बोलता है?", { showEmoji: "⛵" }),
      Q(E2, "Which vowel team is in moon?", "moon में कौन-सा स्वर युग्म है?", [T("oo"), T("igh"), T("ai")], "oo", "Moon says oo. Two o letters!", "moon में ऊ की आवाज़ है। दो o अक्षर!", { showEmoji: "🌙" }),
      Q(E2, "Which word does not have the ee sound? Tap the odd one out.", "किस शब्द में ee की आवाज़ नहीं है? जो अलग है उस पर टैप करो।", [T("feet"), T("tree"), T("boat")], "boat", "Feet and tree both say ee. Which one is different?", "feet और tree दोनों में ee है। कौन अलग है?"),
      Q(E2, "Which word does not rhyme with light? Tap the odd one out.", "कौन-सा शब्द light से तुक नहीं मिलाता? जो अलग है उस पर टैप करो।", [T("night"), T("kite"), T("boat")], "boat", "Light, night, kite all end with the same sound. Which does not?", "light, night, kite की आख़िरी आवाज़ एक जैसी है। कौन अलग है?"),
      Q(E2, "Read the phrase. What is in the boat?", "वाक्यांश पढ़ो। नाव में क्या है?", [P("🐐", "goat", "बकरी"), P("🧥", "coat", "कोट"), P("🐮", "cow", "गाय")], "goat", "The phrase says: a goat in a boat. Read it slowly.", "वाक्यांश कहता है: a goat in a boat। धीरे-धीरे पढ़ो।", { sentence: "a goat in a boat" }),
      Q(E2, "Read the phrase. What is in the rain?", "वाक्यांश पढ़ो। बारिश में क्या है?", [P("🐌", "snail", "घोंघा"), P("🐍", "snake", "साँप"), P("🐟", "fish", "मछली")], "snail", "The phrase says: a snail in the rain. Read it slowly.", "वाक्यांश कहता है: a snail in the rain। धीरे-धीरे पढ़ो।", { sentence: "a snail in the rain" })
    ]
  };
  finish(E2, e2, COUNTS);

  // ================================================================ Maths 1: bonds to 10, make-10 talk
  const M1 = "ukg-math-1";
  function opts3(ans, extra) {
    const set = [ans];
    (extra || []).concat([ans + 1, ans - 1, ans + 2]).forEach((n) => { if (n >= 0 && set.indexOf(n) < 0 && set.length < 3) set.push(n); });
    return set.map(num);
  }
  function frameQ(n) {
    const ans = 10 - n;
    return Q(M1, n + " are filled. How many more make 10?", n + " भरे हैं। 10 बनाने के लिए और कितने चाहिए?", opts3(ans, [n]), String(ans),
      "Count the empty boxes. They make 10 with the filled ones.", "खाली डिब्बे गिनो। ये भरे हुए के साथ 10 बनाते हैं।", { frame: n });
  }
  function missing(a, ans, text) {
    return Q(M1, "Find the missing number.", "छूटा हुआ अंक ढूँढो।", opts3(ans, [a]), String(ans),
      "Which number goes with " + a + " to make 10? Think of the ten-frame.", a + " के साथ कौन-सा अंक मिलकर 10 बनाता है? ten-frame सोचो।", { sentence: text });
  }
  const m1 = {
    shortEn: "Find the pairs that make 10, then add 9 + 4 by making 10 first.", shortHi: "10 बनाने वाले जोड़े ढूँढो, फिर 9 + 4 पहले 10 बनाकर जोड़ो।",
    objEn: "number pairs that make 10, and making 10 first 🔟", objHi: "10 बनाने वाले जोड़े, और पहले 10 बनाना 🔟",
    sumEn: "Pairs that make 10: 7 + 3, 6 + 4, 9 + 1. To add 9 + 4, make 10 first, then add the rest.", sumHi: "10 बनाने वाले जोड़े: 7 + 3, 6 + 4, 9 + 1। 9 + 4 जोड़ने के लिए पहले 10 बनाओ, फिर बाकी जोड़ो।",
    scene: "market",
    teach: {
      pose: "point", anim: "bob",
      capEn: "Ten is a friend number! 7 + 3 = 10. 6 + 4 = 10. 9 + 1 = 10. 🔟",
      capHi: "10 दोस्त संख्या है! 7 + 3 = 10। 6 + 4 = 10। 9 + 1 = 10। 🔟",
      speakEn: "Ten is a friend number. Seven and three make ten. Six and four make ten. Nine and one make ten. To add nine and four, make ten first. Nine and one is ten. Then three more is thirteen.",
      speakHi: "दस दोस्त संख्या है। सात और तीन दस बनाते हैं। छह और चार दस बनाते हैं। नौ और एक दस बनाते हैं। नौ और चार जोड़ने के लिए पहले दस बनाओ। नौ और एक दस। फिर तीन और, तेरह।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: seven and three make ten", instrHi: "बोलो: सात और तीन मिलकर दस", speakEn: "Say: seven and three make ten.", speakHi: "बोलो: सात और तीन मिलकर दस।",
        word: "7 + 3 = 10", emoji: "🔟", accept: ["seven", "three", "ten", "10", "7", "3", "make", "सात", "तीन", "दस"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "ten-frame", frame: 6, titleEn: "Ten-frame", titleHi: "टेन-फ्रेम",
        instrEn: "6 are filled. How many more make 10?", instrHi: "6 भरे हैं। 10 बनाने के लिए और कितने चाहिए?", speakEn: "Six are filled. How many more make ten?", speakHi: "छह भरे हैं। दस बनाने के लिए और कितने चाहिए?",
        options: [num(4), num(6), num(5)], answer: "4", hintEn: "Count the empty boxes.", hintHi: "खाली डिब्बे गिनो।" },
      { type: "mcq", titleEn: "Which pair?", titleHi: "कौन-सा जोड़ा?", instrEn: "Which pair makes 10?", instrHi: "कौन-सा जोड़ा 10 बनाता है?", speakEn: "Which pair makes ten?", speakHi: "कौन-सा जोड़ा दस बनाता है?",
        options: [T("3 + 7"), T("4 + 5"), T("6 + 3")], answer: "3 + 7", hintEn: "Add each pair. Which one is 10?", hintHi: "हर जोड़ा जोड़ो। कौन-सा 10 है?" }
    ],
    practice: [
      frameQ(7), frameQ(3), frameQ(8), frameQ(4), frameQ(2), frameQ(9), frameQ(5), frameQ(1),
      missing(6, 4, "6 + ? = 10"),
      missing(2, 8, "? + 2 = 10"),
      missing(5, 5, "5 + ? = 10"),
      missing(3, 7, "10 = 3 + ?"),
      Q(M1, "Which pair makes 10?", "कौन-सा जोड़ा 10 बनाता है?", [T("6 + 4"), T("5 + 3"), T("7 + 2")], "6 + 4", "Add each pair. Which one is 10?", "हर जोड़ा जोड़ो। कौन-सा 10 है?"),
      Q(M1, "Which pair makes 10?", "कौन-सा जोड़ा 10 बनाता है?", [T("8 + 2"), T("4 + 4"), T("9 + 2")], "8 + 2", "Add each pair. Which one is 10?", "हर जोड़ा जोड़ो। कौन-सा 10 है?"),
      Q(M1, "Anya has 9 laddoos. How many more make 10?", "अन्या के पास 9 लड्डू हैं। 10 बनाने के लिए और कितने चाहिए?", [num(1), num(2), num(10)], "1", "9 and what makes 10? Look at the full ten-frame.", "9 और कितने मिलकर 10? भरा हुआ ten-frame सोचो।", { showEmoji: "🟠🟠🟠🟠🟠🟠🟠🟠🟠" }),
      Q(M1, "Raju has 4 pencils in a box and 6 in his hand. How many in all?", "राजू के डिब्बे में 4 पेंसिल और हाथ में 6 हैं। कुल कितनी?", [num(9), num(10), num(11)], "10", "4 and 6 is a pair that makes 10.", "4 और 6 मिलकर 10 बनाते हैं।", { showEmoji: "✏️✏️✏️✏️ + ✏️✏️✏️✏️✏️✏️" }),
      Q(M1, "9 + 4. Make 10 first: 9 + 1 = 10. How many are left from the 4?", "9 + 4। पहले 10 बनाओ: 9 + 1 = 10। 4 में से कितने बचे?", [num(3), num(4), num(5)], "3", "4 take away the 1 you used. 4 − 1 = ?", "4 में से जो 1 लिया उसे घटाओ। 4 − 1 = ?", { sentence: "9 + 4 = ?" }),
      Q(M1, "8 + 6. Make 10 first: 8 + 2 = 10. How many are left from the 6?", "8 + 6। पहले 10 बनाओ: 8 + 2 = 10। 6 में से कितने बचे?", [num(3), num(4), num(5)], "4", "6 take away the 2 you used. 6 − 2 = ?", "6 में से जो 2 लिए उन्हें घटाओ। 6 − 2 = ?", { sentence: "8 + 6 = ?" }),
      Q(M1, "7 + 5. 7 + 3 = 10, then 2 more. What is 7 + 5?", "7 + 5। 7 + 3 = 10, फिर 2 और। 7 + 5 कितना?", [num(11), num(12), num(13)], "12", "Start at 10. Count on 2 more.", "10 से शुरू करो। 2 आगे गिनो।", { sentence: "7 + 5 = ?" }),
      Q(M1, "9 + 7. 9 + 1 = 10, then 6 more. What is 9 + 7?", "9 + 7। 9 + 1 = 10, फिर 6 और। 9 + 7 कितना?", [num(15), num(16), num(17)], "16", "Start at 10. Count on 6 more.", "10 से शुरू करो। 6 आगे गिनो।", { sentence: "9 + 7 = ?" })
    ]
  };
  finish(M1, m1, COUNTS);

  window.CHOTU_UKG_V2_UNITS = [E1, E2, M1];
})();

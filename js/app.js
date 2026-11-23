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
      parentIntro: "Try free for 7 days, then choose a plan. This demo does not take payment.",
      trialBadge: "7-day free trial",
      basicName: "Basic",
      premiumName: "Premium",
      familyName: "Family Premium",
      familyKids: "For 2 children",
      familyEach: "About ₹1,500 per child per year",
      perMonth: "/ month",
      perYear: "/ year",
      basicList: [
        "Deeper English and Maths for Nursery, LKG, UKG and Class 1",
        "Step-by-step phonics and story questions",
        "Hands-on maths: ten-frames, number bonds and rupees",
        "Thinking and Logic puzzles in Basic",
        "Chotu speaks every instruction in English or Hindi",
        "Finger tracing on the slate",
        "A simple parent progress view"
      ],
      premiumList: [
        "Everything in Basic",
        "Talk to Chotu — the child answers by voice",
        "Pronunciation coaching in English and Hindi",
        "Hindi reading and writing, with matras in Class 1",
        "A coached slate that guides handwriting",
        "Smart practice that reteaches a weak skill",
        "Weekly parent report mapped to NCF and NIPUN",
        "Offline lesson packs and a PIN screen-time lock"
      ],
      familyList: [
        "Premium features for 2 children",
        "Each child gets Talk to Chotu, Hindi literacy and reports"
      ],
      startTrial: "Start 7-day trial",
      chooseBasic: "Choose Basic",
      choosePremium: "Choose Premium",
      chooseFamily: "Choose Family Premium",
      demoOnly: "Demo only — no payment is collected.",
      homeTitle: "Let's learn!",
      pickAge: "Pick a level",
      nursery: "Nursery",
      nurseryAge: "Age 3",
      lkg: "LKG",
      lkgAge: "Age 4",
      ukg: "UKG",
      ukgAge: "Age 5",
      class1: "Class 1",
      class1Age: "Age 6",
      english: "English",
      maths: "Maths",
      logic: "Thinking & Logic",
      slate: "Slate",
      talk: "Talk to Chotu",
      rupees: "Rupee coins",
      report: "Parent report",
      premiumTag: "Premium",
      basicTag: "Basic",
      courseUnits: "This year's units",
      stars: "Stars",
      hearChotu: "Hear Chotu",
      nextQ: "Next",
      doneLesson: "All done! Home",
      englishTitle: "English",
      mathsTitle: "Maths",
      logicTitle: "Thinking & Logic",
      slateTitle: "Chotu's slate",
      slateHint: "Trace the letter or number with your finger.",
      clear: "Clear",
      nextGlyph: "Next",
      done: "Done",
      talkTitle: "Talk to Chotu",
      talkHint: "Say a sound, a word, or a number.",
      listen: "I'm listening… say a sound, a word or a number",
      tapMic: "Tap the mic and speak",
      noSpeech: "Voice listening is not available in this browser. Tap a button instead.",
      fallbackTitle: "Or tap here:",
      mic: "Speak to Chotu",
      stop: "Stop",
      reportTitle: "Weekly parent report",
      sampleData: "Sample data — not a real child",
      childName: "Child",
      week: "Week of 16 Nov 2026",
      englishProgress: "English",
      mathsProgress: "Maths",
      speaking: "Speaking practice",
      hindiPath: "Hindi path",
      nextFocus: "Next week",
      rupeeTitle: "Rupee coins",
      rupeeQ: "How many rupees in all?",
      rupeeNext: "Next coins",
      great: "Yes! Super star!",
      tryAgain: "Almost! Try again.",
      heard: "I heard:",
      greetSpeech: "Hi! I am Chotu Teacher. Let's learn English and Maths together, with lots of fun!",
      praise: ["Yes! Super star!", "Wah! Very good!", "Fantastic!", "You did it!"],
      retry: ["Almost! Try again.", "Have another look.", "You can do it!"],
      planTrial: "You are on the 7-day free trial. All Premium previews are open.",
      planBasic: "Basic plan (demo). Premium cards still open as a preview.",
      planPremium: "Premium plan (demo). Enjoy Talk to Chotu and more!",
      planFamily: "Family Premium (demo). Premium features for 2 children.",
      heardUnknown: "I did not catch that. Please try again, or tap a button.",
      reels: "Chotu Reels",
      reelsSub: "Swipe to learn — songs, stories and quick games",
      reelsTitle: "Chotu Reels",
      courseMap: "Full course map",
      courseMapSub: "All 10 English and 10 Maths units for this year",
      mapLegend: "Finish a unit's star check to unlock the next one. Thinking and Logic is woven into the units marked with a puzzle piece.",
      unlockPremium: "Unlock Premium for this demo",
      unlockPremiumHint: "No payment. Lets you try Talk to Chotu, Hindi, the coached slate and parent reports.",
      mapTitle: "Course map",
      unitTitle: "Unit",
      newEpisode: "New episode today",
      newTag: "New",
      rewards: "Stickers & outfits",
      rewardsIntro: "Spend stars on outfits, and collect stickers as you learn.",
      outfits: "Chotu's outfits",
      stickers: "Sticker book",
      timeLimit: "Screen time",
      limitIntro: "Choose how long Chotu can play today. A parent must answer a quick question to change this.",
      parentGate: "For parents",
      tiredTitle: "Chotu is tired",
      tiredLine: "That was a great learning day. See you tomorrow!",
      tiredHint: "A parent can change the time limit.",
      tiredSpeech: "Chotu is tired. That was a great learning day. See you tomorrow!",
      seeYou: "See you tomorrow",
      parentChange: "I'm a parent — change time",
      limitOff: "No limit",
      limit1: "1 minute (demo test)",
      limit10: "10 minutes",
      limit20: "20 minutes",
      limit30: "30 minutes",
      unlock: "Unlock",
      wear: "Wear",
      wearing: "Wearing",
      needStars: "Need more stars",
      stickerLocked: "Keep learning to get this"
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
      parentIntro: "7 दिन मुफ़्त आज़माएँ, फिर योजना चुनें। यह डेमो भुगतान नहीं लेता।",
      trialBadge: "7 दिन का मुफ़्त ट्रायल",
      basicName: "बेसिक",
      premiumName: "प्रीमियम",
      familyName: "फ़ैमिली प्रीमियम",
      familyKids: "2 बच्चों के लिए",
      familyEach: "लगभग ₹1,500 प्रति बच्चा प्रति वर्ष",
      perMonth: "/ महीना",
      perYear: "/ वर्ष",
      basicList: [
        "नर्सरी, एलकेजी, यूकेजी और कक्षा 1 के लिए गहरा अंग्रेज़ी और गणित पाठ्यक्रम",
        "क्रमबद्ध ध्वनि-विज्ञान और कहानी के प्रश्न",
        "हाथों से गणित: दस-फ्रेम, संख्या जोड़ और रुपये",
        "बेसिक में सोच और तर्क के पहेलियाँ",
        "छोटू हर निर्देश अंग्रेज़ी या हिन्दी में बोलता है",
        "स्लेट पर उँगली से अक्षर बनाना",
        "अभिभावकों के लिए सरल प्रगति दृश्य"
      ],
      premiumList: [
        "बेसिक की सारी बातें",
        "छोटू से बातें — बच्चा आवाज़ में जवाब दे",
        "अंग्रेज़ी और हिन्दी में उच्चारण की मदद",
        "हिन्दी पढ़ना-लिखना, कक्षा 1 में मात्राओं के साथ",
        "हस्तलेखन सिखाने वाली कोच स्लेट",
        "कमज़ोर कौशल को फिर से सिखाने वाला अभ्यास",
        "एनसीएफ और निपुण से जुड़ी साप्ताहिक रिपोर्ट",
        "ऑफ़लाइन पाठ और पिन वाला स्क्रीन-टाइम लॉक"
      ],
      familyList: [
        "2 बच्चों के लिए प्रीमियम सुविधाएँ",
        "हर बच्चे को छोटू से बातें, हिन्दी पाठ और रिपोर्ट मिलती है"
      ],
      startTrial: "7 दिन का ट्रायल शुरू करें",
      chooseBasic: "बेसिक चुनें",
      choosePremium: "प्रीमियम चुनें",
      chooseFamily: "फ़ैमिली प्रीमियम चुनें",
      demoOnly: "केवल डेमो — कोई भुगतान नहीं लिया जाता।",
      homeTitle: "चलो सीखें!",
      pickAge: "स्तर चुनें",
      nursery: "नर्सरी",
      nurseryAge: "3 साल",
      lkg: "एलकेजी",
      lkgAge: "4 साल",
      ukg: "यूकेजी",
      ukgAge: "5 साल",
      class1: "कक्षा 1",
      class1Age: "6 साल",
      english: "अंग्रेज़ी",
      maths: "गणित",
      logic: "सोच और तर्क",
      slate: "स्लेट",
      talk: "छोटू से बातें",
      rupees: "रुपये के सिक्के",
      report: "अभिभावक रिपोर्ट",
      premiumTag: "प्रीमियम",
      basicTag: "बेसिक",
      courseUnits: "इस वर्ष की इकाइयाँ",
      stars: "सितारे",
      hearChotu: "छोटू से सुनो",
      nextQ: "अगला",
      doneLesson: "हो गया! होम",
      englishTitle: "अंग्रेज़ी",
      mathsTitle: "गणित",
      logicTitle: "सोच और तर्क",
      slateTitle: "छोटू की स्लेट",
      slateHint: "उँगली से अक्षर या संख्या बनाओ।",
      clear: "साफ़ करो",
      nextGlyph: "अगला",
      done: "हो गया",
      talkTitle: "छोटू से बातें",
      talkHint: "एक ध्वनि, शब्द या संख्या बोलो।",
      listen: "मैं सुन रहा हूँ… एक ध्वनि, शब्द या संख्या बोलो",
      tapMic: "माइक दबाकर बोलो",
      noSpeech: "इस ब्राउज़र में आवाज़ सुनना उपलब्ध नहीं है। बटन दबाएँ।",
      fallbackTitle: "या यहाँ दबाएँ:",
      mic: "छोटू से बोलो",
      stop: "रोको",
      reportTitle: "साप्ताहिक अभिभावक रिपोर्ट",
      sampleData: "नमूना डेटा — कोई असली बच्चा नहीं",
      childName: "बच्चा",
      week: "सप्ताह, 16 नवम्बर 2026",
      englishProgress: "अंग्रेज़ी",
      mathsProgress: "गणित",
      speaking: "बोलने का अभ्यास",
      hindiPath: "हिन्दी पथ",
      nextFocus: "अगला सप्ताह",
      rupeeTitle: "रुपये के सिक्के",
      rupeeQ: "कुल कितने रुपये हैं?",
      rupeeNext: "अगले सिक्के",
      great: "हाँ! सुपर स्टार!",
      tryAgain: "लगभग! फिर कोशिश करो।",
      heard: "मैंने सुना:",
      greetSpeech: "नमस्ते! मैं छोटू टीचर हूँ। चलो अंग्रेज़ी और गणित मज़े-मज़े से सीखते हैं!",
      praise: ["हाँ! सुपर स्टार!", "वाह! बहुत अच्छे!", "शानदार!", "तुमने कर दिखाया!"],
      retry: ["लगभग! फिर कोशिश करो।", "एक बार और देखो।", "तुम कर सकते हो!"],
      planTrial: "आप 7 दिन के मुफ़्त ट्रायल पर हैं। सारे प्रीमियम प्रिव्यू खुले हैं।",
      planBasic: "बेसिक योजना (डेमो)। प्रीमियम कार्ड पूर्वावलोकन के रूप में खुले हैं।",
      planPremium: "प्रीमियम योजना (डेमो)। छोटू से बातें और और भी मज़ा लें!",
      planFamily: "फ़ैमिली प्रीमियम (डेमो)। 2 बच्चों के लिए प्रीमियम सुविधाएँ।",
      heardUnknown: "समझ नहीं आया। फिर कोशिश करो, या बटन दबाओ।",
      reels: "छोटू रील्स",
      reelsSub: "स्वाइप करो — गीत, कहानियाँ और तेज़ खेल",
      reelsTitle: "छोटू रील्स",
      courseMap: "पूरा कोर्स मानचित्र",
      courseMapSub: "इस वर्ष की 10 अंग्रेज़ी और 10 गणित इकाई",
      mapLegend: "स्टार जाँच पूरी करो, तब अगली इकाई खुलेगी। पहेली चिह्न वाली इकाई में तर्क भी है।",
      unlockPremium: "इस डेमो में प्रीमियम खोलो",
      unlockPremiumHint: "कोई भुगतान नहीं। छोटू से बातें, हिन्दी, कोच स्लेट और रिपोर्ट आज़मा सकते हो।",
      mapTitle: "कोर्स मानचित्र",
      unitTitle: "इकाई",
      newEpisode: "आज का नया एपिसोड",
      newTag: "नया",
      rewards: "स्टिकर और पोशाक",
      rewardsIntro: "सितारों से पोशाक लो, और सीखते हुए स्टिकर इकट्ठा करो।",
      outfits: "छोटू की पोशाकें",
      stickers: "स्टिकर बुक",
      timeLimit: "स्क्रीन समय",
      limitIntro: "आज छोटू कितनी देर खेल सकता है, चुनें। बदलने के लिए माता-पिता को एक प्रश्न हल करना होगा।",
      parentGate: "माता-पिता के लिए",
      tiredTitle: "छोटू थक गया है",
      tiredLine: "आज बहुत अच्छा सीखा। कल मिलते हैं!",
      tiredHint: "माता-पिता समय सीमा बदल सकते हैं।",
      tiredSpeech: "छोटू थक गया है। आज बहुत अच्छा सीखा। कल मिलते हैं!",
      seeYou: "कल मिलते हैं",
      parentChange: "मैं माता-पिता हूँ — समय बदलें",
      limitOff: "कोई सीमा नहीं",
      limit1: "1 मिनट (डेमो टेस्ट)",
      limit10: "10 मिनट",
      limit20: "20 मिनट",
      limit30: "30 मिनट",
      unlock: "खोलो",
      wear: "पहनो",
      wearing: "पहनी हुई",
      needStars: "और सितारे चाहिए",
      stickerLocked: "इसे पाने के लिए सीखते रहो"
    }
  };

  const LEVELS = {
    nursery: {
      blurbEn: "Nursery, age 3: listening and first sounds, then s, a, t, p. Maths starts with subitising and numbers to 10.",
      blurbHi: "नर्सरी, 3 साल: सुनना और पहली ध्वनियाँ, फिर s, a, t, p। गणित में झट से पहचान और 10 तक गिनती।",
      engPlayEn: "Beginning sounds",
      engPlayHi: "शुरू की ध्वनियाँ",
      mathPlayEn: "See and count mangoes",
      mathPlayHi: "आम देखो और गिनो",
      engUnits: [
        "Phase 1 listening: environmental and voice sounds",
        "Rhyme, rhythm and syllable claps",
        "Oral blending, still before the full alphabet",
        "First letter set s, a, t, p, and first words",
        "Daily story talk: who, what, predict",
        "Second letter set i, n, m, d, with a revisit",
        "Vocabulary clusters with a Hindi bridge",
        "Picture comprehension, including a simple why",
        "Meaningful marks and traces only for known sounds",
        "Spaced mastery: listening, rhyme, first words, story questions"
      ],
      mathUnits: [
        "Sort, classify, and odd one out, with a reason",
        "Subitise 2 and 3, then 4, and a five-frame, with maths talk",
        "Numbers 1 to 5 with CPA: objects, pictures, then numerals",
        "Numbers 6 to 10 on a ten-frame, and how many more",
        "Shapes in real life and a simple spatial puzzle",
        "Early measurement: length and weight by direct comparison",
        "Patterns, including find the mistake",
        "Number bonds within 5, part-whole with objects",
        "Join and take away within 5, objects only, with an explanation",
        "Spaced mixed mastery, plus a logic puzzle"
      ],
      premiumUnits: ["Talk to Chotu", "Pronunciation coaching", "Hindi literacy start", "Coached slate", "Adaptive reteach and parent report"],
      glyphs: ["s", "a", "t", "p", "1", "2", "5"],
      report: {
        childEn: "Aarav, Nursery (sample)", childHi: "आरव, नर्सरी (नमूना)",
        engEn: "Listening, rhyme, and first sounds s, a, t, p", engHi: "सुनना, तुक और पहली ध्वनियाँ s, a, t, p",
        mathEn: "Subitising and counting mangoes to 5", mathHi: "झट से पहचान और आम 5 तक गिनना",
        speakEn: "Said first sounds clearly (sample)", speakHi: "पहली ध्वनियाँ साफ़ बोलीं (नमूना)",
        hindiEn: "Swar अ आ इ (Premium)", hindiHi: "स्वर अ आ इ (प्रीमियम)",
        nextEn: "Set i, n, m, d and bonds within 5", nextHi: "समूह i, n, m, d और 5 के जोड़"
      }
    },
    lkg: {
      blurbEn: "LKG, age 4: Phase 2 phonics and CVC words like cat. Maths uses ten-frames and number bonds to 10.",
      blurbHi: "एलकेजी, 4 साल: चरण 2 ध्वनियाँ और cat जैसे शब्द। गणित में दस-फ्रेम और 10 के जोड़।",
      engPlayEn: "Blend CVC words", engPlayHi: "तीन-अक्षर शब्द जोड़ो",
      mathPlayEn: "Ten-frames and bonds to 10", mathPlayHi: "दस-फ्रेम और 10 के जोड़",
      engUnits: [
        "Four-block start, and fluency on s, a, t, p, i, n, m, d",
        "Sets 3 and 4: g, o, c, k, then ck, e, u, r, blend and segment",
        "Set 5, and first captions with tricky words the, to, no, go, I",
        "CVC fluency across Phase 2, including pot, pan and lid",
        "Story comprehension and a planned vocabulary set",
        "Writing from dictation of known sounds",
        "Oral language: describe a picture in three sentences",
        "A Phase 2 mini book, and a retell in order",
        "Vocabulary themes and word webs: animals, food, school",
        "Spaced mastery of Phase 2 reading, writing and story questions"
      ],
      mathUnits: [
        "Ten-frames, subitise to 5, and secure 1 to 10 with maths talk",
        "Number bonds to 5, then to 10, with CPA",
        "11 to 20 as 10 and some ones, on a double ten-frame",
        "CPA addition within 10, including how many more",
        "Take away within 10, zero, and a missing part",
        "Compare and order to 20, then write 21 to 50 if 1 to 20 is secure",
        "Informal measurement with a hand span, footsteps or a cup",
        "ABC and growing patterns, and state the rule",
        "A first object graph, with two questions",
        "Spaced mastery: bonds to 10, add and take away with a reason"
      ],
      premiumUnits: ["Talk to Chotu, word reading out loud", "Pronunciation and phonics coaching", "Hindi literacy", "Coached slate for letters and words", "Adaptive reteach and weekly parent report"],
      glyphs: ["c", "a", "t", "p", "n", "5", "10"],
      report: {
        childEn: "Aarav, LKG (sample)", childHi: "आरव, एलकेजी (नमूना)",
        engEn: "Blending CVC words such as cat, pin and pot", engHi: "cat, pin और pot जैसे शब्द जोड़ना",
        mathEn: "Ten-frames and number bonds to 10", mathHi: "दस-फ्रेम और 10 तक के जोड़",
        speakEn: "Read 8 CVC words aloud (sample)", speakHi: "8 तीन-अक्षर शब्द ज़ोर से पढ़े (नमूना)",
        hindiEn: "Swar and early vyanjan (Premium)", hindiHi: "स्वर और शुरुआती व्यंजन (प्रीमियम)",
        nextEn: "Captions with tricky words, and 11 to 20 as 10 and ones", nextHi: "कठिन शब्दों वाले वाक्य, और 11 से 20"
      }
    },
    ukg: {
      blurbEn: "UKG, age 5: digraphs such as sh and ch, and short sentences. Maths includes rupee shop problems within 20.",
      blurbHi: "यूकेजी, 5 साल: sh और ch जैसी संयुक्त ध्वनियाँ और छोटे वाक्य। गणित में 20 रुपये तक की दुकान।",
      engPlayEn: "Digraphs and sentences", engPlayHi: "संयुक्त ध्वनियाँ और वाक्य",
      mathPlayEn: "Rupee shop within 20", mathPlayHi: "20 रुपये तक की दुकान",
      engUnits: [
        "Phase 2 fluency, then Phase 3: j, v, w, x, y, z, qu, and sh, ch, th, ng",
        "More Phase 3 vowel digraphs, such as ai, ee, igh, oa and oo",
        "Phase 4 adjacent consonants: st, tr, cl, mp and similar",
        "Decodable readers with why and predict, in an Indian setting",
        "Write sentences from sounds, with a capital and a full stop",
        "Grammar in meaning: is, am, are, these and those",
        "Retell beginning, middle and end, and reuse new words",
        "Read an unseen short text, and infer a feeling",
        "Write three connected sentences about a picture or a festival",
        "Class 1 readiness: fluency, four comprehension questions, three sentences"
      ],
      mathUnits: [
        "Bonds to 10 by heart, and mental make-10 talk",
        "Bonds to 20, and add or subtract within 20 with CPA and a reason",
        "Tens and ones to 100, with bundles, and place-value talk",
        "Story problems with a part-whole or bar picture, and how do you know",
        "Rupee reasoning: enough or not enough, and simple change",
        "Time at o'clock, a day's sequence, and which activity takes longer",
        "Measurement with informal units, estimate then check",
        "3D shape properties, roll or stack, and a shape logic puzzle",
        "Pictograph or simple table, with three questions",
        "Spaced mastery and a puzzle week: mental add or subtract within 20"
      ],
      premiumUnits: ["Talk to Chotu, reading aloud and conversation", "Pronunciation and fluency coaching", "Hindi literacy, words without matra", "Coached slate for words and sentences", "Adaptive reteach and NCF-mapped parent report", "Tables of 2 and 5, as a stretch only"],
      glyphs: ["s", "h", "A", "I", "10", "20"],
      report: {
        childEn: "Aarav, UKG (sample)", childHi: "आरव, यूकेजी (नमूना)",
        engEn: "Digraphs sh and ch, and short decodable sentences", engHi: "sh और ch ध्वनियाँ, और छोटे वाक्य",
        mathEn: "Rupee shop problems and addition within 20", mathHi: "रुपये की दुकान और 20 तक जोड़ना",
        speakEn: "Read 2 short sentences smoothly (sample)", speakHi: "2 छोटे वाक्य आसानी से पढ़े (नमूना)",
        hindiEn: "Words without matra (Premium)", hindiHi: "मात्रा के बिना शब्द (प्रीमियम)",
        nextEn: "Phase 4 blends, and place value to 100", nextHi: "चरण 4 मिश्र ध्वनियाँ, और 100 तक स्थानीय मान"
      }
    },
    class1: {
      blurbEn: "Class 1, age 6: NCERT stories, unseen sentences and a story question. Maths includes tens and ones, and equal groups.",
      blurbHi: "कक्षा 1, 6 साल: एनसीईआरटी कहानियाँ और प्रश्न। गणित में दहाई-इकाई और बराबर समूह।",
      engPlayEn: "Read and answer", engPlayHi: "पढ़ो और जवाब दो",
      mathPlayEn: "Equal groups and tens", mathPlayHi: "बराबर समूह और दहाई",
      engUnits: [
        "Mridang, Two Little Hands: action words, labels, and a phonics revisit",
        "Greetings, including Namaste, and a written greeting",
        "Picture Time, and decode an unfamiliar 4 or 5 word sentence",
        "The Cap-seller and the Monkeys: retell, infer, act, and write two sentences",
        "A Farm: rhyme, vocabulary, and unseen sentences",
        "Fun with Pictures and The Food we Eat: Indian food, and 2 or 3 sentences",
        "Shared reading plus a written response, and a spaced vocabulary revisit",
        "The Four Seasons: compare, explain, and write three sentences",
        "Anandi's Rainbow: colours, the national flag, inference, and connected sentences",
        "NIPUN Class 1 literacy check: unseen sentences and a short written response"
      ],
      mathUnits: [
        "Shape properties and a logic sort, from What is Long? What is Round?",
        "Making 10, teens as 10 and ones, and mental bond fluency",
        "How Many: add and subtract single digits with a strategy",
        "Vegetable Farm: daily-life problems to 20, two representations",
        "Fun with Numbers, 21 to 99: order, count on and back, which is closer",
        "Lina's Family: estimate, measure, record, with hand span or a cup",
        "Utsav: festival patterns and number patterns, and state the rule",
        "How do I Spend my Day: sequence, o'clock, and informal duration",
        "How Many Times: equal groups, arrays, and repeated addition as times",
        "Money and data, plus mixed mastery and puzzles"
      ],
      premiumUnits: ["Talk to Chotu, Class 1 conversation", "Fluency coaching on a new text", "Hindi literacy with matra", "Coached slate for sentences and numerals to 99", "Adaptive reteach and NIPUN-mapped parent report", "Shared reading of a Mridang chapter"],
      glyphs: ["A", "M", "20", "47", "99"],
      report: {
        childEn: "Aarav, Class 1 (sample)", childHi: "आरव, कक्षा 1 (नमूना)",
        engEn: "The Cap-seller and the Monkeys: inference and two sentences", engHi: "टोपी वाला और बंदर: अनुमान और दो वाक्य",
        mathEn: "Equal groups (3 times 2) and tens and ones to 47", mathHi: "बराबर समूह (3 गुना 2) और 47 तक दहाई-इकाई",
        speakEn: "Read a new 5-word sentence (sample)", speakHi: "एक नया 5-शब्द वाक्य पढ़ा (नमूना)",
        hindiEn: "Hindi with matras, aligned to Sarangi (Premium)", hindiHi: "सारंगी के साथ मात्राएँ (प्रीमियम)",
        nextEn: "A Farm unseen sentences, and measure with a cup", nextHi: "फार्म के नए वाक्य, और कप से माप"
      }
    }
  };

  const ENG_HI_UNITS = {
    nursery: ["चरण 1 सुनना: आस-पास और आवाज़ की ध्वनियाँ", "तुक, लय और अक्षर-तालियाँ", "मुँह से शब्द जोड़ना, पूरी वर्णमाला से पहले", "पहला अक्षर समूह s, a, t, p और पहले शब्द", "रोज़ कहानी: कौन, क्या, आगे क्या होगा", "दूसरा समूह i, n, m, d, और पहले समूह की दोहराई", "शब्द समूह, हिन्दी से अंग्रेज़ी पुल के साथ", "चित्र समझ, एक सरल क्यों सहित", "जानी हुई ध्वनियों के लिए अर्थपूर्ण निशान", "अंतराल के बाद महारत: सुनना, तुक, शब्द, प्रश्न"],
    lkg: ["चार खंडों की शुरुआत, और s, a, t, p, i, n, m, d पर धाराप्रवाहता", "समूह 3 और 4: g, o, c, k, फिर ck, e, u, r", "समूह 5, और the, to, no, go, I वाले छोटे वाक्य", "चरण 2 के CVC शब्द, जैसे pot, pan और lid", "कहानी समझ और नियोजित शब्द भंडार", "जानी हुई ध्वनियों की श्रुतलेख और अक्षर रचना", "मौखिक भाषा: चित्र पर तीन वाक्य", "चरण 2 की छोटी किताब, और क्रम से दोहराना", "शब्द जाल: जानवर, भोजन, स्कूल", "चरण 2 पढ़ने, लिखने और प्रश्नों की महारत"],
    ukg: ["चरण 2 के बाद चरण 3: sh, ch, th, ng सहित", "और स्वर युग्म: ai, ee, igh, oa, oo", "चरण 4 पास-पास व्यंजन: st, tr, cl, mp", "भारतीय परिवेश में पढ़ने योग्य कहानियाँ", "ध्वनियों से वाक्य, बड़े अक्षर और पूर्ण विराम के साथ", "अर्थ में व्याकरण: is, am, are, these, those", "शुरुआत, मध्य, अंत दोहराना", "नई छोटी पाठ पढ़ना, और भावना का अनुमान", "चित्र या त्योहार पर तीन जुड़े वाक्य", "कक्षा 1 की तैयारी: धाराप्रवाहता, प्रश्न, तीन वाक्य"],
    class1: ["मृदंग, दो छोटे हाथ: क्रिया शब्द और ध्वनि दोहराई", "अभिवादन, नमस्ते सहित, और लिखा अभिवादन", "चित्र समय, और नया 4 या 5 शब्द का वाक्य पढ़ना", "टोपी वाला और बंदर: कहानी, अनुमान, दो वाक्य", "एक खेत: तुक, शब्द, नए वाक्य", "चित्रों का मज़ा और हम जो खाते हैं: 2 या 3 वाक्य", "साथ पढ़ना, लिखा उत्तर, और शब्द दोहराई", "चार मौसम: तुलना, समझाना, तीन वाक्य", "आनंदी का इंद्रधनुष: रंग, झंडा, जुड़े वाक्य", "निपुण कक्षा 1 जाँच: नए वाक्य और छोटा लेख"]
  };
  const MATH_HI_UNITS = {
    nursery: ["छाँटना, वर्गीकरण, और अलग वस्तु, कारण के साथ", "2, 3, फिर 4 को झट से पहचानना, पाँच-फ्रेम पर", "1 से 5: वस्तु, चित्र, फिर अंक", "6 से 10 दस-फ्रेम पर, और कितने और", "असली जीवन की आकृतियाँ और एक स्थान पहेली", "लंबाई और भार की सीधी तुलना", "पैटर्न, गलती ढूँढना सहित", "5 के अंदर संख्या जोड़, भाग-पूरा", "5 के अंदर जोड़ना और निकालना, कारण के साथ", "मिश्रित महारत, और एक तर्क पहेली"],
    lkg: ["दस-फ्रेम, 5 तक झट से पहचान, 1 से 10 पक्का", "5, फिर 10 तक के जोड़", "11 से 20: 10 और कुछ इकाई", "10 के अंदर जोड़ना, कितने और", "10 के अंदर घटाना, शून्य, और गायब भाग", "20 तक तुलना, फिर 21 से 50 यदि 1 से 20 पक्का हो", "हथेली, कदम या कप से अनौपचारिक माप", "पैटर्न, और नियम बताना", "पहला वस्तु ग्राफ, दो प्रश्नों के साथ", "10 के जोड़ और जोड़ना-घटाना की महारत"],
    ukg: ["10 के जोड़ याद, और मानसिक 10 बनाओ", "20 के जोड़, और 20 तक जोड़ना-घटाना कारण के साथ", "100 तक दहाई और इकाई", "कहानी सवाल, चित्र के साथ, और कैसे पता चला", "रुपये: काफी है या नहीं, और वापसी", "पूरे घंटे का समय, दिन का क्रम", "अनुमान लगाओ, फिर मापकर जाँचो", "3D आकृति गुण और आकृति पहेली", "चित्र ग्राफ या तालिका, तीन प्रश्नों के साथ", "महारत सप्ताह: 20 तक मानसिक जोड़-घटाव"],
    class1: ["आकृति गुण और तर्क छाँट", "10 बनाना, किशोर संख्याएँ 10 और इकाई", "एक अंक जोड़ना-घटाना, गायब संख्या सहित", "सब्ज़ी का खेत: 20 तक रोज़मर्रा के सवाल", "21 से 99: क्रम, आगे-पीछे, कौन 50 के पास", "अनुमान, माप, हथेली या कप से", "उत्सव: पैटर्न और नियम बताना", "मेरा दिन कैसे बीतता है: क्रम, घंटा, अवधि", "कितनी बार: बराबर समूह और बार-बार जोड़ना", "पैसा और आँकड़े, महारत और पहेलियाँ"]
  };
  const PREM_HI_UNITS = {
    nursery: ["छोटू से बातें", "उच्चारण की मदद", "हिन्दी साक्षरता की शुरुआत", "कोच स्लेट", "फिर से अभ्यास और रिपोर्ट"],
    lkg: ["छोटू से बातें, शब्द ज़ोर से", "उच्चारण और ध्वनि मदद", "हिन्दी साक्षरता", "अक्षरों और शब्दों की कोच स्लेट", "फिर से अभ्यास और साप्ताहिक रिपोर्ट"],
    ukg: ["छोटू से बातें, पढ़ना और बातचीत", "उच्चारण और धाराप्रवाहता", "हिन्दी साक्षरता, मात्रा के बिना शब्द", "शब्दों और वाक्यों की कोच स्लेट", "एनसीएफ रिपोर्ट", "2 और 5 के पहाड़े, केवल अतिरिक्त"],
    class1: ["छोटू से बातें, कक्षा 1 बातचीत", "नए पाठ पर धाराप्रवाहता", "मात्राओं के साथ हिन्दी", "वाक्यों और 99 तक अंकों की कोच स्लेट", "निपुण रिपोर्ट", "मृदंग अध्याय का साथ पढ़ना"]
  };

  const state = {
    lang: "en", stars: 0, plan: "none", age: "nursery", screen: "splash",
    quizAnswered: false, slateIndex: 0, rupeeCoins: [1, 2, 2], rupeeChoices: [3, 5, 7],
    rupeeAnswered: false, listening: false, engIndex: 0, mathIndex: 0, logicIndex: 0,
    currentAnswer: null, currentSpeak: "", engQueue: [], mathQueue: [], logicQueue: []
  };

  let recognition = null;
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function t(key) {
    const pack = I18N[state.lang] || I18N.en;
    return pack[key];
  }
  function txt(en, hi) { return state.lang === "hi" ? hi : en; }
  function level() { return LEVELS[state.age] || LEVELS.nursery; }

  function applyI18n() {
    $$("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"));
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-list]").forEach((el) => {
      const items = t(el.getAttribute("data-i18n-list"));
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
    renderHome();
    updateTalkStatus();
    updateRupeeView();
    renderReport();
    if (state.screen === "english") renderEnglish(false);
    if (state.screen === "maths") renderMaths(false);
    if (state.screen === "logic") renderLogic(false);
    if (window.ChotuFun && window.ChotuFun.onI18n) window.ChotuFun.onI18n();
    if (window.ChotuCourse && window.ChotuCourse.onI18n) window.ChotuCourse.onI18n();
    $$(".voice-speed").forEach(renderSpeedControl);
    hooks("onI18n");
  }
  function hooks(name, arg) {
    (window.ChotuHooks || []).forEach((h) => { try { if (h[name]) h[name](arg); } catch (e) { console.error(e); } });
  }

  function screenTitleKey(id) {
    const titles = {
      splash: "appName", parent: "parentTitle", home: "homeTitle",
      english: "englishTitle", maths: "mathsTitle", logic: "logicTitle",
      slate: "slateTitle", talk: "talkTitle", report: "reportTitle", rupees: "rupeeTitle",
      reels: "reelsTitle", rewards: "rewards", limit: "timeLimit", gate: "parentGate", tired: "tiredTitle",
      map: "mapTitle", unit: "unitTitle"
    };
    return titles[id] || "appName";
  }

  function showScreen(id) {
    if (id !== state.screen) stopSpeak();
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
    if (id === "report") renderReport();
    if (id === "home") renderHome();
    if (state.listening) stopListening();
    const phone = $("#phone");
    if (phone) phone.classList.toggle("reels-on", id === "reels");
    if (window.ChotuFun && window.ChotuFun.onScreen) window.ChotuFun.onScreen(id);
    if (window.ChotuCourse && window.ChotuCourse.onScreen) window.ChotuCourse.onScreen(id);
    hooks("onScreen", id);
  }

  function pickVoice(langCode) {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    if (!voices.length) return null;
    const want = langCode.toLowerCase();
    const norm = (v) => (v.lang || "").toLowerCase().replace("_", "-");
    return voices.find((v) => norm(v) === want) ||
      voices.find((v) => norm(v).startsWith(want.slice(0, 2) + "-in")) ||
      voices.find((v) => norm(v).startsWith(want.slice(0, 2))) || null;
  }

  // ---- Voice: slow, short sentences, pauses between sentences -------------
  const VOICE_KEY = "chotuVoiceSpeed";
  const speech = { token: 0, timers: [], last: "" };
  function getSpeed() {
    try { return localStorage.getItem(VOICE_KEY) === "normal" ? "normal" : "slow"; } catch (e) { return "slow"; }
  }
  function setSpeed(v) {
    try { localStorage.setItem(VOICE_KEY, v === "normal" ? "normal" : "slow"); } catch (e) {}
    $$(".voice-speed").forEach(renderSpeedControl);
  }
  function speechRate(lang) {
    const slow = getSpeed() === "slow";
    if (lang && lang.toLowerCase().indexOf("hi") === 0) return slow ? 0.7 : 0.9;
    return slow ? 0.7 : 0.9;
  }
  function renderSpeedControl(box) {
    if (!box) return;
    const cur = getSpeed();
    box.innerHTML = '<span class="vs-label">' + txt("Chotu's voice speed", "छोटू की आवाज़ की गति") + "</span>" +
      '<span class="vs-btns"><button type="button" data-speed="slow" class="' + (cur === "slow" ? "on" : "") + '">🐢 ' + txt("Slow", "धीमी") + "</button>" +
      '<button type="button" data-speed="normal" class="' + (cur === "normal" ? "on" : "") + '">🐇 ' + txt("Normal", "सामान्य") + "</button></span>";
    $$("button", box).forEach((b) => b.addEventListener("click", () => {
      setSpeed(b.getAttribute("data-speed"));
      speakRaw(txt("Hello! I am Chotu. Can you hear me?", "नमस्ते! मैं छोटू हूँ। क्या तुम मुझे सुन पा रहे हो?"), null, { remember: false });
    }));
  }
  function stopSpeak() {
    speech.token += 1;
    speech.timers.forEach(clearTimeout);
    speech.timers = [];
    if (window.speechSynthesis) { try { speechSynthesis.cancel(); } catch (e) {} }
  }
  function splitSentences(text) {
    const parts = String(text).replace(/\s+/g, " ").match(/[^.!?।…]+[.!?।…]*/g) || [];
    return parts.map((x) => x.trim()).filter((x) => /[A-Za-z0-9\u0900-\u097F]/.test(x));
  }
  function hasVoice(langCode) {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    if (!voices.length) return null; // unknown (voices not loaded)
    return !!pickVoice(langCode) && (pickVoice(langCode).lang || "").toLowerCase().slice(0, 2) === langCode.toLowerCase().slice(0, 2);
  }
  // speak(text, {lang, split, gap, rate, pitch, onDone, onBoundary(charIndexInText)})
  function speak(text, opts) {
    opts = opts || {};
    text = String(text || "").replace(/[\u{1F000}-\u{1FFFF}\u{2190}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu, " ").replace(/\s+([.,!?।])/g, "$1").replace(/:/g, ",").replace(/\s+/g, " ").trim();
    if (!text) { if (opts.onDone) opts.onDone(); return; }
    const lang = opts.lang || (state.lang === "hi" ? "hi-IN" : "en-IN");
    stopSpeak();
    const my = speech.token;
    const slow = getSpeed() === "slow";
    const gap = opts.gap != null ? opts.gap : (slow ? 650 : 300);
    const chunks = opts.split === false ? [String(text)] : splitSentences(text);
    if (!chunks.length) { if (opts.onDone) opts.onDone(); return; }
    let offset = 0;
    const offsets = chunks.map((c) => { const o = offset; offset += c.length + 1; return o; });
    function finish() { if (my === speech.token && opts.onDone) opts.onDone(); }
    if (!window.speechSynthesis) {
      // no speech support: still advance after an estimated time so screens do not stall
      speech.timers.push(setTimeout(finish, Math.min(6000, 600 + text.length * 70)));
      return;
    }
    let i = 0;
    function next() {
      if (my !== speech.token) return;
      if (i >= chunks.length) { finish(); return; }
      const idx = i++;
      const u = new SpeechSynthesisUtterance(chunks[idx]);
      u.lang = lang;
      u.pitch = opts.pitch || 1.4;
      u.rate = opts.rate || speechRate(lang);
      const voice = pickVoice(lang);
      if (voice) { try { u.voice = voice; } catch (e) {} }
      let advanced = false;
      const go = () => {
        if (advanced || my !== speech.token) return;
        advanced = true;
        speech.timers.push(setTimeout(next, idx === chunks.length - 1 ? 0 : gap));
      };
      u.onend = go;
      u.onerror = go;
      if (opts.onBoundary) u.onboundary = (e) => { if (my === speech.token && e.name !== "sentence") opts.onBoundary(offsets[idx] + (e.charIndex || 0), idx); };
      // watchdog: some devices never fire onend
      const est = Math.min(15000, 1200 + chunks[idx].length * 120 / (u.rate || 1));
      speech.timers.push(setTimeout(go, est));
      try { speechSynthesis.speak(u); } catch (e) { go(); }
    }
    speech.timers.push(setTimeout(next, 30));
  }
  function speakRaw(text, langOverride, opts) {
    opts = Object.assign({}, opts || {});
    if (langOverride) opts.lang = langOverride;
    if (opts.remember !== false) speech.last = text;
    speak(text, opts);
  }

  function greet() { speakRaw(t("greetSpeech")); }

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
    if (window.ChotuFun && window.ChotuFun.onStars) window.ChotuFun.onStars(n);
  }

  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 1600);
  }

  function praise() {
    const list = t("praise") || I18N.en.praise;
    return list[Math.floor(Math.random() * list.length)];
  }
  function retry() {
    const list = t("retry") || I18N.en.retry;
    return list[Math.floor(Math.random() * list.length)];
  }

  function updatePlanBanner() {
    const el = $("#plan-banner");
    if (!el) return;
    if (state.plan === "trial") el.textContent = t("planTrial");
    else if (state.plan === "basic") el.textContent = t("planBasic");
    else if (state.plan === "premium") el.textContent = t("planPremium");
    else if (state.plan === "family") el.textContent = t("planFamily");
    else el.textContent = "";
  }

  function setPlan(plan) {
    state.plan = plan;
    updatePlanBanner();
    showScreen("home");
    const words = {
      trial: txt("7-day trial started. Enjoy the preview!", "7 दिन का ट्रायल शुरू। प्रिव्यू देखें!"),
      basic: txt("Basic plan selected (demo).", "बेसिक योजना चुनी गई (डेमो)।"),
      premium: txt("Premium plan selected (demo).", "प्रीमियम योजना चुनी गई (डेमो)।"),
      family: txt("Family Premium selected (demo).", "फ़ैमिली प्रीमियम चुना गया (डेमो)।")
    };
    toast(words[plan] || "");
    if (window.ChotuFun && window.ChotuFun.onPlayStart) window.ChotuFun.onPlayStart();
  }

  function setAge(age) {
    state.age = age;
    state.engIndex = 0;
    state.mathIndex = 0;
    state.logicIndex = 0;
    state.slateIndex = 0;
    $$(".age-chip").forEach((b) => b.classList.toggle("active", b.getAttribute("data-age") === age));
    renderHome();
    if (window.ChotuCourse && window.ChotuCourse.updateHomeProgress) window.ChotuCourse.updateHomeProgress();
  }

  function renderHome() {
    hooks("onHome");
    const L = level();
    const blurb = $("#level-blurb");
    if (blurb) blurb.textContent = txt(L.blurbEn, L.blurbHi);
    const eSub = $("#english-card-sub");
    if (eSub) eSub.textContent = txt(L.engPlayEn, L.engPlayHi);
    const mSub = $("#maths-card-sub");
    if (mSub) mSub.textContent = txt(L.mathPlayEn, L.mathPlayHi);
    const list = $("#unit-list");
    if (!list) return;
    list.innerHTML = "";
    const blocks = [
      { label: txt("English · Basic", "अंग्रेज़ी · बेसिक"), items: L.engUnits, hi: ENG_HI_UNITS[state.age], tier: "basic" },
      { label: txt("Maths · Basic", "गणित · बेसिक"), items: L.mathUnits, hi: MATH_HI_UNITS[state.age], tier: "basic" },
      { label: txt("Premium", "प्रीमियम"), items: L.premiumUnits, hi: PREM_HI_UNITS[state.age], tier: "premium" }
    ];
    blocks.forEach((block) => {
      const head = document.createElement("p");
      head.className = "subject-chip";
      head.textContent = block.label;
      list.appendChild(head);
      block.items.forEach((title, i) => {
        const row = document.createElement("div");
        row.className = "unit-item";
        const n = document.createElement("span");
        n.className = "unit-n";
        n.textContent = String(i + 1);
        const text = document.createElement("div");
        text.className = "unit-text";
        text.textContent = state.lang === "hi" && block.hi && block.hi[i] ? block.hi[i] : title;
        const pill = document.createElement("span");
        pill.className = "pill " + (block.tier === "premium" ? "pill-premium" : "pill-basic");
        pill.textContent = block.tier === "premium" ? t("premiumTag") : t("basicTag");
        row.appendChild(n);
        row.appendChild(text);
        row.appendChild(pill);
        list.appendChild(row);
      });
    });
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

  function optionButtons(options, onPick) {
    const wrap = document.createElement("div");
    wrap.className = "choice-row";
    options = shuffle(options || []);
    options.forEach((opt) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "choice-btn";
      if (typeof opt === "object") {
        b.innerHTML = (opt.emoji ? '<span class="emoji">' + opt.emoji + "</span>" : "") + (opt.label || opt.value);
        b.setAttribute("data-value", String(opt.value));
      } else {
        b.textContent = String(opt);
        b.setAttribute("data-value", String(opt));
      }
      b.addEventListener("click", () => onPick(b.getAttribute("data-value"), b, wrap));
      wrap.appendChild(b);
    });
    return wrap;
  }

  function markAnswer(wrap, btn, ok) {
    $$(".choice-btn, .pic-btn, .sound-tile", wrap).forEach((el) => {
      el.classList.remove("selected", "wrong");
    });
    btn.classList.add(ok ? "selected" : "wrong");
  }

  function setFeedback(id, ok) {
    const el = $(id);
    if (!el) return;
    const msg = ok ? praise() : retry();
    el.textContent = msg;
    el.className = "feedback " + (ok ? "ok" : "no");
    speakRaw(msg);
  }

  function handleAnswer(isCorrect, feedbackId) {
    if (isCorrect) {
      if (!state.quizAnswered) {
        state.quizAnswered = true;
        addStars(1);
      }
      setFeedback(feedbackId, true);
    } else {
      setFeedback(feedbackId, false);
    }
  }

  function updateProgress(kind) {
    const map = { english: ["engQueue", "engIndex"], maths: ["mathQueue", "mathIndex"], logic: ["logicQueue", "logicIndex"] };
    const pair = map[kind];
    if (!pair) return;
    const q = state[pair[0]] || [];
    const i = state[pair[1]] || 0;
    const total = Math.max(q.length, 1);
    const cur = (i % total) + 1;
    const bar = $("#" + kind + "-progress");
    const lab = $("#" + kind + "-progress-label");
    if (bar) bar.style.width = Math.round((cur / total) * 100) + "%";
    if (lab) lab.textContent = cur + " / " + total;
  }

  function englishBank() {
    if (state.age === "lkg") {
      return [
        { tiles: ["c", "a", "t"], word: "cat", options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "cap", label: "cap", emoji: "🧢" }, { value: "cot", label: "cot", emoji: "🛏️" }] },
        { tiles: ["p", "i", "n"], word: "pin", options: [{ value: "pin", label: "pin", emoji: "📌" }, { value: "pan", label: "pan", emoji: "🍳" }, { value: "pen", label: "pen", emoji: "🖊️" }] },
        { tiles: ["p", "o", "t"], word: "pot", options: [{ value: "pot", label: "pot", emoji: "🪴" }, { value: "pat", label: "pat", emoji: "👋" }, { value: "pit", label: "pit", emoji: "🕳️" }] },
        { tiles: ["m", "a", "n"], word: "man", options: [{ value: "man", label: "man", emoji: "👨" }, { value: "mat", label: "mat", emoji: "🟩" }, { value: "pan", label: "pan", emoji: "🍳" }] },
        { tiles: ["l", "i", "d"], word: "lid", options: [{ value: "lid", label: "lid", emoji: "🥫" }, { value: "lad", label: "lad", emoji: "👦" }, { value: "led", label: "led", emoji: "💡" }] },
        { tiles: ["p", "a", "n"], word: "pan", options: [{ value: "pan", label: "pan", emoji: "🍳" }, { value: "pin", label: "pin", emoji: "📌" }, { value: "pen", label: "pen", emoji: "🖊️" }] },
        { tiles: ["s", "a", "t"], word: "sat", options: [{ value: "sat", label: "sat", emoji: "😌" }, { value: "sit", label: "sit", emoji: "🪑" }, { value: "pat", label: "pat", emoji: "👋" }] },
        { tiles: ["c", "a", "p"], word: "cap", options: [{ value: "cap", label: "cap", emoji: "🧢" }, { value: "cat", label: "cat", emoji: "🐱" }, { value: "cup", label: "cup", emoji: "☕" }] },
        { tiles: ["d", "o", "g"], word: "dog", options: [{ value: "dog", label: "dog", emoji: "🐶" }, { value: "dig", label: "dig", emoji: "🕳️" }, { value: "dot", label: "dot", emoji: "🔴" }] },
        { tiles: ["k", "i", "d"], word: "kid", options: [{ value: "kid", label: "kid", emoji: "👧" }, { value: "kit", label: "kit", emoji: "🧰" }, { value: "lid", label: "lid", emoji: "🥫" }] },
        { tiles: ["m", "u", "g"], word: "mug", options: [{ value: "mug", label: "mug", emoji: "🍺" }, { value: "mat", label: "mat", emoji: "🟩" }, { value: "man", label: "man", emoji: "👨" }] },
        { tiles: ["c", "o", "t"], word: "cot", options: [{ value: "cot", label: "cot", emoji: "🛏️" }, { value: "cat", label: "cat", emoji: "🐱" }, { value: "pot", label: "pot", emoji: "🪴" }] }
      ];
    }
    if (state.age === "ukg") {
      return [
        { sentence: "The ship is on the sand.", qEn: "Tap the word with the sh sound.", qHi: "sh ध्वनि वाला शब्द दबाओ।", options: ["ship", "is", "the"], answer: "ship", speakEn: "The ship is on the sand. Which word has the sh sound?", speakHi: "शिप इज़ ऑन द सैंड। sh ध्वनि वाला शब्द कौन सा है?" },
        { sentence: "I can see the shop.", qEn: "What can you see?", qHi: "तुम क्या देख सकते हो?", options: ["the shop", "the frog", "the cap"], answer: "the shop", speakEn: "I can see the shop. What can you see?", speakHi: "मैं दुकान देख सकता हूँ। तुम क्या देखते हो?" },
        { sentence: "The child sits on the chair.", qEn: "Tap the word with the ch sound.", qHi: "ch ध्वनि वाला शब्द दबाओ।", options: ["chair", "sits", "The"], answer: "chair", speakEn: "The child sits on the chair. Which word has the ch sound?", speakHi: "चाइल्ड चेयर पर बैठा है। ch वाला शब्द कौन सा है?" },
        { sentence: "I like this thin chapati.", qEn: "Tap the word with the th sound.", qHi: "th ध्वनि वाला शब्द दबाओ।", options: ["thin", "like", "this"], answer: "thin", speakEn: "I like this thin chapati. Which word has the th sound at the start?", speakHi: "मुझे यह पतली रोटी पसंद है। th से शुरू शब्द कौन सा है?" },
        { sentence: "A fish swims in the pond.", qEn: "Tap the word with the sh sound.", qHi: "sh ध्वनि वाला शब्द दबाओ।", options: ["fish", "pond", "in"], answer: "fish", speakEn: "A fish swims in the pond. Which word has the sh sound?", speakHi: "तालाब में मछली तैरती है। sh वाला शब्द कौन सा है?" },
        { sentence: "The bell rang at night.", qEn: "Tap the word with the igh sound.", qHi: "igh ध्वनि वाला शब्द दबाओ।", options: ["night", "bell", "The"], answer: "night", speakEn: "The bell rang at night. Which word has the igh sound?", speakHi: "रात में घंटी बजी। igh वाला शब्द कौन सा है?" },
        { sentence: "I can see a green tree.", qEn: "What can you see?", qHi: "तुम क्या देख सकते हो?", options: ["a green tree", "a red shop", "the cap"], answer: "a green tree", speakEn: "I can see a green tree. What can you see?", speakHi: "मैं हरा पेड़ देख सकता हूँ। तुम क्या देखते हो?" },
        { sentence: "The goat is on the road.", qEn: "Tap the word with the oa sound.", qHi: "oa ध्वनि वाला शब्द दबाओ।", options: ["goat", "The", "is"], answer: "goat", speakEn: "The goat is on the road. Which word has the oa sound?", speakHi: "बकरी सड़क पर है। oa वाला शब्द कौन सा है?" },
        { sentence: "She has a ring and a song.", qEn: "Tap the word with the ng sound.", qHi: "ng ध्वनि वाला शब्द दबाओ।", options: ["ring", "has", "a"], answer: "ring", speakEn: "She has a ring and a song. Which word has the ng sound?", speakHi: "उसके पास अंगूठी और गीत है। ng वाला शब्द कौन सा है?" },
        { sentence: "We play in the rain.", qEn: "Where do we play?", qHi: "हम कहाँ खेलते हैं?", options: ["in the rain", "in the shop", "on the chair"], answer: "in the rain", speakEn: "We play in the rain. Where do we play?", speakHi: "हम बारिश में खेलते हैं। हम कहाँ खेलते हैं?" },
        { sentence: "The train is going to the market.", qEn: "Where is the train going?", qHi: "ट्रेन कहाँ जा रही है?", options: ["to the market", "to the pond", "to the bed"], answer: "to the market", speakEn: "The train is going to the market. Where is the train going?", speakHi: "ट्रेन बाज़ार जा रही है। वह कहाँ जा रही है?" }
      ];
    }
    if (state.age === "class1") {
      return [
        { sentence: "The monkeys took the caps.", qEn: "Who took the caps?", qHi: "टोपी कौन ले गया?", options: ["the monkeys", "the frogs", "the birds"], answer: "the monkeys", speakEn: "The monkeys took the caps. Who took the caps?", speakHi: "बंदर टोपियाँ ले गए। टोपी कौन ले गया?" },
        { sentence: "The frog is in the pond.", qEn: "Where is the frog?", qHi: "मेंढक कहाँ है?", options: ["in the pond", "on the cap", "in the shop"], answer: "in the pond", speakEn: "The frog is in the pond. Where is the frog?", speakHi: "मेंढक तालाब में है। मेंढक कहाँ है?" },
        { sentence: "Anandi saw a rainbow in the sky.", qEn: "What did Anandi see?", qHi: "आनंदी ने क्या देखा?", options: ["a rainbow", "a monkey", "a ship"], answer: "a rainbow", speakEn: "Anandi saw a rainbow in the sky. What did Anandi see?", speakHi: "आनंदी ने आसमान में इंद्रधनुष देखा। उसने क्या देखा?" },
        { sentence: "We say Namaste to Nani.", qEn: "What do we say to Nani?", qHi: "नानी को हम क्या कहते हैं?", options: ["Namaste", "Goodbye", "Shop"], answer: "Namaste", speakEn: "We say Namaste to Nani. What do we say?", speakHi: "हम नानी को नमस्ते कहते हैं। हम क्या कहते हैं?" },
        { sentence: "The farmer is at the farm.", qEn: "Where is the farmer?", qHi: "किसान कहाँ है?", options: ["at the farm", "in the shop", "on the cap"], answer: "at the farm", speakEn: "The farmer is at the farm. Where is the farmer?", speakHi: "किसान खेत पर है। किसान कहाँ है?" },
        { sentence: "I like roti and dal today.", qEn: "What do I like today?", qHi: "आज मुझे क्या पसंद है?", options: ["roti and dal", "a ship", "the caps"], answer: "roti and dal", speakEn: "I like roti and dal today. What do I like?", speakHi: "आज मुझे रोटी और दाल पसंद है। क्या पसंद है?" },
        { sentence: "The sun is hot in summer.", qEn: "How is the sun in summer?", qHi: "गर्मी में सूरज कैसा है?", options: ["hot", "cold", "wet"], answer: "hot", speakEn: "The sun is hot in summer. How is the sun?", speakHi: "गर्मी में सूरज गर्म है। सूरज कैसा है?" },
        { sentence: "The hen is in the shed.", qEn: "Where is the hen?", qHi: "मुर्गी कहाँ है?", options: ["in the shed", "in the pond", "on the flag"], answer: "in the shed", speakEn: "The hen is in the shed. Where is the hen?", speakHi: "मुर्गी शेड में है। मुर्गी कहाँ है?" },
        { sentence: "Two little hands can clap.", qEn: "What can two little hands do?", qHi: "दो छोटे हाथ क्या कर सकते हैं?", options: ["clap", "swim", "fly"], answer: "clap", speakEn: "Two little hands can clap. What can they do?", speakHi: "दो छोटे हाथ ताली बजा सकते हैं। वे क्या कर सकते हैं?" },
        { sentence: "The flag has three colours.", qEn: "How many colours does the flag have?", qHi: "झंडे में कितने रंग हैं?", options: ["three", "two", "five"], answer: "three", speakEn: "The flag has three colours. How many colours?", speakHi: "झंडे में तीन रंग हैं। कितने रंग हैं?" },
        { sentence: "The cows eat grass on the farm.", qEn: "What do the cows eat?", qHi: "गायें क्या खाती हैं?", options: ["grass", "caps", "books"], answer: "grass", speakEn: "The cows eat grass on the farm. What do the cows eat?", speakHi: "गायें खेत पर घास खाती हैं। वे क्या खाती हैं?" }
      ];
    }
    return [
      { word: "sun", hi: "सूरज", emoji: "☀️", sound: "s", options: ["s", "a", "t"], speakEn: "Sun. What is the first sound?", speakHi: "सन, सूरज। पहली ध्वनि क्या है?" },
      { word: "ant", hi: "चींटी", emoji: "🐜", sound: "a", options: ["s", "a", "p"], speakEn: "Ant. What is the first sound?", speakHi: "ऐंट, चींटी। पहली ध्वनि क्या है?" },
      { word: "tap", hi: "नल", emoji: "🚰", sound: "t", options: ["t", "p", "n"], speakEn: "Tap. What is the first sound?", speakHi: "टैप, नल। पहली ध्वनि क्या है?" },
      { word: "pot", hi: "गमला", emoji: "🪴", sound: "p", options: ["p", "s", "m"], speakEn: "Pot. What is the first sound?", speakHi: "पॉट, गमला। पहली ध्वनि क्या है?" },
      { word: "pin", hi: "पिन", emoji: "📌", sound: "p", options: ["p", "i", "n"], speakEn: "Pin. What is the first sound?", speakHi: "पिन। पहली ध्वनि क्या है?" },
      { word: "man", hi: "आदमी", emoji: "👨", sound: "m", options: ["m", "s", "a"], speakEn: "Man. What is the first sound?", speakHi: "मैन, आदमी। पहली ध्वनि क्या है?" },
      { word: "sit", hi: "बैठो", emoji: "🪑", sound: "s", options: ["s", "i", "t"], speakEn: "Sit. What is the first sound?", speakHi: "सिट, बैठो। पहली ध्वनि क्या है?" },
      { word: "tin", hi: "टिन", emoji: "🥫", sound: "t", options: ["t", "p", "n"], speakEn: "Tin. What is the first sound?", speakHi: "टिन। पहली ध्वनि क्या है?" },
      { word: "map", hi: "नक्शा", emoji: "🗺️", sound: "m", options: ["m", "a", "p"], speakEn: "Map. What is the first sound?", speakHi: "मैप, नक्शा। पहली ध्वनि क्या है?" },
      { word: "dip", hi: "डुबकी", emoji: "🏊", sound: "d", options: ["d", "i", "p"], speakEn: "Dip. What is the first sound?", speakHi: "डिप, डुबकी। पहली ध्वनि क्या है?" },
      { word: "sad", hi: "उदास", emoji: "😢", sound: "s", options: ["s", "a", "d"], speakEn: "Sad. What is the first sound?", speakHi: "सैड, उदास। पहली ध्वनि क्या है?" },
      { word: "mat", hi: "चटाई", emoji: "🟩", sound: "m", options: ["m", "s", "t"], speakEn: "Mat. What is the first sound?", speakHi: "मैट, चटाई। पहली ध्वनि क्या है?" }
    ];
  }

  function startEnglish() {
    state.engQueue = shuffle(englishBank().slice());
    state.engIndex = 0;
    state.quizAnswered = false;
    renderEnglish(true);
    showScreen("english");
    speakRaw(state.currentSpeak);
  }

  function renderEnglish(resetFeedback) {
    const bank = (state.engQueue && state.engQueue.length) ? state.engQueue : englishBank();
    const item = bank[state.engIndex % bank.length];
    updateProgress("english");
    const intro = $("#english-intro");
    const stage = $("#english-stage");
    if (!stage) return;
    if (resetFeedback) {
      const fb = $("#english-feedback");
      if (fb) { fb.textContent = ""; fb.className = "feedback"; }
    }
    stage.innerHTML = "";
    const card = document.createElement("div");
    card.className = "prompt-card";
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(state.currentAnswer);
      markAnswer(wrap, btn, ok);
      handleAnswer(ok, "#english-feedback");
    };
    if (state.age === "nursery") {
      if (intro) intro.textContent = txt("What is the first sound?", "पहली ध्वनि क्या है?");
      state.currentAnswer = item.sound;
      state.currentSpeak = txt(item.speakEn, item.speakHi);
      card.innerHTML = '<span class="emoji" style="font-size:3rem">' + item.emoji + '</span><span class="word">' + item.word + "</span><p>" + txt(item.word + " · " + item.hi, item.hi + " · " + item.word) + "</p>";
      stage.appendChild(card);
      stage.appendChild(optionButtons(item.options, onPick));
    } else if (state.age === "lkg") {
      if (intro) intro.textContent = txt("Blend the sounds. What word is this?", "ध्वनियाँ जोड़ो। यह कौन सा शब्द है?");
      state.currentAnswer = item.word;
      state.currentSpeak = txt(item.tiles.join("... ") + ". What word is this?", item.tiles.join("... ") + "। यह कौन सा शब्द है?");
      const tiles = item.tiles.map((s) => '<span class="sound-tile">' + s + "</span>").join("");
      card.innerHTML = '<div class="sound-tiles">' + tiles + "</div><p>" + txt("Say it together", "एक साथ बोलो") + "</p>";
      stage.appendChild(card);
      stage.appendChild(optionButtons(shuffle(item.options), onPick));
    } else {
      if (intro) intro.textContent = txt(item.qEn, item.qHi);
      state.currentAnswer = item.answer;
      state.currentSpeak = txt(item.speakEn, item.speakHi);
      card.innerHTML = '<p class="sentence">' + item.sentence + "</p>";
      stage.appendChild(card);
      stage.appendChild(optionButtons(item.options, onPick));
    }
  }

  function nextEnglish() {
    state.engIndex += 1;
    state.quizAnswered = false;
    renderEnglish(true);
    speakRaw(state.currentSpeak);
  }

  function mangoSVG() {
    return '<svg class="obj" viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="28" cy="36" rx="18" ry="22" fill="#f4c430"/><ellipse cx="24" cy="28" rx="7" ry="10" fill="#ffe566"/><path d="M36 16c8-2 14 4 16 10" stroke="#2f6b2f" fill="none" stroke-width="3"/><ellipse cx="40" cy="14" rx="8" ry="5" fill="#3fa34d" transform="rotate(-20 40 14)"/></svg>';
  }
  function laddooSVG() {
    return '<svg class="obj" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="18" fill="#e0a106"/><circle cx="32" cy="34" r="13" fill="#f5c542"/><circle cx="26" cy="28" r="3" fill="#fff3c4"/><circle cx="36" cy="30" r="2" fill="#c47c00"/><circle cx="30" cy="38" r="2" fill="#c47c00"/></svg>';
  }

  function startMaths() {
    state.mathQueue = shuffle([0,1,2,3,4,5,6,7,8,9,10,11]);
    state.mathIndex = 0;
    state.quizAnswered = false;
    renderMaths(true);
    showScreen("maths");
    speakRaw(state.currentSpeak);
  }

  function renderMaths(resetFeedback) {
    const stage = $("#maths-stage");
    const intro = $("#maths-intro");
    if (!stage) return;
    if (resetFeedback) {
      const fb = $("#maths-feedback");
      if (fb) { fb.textContent = ""; fb.className = "feedback"; }
    }
    stage.innerHTML = "";
    updateProgress("maths");
    const mi = (state.mathQueue && state.mathQueue.length) ? state.mathQueue[state.mathIndex % state.mathQueue.length] : state.mathIndex;
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(state.currentAnswer);
      markAnswer(wrap, btn, ok);
      handleAnswer(ok, "#maths-feedback");
    };

    if (state.age === "nursery") {
      const counts = [2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 2];
      const n = counts[mi % counts.length];
      state.currentAnswer = n;
      state.currentSpeak = txt("Look first. How many mangoes?", "पहले देखो। कितने आम हैं?");
      if (intro) intro.textContent = txt("Look first, then tell. How many mangoes?", "पहले देखो, फिर बताओ। कितने आम हैं?");
      const box = document.createElement("div");
      box.className = "objects";
      box.innerHTML = Array.from({ length: n }, mangoSVG).join("");
      stage.appendChild(box);
      const opts = shuffle([n, n === 5 ? 4 : n + 1, n === 2 ? 3 : n - 1].filter((v, i, a) => a.indexOf(v) === i && v >= 1));
      stage.appendChild(optionButtons(opts, onPick));
    } else if (state.age === "lkg") {
      const filleds = [6, 7, 4, 9, 5, 8, 3, 2, 7, 6, 9, 5];
      const filled = filleds[mi % filleds.length];
      const need = 10 - filled;
      state.currentAnswer = need;
      state.currentSpeak = txt("There are " + filled + " on the ten-frame. How many more to make 10?", "दस-फ्रेम पर " + filled + " हैं। 10 बनाने के लिए कितने और चाहिए?");
      if (intro) intro.textContent = txt("How many more to make 10?", "10 बनाने के लिए कितने और?");
      const frame = document.createElement("div");
      frame.className = "ten-frame";
      for (let i = 0; i < 10; i++) {
        const cell = document.createElement("div");
        cell.className = "tf-cell";
        if (i < filled) cell.innerHTML = '<span class="tf-dot"></span>';
        frame.appendChild(cell);
      }
      stage.appendChild(frame);
      const opts = shuffle([need, need === 1 ? 2 : need - 1, need === 6 ? 4 : need + 1].filter((v, i, a) => a.indexOf(v) === i && v >= 0 && v <= 10));
      stage.appendChild(optionButtons(opts, onPick));
    } else if (state.age === "ukg") {
      const shops = [
        { items: [{ e: "✏️", nEn: "pencil", nHi: "पेंसिल", p: 8 }, { e: "📒", nEn: "eraser", nHi: "रबर", p: 5 }], have: null, answer: 13, options: [12, 13, 15], qEn: "How much in all?", qHi: "कुल कितने रुपये?", speakEn: "A pencil is 8 rupees. An eraser is 5 rupees. How much in all?", speakHi: "पेंसिल 8 रुपये, रबर 5 रुपये। कुल कितने?" },
        { items: [{ e: "📓", nEn: "notebook", nHi: "कॉपी", p: 12 }], have: 20, answer: 8, options: [6, 8, 10], qEn: "You have ₹20. How much comes back?", qHi: "तुम्हारे पास ₹20 हैं। कितने वापस आएँगे?", speakEn: "A notebook is 12 rupees. You have 20 rupees. How much comes back?", speakHi: "कॉपी 12 रुपये की है। तुम्हारे पास 20 हैं। कितने वापस?" },
        { items: [{ e: "🍬", nEn: "toffee", nHi: "टॉफ़ी", p: 7 }], have: 10, answer: 3, options: [2, 3, 4], qEn: "You have ₹10. How much comes back?", qHi: "तुम्हारे पास ₹10 हैं। कितने वापस आएँगे?", speakEn: "A toffee is 7 rupees. You have 10 rupees. How much comes back?", speakHi: "टॉफ़ी 7 रुपये की है। तुम्हारे पास 10 हैं। कितने वापस?" },
        { items: [{ e: "🍌", nEn: "banana", nHi: "केला", p: 6 }, { e: "🍎", nEn: "apple", nHi: "सेब", p: 9 }], have: null, answer: 15, options: [14, 15, 16], qEn: "How much in all?", qHi: "कुल कितने रुपये?", speakEn: "A banana is 6 rupees. An apple is 9 rupees. How much in all?", speakHi: "केला 6, सेब 9। कुल कितने?" },
        { items: [{ e: "🥛", nEn: "milk", nHi: "दूध", p: 15 }], have: 20, answer: 5, options: [5, 4, 6], qEn: "You have ₹20. How much comes back?", qHi: "तुम्हारे पास ₹20 हैं। कितने वापस आएँगे?", speakEn: "Milk is 15 rupees. You have 20. How much comes back?", speakHi: "दूध 15 रुपये का है। 20 हैं। कितने वापस?" },
        { items: [{ e: "🥜", nEn: "peanuts", nHi: "मूंगफली", p: 8 }], have: 10, answer: 2, options: [2, 3, 1], qEn: "You have ₹10. How much comes back?", qHi: "तुम्हारे पास ₹10 हैं। कितने वापस आएँगे?", speakEn: "Peanuts are 8 rupees. You have 10. How much comes back?", speakHi: "मूंगफली 8 रुपये की है। 10 हैं। कितने वापस?" },
        { items: [{ e: "🥨", nEn: "biscuit", nHi: "बिस्कुट", p: 4 }, { e: "🍬", nEn: "toffee", nHi: "टॉफ़ी", p: 3 }], have: null, answer: 7, options: [6, 7, 8], qEn: "How much in all?", qHi: "कुल कितने रुपये?", speakEn: "A biscuit is 4 rupees. A toffee is 3. How much in all?", speakHi: "बिस्कुट 4, टॉफ़ी 3। कुल कितने?" },
        { items: [{ e: "🚌", nEn: "bus ticket", nHi: "बस टिकट", p: 9 }], have: 20, answer: 11, options: [10, 11, 12], qEn: "You have ₹20. How much comes back?", qHi: "तुम्हारे पास ₹20 हैं। कितने वापस आएँगे?", speakEn: "A bus ticket is 9 rupees. You have 20. How much comes back?", speakHi: "टिकट 9 रुपये का है। 20 हैं। कितने वापस?" },
        { items: [{ e: "🖍️", nEn: "crayon", nHi: "क्रेयॉन", p: 5 }, { e: "✏️", nEn: "pencil", nHi: "पेंसिल", p: 5 }], have: null, answer: 10, options: [9, 10, 11], qEn: "How much in all?", qHi: "कुल कितने रुपये?", speakEn: "A crayon is 5 rupees. A pencil is 5. How much in all?", speakHi: "क्रेयॉन 5, पेंसिल 5। कुल कितने?" },
        { items: [{ e: "📗", nEn: "book", nHi: "किताब", p: 18 }], have: 20, answer: 2, options: [2, 3, 1], qEn: "You have ₹20. How much comes back?", qHi: "तुम्हारे पास ₹20 हैं। कितने वापस आएँगे?", speakEn: "A book is 18 rupees. You have 20. How much comes back?", speakHi: "किताब 18 रुपये की है। 20 हैं। कितने वापस?" },
        { items: [{ e: "🛝", nEn: "toy", nHi: "खिलौना", p: 11 }], have: 20, answer: 9, options: [8, 9, 10], qEn: "You have ₹20. How much comes back?", qHi: "तुम्हारे पास ₹20 हैं। कितने वापस आएँगे?", speakEn: "A toy is 11 rupees. You have 20. How much comes back?", speakHi: "खिलौना 11 रुपये का है। 20 हैं। कितने वापस?" }
      ];
      const item = shops[mi % shops.length];
      state.currentAnswer = item.answer;
      state.currentSpeak = txt(item.speakEn, item.speakHi);
      if (intro) intro.textContent = txt(item.qEn, item.qHi);
      const row = document.createElement("div");
      row.className = "shop-items";
      item.items.forEach((it) => {
        const d = document.createElement("div");
        d.className = "shop-item";
        d.innerHTML = '<span class="emoji">' + it.e + "</span>" + txt(it.nEn, it.nHi) + "<div>₹" + it.p + "</div>";
        row.appendChild(d);
      });
      stage.appendChild(row);
      if (item.have != null) {
        const w = document.createElement("p");
        w.className = "wallet";
        w.textContent = txt("You have ₹" + item.have, "तुम्हारे पास ₹" + item.have + " हैं");
        stage.appendChild(w);
      }
      stage.appendChild(optionButtons(item.options, onPick));
    } else {
      const sets = [
        { type: "groups", groups: 3, each: 2, answer: 6, options: [5, 6, 8], qEn: "3 plates with 2 laddoos. 2 + 2 + 2 = ?", qHi: "3 थालियों में 2-2 लड्डू। 2 + 2 + 2 = ?", speakEn: "Three plates with two laddoos each. Two plus two plus two. That is 3 times 2. How many in all?", speakHi: "तीन थालियों में दो-दो लड्डू। 2 जमा 2 जमा 2। यह 3 गुना 2 है। कुल कितने?" },
        { type: "groups", groups: 4, each: 2, answer: 8, options: [6, 8, 10], qEn: "4 plates with 2 laddoos. 2 + 2 + 2 + 2 = ?", qHi: "4 थालियों में 2-2 लड्डू। 2 + 2 + 2 + 2 = ?", speakEn: "Four plates with two laddoos each. That is 4 times 2. How many in all?", speakHi: "चार थालियों में दो-दो लड्डू। यह 4 गुना 2 है। कुल कितने?" },
        { type: "place", tens: 4, ones: 7, answer: 47, options: [47, 74, 40], qEn: "4 tens and 7 ones. What number is this?", qHi: "4 दहाई और 7 इकाई। यह कौन सी संख्या है?", speakEn: "Four tens and seven ones. What number is this?", speakHi: "चार दहाई और सात इकाई। यह कौन सी संख्या है?" },
        { type: "place", tens: 2, ones: 5, answer: 25, options: [25, 52, 20], qEn: "2 tens and 5 ones. What number is this?", qHi: "2 दहाई और 5 इकाई। यह कौन सी संख्या है?", speakEn: "Two tens and five ones. What number is this?", speakHi: "दो दहाई और पाँच इकाई। यह कौन सी संख्या है?" },
        { type: "groups", groups: 2, each: 3, answer: 6, options: [5, 6, 9], qEn: "2 plates with 3 laddoos. 3 + 3 = ?", qHi: "2 थालियों में 3-3 लड्डू। 3 + 3 = ?", speakEn: "Two plates with three laddoos. That is 2 times 3. How many?", speakHi: "दो थालियों में तीन-तीन लड्डू। यह 2 गुना 3 है। कितने?" },
        { type: "groups", groups: 5, each: 2, answer: 10, options: [8, 10, 12], qEn: "5 plates with 2 laddoos. How many in all?", qHi: "5 थालियों में 2-2 लड्डू। कुल कितने?", speakEn: "Five plates with two laddoos. That is 5 times 2. How many?", speakHi: "पाँच थालियों में दो-दो लड्डू। यह 5 गुना 2 है।" },
        { type: "place", tens: 3, ones: 6, answer: 36, options: [36, 63, 30], qEn: "3 tens and 6 ones. What number is this?", qHi: "3 दहाई और 6 इकाई। यह कौन सी संख्या है?", speakEn: "Three tens and six ones. What number?", speakHi: "तीन दहाई और छह इकाई। कौन सी संख्या?" },
        { type: "place", tens: 5, ones: 0, answer: 50, options: [50, 15, 5], qEn: "5 tens and 0 ones. What number is this?", qHi: "5 दहाई और 0 इकाई। यह कौन सी संख्या है?", speakEn: "Five tens and zero ones. What number?", speakHi: "पाँच दहाई और शून्य इकाई। कौन सी संख्या?" },
        { type: "place", tens: 6, ones: 8, answer: 68, options: [68, 86, 60], qEn: "6 tens and 8 ones. What number is this?", qHi: "6 दहाई और 8 इकाई। यह कौन सी संख्या है?", speakEn: "Six tens and eight ones. What number?", speakHi: "छह दहाई और आठ इकाई। कौन सी संख्या?" },
        { type: "groups", groups: 3, each: 3, answer: 9, options: [6, 9, 12], qEn: "3 plates with 3 laddoos. 3 + 3 + 3 = ?", qHi: "3 थालियों में 3-3 लड्डू। 3 + 3 + 3 = ?", speakEn: "Three plates with three laddoos. That is 3 times 3. How many?", speakHi: "तीन थालियों में तीन-तीन लड्डू। यह 3 गुना 3 है।" },
        { type: "place", tens: 9, ones: 9, answer: 99, options: [99, 90, 9], qEn: "9 tens and 9 ones. What number is this?", qHi: "9 दहाई और 9 इकाई। यह कौन सी संख्या है?", speakEn: "Nine tens and nine ones. What number?", speakHi: "नौ दहाई और नौ इकाई। कौन सी संख्या?" },
        { type: "groups", groups: 4, each: 3, answer: 12, options: [9, 12, 16], qEn: "4 plates with 3 laddoos. How many in all?", qHi: "4 थालियों में 3-3 लड्डू। कुल कितने?", speakEn: "Four plates with three laddoos. That is 4 times 3. How many?", speakHi: "चार थालियों में तीन-तीन लड्डू। यह 4 गुना 3 है।" }
      ];
      const item = sets[mi % sets.length];
      state.currentAnswer = item.answer;
      state.currentSpeak = txt(item.speakEn, item.speakHi);
      if (intro) intro.textContent = txt(item.qEn, item.qHi);
      if (item.type === "groups") {
        const plates = document.createElement("div");
        plates.className = "plates";
        for (let g = 0; g < item.groups; g++) {
          const p = document.createElement("div");
          p.className = "plate";
          p.innerHTML = Array.from({ length: item.each }, laddooSVG).join("");
          plates.appendChild(p);
        }
        stage.appendChild(plates);
      } else {
        const box = document.createElement("div");
        box.className = "place-value";
        const tens = document.createElement("div");
        tens.className = "bundle";
        tens.innerHTML = "<div>" + Array.from({ length: item.tens }, () => '<span class="stick"></span>').join("") + "</div><small>" + txt(item.tens + " tens", item.tens + " दहाई") + "</small>";
        const ones = document.createElement("div");
        ones.className = "bundle";
        ones.innerHTML = "<div>" + Array.from({ length: item.ones }, () => '<span class="ones-dot"></span>').join("") + "</div><small>" + txt(item.ones + " ones", item.ones + " इकाई") + "</small>";
        box.appendChild(tens);
        box.appendChild(ones);
        stage.appendChild(box);
      }
      stage.appendChild(optionButtons(item.options, onPick));
    }
  }

  function nextMaths() {
    state.mathIndex += 1;
    state.quizAnswered = false;
    renderMaths(true);
    speakRaw(state.currentSpeak);
  }

  function startLogic() {
    state.logicQueue = shuffle([0,1,2,3,4,5,6,7,8,9,10,11]);
    state.logicIndex = 0;
    state.quizAnswered = false;
    renderLogic(true);
    showScreen("logic");
    speakRaw(state.currentSpeak);
  }

  function renderLogic(resetFeedback) {
    const stage = $("#logic-stage");
    const intro = $("#logic-intro");
    if (!stage) return;
    if (resetFeedback) {
      const fb = $("#logic-feedback");
      if (fb) { fb.textContent = ""; fb.className = "feedback"; }
    }
    stage.innerHTML = "";
    updateProgress("logic");
    const li = (state.logicQueue && state.logicQueue.length) ? state.logicQueue[state.logicIndex % state.logicQueue.length] : state.logicIndex;
    const onPick = (val, btn, wrap) => {
      const ok = String(val) === String(state.currentAnswer);
      markAnswer(wrap, btn, ok);
      handleAnswer(ok, "#logic-feedback");
    };
    const banks = {
      nursery: [
        { show: ["☕", "☕", "🍌", "☕"], qEn: "Which one does not belong? Why?", qHi: "कौन सा मेल नहीं खाता? क्यों?", options: [{ value: "banana", label: "banana", emoji: "🍌" }, { value: "cup", label: "cup", emoji: "☕" }], answer: "banana", speakEn: "Cups, cups, banana, cups. Which one does not belong?", speakHi: "कप, कप, केला, कप। कौन सा मेल नहीं खाता?" },
        { show: ["🐱", "🎩", "🥭", "🦇"], qEn: "Which word does not rhyme: cat, hat, mango, bat?", qHi: "कौन सा शब्द तुक नहीं मिलाता: cat, hat, mango, bat?", options: [{ value: "mango", label: "mango", emoji: "🥭" }, { value: "cat", label: "cat", emoji: "🐱" }, { value: "hat", label: "hat", emoji: "🎩" }], answer: "mango", speakEn: "Cat, hat, mango, bat. Which word does not rhyme?", speakHi: "कैट, हैट, मैंगो, बैट। कौन सा तुक नहीं मिलाता?" },
        { show: ["🐶", "🐶", "🐱", "🐶"], qEn: "Which one does not belong?", qHi: "कौन सा मेल नहीं खाता?", options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "dog", label: "dog", emoji: "🐶" }], answer: "cat", speakEn: "Dogs and one cat. Which one does not belong?", speakHi: "कुत्ते और एक बिल्ली। कौन सा अलग है?" },
        { pattern: ["⭐", "🌙", "⭐", "🌙", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: [{ value: "star", label: "star", emoji: "⭐" }, { value: "moon", label: "moon", emoji: "🌙" }, { value: "sun", label: "sun", emoji: "☀️" }], answer: "star", speakEn: "Star, moon, star, moon. What comes next?", speakHi: "तारा, चाँद, तारा, चाँद। आगे क्या?" },
        { show: ["🍎", "🍌", "🚗", "🍇"], qEn: "Which one is not a fruit?", qHi: "कौन सा फल नहीं है?", options: [{ value: "car", label: "car", emoji: "🚗" }, { value: "apple", label: "apple", emoji: "🍎" }, { value: "banana", label: "banana", emoji: "🍌" }], answer: "car", speakEn: "Apple, banana, car, grapes. Which is not a fruit?", speakHi: "सेब, केला, गाड़ी, अंगूर। कौन सा फल नहीं है?" },
        { show: ["👟", "👡", "🧢", "🥾"], qEn: "Which one is not a shoe?", qHi: "कौन सा जूता नहीं है?", options: [{ value: "cap", label: "cap", emoji: "🧢" }, { value: "shoe", label: "shoe", emoji: "👟" }], answer: "cap", speakEn: "Shoes and a cap. Which one is not a shoe?", speakHi: "जूते और एक टोपी। कौन सा जूता नहीं है?" },
        { pattern: ["🔴", "🔴", "🔵", "🔴", "🔴", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: [{ value: "blue", label: "blue", emoji: "🔵" }, { value: "red", label: "red", emoji: "🔴" }], answer: "blue", speakEn: "Red, red, blue. What comes next?", speakHi: "लाल, लाल, नीला। आगे क्या?" },
        { show: ["☀️", "🌙", "⭐", "✏️"], qEn: "Which one does not belong in the sky?", qHi: "कौन सा आसमान में नहीं है?", options: [{ value: "pencil", label: "pencil", emoji: "✏️" }, { value: "sun", label: "sun", emoji: "☀️" }], answer: "pencil", speakEn: "Sun, moon, star, pencil. Which does not belong in the sky?", speakHi: "सूरज, चाँद, तारा, पेंसिल। कौन सा आसमान में नहीं है?" },
        { show: ["🐠", "🐟", "🐈", "🐡"], qEn: "Which one is not a fish?", qHi: "कौन सी मछली नहीं है?", options: [{ value: "cat", label: "cat", emoji: "🐈" }, { value: "fish", label: "fish", emoji: "🐠" }], answer: "cat", speakEn: "Fish and a cat. Which one is not a fish?", speakHi: "मछलियाँ और एक बिल्ली। कौन सी मछली नहीं है?" },
        { pattern: ["👏", "👏", "🥁", "👏", "👏", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: [{ value: "drum", label: "drum", emoji: "🥁" }, { value: "clap", label: "clap", emoji: "👏" }], answer: "drum", speakEn: "Clap, clap, drum. What comes next?", speakHi: "ताली, ताली, ढोल। आगे क्या?" },
        { show: ["🪑", "🛏️", "🥭", "🛋️"], qEn: "Which one is not furniture?", qHi: "कौन सा फर्नीचर नहीं है?", options: [{ value: "mango", label: "mango", emoji: "🥭" }, { value: "chair", label: "chair", emoji: "🪑" }], answer: "mango", speakEn: "Chair, bed, mango, sofa. Which is not furniture?", speakHi: "कुर्सी, बिस्तर, आम, सोफा। कौन सा फर्नीचर नहीं है?" }
      ],
      lkg: [
        { pattern: ["🔴", "🔵", "🔴", "🔵", "?"], qEn: "What comes next? Say the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: [{ value: "red", label: "red", emoji: "🔴" }, { value: "blue", label: "blue", emoji: "🔵" }, { value: "green", label: "green", emoji: "🟢" }], answer: "red", speakEn: "Red, blue, red, blue. What comes next?", speakHi: "लाल, नीला, लाल, नीला। आगे क्या आएगा?" },
        { pattern: ["▲", "▲", "●", "▲", "▲", "?"], qEn: "What comes next in this pattern?", qHi: "इस पैटर्न में आगे क्या आएगा?", options: [{ value: "circle", label: "circle", emoji: "●" }, { value: "triangle", label: "triangle", emoji: "▲" }], answer: "circle", speakEn: "Triangle, triangle, circle. What comes next?", speakHi: "त्रिभुज, त्रिभुज, वृत्त। आगे क्या?" },
        { pattern: ["1", "2", "3", "1", "2", "?"], qEn: "What comes next? Say the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: ["3", "1", "4"], answer: "3", speakEn: "One, two, three, one, two. What comes next?", speakHi: "एक, दो, तीन, एक, दो। आगे क्या?" },
        { show: ["🔺", "🔻", "🟩", "🔸"], qEn: "Which one is not a triangle?", qHi: "कौन सा त्रिभुज नहीं है?", options: [{ value: "square", label: "square", emoji: "🟩" }, { value: "triangle", label: "triangle", emoji: "🔺" }], answer: "square", speakEn: "Which shape is not a triangle?", speakHi: "कौन सी आकृति त्रिभुज नहीं है?" },
        { pattern: ["☀️", "☀️", "🌧️", "☀️", "☀️", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: [{ value: "rain", label: "rain", emoji: "🌧️" }, { value: "sun", label: "sun", emoji: "☀️" }], answer: "rain", speakEn: "Sun, sun, rain. What comes next?", speakHi: "धूप, धूप, बारिश। आगे क्या?" },
        { pattern: ["A", "B", "A", "B", "?"], qEn: "What comes next? State the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: ["A", "B", "C"], answer: "A", speakEn: "A, B, A, B. What comes next?", speakHi: "A, B, A, B। आगे क्या?" },
        { show: ["🟠", "🟠", "🟢", "🟠"], qEn: "Which one does not belong?", qHi: "कौन सा मेल नहीं खाता?", options: [{ value: "green", label: "green", emoji: "🟢" }, { value: "orange", label: "orange", emoji: "🟠" }], answer: "green", speakEn: "Orange circles and one green. Which does not belong?", speakHi: "नारंगी और एक हरा। कौन सा अलग है?" },
        { pattern: ["👟", "🧦", "👟", "🧦", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: [{ value: "shoe", label: "shoe", emoji: "👟" }, { value: "sock", label: "sock", emoji: "🧦" }], answer: "shoe", speakEn: "Shoe, sock, shoe, sock. What comes next?", speakHi: "जूता, मोज़ा, जूता, मोज़ा। आगे क्या?" },
        { show: ["1️⃣", "3️⃣", "🅰️", "5️⃣"], qEn: "Which one is not a number?", qHi: "कौन सी संख्या नहीं है?", options: [{ value: "letter", label: "letter", emoji: "🅰️" }, { value: "three", label: "three", emoji: "3️⃣" }], answer: "letter", speakEn: "Which one is not a number?", speakHi: "कौन सी संख्या नहीं है?" },
        { pattern: ["2", "4", "2", "4", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: ["2", "4", "6"], answer: "2", speakEn: "Two, four, two, four. What comes next?", speakHi: "2, 4, 2, 4। आगे क्या?" },
        { show: ["📏", "📐", "🍌", "✏️"], qEn: "Which one is not a school tool?", qHi: "कौन सा स्कूल का सामान नहीं है?", options: [{ value: "banana", label: "banana", emoji: "🍌" }, { value: "ruler", label: "ruler", emoji: "📏" }], answer: "banana", speakEn: "Which one is not a school tool?", speakHi: "कौन सा स्कूल का सामान नहीं है?" }
      ],
      ukg: [
        { show: ["⬜", "⬜", "🔺", "⬜"], qEn: "Which shape does not belong?", qHi: "कौन सी आकृति मेल नहीं खाती?", options: [{ value: "triangle", label: "triangle", emoji: "🔺" }, { value: "square", label: "square", emoji: "⬜" }], answer: "triangle", speakEn: "Squares and one triangle. Which shape does not belong?", speakHi: "वर्ग और एक त्रिभुज। कौन सी आकृति अलग है?" },
        { pattern: ["1", "2", "1", "2", "?"], qEn: "What comes next? State the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: ["1", "2", "3"], answer: "1", speakEn: "One, two, one, two. What comes next?", speakHi: "एक, दो, एक, दो। आगे क्या?" },
        { pattern: ["10", "9", "8", "?"], qEn: "What comes next? Count back.", qHi: "आगे क्या आएगा? पीछे गिनो।", options: ["7", "9", "11"], answer: "7", speakEn: "Ten, nine, eight. What comes next?", speakHi: "10, 9, 8। आगे क्या?" },
        { show: ["🔵", "🔵", "🔺", "🔵"], qEn: "Which shape does not belong?", qHi: "कौन सी आकृति मेल नहीं खाती?", options: [{ value: "triangle", label: "triangle", emoji: "🔺" }, { value: "circle", label: "circle", emoji: "🔵" }], answer: "triangle", speakEn: "Circles and a triangle. Which does not belong?", speakHi: "वृत्त और एक त्रिभुज। कौन सी अलग है?" },
        { pattern: ["Mon", "Tue", "Wed", "?"], qEn: "What day comes next?", qHi: "अगला दिन कौन सा है?", options: ["Thu", "Sun", "Fri"], answer: "Thu", speakEn: "Monday, Tuesday, Wednesday. What comes next?", speakHi: "सोम, मंगल, बुध। आगे क्या?" },
        { show: ["🟧", "🟥", "🟦", "🎵"], qEn: "Which one is not a colour block?", qHi: "कौन सा रंग ब्लॉक नहीं है?", options: [{ value: "music", label: "music", emoji: "🎵" }, { value: "blue", label: "blue", emoji: "🟦" }], answer: "music", speakEn: "Which one is not a colour block?", speakHi: "कौन सा रंग ब्लॉक नहीं है?" },
        { pattern: ["2", "4", "6", "8", "?"], qEn: "What comes next? Say the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: ["9", "10", "12"], answer: "10", speakEn: "Two, four, six, eight. The rule is add 2. What comes next?", speakHi: "2, 4, 6, 8। नियम है 2 जोड़ना। आगे क्या?" },
        { show: ["🧊", "❄️", "🔥", "🌨️"], qEn: "Which one is not cold?", qHi: "कौन सा ठंडा नहीं है?", options: [{ value: "fire", label: "fire", emoji: "🔥" }, { value: "ice", label: "ice", emoji: "🧊" }], answer: "fire", speakEn: "Ice, snow, fire, snowflake. Which is not cold?", speakHi: "बर्फ, आग। कौन सा ठंडा नहीं है?" },
        { pattern: ["A", "A", "B", "A", "A", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: ["B", "A", "C"], answer: "B", speakEn: "A, A, B. What comes next?", speakHi: "A, A, B। आगे क्या?" },
        { show: ["🕒", "🕔", "🍎", "🕘"], qEn: "Which one is not a clock?", qHi: "कौन सी घड़ी नहीं है?", options: [{ value: "apple", label: "apple", emoji: "🍎" }, { value: "clock", label: "clock", emoji: "🕒" }], answer: "apple", speakEn: "Which one is not a clock?", speakHi: "कौन सी घड़ी नहीं है?" },
        { pattern: ["5", "10", "15", "?"], qEn: "What comes next? Count in fives.", qHi: "आगे क्या आएगा? पाँच-पाँच गिनो।", options: ["20", "16", "25"], answer: "20", speakEn: "Five, ten, fifteen. What comes next?", speakHi: "5, 10, 15। आगे क्या?" }
      ],
      class1: [
        { pattern: ["2", "4", "6", "?"], qEn: "What comes next? Say the rule.", qHi: "आगे क्या आएगा? नियम बताओ।", options: ["7", "8", "10"], answer: "8", speakEn: "Two, four, six. What comes next? The rule is add 2.", speakHi: "2, 4, 6। आगे क्या? नियम है 2 जोड़ना।" },
        { show: ["47", "50", "74"], qEn: "Which is closer to 50: 47 or 74? Why?", qHi: "50 के पास कौन है: 47 या 74? क्यों?", options: ["47", "74", "40"], answer: "47", speakEn: "Which is closer to 50, 47 or 74?", speakHi: "50 के पास कौन है, 47 या 74?" },
        { pattern: ["5", "10", "15", "20", "?"], qEn: "What comes next?", qHi: "आगे क्या आएगा?", options: ["25", "21", "30"], answer: "25", speakEn: "Five, ten, fifteen, twenty. What comes next?", speakHi: "5, 10, 15, 20। आगे क्या?" },
        { show: ["12", "21", "20"], qEn: "Which is closer to 20: 12 or 21?", qHi: "20 के पास कौन है: 12 या 21?", options: ["21", "12", "2"], answer: "21", speakEn: "Which is closer to 20, 12 or 21?", speakHi: "20 के पास कौन है, 12 या 21?" },
        { pattern: ["10", "20", "30", "?"], qEn: "What comes next? Count in tens.", qHi: "आगे क्या आएगा? दस-दस गिनो।", options: ["40", "31", "50"], answer: "40", speakEn: "Ten, twenty, thirty. What comes next?", speakHi: "10, 20, 30। आगे क्या?" },
        { show: ["99", "90", "9"], qEn: "Which is closer to 100: 99 or 90?", qHi: "100 के पास कौन है: 99 या 90?", options: ["99", "90", "9"], answer: "99", speakEn: "Which is closer to 100, 99 or 90?", speakHi: "100 के पास कौन है, 99 या 90?" },
        { pattern: ["1", "3", "5", "7", "?"], qEn: "What comes next? Odd numbers.", qHi: "आगे क्या आएगा? विषम संख्याएँ।", options: ["9", "8", "11"], answer: "9", speakEn: "One, three, five, seven. What comes next?", speakHi: "1, 3, 5, 7। आगे क्या?" },
        { show: ["36", "63", "30"], qEn: "Which is closer to 40: 36 or 63?", qHi: "40 के पास कौन है: 36 या 63?", options: ["36", "63", "3"], answer: "36", speakEn: "Which is closer to 40, 36 or 63?", speakHi: "40 के पास कौन है, 36 या 63?" },
        { pattern: ["100", "90", "80", "?"], qEn: "What comes next? Count back in tens.", qHi: "आगे क्या आएगा? दस पीछे गिनो।", options: ["70", "79", "60"], answer: "70", speakEn: "One hundred, ninety, eighty. What comes next?", speakHi: "100, 90, 80। आगे क्या?" },
        { show: ["25", "52", "20"], qEn: "Which is closer to 30: 25 or 52?", qHi: "30 के पास कौन है: 25 या 52?", options: ["25", "52", "2"], answer: "25", speakEn: "Which is closer to 30, 25 or 52?", speakHi: "30 के पास कौन है, 25 या 52?" },
        { pattern: ["3", "6", "9", "12", "?"], qEn: "What comes next? Count in threes.", qHi: "आगे क्या आएगा? तीन-तीन गिनो।", options: ["15", "13", "18"], answer: "15", speakEn: "Three, six, nine, twelve. What comes next?", speakHi: "3, 6, 9, 12। आगे क्या?" }
      ]
    };
    const bank = banks[state.age] || banks.nursery;
    const item = bank[li % bank.length];
    state.currentAnswer = item.answer;
    state.currentSpeak = txt(item.speakEn, item.speakHi);
    if (intro) intro.textContent = txt(item.qEn, item.qHi);
    if (item.show || item.pattern) {
      const row = document.createElement("div");
      row.className = "pattern-row";
      (item.show || item.pattern).forEach((sym) => {
        const d = document.createElement("div");
        d.className = "pat" + (sym === "?" ? " mystery" : "");
        d.textContent = sym;
        row.appendChild(d);
      });
      stage.appendChild(row);
    }
    stage.appendChild(optionButtons(item.options, onPick));
  }

  function nextLogic() {
    state.logicIndex += 1;
    state.quizAnswered = false;
    renderLogic(true);
    speakRaw(state.currentSpeak);
  }

  function glyphs() { return level().glyphs; }

  function resizeSlate() {
    const canvas = $("#slate");
    if (!canvas) return;
    const wrap = canvas.parentElement;
    const w = Math.min(wrap.clientWidth || 360, 400);
    const ratio = window.devicePixelRatio || 1;
    canvas.style.width = w + "px";
    canvas.style.height = "280px";
    canvas.width = Math.floor(w * ratio);
    canvas.height = Math.floor(280 * ratio);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawGlyphGuide();
  }

  function drawGlyphGuide() {
    const canvas = $("#slate");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.fillStyle = "#2b2b2b";
    ctx.fillRect(0, 0, w, h);
    const g = glyphs()[state.slateIndex % glyphs().length];
    const label = $("#slate-glyph");
    if (label) label.textContent = g;
    ctx.strokeStyle = "rgba(244,241,232,0.28)";
    ctx.lineWidth = 8;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.font = "bold 160px Fredoka, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeText(g, w / 2, h / 2 + 8);
    state._slateDrawing = false;
  }

  function slatePos(e) {
    const canvas = $("#slate");
    const rect = canvas.getBoundingClientRect();
    const pt = e.touches ? e.touches[0] : e;
    return { x: pt.clientX - rect.left, y: pt.clientY - rect.top };
  }
  function slateStart(e) {
    e.preventDefault();
    const canvas = $("#slate");
    const ctx = canvas.getContext("2d");
    const p = slatePos(e);
    ctx.beginPath();
    ctx.strokeStyle = "#f4f1e8";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(p.x, p.y);
    state._slateDrawing = true;
  }
  function slateMove(e) {
    if (!state._slateDrawing) return;
    e.preventDefault();
    const canvas = $("#slate");
    const ctx = canvas.getContext("2d");
    const p = slatePos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  }
  function slateEnd(e) {
    if (e) e.preventDefault();
    state._slateDrawing = false;
  }

  function talkKeys() {
    const map = {
      nursery: ["s", "a", "t", "p", "1", "2", "3", "5"],
      lkg: ["cat", "pin", "pot", "10"],
      ukg: ["ship", "shop", "sh", "20"],
      class1: ["caps", "frogs", "6", "47"]
    };
    return map[state.age] || map.nursery;
  }
  function talkHint() {
    const map = {
      nursery: txt("Say a first sound, like sss, or a number 1 to 5.", "कोई पहली ध्वनि बोलो, जैसे sss, या 1 से 5 कोई संख्या।"),
      lkg: txt("Say a word like cat or pin, or the number 10.", "cat या pin जैसा शब्द बोलो, या संख्या 10।"),
      ukg: txt("Say ship, shop, or the sh sound, or 20.", "ship, shop, या sh ध्वनि, या 20 बोलो।"),
      class1: txt("Say caps, frogs, 6, or 47.", "caps, frogs, 6, या 47 बोलो।")
    };
    return map[state.age] || map.nursery;
  }

  function parseSpeech(text) {
    const raw = (text || "").toLowerCase().trim();
    if (!raw) return null;
    const tokens = raw.replace(/[^a-z0-9\u0900-\u097F ]/g, " ").split(/\s+/);
    const table = [
      ["sun", "sun"], ["ant", "ant"], ["tap", "tap"], ["pot", "pot"], ["pin", "pin"], ["man", "man"],
      ["cat", "cat"], ["cap", "cap"], ["lid", "lid"], ["pan", "pan"],
      ["ship", "ship"], ["shop", "shop"], ["chair", "chair"],
      ["monkey", "monkeys"], ["monkeys", "monkeys"], ["caps", "caps"], ["frog", "frogs"], ["frogs", "frogs"],
      ["rainbow", "rainbow"], ["सूरज", "sun"], ["चींटी", "ant"], ["बिल्ली", "cat"], ["दुकान", "shop"], ["बंदर", "monkeys"]
    ];
    for (let i = 0; i < table.length; i++) {
      const k = table[i][0];
      const v = table[i][1];
      if (raw === k || tokens.indexOf(k) !== -1) return v;
    }
    if (raw === "s" || raw.indexOf("ss") === 0) return "s";
    if (raw === "a" || raw === "ae") return "a";
    if (raw === "t" || raw === "tee") return "t";
    if (raw === "p" || raw === "pee") return "p";
    if (raw === "sh" || raw.indexOf("shh") !== -1) return "sh";
    const nums = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, ten: 10, twenty: 20, "एक": 1, "दो": 2, "तीन": 3, "चार": 4, "पाँच": 5, "पांच": 5, "छह": 6, "दस": 10 };
    if (nums[raw] != null) return String(nums[raw]);
    const m = raw.match(/\b(\d{1,2})\b/);
    if (m) return m[1];
    if (raw.length === 1 && /[a-z]/.test(raw)) return raw;
    return null;
  }

  function respondToToken(token) {
    const heard = $("#talk-heard");
    const replies = {
      s: txt("Yes! Sss is the first sound of sun and sat.", "हाँ! sss, सन और सैट की पहली ध्वनि है।"),
      a: txt("Yes! A is the first sound of ant and apple. A se aam.", "हाँ! a, ऐंट और एप्पल की ध्वनि है। A से आम।"),
      t: txt("Yes! T is the first sound of tap.", "हाँ! t, टैप की पहली ध्वनि है।"),
      p: txt("Yes! P is the first sound of pot and pin.", "हाँ! p, पॉट और पिन की पहली ध्वनि है।"),
      cat: txt("Cat! C-a-t, cat. Super blending!", "कैट! c-a-t, कैट। शानदार!"),
      pin: txt("Pin! P-i-n, pin.", "पिन! p-i-n, पिन।"),
      pot: txt("Pot! P-o-t, pot.", "पॉट! p-o-t, पॉट।"),
      ship: txt("Ship! That has the sh sound. Well done.", "शिप! इसमें sh ध्वनि है। बहुत अच्छे।"),
      shop: txt("Shop! Sh-o-p, shop. I can see the shop.", "शॉप! मैं दुकान देख सकता हूँ।"),
      sh: txt("Sh! That sound is in ship and shop.", "sh! यह ध्वनि शिप और शॉप में है।"),
      monkeys: txt("The monkeys took the caps! You remembered the story.", "बंदर टोपियाँ ले गए! तुम्हें कहानी याद है।"),
      caps: txt("Yes, the monkeys took the caps.", "हाँ, बंदर टोपियाँ ले गए।"),
      frogs: txt("The frog is in the pond.", "मेंढक तालाब में है।"),
      "1": txt("One!", "एक!"), "2": txt("Two!", "दो!"), "3": txt("Three!", "तीन!"),
      "5": txt("Five mangoes! You can see them in a flash.", "पाँच आम! झट से दिख सकते हैं।"),
      "6": txt("Six! That is 3 times 2. 2 plus 2 plus 2.", "छह! यह 3 गुना 2 है।"),
      "10": txt("Ten! A full ten-frame.", "दस! पूरा दस-फ्रेम।"),
      "20": txt("Twenty rupees. Is it enough for a 12 rupee notebook? Yes, 8 come back.", "बीस रुपये। 12 रुपये की कॉपी के लिए काफ़ी हैं, 8 वापस।"),
      "47": txt("Forty-seven. That is 4 tens and 7 ones.", "सैंतालीस। 4 दहाई और 7 इकाई।")
    };
    const msg = replies[token] || txt("Yes! I heard " + token + ".", "हाँ! मैंने " + token + " सुना।");
    if (heard) {
      heard.textContent = t("heard") + " " + token + ". " + msg;
      heard.className = "feedback ok";
    }
    speakRaw(msg);
    addStars(1);
  }

  function updateTalkStatus() {
    const el = $("#talk-support");
    const hint = $("#talk-hint");
    if (hint) hint.textContent = talkHint();
    if (!el) return;
    if (!SpeechRec) el.textContent = t("noSpeech");
    else if (state.listening) el.textContent = t("listen");
    else el.textContent = t("tapMic");
    buildTalkFallback();
  }

  function buildTalkFallback() {
    const box = $("#talk-keys");
    if (!box) return;
    box.innerHTML = "";
    box.className = "choice-row";
    talkKeys().forEach((k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "choice-btn";
      b.textContent = k;
      b.addEventListener("click", () => respondToToken(k));
      box.appendChild(b);
    });
  }

  function startListening() {
    if (!SpeechRec) { updateTalkStatus(); return; }
    if (state.listening) { stopListening(); return; }
    try {
      recognition = new SpeechRec();
      recognition.lang = state.lang === "hi" ? "hi-IN" : "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognition.onresult = function (ev) {
        const said = ev.results[0][0].transcript;
        const token = parseSpeech(said);
        const heard = $("#talk-heard");
        if (token) respondToToken(token);
        else {
          if (heard) {
            heard.textContent = t("heard") + " " + said + ". " + t("heardUnknown");
            heard.className = "feedback no";
          }
          speakRaw(t("heardUnknown"));
        }
      };
      recognition.onerror = function () { state.listening = false; updateTalkStatus(); };
      recognition.onend = function () {
        state.listening = false;
        updateTalkStatus();
        const mic = $("#btn-mic");
        if (mic) mic.textContent = t("mic");
        document.body.classList.remove("listening");
      };
      recognition.start();
      state.listening = true;
      document.body.classList.add("listening");
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
    document.body.classList.remove("listening");
    try { if (recognition) recognition.stop(); } catch (e) { /* ignore */ }
    const mic = $("#btn-mic");
    if (mic) mic.textContent = t("mic");
    updateTalkStatus();
  }

  function renderReport() {
    const r = level().report;
    const set = (id, en, hi) => { const el = $(id); if (el) el.textContent = txt(en, hi); };
    set("#report-child", r.childEn, r.childHi);
    set("#report-eng", r.engEn, r.engHi);
    set("#report-math", r.mathEn, r.mathHi);
    set("#report-speak", r.speakEn, r.speakHi);
    set("#report-hindi", r.hindiEn, r.hindiHi);
    set("#report-next", r.nextEn, r.nextHi);
  }

  function newRupeeRound() {
    const sets = [[1, 1, 2], [2, 5], [1, 2, 2, 5], [5, 5], [1, 2, 10]];
    state.rupeeCoins = sets[Math.floor(Math.random() * sets.length)];
    const total = state.rupeeCoins.reduce((a, b) => a + b, 0);
    state.rupeeChoices = shuffle([total, total + 1, total === 2 ? 4 : total - 1].filter((v, i, a) => a.indexOf(v) === i && v > 0));
    state.rupeeAnswered = false;
    updateRupeeView();
  }

  function updateRupeeView() {
    const row = $("#coin-row");
    const opts = $("#rupee-options");
    if (!row || !opts) return;
    row.innerHTML = "";
    state.rupeeCoins.forEach((n) => {
      const d = document.createElement("div");
      d.className = "coin";
      d.textContent = "₹" + n;
      row.appendChild(d);
    });
    opts.innerHTML = "";
    state.rupeeChoices.forEach((n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "choice-btn";
      b.textContent = "₹" + n;
      b.addEventListener("click", () => answerRupee(n));
      opts.appendChild(b);
    });
  }

  function answerRupee(n) {
    const total = state.rupeeCoins.reduce((a, b) => a + b, 0);
    const fb = $("#rupee-feedback");
    const ok = n === total;
    if (fb) {
      fb.textContent = ok ? praise() : retry();
      fb.className = "feedback " + (ok ? "ok" : "no");
    }
    if (ok && !state.rupeeAnswered) {
      state.rupeeAnswered = true;
      addStars(1);
      speakRaw(txt("Yes! " + total + " rupees in all.", "हाँ! कुल " + total + " रुपये।"));
    } else if (!ok) speakRaw(retry());
  }

  function bind() {
    $("#back-btn").addEventListener("click", () => {
      const map = { parent: "splash", home: "parent", english: "home", maths: "home", logic: "home", slate: "home", talk: "home", report: "home", rupees: "home", reels: "home", rewards: "home", limit: "home", gate: "home", tired: "home", map: "home", unit: "map", rhymes: "home", rhyme: "rhymes" };
      showScreen(map[state.screen] || "home");
    });
    $("#lang-btn").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "hi" : "en";
      applyI18n();
      if (state.lang === "hi") setTimeout(() => {
        if (hasVoice("hi-IN") === false) toast("इस फ़ोन में हिन्दी आवाज़ नहीं मिली। फ़ोन की सेटिंग में Hindi text-to-speech जोड़ें।");
      }, 600);
    });
    $("#btn-greet").addEventListener("click", greet);
    $("#btn-start").addEventListener("click", () => showScreen("parent"));
    $("#btn-trial").addEventListener("click", () => setPlan("trial"));
    $("#btn-basic").addEventListener("click", () => setPlan("basic"));
    $("#btn-premium").addEventListener("click", () => setPlan("premium"));
    $("#btn-family").addEventListener("click", () => setPlan("family"));
    $$(".age-chip").forEach((b) => b.addEventListener("click", () => setAge(b.getAttribute("data-age"))));
    $("#card-english").addEventListener("click", () => { if (window.ChotuCourse) window.ChotuCourse.openMap("english"); else startEnglish(); });
    $("#card-maths").addEventListener("click", () => { if (window.ChotuCourse) window.ChotuCourse.openMap("maths"); else startMaths(); });
    $("#card-logic").addEventListener("click", () => { if (window.ChotuCourse) window.ChotuCourse.openMap("logic"); else startLogic(); });
    $("#card-slate").addEventListener("click", () => { state.slateIndex = 0; showScreen("slate"); setTimeout(resizeSlate, 40); });
    $("#card-talk").addEventListener("click", () => showScreen("talk"));
    $("#card-rupees").addEventListener("click", () => { newRupeeRound(); showScreen("rupees"); });
    $("#card-report").addEventListener("click", () => showScreen("report"));
    if ($("#card-reels")) $("#card-reels").addEventListener("click", () => { if (window.ChotuFun) window.ChotuFun.openReels(); else showScreen("reels"); });
    if ($("#card-rewards")) $("#card-rewards").addEventListener("click", () => { if (window.ChotuFun) window.ChotuFun.openRewards(); else showScreen("rewards"); });
    if ($("#card-limit")) $("#card-limit").addEventListener("click", () => { if (window.ChotuFun) window.ChotuFun.openLimitGate(); else showScreen("gate"); });
    $("#btn-english-hear").addEventListener("click", () => speakRaw(state.currentSpeak));
    $("#btn-english-next").addEventListener("click", nextEnglish);
    $("#btn-english-home").addEventListener("click", () => showScreen("home"));
    $("#btn-maths-hear").addEventListener("click", () => speakRaw(state.currentSpeak));
    $("#btn-maths-next").addEventListener("click", nextMaths);
    $("#btn-maths-home").addEventListener("click", () => showScreen("home"));
    $("#btn-logic-hear").addEventListener("click", () => speakRaw(state.currentSpeak));
    $("#btn-logic-next").addEventListener("click", nextLogic);
    $("#btn-logic-home").addEventListener("click", () => showScreen("home"));
    $("#btn-slate-clear").addEventListener("click", drawGlyphGuide);
    $("#btn-slate-next").addEventListener("click", () => {
      state.slateIndex += 1;
      drawGlyphGuide();
      speakRaw(glyphs()[state.slateIndex % glyphs().length]);
    });
    $("#btn-slate-done").addEventListener("click", () => { addStars(1); showScreen("home"); });
    const canvas = $("#slate");
    canvas.addEventListener("pointerdown", slateStart);
    canvas.addEventListener("pointermove", slateMove);
    canvas.addEventListener("pointerup", slateEnd);
    canvas.addEventListener("pointerleave", slateEnd);
    canvas.addEventListener("pointercancel", slateEnd);
    $("#btn-mic").addEventListener("click", startListening);
    $("#btn-rupee-next").addEventListener("click", newRupeeRound);
    window.addEventListener("resize", () => { if (state.screen === "slate") resizeSlate(); });
    if (window.speechSynthesis) speechSynthesis.addEventListener("voiceschanged", function () {});
  }

  function init() {
    bind();
    applyI18n();
    showScreen("splash");
    if (window.ChotuFun && window.ChotuFun.boot) window.ChotuFun.boot();
    if (window.ChotuCourse && window.ChotuCourse.boot) window.ChotuCourse.boot();
    if (window.ChotuReels && window.ChotuReels.boot) window.ChotuReels.boot();
  }

  window.Chotu = {
    state: state,
    t: t,
    txt: txt,
    speakRaw: speakRaw,
    speak: speak,
    stopSpeak: stopSpeak,
    getSpeed: getSpeed,
    setSpeed: setSpeed,
    hasVoice: hasVoice,
    pickVoice: pickVoice,
    lastSpoken: () => speech.last,
    renderSpeedControl: renderSpeedControl,
    addStars: addStars,
    showScreen: showScreen,
    $: $,
    $$: $$,
    shuffle: shuffle,
    toast: toast,
    praise: praise,
    retry: retry,
    applyI18n: applyI18n,
    optionButtons: optionButtons,
    markAnswer: markAnswer
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

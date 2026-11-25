/* Chotu Teacher: Rhymes (Nursery, LKG, UKG and Class 1).
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

  // ------------------------------------------------------------ UKG rhymes (traditional, public domain)
  const UKG_RHYMES = [
    { id: "rain", emoji: "🌧️", lang: "en-IN", titleEn: "Rain, Rain, Go Away", titleHi: "रेन रेन गो अवे", levels: ["ukg"],
      lines: ["Rain, rain, go away,", "Come again another day.", "Little children want to play,", "Rain, rain, go away."],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("ra1", "What does the rhyme ask the rain to do? ☔", "कविता बारिश से क्या कहती है? ☔", "", [O("away", "🚶", "go away", "चली जाओ"), O("stay", "🏠", "stay", "रुको"), O("dance", "💃", "dance", "नाचो")], "away", "Rain, rain, go away.", "रेन, रेन, गो अवे। यानी बारिश, चली जाओ।"),
        Q("ra2", "When can the rain come again? 📅", "बारिश फिर कब आ सकती है? 📅", "", [O("another", "📅", "another day", "किसी और दिन"), O("now", "⏰", "right now", "अभी"), O("night", "🌙", "tonight", "आज रात")], "another", "Come again another day.", "कम अगेन अनदर डे। यानी किसी और दिन आना।"),
        Q("ra3", "Who wants to play? 🧒", "खेलना कौन चाहता है? 🧒", "", [O("kids", "🧒", "little children", "छोटे बच्चे"), O("cows", "🐮", "cows", "गायें"), O("buses", "🚌", "buses", "बसें")], "kids", "Little children want to play.", "छोटे बच्चे खेलना चाहते हैं।"),
        Q("ra4", "Why do the children want the rain to go away? 🤔", "बच्चे बारिश को जाने को क्यों कहते हैं? 🤔", "", [O("play", "🛝", "to play outside", "बाहर खेलने के लिए"), O("sleep", "😴", "to sleep", "सोने के लिए"), O("eat", "🍽️", "to eat", "खाने के लिए")], "play", "Little children want to play. Can they play in heavy rain?", "बच्चे खेलना चाहते हैं। क्या तेज़ बारिश में खेल सकते हैं?")
      ] },
    { id: "hickory", emoji: "🕐", lang: "en-IN", titleEn: "Hickory Dickory Dock", titleHi: "हिकरी डिकरी डॉक", levels: ["ukg"],
      lines: ["Hickory, dickory, dock,", "The mouse ran up the clock.", "The clock struck one,", "The mouse ran down,", "Hickory, dickory, dock."],
      tune: gentle(["a", "b", "c", "d", "e"]),
      quiz: [
        Q("hi1", "What ran up the clock? 🕐", "घड़ी पर क्या चढ़ा? 🕐", "", [O("mouse", "🐭", "the mouse", "चूहा"), O("cat", "🐱", "the cat", "बिल्ली"), O("cow", "🐮", "the cow", "गाय")], "mouse", "The mouse ran up the clock.", "चूहा घड़ी पर चढ़ा।"),
        Q("hi2", "The clock struck … o'clock. 🕐", "घड़ी ने कितने बजाए? 🕐", "🕐", [N(1), N(5), N(12)], "1", "The clock struck one. One o'clock.", "घड़ी ने एक बजाया। एक बजे।"),
        Q("hi3", "What did the mouse do after the clock struck one? ⬇️", "घड़ी के एक बजाने के बाद चूहे ने क्या किया? ⬇️", "", [O("down", "⬇️", "ran down", "नीचे दौड़ा"), O("fly", "🕊️", "flew away", "उड़ गया"), O("sleep", "😴", "went to sleep", "सो गया")], "down", "The mouse ran down.", "चूहा नीचे दौड़ा।"),
        Q("hi4", "What came first? Tap it. 🐭", "पहले क्या हुआ? उस पर टैप करो। 🐭", "", [O("up", "⬆️", "the mouse ran up", "चूहा ऊपर चढ़ा"), O("down", "⬇️", "the mouse ran down", "चूहा नीचे आया")], "up", "First the mouse ran up. Then the clock struck one. Then the mouse ran down.", "पहले चूहा ऊपर चढ़ा। फिर घड़ी ने एक बजाया। फिर चूहा नीचे आया।")
      ] },
    { id: "shoe", emoji: "👟", lang: "en-IN", titleEn: "One, Two, Buckle My Shoe", titleHi: "वन, टू, बकल माई शू", levels: ["ukg"],
      lines: ["One, two, buckle my shoe;", "Three, four, knock at the door;", "Five, six, pick up sticks;", "Seven, eight, lay them straight;", "Nine, ten, a big fat hen."],
      tune: gentle(["a", "b", "c", "d", "e"]),
      quiz: [
        Q("sh1", "Three, four, knock at the … 🚪", "तीन, चार, खटखटाओ … 🚪", "", [O("door", "🚪", "door", "दरवाज़ा"), O("shoe", "👟", "shoe", "जूता"), O("hen", "🐔", "hen", "मुर्गी")], "door", "Three, four, knock at the door.", "थ्री, फोर, नॉक एट द डोर। दरवाज़ा खटखटाओ।"),
        Q("sh2", "Nine, ten, a big fat … 🐔", "नाइन, टेन, एक बड़ी मोटी … 🐔", "", [O("hen", "🐔", "hen", "मुर्गी"), O("cat", "🐱", "cat", "बिल्ली"), O("pig", "🐷", "pig", "सूअर")], "hen", "Nine, ten, a big fat hen.", "नाइन, टेन, अ बिग फैट हेन।"),
        Q("sh3", "Which two numbers go with “lay them straight”? 📏", "“लेट देम स्ट्रेट” के साथ कौन-से दो अंक हैं? 📏", "", [O("78", "", "7, 8", "7, 8"), O("34", "", "3, 4", "3, 4"), O("910", "", "9, 10", "9, 10")], "78", "Seven, eight, lay them straight.", "सेवन, एट, ले देम स्ट्रेट।"),
        Q("sh4", "What number comes after 8? 🔢", "8 के बाद कौन-सा अंक आता है? 🔢", "", [N(9), N(7), N(10)], "9", "Seven, eight, nine, ten. After eight comes nine.", "सात, आठ, नौ, दस। आठ के बाद नौ आता है।")
      ] },
    { id: "buns", emoji: "🧁", lang: "en-IN", titleEn: "Five Currant Buns", titleHi: "फाइव करंट बन्स", levels: ["ukg"],
      lines: ["Five currant buns in a baker's shop,", "Round and fat with a cherry on the top.", "Along came a boy with a penny one day,", "Bought a currant bun and took it away.",
        "Four currant buns in a baker's shop,", "Round and fat with a cherry on the top.", "Along came a boy with a penny one day,", "Bought a currant bun and took it away.",
        "Three currant buns in a baker's shop,", "Round and fat with a cherry on the top.", "Along came a boy with a penny one day,", "Bought a currant bun and took it away."],
      tune: gentle(["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"]),
      quiz: [
        Q("bu1", "There are 5 buns. The boy buys 1. How many are left? 🧁", "5 बन हैं। लड़का 1 खरीदता है। कितने बचे? 🧁", "🧁🧁🧁🧁🧁", [N(3), N(4), N(5)], "4", "5 take away 1 is 4. Four currant buns in a baker's shop.", "5 में से 1 गया, तो 4। फोर करंट बन्स।"),
        Q("bu2", "There are 4 buns. The boy buys 1. How many are left? 🧁", "4 बन हैं। लड़का 1 खरीदता है। कितने बचे? 🧁", "🧁🧁🧁🧁", [N(2), N(3), N(4)], "3", "4 take away 1 is 3. Three currant buns in a baker's shop.", "4 में से 1 गया, तो 3। थ्री करंट बन्स।"),
        Q("bu3", "What is on top of each bun? 🍒", "हर बन के ऊपर क्या है? 🍒", "", [O("cherry", "🍒", "a cherry", "चेरी"), O("candle", "🕯️", "a candle", "मोमबत्ती"), O("star", "⭐", "a star", "तारा")], "cherry", "Round and fat with a cherry on the top.", "राउंड एंड फैट विद अ चेरी ऑन द टॉप।"),
        Q("bu4", "What does the boy pay with? 🪙", "लड़का किससे पैसे देता है? 🪙", "", [O("penny", "🪙", "a penny", "एक पैसा"), O("leaf", "🍃", "a leaf", "एक पत्ता"), O("stone", "🪨", "a stone", "एक पत्थर")], "penny", "Along came a boy with a penny one day.", "अलॉन्ग केम अ बॉय विद अ पेनी वन डे।")
      ] },
    { id: "aloo", emoji: "🥔", lang: "hi-IN", titleEn: "Aloo Kachaloo", titleHi: "आलू कचालू", hindi: true, levels: ["ukg"],
      lines: ["आलू कचालू बेटा कहाँ गए थे,", "बैंगन की टोकरी में सो रहे थे।", "बैंगन ने लात मारी रो रहे थे,", "मम्मी ने प्यार किया हँस रहे थे।"],
      tune: gentle(["a", "b", "c", "d"]),
      quiz: [
        Q("al1", "Where was Aloo Kachaloo sleeping? 🍆", "आलू कचालू कहाँ सो रहे थे? 🍆", "", [O("basket", "🧺", "in the brinjal basket", "बैंगन की टोकरी में"), O("bed", "🛏️", "in a bed", "बिस्तर पर"), O("tree", "🌳", "on a tree", "पेड़ पर")], "basket", "बैंगन की टोकरी में सो रहे थे।", "बैंगन की टोकरी में सो रहे थे।"),
        Q("al2", "What did the brinjal do? 🍆", "बैंगन ने क्या किया? 🍆", "", [O("kick", "🦵", "gave a kick", "लात मारी"), O("sing", "🎤", "sang a song", "गाना गाया"), O("run", "🏃", "ran away", "भाग गया")], "kick", "बैंगन ने लात मारी।", "बैंगन ने लात मारी।"),
        Q("al3", "Then Aloo was … 😭", "तब आलू क्या कर रहे थे? 😭", "", [O("cry", "😭", "crying", "रो रहे थे"), O("laugh", "😄", "laughing", "हँस रहे थे"), O("sleep", "😴", "sleeping", "सो रहे थे")], "cry", "बैंगन ने लात मारी, रो रहे थे।", "बैंगन ने लात मारी, रो रहे थे।"),
        Q("al4", "What made Aloo laugh at the end? 😄", "आख़िर में आलू को किसने हँसाया? 😄", "", [O("mummy", "👩", "Mummy's love", "मम्मी का प्यार"), O("cat", "🐱", "a cat", "बिल्ली"), O("rain", "🌧️", "rain", "बारिश")], "mummy", "मम्मी ने प्यार किया, हँस रहे थे।", "मम्मी ने प्यार किया, हँस रहे थे।")
      ] }
  ];

  // ------------------------------------------------------------ Class 1 rhymes / poems (traditional, public domain)
  const CLASS1_RHYMES = [
    { id: "bird", emoji: "🐦", lang: "en-IN", titleEn: "Once I Saw a Little Bird", titleHi: "वन्स आई सॉ अ लिटिल बर्ड", levels: ["class1"],
      lines: [
        "Once I saw a little bird",
        "Come hop, hop, hop,",
        "So I cried, 'Little bird,",
        "Will you stop, stop, stop?'",
        "I was going to the window",
        "To say, 'How do you do?'",
        "But he shook his little tail,",
        "And far away he flew."
      ],
      tune: gentle(["a", "b", "c", "d", "e", "f", "g", "h"]),
      quiz: [
        Q("bi1", "How did the little bird come?", "छोटी चिड़िया कैसे आई?", "", [O("hop", "🐦", "hop, hop, hop", "फुदक-फुदक कर"), O("swim", "🐟", "swimming", "तैरकर"), O("bus", "🚌", "by bus", "बस से")], "hop", "Come hop, hop, hop.", "कम हॉप, हॉप, हॉप। चिड़िया फुदक कर आई।"),
        Q("bi2", "Where was the child going to greet the bird?", "बच्चा चिड़िया से मिलने कहाँ जा रहा था?", "", [O("window", "🪟", "the window", "खिड़की पर"), O("door", "🚪", "the gate", "दरवाज़े पर"), O("bed", "🛏️", "the bed", "बिस्तर पर")], "window", "I was going to the window.", "आई वाज़ गोइंग टू द विंडो। वह खिड़की के पास जा रहा था।"),
        Q("bi3", "What greeting did the child want to say?", "बच्चा कौन-सा अभिवादन कहना चाहता था?", "", [O("how", "👋", "How do you do?", "आप कैसे हैं?"), O("night", "🌙", "Good night!", "शुभ रात्रि!"), O("sorry", "🙏", "Sorry!", "माफ़ करना!")], "how", "To say, 'How do you do?'", "बच्चा 'हाउ डू यू डू?' कहना चाहता था।"),
        Q("bi4", "Why did they not chat at the end?", "आख़िर में वे बात क्यों नहीं कर पाए?", "", [O("flew", "🕊️", "the bird flew away", "चिड़िया उड़ गई"), O("rain", "🌧️", "it started raining", "बारिश आ गई"), O("sleep", "😴", "the bird slept", "चिड़िया सो गई")], "flew", "But he shook his little tail, and far away he flew.", "चिड़िया ने पूँछ हिलाई और दूर उड़ गई।")
      ] },
    { id: "mulberry", emoji: "🌿", lang: "en-IN", titleEn: "Here We Go Round the Mulberry Bush", titleHi: "हेयर वी गो राउंड द मलबेरी बुश", levels: ["class1"],
      lines: [
        "Here we go round the mulberry bush,",
        "The mulberry bush, the mulberry bush,",
        "Here we go round the mulberry bush,",
        "So early in the morning.",
        "This is the way we wash our hands,",
        "Wash our hands, wash our hands,",
        "This is the way we brush our teeth,",
        "So early in the morning."
      ],
      tune: gentle(["a", "b", "c", "d", "e", "f", "g", "h"]),
      quiz: [
        Q("mu1", "When do the children do these actions?", "बच्चे ये सारे काम कब करते हैं?", "", [O("morning", "🌅", "early in the morning", "सुबह जल्दी"), O("night", "🌃", "late at night", "देर रात"), O("noon", "☀️", "at midnight", "आधी रात")], "morning", "So early in the morning.", "सो अर्ली इन द मॉर्निंग। यानी सुबह जल्दी।"),
        Q("mu2", "Which two are action words from the poem?", "कविता से दो क्रिया (काम वाले) शब्द चुनो।", "", [O("act", "🧼", "wash and brush", "धोना और ब्रश करना"), O("noun", "🌿", "bush and hands", "झाड़ी और हाथ"), O("time", "⏰", "early and morning", "जल्दी और सुबह")], "act", "Action words tell what we do: wash our hands, brush our teeth.", "क्रिया शब्द काम बताते हैं: धोना (wash) और ब्रश करना (brush)।"),
        Q("mu3", "What do we brush in the poem?", "कविता में हम क्या साफ़ (ब्रश) करते हैं?", "", [O("teeth", "🦷", "our teeth", "अपने दाँत"), O("shoes", "👟", "our shoes", "अपने जूते"), O("hats", "🎩", "our hats", "अपनी टोपी")], "teeth", "This is the way we brush our teeth.", "दिस इज़ द वे वी ब्रश अवर टीथ।"),
        Q("mu4", "Why do we wash our hands and brush our teeth every morning?", "हम रोज़ सुबह हाथ क्यों धोते और दाँत क्यों साफ़ करते हैं?", "", [O("clean", "✨", "to stay clean and healthy", "साफ़ और स्वस्थ रहने के लिए"), O("fly", "🕊️", "to learn to fly", "उड़ना सीखने के लिए"), O("sleep", "😴", "to go to sleep", "सोने जाने के लिए")], "clean", "Washing and brushing keep germs away.", "हाथ धोने और ब्रश करने से हम साफ़ और स्वस्थ रहते हैं।")
      ] },
    { id: "farm", emoji: "🐄", lang: "en-IN", titleEn: "Old MacDonald Had a Farm", titleHi: "ओल्ड मैकडॉनल्ड हैड अ फार्म", levels: ["class1"],
      lines: [
        "Old MacDonald had a farm, E, I, E, I, O!",
        "And on his farm he had a cow, E, I, E, I, O!",
        "With a moo-moo here, and a moo-moo there,",
        "Here a moo, there a moo, everywhere a moo-moo!",
        "And on his farm he had a duck, E, I, E, I, O!",
        "With a quack-quack here, and a quack-quack there,",
        "Here a quack, there a quack, everywhere a quack-quack!",
        "Old MacDonald had a farm, E, I, E, I, O!"
      ],
      tune: gentle(["a", "b", "c", "d", "e", "f", "g", "h"]),
      quiz: [
        Q("fa1", "Who had a farm in the song?", "गाने में खेत किसका था?", "", [O("old", "👨‍🌾", "Old MacDonald", "ओल्ड मैकडॉनल्ड"), O("chanda", "🌙", "Chanda Mama", "चंदा मामा"), O("jack", "🧒", "Jack", "जैक")], "old", "Old MacDonald had a farm.", "ओल्ड मैकडॉनल्ड हैड अ फार्म।"),
        Q("fa2", "Which two farm animals are in this song?", "इस गाने में खेत के कौन-से दो जानवर हैं?", "", [O("cowduck", "🐮", "cow and duck", "गाय और बतख"), O("lionbear", "🦁", "lion and bear", "शेर और भालू"), O("fishfrog", "🐟", "fish and frog", "मछली और मेंढक")], "cowduck", "He had a cow… and he had a duck.", "खेत पर गाय (cow) और बतख (duck) थे।"),
        Q("fa3", "What sound does the duck make on the farm?", "खेत पर बतख कैसी आवाज़ निकालती है?", "", [O("quack", "🦆", "quack-quack", "क्वैक-क्वैक"), O("moo", "🐮", "moo-moo", "मू-मू"), O("clap", "👏", "clap-clap", "ताली-ताली")], "quack", "With a quack-quack here, and a quack-quack there.", "बतख क्वैक-क्वैक करती है।"),
        Q("fa4", "Why do cows and ducks live well on a farm?", "गाय और बतख खेत (फार्म) पर अच्छी तरह क्यों रहते हैं?", "", [O("care", "🌾", "they get food, water and care", "उन्हें खाना, पानी और देखभाल मिलती है"), O("bus", "🚌", "they drive buses", "वे बस चलाते हैं"), O("sea", "🌊", "they live deep in the sea", "वे गहरे समुद्र में रहते हैं")], "care", "A farm has grass, ponds and sheds to care for animals.", "खेत में जानवरों के लिए चारा, पानी और रहने की जगह होती है।")
      ] },
    { id: "months", emoji: "📅", lang: "en-IN", titleEn: "Thirty Days Hath September", titleHi: "थर्टी डेज़ हैथ सेप्टेम्बर", levels: ["class1"],
      lines: [
        "Thirty days hath September,",
        "April, June, and November;",
        "All the rest have thirty-one,",
        "Except February alone,",
        "Which has twenty-eight days clear,",
        "And twenty-nine in each leap year."
      ],
      tune: gentle(["a", "b", "c", "d", "e", "f"]),
      quiz: [
        Q("mo1", "How many days does September have?", "सेप्टेम्बर (सितंबर) में कितने दिन होते हैं?", "", [N(30), N(31), N(28)], "30", "Thirty days hath September.", "थर्टी डेज़ हैथ सेप्टेम्बर। यानी 30 दिन।"),
        Q("mo2", "Which month has 28 or 29 days?", "किस महीने में 28 या 29 दिन होते हैं?", "", [O("feb", "📅", "February", "फरवरी · February"), O("apr", "🌸", "April", "अप्रैल · April"), O("nov", "🍂", "November", "नवंबर · November")], "feb", "Except February alone, which has twenty-eight days clear.", "एक्सेप्ट फेब्रुअरी अलोन। फरवरी में 28 या 29 दिन होते हैं।"),
        Q("mo3", "How many days does October have? (It is one of 'all the rest'.)", "अक्टूबर में कितने दिन होते हैं? (यह बाकी महीनों में से एक है।)", "", [N(31), N(30), N(29)], "31", "September, April, June, November have 30. All the rest (except February) have 31.", "सिर्फ चार महीनों में 30 दिन हैं। बाकी सभी में (फरवरी छोड़कर) 31 दिन हैं।"),
        Q("mo4", "In a leap year, how many days are in February?", "लीप वर्ष (leap year) में फरवरी में कितने दिन होते हैं?", "", [N(29), N(28), N(30)], "29", "And twenty-nine in each leap year.", "एंड ट्वेंटी-नाइन इन ईच लीप ईयर। यानी 29 दिन।")
      ] },
    { id: "haathi", emoji: "🐘", lang: "hi-IN", titleEn: "Haathi Raja Kahan Chale", titleHi: "हाथी राजा कहाँ चले", hindi: true, levels: ["class1"],
      lines: [
        "हाथी राजा कहाँ चले,",
        "सूँड़ हिलाकर कहाँ चले?",
        "मेरे घर भी आओ ना,",
        "हलवा पूरी खाओ ना।",
        "आओ बैठो कुर्सी पर,",
        "कुर्सी बोली चटर-पटर!"
      ],
      tune: gentle(["a", "b", "c", "d", "e", "f"]),
      quiz: [
        Q("ha1", "Who is the poem talking to?", "कविता में किससे बात हो रही है?", "", [O("elephant", "🐘", "the elephant (Haathi Raja)", "हाथी राजा से"), O("mouse", "🐭", "a mouse", "चूहे से"), O("monkey", "🐒", "a monkey", "बंदर से")], "elephant", "हाथी राजा कहाँ चले।", "हाथी राजा कहाँ चले।"),
        Q("ha2", "What does the elephant shake while walking?", "हाथी राजा चलते हुए क्या हिलाते हैं?", "", [O("trunk", "🐘", "his trunk (soond)", "अपनी सूँड़"), O("wings", "🕊️", "wings", "पंख"), O("bell", "🔔", "a bell", "घंटी")], "trunk", "सूँड़ हिलाकर कहाँ चले?", "सूँड़ हिलाकर कहाँ चले?"),
        Q("ha3", "What food is Haathi Raja invited to eat?", "हाथी राजा को क्या खाने के लिए बुलाया गया?", "", [O("halwa", "🍲", "halwa puri", "हलवा पूरी"), O("cake", "🎂", "cake", "केक"), O("ice", "🍦", "ice cream", "आइसक्रीम")], "halwa", "मेरे घर भी आओ ना, हलवा पूरी खाओ ना।", "मेरे घर भी आओ ना, हलवा पूरी खाओ ना।"),
        Q("ha4", "Why did the chair go 'chatar-patar'?", "कुर्सी 'चटर-पटर' क्यों बोली?", "", [O("heavy", "⚖️", "because the elephant is heavy", "क्योंकि हाथी बहुत भारी है"), O("rain", "🌧️", "because it rained", "क्योंकि बारिश हुई"), O("fly", "🕊️", "because the chair flew", "क्योंकि कुर्सी उड़ गई")], "heavy", "आओ बैठो कुर्सी पर, कुर्सी बोली चटर-पटर! बड़ा हाथी कुर्सी पर बैठे तो क्या होगा?", "आओ बैठो कुर्सी पर, कुर्सी बोली चटर-पटर! भारी हाथी बैठने से कुर्सी हिली।")
      ] }
  ];
  RHYMES.forEach((r) => { r.levels = r.levels || ["nursery", "lkg"]; });
  UKG_RHYMES.forEach((r) => RHYMES.push(r));
  CLASS1_RHYMES.forEach((r) => RHYMES.push(r));
  // Short, simple objective and summary for each rhyme
  const META = {
    twinkle: ["Today we will learn: Twinkle Twinkle Little Star ⭐", "आज हम सीखेंगे: ट्विंकल ट्विंकल लिटिल स्टार ⭐", "You learnt: Twinkle Twinkle Little Star!", "तुमने सीखा: ट्विंकल ट्विंकल लिटिल स्टार!"],
    baa: ["Today we will learn: Baa Baa Black Sheep 🐑", "आज हम सीखेंगे: बा बा ब्लैक शीप 🐑", "You learnt: three bags full of wool!", "तुमने सीखा: तीन थैले भरे ऊन के!"],
    johny: ["Today we will learn: Johny Johny Yes Papa 🧒", "आज हम सीखेंगे: जॉनी जॉनी यस पापा 🧒", "You learnt: Johny Johny Yes Papa!", "तुमने सीखा: जॉनी जॉनी यस पापा!"],
    humpty: ["Today we will learn: Humpty Dumpty 🥚", "आज हम सीखेंगे: हम्प्टी डम्प्टी 🥚", "You learnt: Humpty Dumpty sat on a wall!", "तुमने सीखा: हम्प्टी डम्प्टी दीवार पर बैठा!"],
    jack: ["Today we will learn: Jack and Jill 🪣", "आज हम सीखेंगे: जैक एंड जिल 🪣", "You learnt: Jack and Jill went up the hill!", "तुमने सीखा: जैक और जिल पहाड़ी पर चढ़े!"],
    machli: ["Today we will learn: Machli Jal Ki Rani Hai 🐟", "आज हम सीखेंगे: मछली जल की रानी है 🐟", "You learnt: the fish is the queen of water!", "तुमने सीखा: मछली जल की रानी है!"],
    chanda: ["Today we will learn: Chanda Mama Door Ke 🌙", "आज हम सीखेंगे: चंदा मामा दूर के 🌙", "You learnt: Chanda Mama is the moon far away!", "तुमने सीखा: चंदा मामा दूर आसमान में हैं!"],
    rain: ["Today we will learn: Rain, Rain, Go Away. Children want to play! 🌧️", "आज हम सीखेंगे: रेन रेन गो अवे। बच्चे खेलना चाहते हैं! 🌧️", "You learnt: Rain, Rain, Go Away! The children want to play.", "तुमने सीखा: रेन रेन गो अवे! बच्चे खेलना चाहते हैं।"],
    hickory: ["Today we will learn: Hickory Dickory Dock. The clock struck one! 🕐", "आज हम सीखेंगे: हिकरी डिकरी डॉक। घड़ी ने एक बजाया! 🕐", "You learnt: the clock struck one, so it was one o'clock!", "तुमने सीखा: घड़ी ने एक बजाया, यानी एक बजे थे!"],
    shoe: ["Today we will learn: counting 1 to 10 with One, Two, Buckle My Shoe 👟", "आज हम सीखेंगे: वन, टू, बकल माई शू से 1 से 10 गिनती 👟", "You learnt: counting from one to ten in pairs!", "तुमने सीखा: दो-दो करके एक से दस तक गिनती!"],
    buns: ["Today we will learn: take away one, 5, 4, 3, with Five Currant Buns 🧁", "आज हम सीखेंगे: फाइव करंट बन्स से एक घटाना, 5, 4, 3 🧁", "You learnt: 5 take away 1 is 4, and 4 take away 1 is 3!", "तुमने सीखा: 5 में से 1 घटाओ तो 4, और 4 में से 1 घटाओ तो 3!"],
    aloo: ["आज हम सीखेंगे: आलू कचालू 🥔", "आज हम सीखेंगे: आलू कचालू 🥔", "तुमने सीखा: आलू कचालू, एक हिन्दी लोक कविता!", "तुमने सीखा: आलू कचालू, एक हिन्दी लोक कविता!"],
    bird: ["Today we will learn: action words and a greeting in Once I Saw a Little Bird 🐦", "आज हम सीखेंगे: क्रिया शब्द और अभिवादन — वन्स आई सॉ अ लिटिल बर्ड 🐦", "You learnt: hop, stop, shook, flew, and the greeting 'How do you do?'!", "तुमने सीखा: hop, stop, flew और अभिवादन 'How do you do?'!"],
    mulberry: ["Today we will learn: morning action words in The Mulberry Bush 🌿", "आज हम सीखेंगे: सुबह के काम — द मलबेरी बुश 🌿", "You learnt: wash our hands and brush our teeth early in the morning!", "तुमने सीखा: सुबह जल्दी हाथ धोना और दाँत साफ़ करना!"],
    farm: ["Today we will learn: farm animals and sounds in Old MacDonald Had a Farm 🐄", "आज हम सीखेंगे: खेत के जानवर और आवाज़ें — ओल्ड मैकडॉनल्ड 🐄", "You learnt: on the farm the cow says moo and the duck says quack!", "तुमने सीखा: खेत पर गाय मू और बतख क्वैक करती है!"],
    months: ["Today we will learn: days in each month with Thirty Days Hath September 📅", "आज हम सीखेंगे: महीनों के दिन — थर्टी डेज़ हैथ सेप्टेम्बर 📅", "You learnt: September, April, June and November have 30 days, February has 28 or 29!", "तुमने सीखा: सितंबर, अप्रैल, जून, नवंबर में 30 दिन और फरवरी में 28 या 29 दिन!"],
    haathi: ["आज हम सीखेंगे: हाथी राजा कहाँ चले 🐘", "आज हम सीखेंगे: हाथी राजा कहाँ चले 🐘", "तुमने सीखा: हाथी राजा कहाँ चले — सूँड़, हलवा पूरी और कारण!", "तुमने सीखा: हाथी राजा कहाँ चले — सूँड़, हलवा पूरी और कारण!"]
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

  const drops = Array.from({ length: 16 }, (_, i) => '<i style="left:' + (4 + i * 6) + '%;animation-delay:' + ((i * 0.37) % 1.3).toFixed(2) + 's"></i>').join("");
  SC.rain = '<div class="rs-box rs-rain" role="img" aria-label="Rain falling, then sun, children want to play"><div class="drops">' + drops + '</div><div class="rs-sky">☁️🌧️☁️</div><div class="rs-sun rs-big">☀️</div><div class="rs-big">🧒👧</div></div>';
  SC.hickory = '<div class="rs-box rs-clock" role="img" aria-label="A mouse running up a clock"><div class="clock-face"><b style="top:1px;left:50%;transform:translateX(-50%)">12</b><b style="right:8px;top:12px;color:#c33">1</b><b style="right:3px;top:44px">3</b><b style="bottom:1px;left:50%;transform:translateX(-50%)">6</b><b style="left:5px;top:44px">9</b><span class="h"></span><span class="m"></span></div><div class="mouse-run">🐭</div><div class="rs-cap">tick, tock</div></div>';
  SC.shoe = '<div class="rs-box rs-shoe" role="img" aria-label="Numbers one to ten in pairs"><div class="shoe-row"><div class="shoe-col"><span>👟</span>1 · 2</div><div class="shoe-col"><span>🚪</span>3 · 4</div><div class="shoe-col"><span>🥢</span>5 · 6</div><div class="shoe-col"><span>📏</span>7 · 8</div><div class="shoe-col"><span>🐔</span>9 · 10</div></div></div>';
  SC.buns = '<div class="rs-box rs-bun" role="img" aria-label="Currant buns in a baker\'s shop"><div class="bun-row" id="bun-row"><span>🧁</span><span>🧁</span><span>🧁</span><span>🧁</span><span>🧁</span></div><div class="rs-big" id="bun-n">5</div><div class="rs-cap" id="bun-boy">🏪</div></div>';
  SC.aloo = '<div class="rs-box rs-aloo" role="img" aria-label="Aloo Kachaloo the potato"><div class="aloo-scene wob" id="aloo-s">🥔❓</div></div>';
  const HOOK = {
    shoe(i) { document.querySelectorAll("#rhyme-scene .shoe-col").forEach((c, k) => c.classList.toggle("on", k === i)); },
    buns(i) {
      const n = i < 0 ? 5 : 5 - Math.floor(i / 4) - (i % 4 === 3 ? 1 : 0);
      const sh = i < 0 ? 5 : 5 - Math.floor(i / 4);
      document.querySelectorAll("#bun-row span").forEach((sp, k) => sp.classList.toggle("gone", k >= n));
      const nEl = document.getElementById("bun-n"); if (nEl) nEl.textContent = String(n);
      const b = document.getElementById("bun-boy"); if (b) b.textContent = (i >= 0 && i % 4 >= 2) ? "🧒 🪙 → 🧁" : "🏪";
      void sh;
    },
    aloo(i) {
      const el = document.getElementById("aloo-s"); if (!el) return;
      el.textContent = ["🥔❓", "🍆🧺 🥔💤", "🍆🦵 🥔😭", "👩💕 🥔😄"][i] || "🥔❓";
    },
    bird(i) {
      const ic = document.getElementById("bird-ic"), cap = document.getElementById("bird-cap");
      if (!ic || !cap) return;
      ic.classList.toggle("flew", i >= 6);
      ic.classList.toggle("hop", i >= 1 && i <= 3);
      cap.textContent = i < 0 ? "hop, hop, hop" : ["🐦", "hop, hop!", "stop, stop?", "stop?", "🪟", "How do you do?", "shook tail!", "flew away! 💨"][i] || "";
    },
    mulberry(i) {
      const ic = document.getElementById("mul-ic"), cap = document.getElementById("mul-cap");
      if (!ic || !cap) return;
      if (i >= 4 && i <= 5) { ic.textContent = "👐 🧼 💧"; cap.textContent = "wash our hands"; }
      else if (i === 6) { ic.textContent = "🦷 🪥 ✨"; cap.textContent = "brush our teeth"; }
      else { ic.textContent = "🌿👧🧒"; cap.textContent = "early in the morning"; }
    },
    farm(i) {
      const ic = document.getElementById("farm-ic"), cap = document.getElementById("farm-cap");
      if (!ic || !cap) return;
      if (i >= 1 && i <= 3) { ic.textContent = "🌾 🐮 🌾"; cap.textContent = "moo-moo!"; }
      else if (i >= 4 && i <= 6) { ic.textContent = "💧 🦆 💧"; cap.textContent = "quack-quack!"; }
      else { ic.textContent = "🌾 🚜 🌾"; cap.textContent = "E, I, E, I, O!"; }
    },
    months(i) {
      const m = document.getElementById("cal-m"), d = document.getElementById("cal-d"), c = document.getElementById("cal-cap");
      if (!m || !d || !c) return;
      if (i === 2) { m.textContent = "JAN · MAR · MAY · JUL · AUG · OCT · DEC"; d.textContent = "31"; c.textContent = "thirty-one days"; }
      else if (i === 3 || i === 4) { m.textContent = "FEBRUARY"; d.textContent = "28"; c.textContent = "twenty-eight days"; }
      else if (i === 5) { m.textContent = "LEAP YEAR · FEB"; d.textContent = "29"; c.textContent = "twenty-nine in leap year"; }
      else { m.textContent = "SEP · APR · JUN · NOV"; d.textContent = "30"; c.textContent = "thirty days"; }
    },
    haathi(i) {
      const ic = document.getElementById("haa-ic"), cap = document.getElementById("haa-cap");
      if (!ic || !cap) return;
      const frames = [["🐘", "हाथी राजा"], ["🐘💨", "सूँड़ हिलाकर"], ["🏠🐘", "मेरे घर आओ"], ["🍲🍛", "हलवा पूरी"], ["🐘🪑", "बैठो कुर्सी पर"], ["💥🪑🐘", "चटर-पटर!"]];
      const f = frames[i] || frames[0];
      ic.textContent = f[0]; cap.textContent = f[1];
    }
  };

  SC.bird = '<div class="rs-box rs-bird" role="img" aria-label="A little bird at a window"><div class="rs-win">🪟</div><div class="rs-bird-ic" id="bird-ic">🐦</div><div class="rs-cap" id="bird-cap">hop, hop, hop</div></div>';
  SC.mulberry = '<div class="rs-box rs-mul" role="img" aria-label="Children playing around a mulberry bush"><div class="rs-big" id="mul-ic">🌿👧🧒</div><div class="rs-cap" id="mul-cap">early in the morning</div></div>';
  SC.farm = '<div class="rs-box rs-farm" role="img" aria-label="Animals on Old MacDonald\'s farm"><div class="rs-big" id="farm-ic">🌾🚜🌾</div><div class="rs-cap" id="farm-cap">E, I, E, I, O!</div></div>';
  SC.months = '<div class="rs-box rs-cal" role="img" aria-label="Calendar months"><div class="cal-card"><div class="cal-top" id="cal-m">SEP · APR · JUN · NOV</div><div class="cal-num" id="cal-d">30</div></div><div class="rs-cap" id="cal-cap">days in the month</div></div>';
  SC.haathi = '<div class="rs-box rs-haa" role="img" aria-label="Haathi Raja the elephant"><div class="rs-big" id="haa-ic">🐘</div><div class="rs-cap" id="haa-cap">सूँड़ हिलाकर</div></div>';
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
    const age = C().state.age;
    RHYMES.filter((r) => r.levels.indexOf(age) >= 0).forEach((r, i) => {
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
    ly.classList.toggle("long", r.lines.length > 6);
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
    if (cur && HOOK[cur.id]) HOOK[cur.id](i);
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
    tile.classList.toggle("hidden", !(age === "nursery" || age === "lkg" || age === "ukg" || age === "class1"));
    const l = document.getElementById("rhymes-tile-label"); if (l) l.textContent = txt("Rhymes", "कविताएँ");
    const s = document.getElementById("rhymes-tile-sub"); if (s) s.textContent = age === "class1" ? txt("Little Bird, Mulberry Bush, Haathi Raja…", "लिटिल बर्ड, मलबेरी बुश, हाथी राजा…") : age === "ukg" ? txt("Rain Rain, Hickory Dickory…", "रेन रेन, हिकरी डिकरी…") : txt("Twinkle Twinkle, Baa Baa…", "ट्विंकल ट्विंकल, बा बा…");
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

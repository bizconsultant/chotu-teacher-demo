/* Chotu Teacher: quality pass on the first three Nursery units.
   Replaces teach text, activities and the question pool of
   nursery-eng-1, nursery-eng-2 and nursery-math-1 with short, picture-led,
   fully bilingual items. Everything here is Nursery only. */
(function () {
  "use strict";
  const U = window.COURSE_UNITS || [];
  // key: [emoji, English label, Hindi label]
  const D = {
    bell: ["🔔", "bell", "घंटी"], rain: ["🌧️", "rain", "बारिश"], cow: ["🐮", "cow", "गाय"], cat: ["🐱", "cat", "बिल्ली"],
    dog: ["🐶", "dog", "कुत्ता"], bird: ["🐦", "bird", "चिड़िया"], duck: ["🦆", "duck", "बतख"], car: ["🚗", "car", "गाड़ी"],
    drum: ["🥁", "drum", "ढोल"], hands: ["👏", "hands", "ताली"], cooker: ["🍲", "cooker", "कुकर"], shoe: ["👟", "shoe", "जूता"],
    book: ["📖", "book", "किताब"], thunder: ["⛈️", "thunder", "बादल"], mouse: ["🐭", "mouse", "चूहा"], cracker: ["🧨", "firecracker", "पटाखा"],
    ear: ["👂", "ear", "कान"], eye: ["👀", "eyes", "आँखें"], nose: ["👃", "nose", "नाक"], baby: ["👶", "baby", "बच्चा"], sun: ["☀️", "sun", "सूरज"],
    hat: ["🎩", "hat", "hat"], mango: ["🥭", "mango", "आम"], bun: ["🍞", "bun", "bun"], pen: ["🖊️", "pen", "pen"], hot: ["🔥", "hot", "hot"],
    shell: ["🐚", "shell", "shell"], moon: ["🌙", "moon", "चाँद"], star: ["⭐", "star", "तारा"], wall: ["🧱", "wall", "wall"], cup: ["☕", "cup", "कप"],
    fish: ["🐟", "fish", "मछली"], pan: ["🍳", "pan", "pan"], tree: ["🌳", "tree", "tree"], ball: ["⚽", "ball", "गेंद"], banana: ["🍌", "banana", "केला"],
    apple: ["🍎", "apple", "सेब"], red: ["🔴", "red", "लाल"], blue: ["🔵", "blue", "नीला"], cap: ["🧢", "cap", "टोपी"], rice: ["🍚", "rice", "चावल"],
    bus: ["🚌", "bus", "बस"], cycle: ["🚲", "cycle", "साइकिल"], milk: ["🥛", "milk", "दूध"], one: ["1", "1", "1"], two: ["2", "2", "2"], three: ["3", "3", "3"], four: ["4", "4", "4"]
  };
  function O(k, valueOverride) {
    const d = D[k];
    const isNum = /^\d$/.test(d[0]);
    return { value: valueOverride || k, label: d[1], labelHi: d[2], emoji: isNum ? "" : d[0] };
  }
  const num = (n) => ({ value: String(n), label: String(n), labelHi: String(n), emoji: "" });
  let seq = 0;
  function Q(unitId, qEn, qHi, speakEn, speakHi, vis, keys, ans, hintEn, hintHi, extra) {
    seq += 1;
    return Object.assign({
      id: unitId + "-q" + seq, qEn, qHi, instrEn: qEn, instrHi: qHi, speakEn, speakHi,
      showEmoji: vis || "", options: keys.map((k) => (typeof k === "object" ? k : O(k))), answer: ans, hintEn, hintHi
    }, extra || {});
  }
  // A "Tap the X" question with a picture-only set.
  function tap(unitId, key, others, hintEn, hintHi) {
    const d = D[key];
    return Q(unitId, "Tap the " + d[1] + " " + d[0], d[2] + " " + d[0] + " पर टैप करो।", "Tap the " + d[1] + ".", d[2] + " पर टैप करो।", "", [key].concat(others), key,
      hintEn || "Look at the pictures. Which one is the " + d[1] + "?", hintHi || "तस्वीरें देखो। " + d[2] + " कौन सा है?");
  }

  // ------------------------------------------------------------------ Unit 1
  const U1 = "nursery-eng-1";
  const unit1 = {
    objEn: "the sounds around us 👂", objHi: "हमारे आस-पास की आवाज़ें 👂",
    sumEn: "A bell goes ting-ting. Rain goes tip-tap. A cow goes moo.", sumHi: "घंटी टन-टन करती है। बारिश टप-टप करती है। गाय मू-मू करती है।",
    goalEn: "Listens carefully and matches everyday sounds to what makes them.", goalHi: "ध्यान से सुनकर रोज़ की आवाज़ों को उनके स्रोत से मिलाना।",
    scene: "market",
    teach: {
      pose: "listen", anim: "listen", sound: "bell",
      capEn: "Listen! Ting-ting. That is a bell at the market. 🔔", capHi: "सुनो! टन-टन। बाज़ार में घंटी बज रही है। 🔔",
      speakEn: "Listen. Ting ting. That is a bell. A bell at the market.", speakHi: "सुनो। टन टन। यह घंटी है। बाज़ार की घंटी।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: bell 🔔", instrHi: "बोलो: bell 🔔 (घंटी)", speakEn: "Say bell. Bell.", speakHi: "बोलो, बेल। बेल।",
        word: "bell", emoji: "🔔", accept: ["bell", "belt", "ben", "bale"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "mcq", titleEn: "Tap", titleHi: "टैप करो", instrEn: "Tap the bell 🔔", instrHi: "घंटी 🔔 पर टैप करो।", speakEn: "Tap the bell.", speakHi: "घंटी पर टैप करो।",
        options: [O("bell"), O("rain"), O("cow")], answer: "bell", hintEn: "A bell goes ting-ting. Which picture is the bell?", hintHi: "घंटी टन-टन करती है। घंटी कौन सी तस्वीर है?" },
      { type: "mcq", titleEn: "Listen", titleHi: "सुनो", instrEn: "Listen. Which one is it? 🔊", instrHi: "सुनो। यह कौन सी आवाज़ है? 🔊", speakEn: "Listen. Which one is it?", speakHi: "सुनो। यह कौन सी आवाज़ है?",
        sound: "rain", options: [O("rain"), O("bell"), O("cow")], answer: "rain", hintEn: "It goes tip-tap, tip-tap. Like water from the sky.", hintHi: "यह टप-टप करती है। आसमान से पानी।" }
    ],
    practice: [
      Q(U1, "Listen. Which one is it? 🔊", "सुनो। यह कौन सी आवाज़ है? 🔊", "Listen. Which one is it?", "सुनो। यह कौन सी आवाज़ है?", "", ["hands", "rain", "bell"], "hands", "Clap, clap! Which picture has clapping?", "ताली, ताली! किस तस्वीर में ताली है?", { sound: "clap" }),
      Q(U1, "Listen. Which one is it? 🔊", "सुनो। यह कौन सी आवाज़ है? 🔊", "Listen. Which one is it?", "सुनो। यह कौन सी आवाज़ है?", "", ["cow", "drum", "bell"], "bell", "Ting-ting. It rings at the market.", "टन-टन। यह बाज़ार में बजती है।", { sound: "bell" }),
      Q(U1, "Tap the one that says moo 🐮", "जो मू-मू करती है उस पर टैप करो।", "Which one says moo? Tap it.", "कौन मू-मू करती है? उस पर टैप करो।", "", ["cat", "cow", "bird"], "cow", "Moo, moo! It gives us milk.", "मू-मू! यह हमें दूध देती है।"),
      Q(U1, "Tap the one that says meow 🐱", "जो म्याऊँ करती है उस पर टैप करो।", "Which one says meow? Tap it.", "कौन म्याऊँ करती है? उस पर टैप करो।", "", ["cow", "bird", "cat"], "cat", "Meow, meow! It likes milk.", "म्याऊँ, म्याऊँ! इसे दूध पसंद है।"),
      Q(U1, "Tap the one that says bow-wow 🐶", "जो भौं-भौं करता है उस पर टैप करो।", "Which one says bow wow? Tap it.", "कौन भौं भौं करता है? उस पर टैप करो।", "", ["dog", "cat", "duck"], "dog", "Bow-wow! It guards the house.", "भौं-भौं! यह घर की रखवाली करता है।"),
      Q(U1, "Tap the one that says honk-honk 🚗", "जो पों-पों करती है उस पर टैप करो।", "Which one says honk honk? Tap it.", "कौन पों पों करती है? उस पर टैप करो।", "", ["cow", "drum", "car"], "car", "Honk-honk! It goes on the road.", "पों-पों! यह सड़क पर चलती है।"),
      Q(U1, "A cooker goes seeti. Tap the cooker 🍲", "कुकर सीटी बजाता है। कुकर पर टैप करो।", "A cooker goes seeti. Tap the cooker.", "कुकर सीटी बजाता है। कुकर पर टैप करो।", "", ["shoe", "book", "cooker"], "cooker", "The cooker is in the kitchen. It whistles.", "कुकर रसोई में होता है। वह सीटी बजाता है।"),
      Q(U1, "Tap the LOUD one 📢", "तेज़ आवाज़ वाले पर टैप करो। 📢", "Which one is loud? Tap it.", "कौन तेज़ आवाज़ करता है? उस पर टैप करो।", "", ["mouse", "thunder", "book"], "thunder", "Boom! Thunder is very loud.", "गड़-गड़! बादल की आवाज़ बहुत तेज़ होती है।"),
      Q(U1, "Tap the QUIET one 🤫", "धीमी आवाज़ वाले पर टैप करो। 🤫", "Which one is quiet? Tap it.", "कौन धीमी आवाज़ करता है? उस पर टैप करो।", "", ["drum", "cracker", "mouse"], "mouse", "A mouse is very quiet. Shh!", "चूहा बहुत धीरे चलता है। श्श!"),
      Q(U1, "What do we listen with? Tap it 👂", "हम किससे सुनते हैं? उस पर टैप करो। 👂", "What do we listen with? Tap it.", "हम किससे सुनते हैं? उस पर टैप करो।", "", ["eye", "nose", "ear"], "ear", "We listen with our ears.", "हम कानों से सुनते हैं।"),
      Q(U1, "A baby goes waa-waa. Tap the baby 👶", "बच्चा वाँ-वाँ करता है। बच्चे पर टैप करो। 👶", "A baby goes waa waa. Tap the baby.", "बच्चा वाँ वाँ करता है। बच्चे पर टैप करो।", "", ["baby", "dog", "bell"], "baby", "A baby cries waa-waa.", "बच्चा वाँ-वाँ रोता है।"),
      Q(U1, "Rain goes tip-tap. Tap the rain 🌧️", "बारिश टप-टप करती है। बारिश पर टैप करो। 🌧️", "Rain goes tip tap. Tap the rain.", "बारिश टप टप करती है। बारिश पर टैप करो।", "", ["sun", "bell", "rain"], "rain", "Tip-tap, tip-tap. Water falls from clouds.", "टप-टप। बादलों से पानी गिरता है।")
    ]
  };

  // ------------------------------------------------------------------ Unit 2
  const U2 = "nursery-eng-2";
  function rhyme(w, wdev, wEmoji, ansKey, others) {
    const a = D[ansKey];
    return Q(U2, "Tap the word that rhymes with " + w + " " + wEmoji, w + " से तुक मिलाने वाले शब्द पर टैप करो। " + wEmoji,
      "Tap the word that rhymes with " + w + ".", wdev + " से तुक मिलाने वाले शब्द पर टैप करो।", "", [ansKey].concat(others).map((k) => O(k)), ansKey,
      "Listen to the end: " + w + ", " + a[1] + ". They sound the same.", "अंत की आवाज़ सुनो: " + w + ", " + a[1] + "। दोनों एक जैसे सुनाई देते हैं।");
  }
  const unit2 = {
    objEn: "words that sound the same: rhymes 🎵", objHi: "एक जैसी आवाज़ वाले शब्द: तुक 🎵",
    sumEn: "Cat and hat sound the same at the end. They rhyme!", sumHi: "cat और hat के अंत की आवाज़ एक जैसी है। ये तुक मिलाते हैं!",
    goalEn: "Hears rhyming words and finds the one that does not rhyme.", goalHi: "तुक वाले शब्द पहचानना और बेमेल शब्द ढूँढना।",
    scene: "school",
    teach: {
      pose: "clap", anim: "clap",
      capEn: "cat – hat. They sound the same at the end. They rhyme! 🐱🎩", capHi: "cat – hat. दोनों के अंत की आवाज़ एक जैसी है। इसे तुक कहते हैं! 🐱🎩",
      speakEn: "Listen. Cat. Hat. They sound the same at the end. They rhyme.", speakHi: "सुनो। कैट। हैट। दोनों का अंत एक जैसा है। इसे तुक कहते हैं।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: cat, hat 🐱🎩", instrHi: "बोलो: cat, hat 🐱🎩", speakEn: "Say cat. Say hat.", speakHi: "बोलो, कैट। बोलो, हैट।",
        word: "cat, hat", emoji: "🐱🎩", accept: ["cat", "hat", "that", "cut", "hut"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "clap", titleEn: "Clap", titleHi: "ताली", beats: 3, instrEn: "Clap 3 times: ba-na-na 🍌", instrHi: "3 बार ताली बजाओ: ब-ना-ना 🍌", speakEn: "Clap three times. Ba. Na. Na.", speakHi: "तीन बार ताली बजाओ। ब। ना। ना।" },
      { type: "mcq", titleEn: "Tap", titleHi: "टैप करो", instrEn: "Tap the word that rhymes with cat 🐱", instrHi: "cat से तुक मिलाने वाले शब्द पर टैप करो। 🐱", speakEn: "Tap the word that rhymes with cat.", speakHi: "कैट से तुक मिलाने वाले शब्द पर टैप करो।",
        options: [O("hat"), O("sun"), O("mango")], answer: "hat", hintEn: "Cat, hat. They sound the same at the end.", hintHi: "cat, hat. अंत की आवाज़ एक जैसी है।" }
    ],
    practice: [
      rhyme("sun", "सन", "☀️", "bun", ["cow", "ball"]),
      rhyme("pot", "पॉट", "🍲", "hot", ["pen", "mango"]),
      rhyme("bell", "बेल", "🔔", "shell", ["cow", "ball"]),
      rhyme("star", "स्टार", "⭐", "car", ["moon", "dog"]),
      rhyme("ball", "बॉल", "⚽", "wall", ["cup", "fish"]),
      rhyme("fan", "फैन", "🌀", "pan", ["cow", "bird"]),
      rhyme("bee", "बी", "🐝", "tree", ["dog", "cup"]),
      rhyme("hen", "हेन", "🐔", "pen", ["cat", "sun"]),
      Q(U2, "Tap the one that does not rhyme 🐱🎩🥭", "जिसका तुक नहीं मिलता उस पर टैप करो। 🐱🎩🥭", "Cat, hat, mango. Which one does not rhyme?", "कैट, हैट, मैंगो। किसका तुक नहीं मिलता?", "🐱 🎩 🥭", ["cat", "hat", "mango"], "mango",
        "Cat, hat. They rhyme. Mango is different.", "cat, hat का तुक मिलता है। mango अलग है।"),
      Q(U2, "Tap the one that does not rhyme ☀️🍞⚽", "जिसका तुक नहीं मिलता उस पर टैप करो। ☀️🍞⚽", "Sun, bun, ball. Which one does not rhyme?", "सन, बन, बॉल। किसका तुक नहीं मिलता?", "☀️ 🍞 ⚽", ["sun", "bun", "ball"], "ball",
        "Sun, bun. They rhyme. Ball is different.", "sun, bun का तुक मिलता है। ball अलग है।"),
      Q(U2, "Clap banana 🍌 How many claps?", "banana पर ताली बजाओ। 🍌 कितनी तालियाँ?", "Clap ba, na, na. How many claps?", "ब, ना, ना पर ताली बजाओ। कितनी तालियाँ?", "🍌", [num(2), num(3), num(4)], "3",
        "Ba, na, na. Count the claps: one, two, three.", "ब, ना, ना। तालियाँ गिनो: एक, दो, तीन।"),
      Q(U2, "Clap apple 🍎 How many claps?", "apple पर ताली बजाओ। 🍎 कितनी तालियाँ?", "Clap ap, ple. How many claps?", "ऐ, पल पर ताली बजाओ। कितनी तालियाँ?", "🍎", [num(1), num(2), num(3)], "2",
        "Ap, ple. Count the claps: one, two.", "ऐ, पल। तालियाँ गिनो: एक, दो।")
    ]
  };

  // ------------------------------------------------------------------ Unit 3
  const U3 = "nursery-math-1";
  function odd(a, b, row, ans, hintEn, hintHi) {
    return Q(U3, "Tap the odd one out " + row.replace(/ /g, ""), "जो अलग है उस पर टैप करो। " + row.replace(/ /g, ""), "Which one is the odd one out? Tap it.", "कौन सा अलग है? उस पर टैप करो।", row, [a, b], ans, hintEn, hintHi);
  }
  const unit3 = {
    objEn: "sorting things, and finding the odd one out 🧺", objHi: "चीज़ें छाँटना और अलग चीज़ ढूँढना 🧺",
    sumEn: "Things that are the same go together. The odd one out is different.", sumHi: "एक जैसी चीज़ें साथ रखते हैं। जो अलग हो, वह अलग वाला है।",
    goalEn: "Sorts objects into groups and spots the odd one out.", goalHi: "चीज़ों को समूह में छाँटना और अलग चीज़ पहचानना।",
    scene: "home",
    teach: {
      pose: "point", anim: "bob",
      capEn: "Look! ☕ ☕ 🍌 ☕. The banana is the odd one out.", capHi: "देखो! ☕ ☕ 🍌 ☕. केला अलग है।",
      speakEn: "Look. Cup, cup, banana, cup. The banana is different. It is the odd one out.", speakHi: "देखो। कप, कप, केला, कप। केला अलग है। यह अलग वाला है।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: banana 🍌", instrHi: "बोलो: banana 🍌 (केला)", speakEn: "Say banana. Banana.", speakHi: "बोलो, बनाना। बनाना।",
        word: "banana", emoji: "🍌", accept: ["banana", "bananas", "nana"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "mcq", titleEn: "Odd one out", titleHi: "अलग कौन", instrEn: "Tap the odd one out ☕☕🍌☕", instrHi: "जो अलग है उस पर टैप करो। ☕☕🍌☕", speakEn: "Which one is the odd one out? Tap it.", speakHi: "कौन सा अलग है? उस पर टैप करो।",
        showEmoji: "☕ ☕ 🍌 ☕", options: [O("banana"), O("cup")], answer: "banana", hintEn: "Three cups and one banana. The banana is different.", hintHi: "तीन कप और एक केला। केला अलग है।" },
      { type: "sort", titleEn: "Sort", titleHi: "छाँटो", instrEn: "Tap a thing. Then tap its box. 🧺", instrHi: "एक चीज़ पर टैप करो। फिर उसके डिब्बे पर टैप करो। 🧺", speakEn: "Tap a thing. Then tap its box.", speakHi: "एक चीज़ पर टैप करो। फिर उसके डिब्बे पर टैप करो।",
        groups: [
          { id: "fruit", en: "🍎 Fruit", hi: "🍎 फल", items: [{ en: "🍌 banana", hi: "🍌 केला" }, { en: "🥭 mango", hi: "🥭 आम" }] },
          { id: "animal", en: "🐾 Animals", hi: "🐾 जानवर", items: [{ en: "🐮 cow", hi: "🐮 गाय" }, { en: "🐶 dog", hi: "🐶 कुत्ता" }] }
        ] }
    ],
    practice: [
      odd("cat", "dog", "🐶 🐶 🐱 🐶", "cat", "Three dogs and one cat. The cat is different.", "तीन कुत्ते और एक बिल्ली। बिल्ली अलग है।"),
      odd("cap", "shoe", "👟 👟 🧢 👟", "cap", "Three shoes and one cap. The cap is different.", "तीन जूते और एक टोपी। टोपी अलग है।"),
      odd("blue", "red", "🔴 🔴 🔵 🔴", "blue", "Three red and one blue. The blue one is different.", "तीन लाल और एक नीला। नीला अलग है।"),
      odd("cycle", "bus", "🚌 🚌 🚲 🚌", "cycle", "Three buses and one cycle. The cycle is different.", "तीन बसें और एक साइकिल। साइकिल अलग है।"),
      odd("moon", "star", "⭐ ⭐ 🌙 ⭐", "moon", "Three stars and one moon. The moon is different.", "तीन तारे और एक चाँद। चाँद अलग है।"),
      Q(U3, "Tap the one that is not a fruit 🥭🍌🚗", "जो फल नहीं है उस पर टैप करो। 🥭🍌🚗", "Which one is not a fruit? Tap it.", "कौन सा फल नहीं है? उस पर टैप करो।", "🥭 🍌 🚗", ["mango", "banana", "car"], "car", "Mango and banana are fruits. A car is not.", "आम और केला फल हैं। गाड़ी फल नहीं है।"),
      tap(U3, "cow", ["cup", "ball"], "Which one is an animal?", "कौन सा जानवर है?"),
      tap(U3, "rice", ["shoe", "ball"], "Which one can we eat?", "हम कौन सा खा सकते हैं?"),
      tap(U3, "cap", ["cup", "apple"], "Which one do we wear on the head?", "सिर पर क्या पहनते हैं?"),
      tap(U3, "bird", ["fish", "car"], "Which one flies in the sky?", "आसमान में कौन उड़ता है?"),
      tap(U3, "fish", ["cow", "dog"], "Which one lives in water?", "पानी में कौन रहता है?"),
      tap(U3, "cup", ["ball", "shoe"], "Which one do we drink from?", "हम किसमें पीते हैं?")
    ]
  };
  // Make the "Tap the X" helper phrasing fit the Maths pool (fix a few instructions)
  unit3.practice[6].qEn = "Tap the animal 🐮"; unit3.practice[6].qHi = "जानवर पर टैप करो। 🐮"; unit3.practice[6].instrEn = unit3.practice[6].qEn; unit3.practice[6].instrHi = unit3.practice[6].qHi;
  unit3.practice[6].speakEn = "Which one is an animal? Tap it."; unit3.practice[6].speakHi = "कौन सा जानवर है? उस पर टैप करो।";
  unit3.practice[7].qEn = "Tap the food we eat 🍚"; unit3.practice[7].qHi = "खाने की चीज़ पर टैप करो। 🍚"; unit3.practice[7].instrEn = unit3.practice[7].qEn; unit3.practice[7].instrHi = unit3.practice[7].qHi;
  unit3.practice[7].speakEn = "Which one can we eat? Tap it."; unit3.practice[7].speakHi = "हम कौन सा खा सकते हैं? उस पर टैप करो।";
  unit3.practice[8].qEn = "Tap what we wear on the head 🧢"; unit3.practice[8].qHi = "सिर पर पहनने की चीज़ पर टैप करो। 🧢"; unit3.practice[8].instrEn = unit3.practice[8].qEn; unit3.practice[8].instrHi = unit3.practice[8].qHi;
  unit3.practice[8].speakEn = "What do we wear on the head? Tap it."; unit3.practice[8].speakHi = "सिर पर क्या पहनते हैं? उस पर टैप करो।";
  unit3.practice[9].qEn = "Tap what flies in the sky 🐦"; unit3.practice[9].qHi = "आसमान में उड़ने वाले पर टैप करो। 🐦"; unit3.practice[9].instrEn = unit3.practice[9].qEn; unit3.practice[9].instrHi = unit3.practice[9].qHi;
  unit3.practice[9].speakEn = "What flies in the sky? Tap it."; unit3.practice[9].speakHi = "आसमान में कौन उड़ता है? उस पर टैप करो।";
  unit3.practice[10].qEn = "Tap what lives in water 🐟"; unit3.practice[10].qHi = "पानी में रहने वाले पर टैप करो। 🐟"; unit3.practice[10].instrEn = unit3.practice[10].qEn; unit3.practice[10].instrHi = unit3.practice[10].qHi;
  unit3.practice[10].speakEn = "Who lives in water? Tap it."; unit3.practice[10].speakHi = "पानी में कौन रहता है? उस पर टैप करो।";
  unit3.practice[11].qEn = "Tap what we drink from ☕"; unit3.practice[11].qHi = "जिसमें हम पीते हैं उस पर टैप करो। ☕"; unit3.practice[11].instrEn = unit3.practice[11].qEn; unit3.practice[11].instrHi = unit3.practice[11].qHi;
  unit3.practice[11].speakEn = "What do we drink from? Tap it."; unit3.practice[11].speakHi = "हम किसमें पीते हैं? उस पर टैप करो।";

  // Pictures that would give the answer away must not appear in the instruction text.
  const EMOJI_RE = /\s*[\u{1F000}-\u{1FFFF}\u{2190}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]+\s*/gu;
  const strip = (t) => String(t).replace(EMOJI_RE, " ").replace(/\s+([.?!।])/g, "$1").replace(/\s+/g, " ").trim();
  [unit1, unit2, unit3].forEach((u) => u.practice.forEach((it) => {
    if (it.showEmoji || /says|listen with|rhymes with|not rhyme|does not rhyme|Tap the (animal|food|odd)|वाले|वाली/.test(it.qEn + it.qHi) || /(animal|food|wear|flies|water|drink)/.test(it.qEn)) {
      ["qEn", "qHi", "instrEn", "instrHi"].forEach((k) => { it[k] = strip(it[k]); });
    }
  }));
  [unit3.activities[1]].forEach((a) => { a.instrEn = strip(a.instrEn); a.instrHi = strip(a.instrHi); });
  [[U1, unit1], [U2, unit2], [U3, unit3]].forEach(([id, data]) => {
    const u = U.find((x) => x.id === id);
    if (!u) return;
    Object.assign(u, data, { mastery: [], masteryCount: 4, masteryNeed: 3, practiceCount: 6, v2: true });
  });
  window.CHOTU_V2_UNITS = [U1, U2, U3];
})();

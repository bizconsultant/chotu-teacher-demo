/* Chotu Teacher: Class 1 pass.
   1. Aligns the title, goal and Thinking & Logic flag of ALL 26 Class 1 units with the
      "Chotu Teacher: Age-wise Syllabus" Page (Class 1, age 6; NCERT Mridang & Joyful Mathematics).
   2. Rewrites the first three Class 1 units in syllabus order (English 1, English 2, Maths 1)
      to the same standard as Nursery and UKG, with 20-item pools:
      8 for practice, 5 for the star check, and the rest fresh for a retry. */
(function () {
  "use strict";
  const U = window.COURSE_UNITS || [];

  // ---------------------------------------------------------------- syllabus alignment (all Class 1 units)
  // [id, titleEn, titleHi, goalEn, goalHi, logic?]
  const SYL = [
    ["class1-eng-1", "Mridang, Two Little Hands: action words, labels, and a phonics revisit", "मृदंग, दो छोटे हाथ: क्रिया शब्द, लेबल और ध्वनि दोहराई",
      "Uses action words like clap, hop and wash, reads short sentences about hands and play, labels body parts, and revisits Phase 3–4 sounds.",
      "ताली, कूदना, धोना जैसे क्रिया शब्द इस्तेमाल करना, छोटे वाक्य पढ़ना, शरीर के अंगों के लेबल जोड़ना और चरण 3–4 की ध्वनियाँ दोहराना।"],
    ["class1-eng-2", "Greetings, including Namaste, and a written greeting", "अभिवादन, नमस्ते सहित, और लिखा हुआ अभिवादन",
      "Chooses the right greeting for the time of day and Indian situations, and writes a short greeting with a capital letter and punctuation.",
      "दिन के समय और भारतीय परिस्थिति के अनुसार सही अभिवादन चुनना, और बड़े अक्षर व विराम चिह्न के साथ छोटा अभिवादन लिखना।"],
    ["class1-eng-3", "Picture Time, and decode an unfamiliar 4 or 5 word sentence", "चित्र समय, और अनदेखा 4 या 5 शब्द का वाक्य पढ़ना",
      "Decodes an unfamiliar 4- or 5-word sentence independently (NIPUN Grade 1 reading lakshya) and talks about the picture.",
      "बिना रटे 4 या 5 शब्द का नया वाक्य खुद पढ़ना (निपुण कक्षा 1 लक्ष्य) और चित्र पर बात करना।"],
    ["class1-eng-4", "The Cap-seller and the Monkeys: retell, infer, act, and write two sentences", "टोपी वाला और बंदर: कहानी दोहराना, अनुमान, अभिनय और दो वाक्य लिखना",
      "Acts out the Mridang folktale, infers why the cap-seller is upset, and writes two sentences about the story.",
      "मृदंग की लोककथा का अभिनय करना, कारण का अनुमान लगाना कि टोपी वाला क्यों परेशान है, और कहानी पर दो वाक्य लिखना।"],
    ["class1-eng-5", "A Farm: rhyme, vocabulary, and unseen sentences", "एक खेत: तुक, शब्द और अनदेखे वाक्य",
      "Reads a short farm text, makes rhymes, and answers three questions including one inferential question.",
      "खेत पर छोटा पाठ पढ़ना, तुक बनाना और तीन प्रश्नों (एक अनुमान सहित) के उत्तर देना।"],
    ["class1-eng-6", "Fun with Pictures and The Food we Eat: Indian food, and 2 or 3 sentences", "चित्रों का मज़ा और हम जो खाते हैं: भारतीय भोजन और 2 या 3 वाक्य",
      "Talks about a market and Indian thali, then writes 2 or 3 sentences about favourite foods.",
      "बाज़ार और भारतीय थाली पर बात करना, और पसंदीदा भोजन पर 2 या 3 वाक्य लिखना।"],
    ["class1-eng-7", "Shared reading plus a written response, and a spaced vocabulary revisit from October", "साथ पढ़ना, लिखा उत्तर और अक्टूबर के शब्दों की दोहराई",
      "Reads a Mridang page with Chotu, writes two sentences in response, and reuses food words after a gap.",
      "छोटू के साथ मृदंग का पन्ना पढ़ना, दो वाक्यों में उत्तर लिखना और भोजन के शब्द फिर इस्तेमाल करना।"],
    ["class1-eng-8", "The Four Seasons: compare, explain, and write three sentences", "चार मौसम: तुलना करना, कारण बताना और तीन वाक्य लिखना",
      "Sorts clothes for summer, monsoon and winter, explains why, and writes three sentences about one season.",
      "गर्मी, मानसून और सर्दी के कपड़े छाँटना, कारण बताना और एक मौसम पर तीन वाक्य लिखना।"],
    ["class1-eng-9", "Anandi's Rainbow: colours, the national flag, inference, and 3 or 4 connected sentences", "आनंदी का इंद्रधनुष: रंग, राष्ट्रीय ध्वज, अनुमान और 3 या 4 जुड़े वाक्य",
      "Orders the national flag colours, answers why questions from the story, and writes 3 or 4 connected sentences.",
      "राष्ट्रीय ध्वज के रंग क्रम से लगाना, कहानी के 'क्यों' प्रश्नों के उत्तर देना और 3 या 4 जुड़े वाक्य लिखना।"],
    ["class1-eng-10", "NIPUN Class 1 literacy check: unseen sentences, 3 or 4 written sentences, oral retell", "निपुण कक्षा 1 साक्षरता जाँच: अनदेखे वाक्य, 3 या 4 लिखे वाक्य, मौखिक कहानी",
      "Reads a short unknown reader, answers comprehension questions, retells orally, and writes 3 or 4 sentences.",
      "नई छोटी किताब पढ़ना, समझ के प्रश्नों के उत्तर देना, कहानी सुनाना और 3 या 4 वाक्य लिखना।"],
    ["class1-math-1", "Shape properties and a logic sort, from What is Long? What is Round?", "आकृति के गुण और तर्क छाँट, 'क्या लंबा है? क्या गोल है?' से",
      "Describes 3D shapes by flat faces, corners and whether they roll, slide or stack, and explains which shape does not belong.",
      "3D आकृतियों को सपाट सतह, कोने और लुढ़कने-सरकने-जमने से बताना, और कारण सहित अलग आकृति पहचानना।", true],
    ["class1-math-2", "Making 10, teens as 10 and ones, and mental bond fluency", "10 बनाना, 11 से 19 को 10 और इकाई में, और मन से जोड़ याद",
      "Recalls bonds to 10 from memory, models teen numbers as 10 and ones, and uses make-10 mentally.",
      "10 के जोड़ याद होना, 11–19 को 10 और इकाई में दिखाना, और मन से 10 बनाकर जोड़ना।"],
    ["class1-math-3", "How Many: add and subtract single digits with a strategy, including a missing number", "कितने हैं: रणनीति के साथ एक अंक जोड़-घटाव, छूटी संख्या सहित",
      "Adds and subtracts single digits using objects and a twenty-frame, solves missing-number items, and explains why.",
      "वस्तुओं और बीस-फ्रेम से जोड़-घटाव करना, छूटी संख्या ढूँढना और कारण बताना।", true],
    ["class1-math-4", "Vegetable Farm: daily-life problems to 20, two representations, and talk", "सब्ज़ी का खेत: 20 तक रोज़मर्रा के सवाल, दो चित्र और बातचीत",
      "Solves story problems within 20 using both a picture and a part-whole model, and explains the answer.",
      "20 तक कहानी के सवाल चित्र और भाग-पूर्ण मॉडल दोनों से हल करना और समझाना।", true],
    ["class1-math-5", "Fun with Numbers, 21 to 99: order, count on and back, and which is closer, with a reason", "संख्याओं का मज़ा, 21 से 99: क्रम, आगे-पीछे गिनती और कौन पास है कारण सहित",
      "Builds and orders numbers 21 to 99, counts back, and explains which number is closer to a ten.",
      "21 से 99 तक संख्याएँ बनाना व क्रम में रखना, उल्टी गिनती करना और कारण बताना कि कौन पास है।", true],
    ["class1-math-6", "Lina's Family: estimate, measure, record, with hand span, footsteps, cup or spoon", "लीना का परिवार: अनुमान, माप और लिखना, बालिश्त, कदम, कप या चम्मच से",
      "Estimates length or capacity first, then measures with a hand span, footsteps, cup or spoon and compares.",
      "पहले लंबाई या धारिता का अनुमान लगाना, फिर बालिश्त, कदम, कप या चम्मच से मापकर तुलना करना।"],
    ["class1-math-7", "Utsav: festival patterns and number patterns, and state the rule", "उत्सव: त्योहार और संख्या के पैटर्न, और नियम बताना",
      "Extends festival and number patterns and states the rule clearly.",
      "त्योहार और संख्या के पैटर्न आगे बढ़ाना और नियम स्पष्ट बताना।", true],
    ["class1-math-8", "How do I Spend my Day: sequence, o'clock, and informal duration", "मेरा दिन कैसे बीतता है: क्रम, पूरे घंटे का समय और अवधि",
      "Orders a school day, matches events to o'clock times, and tells which activity takes longer.",
      "स्कूल के दिन को क्रम में रखना, कामों को पूरे घंटे से मिलाना और बताना कौन ज़्यादा समय लेता है।"],
    ["class1-math-9", "How Many Times: equal groups, arrays, and repeated addition as times", "कितनी बार: बराबर समूह, कतार और बार-बार जोड़ को 'गुना' कहना",
      "Shows equal groups with objects and pictures and writes repeated addition as times (such as 3 times 2).",
      "बराबर समूह वस्तुओं और चित्रों से दिखाना और बार-बार जोड़ को 'गुना' के रूप में लिखना।"],
    ["class1-math-10", "Money and data, plus mixed mastery and puzzles: spend and change, So Many Toys questions", "पैसे और आँकड़े, मिश्रित महारत और पहेलियाँ: खर्च-वापसी, खिलौनों की तालिका",
      "Solves spending and change problems to ₹20, answers four questions on a toy chart, and solves a logic puzzle.",
      "₹20 तक खर्च और खुले पैसे के सवाल हल करना, खिलौनों के चार्ट पर चार प्रश्न और एक पहेली हल करना।", true],
    ["class1-prem-1", "Talk to Chotu, Class 1 conversation", "छोटू से बातें: कक्षा 1 की बातचीत",
      "Talks about a Mridang story in 4 or more turns, asks a question, and answers in a full sentence.",
      "मृदंग की कहानी पर 4 या अधिक बारी में बातचीत करना, सवाल पूछना और पूरे वाक्य में जवाब देना।"],
    ["class1-prem-2", "Fluency coaching on a new text", "नए पाठ पर धाराप्रवाहता कोचिंग",
      "Reads an unfamiliar 4- or 5-word sentence, then rereads it more smoothly for the parent log.",
      "4 या 5 शब्द का नया वाक्य पढ़ना, फिर उसे ज़्यादा सहजता से दोबारा पढ़ना।"],
    ["class1-prem-3", "Hindi literacy with matra", "मात्राओं के साथ हिन्दी साक्षरता",
      "Reads and writes taught Hindi words with matras (Sarangi-aligned) and one short Hindi sentence.",
      "सारंगी के अनुसार मात्रा वाले सिखाए गए हिन्दी शब्द और एक छोटा हिन्दी वाक्य पढ़ना व लिखना।"],
    ["class1-prem-4", "Coached slate for sentences and numerals to 99", "वाक्यों और 99 तक अंकों के लिए कोच स्लेट",
      "Writes 3 readable sentences and 8 two-digit numerals between 21 and 99 with spacing help.",
      "सही जगह छोड़कर 3 पढ़ने लायक वाक्य और 21 से 99 के बीच 8 दो-अंकीय संख्याएँ लिखना।"],
    ["class1-prem-5", "Adaptive reteach and NIPUN-mapped parent report", "ज़रूरत के हिसाब से दोबारा अभ्यास और निपुण अभिभावक रिपोर्ट",
      "Reteaches weak decoding, place-value or measurement skills and maps weekly progress to NIPUN Grade 1 goals.",
      "कमज़ोर पठन, स्थानीय मान या मापन कौशल दोबारा सिखाना और साप्ताहिक प्रगति को निपुण लक्ष्यों से जोड़ना।"],
    ["class1-prem-6", "Shared reading of a Mridang chapter", "मृदंग के एक अध्याय का साथ पढ़ना",
      "Reads lines from a Mridang chapter together with Chotu, taking over lines with help only on new words.",
      "छोटू के साथ मृदंग अध्याय की पंक्तियाँ पढ़ना और नए शब्दों की मदद से आगे खुद पढ़ना।"]
  ];
  SYL.forEach(([id, tEn, tHi, gEn, gHi, logic]) => {
    const u = U.find((x) => x.id === id);
    if (!u) return;
    u.titleEn = tEn; u.titleHi = tHi; u.goalEn = gEn; u.goalHi = gHi;
    u.logic = !!logic;
  });

  // ---------------------------------------------------------------- helpers
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
  const finish = (id, data, counts) => {
    const u = U.find((x) => x.id === id);
    if (!u) return;
    Object.assign(u, data, counts, { mastery: [], v2: true });
  };
  const COUNTS = { practiceCount: 8, masteryCount: 5, masteryNeed: 4 };

  // ================================================================ English 1: Mridang Two Little Hands
  const E1 = "class1-eng-1";
  const e1 = {
    shortEn: "Action words like clap and hop, body-part labels, short sentences, and a sound check.",
    shortHi: "clap और hop जैसे क्रिया शब्द, शरीर के अंगों के लेबल, छोटे वाक्य और ध्वनि दोहराई।",
    objEn: "action words, labels and reading sentences (Two Little Hands) 👏",
    objHi: "क्रिया शब्द, लेबल और छोटे वाक्य पढ़ना (दो छोटे हाथ) 👏",
    sumEn: "Action words tell what we do: clap, hop, wash, brush. Sentences name who acts and what they do.",
    sumHi: "क्रिया शब्द बताते हैं कि हम क्या करते हैं: clap, hop, wash, brush। वाक्य बताते हैं कौन क्या करता है।",
    scene: "school",
    teach: {
      pose: "clap", anim: "clap",
      capEn: "Two little hands go clap, clap, clap! 👏 Action words tell what we do: clap, hop, wash, read. Check sounds too: ch in chin, th in teeth, cl in clap.",
      capHi: "दो छोटे हाथ ताली बजाते हैं! 👏 क्रिया शब्द बताते हैं हम क्या करते हैं: clap (ताली), hop (कूदना), wash (धोना), read (पढ़ना)। ध्वनियाँ भी देखो: chin में ch, teeth में th, clap में cl।",
      speakEn: "This lesson is from Mridang: Two Little Hands. Action words tell us what we do, like clap, hop, wash and read. Let's read sentences, match labels, and check our sounds.",
      speakHi: "यह पाठ मृदंग की कविता 'टू लिटिल हैंड्स' से है। क्रिया शब्द बताते हैं कि हम क्या करते हैं, जैसे ताली बजाना, कूदना, धोना और पढ़ना। चलो वाक्य पढ़ें, लेबल मिलाएँ और ध्वनियाँ दोहराएँ।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: I can clap my hands 👏", instrHi: "बोलो: I can clap my hands 👏",
        speakEn: "Say: I can clap my hands.", speakHi: "अंग्रेज़ी में बोलो: आई कैन क्लैप माई हैंड्स।",
        word: "I can clap my hands.", emoji: "👏", accept: ["clap", "hands", "i", "can", "my"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "match", titleEn: "Match labels", titleHi: "लेबल मिलाओ",
        instrEn: "Match each body part to its action.", instrHi: "शरीर के हर अंग को उसके काम से मिलाओ।",
        speakEn: "Tap a body part, then tap what it helps us do.", speakHi: "शरीर का एक अंग टैप करो, फिर उसका काम टैप करो।",
        pairs: [
          { key: "hands", leftEn: "👐 hands", leftHi: "👐 हाथ (hands)", rightEn: "clap & write", rightHi: "ताली और लिखना" },
          { key: "legs", leftEn: "🦵 legs", leftHi: "🦵 पैर (legs)", rightEn: "hop & run", rightHi: "कूदना और दौड़ना" },
          { key: "eyes", leftEn: "👀 eyes", leftHi: "👀 आँखें (eyes)", rightEn: "read a book", rightHi: "किताब पढ़ना" }
        ] },
      { type: "mcq", titleEn: "Read & find", titleHi: "पढ़ो और ढूँढो",
        instrEn: "Read the sentence. Tap the action word.", instrHi: "वाक्य पढ़ो। क्रिया शब्द पर टैप करो।",
        speakEn: "Read the sentence. Tap the action word.", speakHi: "वाक्य पढ़ो। काम बताने वाले शब्द पर टैप करो।",
        sentence: "I can hop on one foot.",
        options: [T("hop", "hop (कूदना)"), T("foot", "foot (पैर)"), T("one", "one (एक)")], answer: "hop",
        hintEn: "Which word tells what you do? Can you do 'one' or can you 'hop'?", hintHi: "कौन-सा शब्द बताता है कि तुम क्या करते हो? क्या 'एक' काम है या 'कूदना'?" }
    ],
    practice: [
      Q(E1, "Read the sentence. Tap the action word.", "वाक्य पढ़ो। क्रिया शब्द पर टैप करो।", [T("tap", "tap (थपथपाना)"), T("legs", "legs (पैर)"), T("two", "two (दो)")], "tap",
        "Which word tells what the legs do?", "कौन-सा शब्द बताता है कि पैर क्या करते हैं?", { sentence: "Two little legs go tap, tap, tap." }),
      Q(E1, "Read the sentence. Tap the action word.", "वाक्य पढ़ो। क्रिया शब्द पर टैप करो।", [T("jump", "jump (कूदना)"), T("mat", "mat (चटाई)"), T("Rohan", "Rohan (रोहन)")], "jump",
        "Rohan is a name. Mat is a thing. Which word is an action?", "Rohan नाम है। mat चीज़ है। काम कौन-सा शब्द है?", { sentence: "Rohan can jump over the mat." }),
      Q(E1, "Read the sentence. Tap the action word.", "वाक्य पढ़ो। क्रिया शब्द पर टैप करो।", [T("paint", "paint (रंगना)"), T("kite", "kite (पतंग)"), T("red", "red (लाल)")], "paint",
        "Red is a colour. Kite is a thing. What will Meera do?", "red रंग है। kite चीज़ है। मीरा क्या करेगी?", { sentence: "Meera will paint a red kite." }),
      Q(E1, "Read the sentence. What can the frog do?", "वाक्य पढ़ो। मेंढक क्या कर सकता है?", [T("swim", "swim (तैरना)"), T("fly", "fly (उड़ना)"), T("sing", "sing (गाना)")], "swim",
        "Read the middle word carefully: s-w-i-m.", "बीच का शब्द ध्यान से पढ़ो: s-w-i-m।", { sentence: "The green frog can swim in the pond." }),
      Q(E1, "Read the sentence. Tap the picture it shows.", "वाक्य पढ़ो। सही तस्वीर पर टैप करो।", [P("🧼", "wash hands", "हाथ धोना"), P("🦷", "brush teeth", "दाँत साफ़ करना"), P("📖", "read a book", "किताब पढ़ना")], "wash hands",
        "Look for 'wash' and 'hands' in the sentence.", "वाक्य में 'wash' और 'hands' शब्द देखो।", { sentence: "I wash my hands with soap." }),
      Q(E1, "Read the sentence. Tap the picture it shows.", "वाक्य पढ़ो। सही तस्वीर पर टैप करो।", [P("🦷", "brush teeth", "दाँत साफ़ करना"), P("👃", "smell a flower", "फूल सूँघना"), P("👏", "clap hands", "ताली बजाना")], "brush teeth",
        "Look for 'brush' and 'teeth' in the sentence.", "वाक्य में 'brush' और 'teeth' शब्द देखो।", { sentence: "I brush my teeth every morning." }),
      Q(E1, "Read both sentences. Why does Tara clap?", "दोनों वाक्य पढ़ो। तारा ताली क्यों बजाती है?", [T("She won the game", "वह खेल जीत गई"), T("She is sleepy", "उसे नींद आ रही है"), T("It is raining", "बारिश हो रही है")], "She won the game",
        "Read the first sentence again: Tara won...", "पहला वाक्य फिर पढ़ो: Tara won...", { sentence: "Tara won the game. She claps her hands." }),
      Q(E1, "Read both sentences. What did Ani pick up?", "दोनों वाक्य पढ़ो। अनी ने क्या उठाया?", [P("☕", "cup", "कप"), P("🧢", "cap", "टोपी"), P("👜", "bag", "थैला")], "cup",
        "Look at the first sentence: what did Ani drop?", "पहला वाक्य देखो: अनी के हाथ से क्या गिरा?", { sentence: "Ani drops her red cup. She picks it up." }),
      Q(E1, "Read the sentence. Choose the missing label.", "वाक्य पढ़ो। छूटा हुआ लेबल चुनो।", [P("👃", "nose", "नाक"), P("👂", "ears", "कान"), P("🦶", "feet", "पैर")], "nose",
        "Which body part helps you smell?", "सूँघने में शरीर का कौन-सा अंग मदद करता है?", { sentence: "I use my ___ to smell a rose." }),
      Q(E1, "Read the sentence. Choose the missing label.", "वाक्य पढ़ो। छूटा हुआ लेबल चुनो।", [P("👂", "ears", "कान"), P("👀", "eyes", "आँखें"), P("👄", "mouth", "मुँह")], "ears",
        "Which body part helps you listen to music?", "गाना सुनने में कौन-सा अंग मदद करता है?", { sentence: "I listen to a song with my two ___." }),
      Q(E1, "Choose the missing action word.", "छूटा हुआ क्रिया शब्द चुनो।", [T("read", "read (पढ़ता हूँ)"), T("eat", "eat (खाता हूँ)"), T("throw", "throw (फेंकता हूँ)")], "read",
        "What do we do with a story book?", "हम कहानी की किताब के साथ क्या करते हैं?", { sentence: "I ___ a story book at night." }),
      Q(E1, "Choose the missing action word.", "छूटा हुआ क्रिया शब्द चुनो।", [T("wave", "wave (हाथ हिलाना)"), T("sleep", "sleep (सोना)"), T("bake", "bake (सेंकना)")], "wave",
        "What do we do with a hand to say bye?", "बाय कहने के लिए हम हाथ से क्या करते हैं?", { sentence: "I ___ my hand to say bye." }),
      Q(E1, "Tap the label that matches the picture.", "तस्वीर से मिलने वाला लेबल चुनो।", [T("cheek", "गाल · cheek"), T("chin", "ठुड्डी · chin"), T("teeth", "दाँत · teeth")], "teeth",
        "You brush these every day. Starts with t, ends with th.", "इन्हें तुम रोज़ साफ़ करते हो। अंत में th है।", { showEmoji: "🦷" }),
      Q(E1, "Tap the label that matches the picture.", "तस्वीर से मिलने वाला लेबल चुनो।", [T("tongue", "जीभ · tongue"), T("nose", "नाक · nose"), T("foot", "पैर · foot")], "foot",
        "Look at the picture. Starts with f, vowel team oo.", "तस्वीर देखो। शुरुआत f से, बीच में oo।", { showEmoji: "🦶" }),
      Q(E1, "Phonics check: which two letters end the word brush?", "ध्वनि जाँच: brush शब्द के अंत में कौन-से दो अक्षर हैं?", [T("sh"), T("ch"), T("th")], "sh",
        "Say bru-sh slowly. Hear the quiet sh sound at the end.", "bru-sh धीरे बोलो। अंत में 'श' की आवाज़ सुनो।", { readWord: "bru__" }),
      Q(E1, "Phonics check: which two letters start the word chin?", "ध्वनि जाँच: chin शब्द की शुरुआत किन दो अक्षरों से होती है?", [T("ch"), T("sh"), T("th")], "ch",
        "Ch, ch, chin. Like chop and chip.", "च, च, चिन। जैसे chop और chip।", { readWord: "__in" }),
      Q(E1, "Phonics check: which two sounds start the word clap?", "ध्वनि जाँच: clap शब्द की शुरुआत किन दो अक्षरों से होती है?", [T("cl"), T("st"), T("tr")], "cl",
        "Say c-l-ap. Hear both c and l at the start.", "क-ल-ऐप बोलो। शुरुआत में दोनों आवाज़ें सुनो।", { readWord: "__ap" }),
      Q(E1, "Phonics check: which vowel team is in feet?", "ध्वनि जाँच: feet में कौन-सा स्वर युग्म है?", [T("ee"), T("ai"), T("oa")], "ee",
        "Two e letters make the long ee sound in f-ee-t.", "दो e मिलकर feet में लंबी 'ई' की आवाज़ बनाते हैं।", { readWord: "f__t" }),
      Q(E1, "Phonics check: read the word. Tap its picture.", "ध्वनि जाँच: शब्द पढ़ो। तस्वीर पर टैप करो।", [P("🪥", "brush", "ब्रश"), P("🥣", "bowl", "कटोरा"), P("🛏️", "bed", "बिस्तर")], "brush",
        "Blend b-r-u-sh slowly.", "b-r-u-sh धीरे-धीरे जोड़ो।", { readWord: "brush" }),
      Q(E1, "Odd one out: which word is NOT an action word?", "जो अलग है चुनो: कौन-सा शब्द क्रिया (काम) नहीं है?", [T("chair", "chair (कुर्सी)"), T("clap", "clap (ताली बजाना)"), T("jump", "jump (कूदना)")], "chair",
        "Clap and jump are things we do. Chair is a thing we sit on.", "clap और jump काम हैं। chair एक चीज़ है जिस पर बैठते हैं।")
    ]
  };
  finish(E1, e1, COUNTS);

  // ================================================================ English 2: Greetings, Namaste & written greeting
  const E2 = "class1-eng-2";
  const e2 = {
    shortEn: "Say Namaste, Good morning, Thank you and Sorry, and write a greeting message with a capital and full stop.",
    shortHi: "Namaste, Good morning, Thank you, Sorry चुनना और बड़े अक्षर व पूर्ण विराम के साथ अभिवादन लिखना।",
    objEn: "greetings, Namaste, and writing a greeting note 🙏",
    objHi: "अभिवादन, नमस्ते और अभिवादन का संदेश लिखना 🙏",
    sumEn: "We use the right greeting for each time and moment, and write greetings with a capital letter and punctuation.",
    sumHi: "हम समय और मौके के अनुसार सही अभिवादन बोलते हैं, और बड़े अक्षर व विराम चिह्न के साथ संदेश लिखते हैं।",
    scene: "home",
    teach: {
      pose: "wave", anim: "wave",
      capEn: "We greet warmly! 🙏 Namaste to elders, Good morning at sunrise, Thank you when helped. Start a written greeting with a CAPITAL letter: Namaste, Amma.",
      capHi: "हम प्यार से अभिवादन करते हैं! 🙏 बड़ों को नमस्ते, सुबह गुड मॉर्निंग, मदद पर थैंक यू। लिखा अभिवादन बड़े अक्षर से शुरू करें: Namaste, Amma.",
      speakEn: "Greetings start a polite talk. In India we join our hands and say Namaste. In the morning we say Good morning. When we write a greeting card, we begin with a capital letter and end with a full stop or exclamation mark.",
      speakHi: "अभिवादन से बातचीत शुरू होती है। भारत में हम हाथ जोड़कर नमस्ते कहते हैं। सुबह गुड मॉर्निंग कहते हैं। जब हम अभिवादन लिखते हैं, तो बड़े अक्षर से शुरू करते हैं और अंत में पूर्ण विराम या चिह्न लगाते हैं।"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: Namaste, Good morning 🙏", instrHi: "बोलो: Namaste, Good morning 🙏",
        speakEn: "Say: Namaste, Good morning.", speakHi: "बोलो: नमस्ते, गुड मॉर्निंग।",
        word: "Namaste! Good morning!", emoji: "🙏", accept: ["namaste", "good", "morning", "hello", "नमस्ते"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "sequence", titleEn: "Write a greeting", titleHi: "अभिवादन लिखो",
        instrEn: "Tap the words in order to write: Good morning, Teacher.", instrHi: "सही क्रम में शब्द टैप करके लिखो: Good morning, Teacher.",
        speakEn: "Tap the words in order to write: Good morning, Teacher.", speakHi: "सही क्रम में शब्द टैप करके अभिवादन लिखो: गुड मॉर्निंग, टीचर।",
        items: ["Good", "morning,", "Teacher."], order: ["Good", "morning,", "Teacher."] },
      { type: "mcq", titleEn: "Read & choose", titleHi: "पढ़ो और चुनो",
        instrEn: "Read the story. What should Aman say?", instrHi: "कहानी पढ़ो। अमन को क्या कहना चाहिए?",
        speakEn: "Read the story. What should Aman say?", speakHi: "कहानी पढ़ो। अमन को क्या कहना चाहिए?",
        sentence: "It is 7 o'clock. The sun is up. Aman meets Amma.",
        options: [T("Good morning", "Good morning (सुप्रभात)"), T("Good night", "Good night (शुभ रात्रि)"), T("Goodbye", "Goodbye (अलविदा)")], answer: "Good morning",
        hintEn: "The sun just came up at 7 o'clock. Which greeting fits morning?", hintHi: "सुबह 7 बजे सूरज निकला है। सुबह कौन-सा अभिवादन सही है?" }
    ],
    practice: [
      Q(E2, "Read the situation. What greeting fits best?", "बात पढ़ो। सबसे सही अभिवादन कौन-सा है?", [T("Namaste, Dada ji", "नमस्ते, दादा जी · Namaste, Dada ji"), T("Good night, Dada ji", "शुभ रात्रि · Good night"), T("Bye, Dada ji", "बाय · Bye")], "Namaste, Dada ji",
        "In India, we join our hands to greet elders with respect.", "भारत में हम हाथ जोड़कर बड़ों को नमस्ते कहते हैं।", { sentence: "Kabir joins his hands when he sees Dada ji." }),
      Q(E2, "Read the situation. What should Diya say?", "बात पढ़ो। दीया को क्या कहना चाहिए?", [T("Good afternoon", "Good afternoon (दोपहर नमस्ते)"), T("Good morning", "Good morning (सुप्रभात)"), T("Good night", "Good night (शुभ रात्रि)")], "Good afternoon",
        "After 12 noon, the morning is over. It is afternoon.", "दोपहर 12 बजे के बाद का समय दोपहर (afternoon) होता है।", { sentence: "School ends at 2 in the afternoon. Diya meets Uncle." }),
      Q(E2, "Read the situation. What should Veer say?", "बात पढ़ो। वीर को क्या कहना चाहिए?", [T("Good evening", "Good evening (शुभ संध्या)"), T("Good morning", "Good morning (सुप्रभात)"), T("Excuse me", "Excuse me (माफ़ कीजिए)")], "Good evening",
        "6 o'clock when the sun sets is evening.", "शाम 6 बजे जब सूरज ढलता है, तब संध्या (evening) होती है।", { sentence: "Papa comes home at 6 in the evening." }),
      Q(E2, "Read the situation. What does Nani say?", "बात पढ़ो। नानी क्या कहती हैं?", [T("Good night", "Good night (शुभ रात्रि)"), T("Good morning", "Good morning (सुप्रभात)"), T("Hello", "Hello (हैलो)")], "Good night",
        "We say this just before going to sleep.", "सोने जाने से ठीक पहले हम यह कहते हैं।", { sentence: "It is 9 at night. Time to sleep." }),
      Q(E2, "Read the situation. What does Aarav say?", "बात पढ़ो। आरव को क्या कहना चाहिए?", [T("Goodbye", "Goodbye (अलविदा)"), T("Good morning", "Good morning (सुप्रभात)"), T("Welcome", "Welcome (स्वागत है)")], "Goodbye",
        "When you leave a place, you say bye or goodbye.", "जब हम कहीं से जाते हैं, तो अलविदा (Goodbye) कहते हैं।", { sentence: "The school bus is here. Aarav waves to Amma." }),
      Q(E2, "Read the situation. What should Tia say?", "बात पढ़ो। टिया को क्या कहना चाहिए?", [T("Thank you", "Thank you (धन्यवाद)"), T("Sorry", "Sorry (माफ़ करना)"), T("Good night", "Good night (शुभ रात्रि)")], "Thank you",
        "When someone helps you or shares with you, say thank you.", "जब कोई आपकी मदद करे या चीज़ दे, तो धन्यवाद कहते हैं।", { sentence: "Rohan gives Tia his extra pencil." }),
      Q(E2, "Read the situation. What should Dev say?", "बात पढ़ो। देव को क्या कहना चाहिए?", [T("Sorry", "Sorry (माफ़ करना)"), T("Thank you", "Thank you (धन्यवाद)"), T("Good morning", "Good morning (सुप्रभात)")], "Sorry",
        "When you make a mistake by accident, say sorry.", "गलती से कुछ बिगड़ जाए, तो माफ़ी (Sorry) माँगते हैं।", { sentence: "Dev spills water on Mira's drawing by mistake." }),
      Q(E2, "Read the situation. Which polite word is missing?", "बात पढ़ो। कौन-सा विनम्र शब्द छूटा है?", [T("Please", "Please (कृपया)"), T("Bye", "Bye (बाय)"), T("Night", "Night (रात)")], "Please",
        "Use a polite word when asking for something.", "कुछ माँगते समय कृपया (Please) कहते हैं।", { sentence: "May I borrow your eraser, ___?" }),
      Q(E2, "Read the situation. What should Sana say?", "बात पढ़ो। सना को क्या कहना चाहिए?", [T("Excuse me", "Excuse me (क्षमा करें)"), T("Good night", "Good night (शुभ रात्रि)"), T("Happy birthday", "Happy birthday (जन्मदिन मुबारक)")], "Excuse me",
        "Before passing politely in front of someone, say excuse me.", "किसी के आगे से निकलने से पहले विनम्रता से Excuse me कहते हैं।", { sentence: "Sana needs to walk past two teachers in the hall." }),
      Q(E2, "Read the situation. What does Ravi say to his friend?", "बात पढ़ो। रवि अपने दोस्त से क्या कहेगा?", [T("Happy Diwali!", "Happy Diwali! (दीवाली की शुभकामनाएँ)"), T("Good night!", "Good night! (शुभ रात्रि)"), T("Sorry!", "Sorry! (माफ़ करना)")], "Happy Diwali!",
        "On a festival, we wish our friends a happy day.", "त्योहार पर हम दोस्तों को शुभकामनाएँ देते हैं।", { sentence: "Diyas are glowing. Ravi calls his friend on Diwali." }),
      Q(E2, "Read the written card. Who is it for?", "लिखा हुआ कार्ड पढ़ो। यह किसके लिए है?", [T("Nani", "नानी · Nani"), T("Chacha", "चाचा · Chacha"), T("Teacher", "शिक्षक · Teacher")], "Nani",
        "Look at the name written after 'Namaste,'.", "'Namaste,' के बाद लिखा नाम देखो।", { sentence: "Namaste, Nani. I made a flower for you." }),
      Q(E2, "Read the written note. Why did Ani write it?", "लिखा हुआ संदेश पढ़ो। अनी ने यह क्यों लिखा?", [T("to thank Dada ji", "दादा जी को धन्यवाद देने के लिए"), T("to say sorry", "माफ़ी माँगने के लिए"), T("to say good night", "शुभ रात्रि कहने के लिए")], "to thank Dada ji",
        "Read the first two words of Ani's note.", "अनी के संदेश के पहले दो शब्द पढ़ो।", { sentence: "Thank you, Dada ji, for the sweet mango." }),
      Q(E2, "Writing check: which greeting has a capital letter AND a full stop?", "लेखन जाँच: किस अभिवादन में बड़ा अक्षर और पूर्ण विराम दोनों हैं?", [T("Namaste, Amma."), T("namaste amma"), T("Namaste amma")], "Namaste, Amma.",
        "Check the first letter (N) and the dot (.) at the end.", "पहला बड़ा अक्षर (N) और अंत का बिंदु (.) देखो।"),
      Q(E2, "Writing check: which birthday note is written properly?", "लेखन जाँच: कौन-सा जन्मदिन संदेश सही लिखा है?", [T("Happy birthday, Asha!"), T("happy birthday asha"), T("good night asha")], "Happy birthday, Asha!",
        "Look for capital letters at the start and on the name Asha, plus ! at the end.", "शुरुआत में बड़ा अक्षर, नाम Asha का बड़ा A और अंत में ! देखो।"),
      Q(E2, "Writing check: fill the missing word in this card.", "लेखन जाँच: इस कार्ड में छूटा शब्द भरो।", [T("Good", "Good"), T("Night", "Night"), T("Sorry", "Sorry")], "Good",
        "Which word goes before 'morning' to make a morning greeting?", "'morning' से पहले कौन-सा शब्द सुबह का अभिवादन बनाता है?", { sentence: "Dear Dadi, ___ morning!" }),
      Q(E2, "Writing check: fill the missing word in this note.", "लेखन जाँच: इस संदेश में छूटा शब्द भरो।", [T("you", "you"), T("me", "me"), T("is", "is")], "you",
        "The full polite phrase is 'Thank ___'.", "पूरा विनम्र वाक्य है: 'Thank ___'।", { sentence: "Thank ___, Didi, for helping me." }),
      Q(E2, "Writing check: fill the missing word in this card.", "लेखन जाँच: इस कार्ड में छूटा शब्द भरो।", [T("Namaste,", "Namaste,"), T("Goodbye,", "Goodbye,"), T("Sorry,", "Sorry,")], "Namaste,",
        "We welcome someone home warmly when they arrive.", "घर आने पर स्वागत के लिए हम गर्मजोशी से अभिवादन करते हैं।", { sentence: "___, Papa! Welcome home." }),
      Q(E2, "Writing check: which word needs a capital letter?", "लेखन जाँच: किस शब्द को बड़े अक्षर से लिखना चाहिए?", [T("amma", "amma (नाम)"), T("Hello,", "Hello,"), T("How", "How")], "amma",
        "Names of people (like Amma) always start with a capital letter.", "नाम (जैसे Amma) हमेशा बड़े अक्षर से शुरू होते हैं।", { sentence: "Hello, amma! How are you?" }),
      Q(E2, "Writing check: how should this greeting end? Choose the mark.", "लेखन जाँच: इस अभिवादन के अंत में क्या लगेगा?", [T(".", ". (पूर्ण विराम)"), T(",", ", (अल्पविराम)"), T("a", "a")], ".",
        "A statement ends with a full stop (.).", "पूरे वाक्य के अंत में पूर्ण विराम (.) लगता है।", { sentence: "Good morning, Teacher_" }),
      Q(E2, "Odd one out: which is NOT a greeting when you meet someone?", "जो अलग है चुनो: मिलने पर इनमें से क्या नहीं कहते?", [T("Good night", "Good night (शुभ रात्रि)"), T("Namaste", "Namaste (नमस्ते)"), T("Hello", "Hello (हैलो)")], "Good night",
        "We say Namaste and Hello when we meet. Good night is for bedtime.", "मिलने पर Namaste और Hello कहते हैं। Good night सोने से पहले कहते हैं।")
    ]
  };
  finish(E2, e2, COUNTS);

  // ================================================================ Maths 1: Shape properties & logic sort
  const M1 = "class1-math-1";
  const m1 = {
    shortEn: "Long vs round, flat faces and corners, why shapes roll or stack, and shape logic puzzles.",
    shortHi: "लंबा बनाम गोल, सपाट सतह और कोने, आकृतियाँ क्यों लुढ़कती या जमती हैं, और आकृति पहेली।",
    objEn: "shape properties (roll, slide, stack, faces, corners) and logic sorts 🎲",
    objHi: "आकृति के गुण (लुढ़कना, सरकना, जमना, सतह, कोने) और तर्क छाँट 🎲",
    sumEn: "Spheres roll (curved, 0 flat faces). Cubes slide & stack (6 flat square faces, 8 corners). Cylinders have 2 flat circles and roll on their side.",
    sumHi: "गोला लुढ़कता है (कोई सपाट सतह नहीं)। घन सरकता व जमता है (6 सपाट वर्गाकार सतह, 8 कोने)। बेलन में 2 गोल सतहें हैं और यह करवट पर लुढ़कता है।",
    scene: "home",
    teach: {
      pose: "point", anim: "bob",
      capEn: "What is long, what is round? ✏️ A ball (sphere) has 0 flat faces so it rolls. A die (cube) has 6 flat square faces & 8 corners so it slides and stacks!",
      capHi: "क्या लंबा है, क्या गोल है? ✏️ गेंद (गोला) की कोई सपाट सतह नहीं, इसलिए वह लुढ़कती है। पासा (घन) में 6 सपाट वर्गाकार सतहें और 8 कोने हैं, इसलिए वह सरकता और जमता है!",
      speakEn: "From Joyful Mathematics: What is Long, What is Round? Look at how shapes move. A sphere like a ball has only a curved surface, zero flat faces, so it rolls everywhere. A cube like a die has six flat square faces and eight corners, so it slides and stacks. A cylinder like a steel glass has two flat circle faces and one curved side, so it can both roll and stack!",
      speakHi: "जॉयफुल मैथमेटिक्स से: क्या लंबा है, क्या गोल है? देखो आकृतियाँ कैसे चलती हैं। गेंद जैसे गोले की केवल घुमावदार सतह होती है, शून्य सपाट सतह, इसलिए वह हर तरफ लुढ़कती है। पासे जैसे घन में छह सपाट वर्गाकार सतहें और आठ कोने होते हैं, इसलिए वह सरकता और ऊपर जमता है। स्टील के गिलास जैसे बेलन में दो सपाट गोल सतहें और एक घुमावदार बाजू होती है, इसलिए वह लुढ़क और जम दोनों सकता है!"
    },
    activities: [
      { type: "say", titleEn: "Say it", titleHi: "बोलो", instrEn: "Say: A ball rolls, a box slides", instrHi: "बोलो: गेंद लुढ़कती है, डिब्बा सरकता है",
        speakEn: "Say: A ball rolls, a box slides.", speakHi: "बोलो: गेंद लुढ़कती है, डिब्बा सरकता है।",
        word: "A ball rolls, a box slides.", emoji: "⚽ 📦", accept: ["ball", "rolls", "box", "slides", "गेंद", "लुढ़कती", "डिब्बा", "सरकता"], micEn: "Tap and say", micHi: "टैप करो और बोलो" },
      { type: "sort", titleEn: "Logic sort", titleHi: "तर्क छाँट",
        instrEn: "Tap a thing, then tap whether it rolls or only slides.", instrHi: "एक चीज़ पर टैप करो, फिर चुनो कि वह लुढ़कती है या सिर्फ सरकती है।",
        speakEn: "Sort by property: tap a thing, then tap rolls or slides only.", speakHi: "गुण के अनुसार छाँटो: एक चीज़ टैप करो, फिर लुढ़कती है या सिर्फ सरकती है पर टैप करो।",
        groups: [
          { id: "roll", en: "Rolls", hi: "लुढ़कती है", items: [{ en: "🟠 orange", hi: "🟠 संतरा" }, { en: "🔮 marble", hi: "🔮 कंचा" }] },
          { id: "slide", en: "Slides only", hi: "सिर्फ सरकती है", items: [{ en: "📘 book", hi: "📘 किताब" }, { en: "🎲 die", hi: "🎲 पासा" }] }
        ] },
      { type: "mcq", titleEn: "Shape puzzle", titleHi: "आकृति पहेली",
        instrEn: "Which shape does NOT belong, and why?", instrHi: "कौन-सी आकृति अलग है, और क्यों?",
        speakEn: "Which shape does not belong, and why?", speakHi: "कौन-सी आकृति अलग है, और क्यों?",
        options: [P("🎲", "die (has flat faces)", "पासा (सपाट सतहें)"), P("⚽", "ball (curved)", "गेंद (गोल)"), P("🍊", "orange (curved)", "संतरा (गोल)")], answer: "die (has flat faces)",
        hintEn: "Two of them are round spheres that roll. Which one has flat faces and corners?", hintHi: "इनमें से दो गोल हैं और लुढ़कते हैं। किसमें सपाट सतहें और कोने हैं?" }
    ],
    practice: [
      Q(M1, "What is Long, What is Round: which object is long and thin?", "क्या लंबा है, क्या गोल है: कौन-सी चीज़ लंबी और पतली है?", [P("✏️", "pencil", "पेंसिल"), P("⚽", "ball", "गेंद"), P("🪙", "coin", "सिक्का")], "pencil",
        "Look for something long like a stick, not round like a ball.", "किसी डंडी जैसी लंबी चीज़ को ढूँढो, गेंद जैसी गोल नहीं।"),
      Q(M1, "What is Long, What is Round: which object is round like a ball?", "कौन-सी चीज़ गेंद जैसी गोल (sphere) है?", [P("🍊", "orange", "संतरा"), P("📏", "ruler", "स्केल"), P("📘", "book", "किताब")], "orange",
        "Which one rolls in every direction?", "इनमें से कौन हर दिशा में लुढ़कता है?"),
      Q(M1, "Which object is flat and round like a circle?", "कौन-सी चीज़ चपटी और गोल (वृत्त जैसी) है?", [P("🪙", "coin", "सिक्का"), P("📦", "box", "डिब्बा"), P("🍦", "cone", "शंकु")], "coin",
        "A coin is flat like a chapati and round at the edge.", "सिक्का रोटी जैसा चपटा और किनारे से गोल होता है।"),
      Q(M1, "Why does a football roll in every direction?", "फुटबॉल हर दिशा में क्यों लुढ़कती है?", [T("it has only a curved surface", "इसकी सतह पूरी घुमावदार है"), T("it has 6 flat square faces", "इसमें 6 सपाट सतहें हैं"), T("it has 8 sharp corners", "इसमें 8 कोने हैं")], "it has only a curved surface",
        "Feel a ball: does it have any flat sides or corners?", "गेंद छूकर सोचो: क्या इसमें कोई सपाट बाजू या कोना है?", { showEmoji: "⚽" }),
      Q(M1, "Why does a lunchbox slide and NOT roll?", "टिफिन बॉक्स सरकता है पर लुढ़कता क्यों नहीं?", [T("it has flat faces", "इसमें सपाट सतहें हैं"), T("it has 0 corners", "इसमें 0 कोने हैं"), T("it is shaped like a ball", "यह गेंद जैसा गोल है")], "it has flat faces",
        "Flat sides rest flat on a table and slide.", "सपाट सतहें मेज़ पर टिककर सरकती हैं।", { showEmoji: "🍱" }),
      Q(M1, "Why can't we stack two balls one on top of another?", "हम एक गेंद के ऊपर दूसरी गेंद क्यों नहीं जमा सकते?", [T("balls have no flat face", "गेंद में कोई सपाट सतह नहीं"), T("balls have 8 corners", "गेंद में 8 कोने हैं"), T("balls are too light", "गेंद बहुत हल्की है")], "balls have no flat face",
        "To stack, a shape needs a flat face to rest on.", "ऊपर जमाने के लिए सपाट सतह चाहिए।", { showEmoji: "⚽ ⚽" }),
      Q(M1, "Which shape can BOTH roll on its side AND stack standing up?", "कौन-सी आकृति करवट पर लुढ़क भी सकती है और खड़ी होकर जम भी सकती है?", [P("🥫", "cylinder (tin)", "बेलन (डिब्बा)"), P("⚽", "sphere (ball)", "गोला (गेंद)"), P("🧊", "cube (box)", "घन (बक्सा)")], "cylinder (tin)",
        "A tin has 2 flat circles (so it stacks) and 1 curved wall (so it rolls).", "टिन के डिब्बे में 2 सपाट गोल सिरे और 1 घुमावदार बाजू होती है।"),
      Q(M1, "Why can a rolling pin (belan) roll back and forth?", "बेलन आगे-पीछे क्यों लुढ़क सकता है?", [T("its middle is a curved cylinder", "इसका बीच का भाग बेलनाकार है"), T("it is a flat square", "यह एक चपटा वर्ग है"), T("it has 6 flat faces", "इसमें 6 सपाट सतहें हैं")], "its middle is a curved cylinder",
        "A belan rolls smoothly on its curved cylinder middle.", "बेलन का बीच वाला हिस्सा गोल बेलन जैसा होता है।"),
      Q(M1, "How many flat square faces does a cube (dice) have?", "एक घन (पासे) में कितनी सपाट वर्गाकार सतहें होती हैं?", [num(6), num(4), num(8)], "6",
        "Count: top, bottom, and four sides around. 2 + 4 = ?", "गिनो: ऊपर, नीचे और चारों तरफ की 4 सतहें। 2 + 4 = ?", { showEmoji: "🎲" }),
      Q(M1, "How many corners does a cube (dice) have?", "एक घन (पासे) में कितने कोने होते हैं?", [num(8), num(4), num(2)], "8",
        "4 corners on the top square and 4 on the bottom square.", "ऊपर के वर्ग में 4 कोने और नीचे के वर्ग में 4 कोने।", { showEmoji: "🎲" }),
      Q(M1, "How many flat circular faces does a cylinder (drum) have?", "एक बेलन (ढोल) में कितनी सपाट गोल सतहें होती हैं?", [num(2), num(6), num(0)], "2",
        "Look at the top and the bottom of a drum.", "ढोल के ऊपर और नीचे के गोल सिरों को देखो।", { showEmoji: "🥁" }),
      Q(M1, "How many flat faces does a cone (party cap) have?", "एक शंकु (पार्टी टोपी) में कितनी सपाट सतहें होती हैं?", [num(1), num(6), num(3)], "1",
        "A cone has 1 flat circle at the bottom and 1 sharp tip at the top.", "शंकु में नीचे 1 सपाट गोल सतह और ऊपर 1 नोक होती है।", { showEmoji: "🎉" }),
      Q(M1, "How many corners does a sphere (marble) have?", "एक गोले (कंचे) में कितने कोने होते हैं?", [num(0), num(4), num(8)], "0",
        "Is a round marble pointy anywhere?", "क्या गोल कंचे में कहीं कोई नुकीला कोना होता है?", { showEmoji: "🔮" }),
      Q(M1, "What shape is each flat face of a cube?", "घन की हर सपाट सतह किस आकार की होती है?", [T("square", "वर्ग · square"), T("circle", "वृत्त · circle"), T("triangle", "त्रिभुज · triangle")], "square",
        "All 4 sides of each face on a die are equal.", "पासे की हर सतह की चारों भुजाएँ बराबर होती हैं।", { showEmoji: "🎲" }),
      Q(M1, "An ice-cream cone has 1 flat circle and 1 point. Which 3D shape is it?", "आइसक्रीम कोन में 1 सपाट वृत्त और 1 नोक है। यह कौन-सी 3D आकृति है?", [T("cone", "शंकु · cone"), T("cube", "घन · cube"), T("sphere", "गोला · sphere")], "cone",
        "Its name is right in 'ice-cream ___'!", "इसका नाम 'आइसक्रीम कोन' में ही है!", { showEmoji: "🍦" }),
      Q(M1, "A brick has 6 flat rectangle faces. Which 3D shape is it?", "ईंट में 6 सपाट आयताकार सतहें होती हैं। यह कौन-सी 3D आकृति है?", [T("cuboid", "घनाभ · cuboid"), T("sphere", "गोला · sphere"), T("cone", "शंकु · cone")], "cuboid",
        "Like a stretched cube with rectangle faces: cuboid.", "आयताकार सतहों वाले लंबे बक्से जैसी आकृति घनाभ (cuboid) है।", { showEmoji: "🧱" }),
      Q(M1, "A bangle rolls like a wheel, and a scale slides. Which one is curved?", "चूड़ी पहिये की तरह लुढ़कती है और स्केल सरकता है। कौन-सी चीज़ गोल है?", [P("⭕", "bangle", "चूड़ी"), P("📏", "scale", "स्केल"), P("📘", "book", "किताब")], "bangle",
        "Which one has a round curved edge and no corners?", "किसमें गोल किनारा है और कोई कोना नहीं?"),
      Q(M1, "Logic puzzle: which shape does NOT belong with shapes that roll?", "तर्क पहेली: लुढ़कने वाली आकृतियों में कौन-सी अलग है?", [P("🎲", "die (slides)", "पासा (सरकता है)"), P("⚽", "ball", "गेंद"), P("🍊", "orange", "संतरा")], "die (slides)",
        "A ball and an orange roll. A die has flat faces and slides.", "गेंद और संतरा लुढ़कते हैं। पासा सरकता है।"),
      Q(M1, "Logic puzzle: which shape does NOT belong with stackable boxes?", "तर्क पहेली: ऊपर-नीचे जमने वाले बक्सों में कौन अलग है?", [P("⚽", "ball (no flat face)", "गेंद (सपाट सतह नहीं)"), P("📦", "box", "डिब्बा"), P("🧱", "brick", "ईंट")], "ball (no flat face)",
        "A box and a brick stack neatly on flat faces. Can a ball sit still on top?", "डिब्बा और ईंट सपाट सतह पर जमते हैं। क्या गेंद ऊपर टिकती है?"),
      Q(M1, "Logic puzzle: which object has NO corners?", "तर्क पहेली: किस वस्तु में कोई कोना नहीं है?", [P("🔮", "marble (0 corners)", "कंचा (0 कोने)"), P("🎲", "die (8 corners)", "पासा (8 कोने)"), P("📘", "book (8 corners)", "किताब (8 कोने)")], "marble (0 corners)",
        "A die and a book have 8 corners. How many corners does a round marble have?", "पासे और किताब में 8 कोने हैं। गोल कंचे में कितने कोने हैं?")
    ]
  };
  finish(M1, m1, COUNTS);

  window.CHOTU_CLASS1_V2_UNITS = [E1, E2, M1];
})();

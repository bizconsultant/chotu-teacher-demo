(function () {
  "use strict";
  function C() { return window.Chotu; }
  function sfx() { return window.ChotuSfx || { start(){}, clap(){}, pop(){}, chime(){}, coin(){}, bell(){}, correct(){}, wrong(){}, whoosh(){}, unlock(){}, tick(){}, rain(){} }; }
  function poseSrc(p) {
    return ({
      idle: "assets/chotu.png", wave: "assets/chotu-wave.png", clap: "assets/chotu-clap.png",
      point: "assets/chotu-point.png", listen: "assets/chotu-listen.png", jump: "assets/chotu-jump.png"
    })[p] || "assets/chotu.png";
  }
  function sceneHTML(scene) {
    if (window.ChotuCourse && window.ChotuCourse._scene) return window.ChotuCourse._scene(scene);
    const rain = Array.from({ length: 18 }, (_, i) =>
      '<span class="rain-drop" style="left:' + (3 + i * 5.4) + '%;animation-delay:' + (i * 0.08) + 's"></span>'
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

  const REELS = {
    nursery: [
      { id: "nr1", unitId: "nursery-eng-2", scene: "home",
        titleEn: "Clap Machli with Chotu", titleHi: "छोटू के साथ मछली पर ताली",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Let's clap a rhyme!", capHi: "एक तुक पर ताली बजाएँ!", speakEn: "Let's clap a rhyme together.", speakHi: "एक तुक पर साथ ताली बजाएँ।" },
          { pose: "clap", anim: "clap", capEn: "Ma… chh… li! Three claps.", capHi: "म… छ… ली! तीन तालियाँ।", speakEn: "Ma, chh, li. Clap three times with me.", speakHi: "म, छ, ली। मेरे साथ तीन तालियाँ।" }
        ],
        beat: { type: "clap", beats: 3, promptEn: "Tap on each beat!", promptHi: "हर ताल पर टैप करो!", answer: 3 }
      },
      { id: "nr2", unitId: "nursery-eng-1", scene: "market",
        titleEn: "Market sounds", titleHi: "बाज़ार की आवाज़ें",
        lines: [
          { pose: "listen", anim: "listen", capEn: "Shh. What do you hear at the market?", capHi: "शhh। बाज़ार में क्या सुनाई देता है?", speakEn: "Let's listen at the market. I hear a bell.", speakHi: "बाज़ार में सुनो। मुझे घंटी सुनाई देती है।" },
          { pose: "point", anim: "bob", capEn: "A bell! Can you find it?", capHi: "घंटी! क्या तुम ढूँढ सकते हो?", speakEn: "Tap the picture of the bell.", speakHi: "घंटी की तस्वीर टैप करो।" }
        ],
        beat: { type: "choice", promptEn: "Which sound did Chotu hear?", promptHi: "छोटू ने कौन सी आवाज़ सुनी?",
          options: [{ value: "bell", label: "bell", emoji: "🔔" }, { value: "rain", label: "rain", emoji: "🌧️" }, { value: "cow", label: "cow", emoji: "🐮" }], answer: "bell" }
      },
      { id: "nr3", unitId: "nursery-eng-4", scene: "school",
        titleEn: "The s, a, t, p chant", titleHi: "s, a, t, p का गीत",
        lines: [
          { pose: "wave", anim: "wave", capEn: "s… a… t… p! We can already make words.", capHi: "s… a… t… p! हम पहले से शब्द बना सकते हैं।", speakEn: "S, a, t, p. With these four sounds we can make sat, pat and tap.", speakHi: "S, a, t, p। इन चार ध्वनियों से sat, pat और tap बनते हैं।" },
          { pose: "point", anim: "bob", capEn: "Sss is for sun. Tap the first sound of sun!", capHi: "Sss सूरज के लिए। sun की पहली ध्वनि टैप करो!", speakEn: "Sun. What is the first sound?", speakHi: "सन। पहली ध्वनि क्या है?" }
        ],
        beat: { type: "choice", promptEn: "First sound of sun?", promptHi: "sun की पहली ध्वनि?",
          options: ["s", "a", "p"], answer: "s" }
      },
      { id: "nr4", unitId: "nursery-math-2", scene: "diwali",
        titleEn: "Look first: three laddoos", titleHi: "पहले देखो: तीन लड्डू",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Don't count yet. Just look!", capHi: "अभी मत गिनो। केवल देखो!", speakEn: "Look quickly. Don't count one by one.", speakHi: "जल्दी देखो। एक-एक कर के मत गिनो।" },
          { pose: "point", anim: "bob", capEn: "🍬🍬🍬  How many do you see?", capHi: "🍬🍬🍬  कितने दिखते हैं?", speakEn: "How many laddoos do you see?", speakHi: "कितने लड्डू दिखते हैं?" }
        ],
        beat: { type: "choice", promptEn: "How many? Look, don't count one by one.", promptHi: "कितने? देखो, एक-एक मत गिनो।",
          options: ["2", "3", "5"], answer: "3" }
      },
      { id: "nr5", unitId: "nursery-eng-5", scene: "monsoon",
        titleEn: "Mini's paper boat", titleHi: "मिनी की कागज़ की नाव",
        lines: [
          { pose: "listen", anim: "listen", capEn: "It is raining. Mini has a paper boat.", capHi: "बारिश हो रही है। मिनी के पास कागज़ की नाव है।", speakEn: "It is raining. Mini makes a paper boat for the puddle.", speakHi: "बारिश हो रही है। मिनी गड्ढे के लिए कागज़ की नाव बनाती है।" },
          { pose: "point", anim: "bob", capEn: "The boat is in the puddle. What might happen next?", capHi: "नाव गड्ढे में है। आगे क्या हो सकता है?", speakEn: "What might happen next?", speakHi: "आगे क्या हो सकता है?" }
        ],
        beat: { type: "choice", promptEn: "What might happen next?", promptHi: "आगे क्या हो सकता है?",
          options: [{ value: "float", label: "It might float", emoji: "⛵" }, { value: "bake", label: "It might bake roti", emoji: "🫓" }, { value: "fly", label: "It might fly to space", emoji: "🚀" }], answer: "float" }
      }
    ],
    lkg: [
      { id: "lr1", unitId: "lkg-eng-1", scene: "school",
        titleEn: "Blend c-a-t", titleHi: "c-a-t जोड़ो",
        lines: [
          { pose: "point", anim: "bob", capEn: "C… a… t… Cat!", capHi: "C… a… t… कैट!", speakEn: "C, a, t. Blend it. Cat!", speakHi: "C, a, t। जोड़ो। कैट!" },
          { pose: "jump", anim: "jump", capEn: "Which word did we build?", capHi: "हमने कौन सा शब्द बनाया?", speakEn: "Which word did we build?", speakHi: "हमने कौन सा शब्द बनाया?" }
        ],
        beat: { type: "choice", promptEn: "c-a-t is…", promptHi: "c-a-t है…",
          options: [{ value: "cat", label: "cat", emoji: "🐱" }, { value: "cap", label: "cap", emoji: "🧢" }, { value: "cot", label: "cot", emoji: "🛏️" }], answer: "cat" }
      },
      { id: "lr2", unitId: "lkg-math-2", scene: "diwali",
        titleEn: "Make 10 on a ten-frame", titleHi: "दस-फ्रेम पर 10 बनाओ",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Six are filled. How many more to make 10?", capHi: "छह भरे हैं। 10 के लिए कितने और?", speakEn: "Six are filled on the ten-frame. How many more to make ten? Four.", speakHi: "दस-फ्रेम पर छह भरे हैं। दस बनाने के लिए चार और।" },
          { pose: "point", anim: "bob", capEn: "Your turn. Eight are filled. How many more?", capHi: "अब तुम। आठ भरे हैं। कितने और?", speakEn: "Eight are filled. How many more to make ten?", speakHi: "आठ भरे हैं। दस के लिए कितने और?" }
        ],
        beat: { type: "choice", promptEn: "8 filled. How many more to make 10?", promptHi: "8 भरे। 10 के लिए कितने और?", options: ["1", "2", "3"], answer: "2" }
      },
      { id: "lr3", unitId: "lkg-eng-5", scene: "market",
        titleEn: "Amma at the market", titleHi: "अम्मा बाज़ार में",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Amma buys a pan and a lid.", capHi: "अम्मा कड़ाही और ढक्कन लेती हैं।", speakEn: "Amma is at the market. She buys a pan and a lid.", speakHi: "अम्मा बाज़ार में हैं। वे पैन और ढक्कन लेती हैं।" },
          { pose: "listen", anim: "listen", capEn: "Who is the story about?", capHi: "कहानी किसकी है?", speakEn: "Who is the story about?", speakHi: "कहानी किसकी है?" }
        ],
        beat: { type: "choice", promptEn: "Who bought the pan?", promptHi: "पैन किसने लिया?",
          options: [{ value: "amma", label: "Amma", emoji: "👩" }, { value: "a monkey", label: "a monkey", emoji: "🐒" }, { value: "a frog", label: "a frog", emoji: "🐸" }], answer: "amma" }
      },
      { id: "lr4", unitId: "lkg-math-8", scene: "home",
        titleEn: "Say the pattern rule", titleHi: "पैटर्न का नियम बताओ",
        lines: [
          { pose: "point", anim: "bob", capEn: "Red, blue, red, blue… What is the rule?", capHi: "लाल, नीला, लाल, नीला… नियम क्या है?", speakEn: "Red, blue, red, blue. The rule is ABAB. They take turns.", speakHi: "लाल, नीला, लाल, नीला। नियम ABAB है। बारी-बारी।" },
          { pose: "wave", anim: "wave", capEn: "What comes next?", capHi: "आगे क्या आएगा?", speakEn: "What comes next?", speakHi: "आगे क्या आएगा?" }
        ],
        beat: { type: "choice", promptEn: "Red, blue, red, blue, …", promptHi: "लाल, नीला, लाल, नीला, …",
          options: [{ value: "red", label: "red", emoji: "🔴" }, { value: "green", label: "green", emoji: "🟢" }, { value: "star", label: "star", emoji: "⭐" }], answer: "red" }
      },
      { id: "lr5", unitId: "lkg-eng-4", scene: "home",
        titleEn: "Spell pan", titleHi: "pan की वर्तनी",
        lines: [
          { pose: "point", anim: "bob", capEn: "P-a-n, pan. An Indian kitchen word!", capHi: "P-a-n, पैन। रसोई का शब्द!", speakEn: "P, a, n. Pan. A pan of dal.", speakHi: "P, a, n. पैन। दाल का पतीला।" },
          { pose: "clap", anim: "clap", capEn: "Tap the word we built.", capHi: "बनाया शब्द टैप करो।", speakEn: "Which word did we spell?", speakHi: "कौन सा शब्द बनाया?" }
        ],
        beat: { type: "choice", promptEn: "p-a-n is…", promptHi: "p-a-n है…",
          options: ["pan", "pin", "pen"], answer: "pan" }
      }
    ],
    ukg: [
      { id: "ur1", unitId: "ukg-eng-1", scene: "school",
        titleEn: "The sh and ch chant", titleHi: "sh और ch का गीत",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Sh… is for ship. Ch… is for chin.", capHi: "Sh… जहाज़ के लिए। Ch… ठुड्डी के लिए।", speakEn: "Sh is one sound in ship. Ch is one sound in chin.", speakHi: "Sh, ship में एक ध्वनि है। Ch, chin में एक ध्वनि है।" },
          { pose: "listen", anim: "listen", capEn: "Listen close. Ship or chip?", capHi: "ध्यान से सुनो। ship या chip?", speakEn: "I will say ship. Which word did you hear?", speakHi: "मैं ship कहूँगा। कौन सा शब्द सुना?" }
        ],
        beat: { type: "choice", promptEn: "Sh-i-p is…", promptHi: "Sh-i-p है…",
          options: [{ value: "ship", label: "ship", emoji: "🚢" }, { value: "chip", label: "chip", emoji: "🍟" }, { value: "sip", label: "sip", emoji: "🥤" }], answer: "ship" }
      },
      { id: "ur2", unitId: "ukg-math-5", scene: "market",
        titleEn: "Rupees and change", titleHi: "रुपये और वापसी",
        lines: [
          { pose: "wave", anim: "wave", capEn: "A bun is 7 rupees. You have 10 rupees.", capHi: "बन 7 रुपये का है। तुम्हारे पास 10 रुपये हैं।", speakEn: "A bun is seven rupees. You have ten rupees. Yes, it is enough.", speakHi: "बन सात रुपये का है। तुम्हारे पास दस रुपये हैं। हाँ, काफी है।" },
          { pose: "point", anim: "bob", capEn: "What comes back as change?", capHi: "वापसी में क्या आएगा?", speakEn: "Ten take away seven. What is the change?", speakHi: "दस में से सात। वापसी कितनी?" }
        ],
        beat: { type: "choice", promptEn: "You pay ₹10 for a ₹7 bun. Change?", promptHi: "₹7 के बन पर ₹10 दिए। वापसी?",
          options: ["₹3", "₹17", "₹7"], answer: "₹3" }
      },
      { id: "ur3", unitId: "ukg-eng-8", scene: "monsoon",
        titleEn: "How might Mini feel?", titleHi: "मिनी कैसा महसूस कर सकती हैं?",
        lines: [
          { pose: "listen", anim: "listen", capEn: "Mini's paper boat sits in a puddle. She smiles and claps.", capHi: "मिनी की कागज़ की नाव गड्ढे में है। वे मुस्कराती और ताली बजाती हैं।", speakEn: "Mini smiles and claps at her paper boat in the puddle.", speakHi: "मिनी गड्ढे में अपनी कागज़ की नाव देखकर मुस्कराती और ताली बजाती हैं।" },
          { pose: "wave", anim: "wave", capEn: "How might she feel, and why?", capHi: "वे कैसा महसूस कर सकती हैं, और क्यों?", speakEn: "Use a clue from the story.", speakHi: "कहानी के संकेत का उपयोग करो।" }
        ],
        beat: { type: "choice", promptEn: "Mini smiles and claps. How might she feel?", promptHi: "मिनी मुस्कराती और ताली बजाती हैं। कैसा लग सकता है?",
          options: [{ value: "happy", label: "happy", emoji: "😊" }, { value: "cross", label: "cross", emoji: "😠" }, { value: "lost", label: "lost, with no clue", emoji: "🧭" }], answer: "happy" }
      },
      { id: "ur4", unitId: "ukg-math-8", scene: "school",
        titleEn: "Why is it a cylinder?", titleHi: "यह बेलन क्यों है?",
        lines: [
          { pose: "point", anim: "bob", capEn: "A steel glass can roll on its side. That is a clue.", capHi: "स्टील का गिलास करवट पर लुढ़क सकता है। यह एक संकेत है।", speakEn: "We name a shape by its properties. A glass can roll, like a cylinder.", speakHi: "आकृति को गुणों से नाम देते हैं। गिलास लुढ़क सकता है, बेलन की तरह।" },
          { pose: "wave", anim: "wave", capEn: "Which object is most like a cylinder?", capHi: "कौन सी वस्तु बेलन जैसी है?", speakEn: "Which object is most like a cylinder, and why?", speakHi: "कौन सी वस्तु बेलन जैसी है, और क्यों?" }
        ],
        beat: { type: "choice", promptEn: "Most like a cylinder?", promptHi: "बेलन जैसी सबसे ज्यादा?",
          options: [{ value: "glass", label: "a steel glass", emoji: "🥛" }, { value: "ball", label: "a football", emoji: "⚽" }, { value: "book", label: "a book", emoji: "📘" }], answer: "glass" }
      },
      { id: "ur5", unitId: "ukg-eng-2", scene: "monsoon",
        titleEn: "The rain vowel team", titleHi: "rain का स्वर युग्म",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Ai is one sound. R… ai… n. Rain!", capHi: "Ai एक ध्वनि है। R… ai… n. Rain!", speakEn: "A I together say ay. Rain, like the monsoon rain.", speakHi: "A और I मिलकर ay कहते हैं। Rain, मानसून की बारिश जैसा।" },
          { pose: "clap", anim: "clap", capEn: "Tap the word we built.", capHi: "बनाया शब्द टैप करो।", speakEn: "Which word did we blend?", speakHi: "कौन सा शब्द जोड़ा?" }
        ],
        beat: { type: "choice", promptEn: "r-ai-n is…", promptHi: "r-ai-n है…",
          options: ["rain", "ran", "run"], answer: "rain" }
      }
    ],
    class1: [
      { id: "cr1", unitId: "class1-eng-1", scene: "school",
        titleEn: "Two little hands", titleHi: "दो छोटे हाथ",
        lines: [
          { pose: "clap", anim: "clap", capEn: "Two little hands can clap, snap and wave.", capHi: "दो छोटे हाथ ताली, चुटकी और हिला सकते हैं।", speakEn: "Two little hands can clap. Clap is an action word.", speakHi: "दो छोटे हाथ ताली बजा सकते हैं। Clap एक क्रिया शब्द है।" },
          { pose: "wave", anim: "wave", capEn: "Which word is an action word?", capHi: "क्रिया शब्द कौन सा है?", speakEn: "Which word is an action word?", speakHi: "क्रिया शब्द कौन सा है?" }
        ],
        beat: { type: "choice", promptEn: "Which is an action word?", promptHi: "क्रिया शब्द कौन सा?",
          options: [{ value: "clap", label: "clap", emoji: "👏" }, { value: "red", label: "red", emoji: "🔴" }, { value: "the", label: "the" }], answer: "clap" }
      },
      { id: "cr2", unitId: "class1-eng-4", scene: "school",
        titleEn: "The cap-seller and the monkeys", titleHi: "टोपी वाला और बंदर",
        lines: [
          { pose: "listen", anim: "listen", capEn: "A cap-seller rests under a tree. Monkeys take the caps.", capHi: "टोपी वाला पेड़ के नीचे आराम करता है। बंदर टोपियाँ ले जाते हैं।", speakEn: "The cap-seller rests under a tree. Why might he rest?", speakHi: "टोपी वाला पेड़ के नीचे आराम करता है। वे आराम क्यों कर सकते हैं?" },
          { pose: "point", anim: "bob", capEn: "He throws his cap down. What might the monkeys do?", capHi: "वह टोपी नीचे फेंकता है। बंदर क्या कर सकते हैं?", speakEn: "The monkeys like to copy. What might they do?", speakHi: "बंदर नकल करना पसंद करते हैं। वे क्या कर सकते हैं?" }
        ],
        beat: { type: "choice", promptEn: "When he throws his cap down, the monkeys…", promptHi: "जब वह टोपी नीचे फेंकता है, बंदर…",
          options: [{ value: "copy", label: "copy him", emoji: "🐒" }, { value: "bake", label: "bake roti", emoji: "🫓" }, { value: "fly", label: "fly to space", emoji: "🚀" }], answer: "copy" }
      },
      { id: "cr3", unitId: "class1-math-4", scene: "home",
        titleEn: "Tomatoes on the farm", titleHi: "खेत के टमाटर",
        lines: [
          { pose: "wave", anim: "wave", capEn: "12 tomatoes on the plant. We pick 5.", capHi: "पौधे पर 12 टमाटर। हम 5 तोड़ते हैं।", speakEn: "Twelve tomatoes, pick five. How many are left?", speakHi: "बारह टमाटर, पाँच तोड़े। कितने बचे?" },
          { pose: "point", anim: "bob", capEn: "How did you know?", capHi: "कैसे पता चला?", speakEn: "I took away, because we picked some.", speakHi: "मैंने घटाया, क्योंकि कुछ तोड़े।" }
        ],
        beat: { type: "choice", promptEn: "12 tomatoes, pick 5. How many left?", promptHi: "12 टमाटर, 5 तोड़े। कितने बचे?",
          options: ["7", "17", "5"], answer: "7" }
      },
      { id: "cr4", unitId: "class1-math-9", scene: "home",
        titleEn: "Idlis in equal groups", titleHi: "बराबर समूहों में इडली",
        lines: [
          { pose: "wave", anim: "wave", capEn: "3 plates, 2 idlis on each plate.", capHi: "3 प्लेटें, हर प्लेट पर 2 इडली।", speakEn: "Three plates with two idlis each. That is two plus two plus two.", speakHi: "तीन प्लेटों में दो-दो इडली। यह दो और दो और दो है।" },
          { pose: "clap", anim: "clap", capEn: "How many idlis in all?", capHi: "कुल कितनी इडली?", speakEn: "How many in all?", speakHi: "कुल कितनी?" }
        ],
        beat: { type: "choice", promptEn: "3 groups of 2 is…", promptHi: "2 के 3 समूह हैं…",
          options: ["6", "5", "32"], answer: "6" }
      },
      { id: "cr5", unitId: "class1-eng-9", scene: "school",
        titleEn: "Colours of the flag", titleHi: "झंडे के रंग",
        lines: [
          { pose: "wave", anim: "wave", capEn: "Saffron, white and green. The chakra is blue.", capHi: "केसरिया, सफेद और हरा। चक्र नीला है।", speakEn: "The Indian flag has saffron, white and green, with a blue chakra.", speakHi: "भारतीय झंडे में केसरिया, सफेद और हरा है, नीले चक्र के साथ।" },
          { pose: "point", anim: "bob", capEn: "Which set names the flag colours?", capHi: "झंडे के रंग कौन सा समूह बताता है?", speakEn: "Which set names the Indian flag colours?", speakHi: "भारतीय झंडे के रंग कौन सा समूह बताता है?" }
        ],
        beat: { type: "choice", promptEn: "The Indian flag colours are…", promptHi: "भारतीय झंडे के रंग हैं…",
          options: [{ value: "flag", label: "saffron, white and green", emoji: "🇮🇳" }, { value: "pink", label: "only pink and gold", emoji: "🌸" }, { value: "black", label: "only black", emoji: "⬛" }], answer: "flag" }
      }
    ]
  };

  let reelIndex = 0, swipeY = null, booted = false, lineTimer = null;

  function list() {
    const age = (C() && C().state && C().state.age) || "nursery";
    return REELS[age] || REELS.nursery;
  }
  function likeId() { return ((C() && C().state.age) || "nursery") + ":" + reelIndex; }

  function today() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function open() {
    if (window.ChotuFun && window.ChotuFun.getSave) {
      const sv = window.ChotuFun.getSave();
      if (sv && sv.limitMinutes && sv.tiredDay === today()) { C().showScreen("tired"); return; }
    }
    sfx().start();
    reelIndex = 0;
    const d = new Date().getDate();
    const n = list().length;
    if (n) reelIndex = d % n;
    C().showScreen("reels");
    build();
    go(reelIndex, true);
    if (window.ChotuFun && window.ChotuFun.getSave) {
      const sv = window.ChotuFun.getSave();
      sv.watchedEpisode = true;
      try { localStorage.setItem("chotuTeacherDemo", JSON.stringify(sv)); } catch (e) {}
    }
  }

  function build() {
    const vp = C().$("#reels-viewport");
    if (!vp) return;
    vp.innerHTML = "";
    list().forEach((reel, i) => {
      const el = document.createElement("div");
      el.className = "reel";
      el.setAttribute("data-index", String(i));
      const line = reel.lines[0];
      el.innerHTML = '<div class="reel-stage">' + sceneHTML(reel.scene) +
        '<div class="chotu-actor actor-' + (line.anim || "bob") + '"><img alt="Chotu" src="' + poseSrc(line.pose) + '"></div>' +
        '<div class="reel-caption-box"><p class="unit-link">' + C().txt(reel.titleEn, reel.titleHi) + "</p>" +
        '<p class="reel-line"></p><div class="reel-interact"></div></div></div>';
      vp.appendChild(el);
    });
    if (!vp._swipeBound) {
      vp._swipeBound = true;
      vp.addEventListener("pointerdown", (e) => { swipeY = e.clientY; });
      vp.addEventListener("pointerup", (e) => {
        if (swipeY == null) return;
        const dy = e.clientY - swipeY; swipeY = null;
        if (Math.abs(dy) < 40) return;
        go(reelIndex + (dy < 0 ? 1 : -1), true);
      });
      vp.addEventListener("pointercancel", () => { swipeY = null; });
      vp.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaY) < 20) return;
        e.preventDefault();
        go(reelIndex + (e.deltaY > 0 ? 1 : -1), true);
      }, { passive: false });
    }
    layout();
  }

  function layout() {
    C().$$("#reels-viewport .reel").forEach((el) => {
      const i = Number(el.getAttribute("data-index"));
      el.style.transform = "translateY(" + ((i - reelIndex) * 100) + "%)";
    });
    const n = list().length;
    const idx = C().$("#reel-index");
    if (idx) idx.textContent = (reelIndex + 1) + " / " + n;
    const like = C().$("#reel-like");
    const id = likeId();
    let liked = false;
    try {
      const sv = JSON.parse(localStorage.getItem("chotuTeacherDemo") || "{}");
      liked = !!(sv.liked && sv.liked[id]);
    } catch (e) {}
    if (like) like.classList.toggle("liked", liked);
    const lc = C().$("#reel-like-count");
    if (lc) lc.textContent = liked ? "1" : "0";
  }

  function playLine(reel, lineNo) {
    const el = C().$$("#reels-viewport .reel")[reelIndex];
    if (!el) return;
    const line = reel.lines[Math.min(lineNo, reel.lines.length - 1)];
    const img = el.querySelector(".chotu-actor img");
    const actor = el.querySelector(".chotu-actor");
    const cap = el.querySelector(".reel-line");
    if (img) img.src = poseSrc(line.pose);
    if (actor) actor.className = "chotu-actor actor-" + (line.anim || "bob");
    if (cap) cap.textContent = C().txt(line.capEn, line.capHi);
    C().speakRaw(C().txt(line.speakEn, line.speakHi));
    if (reel.scene === "monsoon") sfx().rain();
    if (reel.scene === "market") sfx().bell();
    if (reel.scene === "diwali") sfx().chime();
  }

  function showBeat(reel) {
    const el = C().$$("#reels-viewport .reel")[reelIndex];
    if (!el) return;
    const box = el.querySelector(".reel-interact");
    if (!box) return;
    box.innerHTML = "";
    const beat = reel.beat;
    if (!beat) return;
    const prompt = document.createElement("p");
    prompt.className = "unit-link";
    prompt.textContent = C().txt(beat.promptEn, beat.promptHi);
    box.appendChild(prompt);
    if (beat.type === "clap") {
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "btn btn-sun pulse-btn beat-hit"; btn.textContent = "👏";
      const lab = document.createElement("p"); lab.className = "reel-line"; lab.textContent = "0 / " + beat.beats;
      let n = 0;
      btn.addEventListener("click", () => {
        n++; sfx().clap(); lab.textContent = n + " / " + beat.beats;
        if (n === beat.beats) { C().addStars(1); sfx().correct(); C().speakRaw(C().praise()); btn.classList.remove("pulse-btn"); }
      });
      box.appendChild(btn); box.appendChild(lab);
      return;
    }
    box.appendChild(C().optionButtons(beat.options || [], (val, btn, wrap) => {
      const ok = String(val) === String(beat.answer);
      C().markAnswer(wrap, btn, ok);
      if (ok) { C().addStars(1); sfx().correct(); C().speakRaw(C().praise()); }
      else { sfx().wrong(); C().speakRaw(C().retry()); }
    }));
  }

  function go(i, speak) {
    const items = list();
    if (!items.length) return;
    reelIndex = (i + items.length) % items.length;
    layout();
    const reel = items[reelIndex];
    if (lineTimer) clearTimeout(lineTimer);
    playLine(reel, 0);
    const el = C().$$("#reels-viewport .reel")[reelIndex];
    const box = el && el.querySelector(".reel-interact");
    if (box) box.innerHTML = "";
    lineTimer = setTimeout(() => {
      if (reel.lines[1]) playLine(reel, 1);
      setTimeout(() => showBeat(reel), 1600);
    }, 2200);
  }

  function like() {
    const id = likeId();
    let sv = {};
    try { sv = JSON.parse(localStorage.getItem("chotuTeacherDemo") || "{}"); } catch (e) {}
    sv.liked = sv.liked || {};
    if (sv.liked[id]) return;
    sv.liked[id] = true;
    try { localStorage.setItem("chotuTeacherDemo", JSON.stringify(sv)); } catch (e) {}
    C().addStars(1); sfx().chime();
    layout();
  }

  function boot() {
    if (booted) return;
    booted = true;
    const prev = C().$("#reel-prev");
    const next = C().$("#reel-next");
    const likeBtn = C().$("#reel-like");
    if (prev) prev.addEventListener("click", () => go(reelIndex - 1, true));
    if (next) next.addEventListener("click", () => go(reelIndex + 1, true));
    if (likeBtn) likeBtn.addEventListener("click", like);
    if (window.ChotuFun) {
      window.ChotuFun.openReels = open;
      const oldGo = window.ChotuFun.goReel;
      window.ChotuFun.goReel = function (i, sp) { go(i, sp); };
    }
  }

  window.ChotuReels = { boot, open, go, list };
  if (window.Chotu) boot();
})();

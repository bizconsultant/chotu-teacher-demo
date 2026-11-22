/* Chotu Teacher full-course data */
window.COURSE_UNITS = [
  {
    "id": "nursery-eng-1",
    "level": "nursery",
    "subject": "english",
    "n": 1,
    "titleEn": "Listening to sounds around us",
    "titleHi": "आस-पास की आवाज़ें सुनना",
    "shortEn": "Market bell or cooker? Match the sound.",
    "shortHi": "बाज़ार की घंटी या कुकर? आवाज़ मिलाओ।",
    "scene": "market",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Close your eyes with Chotu. What can you hear at the market?",
      "capHi": "छोटू के साथ आँखें बंद करो। बाज़ार में क्या सुनाई देता है?",
      "speakEn": "Let's listen first, before letters. I hear a bell at the market. Can you find the matching picture?",
      "speakHi": "अक्षरों से पहले सुनते हैं। बाज़ार में घंटी बज रही है। मिलती-जुलती तस्वीर ढूँढो।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Find the sound",
        "titleHi": "आवाज़ ढूँढो",
        "promptEn": "Chotu rings a market bell. Which picture matches?",
        "promptHi": "छोटू बाज़ार की घंटी बजाते हैं। कौन सी तस्वीर?",
        "speakEn": "I hear a bell. Which picture matches?",
        "speakHi": "घंटी सुनाई दी। कौन सी तस्वीर?",
        "showEmoji": "🔔",
        "options": [
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          },
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "cow",
            "label": "cow",
            "emoji": "🐮"
          }
        ],
        "answer": "bell"
      },
      {
        "type": "match",
        "titleEn": "Match the sounds",
        "titleHi": "आवाज़ें मिलाओ",
        "pairs": [
          {
            "key": "bell",
            "leftEn": "🔔 bell",
            "leftHi": "🔔 घंटी",
            "rightEn": "market",
            "rightHi": "बाज़ार"
          },
          {
            "key": "cooker",
            "leftEn": "🍲 cooker",
            "leftHi": "🍲 कुकर",
            "rightEn": "kitchen",
            "rightHi": "रसोई"
          },
          {
            "key": "rain",
            "leftEn": "🌧️ rain",
            "leftHi": "🌧️ बारिश",
            "rightEn": "monsoon",
            "rightHi": "मानसून"
          }
        ]
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Which sound belongs at the market?",
        "qHi": "बाज़ार की आवाज़ कौन सी है?",
        "options": [
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          },
          {
            "value": "toothbrush",
            "label": "toothbrush",
            "emoji": "🪥"
          },
          {
            "value": "clock-tick in a library",
            "label": "library hush",
            "emoji": "🤫"
          }
        ],
        "answer": "bell",
        "speakEn": "Which sound belongs at the market?",
        "speakHi": "बाज़ार की आवाज़ कौन सी है?"
      },
      {
        "type": "mcq",
        "qEn": "Which sound is a voice sound?",
        "qHi": "कौन सी आवाज़ आवाज़ वाली है?",
        "options": [
          {
            "value": "laugh",
            "label": "a laugh",
            "emoji": "😂"
          },
          {
            "value": "bell",
            "label": "a bell",
            "emoji": "🔔"
          },
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          }
        ],
        "answer": "laugh",
        "speakEn": "Which sound is a voice sound?",
        "speakHi": "कौन सी आवाज़ आवाज़ वाली है?"
      },
      {
        "type": "mcq",
        "qEn": "A pressure cooker whistles. Where are you?",
        "qHi": "कुकर सीटी बजाता है। तुम कहाँ हो?",
        "options": [
          {
            "value": "kitchen",
            "label": "kitchen",
            "emoji": "🍲"
          },
          {
            "value": "market",
            "label": "market",
            "emoji": "🛍️"
          },
          {
            "value": "pond",
            "label": "pond",
            "emoji": "🐸"
          }
        ],
        "answer": "kitchen",
        "speakEn": "A pressure cooker whistles. Where are you?",
        "speakHi": "कुकर सीटी बजाता है। तुम कहाँ हो?"
      },
      {
        "type": "mcq",
        "qEn": "Which one is a quiet sound?",
        "qHi": "कौन सी आवाज़ धीमी है?",
        "options": [
          {
            "value": "whisper",
            "label": "whisper",
            "emoji": "🤫"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          },
          {
            "value": "thunder",
            "label": "thunder",
            "emoji": "⛈️"
          }
        ],
        "answer": "whisper",
        "speakEn": "Which one is a quiet sound?",
        "speakHi": "कौन सी आवाज़ धीमी है?"
      },
      {
        "type": "mcq",
        "qEn": "You hear 'moo'. Which picture?",
        "qHi": "'मू' सुनाई दिया। कौन सी तस्वीर?",
        "options": [
          {
            "value": "cow",
            "label": "cow",
            "emoji": "🐮"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          }
        ],
        "answer": "cow",
        "speakEn": "You hear 'moo'. Which picture?",
        "speakHi": "'मू' सुनाई दिया। कौन सी तस्वीर?",
        "showEmoji": "🐮"
      },
      {
        "type": "mcq",
        "qEn": "Pitter patter. What is it?",
        "qHi": "टप-टप। यह क्या है?",
        "options": [
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          },
          {
            "value": "drum",
            "label": "drum",
            "emoji": "🥁"
          }
        ],
        "answer": "rain",
        "speakEn": "Pitter patter. What is it?",
        "speakHi": "टप-टप। यह क्या है?"
      },
      {
        "type": "mcq",
        "qEn": "Which does not belong with listening games?",
        "qHi": "सुनने के खेल में क्या नहीं आता?",
        "options": [
          {
            "value": "letters A to Z first",
            "label": "letters first",
            "emoji": "🔤"
          },
          {
            "value": "a bell",
            "label": "a bell",
            "emoji": "🔔"
          },
          {
            "value": "a laugh",
            "label": "a laugh",
            "emoji": "😂"
          }
        ],
        "answer": "letters A to Z first",
        "speakEn": "Which does not belong with listening games?",
        "speakHi": "सुनने के खेल में क्या नहीं आता?"
      },
      {
        "type": "mcq",
        "qEn": "Chotu whispers. What should you do?",
        "qHi": "छोटू फुसफुसाते हैं। तुम्हें क्या करना चाहिए?",
        "options": [
          {
            "value": "listen",
            "label": "listen carefully",
            "emoji": "👂"
          },
          {
            "value": "shout",
            "label": "shout",
            "emoji": "📢"
          },
          {
            "value": "run",
            "label": "run",
            "emoji": "🏃"
          }
        ],
        "answer": "listen",
        "speakEn": "Chotu whispers. What should you do?",
        "speakHi": "छोटू फुसफुसाते हैं। तुम्हें क्या करना चाहिए?"
      },
      {
        "type": "mcq",
        "qEn": "A temple bell and a market bell are both…",
        "qHi": "मंदिर की घंटी और बाज़ार की घंटी दोनों…",
        "options": [
          {
            "value": "bells",
            "label": "bells",
            "emoji": "🔔"
          },
          {
            "value": "cows",
            "label": "cows",
            "emoji": "🐮"
          },
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          }
        ],
        "answer": "bells",
        "speakEn": "A temple bell and a market bell are both…",
        "speakHi": "मंदिर की घंटी और बाज़ार की घंटी दोनों…"
      },
      {
        "type": "mcq",
        "qEn": "Which is an environmental sound?",
        "qHi": "कौन सी आस-पास की आवाज़ है?",
        "options": [
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "the letter S",
            "label": "the letter S",
            "emoji": "s"
          },
          {
            "value": "a rhyme",
            "label": "a rhyme",
            "emoji": "🎵"
          }
        ],
        "answer": "rain",
        "speakEn": "Which is an environmental sound?",
        "speakHi": "कौन सी आस-पास की आवाज़ है?"
      },
      {
        "type": "mcq",
        "qEn": "You hear a horn. Where might you be?",
        "qHi": "हॉर्न सुनाई दिया। तुम कहाँ हो सकते हो?",
        "options": [
          {
            "value": "road",
            "label": "on the road",
            "emoji": "🚗"
          },
          {
            "value": "bed",
            "label": "in bed",
            "emoji": "🛏️"
          },
          {
            "value": "library",
            "label": "in a library",
            "emoji": "📚"
          }
        ],
        "answer": "road",
        "speakEn": "You hear a horn. Where might you be?",
        "speakHi": "हॉर्न सुनाई दिया। तुम कहाँ हो सकते हो?"
      },
      {
        "type": "mcq",
        "qEn": "Which picture matches a clap?",
        "qHi": "ताली से कौन सी तस्वीर मिलती है?",
        "options": [
          {
            "value": "hands",
            "label": "hands",
            "emoji": "👏"
          },
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "cow",
            "label": "cow",
            "emoji": "🐮"
          }
        ],
        "answer": "hands",
        "speakEn": "Which picture matches a clap?",
        "speakHi": "ताली से कौन सी तस्वीर मिलती है?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-2",
    "level": "nursery",
    "subject": "english",
    "n": 2,
    "logic": true,
    "titleEn": "Rhyme, rhythm and claps",
    "titleHi": "तुक, लय और तालियाँ",
    "shortEn": "Machli claps, and odd-one-out rhyme.",
    "shortHi": "मछली पर ताली, और तुक का अलग शब्द।",
    "scene": "home",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "Ma-chh-li! Clap the parts of the word with me.",
      "capHi": "म-छ-ली! शब्द के भागों पर मेरे साथ ताली बजाओ।",
      "speakEn": "Let's sing Machli Jal Ki Rani, and clap the beats. Then we will find which word does not rhyme: cat, hat, mango.",
      "speakHi": "मछली जल की रानी गाते हैं और ताली बजाते हैं। फिर देखेंगे कौन सा शब्द तुक नहीं मिलाता: cat, hat, mango।"
    },
    "activities": [
      {
        "type": "clap",
        "titleEn": "Clap Machli",
        "titleHi": "मछली पर ताली",
        "beats": 3,
        "promptEn": "Clap three times: ma, chhli, wait — ma, chh, li.",
        "promptHi": "तीन तालियाँ: म, छ, ली।"
      },
      {
        "type": "mcq",
        "titleEn": "Which word does not rhyme?",
        "titleHi": "कौन सा तुक नहीं मिलाता?",
        "logic": true,
        "qEn": "cat, hat, mango, bat — which does not rhyme?",
        "qHi": "cat, hat, mango, bat — कौन सा तुक नहीं मिलाता?",
        "pattern": [
          "🐱",
          "🎩",
          "🥭",
          "🦇"
        ],
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "hat",
            "label": "hat",
            "emoji": "🎩"
          }
        ],
        "answer": "mango"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Which word rhymes with cat?",
        "qHi": "cat से तुक किसका मिलता है?",
        "options": [
          {
            "value": "hat",
            "label": "hat",
            "emoji": "🎩"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          },
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          }
        ],
        "answer": "hat",
        "speakEn": "Which word rhymes with cat?",
        "speakHi": "cat से तुक किसका मिलता है?"
      },
      {
        "type": "mcq",
        "qEn": "Which does not rhyme: pan, man, rain?",
        "qHi": "कौन सा तुक नहीं: pan, man, rain?",
        "options": [
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "pan",
            "label": "pan",
            "emoji": "🍳"
          },
          {
            "value": "man",
            "label": "man",
            "emoji": "👨"
          }
        ],
        "answer": "rain",
        "speakEn": "Which does not rhyme: pan, man, rain?",
        "speakHi": "कौन सा तुक नहीं: pan, man, rain?"
      },
      {
        "type": "mcq",
        "qEn": "How many claps in ma-chh-li?",
        "qHi": "म-छ-ली में कितनी तालियाँ?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3",
        "speakEn": "How many claps in ma-chh-li?",
        "speakHi": "म-छ-ली में कितनी तालियाँ?"
      },
      {
        "type": "mcq",
        "qEn": "Which pair rhymes?",
        "qHi": "कौन सी जोड़ी तुक मिलाती है?",
        "options": [
          {
            "value": "tap / cap",
            "label": "tap and cap"
          },
          {
            "value": "tap / sun",
            "label": "tap and sun"
          },
          {
            "value": "tap / mango",
            "label": "tap and mango"
          }
        ],
        "answer": "tap / cap",
        "speakEn": "Which pair rhymes?",
        "speakHi": "कौन सी जोड़ी तुक मिलाती है?"
      },
      {
        "type": "mcq",
        "qEn": "Sun, run, ball — which does not rhyme?",
        "qHi": "sun, run, ball — कौन सा तुक नहीं?",
        "options": [
          {
            "value": "ball",
            "label": "ball",
            "emoji": "⚽"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          },
          {
            "value": "run",
            "label": "run",
            "emoji": "🏃"
          }
        ],
        "answer": "ball",
        "speakEn": "Sun, run, ball — which does not rhyme?",
        "speakHi": "sun, run, ball — कौन सा तुक नहीं?"
      },
      {
        "type": "mcq",
        "qEn": "Clap the word banana. How many parts?",
        "qHi": "banana पर ताली। कितने भाग?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3",
        "speakEn": "Clap the word banana. How many parts?",
        "speakHi": "banana पर ताली। कितने भाग?"
      },
      {
        "type": "mcq",
        "qEn": "Which word rhymes with pot?",
        "qHi": "pot से तुक किसका?",
        "options": [
          {
            "value": "hot",
            "label": "hot",
            "emoji": "🔥"
          },
          {
            "value": "pin",
            "label": "pin",
            "emoji": "📌"
          },
          {
            "value": "man",
            "label": "man",
            "emoji": "👨"
          }
        ],
        "answer": "hot",
        "speakEn": "Which word rhymes with pot?",
        "speakHi": "pot से तुक किसका?"
      },
      {
        "type": "mcq",
        "qEn": "A rhyme is when words…",
        "qHi": "तुक तब होता है जब शब्द…",
        "options": [
          {
            "value": "end with the same sound",
            "label": "end the same"
          },
          {
            "value": "start with S",
            "label": "start with S"
          },
          {
            "value": "are long",
            "label": "are long"
          }
        ],
        "answer": "end with the same sound",
        "speakEn": "A rhyme is when words…",
        "speakHi": "तुक तब होता है जब शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "Tin, pin, cup — which does not rhyme?",
        "qHi": "tin, pin, cup — कौन सा तुक नहीं?",
        "options": [
          {
            "value": "cup",
            "label": "cup",
            "emoji": "☕"
          },
          {
            "value": "tin",
            "label": "tin",
            "emoji": "🥫"
          },
          {
            "value": "pin",
            "label": "pin",
            "emoji": "📌"
          }
        ],
        "answer": "cup",
        "speakEn": "Tin, pin, cup — which does not rhyme?",
        "speakHi": "tin, pin, cup — कौन सा तुक नहीं?"
      },
      {
        "type": "mcq",
        "qEn": "How many claps in aam (mango)?",
        "qHi": "आम में कितनी तालियाँ?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": "1",
        "speakEn": "How many claps in aam (mango)?",
        "speakHi": "आम में कितनी तालियाँ?"
      },
      {
        "type": "mcq",
        "qEn": "Which rhymes with bell?",
        "qHi": "bell से तुक किसका?",
        "options": [
          {
            "value": "shell",
            "label": "shell",
            "emoji": "🐚"
          },
          {
            "value": "cow",
            "label": "cow",
            "emoji": "🐮"
          },
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          }
        ],
        "answer": "shell",
        "speakEn": "Which rhymes with bell?",
        "speakHi": "bell से तुक किसका?"
      },
      {
        "type": "mcq",
        "qEn": "Why is mango the odd one out with cat and hat?",
        "qHi": "cat और hat के साथ आम क्यों अलग है?",
        "options": [
          {
            "value": "It does not rhyme",
            "label": "it does not rhyme"
          },
          {
            "value": "It is yellow",
            "label": "it is yellow"
          },
          {
            "value": "It is a fruit",
            "label": "it is a fruit"
          }
        ],
        "answer": "It does not rhyme",
        "speakEn": "Why is mango the odd one out with cat and hat?",
        "speakHi": "cat और hat के साथ आम क्यों अलग है?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-eng-3",
    "level": "nursery",
    "subject": "english",
    "n": 3,
    "titleEn": "Oral blending, before the alphabet",
    "titleHi": "मुँह से शब्द जोड़ना, वर्णमाला से पहले",
    "shortEn": "Hear c-a-t and point to the cat. Aam has aaa.",
    "shortHi": "c-a-t सुनो और बिल्ली दिखाओ। आम में aaa।",
    "scene": "home",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "I will say sounds slowly. c… a… t. Put them together. Cat!",
      "capHi": "मैं ध्वनियाँ धीरे बोलूँगा। c… a… t। जोड़ो। कैट!",
      "speakEn": "Listen. C, a, t. That is cat. Now listen to aaa in aam. Aam means mango. We can blend in English and hear sounds in Hindi too.",
      "speakHi": "सुनो। C, a, t। यह कैट है। अब आम में aaa सुनो। हम अंग्रेज़ी में जोड़ सकते हैं और हिन्दी में भी ध्वनि सुन सकते हैं।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Blend c-a-t",
        "titleHi": "c-a-t जोड़ो",
        "qEn": "Chotu says c-a-t. Which picture?",
        "qHi": "छोटू कहते हैं c-a-t। कौन सी तस्वीर?",
        "options": [
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "cap",
            "label": "cap",
            "emoji": "🧢"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          }
        ],
        "answer": "cat"
      },
      {
        "type": "mcq",
        "titleEn": "Hindi bridge: aaa in aam",
        "titleHi": "हिन्दी पुल: आम में aaa",
        "qEn": "Aam starts with aaa. Aam is a…",
        "qHi": "आम aaa से शुरू होता है। आम है…",
        "showEmoji": "🥭",
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          }
        ],
        "answer": "mango"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "s-u-n. What word?",
        "qHi": "s-u-n। कौन सा शब्द?",
        "options": [
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          },
          {
            "value": "sat",
            "label": "sat",
            "emoji": "🪑"
          },
          {
            "value": "pin",
            "label": "pin",
            "emoji": "📌"
          }
        ],
        "answer": "sun",
        "speakEn": "s-u-n. What word?",
        "speakHi": "s-u-n। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "p-o-t. What word?",
        "qHi": "p-o-t। कौन सा शब्द?",
        "options": [
          {
            "value": "pot",
            "label": "pot",
            "emoji": "🪴"
          },
          {
            "value": "pat",
            "label": "pat",
            "emoji": "👋"
          },
          {
            "value": "pan",
            "label": "pan",
            "emoji": "🍳"
          }
        ],
        "answer": "pot",
        "speakEn": "p-o-t. What word?",
        "speakHi": "p-o-t। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "m-a-n. What word?",
        "qHi": "m-a-n। कौन सा शब्द?",
        "options": [
          {
            "value": "man",
            "label": "man",
            "emoji": "👨"
          },
          {
            "value": "mat",
            "label": "mat",
            "emoji": "🟩"
          },
          {
            "value": "pan",
            "label": "pan",
            "emoji": "🍳"
          }
        ],
        "answer": "man",
        "speakEn": "m-a-n. What word?",
        "speakHi": "m-a-n। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "p-i-n. What word?",
        "qHi": "p-i-n। कौन सा शब्द?",
        "options": [
          {
            "value": "pin",
            "label": "pin",
            "emoji": "📌"
          },
          {
            "value": "pan",
            "label": "pan",
            "emoji": "🍳"
          },
          {
            "value": "pen",
            "label": "pen",
            "emoji": "🖊️"
          }
        ],
        "answer": "pin",
        "speakEn": "p-i-n. What word?",
        "speakHi": "p-i-n। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "c-a-p. What word?",
        "qHi": "c-a-p। कौन सा शब्द?",
        "options": [
          {
            "value": "cap",
            "label": "cap",
            "emoji": "🧢"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "cup",
            "label": "cup",
            "emoji": "☕"
          }
        ],
        "answer": "cap",
        "speakEn": "c-a-p. What word?",
        "speakHi": "c-a-p। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "aaa is the first sound of…",
        "qHi": "aaa किसकी पहली ध्वनि है?",
        "options": [
          {
            "value": "aam",
            "label": "aam / mango",
            "emoji": "🥭"
          },
          {
            "value": "pot",
            "label": "pot",
            "emoji": "🪴"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          }
        ],
        "answer": "aam",
        "speakEn": "aaa is the first sound of…",
        "speakHi": "aaa किसकी पहली ध्वनि है?"
      },
      {
        "type": "mcq",
        "qEn": "t-a-p. What word?",
        "qHi": "t-a-p। कौन सा शब्द?",
        "options": [
          {
            "value": "tap",
            "label": "tap",
            "emoji": "🚰"
          },
          {
            "value": "top",
            "label": "top",
            "emoji": "🔝"
          },
          {
            "value": "sit",
            "label": "sit",
            "emoji": "🪑"
          }
        ],
        "answer": "tap",
        "speakEn": "t-a-p. What word?",
        "speakHi": "t-a-p। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "Do we need the whole alphabet to blend cat?",
        "qHi": "कैट जोड़ने के लिए पूरी वर्णमाला चाहिए?",
        "options": [
          {
            "value": "no",
            "label": "No"
          },
          {
            "value": "yes",
            "label": "Yes"
          }
        ],
        "answer": "no",
        "speakEn": "Do we need the whole alphabet to blend cat?",
        "speakHi": "कैट जोड़ने के लिए पूरी वर्णमाला चाहिए?"
      },
      {
        "type": "mcq",
        "qEn": "p-a-t. What word?",
        "qHi": "p-a-t। कौन सा शब्द?",
        "options": [
          {
            "value": "pat",
            "label": "pat",
            "emoji": "👋"
          },
          {
            "value": "pot",
            "label": "pot",
            "emoji": "🪴"
          },
          {
            "value": "pit",
            "label": "pit",
            "emoji": "🕳️"
          }
        ],
        "answer": "pat",
        "speakEn": "p-a-t. What word?",
        "speakHi": "p-a-t। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "d-o-g. What word?",
        "qHi": "d-o-g। कौन सा शब्द?",
        "options": [
          {
            "value": "dog",
            "label": "dog",
            "emoji": "🐶"
          },
          {
            "value": "dig",
            "label": "dig",
            "emoji": "🕳️"
          },
          {
            "value": "dot",
            "label": "dot",
            "emoji": "🔴"
          }
        ],
        "answer": "dog",
        "speakEn": "d-o-g. What word?",
        "speakHi": "d-o-g। कौन सा शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "The Hindi word namak starts with nnn. That is like…",
        "qHi": "नमक nnn से शुरू होता है। यह похоना है…",
        "options": [
          {
            "value": "n in net",
            "label": "n in net"
          },
          {
            "value": "s in sun",
            "label": "s in sun"
          },
          {
            "value": "p in pot",
            "label": "p in pot"
          }
        ],
        "answer": "n in net",
        "speakEn": "The Hindi word namak starts with nnn. That is like…",
        "speakHi": "नमक nnn से शुरू होता है। यह похоना है…"
      },
      {
        "type": "mcq",
        "qEn": "c-u-p. What word?",
        "qHi": "c-u-p। कौन सा शब्द?",
        "options": [
          {
            "value": "cup",
            "label": "cup",
            "emoji": "☕"
          },
          {
            "value": "cap",
            "label": "cap",
            "emoji": "🧢"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          }
        ],
        "answer": "cup",
        "speakEn": "c-u-p. What word?",
        "speakHi": "c-u-p। कौन सा शब्द?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-4",
    "level": "nursery",
    "subject": "english",
    "n": 4,
    "titleEn": "First letters s, a, t, p and first words",
    "titleHi": "पहले अक्षर s, a, t, p और पहले शब्द",
    "shortEn": "Build at, sat and pat with tiles. A se Aam too.",
    "shortHi": "टाइलों से at, sat, pat बनाओ। A से आम भी।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "These four sounds can already make words: s, a, t, p. Sat. Pat. Tap.",
      "capHi": "ये चार ध्वनियाँ शब्द बना सकती हैं: s, a, t, p। सैट, पैट, टैप।",
      "speakEn": "We do not wait until Z. With s, a, t and p we can build sat, pat and tap. A is for apple, and A se aam, mango, beside the sound of a.",
      "speakHi": "हम Z तक इंतज़ार नहीं करते। s, a, t, p से sat, pat और tap बनते हैं। A for apple, और A से आम, a की ध्वनि के साथ।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Build sat",
        "titleHi": "sat बनाओ",
        "tiles": [
          "s",
          "a",
          "t"
        ],
        "word": "sat",
        "order": [
          "s",
          "a",
          "t"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "A se Aam",
        "titleHi": "A से आम",
        "qEn": "A se aam. Aam is a mango. What is the sound of a?",
        "qHi": "A से आम। आम की ध्वनि a क्या है?",
        "showEmoji": "🥭",
        "options": [
          "a",
          "s",
          "p"
        ],
        "answer": "a"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "What is the first sound of sun?",
        "qHi": "sun की पहली ध्वनि?",
        "options": [
          "s",
          "a",
          "t"
        ],
        "answer": "s",
        "speakEn": "What is the first sound of sun?",
        "speakHi": "sun की पहली ध्वनि?",
        "showEmoji": "☀️"
      },
      {
        "type": "mcq",
        "qEn": "What is the first sound of ant?",
        "qHi": "ant की पहली ध्वनि?",
        "options": [
          "a",
          "s",
          "p"
        ],
        "answer": "a",
        "speakEn": "What is the first sound of ant?",
        "speakHi": "ant की पहली ध्वनि?",
        "showEmoji": "🐜"
      },
      {
        "type": "mcq",
        "qEn": "What is the first sound of tap?",
        "qHi": "tap की पहली ध्वनि?",
        "options": [
          "t",
          "s",
          "a"
        ],
        "answer": "t",
        "speakEn": "What is the first sound of tap?",
        "speakHi": "tap की पहली ध्वनि?",
        "showEmoji": "🚰"
      },
      {
        "type": "mcq",
        "qEn": "What is the first sound of pot?",
        "qHi": "pot की पहली ध्वनि?",
        "options": [
          "p",
          "s",
          "t"
        ],
        "answer": "p",
        "speakEn": "What is the first sound of pot?",
        "speakHi": "pot की पहली ध्वनि?",
        "showEmoji": "🪴"
      },
      {
        "type": "mcq",
        "qEn": "s-a-t makes…",
        "qHi": "s-a-t से बनता है…",
        "options": [
          "sat",
          "pat",
          "tap"
        ],
        "answer": "sat",
        "speakEn": "s-a-t makes…",
        "speakHi": "s-a-t से बनता है…"
      },
      {
        "type": "mcq",
        "qEn": "p-a-t makes…",
        "qHi": "p-a-t से बनता है…",
        "options": [
          "pat",
          "sat",
          "tap"
        ],
        "answer": "pat",
        "speakEn": "p-a-t makes…",
        "speakHi": "p-a-t से बनता है…"
      },
      {
        "type": "mcq",
        "qEn": "t-a-p makes…",
        "qHi": "t-a-p से बनता है…",
        "options": [
          "tap",
          "sat",
          "pat"
        ],
        "answer": "tap",
        "speakEn": "t-a-p makes…",
        "speakHi": "t-a-p से बनता है…"
      },
      {
        "type": "mcq",
        "qEn": "A for Apple, A se…",
        "qHi": "A for Apple, A से…",
        "options": [
          {
            "value": "aam",
            "label": "aam",
            "emoji": "🥭"
          },
          {
            "value": "pot",
            "label": "pot",
            "emoji": "🪴"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          }
        ],
        "answer": "aam",
        "speakEn": "A for Apple, A se…",
        "speakHi": "A for Apple, A से…"
      },
      {
        "type": "mcq",
        "qEn": "Which word uses only s, a, t, p?",
        "qHi": "किस शब्द में केवल s, a, t, p हैं?",
        "options": [
          "sat",
          "dog",
          "sun"
        ],
        "answer": "sat",
        "speakEn": "Which word uses only s, a, t, p?",
        "speakHi": "किस शब्द में केवल s, a, t, p हैं?"
      },
      {
        "type": "mcq",
        "qEn": "The last sound of tap is…",
        "qHi": "tap की आखिरी ध्वनि…",
        "options": [
          "p",
          "t",
          "s"
        ],
        "answer": "p",
        "speakEn": "The last sound of tap is…",
        "speakHi": "tap की आखिरी ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "Which is the sound of s?",
        "qHi": "s की ध्वनि कौन सी?",
        "options": [
          {
            "value": "sss",
            "label": "sss"
          },
          {
            "value": "aaa",
            "label": "aaa"
          },
          {
            "value": "ppp",
            "label": "ppp"
          }
        ],
        "answer": "sss",
        "speakEn": "Which is the sound of s?",
        "speakHi": "s की ध्वनि कौन सी?"
      },
      {
        "type": "mcq",
        "qEn": "p-a-t or s-a-t: which is sat?",
        "qHi": "पैट या सैट: sat कौन सा?",
        "options": [
          "sat",
          "pat",
          "tap"
        ],
        "answer": "sat",
        "speakEn": "p-a-t or s-a-t: which is sat?",
        "speakHi": "पैट या सैट: sat कौन सा?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-5",
    "level": "nursery",
    "subject": "english",
    "n": 5,
    "titleEn": "Story talk: who, what, predict",
    "titleHi": "कहानी बात: कौन, क्या, आगे क्या",
    "shortEn": "A monsoon story with two questions and new words.",
    "shortHi": "मानसून की कहानी, दो प्रश्न और नए शब्द।",
    "scene": "monsoon",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "It is raining. Mini has a paper boat. What might happen next?",
      "capHi": "बारिश हो रही है। मिनी के पास कागज़ की नाव है। आगे क्या हो सकता है?",
      "speakEn": "Here is a short monsoon story. Mini makes a paper boat. The rain makes a puddle. Who is in the story? What does Mini have? What might happen next?",
      "speakHi": "एक छोटी मानसून कहानी। मिनी कागज़ की नाव बनाती है। बारिश से गड्ढा बनता है। कहानी में कौन है? मिनी के पास क्या है? आगे क्या हो सकता है?"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Who is in the story?",
        "titleHi": "कहानी में कौन है?",
        "qEn": "Who makes the paper boat?",
        "qHi": "कागज़ की नाव कौन बनाता है?",
        "options": [
          {
            "value": "Mini",
            "label": "Mini",
            "emoji": "👧"
          },
          {
            "value": "a cow",
            "label": "a cow",
            "emoji": "🐮"
          },
          {
            "value": "Chotu only",
            "label": "Chotu only",
            "emoji": "👦"
          }
        ],
        "answer": "Mini"
      },
      {
        "type": "mcq",
        "titleEn": "What might happen next?",
        "titleHi": "आगे क्या हो सकता है?",
        "qEn": "The boat is in a puddle. What might happen next?",
        "qHi": "नाव गड्ढे में है। आगे क्या हो सकता है?",
        "options": [
          {
            "value": "It might float",
            "label": "It might float",
            "emoji": "⛵"
          },
          {
            "value": "It might bake roti",
            "label": "It might bake roti",
            "emoji": "🫓"
          },
          {
            "value": "It might go to school alone",
            "label": "It goes to school",
            "emoji": "🏫"
          }
        ],
        "answer": "It might float"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Who is the story about?",
        "qHi": "कहानी किसकी है?",
        "options": [
          {
            "value": "Mini",
            "label": "Mini"
          },
          {
            "value": "the sun",
            "label": "the sun"
          },
          {
            "value": "a shopkeeper",
            "label": "a shopkeeper"
          }
        ],
        "answer": "Mini",
        "speakEn": "Who is the story about?",
        "speakHi": "कहानी किसकी है?"
      },
      {
        "type": "mcq",
        "qEn": "What does Mini have?",
        "qHi": "मिनी के पास क्या है?",
        "options": [
          {
            "value": "a paper boat",
            "label": "a paper boat",
            "emoji": "⛵"
          },
          {
            "value": "a cricket bat",
            "label": "a cricket bat",
            "emoji": "🏏"
          },
          {
            "value": "a train",
            "label": "a train",
            "emoji": "🚂"
          }
        ],
        "answer": "a paper boat",
        "speakEn": "What does Mini have?",
        "speakHi": "मिनी के पास क्या है?"
      },
      {
        "type": "mcq",
        "qEn": "What is the weather?",
        "qHi": "मौसम कैसा है?",
        "options": [
          {
            "value": "rain",
            "label": "rain",
            "emoji": "🌧️"
          },
          {
            "value": "hot sun only",
            "label": "hot sun",
            "emoji": "☀️"
          },
          {
            "value": "snow",
            "label": "snow",
            "emoji": "❄️"
          }
        ],
        "answer": "rain",
        "speakEn": "What is the weather?",
        "speakHi": "मौसम कैसा है?"
      },
      {
        "type": "mcq",
        "qEn": "A puddle is…",
        "qHi": "गड्ढा है…",
        "options": [
          {
            "value": "water on the ground",
            "label": "water on the ground"
          },
          {
            "value": "a kind of sweet",
            "label": "a sweet"
          },
          {
            "value": "a school bag",
            "label": "a bag"
          }
        ],
        "answer": "water on the ground",
        "speakEn": "A puddle is…",
        "speakHi": "गड्ढा है…"
      },
      {
        "type": "mcq",
        "qEn": "Why might the boat get wet?",
        "qHi": "नाव क्योंगील हो सकती है?",
        "options": [
          {
            "value": "It is in the rain",
            "label": "it is in the rain"
          },
          {
            "value": "It is in a cupboard",
            "label": "it is in a cupboard"
          },
          {
            "value": "It is in a book",
            "label": "it is in a book"
          }
        ],
        "answer": "It is in the rain",
        "speakEn": "Why might the boat get wet?",
        "speakHi": "नाव क्योंगील हो सकती है?"
      },
      {
        "type": "mcq",
        "qEn": "What might Mini do after the rain?",
        "qHi": "बारिश के बाद मिनी क्या कर सकती है?",
        "options": [
          {
            "value": "dry her feet",
            "label": "dry her feet",
            "emoji": "🦶"
          },
          {
            "value": "swim in the sky",
            "label": "swim in the sky"
          },
          {
            "value": "eat the boat",
            "label": "eat the boat"
          }
        ],
        "answer": "dry her feet",
        "speakEn": "What might Mini do after the rain?",
        "speakHi": "बारिश के बाद मिनी क्या कर सकती है?"
      },
      {
        "type": "mcq",
        "qEn": "The new word 'puddle' means…",
        "qHi": "नया शब्द puddle मतलब…",
        "options": [
          {
            "value": "a small pool of rain",
            "label": "a small pool of rain"
          },
          {
            "value": "a type of mango",
            "label": "a mango"
          },
          {
            "value": "a school bell",
            "label": "a bell"
          }
        ],
        "answer": "a small pool of rain",
        "speakEn": "The new word 'puddle' means…",
        "speakHi": "नया शब्द puddle मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "The new word 'boat' is…",
        "qHi": "नया शब्द boat है…",
        "options": [
          {
            "value": "something that floats",
            "label": "something that floats",
            "emoji": "⛵"
          },
          {
            "value": "a hat",
            "label": "a hat",
            "emoji": "🎩"
          },
          {
            "value": "a number",
            "label": "a number",
            "emoji": "🔢"
          }
        ],
        "answer": "something that floats",
        "speakEn": "The new word 'boat' is…",
        "speakHi": "नया शब्द boat है…"
      },
      {
        "type": "mcq",
        "qEn": "If the rain stops, the puddle might…",
        "qHi": "बारिश रुक जाए तो गड्ढा…",
        "options": [
          {
            "value": "get smaller",
            "label": "get smaller"
          },
          {
            "value": "turn into a cow",
            "label": "turn into a cow"
          },
          {
            "value": "sing",
            "label": "sing"
          }
        ],
        "answer": "get smaller",
        "speakEn": "If the rain stops, the puddle might…",
        "speakHi": "बारिश रुक जाए तो गड्ढा…"
      },
      {
        "type": "mcq",
        "qEn": "Who asked the story questions?",
        "qHi": "कहानी के प्रश्न किसने पूछे?",
        "options": [
          {
            "value": "Chotu",
            "label": "Chotu"
          },
          {
            "value": "the puddle",
            "label": "the puddle"
          },
          {
            "value": "a silent book",
            "label": "a book"
          }
        ],
        "answer": "Chotu",
        "speakEn": "Who asked the story questions?",
        "speakHi": "कहानी के प्रश्न किसने पूछे?"
      },
      {
        "type": "mcq",
        "qEn": "A monsoon story is about…",
        "qHi": "मानसून की कहानी किस बारे में है?",
        "options": [
          {
            "value": "the rainy season",
            "label": "the rainy season"
          },
          {
            "value": "Diwali lamps only",
            "label": "Diwali lamps"
          },
          {
            "value": "the desert",
            "label": "the desert"
          }
        ],
        "answer": "the rainy season",
        "speakEn": "A monsoon story is about…",
        "speakHi": "मानसून की कहानी किस बारे में है?"
      },
      {
        "type": "mcq",
        "qEn": "What should we remember from the story later this week?",
        "qHi": "इस हफ्ते हमें कहानी से क्या याद रखना है?",
        "options": [
          {
            "value": "boat and puddle",
            "label": "boat and puddle"
          },
          {
            "value": "the letter Z",
            "label": "the letter Z"
          },
          {
            "value": "a times table",
            "label": "a times table"
          }
        ],
        "answer": "boat and puddle",
        "speakEn": "What should we remember from the story later this week?",
        "speakHi": "इस हफ्ते हमें कहानी से क्या याद रखना है?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-6",
    "level": "nursery",
    "subject": "english",
    "n": 6,
    "titleEn": "Second letters i, n, m, d, and a revisit",
    "titleHi": "दूसरे अक्षर i, n, m, d, और दोहराई",
    "shortEn": "Build pin, man and sit. Revisit sat and pat.",
    "shortHi": "pin, man, sit बनाओ। sat और pat दोहराओ।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "New sounds: i, n, m, d. Now we can read pin, man and sit. We will also come back to sat.",
      "capHi": "नई ध्वनियाँ: i, n, m, d। अब pin, man और sit पढ़ सकते हैं। sat भी दोहराएँगे।",
      "speakEn": "i, n, m, d. Pin, man, sit. After a little gap, let's also read sat and pat again. That is how we remember.",
      "speakHi": "i, n, m, d। पिन, मैन, सिट। थोड़ी देर बाद sat और pat भी फिर पढ़ते हैं। ऐसे याद रहता है।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Build pin",
        "titleHi": "pin बनाओ",
        "tiles": [
          "p",
          "i",
          "n"
        ],
        "word": "pin",
        "order": [
          "p",
          "i",
          "n"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "Revisit sat",
        "titleHi": "sat दोहराओ",
        "qEn": "After a gap: s-a-t is…",
        "qHi": "अंतराल के बाद: s-a-t है…",
        "options": [
          "sat",
          "sit",
          "man"
        ],
        "answer": "sat"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "p-i-n makes…",
        "qHi": "p-i-n से…",
        "options": [
          "pin",
          "pan",
          "pen"
        ],
        "answer": "pin",
        "speakEn": "p-i-n makes…",
        "speakHi": "p-i-n से…"
      },
      {
        "type": "mcq",
        "qEn": "m-a-n makes…",
        "qHi": "m-a-n से…",
        "options": [
          "man",
          "mat",
          "mad"
        ],
        "answer": "man",
        "speakEn": "m-a-n makes…",
        "speakHi": "m-a-n से…"
      },
      {
        "type": "mcq",
        "qEn": "s-i-t makes…",
        "qHi": "s-i-t से…",
        "options": [
          "sit",
          "sat",
          "sip"
        ],
        "answer": "sit",
        "speakEn": "s-i-t makes…",
        "speakHi": "s-i-t से…"
      },
      {
        "type": "mcq",
        "qEn": "First sound of ink?",
        "qHi": "ink की पहली ध्वनि?",
        "options": [
          "i",
          "a",
          "s"
        ],
        "answer": "i",
        "speakEn": "First sound of ink?",
        "speakHi": "ink की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "First sound of net?",
        "qHi": "net की पहली ध्वनि?",
        "options": [
          "n",
          "m",
          "d"
        ],
        "answer": "n",
        "speakEn": "First sound of net?",
        "speakHi": "net की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "First sound of mango?",
        "qHi": "mango की पहली ध्वनि?",
        "options": [
          "m",
          "n",
          "d"
        ],
        "answer": "m",
        "speakEn": "First sound of mango?",
        "speakHi": "mango की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "First sound of dog?",
        "qHi": "dog की पहली ध्वनि?",
        "options": [
          "d",
          "m",
          "n"
        ],
        "answer": "d",
        "speakEn": "First sound of dog?",
        "speakHi": "dog की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "Revisit: s-a-t is…",
        "qHi": "दोहराई: s-a-t है…",
        "options": [
          "sat",
          "sit",
          "pat"
        ],
        "answer": "sat",
        "speakEn": "Revisit: s-a-t is…",
        "speakHi": "दोहराई: s-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "Revisit: p-a-t is…",
        "qHi": "दोहराई: p-a-t है…",
        "options": [
          "pat",
          "pin",
          "sit"
        ],
        "answer": "pat",
        "speakEn": "Revisit: p-a-t is…",
        "speakHi": "दोहराई: p-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "d-i-p makes…",
        "qHi": "d-i-p से…",
        "options": [
          "dip",
          "dad",
          "pad"
        ],
        "answer": "dip",
        "speakEn": "d-i-p makes…",
        "speakHi": "d-i-p से…"
      },
      {
        "type": "mcq",
        "qEn": "m-a-t makes…",
        "qHi": "m-a-t से…",
        "options": [
          "mat",
          "man",
          "mad"
        ],
        "answer": "mat",
        "speakEn": "m-a-t makes…",
        "speakHi": "m-a-t से…"
      },
      {
        "type": "mcq",
        "qEn": "Which uses the new set: pin or sat?",
        "qHi": "नया समूह कौन सा: pin या sat?",
        "options": [
          "pin",
          "sat"
        ],
        "answer": "pin",
        "speakEn": "Which uses the new set: pin or sat?",
        "speakHi": "नया समूह कौन सा: pin या sat?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-7",
    "level": "nursery",
    "subject": "english",
    "n": 7,
    "titleEn": "Word clusters with a Hindi bridge",
    "titleHi": "शब्द समूह, हिन्दी पुल के साथ",
    "shortEn": "I spy a mango. Aam is mango. Sort food and body.",
    "shortHi": "आम देखो। Aam is mango। भोजन और शरीर छाँटो।",
    "scene": "diwali",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "I spy a mango. Aam is mango. We can sort food words from body words, and keep Diwali sweets too.",
      "capHi": "मुझे आम दिखता है। Aam is mango। भोजन और शरीर के शब्द छाँट सकते हैं, दिवाली की मिठाई भी।",
      "speakEn": "I spy a mango. In Hindi we say aam. Head is sar. Let's sort food words from body words, and remember laddoo from Diwali.",
      "speakHi": "मुझे आम दिखता है। हिन्दी में आम। सिर है head। भोजन और शरीर के शब्द छाँटो, और दिवाली का लड्डू याद रखो।"
    },
    "activities": [
      {
        "type": "match",
        "titleEn": "Hindi to English",
        "titleHi": "हिन्दी से अंग्रेज़ी",
        "pairs": [
          {
            "key": "mango",
            "leftEn": "aam",
            "leftHi": "आम",
            "rightEn": "mango",
            "rightHi": "mango"
          },
          {
            "key": "head",
            "leftEn": "sar",
            "leftHi": "सिर",
            "rightEn": "head",
            "rightHi": "head"
          },
          {
            "key": "laddoo",
            "leftEn": "laddoo",
            "leftHi": "लड्डू",
            "rightEn": "a sweet",
            "rightHi": "मिठाई"
          }
        ]
      },
      {
        "type": "sort",
        "titleEn": "Food or body?",
        "titleHi": "भोजन या शरीर?",
        "groups": [
          {
            "id": "food",
            "en": "Food",
            "hi": "भोजन",
            "items": [
              "mango",
              "laddoo",
              "roti",
              "dal"
            ]
          },
          {
            "id": "body",
            "en": "Body",
            "hi": "शरीर",
            "items": [
              "head",
              "hand",
              "eye",
              "foot"
            ]
          }
        ]
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Aam is…",
        "qHi": "आम है…",
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "head",
            "label": "head",
            "emoji": "🙂"
          },
          {
            "value": "hand",
            "label": "hand",
            "emoji": "✋"
          }
        ],
        "answer": "mango",
        "speakEn": "Aam is…",
        "speakHi": "आम है…"
      },
      {
        "type": "mcq",
        "qEn": "Sar is…",
        "qHi": "सिर है…",
        "options": [
          {
            "value": "head",
            "label": "head"
          },
          {
            "value": "mango",
            "label": "mango"
          },
          {
            "value": "rain",
            "label": "rain"
          }
        ],
        "answer": "head",
        "speakEn": "Sar is…",
        "speakHi": "सिर है…"
      },
      {
        "type": "mcq",
        "qEn": "Which is a food word?",
        "qHi": "कौन सा भोजन शब्द है?",
        "options": [
          {
            "value": "roti",
            "label": "roti",
            "emoji": "🫓"
          },
          {
            "value": "hand",
            "label": "hand",
            "emoji": "✋"
          },
          {
            "value": "eye",
            "label": "eye",
            "emoji": "👁️"
          }
        ],
        "answer": "roti",
        "speakEn": "Which is a food word?",
        "speakHi": "कौन सा भोजन शब्द है?"
      },
      {
        "type": "mcq",
        "qEn": "Which is a body word?",
        "qHi": "कौन सा शरीर शब्द है?",
        "options": [
          {
            "value": "hand",
            "label": "hand",
            "emoji": "✋"
          },
          {
            "value": "dal",
            "label": "dal",
            "emoji": "🍲"
          },
          {
            "value": "laddoo",
            "label": "laddoo",
            "emoji": "🍬"
          }
        ],
        "answer": "hand",
        "speakEn": "Which is a body word?",
        "speakHi": "कौन सा शरीर शब्द है?"
      },
      {
        "type": "mcq",
        "qEn": "A Diwali food word is…",
        "qHi": "दिवाली का भोजन शब्द…",
        "options": [
          {
            "value": "laddoo",
            "label": "laddoo",
            "emoji": "🍬"
          },
          {
            "value": "shoe",
            "label": "shoe",
            "emoji": "👟"
          },
          {
            "value": "cloud",
            "label": "cloud",
            "emoji": "☁️"
          }
        ],
        "answer": "laddoo",
        "speakEn": "A Diwali food word is…",
        "speakHi": "दिवाली का भोजन शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "Haath in English is…",
        "qHi": "हाथ अंग्रेज़ी में…",
        "options": [
          {
            "value": "hand",
            "label": "hand"
          },
          {
            "value": "head",
            "label": "head"
          },
          {
            "value": "hat",
            "label": "hat"
          }
        ],
        "answer": "hand",
        "speakEn": "Haath in English is…",
        "speakHi": "हाथ अंग्रेज़ी में…"
      },
      {
        "type": "mcq",
        "qEn": "Aankh is…",
        "qHi": "आँख है…",
        "options": [
          {
            "value": "eye",
            "label": "eye",
            "emoji": "👁️"
          },
          {
            "value": "ear",
            "label": "ear",
            "emoji": "👂"
          },
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          }
        ],
        "answer": "eye",
        "speakEn": "Aankh is…",
        "speakHi": "आँख है…"
      },
      {
        "type": "mcq",
        "qEn": "Which set does milk belong to?",
        "qHi": "दूध किस समूह में है?",
        "options": [
          {
            "value": "food",
            "label": "food"
          },
          {
            "value": "body",
            "label": "body"
          },
          {
            "value": "weather",
            "label": "weather"
          }
        ],
        "answer": "food",
        "speakEn": "Which set does milk belong to?",
        "speakHi": "दूध किस समूह में है?"
      },
      {
        "type": "mcq",
        "qEn": "Paon is…",
        "qHi": "पाँव है…",
        "options": [
          {
            "value": "foot",
            "label": "foot",
            "emoji": "🦶"
          },
          {
            "value": "hand",
            "label": "hand",
            "emoji": "✋"
          },
          {
            "value": "roti",
            "label": "roti",
            "emoji": "🫓"
          }
        ],
        "answer": "foot",
        "speakEn": "Paon is…",
        "speakHi": "पाँव है…"
      },
      {
        "type": "mcq",
        "qEn": "Family word: mummy is…",
        "qHi": "परिवार: मम्मी है…",
        "options": [
          {
            "value": "mother",
            "label": "mother",
            "emoji": "👩"
          },
          {
            "value": "mango",
            "label": "mango"
          },
          {
            "value": "market",
            "label": "market"
          }
        ],
        "answer": "mother",
        "speakEn": "Family word: mummy is…",
        "speakHi": "परिवार: मम्मी है…"
      },
      {
        "type": "mcq",
        "qEn": "Papa is…",
        "qHi": "पापा है…",
        "options": [
          {
            "value": "father",
            "label": "father",
            "emoji": "👨"
          },
          {
            "value": "foot",
            "label": "foot"
          },
          {
            "value": "pot",
            "label": "pot"
          }
        ],
        "answer": "father",
        "speakEn": "Papa is…",
        "speakHi": "पापा है…"
      },
      {
        "type": "mcq",
        "qEn": "Which does not belong in food?",
        "qHi": "भोजन में क्या नहीं है?",
        "options": [
          {
            "value": "elbow",
            "label": "elbow",
            "emoji": "💪"
          },
          {
            "value": "rice",
            "label": "rice",
            "emoji": "🍚"
          },
          {
            "value": "dal",
            "label": "dal",
            "emoji": "🍲"
          }
        ],
        "answer": "elbow",
        "speakEn": "Which does not belong in food?",
        "speakHi": "भोजन में क्या नहीं है?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-8",
    "level": "nursery",
    "subject": "english",
    "n": 8,
    "logic": true,
    "titleEn": "Picture talk, including a simple why",
    "titleHi": "चित्र बात, एक सरल क्यों सहित",
    "shortEn": "A market picture: who is sad, which bag is heavy, why ice melts.",
    "shortHi": "बाज़ार का चित्र: कौन उदास, कौन सा बैग भारी, बर्फ क्यों पिघलती है।",
    "scene": "market",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Look at the market picture. Who is sad? Which bag is heavy? Why might the ice be melting?",
      "capHi": "बाज़ार का चित्र देखो। कौन उदास है? कौन सा बैग भारी है? बर्फ क्यों पिघल रही होगी?",
      "speakEn": "A picture can ask more than 'what is this'. Who is sad, which bag is heavy, and why might the ice be melting.",
      "speakHi": "चित्र केवल 'यह क्या है' नहीं पूछता। कौन उदास है, कौन सा बैग भारी है, और बर्फ क्यों पिघल रही होगी।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Who is sad?",
        "titleHi": "कौन उदास है?",
        "qEn": "The child’s ice has melted. Who might feel sad?",
        "qHi": "बच्चे की बर्फ पिघल गई। कौन उदास हो सकता है?",
        "options": [
          {
            "value": "the child",
            "label": "the child",
            "emoji": "🧒"
          },
          {
            "value": "the sun",
            "label": "the sun",
            "emoji": "☀️"
          },
          {
            "value": "the bag",
            "label": "the bag",
            "emoji": "👜"
          }
        ],
        "answer": "the child"
      },
      {
        "type": "mcq",
        "titleEn": "Why is the ice melting?",
        "titleHi": "बर्फ क्यों पिघल रही है?",
        "logic": true,
        "qEn": "Why might the ice be melting?",
        "qHi": "बर्फ क्यों पिघल रही होगी?",
        "options": [
          {
            "value": "It is warm",
            "label": "It is warm"
          },
          {
            "value": "The ice is angry",
            "label": "The ice is angry"
          },
          {
            "value": "The bag is singing",
            "label": "The bag is singing"
          }
        ],
        "answer": "It is warm"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Which bag is heavy?",
        "qHi": "कौन सा बैग भारी है?",
        "options": [
          {
            "value": "the full one",
            "label": "the full one",
            "emoji": "👜"
          },
          {
            "value": "the empty one",
            "label": "the empty one"
          },
          {
            "value": "the paper boat",
            "label": "the boat"
          }
        ],
        "answer": "the full one",
        "speakEn": "Which bag is heavy?",
        "speakHi": "कौन सा बैग भारी है?"
      },
      {
        "type": "mcq",
        "qEn": "Why is one bag heavier?",
        "qHi": "एक बैग भारी क्यों है?",
        "options": [
          {
            "value": "It has more things",
            "label": "it has more things"
          },
          {
            "value": "It is red",
            "label": "it is red"
          },
          {
            "value": "It is smiling",
            "label": "it is smiling"
          }
        ],
        "answer": "It has more things",
        "speakEn": "Why is one bag heavier?",
        "speakHi": "एक बैग भारी क्यों है?"
      },
      {
        "type": "mcq",
        "qEn": "Who is selling mangoes?",
        "qHi": "आम कौन बेच रहा है?",
        "options": [
          {
            "value": "the fruit seller",
            "label": "the fruit seller",
            "emoji": "🧑‍🌾"
          },
          {
            "value": "the ice",
            "label": "the ice"
          },
          {
            "value": "a bird",
            "label": "a bird"
          }
        ],
        "answer": "the fruit seller",
        "speakEn": "Who is selling mangoes?",
        "speakHi": "आम कौन बेच रहा है?"
      },
      {
        "type": "mcq",
        "qEn": "If it gets hotter, the ice will…",
        "qHi": "ज़्यादा गर्मी हो तो बर्फ…",
        "options": [
          {
            "value": "melt faster",
            "label": "melt faster"
          },
          {
            "value": "become a stone",
            "label": "become a stone"
          },
          {
            "value": "grow bigger",
            "label": "grow bigger"
          }
        ],
        "answer": "melt faster",
        "speakEn": "If it gets hotter, the ice will…",
        "speakHi": "ज़्यादा गर्मी हो तो बर्फ…"
      },
      {
        "type": "mcq",
        "qEn": "Who might be happy at the market?",
        "qHi": "बाज़ार में कौन खुश हो सकता है?",
        "options": [
          {
            "value": "a child with a mango",
            "label": "a child with a mango"
          },
          {
            "value": "the melted ice",
            "label": "the melted ice"
          },
          {
            "value": "an empty stall",
            "label": "an empty stall"
          }
        ],
        "answer": "a child with a mango",
        "speakEn": "Who might be happy at the market?",
        "speakHi": "बाज़ार में कौन खुश हो सकता है?"
      },
      {
        "type": "mcq",
        "qEn": "A heavy bag is hard to…",
        "qHi": "भारी बैग को… मुश्किल है",
        "options": [
          {
            "value": "lift",
            "label": "lift"
          },
          {
            "value": "see",
            "label": "see"
          },
          {
            "value": "name",
            "label": "name"
          }
        ],
        "answer": "lift",
        "speakEn": "A heavy bag is hard to…",
        "speakHi": "भारी बैग को… मुश्किल है"
      },
      {
        "type": "mcq",
        "qEn": "Why do we ask why?",
        "qHi": "हम क्यों पूछते हैं?",
        "options": [
          {
            "value": "To understand the picture",
            "label": "to understand"
          },
          {
            "value": "To finish the alphabet",
            "label": "to finish the alphabet"
          },
          {
            "value": "To count to 100",
            "label": "to count to 100"
          }
        ],
        "answer": "To understand the picture",
        "speakEn": "Why do we ask why?",
        "speakHi": "हम क्यों पूछते हैं?"
      },
      {
        "type": "mcq",
        "qEn": "The stall has a scale. It is used to…",
        "qHi": "दुकान में तराजू है। यह…",
        "options": [
          {
            "value": "weigh things",
            "label": "weigh things"
          },
          {
            "value": "sing songs",
            "label": "sing songs"
          },
          {
            "value": "paint",
            "label": "paint"
          }
        ],
        "answer": "weigh things",
        "speakEn": "The stall has a scale. It is used to…",
        "speakHi": "दुकान में तराजू है। यह…"
      },
      {
        "type": "mcq",
        "qEn": "If the child smiles, how do they feel?",
        "qHi": "बच्चा मुस्कुराए तो कैसा महसूस करता है?",
        "options": [
          {
            "value": "happy",
            "label": "happy"
          },
          {
            "value": "sleepy only",
            "label": "sleepy only"
          },
          {
            "value": "lost",
            "label": "lost"
          }
        ],
        "answer": "happy",
        "speakEn": "If the child smiles, how do they feel?",
        "speakHi": "बच्चा मुस्कुराए तो कैसा महसूस करता है?"
      },
      {
        "type": "mcq",
        "qEn": "Which clue shows it is a market?",
        "qHi": "बाज़ार होने का संकेत क्या है?",
        "options": [
          {
            "value": "stalls and fruit",
            "label": "stalls and fruit"
          },
          {
            "value": "a bed",
            "label": "a bed"
          },
          {
            "value": "snow",
            "label": "snow"
          }
        ],
        "answer": "stalls and fruit",
        "speakEn": "Which clue shows it is a market?",
        "speakHi": "बाज़ार होने का संकेत क्या है?"
      },
      {
        "type": "mcq",
        "qEn": "The ice was for…",
        "qHi": "बर्फ किसलिए थी?",
        "options": [
          {
            "value": "eating or cooling",
            "label": "eating or cooling"
          },
          {
            "value": "building a wall",
            "label": "building a wall"
          },
          {
            "value": "writing letters",
            "label": "writing letters"
          }
        ],
        "answer": "eating or cooling",
        "speakEn": "The ice was for…",
        "speakHi": "बर्फ किसलिए थी?"
      },
      {
        "type": "mcq",
        "qEn": "A good why-answer uses a reason, such as…",
        "qHi": "अच्छा क्यों-उत्तर कारण बताता है, जैसे…",
        "options": [
          {
            "value": "because it is warm",
            "label": "because it is warm"
          },
          {
            "value": "because I said so",
            "label": "because I said so"
          },
          {
            "value": "because Z comes last",
            "label": "because Z comes last"
          }
        ],
        "answer": "because it is warm",
        "speakEn": "A good why-answer uses a reason, such as…",
        "speakHi": "अच्छा क्यों-उत्तर कारण बताता है, जैसे…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-eng-9",
    "level": "nursery",
    "subject": "english",
    "n": 9,
    "titleEn": "Marks and traces for known sounds",
    "titleHi": "जानी हुई ध्वनियों के निशान और रेखाचित्र",
    "shortEn": "Trace p, and write the first sound of pot.",
    "shortHi": "p का रेखाचित्र, और pot की पहली ध्वनि लिखो।",
    "scene": "school",
    "teach": {
      "pose": "idle",
      "anim": "bob",
      "capEn": "We only trace sounds we can already hear. Pot starts with p. Let's trace p.",
      "capHi": "हम वही ध्वनि लिखते हैं जो पहले से सुन सकते हैं। पॉट p से शुरू होता है। p का रेखाचित्र बनाओ।",
      "speakEn": "We do not race through A to Z. You already know the sound p in pot. Trace p on the slate, then tell me the first sound.",
      "speakHi": "हम A से Z तक दौड़ नहीं लगाते। तुम pot में p की ध्वनि जानते हो। स्लेट पर p बनाओ, फिर पहली ध्वनि बताओ।"
    },
    "activities": [
      {
        "type": "trace",
        "titleEn": "Trace p",
        "titleHi": "p का रेखाचित्र",
        "glyph": "p"
      },
      {
        "type": "mcq",
        "titleEn": "First sound of pot",
        "titleHi": "pot की पहली ध्वनि",
        "qEn": "Pot starts with which sound? Write it in your mind and tap it.",
        "qHi": "पॉट किस ध्वनि से शुरू होता है?",
        "options": [
          "p",
          "s",
          "a"
        ],
        "answer": "p",
        "showEmoji": "🪴"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Trace time: first sound of sun is…",
        "qHi": "sun की पहली ध्वनि…",
        "options": [
          "s",
          "p",
          "t"
        ],
        "answer": "s",
        "speakEn": "Trace time: first sound of sun is…",
        "speakHi": "sun की पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "First sound of ant is…",
        "qHi": "ant की पहली ध्वनि…",
        "options": [
          "a",
          "s",
          "p"
        ],
        "answer": "a",
        "speakEn": "First sound of ant is…",
        "speakHi": "ant की पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "First sound of tap is…",
        "qHi": "tap की पहली ध्वनि…",
        "options": [
          "t",
          "p",
          "s"
        ],
        "answer": "t",
        "speakEn": "First sound of tap is…",
        "speakHi": "tap की पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "First sound of pin is…",
        "qHi": "pin की पहली ध्वनि…",
        "options": [
          "p",
          "s",
          "i"
        ],
        "answer": "p",
        "speakEn": "First sound of pin is…",
        "speakHi": "pin की पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "We trace letters we can already…",
        "qHi": "हम वे अक्षर लिखते हैं जो पहले से…",
        "options": [
          {
            "value": "hear",
            "label": "hear"
          },
          {
            "value": "ignore",
            "label": "ignore"
          },
          {
            "value": "sing only",
            "label": "sing only"
          }
        ],
        "answer": "hear",
        "speakEn": "We trace letters we can already…",
        "speakHi": "हम वे अक्षर लिखते हैं जो पहले से…"
      },
      {
        "type": "mcq",
        "qEn": "Which mark is for sss?",
        "qHi": "sss का निशान?",
        "options": [
          "s",
          "p",
          "d"
        ],
        "answer": "s",
        "speakEn": "Which mark is for sss?",
        "speakHi": "sss का निशान?"
      },
      {
        "type": "mcq",
        "qEn": "Which mark is for p?",
        "qHi": "p का निशान?",
        "options": [
          "p",
          "m",
          "a"
        ],
        "answer": "p",
        "speakEn": "Which mark is for p?",
        "speakHi": "p का निशान?"
      },
      {
        "type": "mcq",
        "qEn": "Sit starts with…",
        "qHi": "sit शुरू होता है…",
        "options": [
          "s",
          "i",
          "t"
        ],
        "answer": "s",
        "speakEn": "Sit starts with…",
        "speakHi": "sit शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "Man starts with…",
        "qHi": "man शुरू होता है…",
        "options": [
          "m",
          "n",
          "a"
        ],
        "answer": "m",
        "speakEn": "Man starts with…",
        "speakHi": "man शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "Do we write Z today if we have not learned it yet?",
        "qHi": "Z आज लिखें अगर अभी नहीं सीखा?",
        "options": [
          {
            "value": "no",
            "label": "No"
          },
          {
            "value": "yes",
            "label": "Yes"
          }
        ],
        "answer": "no",
        "speakEn": "Do we write Z today if we have not learned it yet?",
        "speakHi": "Z आज लिखें अगर अभी नहीं सीखा?"
      },
      {
        "type": "mcq",
        "qEn": "Pot ends with…",
        "qHi": "pot खत्म होता है…",
        "options": [
          "t",
          "p",
          "o"
        ],
        "answer": "t",
        "speakEn": "Pot ends with…",
        "speakHi": "pot खत्म होता है…"
      },
      {
        "type": "mcq",
        "qEn": "A meaningful mark shows a sound you know, like…",
        "qHi": "सार्थक निशान जानी हुई ध्वनि दिखाता है, जैसे…",
        "options": [
          "p",
          "q",
          "x"
        ],
        "answer": "p",
        "speakEn": "A meaningful mark shows a sound you know, like…",
        "speakHi": "सार्थक निशान जानी हुई ध्वनि दिखाता है, जैसे…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-eng-10",
    "level": "nursery",
    "subject": "english",
    "n": 10,
    "logic": true,
    "titleEn": "Mastery week: listen, rhyme, words, story",
    "titleHi": "महारत सप्ताह: सुनना, तुक, शब्द, कहानी",
    "shortEn": "A mixed check after a gap.",
    "shortHi": "अंतराल के बाद मिली-जुली जाँच।",
    "scene": "home",
    "teach": {
      "pose": "jump",
      "anim": "jump",
      "capEn": "After a gap, we mix it up: sounds, rhymes, sat or pin, and a story question.",
      "capHi": "अंतराल के बाद सब मिलाकर: ध्वनियाँ, तुक, sat या pin, और कहानी का प्रश्न।",
      "speakEn": "This is our mastery week. We listen, we rhyme, we read a first word, and we answer a story question. Ready?",
      "speakHi": "यह महारत का सप्ताह है। हम सुनते हैं, तुक मिलाते हैं, पहला शब्द पढ़ते हैं, और कहानी का प्रश्न पूछते हैं। तैयार?"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Mixed: rhyme",
        "titleHi": "मिश्रित: तुक",
        "qEn": "Which does not rhyme: cat, hat, mango?",
        "qHi": "कौन सा तुक नहीं: cat, hat, mango?",
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "hat",
            "label": "hat",
            "emoji": "🎩"
          }
        ],
        "answer": "mango"
      },
      {
        "type": "word-build",
        "titleEn": "Build sat again",
        "titleHi": "sat फिर बनाओ",
        "tiles": [
          "s",
          "a",
          "t"
        ],
        "word": "sat",
        "order": [
          "s",
          "a",
          "t"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "Story remember",
        "titleHi": "कहानी याद",
        "qEn": "Mini had a paper boat in the…",
        "qHi": "मिनी के पास कागज़ की नाव थी…",
        "options": [
          {
            "value": "rain / puddle",
            "label": "rain / puddle",
            "emoji": "🌧️"
          },
          {
            "value": "desert",
            "label": "desert",
            "emoji": "🏜️"
          },
          {
            "value": "cupboard",
            "label": "cupboard",
            "emoji": "🚪"
          }
        ],
        "answer": "rain / puddle"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A market bell is…",
        "qHi": "बाज़ार की घंटी है…",
        "options": [
          {
            "value": "an environmental sound",
            "label": "an environmental sound"
          },
          {
            "value": "the letter Z",
            "label": "the letter Z"
          },
          {
            "value": "a number bond",
            "label": "a number bond"
          }
        ],
        "answer": "an environmental sound",
        "speakEn": "A market bell is…",
        "speakHi": "बाज़ार की घंटी है…"
      },
      {
        "type": "mcq",
        "qEn": "cat rhymes with…",
        "qHi": "cat से तुक…",
        "options": [
          "hat",
          "sun",
          "aam"
        ],
        "answer": "hat",
        "speakEn": "cat rhymes with…",
        "speakHi": "cat से तुक…"
      },
      {
        "type": "mcq",
        "qEn": "c-a-t blends to…",
        "qHi": "c-a-t जुड़कर…",
        "options": [
          "cat",
          "cap",
          "cot"
        ],
        "answer": "cat",
        "speakEn": "c-a-t blends to…",
        "speakHi": "c-a-t जुड़कर…"
      },
      {
        "type": "mcq",
        "qEn": "s-a-t is…",
        "qHi": "s-a-t है…",
        "options": [
          "sat",
          "sit",
          "pat"
        ],
        "answer": "sat",
        "speakEn": "s-a-t is…",
        "speakHi": "s-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "p-i-n is…",
        "qHi": "p-i-n है…",
        "options": [
          "pin",
          "pan",
          "pen"
        ],
        "answer": "pin",
        "speakEn": "p-i-n is…",
        "speakHi": "p-i-n है…"
      },
      {
        "type": "mcq",
        "qEn": "Aam is…",
        "qHi": "आम है…",
        "options": [
          "mango",
          "head",
          "bell"
        ],
        "answer": "mango",
        "speakEn": "Aam is…",
        "speakHi": "आम है…"
      },
      {
        "type": "mcq",
        "qEn": "Why might ice melt at the market?",
        "qHi": "बाज़ार में बर्फ क्यों पिघले?",
        "options": [
          {
            "value": "It is warm",
            "label": "it is warm"
          },
          {
            "value": "It is shy",
            "label": "it is shy"
          },
          {
            "value": "It is blue",
            "label": "it is blue"
          }
        ],
        "answer": "It is warm",
        "speakEn": "Why might ice melt at the market?",
        "speakHi": "बाज़ार में बर्फ क्यों पिघले?"
      },
      {
        "type": "mcq",
        "qEn": "First sound of pot?",
        "qHi": "pot की पहली ध्वनि?",
        "options": [
          "p",
          "s",
          "a"
        ],
        "answer": "p",
        "speakEn": "First sound of pot?",
        "speakHi": "pot की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "How many claps in ma-chh-li?",
        "qHi": "म-छ-ली में तालियाँ?",
        "options": [
          "3",
          "1",
          "5"
        ],
        "answer": "3",
        "speakEn": "How many claps in ma-chh-li?",
        "speakHi": "म-छ-ली में तालियाँ?"
      },
      {
        "type": "mcq",
        "qEn": "Mini's boat might…",
        "qHi": "मिनी की नाव…",
        "options": [
          {
            "value": "float",
            "label": "float"
          },
          {
            "value": "bake",
            "label": "bake"
          },
          {
            "value": "read",
            "label": "read"
          }
        ],
        "answer": "float",
        "speakEn": "Mini's boat might…",
        "speakHi": "मिनी की नाव…"
      },
      {
        "type": "mcq",
        "qEn": "Which is a body word?",
        "qHi": "शरीर का शब्द?",
        "options": [
          "hand",
          "laddoo",
          "roti"
        ],
        "answer": "hand",
        "speakEn": "Which is a body word?",
        "speakHi": "शरीर का शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "We started with listening, not…",
        "qHi": "हमने सुनने से शुरू किया, नहीं…",
        "options": [
          {
            "value": "A to Z first",
            "label": "A to Z first"
          },
          {
            "value": "a story",
            "label": "a story"
          },
          {
            "value": "a clap",
            "label": "a clap"
          }
        ],
        "answer": "A to Z first",
        "speakEn": "We started with listening, not…",
        "speakHi": "हमने सुनने से शुरू किया, नहीं…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-math-1",
    "level": "nursery",
    "subject": "maths",
    "n": 1,
    "logic": true,
    "titleEn": "Sort, classify, odd one out",
    "titleHi": "छाँटो, वर्गीकृत करो, अलग ढूँढो",
    "shortEn": "A banana in a set of cups — say why.",
    "shortHi": "कपों में केला — बताओ क्यों।",
    "scene": "home",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Which does not belong? A banana in a set of cups. Tell me why.",
      "capHi": "कौन सा मेल नहीं खाता? कपों में एक केला। बताओ क्यों।",
      "speakEn": "Sorting is not only by colour. Look: cup, cup, banana, cup. The banana does not belong, because it is not a cup.",
      "speakHi": "छाँटना केवल रंग से नहीं। देखो: कप, कप, केला, कप। केला अलग है, क्योंकि वह कप नहीं है।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Odd one out",
        "titleHi": "अलग कौन",
        "qEn": "Cups, cups, banana, cups. Which does not belong, and think why.",
        "qHi": "कप, कप, केला, कप। कौन सा अलग है? क्यों सोचो।",
        "showEmoji": "☕☕🍌☕",
        "options": [
          {
            "value": "banana",
            "label": "banana",
            "emoji": "🍌"
          },
          {
            "value": "cup",
            "label": "cup",
            "emoji": "☕"
          }
        ],
        "answer": "banana"
      },
      {
        "type": "sort",
        "titleEn": "Sort fruit and cups",
        "titleHi": "फल और कप छाँटो",
        "groups": [
          {
            "id": "fruit",
            "en": "Fruit",
            "hi": "फल",
            "items": [
              "banana",
              "mango",
              "apple"
            ]
          },
          {
            "id": "cup",
            "en": "Cups",
            "hi": "कप",
            "items": [
              "tea cup",
              "steel cup",
              "mug"
            ]
          }
        ]
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Which does not belong: 🐶 🐶 🐱 🐶?",
        "qHi": "कौन सा अलग: 🐶 🐶 🐱 🐶?",
        "options": [
          {
            "value": "cat",
            "label": "cat",
            "emoji": "🐱"
          },
          {
            "value": "dog",
            "label": "dog",
            "emoji": "🐶"
          }
        ],
        "answer": "cat",
        "speakEn": "Which does not belong: 🐶 🐶 🐱 🐶?",
        "speakHi": "कौन सा अलग: 🐶 🐶 🐱 🐶?"
      },
      {
        "type": "mcq",
        "qEn": "Why is the banana the odd one?",
        "qHi": "केला क्यों अलग है?",
        "options": [
          {
            "value": "It is not a cup",
            "label": "it is not a cup"
          },
          {
            "value": "It is yellow only",
            "label": "it is yellow only"
          },
          {
            "value": "It is big",
            "label": "it is big"
          }
        ],
        "answer": "It is not a cup",
        "speakEn": "Why is the banana the odd one?",
        "speakHi": "केला क्यों अलग है?"
      },
      {
        "type": "mcq",
        "qEn": "Which does not belong: 👟 👡 🧢 🥾?",
        "qHi": "कौन सा अलग?",
        "options": [
          {
            "value": "cap",
            "label": "cap",
            "emoji": "🧢"
          },
          {
            "value": "shoe",
            "label": "shoe",
            "emoji": "👟"
          }
        ],
        "answer": "cap",
        "speakEn": "Which does not belong: 👟 👡 🧢 🥾?",
        "speakHi": "कौन सा अलग?"
      },
      {
        "type": "mcq",
        "qEn": "Which is not a fruit?",
        "qHi": "कौन सा फल नहीं?",
        "options": [
          {
            "value": "car",
            "label": "car",
            "emoji": "🚗"
          },
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "banana",
            "label": "banana",
            "emoji": "🍌"
          }
        ],
        "answer": "car",
        "speakEn": "Which is not a fruit?",
        "speakHi": "कौन सा फल नहीं?"
      },
      {
        "type": "mcq",
        "qEn": "Sort: roti belongs with…",
        "qHi": "रोटी किसके साथ?",
        "options": [
          {
            "value": "food",
            "label": "food"
          },
          {
            "value": "shoes",
            "label": "shoes"
          },
          {
            "value": "cups only",
            "label": "cups only"
          }
        ],
        "answer": "food",
        "speakEn": "Sort: roti belongs with…",
        "speakHi": "रोटी किसके साथ?"
      },
      {
        "type": "mcq",
        "qEn": "Three red beads and one blue bead. Odd one?",
        "qHi": "तीन लाल, एक नीला। अलग?",
        "options": [
          {
            "value": "blue",
            "label": "blue",
            "emoji": "🔵"
          },
          {
            "value": "red",
            "label": "red",
            "emoji": "🔴"
          }
        ],
        "answer": "blue",
        "speakEn": "Three red beads and one blue bead. Odd one?",
        "speakHi": "तीन लाल, एक नीला। अलग?"
      },
      {
        "type": "mcq",
        "qEn": "A reason must say…",
        "qHi": "कारण बताए…",
        "options": [
          {
            "value": "why it is different",
            "label": "why it is different"
          },
          {
            "value": "only the colour you like",
            "label": "a favourite colour"
          },
          {
            "value": "nothing",
            "label": "nothing"
          }
        ],
        "answer": "why it is different",
        "speakEn": "A reason must say…",
        "speakHi": "कारण बताए…"
      },
      {
        "type": "mcq",
        "qEn": "Which set is all animals?",
        "qHi": "सभी जानवर कौन से?",
        "options": [
          {
            "value": "cow, cat, dog",
            "label": "cow, cat, dog"
          },
          {
            "value": "cow, cup, dog",
            "label": "cow, cup, dog"
          },
          {
            "value": "bell, cat, dog",
            "label": "bell, cat, dog"
          }
        ],
        "answer": "cow, cat, dog",
        "speakEn": "Which set is all animals?",
        "speakHi": "सभी जानवर कौन से?"
      },
      {
        "type": "mcq",
        "qEn": "Laddoo, peda, plate — odd one?",
        "qHi": "लड्डू, पेड़ा, प्लेट — अलग?",
        "options": [
          {
            "value": "plate",
            "label": "plate"
          },
          {
            "value": "laddoo",
            "label": "laddoo"
          },
          {
            "value": "peda",
            "label": "peda"
          }
        ],
        "answer": "plate",
        "speakEn": "Laddoo, peda, plate — odd one?",
        "speakHi": "लड्डू, पेड़ा, प्लेट — अलग?"
      },
      {
        "type": "mcq",
        "qEn": "We classify when we…",
        "qHi": "वर्गीकरण तब जब हम…",
        "options": [
          {
            "value": "put like things together",
            "label": "put like things together"
          },
          {
            "value": "count to 20 only",
            "label": "count to 20"
          },
          {
            "value": "trace Z",
            "label": "trace Z"
          }
        ],
        "answer": "put like things together",
        "speakEn": "We classify when we…",
        "speakHi": "वर्गीकरण तब जब हम…"
      },
      {
        "type": "mcq",
        "qEn": "Sun, moon, mango — which is food?",
        "qHi": "सूरज, चाँद, आम — भोजन कौन?",
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          },
          {
            "value": "moon",
            "label": "moon",
            "emoji": "🌙"
          }
        ],
        "answer": "mango",
        "speakEn": "Sun, moon, mango — which is food?",
        "speakHi": "सूरज, चाँद, आम — भोजन कौन?"
      },
      {
        "type": "mcq",
        "qEn": "Odd one: ⭐ ⭐ 🌙 ⭐. Why?",
        "qHi": "अलग: ⭐ ⭐ 🌙 ⭐। क्यों?",
        "options": [
          {
            "value": "The moon is not a star",
            "label": "the moon is not a star"
          },
          {
            "value": "It is night",
            "label": "it is night"
          },
          {
            "value": "It is small",
            "label": "it is small"
          }
        ],
        "answer": "The moon is not a star",
        "speakEn": "Odd one: ⭐ ⭐ 🌙 ⭐. Why?",
        "speakHi": "अलग: ⭐ ⭐ 🌙 ⭐। क्यों?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-math-2",
    "level": "nursery",
    "subject": "maths",
    "n": 2,
    "titleEn": "Subitise 2, 3, 4 and a five-frame",
    "titleHi": "झट से 2, 3, 4 और पाँच-फ्रेम",
    "shortEn": "Flash 3 laddoos. Don't count first. How do you know?",
    "shortHi": "3 लड्डू दिखाओ। पहले मत गिनो। कैसे पता?",
    "scene": "diwali",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Look first. Three laddoos. You can see three without counting one-by-one.",
      "capHi": "पहले देखो। तीन लड्डू। एक-एक गिने बिना तीन दिख सकते हैं।",
      "speakEn": "This is subitising. Look quickly at three laddoos. Don't count yet. Then check on a five-frame. How do you know it is three?",
      "speakHi": "यह झट से पहचान है। तीन लड्डू जल्दी देखो। अभी मत गिनो। फिर पाँच-फ्रेम पर जाँचो। कैसे पता कि तीन हैं?"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Flash three",
        "titleHi": "तीन झलक",
        "qEn": "Look quickly. How many laddoos? Don't count one by one.",
        "qHi": "जल्दी देखो। कितने लड्डू? एक-एक मत गिनो।",
        "objects": {
          "n": 3,
          "emoji": "🍬"
        },
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3"
      },
      {
        "type": "ten-frame",
        "titleEn": "Check on a five-frame",
        "titleHi": "पाँच-फ्रेम पर जाँचो",
        "filled": 3,
        "qEn": "Three are filled on a five-frame. How many empty spaces?",
        "qHi": "पाँच-फ्रेम पर तीन भरे हैं। कितने खाली?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": "2"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Look quickly: 🥭🥭. How many?",
        "qHi": "जल्दी देखो: 🥭🥭। कितने?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "2",
        "speakEn": "Look quickly: 🥭🥭. How many?",
        "speakHi": "जल्दी देखो: 🥭🥭। कितने?",
        "objects": {
          "n": 2,
          "emoji": "🥭"
        }
      },
      {
        "type": "mcq",
        "qEn": "Look quickly: 🍬🍬🍬🍬. How many?",
        "qHi": "जल्दी देखो। कितने?",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": "4",
        "speakEn": "Look quickly: 🍬🍬🍬🍬. How many?",
        "speakHi": "जल्दी देखो। कितने?",
        "objects": {
          "n": 4,
          "emoji": "🍬"
        }
      },
      {
        "type": "mcq",
        "qEn": "A five-frame has how many spaces?",
        "qHi": "पाँच-फ्रेम में कितने स्थान?",
        "options": [
          "5",
          "10",
          "2"
        ],
        "answer": "5",
        "speakEn": "A five-frame has how many spaces?",
        "speakHi": "पाँच-फ्रेम में कितने स्थान?"
      },
      {
        "type": "mcq",
        "qEn": "Three filled on a five-frame. Empty spaces?",
        "qHi": "पाँच-फ्रेम पर तीन भरे। खाली?",
        "options": [
          "2",
          "3",
          "5"
        ],
        "answer": "2",
        "speakEn": "Three filled on a five-frame. Empty spaces?",
        "speakHi": "पाँच-फ्रेम पर तीन भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "Four filled on a five-frame. Empty?",
        "qHi": "चार भरे। खाली?",
        "options": [
          "1",
          "2",
          "4"
        ],
        "answer": "1",
        "speakEn": "Four filled on a five-frame. Empty?",
        "speakHi": "चार भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "How do you know it is two? A good reason is…",
        "qHi": "दो कैसे पता? अच्छा कारण…",
        "options": [
          {
            "value": "I can see both at once",
            "label": "I can see both at once"
          },
          {
            "value": "I guessed",
            "label": "I guessed"
          },
          {
            "value": "It is red",
            "label": "It is red"
          }
        ],
        "answer": "I can see both at once",
        "speakEn": "How do you know it is two? A good reason is…",
        "speakHi": "दो कैसे पता? अच्छा कारण…"
      },
      {
        "type": "mcq",
        "qEn": "Look: 🪔🪔🪔. How many diyas?",
        "qHi": "देखो। कितने दीये?",
        "options": [
          "3",
          "2",
          "5"
        ],
        "answer": "3",
        "speakEn": "Look: 🪔🪔🪔. How many diyas?",
        "speakHi": "देखो। कितने दीये?",
        "objects": {
          "n": 3,
          "emoji": "🪔"
        }
      },
      {
        "type": "mcq",
        "qEn": "Five filled on a five-frame is…",
        "qHi": "पाँच-फ्रेम पर पाँच भरे हैं…",
        "options": [
          {
            "value": "full",
            "label": "full"
          },
          {
            "value": "empty",
            "label": "empty"
          },
          {
            "value": "more than 10",
            "label": "more than 10"
          }
        ],
        "answer": "full",
        "speakEn": "Five filled on a five-frame is…",
        "speakHi": "पाँच-फ्रेम पर पाँच भरे हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Subitise means…",
        "qHi": "झट से पहचान मतलब…",
        "options": [
          {
            "value": "see how many without counting one by one",
            "label": "see how many without counting one by one"
          },
          {
            "value": "write 100",
            "label": "write 100"
          },
          {
            "value": "sing the alphabet",
            "label": "sing the alphabet"
          }
        ],
        "answer": "see how many without counting one by one",
        "speakEn": "Subitise means…",
        "speakHi": "झट से पहचान मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "1 and 1 more is…",
        "qHi": "1 और 1 और है…",
        "options": [
          "2",
          "3",
          "0"
        ],
        "answer": "2",
        "speakEn": "1 and 1 more is…",
        "speakHi": "1 और 1 और है…"
      },
      {
        "type": "mcq",
        "qEn": "Look quickly: one mango. How many?",
        "qHi": "एक आम। कितने?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "answer": "1",
        "speakEn": "Look quickly: one mango. How many?",
        "speakHi": "एक आम। कितने?",
        "objects": {
          "n": 1,
          "emoji": "🥭"
        }
      },
      {
        "type": "mcq",
        "qEn": "Two and one more is…",
        "qHi": "दो और एक और…",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": "3",
        "speakEn": "Two and one more is…",
        "speakHi": "दो और एक और…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-3",
    "level": "nursery",
    "subject": "maths",
    "n": 3,
    "titleEn": "Numbers 1 to 5, objects then pictures then numerals",
    "titleHi": "1 से 5, वस्तु, चित्र, फिर अंक",
    "shortEn": "Make 4 with mangoes, match a picture, write 4.",
    "shortHi": "4 आम बनाओ, चित्र मिलाओ, 4 लिखो।",
    "scene": "market",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Make 4 with mangoes. Then see a picture of 4. Then the numeral 4. How do you know it is 4?",
      "capHi": "4 आम बनाओ। फिर 4 का चित्र देखो। फिर अंक 4। कैसे पता कि 4 है?",
      "speakEn": "First objects, then pictures, then the written number. Four mangoes, a picture of four, and the numeral 4. Tell me how you know.",
      "speakHi": "पहले वस्तु, फिर चित्र, फिर लिखा अंक। चार आम, चार का चित्र, और अंक 4। बताओ कैसे पता।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Make 4",
        "titleHi": "4 बनाओ",
        "qEn": "Here are mangoes. Which numeral matches this picture?",
        "qHi": "ये आम हैं। कौन सा अंक मिलता है?",
        "objects": {
          "n": 4,
          "emoji": "🥭"
        },
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": "4"
      },
      {
        "type": "trace",
        "titleEn": "Write 4",
        "titleHi": "4 लिखो",
        "glyph": "4"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "🥭 is how many?",
        "qHi": "🥭 कितने?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "answer": "1",
        "speakEn": "🥭 is how many?",
        "speakHi": "🥭 कितने?",
        "objects": {
          "n": 1,
          "emoji": "🥭"
        }
      },
      {
        "type": "mcq",
        "qEn": "🥭🥭 is…",
        "qHi": "🥭🥭 है…",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": "2",
        "speakEn": "🥭🥭 is…",
        "speakHi": "🥭🥭 है…",
        "objects": {
          "n": 2,
          "emoji": "🥭"
        }
      },
      {
        "type": "mcq",
        "qEn": "Three mangoes match the numeral…",
        "qHi": "तीन आम किस अंक से?",
        "options": [
          "3",
          "5",
          "2"
        ],
        "answer": "3",
        "speakEn": "Three mangoes match the numeral…",
        "speakHi": "तीन आम किस अंक से?",
        "objects": {
          "n": 3,
          "emoji": "🥭"
        }
      },
      {
        "type": "mcq",
        "qEn": "The numeral 5 matches…",
        "qHi": "अंक 5 मिलता है…",
        "options": [
          {
            "value": "five mangoes",
            "label": "five mangoes"
          },
          {
            "value": "two mangoes",
            "label": "two mangoes"
          },
          {
            "value": "zero mangoes",
            "label": "zero mangoes"
          }
        ],
        "answer": "five mangoes",
        "speakEn": "The numeral 5 matches…",
        "speakHi": "अंक 5 मिलता है…"
      },
      {
        "type": "mcq",
        "qEn": "2 and 2 more is…",
        "qHi": "2 और 2 और…",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": "4",
        "speakEn": "2 and 2 more is…",
        "speakHi": "2 और 2 और…"
      },
      {
        "type": "mcq",
        "qEn": "Which numeral is four?",
        "qHi": "चार कौन सा अंक है?",
        "options": [
          "4",
          "5",
          "1"
        ],
        "answer": "4",
        "speakEn": "Which numeral is four?",
        "speakHi": "चार कौन सा अंक है?"
      },
      {
        "type": "mcq",
        "qEn": "CPA means we start with…",
        "qHi": "CPA में शुरू करते हैं…",
        "options": [
          {
            "value": "real objects",
            "label": "real objects"
          },
          {
            "value": "only writing numbers",
            "label": "only writing numbers"
          },
          {
            "value": "only songs",
            "label": "only songs"
          }
        ],
        "answer": "real objects",
        "speakEn": "CPA means we start with…",
        "speakHi": "CPA में शुरू करते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "How do you know it is 4? A good reason…",
        "qHi": "4 कैसे पता?",
        "options": [
          {
            "value": "I can see four mangoes",
            "label": "I can see four mangoes"
          },
          {
            "value": "I like the colour",
            "label": "I like the colour"
          },
          {
            "value": "It is the letter A",
            "label": "It is the letter A"
          }
        ],
        "answer": "I can see four mangoes",
        "speakEn": "How do you know it is 4? A good reason…",
        "speakHi": "4 कैसे पता?"
      },
      {
        "type": "mcq",
        "qEn": "One less than 5 is…",
        "qHi": "5 से एक कम…",
        "options": [
          "4",
          "6",
          "1"
        ],
        "answer": "4",
        "speakEn": "One less than 5 is…",
        "speakHi": "5 से एक कम…"
      },
      {
        "type": "mcq",
        "qEn": "One more than 3 is…",
        "qHi": "3 से एक अधिक…",
        "options": [
          "4",
          "2",
          "5"
        ],
        "answer": "4",
        "speakEn": "One more than 3 is…",
        "speakHi": "3 से एक अधिक…"
      },
      {
        "type": "mcq",
        "qEn": "The picture of 2 mangoes is the…",
        "qHi": "2 आम का चित्र है…",
        "options": [
          {
            "value": "pictorial step",
            "label": "pictorial step"
          },
          {
            "value": "last alphabet",
            "label": "last alphabet"
          },
          {
            "value": "a rhyme only",
            "label": "a rhyme only"
          }
        ],
        "answer": "pictorial step",
        "speakEn": "The picture of 2 mangoes is the…",
        "speakHi": "2 आम का चित्र है…"
      },
      {
        "type": "mcq",
        "qEn": "Numeral for five is…",
        "qHi": "पाँच का अंक…",
        "options": [
          "5",
          "2",
          "s"
        ],
        "answer": "5",
        "speakEn": "Numeral for five is…",
        "speakHi": "पाँच का अंक…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-4",
    "level": "nursery",
    "subject": "maths",
    "n": 4,
    "titleEn": "Numbers 6 to 10 on a ten-frame",
    "titleHi": "दस-फ्रेम पर 6 से 10",
    "shortEn": "7 diyas. How many empty? Why is 7 more than 5?",
    "shortHi": "7 दीये। कितने खाली? 7, 5 से बड़ा क्यों?",
    "scene": "diwali",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Seven diyas on a ten-frame. How many empty spaces? How do you know 7 is more than 5?",
      "capHi": "दस-फ्रेम पर सात दीये। कितने खाली? कैसे पता 7, 5 से बड़ा है?",
      "speakEn": "A ten-frame has ten spaces. Seven diyas are filled, so three are empty. Seven is more than five because two more diyas were added.",
      "speakHi": "दस-फ्रेम में दस स्थान हैं। सात दीये भरे हैं, तीन खाली। सात, पाँच से बड़ा है क्योंकि दो दीये और जुड़े।"
    },
    "activities": [
      {
        "type": "ten-frame",
        "titleEn": "Seven diyas",
        "titleHi": "सात दीये",
        "filled": 7,
        "qEn": "7 are filled. How many empty spaces on the ten-frame?",
        "qHi": "7 भरे हैं। दस-फ्रेम पर कितने खाली?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3"
      },
      {
        "type": "mcq",
        "titleEn": "Why is 7 more than 5?",
        "titleHi": "7, 5 से बड़ा क्यों?",
        "qEn": "How do you know 7 is more than 5?",
        "qHi": "कैसे पता 7, 5 से बड़ा है?",
        "options": [
          {
            "value": "7 has two more than 5",
            "label": "7 has two more than 5"
          },
          {
            "value": "7 is a prettier number",
            "label": "7 is prettier"
          },
          {
            "value": "5 is red",
            "label": "5 is red"
          }
        ],
        "answer": "7 has two more than 5"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "6 filled. Empty spaces?",
        "qHi": "6 भरे। खाली?",
        "options": [
          "4",
          "3",
          "6"
        ],
        "answer": "4",
        "speakEn": "6 filled. Empty spaces?",
        "speakHi": "6 भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "8 filled. Empty?",
        "qHi": "8 भरे। खाली?",
        "options": [
          "2",
          "3",
          "8"
        ],
        "answer": "2",
        "speakEn": "8 filled. Empty?",
        "speakHi": "8 भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "9 filled. Empty?",
        "qHi": "9 भरे। खाली?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "answer": "1",
        "speakEn": "9 filled. Empty?",
        "speakHi": "9 भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "10 filled. Empty?",
        "qHi": "10 भरे। खाली?",
        "options": [
          "0",
          "1",
          "10"
        ],
        "answer": "0",
        "speakEn": "10 filled. Empty?",
        "speakHi": "10 भरे। खाली?"
      },
      {
        "type": "mcq",
        "qEn": "A full ten-frame is the number…",
        "qHi": "पूरा दस-फ्रेम संख्या…",
        "options": [
          "10",
          "5",
          "7"
        ],
        "answer": "10",
        "speakEn": "A full ten-frame is the number…",
        "speakHi": "पूरा दस-फ्रेम संख्या…"
      },
      {
        "type": "mcq",
        "qEn": "Which is more, 8 or 6?",
        "qHi": "कौन बड़ा, 8 या 6?",
        "options": [
          "8",
          "6"
        ],
        "answer": "8",
        "speakEn": "Which is more, 8 or 6?",
        "speakHi": "कौन बड़ा, 8 या 6?"
      },
      {
        "type": "mcq",
        "qEn": "How many more is 8 than 6?",
        "qHi": "8, 6 से कितना अधिक?",
        "options": [
          "2",
          "1",
          "4"
        ],
        "answer": "2",
        "speakEn": "How many more is 8 than 6?",
        "speakHi": "8, 6 से कितना अधिक?"
      },
      {
        "type": "mcq",
        "qEn": "7 is more than 5 because…",
        "qHi": "7, 5 से बड़ा क्योंकि…",
        "options": [
          {
            "value": "it has two more",
            "label": "it has two more"
          },
          {
            "value": "it comes first in the alphabet",
            "label": "it comes first"
          },
          {
            "value": "it is yellow",
            "label": "it is yellow"
          }
        ],
        "answer": "it has two more",
        "speakEn": "7 is more than 5 because…",
        "speakHi": "7, 5 से बड़ा क्योंकि…"
      },
      {
        "type": "mcq",
        "qEn": "5 filled is half of a ten-frame. True?",
        "qHi": "5 भरे = आधा दस-फ्रेम। सही?",
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ],
        "answer": "yes",
        "speakEn": "5 filled is half of a ten-frame. True?",
        "speakHi": "5 भरे = आधा दस-फ्रेम। सही?"
      },
      {
        "type": "mcq",
        "qEn": "6 and 4 more make…",
        "qHi": "6 और 4 और…",
        "options": [
          "10",
          "9",
          "8"
        ],
        "answer": "10",
        "speakEn": "6 and 4 more make…",
        "speakHi": "6 और 4 और…"
      },
      {
        "type": "mcq",
        "qEn": "Which is less, 6 or 9?",
        "qHi": "कौन छोटा, 6 या 9?",
        "options": [
          "6",
          "9"
        ],
        "answer": "6",
        "speakEn": "Which is less, 6 or 9?",
        "speakHi": "कौन छोटा, 6 या 9?"
      },
      {
        "type": "mcq",
        "qEn": "Show 10: a full ten-frame has…",
        "qHi": "10 दिखाओ: पूरा फ्रेम…",
        "options": [
          {
            "value": "no empty spaces",
            "label": "no empty spaces"
          },
          {
            "value": "three empty",
            "label": "three empty"
          },
          {
            "value": "one mango",
            "label": "one mango"
          }
        ],
        "answer": "no empty spaces",
        "speakEn": "Show 10: a full ten-frame has…",
        "speakHi": "10 दिखाओ: पूरा फ्रेम…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-5",
    "level": "nursery",
    "subject": "maths",
    "n": 5,
    "titleEn": "Shapes in real life and a puzzle",
    "titleHi": "रोज़ के आकार और पहेली",
    "shortEn": "A roti is a circle. Why does a puzzle piece fit?",
    "shortHi": "रोटी गोल है। टुकड़ा क्यों फिट होता है?",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "A roti is a circle. A book is a rectangle. A piece fits when the shape matches the hole.",
      "capHi": "रोटी गोल है। किताब आयत है। टुकड़ा तब फिट होता है जब आकार मिलता है।",
      "speakEn": "Find the roti as a circle. A puzzle piece fits because its shape matches the space.",
      "speakHi": "रोटी को गोला खोजो। पहेली का टुकड़ा इसलिए फिट होता है क्योंकि आकार जगह से मिलता है।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Find the circle",
        "titleHi": "गोला ढूँढो",
        "qEn": "Which is a circle, like a roti?",
        "qHi": "रोटी जैसा गोला कौन सा है?",
        "options": [
          {
            "value": "roti",
            "label": "roti",
            "emoji": "🫓"
          },
          {
            "value": "book",
            "label": "book",
            "emoji": "📘"
          },
          {
            "value": "door",
            "label": "door",
            "emoji": "🚪"
          }
        ],
        "answer": "roti"
      },
      {
        "type": "mcq",
        "titleEn": "Why does it fit?",
        "titleHi": "यह फिट क्यों होता है?",
        "qEn": "Why does a puzzle piece fit?",
        "qHi": "पहेली का टुकड़ा फिट क्यों होता है?",
        "options": [
          {
            "value": "The shape matches the hole",
            "label": "The shape matches the hole"
          },
          {
            "value": "It is red",
            "label": "It is red"
          },
          {
            "value": "It is heavy",
            "label": "It is heavy"
          }
        ],
        "answer": "The shape matches the hole"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A clock face is often a…",
        "qHi": "घड़ी का चेहरा अक्सर…",
        "options": [
          "circle",
          "rectangle",
          "triangle"
        ],
        "answer": "circle",
        "speakEn": "A clock face is often a…",
        "speakHi": "घड़ी का चेहरा अक्सर…"
      },
      {
        "type": "mcq",
        "qEn": "A door is more like a…",
        "qHi": "दरवाज़ा अधिक…",
        "options": [
          "rectangle",
          "circle",
          "star"
        ],
        "answer": "rectangle",
        "speakEn": "A door is more like a…",
        "speakHi": "दरवाज़ा अधिक…"
      },
      {
        "type": "mcq",
        "qEn": "A roti is a…",
        "qHi": "रोटी है…",
        "options": [
          "circle",
          "triangle",
          "square"
        ],
        "answer": "circle",
        "speakEn": "A roti is a…",
        "speakHi": "रोटी है…"
      },
      {
        "type": "mcq",
        "qEn": "A triangle has how many sides?",
        "qHi": "त्रिभुज की भुजाएँ?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": "3",
        "speakEn": "A triangle has how many sides?",
        "speakHi": "त्रिभुज की भुजाएँ?"
      },
      {
        "type": "mcq",
        "qEn": "A square has sides that are…",
        "qHi": "वर्ग की भुजाएँ…",
        "options": [
          {
            "value": "all the same",
            "label": "all the same"
          },
          {
            "value": "all different",
            "label": "all different"
          }
        ],
        "answer": "all the same",
        "speakEn": "A square has sides that are…",
        "speakHi": "वर्ग की भुजाएँ…"
      },
      {
        "type": "mcq",
        "qEn": "A ball is like a…",
        "qHi": "गेंद जैसी…",
        "options": [
          {
            "value": "sphere",
            "label": "sphere"
          },
          {
            "value": "box",
            "label": "box"
          }
        ],
        "answer": "sphere",
        "speakEn": "A ball is like a…",
        "speakHi": "गेंद जैसी…"
      },
      {
        "type": "mcq",
        "qEn": "Which shape does not belong: circle, circle, square?",
        "qHi": "कौन सा आकार अलग?",
        "options": [
          {
            "value": "the square",
            "label": "the square"
          },
          {
            "value": "a circle",
            "label": "a circle"
          }
        ],
        "answer": "the square",
        "speakEn": "Which shape does not belong: circle, circle, square?",
        "speakHi": "कौन सा आकार अलग?"
      },
      {
        "type": "mcq",
        "qEn": "A book cover is usually a…",
        "qHi": "किताब का कवर…",
        "options": [
          "rectangle",
          "circle",
          "triangle"
        ],
        "answer": "rectangle",
        "speakEn": "A book cover is usually a…",
        "speakHi": "किताब का कवर…"
      },
      {
        "type": "mcq",
        "qEn": "The hole is a triangle. Which piece fits?",
        "qHi": "छेद त्रिभुज है। कौन फिट?",
        "options": [
          {
            "value": "triangle piece",
            "label": "triangle piece"
          },
          {
            "value": "circle piece",
            "label": "circle piece"
          }
        ],
        "answer": "triangle piece",
        "speakEn": "The hole is a triangle. Which piece fits?",
        "speakHi": "छेद त्रिभुज है। कौन फिट?"
      },
      {
        "type": "mcq",
        "qEn": "The cat is _____ the table.",
        "qHi": "बिल्ली मेज़ के _____ है।",
        "options": [
          "under",
          "singing",
          "blue"
        ],
        "answer": "under",
        "speakEn": "The cat is _____ the table.",
        "speakHi": "बिल्ली मेज़ के _____ है।"
      },
      {
        "type": "mcq",
        "qEn": "The lamp is _____ the table.",
        "qHi": "लैंप मेज़ के _____ है।",
        "options": [
          "on",
          "eating",
          "five"
        ],
        "answer": "on",
        "speakEn": "The lamp is _____ the table.",
        "speakHi": "लैंप मेज़ के _____ है।"
      },
      {
        "type": "mcq",
        "qEn": "We name shapes and also say…",
        "qHi": "आकार कहते हैं और यह भी…",
        "options": [
          {
            "value": "why a piece fits",
            "label": "why a piece fits"
          },
          {
            "value": "only A to Z",
            "label": "only A to Z"
          }
        ],
        "answer": "why a piece fits",
        "speakEn": "We name shapes and also say…",
        "speakHi": "आकार कहते हैं और यह भी…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-6",
    "level": "nursery",
    "subject": "maths",
    "n": 6,
    "titleEn": "Compare length and weight",
    "titleHi": "लंबाई और वजन की तुलना",
    "shortEn": "Which banana is longer? Which bag is heavier?",
    "shortHi": "कौन सा केला लंबा? कौन सा बैग भारी?",
    "scene": "market",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Put two bananas side by side. Which is longer? Which bag is heavier?",
      "capHi": "दो केले साथ रखो। कौन सा लंबा? कौन सा बैग भारी?",
      "speakEn": "We compare directly, side by side. The longer banana sticks out further. The heavier bag is harder to lift.",
      "speakHi": "हम साथ रखकर तुलना करते हैं। लंबा केला आगे निकला दिखता है। भारी बैग उठाना कठिन है।"
    },
    "activities": [
      {
        "type": "compare",
        "titleEn": "Which is longer?",
        "titleHi": "कौन सा लंबा?",
        "items": [
          {
            "id": "long",
            "en": "this banana",
            "hi": "यह केला",
            "emoji": "🍌",
            "size": 4,
            "color": "#f4c430"
          },
          {
            "id": "short",
            "en": "that banana",
            "hi": "वह केला",
            "emoji": "🍌",
            "size": 2,
            "color": "#f4c430"
          }
        ],
        "answer": "long",
        "qEn": "Which banana is longer?",
        "qHi": "कौन सा केला लंबा है?"
      },
      {
        "type": "mcq",
        "titleEn": "Which bag is heavier?",
        "titleHi": "कौन सा बैग भारी?",
        "qEn": "A full bag and an empty bag. Which is heavier?",
        "qHi": "भरा बैग और खाली बैग। कौन भारी?",
        "options": [
          {
            "value": "the full bag",
            "label": "the full bag",
            "emoji": "👜"
          },
          {
            "value": "the empty bag",
            "label": "the empty bag"
          }
        ],
        "answer": "the full bag"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "To compare length we should…",
        "qHi": "लंबाई की तुलना के लिए…",
        "options": [
          {
            "value": "put them side by side",
            "label": "put them side by side"
          },
          {
            "value": "look from very far only",
            "label": "look from far only"
          }
        ],
        "answer": "put them side by side",
        "speakEn": "To compare length we should…",
        "speakHi": "लंबाई की तुलना के लिए…"
      },
      {
        "type": "mcq",
        "qEn": "A bag with books is usually _____ than an empty bag.",
        "qHi": "किताबों वाला बैग खाली बैग से…",
        "options": [
          "heavier",
          "lighter"
        ],
        "answer": "heavier",
        "speakEn": "A bag with books is usually _____ than an empty bag.",
        "speakHi": "किताबों वाला बैग खाली बैग से…"
      },
      {
        "type": "mcq",
        "qEn": "Which is longer, a skipping rope or a crayon?",
        "qHi": "कौन लंबा, रस्सी या क्रेयॉन?",
        "options": [
          {
            "value": "the rope",
            "label": "the rope"
          },
          {
            "value": "the crayon",
            "label": "the crayon"
          }
        ],
        "answer": "the rope",
        "speakEn": "Which is longer, a skipping rope or a crayon?",
        "speakHi": "कौन लंबा, रस्सी या क्रेयॉन?"
      },
      {
        "type": "mcq",
        "qEn": "Which is shorter, a stub or a new pencil?",
        "qHi": "कौन छोटा, छोटा टुकड़ा या नई पेंसिल?",
        "options": [
          {
            "value": "the stub",
            "label": "the stub"
          },
          {
            "value": "the new pencil",
            "label": "the new pencil"
          }
        ],
        "answer": "the stub",
        "speakEn": "Which is shorter, a stub or a new pencil?",
        "speakHi": "कौन छोटा, छोटा टुकड़ा या नई पेंसिल?"
      },
      {
        "type": "mcq",
        "qEn": "Heavy things are harder to…",
        "qHi": "भारी चीज़ें… मुश्किल हैं",
        "options": [
          "lift",
          "name",
          "rhyme"
        ],
        "answer": "lift",
        "speakEn": "Heavy things are harder to…",
        "speakHi": "भारी चीज़ें… मुश्किल हैं"
      },
      {
        "type": "mcq",
        "qEn": "A balloon is usually _____ than a brick.",
        "qHi": "गुब्बारा ईंट से आमतौर पर…",
        "options": [
          "lighter",
          "heavier"
        ],
        "answer": "lighter",
        "speakEn": "A balloon is usually _____ than a brick.",
        "speakHi": "गुब्बारा ईंट से आमतौर पर…"
      },
      {
        "type": "mcq",
        "qEn": "A railway track is _____ than a pencil.",
        "qHi": "रेल की पटरी पेंसिल से…",
        "options": [
          "longer",
          "shorter"
        ],
        "answer": "longer",
        "speakEn": "A railway track is _____ than a pencil.",
        "speakHi": "रेल की पटरी पेंसिल से…"
      },
      {
        "type": "mcq",
        "qEn": "Two bags look the same size. How do you tell which is heavier?",
        "qHi": "दो बैग एक जैसे दिखें तो भारी कौन?",
        "options": [
          {
            "value": "Try lifting both",
            "label": "Try lifting both"
          },
          {
            "value": "Only look at the colour",
            "label": "Only look at colour"
          }
        ],
        "answer": "Try lifting both",
        "speakEn": "Two bags look the same size. How do you tell which is heavier?",
        "speakHi": "दो बैग एक जैसे दिखें तो भारी कौन?"
      },
      {
        "type": "mcq",
        "qEn": "The word longer is about…",
        "qHi": "लंबा शब्द किस बारे में?",
        "options": [
          "length",
          "colour",
          "rhyme"
        ],
        "answer": "length",
        "speakEn": "The word longer is about…",
        "speakHi": "लंबा शब्द किस बारे में?"
      },
      {
        "type": "mcq",
        "qEn": "The word heavier is about…",
        "qHi": "भारी शब्द किस बारे में?",
        "options": [
          "weight",
          "alphabet",
          "time"
        ],
        "answer": "weight",
        "speakEn": "The word heavier is about…",
        "speakHi": "भारी शब्द किस बारे में?"
      },
      {
        "type": "mcq",
        "qEn": "A baby spoon is _____ than a serving spoon.",
        "qHi": "बच्चे की चम्मच परोसने वाली से…",
        "options": [
          "shorter",
          "longer"
        ],
        "answer": "shorter",
        "speakEn": "A baby spoon is _____ than a serving spoon.",
        "speakHi": "बच्चे की चम्मच परोसने वाली से…"
      },
      {
        "type": "mcq",
        "qEn": "Direct comparison means…",
        "qHi": "सीधी तुलना मतलब…",
        "options": [
          {
            "value": "next to each other",
            "label": "next to each other"
          },
          {
            "value": "with a calculator only",
            "label": "with a calculator only"
          }
        ],
        "answer": "next to each other",
        "speakEn": "Direct comparison means…",
        "speakHi": "सीधी तुलना मतलब…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-7",
    "level": "nursery",
    "subject": "maths",
    "n": 7,
    "logic": true,
    "titleEn": "Patterns, and find the mistake",
    "titleHi": "पैटर्न, और गलती ढूँढो",
    "shortEn": "Mango, leaf, mango, leaf, banana — what is wrong?",
    "shortHi": "आम, पत्ता, आम, पत्ता, केला — क्या गलत है?",
    "scene": "market",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Mango, leaf, mango, leaf, banana. What is wrong? What should come next?",
      "capHi": "आम, पत्ता, आम, पत्ता, केला। क्या गलत है? आगे क्या होना चाहिए?",
      "speakEn": "Copying a pattern is good. Spotting a mistake is thinking. The rule was mango, leaf. Banana should not be there.",
      "speakHi": "पैटर्न दोहराना अच्छा है। गलती ढूँढना सोच है। नियम था आम, पत्ता। केला नहीं होना चाहिए।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Find the mistake",
        "titleHi": "गलती ढूँढो",
        "qEn": "Mango, leaf, mango, leaf, banana. What is wrong?",
        "qHi": "आम, पत्ता, आम, पत्ता, केला। क्या गलत?",
        "pattern": [
          "🥭",
          "🍃",
          "🥭",
          "🍃",
          "🍌"
        ],
        "options": [
          {
            "value": "banana should be a leaf",
            "label": "banana should be a leaf"
          },
          {
            "value": "mango is wrong every time",
            "label": "mango is wrong every time"
          }
        ],
        "answer": "banana should be a leaf"
      },
      {
        "type": "mcq",
        "titleEn": "What comes next?",
        "titleHi": "आगे क्या?",
        "qEn": "Mango, leaf, mango, leaf, …",
        "qHi": "आम, पत्ता, आम, पत्ता, …",
        "pattern": [
          "🥭",
          "🍃",
          "🥭",
          "🍃",
          "?"
        ],
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "leaf",
            "label": "leaf",
            "emoji": "🍃"
          },
          {
            "value": "banana",
            "label": "banana",
            "emoji": "🍌"
          }
        ],
        "answer": "mango"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Star, moon, star, moon. Next?",
        "qHi": "तारा, चाँद, तारा, चाँद। आगे?",
        "options": [
          {
            "value": "star",
            "label": "star",
            "emoji": "⭐"
          },
          {
            "value": "sun",
            "label": "sun",
            "emoji": "☀️"
          }
        ],
        "answer": "star",
        "speakEn": "Star, moon, star, moon. Next?",
        "speakHi": "तारा, चाँद, तारा, चाँद। आगे?"
      },
      {
        "type": "mcq",
        "qEn": "Red, red, blue. Next if the rule is two red then blue?",
        "qHi": "लाल, लाल, नीला। आगे?",
        "options": [
          {
            "value": "blue",
            "label": "blue",
            "emoji": "🔵"
          },
          {
            "value": "red",
            "label": "red",
            "emoji": "🔴"
          }
        ],
        "answer": "blue",
        "speakEn": "Red, red, blue. Next if the rule is two red then blue?",
        "speakHi": "लाल, लाल, नीला। आगे?"
      },
      {
        "type": "mcq",
        "qEn": "ABAB means the rule is…",
        "qHi": "ABAB मतलब नियम…",
        "options": [
          {
            "value": "two things take turns",
            "label": "two things take turns"
          },
          {
            "value": "all the same",
            "label": "all the same"
          }
        ],
        "answer": "two things take turns",
        "speakEn": "ABAB means the rule is…",
        "speakHi": "ABAB मतलब नियम…"
      },
      {
        "type": "mcq",
        "qEn": "Find the mistake: star, moon, star, apple.",
        "qHi": "गलती: तारा, चाँद, तारा, सेब।",
        "options": [
          {
            "value": "the apple",
            "label": "the apple"
          },
          {
            "value": "the first star",
            "label": "the first star"
          }
        ],
        "answer": "the apple",
        "speakEn": "Find the mistake: star, moon, star, apple.",
        "speakHi": "गलती: तारा, चाँद, तारा, सेब।"
      },
      {
        "type": "mcq",
        "qEn": "Two lamps then a flower. After two lamps comes…",
        "qHi": "दो दीये फिर फूल। दो दीयों के बाद…",
        "options": [
          {
            "value": "a flower",
            "label": "a flower",
            "emoji": "🌸"
          },
          {
            "value": "a lamp",
            "label": "a lamp",
            "emoji": "🪔"
          }
        ],
        "answer": "a flower",
        "speakEn": "Two lamps then a flower. After two lamps comes…",
        "speakHi": "दो दीये फिर फूल। दो दीयों के बाद…"
      },
      {
        "type": "mcq",
        "qEn": "Clap, jump, clap, jump. The rule is…",
        "qHi": "ताली, कूद, ताली, कूद। नियम…",
        "options": [
          {
            "value": "clap then jump, again and again",
            "label": "clap then jump, again and again"
          },
          {
            "value": "only clap",
            "label": "only clap"
          }
        ],
        "answer": "clap then jump, again and again",
        "speakEn": "Clap, jump, clap, jump. The rule is…",
        "speakHi": "ताली, कूद, ताली, कूद। नियम…"
      },
      {
        "type": "mcq",
        "qEn": "A mistake is a place where…",
        "qHi": "गलती वहाँ जहाँ…",
        "options": [
          {
            "value": "the rule is broken",
            "label": "the rule is broken"
          },
          {
            "value": "the colour is pretty",
            "label": "the colour is pretty"
          }
        ],
        "answer": "the rule is broken",
        "speakEn": "A mistake is a place where…",
        "speakHi": "गलती वहाँ जहाँ…"
      },
      {
        "type": "mcq",
        "qEn": "Green, yellow, green, yellow. Next is…",
        "qHi": "हरा, पीला, हरा, पीला। आगे…",
        "options": [
          {
            "value": "green",
            "label": "green",
            "emoji": "🟢"
          },
          {
            "value": "blue",
            "label": "blue",
            "emoji": "🔵"
          }
        ],
        "answer": "green",
        "speakEn": "Green, yellow, green, yellow. Next is…",
        "speakHi": "हरा, पीला, हरा, पीला। आगे…"
      },
      {
        "type": "mcq",
        "qEn": "If banana is in the leaf's place we should…",
        "qHi": "पत्ते की जगह केला हो तो…",
        "options": [
          {
            "value": "fix it and say the rule",
            "label": "fix it and say the rule"
          },
          {
            "value": "ignore it",
            "label": "ignore it"
          }
        ],
        "answer": "fix it and say the rule",
        "speakEn": "If banana is in the leaf's place we should…",
        "speakHi": "पत्ते की जगह केला हो तो…"
      },
      {
        "type": "mcq",
        "qEn": "1, 2, 1, 2. Next?",
        "qHi": "1, 2, 1, 2। आगे?",
        "options": [
          "1",
          "3",
          "5"
        ],
        "answer": "1",
        "speakEn": "1, 2, 1, 2. Next?",
        "speakHi": "1, 2, 1, 2। आगे?"
      },
      {
        "type": "mcq",
        "qEn": "A, B, A, B, C. The mistake is…",
        "qHi": "A, B, A, B, C। गलती है…",
        "options": [
          "C",
          "A",
          "B"
        ],
        "answer": "C",
        "speakEn": "A, B, A, B, C. The mistake is…",
        "speakHi": "A, B, A, B, C। गलती है…"
      },
      {
        "type": "mcq",
        "qEn": "We find mistakes to practise…",
        "qHi": "गलती ढूँढते हैं ताकि…",
        "options": [
          {
            "value": "thinking",
            "label": "thinking"
          },
          {
            "value": "skipping maths",
            "label": "skipping maths"
          }
        ],
        "answer": "thinking",
        "speakEn": "We find mistakes to practise…",
        "speakHi": "गलती ढूँढते हैं ताकि…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-math-8",
    "level": "nursery",
    "subject": "maths",
    "n": 8,
    "titleEn": "Number bonds within 5",
    "titleHi": "5 तक के जोड़, भाग-पूरा",
    "shortEn": "5 pedas, 2 on this plate. How many are hiding?",
    "shortHi": "5 पेड़े, इस थाली में 2। कितने छुपे हैं?",
    "scene": "diwali",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Five pedas in all. Two on this plate. How many are hiding? How do you know?",
      "capHi": "कुल पाँच पेड़े। इस थाली में दो। कितने छुपे? कैसे पता?",
      "speakEn": "This is a number bond. Five is the whole. Two is a part. The hiding part is three, because two and three make five.",
      "speakHi": "यह जोड़ है। पाँच पूरा है। दो एक भाग है। छुपा भाग तीन है, क्योंकि दो और तीन मिलकर पाँच।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "How many are hiding?",
        "titleHi": "कितने छुपे हैं?",
        "qEn": "5 pedas in all, 2 on the plate. How many are hiding?",
        "qHi": "कुल 5 पेड़े, थाली में 2। कितने छुपे?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3"
      },
      {
        "type": "mcq",
        "titleEn": "How do you know?",
        "titleHi": "कैसे पता?",
        "qEn": "How do you know 2 and 3 make 5?",
        "qHi": "कैसे पता 2 और 3 मिलकर 5 हैं?",
        "options": [
          {
            "value": "2 and 3 together are the whole 5",
            "label": "2 and 3 together are the whole 5"
          },
          {
            "value": "Because 5 is my favourite",
            "label": "Because 5 is my favourite"
          }
        ],
        "answer": "2 and 3 together are the whole 5"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Whole is 5, one part is 1. Other part?",
        "qHi": "पूरा 5, एक भाग 1। दूसरा?",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": "4",
        "speakEn": "Whole is 5, one part is 1. Other part?",
        "speakHi": "पूरा 5, एक भाग 1। दूसरा?"
      },
      {
        "type": "mcq",
        "qEn": "Whole is 5, one part is 4. Other part?",
        "qHi": "पूरा 5, एक भाग 4। दूसरा?",
        "options": [
          "1",
          "2",
          "4"
        ],
        "answer": "1",
        "speakEn": "Whole is 5, one part is 4. Other part?",
        "speakHi": "पूरा 5, एक भाग 4। दूसरा?"
      },
      {
        "type": "mcq",
        "qEn": "Whole is 5, one part is 0. Other part?",
        "qHi": "पूरा 5, एक भाग 0। दूसरा?",
        "options": [
          "5",
          "0",
          "4"
        ],
        "answer": "5",
        "speakEn": "Whole is 5, one part is 0. Other part?",
        "speakHi": "पूरा 5, एक भाग 0। दूसरा?"
      },
      {
        "type": "mcq",
        "qEn": "Whole is 4, one part is 2. Other part?",
        "qHi": "पूरा 4, एक भाग 2। दूसरा?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": "2",
        "speakEn": "Whole is 4, one part is 2. Other part?",
        "speakHi": "पूरा 4, एक भाग 2। दूसरा?"
      },
      {
        "type": "mcq",
        "qEn": "Whole is 3, one part is 1. Other part?",
        "qHi": "पूरा 3, एक भाग 1। दूसरा?",
        "options": [
          "2",
          "3",
          "0"
        ],
        "answer": "2",
        "speakEn": "Whole is 3, one part is 1. Other part?",
        "speakHi": "पूरा 3, एक भाग 1। दूसरा?"
      },
      {
        "type": "mcq",
        "qEn": "3 and 2 make…",
        "qHi": "3 और 2…",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": "5",
        "speakEn": "3 and 2 make…",
        "speakHi": "3 और 2…"
      },
      {
        "type": "mcq",
        "qEn": "1 and 4 make…",
        "qHi": "1 और 4…",
        "options": [
          "5",
          "3",
          "4"
        ],
        "answer": "5",
        "speakEn": "1 and 4 make…",
        "speakHi": "1 और 4…"
      },
      {
        "type": "mcq",
        "qEn": "A part-whole idea is about…",
        "qHi": "भाग-पूरा विचार…",
        "options": [
          {
            "value": "parts that make a whole",
            "label": "parts that make a whole"
          },
          {
            "value": "only colouring",
            "label": "only colouring"
          }
        ],
        "answer": "parts that make a whole",
        "speakEn": "A part-whole idea is about…",
        "speakHi": "भाग-पूरा विचार…"
      },
      {
        "type": "mcq",
        "qEn": "5 is 5 and how many hiding?",
        "qHi": "5 है 5 और कितने छुपे?",
        "options": [
          "0",
          "1",
          "5"
        ],
        "answer": "0",
        "speakEn": "5 is 5 and how many hiding?",
        "speakHi": "5 है 5 और कितने छुपे?"
      },
      {
        "type": "mcq",
        "qEn": "2 and what make 5?",
        "qHi": "2 और क्या = 5?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": "3",
        "speakEn": "2 and what make 5?",
        "speakHi": "2 और क्या = 5?"
      },
      {
        "type": "mcq",
        "qEn": "4 and what make 5?",
        "qHi": "4 और क्या = 5?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "answer": "1",
        "speakEn": "4 and what make 5?",
        "speakHi": "4 और क्या = 5?"
      },
      {
        "type": "mcq",
        "qEn": "Bonds within 5 go up to the whole…",
        "qHi": "5 तक के जोड़ पूरे होते हैं…",
        "options": [
          "5",
          "10",
          "20"
        ],
        "answer": "5",
        "speakEn": "Bonds within 5 go up to the whole…",
        "speakHi": "5 तक के जोड़ पूरे होते हैं…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-9",
    "level": "nursery",
    "subject": "maths",
    "n": 9,
    "titleEn": "Join and take away within 5",
    "titleHi": "5 तक जोड़ना और घटाना",
    "shortEn": "4 laddoos, eat 1. How many left, and why?",
    "shortHi": "4 लड्डू, 1 खाया। कितने बचे, और क्यों?",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Four laddoos. Eat one. How many are left? Tell Chotu why.",
      "capHi": "चार लड्डू। एक खाओ। कितने बचे? छोटू को क्यों बताओ।",
      "speakEn": "We join and take away with objects only. Four laddoos, eat one, three are left, because one went away from four.",
      "speakHi": "हम वस्तुओं से जोड़ते और घटाते हैं। चार लड्डू, एक खाया, तीन बचे, क्योंकि चार में से एक गया।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Eat one laddoo",
        "titleHi": "एक लड्डू खाओ",
        "qEn": "4 laddoos, eat 1. How many left?",
        "qHi": "4 लड्डू, 1 खाया। कितने बचे?",
        "objects": {
          "n": 4,
          "emoji": "🍬"
        },
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "3"
      },
      {
        "type": "mcq",
        "titleEn": "Why?",
        "titleHi": "क्यों?",
        "qEn": "Why are 3 left?",
        "qHi": "3 क्यों बचे?",
        "options": [
          {
            "value": "One was eaten, so 4 minus 1 is 3",
            "label": "One was eaten, so 4 minus 1 is 3"
          },
          {
            "value": "Because laddoos are sweet",
            "label": "Because they are sweet"
          }
        ],
        "answer": "One was eaten, so 4 minus 1 is 3"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "2 mangoes and 1 more. How many?",
        "qHi": "2 आम और 1 और। कितने?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": "3",
        "speakEn": "2 mangoes and 1 more. How many?",
        "speakHi": "2 आम और 1 और। कितने?"
      },
      {
        "type": "mcq",
        "qEn": "3 and 2 more make…",
        "qHi": "3 और 2 और…",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": "5",
        "speakEn": "3 and 2 more make…",
        "speakHi": "3 और 2 और…"
      },
      {
        "type": "mcq",
        "qEn": "5 birds, 1 flies away. Left?",
        "qHi": "5 पक्षी, 1 उड़ गया। बचे?",
        "options": [
          "4",
          "5",
          "3"
        ],
        "answer": "4",
        "speakEn": "5 birds, 1 flies away. Left?",
        "speakHi": "5 पक्षी, 1 उड़ गया। बचे?"
      },
      {
        "type": "mcq",
        "qEn": "1 and 1 join to make…",
        "qHi": "1 और 1 जुड़कर…",
        "options": [
          "2",
          "0",
          "3"
        ],
        "answer": "2",
        "speakEn": "1 and 1 join to make…",
        "speakHi": "1 और 1 जुड़कर…"
      },
      {
        "type": "mcq",
        "qEn": "4, take away 2. Left?",
        "qHi": "4, 2 कम। बचे?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": "2",
        "speakEn": "4, take away 2. Left?",
        "speakHi": "4, 2 कम। बचे?"
      },
      {
        "type": "mcq",
        "qEn": "3, take away 3. Left?",
        "qHi": "3, 3 कम। बचे?",
        "options": [
          "0",
          "1",
          "3"
        ],
        "answer": "0",
        "speakEn": "3, take away 3. Left?",
        "speakHi": "3, 3 कम। बचे?"
      },
      {
        "type": "mcq",
        "qEn": "0 and 4 make…",
        "qHi": "0 और 4…",
        "options": [
          "4",
          "0",
          "5"
        ],
        "answer": "4",
        "speakEn": "0 and 4 make…",
        "speakHi": "0 और 4…"
      },
      {
        "type": "mcq",
        "qEn": "We explain take-away by saying…",
        "qHi": "घटाना समझाते हुए कहें…",
        "options": [
          {
            "value": "what went away and what is left",
            "label": "what went away and what is left"
          },
          {
            "value": "only a random number",
            "label": "only a random number"
          }
        ],
        "answer": "what went away and what is left",
        "speakEn": "We explain take-away by saying…",
        "speakHi": "घटाना समझाते हुए कहें…"
      },
      {
        "type": "mcq",
        "qEn": "2 cups, add 2 cups. All together?",
        "qHi": "2 कप, 2 और। कुल?",
        "options": [
          "4",
          "2",
          "5"
        ],
        "answer": "4",
        "speakEn": "2 cups, add 2 cups. All together?",
        "speakHi": "2 कप, 2 और। कुल?"
      },
      {
        "type": "mcq",
        "qEn": "5, take away 4. Left?",
        "qHi": "5, 4 कम। बचे?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "answer": "1",
        "speakEn": "5, take away 4. Left?",
        "speakHi": "5, 4 कम। बचे?"
      },
      {
        "type": "mcq",
        "qEn": "Join means…",
        "qHi": "जोड़ना मतलब…",
        "options": [
          {
            "value": "put together",
            "label": "put together"
          },
          {
            "value": "take away",
            "label": "take away"
          }
        ],
        "answer": "put together",
        "speakEn": "Join means…",
        "speakHi": "जोड़ना मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "Take away means…",
        "qHi": "घटाना मतलब…",
        "options": [
          {
            "value": "some go away",
            "label": "some go away"
          },
          {
            "value": "always add ten",
            "label": "always add ten"
          }
        ],
        "answer": "some go away",
        "speakEn": "Take away means…",
        "speakHi": "घटाना मतलब…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "nursery-math-10",
    "level": "nursery",
    "subject": "maths",
    "n": 10,
    "logic": true,
    "titleEn": "Mixed mastery and a logic puzzle",
    "titleHi": "मिश्रित महारत और तर्क पहेली",
    "shortEn": "After a gap: subitise, 1 to 10, a broken pattern, compare plates.",
    "shortHi": "अंतराल बाद: झट से पहचान, 1 से 10, टूटा पैटर्न, थालियाँ।",
    "scene": "home",
    "teach": {
      "pose": "jump",
      "anim": "jump",
      "capEn": "After a gap we mix it: a quick look, numbers to 10, a broken pattern, and two plates to compare.",
      "capHi": "अंतराल बाद सब मिलाकर: झट से देखो, 10 तक संख्या, टूटा पैटर्न, और दो थालियाँ।",
      "speakEn": "Mastery week. Look quickly, use a ten-frame, fix a pattern, and say which plate has more.",
      "speakHi": "महारत सप्ताह। जल्दी देखो, दस-फ्रेम इस्तेमाल करो, पैटर्न ठीक करो, और कहो किस थाली में अधिक हैं।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Subitise again",
        "titleHi": "फिर झट से देखो",
        "qEn": "Look quickly. How many?",
        "qHi": "जल्दी देखो। कितने?",
        "objects": {
          "n": 3,
          "emoji": "🥭"
        },
        "options": [
          "2",
          "3",
          "5"
        ],
        "answer": "3"
      },
      {
        "type": "mcq",
        "titleEn": "Broken pattern",
        "titleHi": "टूटा पैटर्न",
        "qEn": "Mango, leaf, mango, banana. What is wrong?",
        "qHi": "आम, पत्ता, आम, केला। क्या गलत?",
        "pattern": [
          "🥭",
          "🍃",
          "🥭",
          "🍌"
        ],
        "options": [
          {
            "value": "banana should be a leaf",
            "label": "banana should be a leaf"
          },
          {
            "value": "mango is always wrong",
            "label": "mango is always wrong"
          }
        ],
        "answer": "banana should be a leaf"
      },
      {
        "type": "mcq",
        "titleEn": "Compare plates",
        "titleHi": "थालियाँ तुलना",
        "qEn": "One plate has 4 laddoos, one has 2. Which has more?",
        "qHi": "एक थाली में 4, एक में 2। किसमें अधिक?",
        "options": [
          {
            "value": "the plate with 4",
            "label": "the plate with 4"
          },
          {
            "value": "the plate with 2",
            "label": "the plate with 2"
          }
        ],
        "answer": "the plate with 4"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Look quickly: two sweets. How many?",
        "qHi": "जल्दी: दो मिठाई। कितने?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "answer": "2",
        "speakEn": "Look quickly: two sweets. How many?",
        "speakHi": "जल्दी: दो मिठाई। कितने?"
      },
      {
        "type": "mcq",
        "qEn": "7 on a ten-frame, empty spaces?",
        "qHi": "दस-फ्रेम पर 7, खाली?",
        "options": [
          "3",
          "2",
          "7"
        ],
        "answer": "3",
        "speakEn": "7 on a ten-frame, empty spaces?",
        "speakHi": "दस-फ्रेम पर 7, खाली?"
      },
      {
        "type": "mcq",
        "qEn": "Which is more, 9 or 6?",
        "qHi": "कौन अधिक, 9 या 6?",
        "options": [
          "9",
          "6"
        ],
        "answer": "9",
        "speakEn": "Which is more, 9 or 6?",
        "speakHi": "कौन अधिक, 9 या 6?"
      },
      {
        "type": "mcq",
        "qEn": "2 and 3 make…",
        "qHi": "2 और 3…",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": "5",
        "speakEn": "2 and 3 make…",
        "speakHi": "2 और 3…"
      },
      {
        "type": "mcq",
        "qEn": "4, eat 1, left?",
        "qHi": "4, 1 खाया, बचे?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": "3",
        "speakEn": "4, eat 1, left?",
        "speakHi": "4, 1 खाया, बचे?"
      },
      {
        "type": "mcq",
        "qEn": "A roti is a…",
        "qHi": "रोटी है…",
        "options": [
          "circle",
          "triangle",
          "eight"
        ],
        "answer": "circle",
        "speakEn": "A roti is a…",
        "speakHi": "रोटी है…"
      },
      {
        "type": "mcq",
        "qEn": "The longer banana is the one that…",
        "qHi": "लंबा केला वह जो…",
        "options": [
          {
            "value": "sticks out further when side by side",
            "label": "sticks out further when side by side"
          },
          {
            "value": "is greener only",
            "label": "is greener only"
          }
        ],
        "answer": "sticks out further when side by side",
        "speakEn": "The longer banana is the one that…",
        "speakHi": "लंबा केला वह जो…"
      },
      {
        "type": "mcq",
        "qEn": "Star, moon, star, moon. Next?",
        "qHi": "तारा, चाँद, तारा, चाँद। आगे?",
        "options": [
          "star",
          "apple",
          "seven"
        ],
        "answer": "star",
        "speakEn": "Star, moon, star, moon. Next?",
        "speakHi": "तारा, चाँद, तारा, चाँद। आगे?"
      },
      {
        "type": "mcq",
        "qEn": "Whole 5, part 2, hiding?",
        "qHi": "पूरा 5, भाग 2, छुपे?",
        "options": [
          "3",
          "2",
          "5"
        ],
        "answer": "3",
        "speakEn": "Whole 5, part 2, hiding?",
        "speakHi": "पूरा 5, भाग 2, छुपे?"
      },
      {
        "type": "mcq",
        "qEn": "A banana among cups is odd because…",
        "qHi": "कपों में केला अलग क्योंकि…",
        "options": [
          {
            "value": "it is not a cup",
            "label": "it is not a cup"
          },
          {
            "value": "it is funny only",
            "label": "it is funny only"
          }
        ],
        "answer": "it is not a cup",
        "speakEn": "A banana among cups is odd because…",
        "speakHi": "कपों में केला अलग क्योंकि…"
      },
      {
        "type": "mcq",
        "qEn": "10 on a ten-frame is…",
        "qHi": "दस-फ्रेम पर 10…",
        "options": [
          "full",
          "empty"
        ],
        "answer": "full",
        "speakEn": "10 on a ten-frame is…",
        "speakHi": "दस-फ्रेम पर 10…"
      },
      {
        "type": "mcq",
        "qEn": "We explain answers, not only…",
        "qHi": "हम उत्तर समझाते हैं, केवल… नहीं",
        "options": [
          {
            "value": "say a number",
            "label": "say a number"
          },
          {
            "value": "close the app",
            "label": "close the app"
          }
        ],
        "answer": "say a number",
        "speakEn": "We explain answers, not only…",
        "speakHi": "हम उत्तर समझाते हैं, केवल… नहीं"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "nursery-prem-1",
    "level": "nursery",
    "subject": "premium",
    "n": 1,
    "premium": true,
    "titleEn": "Talk to Chotu",
    "titleHi": "छोटू से बातें",
    "shortEn": "Say a sound, a word, or how you know a count.",
    "shortHi": "ध्वनि, शब्द, या गिनती कैसे पता, बोलो।",
    "scene": "home",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Say a sound, a word, or how you know a count. I will listen in English or Hindi.",
      "capHi": "ध्वनि, शब्द, या गिनती कैसे पता, बोलो। मैं अंग्रेज़ी या हिन्दी में सुनूँगा।",
      "speakEn": "This is Talk to Chotu. Say sss, or mango, or I see three. If the mic is off, you may tap.",
      "speakHi": "यह छोटू से बातें हैं। sss, या आम, या मुझे तीन दिखते हैं, बोलो। माइक बंद हो तो टैप करो।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Say or tap",
        "titleHi": "बोलो या टैप करो",
        "qEn": "Which sound will we say for sun?",
        "qHi": "sun के लिए कौन सी ध्वनि?",
        "options": [
          "s",
          "p",
          "d"
        ],
        "answer": "s"
      },
      {
        "type": "mcq",
        "titleEn": "How do you know?",
        "titleHi": "कैसे पता?",
        "qEn": "How do you know there are 3?",
        "qHi": "3 कैसे पता?",
        "options": [
          {
            "value": "I can see three",
            "label": "I can see three"
          },
          {
            "value": "Because it is red",
            "label": "Because it is red"
          }
        ],
        "answer": "I can see three"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A spoken answer shows…",
        "qHi": "बोला उत्तर दिखाता है…",
        "options": [
          {
            "value": "what you know",
            "label": "what you know"
          },
          {
            "value": "the phone colour",
            "label": "the phone colour"
          }
        ],
        "answer": "what you know",
        "speakEn": "A spoken answer shows…",
        "speakHi": "बोला उत्तर दिखाता है…"
      },
      {
        "type": "mcq",
        "qEn": "If the mic is off you can…",
        "qHi": "माइक बंद हो तो…",
        "options": [
          {
            "value": "tap an answer",
            "label": "tap an answer"
          },
          {
            "value": "stop",
            "label": "stop"
          }
        ],
        "answer": "tap an answer",
        "speakEn": "If the mic is off you can…",
        "speakHi": "माइक बंद हो तो…"
      },
      {
        "type": "mcq",
        "qEn": "sss is for…",
        "qHi": "sss है…",
        "options": [
          "sun",
          "pot",
          "ten"
        ],
        "answer": "sun",
        "speakEn": "sss is for…",
        "speakHi": "sss है…"
      },
      {
        "type": "mcq",
        "qEn": "Aam means…",
        "qHi": "आम मतलब…",
        "options": [
          "mango",
          "head",
          "bell"
        ],
        "answer": "mango",
        "speakEn": "Aam means…",
        "speakHi": "आम मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu can reply in…",
        "qHi": "छोटू जवाब दे सकते हैं…",
        "options": [
          {
            "value": "English or Hindi",
            "label": "English or Hindi"
          },
          {
            "value": "only codes",
            "label": "only codes"
          }
        ],
        "answer": "English or Hindi",
        "speakEn": "Chotu can reply in…",
        "speakHi": "छोटू जवाब दे सकते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Say I see two when you…",
        "qHi": "I see two तब बोलो जब…",
        "options": [
          {
            "value": "see two objects",
            "label": "see two objects"
          },
          {
            "value": "see ten",
            "label": "see ten"
          }
        ],
        "answer": "see two objects",
        "speakEn": "Say I see two when you…",
        "speakHi": "I see two तब बोलो जब…"
      },
      {
        "type": "mcq",
        "qEn": "The talk goal is a clear answer on…",
        "qHi": "बात का लक्ष्य साफ़ उत्तर…",
        "options": [
          {
            "value": "3 of 5 prompts",
            "label": "3 of 5 prompts"
          },
          {
            "value": "none",
            "label": "none"
          }
        ],
        "answer": "3 of 5 prompts",
        "speakEn": "The talk goal is a clear answer on…",
        "speakHi": "बात का लक्ष्य साफ़ उत्तर…"
      },
      {
        "type": "mcq",
        "qEn": "Which word is easy to say today?",
        "qHi": "आज कौन सा शब्द आसान?",
        "options": [
          "mango",
          "encyclopedia",
          "algorithm"
        ],
        "answer": "mango",
        "speakEn": "Which word is easy to say today?",
        "speakHi": "आज कौन सा शब्द आसान?"
      },
      {
        "type": "mcq",
        "qEn": "Talk practice builds…",
        "qHi": "बात का अभ्यास बढ़ाता है…",
        "options": [
          {
            "value": "oral language",
            "label": "oral language"
          },
          {
            "value": "only tracing",
            "label": "only tracing"
          }
        ],
        "answer": "oral language",
        "speakEn": "Talk practice builds…",
        "speakHi": "बात का अभ्यास बढ़ाता है…"
      },
      {
        "type": "mcq",
        "qEn": "A good spoken sentence is…",
        "qHi": "अच्छा बोला वाक्य…",
        "options": [
          {
            "value": "I see three mangoes",
            "label": "I see three mangoes"
          },
          {
            "value": "only a hum",
            "label": "only a hum"
          }
        ],
        "answer": "I see three mangoes",
        "speakEn": "A good spoken sentence is…",
        "speakHi": "अच्छा बोला वाक्य…"
      },
      {
        "type": "mcq",
        "qEn": "Premium Talk sits beside Basic, not instead of it. True?",
        "qHi": "प्रीमियम बात बेसिक के साथ है। सही?",
        "options": [
          "yes",
          "no"
        ],
        "answer": "yes",
        "speakEn": "Premium Talk sits beside Basic, not instead of it. True?",
        "speakHi": "प्रीमियम बात बेसिक के साथ है। सही?"
      },
      {
        "type": "mcq",
        "qEn": "A tap fallback still counts as…",
        "qHi": "टैप विकल्प भी गिना जाता है…",
        "options": [
          {
            "value": "an answer",
            "label": "an answer"
          },
          {
            "value": "a fail always",
            "label": "a fail always"
          }
        ],
        "answer": "an answer",
        "speakEn": "A tap fallback still counts as…",
        "speakHi": "टैप विकल्प भी गिना जाता है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "nursery-prem-2",
    "level": "nursery",
    "subject": "premium",
    "n": 2,
    "premium": true,
    "titleEn": "Pronunciation coaching",
    "titleHi": "उच्चारण कोचिंग",
    "shortEn": "Hear a sound, say it back, try again.",
    "shortHi": "ध्वनि सुनो, दोहराओ, फिर कोशिश करो।",
    "scene": "school",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "I will model a sound. You repeat. If it is close, I cheer. Then we try once more.",
      "capHi": "मैं ध्वनि बोलूँगा। तुम दोहराओ। पास हो तो शाबाश। फिर एक बार और।",
      "speakEn": "Listen to sss, like a snake, then say it back. A clearer second try can go on the parent report.",
      "speakHi": "sss सुनो, साँप जैसी, फिर बोलो। दूसरी साफ़ कोशिश रिपोर्ट में जा सकती है।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Model sss",
        "titleHi": "sss सुनो",
        "qEn": "Which sound did Chotu model for sun?",
        "qHi": "sun के लिए छोटू ने कौन सी ध्वनि बताई?",
        "options": [
          "s",
          "m",
          "d"
        ],
        "answer": "s"
      },
      {
        "type": "clap",
        "titleEn": "Repeat a rhythm",
        "titleHi": "लय दोहराओ",
        "beats": 3
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "We retry a sound so that…",
        "qHi": "ध्वनि फिर बोलते हैं ताकि…",
        "options": [
          {
            "value": "it gets clearer",
            "label": "it gets clearer"
          },
          {
            "value": "the app closes",
            "label": "the app closes"
          }
        ],
        "answer": "it gets clearer",
        "speakEn": "We retry a sound so that…",
        "speakHi": "ध्वनि फिर बोलते हैं ताकि…"
      },
      {
        "type": "mcq",
        "qEn": "sss is like a…",
        "qHi": "sss जैसी…",
        "options": [
          {
            "value": "snake sound",
            "label": "snake sound"
          },
          {
            "value": "drum only",
            "label": "drum only"
          }
        ],
        "answer": "snake sound",
        "speakEn": "sss is like a…",
        "speakHi": "sss जैसी…"
      },
      {
        "type": "mcq",
        "qEn": "mmm is the first sound of…",
        "qHi": "mmm पहली ध्वनि…",
        "options": [
          "mango",
          "sun",
          "pot"
        ],
        "answer": "mango",
        "speakEn": "mmm is the first sound of…",
        "speakHi": "mmm पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "A close attempt still deserves…",
        "qHi": "पास की कोशिश पर भी…",
        "options": [
          {
            "value": "cheer and another try",
            "label": "cheer and another try"
          },
          {
            "value": "anger",
            "label": "anger"
          }
        ],
        "answer": "cheer and another try",
        "speakEn": "A close attempt still deserves…",
        "speakHi": "पास की कोशिश पर भी…"
      },
      {
        "type": "mcq",
        "qEn": "Parent reports can log…",
        "qHi": "रिपोर्ट में जा सकता है…",
        "options": [
          {
            "value": "a clearer second try",
            "label": "a clearer second try"
          },
          {
            "value": "the wifi password",
            "label": "the wifi password"
          }
        ],
        "answer": "a clearer second try",
        "speakEn": "Parent reports can log…",
        "speakHi": "रिपोर्ट में जा सकता है…"
      },
      {
        "type": "mcq",
        "qEn": "ppp is for…",
        "qHi": "ppp है…",
        "options": [
          "pot",
          "sun",
          "ant"
        ],
        "answer": "pot",
        "speakEn": "ppp is for…",
        "speakHi": "ppp है…"
      },
      {
        "type": "mcq",
        "qEn": "ttt is for…",
        "qHi": "ttt है…",
        "options": [
          "tap",
          "mango",
          "eye"
        ],
        "answer": "tap",
        "speakEn": "ttt is for…",
        "speakHi": "ttt है…"
      },
      {
        "type": "mcq",
        "qEn": "We model first, then the child…",
        "qHi": "पहले आदर्श, फिर बच्चा…",
        "options": [
          "repeats",
          "writes one hundred"
        ],
        "answer": "repeats",
        "speakEn": "We model first, then the child…",
        "speakHi": "पहले आदर्श, फिर बच्चा…"
      },
      {
        "type": "mcq",
        "qEn": "Rhyme to repeat: cat, hat. Next could be…",
        "qHi": "तुक: cat, hat। आगे…",
        "options": [
          "bat",
          "sun",
          "tree"
        ],
        "answer": "bat",
        "speakEn": "Rhyme to repeat: cat, hat. Next could be…",
        "speakHi": "तुक: cat, hat। आगे…"
      },
      {
        "type": "mcq",
        "qEn": "Coaching is Premium because…",
        "qHi": "कोचिंग प्रीमियम है क्योंकि…",
        "options": [
          {
            "value": "Chotu listens and retries with you",
            "label": "Chotu listens and retries with you"
          },
          {
            "value": "it is only a cartoon",
            "label": "it is only a cartoon"
          }
        ],
        "answer": "Chotu listens and retries with you",
        "speakEn": "Coaching is Premium because…",
        "speakHi": "कोचिंग प्रीमियम है क्योंकि…"
      },
      {
        "type": "mcq",
        "qEn": "aaa is for…",
        "qHi": "aaa है…",
        "options": [
          "ant or aam",
          "pot",
          "dog"
        ],
        "answer": "ant or aam",
        "speakEn": "aaa is for…",
        "speakHi": "aaa है…"
      },
      {
        "type": "mcq",
        "qEn": "If the first try is unclear we…",
        "qHi": "पहली कोशिश साफ़ न हो तो…",
        "options": [
          {
            "value": "model again",
            "label": "model again"
          },
          {
            "value": "give up",
            "label": "give up"
          }
        ],
        "answer": "model again",
        "speakEn": "If the first try is unclear we…",
        "speakHi": "पहली कोशिश साफ़ न हो तो…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "nursery-prem-3",
    "level": "nursery",
    "subject": "premium",
    "n": 3,
    "premium": true,
    "titleEn": "Hindi literacy start",
    "titleHi": "हिन्दी साक्षरता की शुरुआत",
    "shortEn": "Swar with pictures. Match अ to aam.",
    "shortHi": "चित्रों के साथ स्वर। अ को आम से मिलाओ।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Let's start Hindi swar with pictures. अ is for aam. We can also sing Chanda Mama.",
      "capHi": "चित्रों के साथ हिन्दी स्वर शुरू करें। अ से आम। चंदा मामा भी गा सकते हैं।",
      "speakEn": "Premium Hindi starts with swar. अ se aam, with a picture, and a rhyme such as Chanda Mama or Aaloo Kachaloo.",
      "speakHi": "प्रीमियम हिन्दी स्वर से शुरू होती है। अ से आम, चित्र के साथ, और चंदा मामा या आलू कचालू।"
    },
    "activities": [
      {
        "type": "match",
        "titleEn": "Match swar",
        "titleHi": "स्वर मिलाओ",
        "pairs": [
          {
            "key": "a",
            "leftEn": "अ",
            "leftHi": "अ",
            "rightEn": "aam / mango",
            "rightHi": "आम"
          },
          {
            "key": "aa",
            "leftEn": "आ",
            "leftHi": "आ",
            "rightEn": "aana / come",
            "rightHi": "आना"
          },
          {
            "key": "i",
            "leftEn": "इ",
            "leftHi": "इ",
            "rightEn": "imli",
            "rightHi": "इमली"
          }
        ]
      },
      {
        "type": "mcq",
        "titleEn": "अ se aam",
        "titleHi": "अ से आम",
        "qEn": "अ se aam. Aam is a…",
        "qHi": "अ से आम। आम है…",
        "options": [
          {
            "value": "mango",
            "label": "mango",
            "emoji": "🥭"
          },
          {
            "value": "bell",
            "label": "bell",
            "emoji": "🔔"
          }
        ],
        "answer": "mango"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "अ is the swar we link to…",
        "qHi": "अ स्वर जुड़ता है…",
        "options": [
          "aam",
          "kela",
          "ghar"
        ],
        "answer": "aam",
        "speakEn": "अ is the swar we link to…",
        "speakHi": "अ स्वर जुड़ता है…"
      },
      {
        "type": "mcq",
        "qEn": "The goal is to recognise…",
        "qHi": "लक्ष्य है पहचानना…",
        "options": [
          {
            "value": "6 or more swar",
            "label": "6 or more swar"
          },
          {
            "value": "only one swar",
            "label": "only one swar"
          }
        ],
        "answer": "6 or more swar",
        "speakEn": "The goal is to recognise…",
        "speakHi": "लक्ष्य है पहचानना…"
      },
      {
        "type": "mcq",
        "qEn": "Chanda Mama is a…",
        "qHi": "चंदा मामा है…",
        "options": [
          "rhyme",
          "times table"
        ],
        "answer": "rhyme",
        "speakEn": "Chanda Mama is a…",
        "speakHi": "चंदा मामा है…"
      },
      {
        "type": "mcq",
        "qEn": "Aaloo Kachaloo is a…",
        "qHi": "आलू कचालू है…",
        "options": [
          "rhyme",
          "silent test"
        ],
        "answer": "rhyme",
        "speakEn": "Aaloo Kachaloo is a…",
        "speakHi": "आलू कचालू है…"
      },
      {
        "type": "mcq",
        "qEn": "इ can start…",
        "qHi": "इ से शुरू…",
        "options": [
          "imli",
          "aam",
          "kela"
        ],
        "answer": "imli",
        "speakEn": "इ can start…",
        "speakHi": "इ से शुरू…"
      },
      {
        "type": "mcq",
        "qEn": "Nursery Premium Hindi starts with…",
        "qHi": "नर्सरी प्रीमियम हिन्दी शुरू होती है…",
        "options": [
          {
            "value": "swar with pictures",
            "label": "swar with pictures"
          },
          {
            "value": "full essays",
            "label": "full essays"
          }
        ],
        "answer": "swar with pictures",
        "speakEn": "Nursery Premium Hindi starts with…",
        "speakHi": "नर्सरी प्रीमियम हिन्दी शुरू होती है…"
      },
      {
        "type": "mcq",
        "qEn": "आ is the swar in…",
        "qHi": "आ स्वर है…",
        "options": [
          "aana",
          "imli"
        ],
        "answer": "aana",
        "speakEn": "आ is the swar in…",
        "speakHi": "आ स्वर है…"
      },
      {
        "type": "mcq",
        "qEn": "We use pictures so that swar have…",
        "qHi": "चित्र इसलिए कि स्वर के साथ…",
        "options": [
          "meaning",
          "no meaning"
        ],
        "answer": "meaning",
        "speakEn": "We use pictures so that swar have…",
        "speakHi": "चित्र इसलिए कि स्वर के साथ…"
      },
      {
        "type": "mcq",
        "qEn": "Aam is also a bridge to the English word…",
        "qHi": "आम अंग्रेज़ी पुल है…",
        "options": [
          "mango",
          "head",
          "rain"
        ],
        "answer": "mango",
        "speakEn": "Aam is also a bridge to the English word…",
        "speakHi": "आम अंग्रेज़ी पुल है…"
      },
      {
        "type": "mcq",
        "qEn": "उ can start the idea of…",
        "qHi": "उ से जुड़ सकता है…",
        "options": [
          "ugana / to grow",
          "aam",
          "kela"
        ],
        "answer": "ugana / to grow",
        "speakEn": "उ can start the idea of…",
        "speakHi": "उ से जुड़ सकता है…"
      },
      {
        "type": "mcq",
        "qEn": "Swar are…",
        "qHi": "स्वर हैं…",
        "options": [
          {
            "value": "vowel sounds in Hindi",
            "label": "vowel sounds in Hindi"
          },
          {
            "value": "only English letters",
            "label": "only English letters"
          }
        ],
        "answer": "vowel sounds in Hindi",
        "speakEn": "Swar are…",
        "speakHi": "स्वर हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Match the swar to a picture to…",
        "qHi": "स्वर को चित्र से मिलाओ ताकि…",
        "options": [
          "remember it",
          "skip it"
        ],
        "answer": "remember it",
        "speakEn": "Match the swar to a picture to…",
        "speakHi": "स्वर को चित्र से मिलाओ ताकि…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "nursery-prem-4",
    "level": "nursery",
    "subject": "premium",
    "n": 4,
    "premium": true,
    "titleEn": "Coached slate",
    "titleHi": "कोच स्लेट",
    "shortEn": "Guided strokes for known letters and numerals.",
    "shortHi": "जाने अक्षरों और अंकों की निर्देशित रेखा।",
    "scene": "school",
    "teach": {
      "pose": "idle",
      "anim": "bob",
      "capEn": "I will guide the stroke for a known mark, such as p or 4. If the path is off, we replay it.",
      "capHi": "मैं जानी निशानी, जैसे p या 4, की रेखा दिखाऊँगा। पथ गलत हो तो दोहराएँगे।",
      "speakEn": "This is the coached slate. We only practise marks you already hear or count, and we stay close to the guide.",
      "speakHi": "यह कोच स्लेट है। हम वही निशान लिखते हैं जो पहले से सुनते या गिनते हैं, और रेखा के पास रहते हैं।"
    },
    "activities": [
      {
        "type": "trace",
        "titleEn": "Trace p with a guide",
        "titleHi": "p की रेखा",
        "glyph": "p"
      },
      {
        "type": "trace",
        "titleEn": "Trace 4 with a guide",
        "titleHi": "4 की रेखा",
        "glyph": "4"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "We trace letters we can already…",
        "qHi": "हम वे अक्षर लिखते हैं जो पहले से…",
        "options": [
          "hear",
          "ignore"
        ],
        "answer": "hear",
        "speakEn": "We trace letters we can already…",
        "speakHi": "हम वे अक्षर लिखते हैं जो पहले से…"
      },
      {
        "type": "mcq",
        "qEn": "A good stroke stays…",
        "qHi": "अच्छी रेखा रहती है…",
        "options": [
          {
            "value": "close to the guide",
            "label": "close to the guide"
          },
          {
            "value": "off the page",
            "label": "off the page"
          }
        ],
        "answer": "close to the guide",
        "speakEn": "A good stroke stays…",
        "speakHi": "अच्छी रेखा रहती है…"
      },
      {
        "type": "mcq",
        "qEn": "The numeral 4 is a known mark after we can…",
        "qHi": "अंक 4 तब जब हम…",
        "options": [
          {
            "value": "count four objects",
            "label": "count four objects"
          },
          {
            "value": "write 99",
            "label": "write 99"
          }
        ],
        "answer": "count four objects",
        "speakEn": "The numeral 4 is a known mark after we can…",
        "speakHi": "अंक 4 तब जब हम…"
      },
      {
        "type": "mcq",
        "qEn": "If the path is off we…",
        "qHi": "पथ गलत हो तो…",
        "options": [
          "replay it",
          "delete it forever"
        ],
        "answer": "replay it",
        "speakEn": "If the path is off we…",
        "speakHi": "पथ गलत हो तो…"
      },
      {
        "type": "mcq",
        "qEn": "p is the first sound of…",
        "qHi": "p पहली ध्वनि…",
        "options": [
          "pot",
          "sun",
          "ant"
        ],
        "answer": "pot",
        "speakEn": "p is the first sound of…",
        "speakHi": "p पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "s is the first sound of…",
        "qHi": "s पहली ध्वनि…",
        "options": [
          "sun",
          "pot",
          "dog"
        ],
        "answer": "sun",
        "speakEn": "s is the first sound of…",
        "speakHi": "s पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "We do not race through…",
        "qHi": "हम दौड़ नहीं लगाते…",
        "options": [
          {
            "value": "all 26 letters in order",
            "label": "all 26 letters in order"
          },
          {
            "value": "known sounds",
            "label": "known sounds"
          }
        ],
        "answer": "all 26 letters in order",
        "speakEn": "We do not race through…",
        "speakHi": "हम दौड़ नहीं लगाते…"
      },
      {
        "type": "mcq",
        "qEn": "The coached slate is a Premium…",
        "qHi": "कोच स्लेट है प्रीमियम…",
        "options": [
          "guide",
          "punishment"
        ],
        "answer": "guide",
        "speakEn": "The coached slate is a Premium…",
        "speakHi": "कोच स्लेट है प्रीमियम…"
      },
      {
        "type": "mcq",
        "qEn": "A mastery goal is a close stroke on…",
        "qHi": "लक्ष्य है पास रेखा…",
        "options": [
          {
            "value": "4 known marks",
            "label": "4 known marks"
          },
          {
            "value": "zero marks",
            "label": "zero marks"
          }
        ],
        "answer": "4 known marks",
        "speakEn": "A mastery goal is a close stroke on…",
        "speakHi": "लक्ष्य है पास रेखा…"
      },
      {
        "type": "mcq",
        "qEn": "Trace 5 only after you can…",
        "qHi": "5 लिखो जब तुम…",
        "options": [
          {
            "value": "show five objects",
            "label": "show five objects"
          },
          {
            "value": "read a newspaper",
            "label": "read a newspaper"
          }
        ],
        "answer": "show five objects",
        "speakEn": "Trace 5 only after you can…",
        "speakHi": "5 लिखो जब तुम…"
      },
      {
        "type": "mcq",
        "qEn": "The slate uses a finger or stylus to…",
        "qHi": "स्लेट पर उँगली या स्टाइलस से…",
        "options": [
          "write",
          "cook"
        ],
        "answer": "write",
        "speakEn": "The slate uses a finger or stylus to…",
        "speakHi": "स्लेट पर उँगली या स्टाइलस से…"
      },
      {
        "type": "mcq",
        "qEn": "Coaching means Chotu can…",
        "qHi": "कोचिंग मतलब छोटू…",
        "options": [
          {
            "value": "show the path again",
            "label": "show the path again"
          },
          {
            "value": "go to sleep",
            "label": "go to sleep"
          }
        ],
        "answer": "show the path again",
        "speakEn": "Coaching means Chotu can…",
        "speakHi": "कोचिंग मतलब छोटू…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "nursery-prem-5",
    "level": "nursery",
    "subject": "premium",
    "n": 5,
    "premium": true,
    "titleEn": "Adaptive reteach and parent report",
    "titleHi": "फिर से सिखाना और रिपोर्ट",
    "shortEn": "A weak sound or bond is practised again, then explained to parents.",
    "shortHi": "कमज़ोर ध्वनि या जोड़ फिर अभ्यास, फिर माता-पिता को समझाया।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "If a sound or a number bond was hard, we practise it in a new game. Then a parent can open a plain-language report.",
      "capHi": "अगर ध्वनि या जोड़ कठिन था, नए खेल में अभ्यास। फिर माता-पिता सादी भाषा में रिपोर्ट खोल सकते हैं।",
      "speakEn": "Adaptive reteach means we do not just move on. A failed skill comes back in a new way, and the report says what is growing.",
      "speakHi": "फिर से सिखाना मतलब आगे बढ़कर छोड़ना नहीं। कमज़ोर कौशल नए ढंग से आता है, और रिपोर्ट बताती है क्या बढ़ रहा है।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Reteach a bond",
        "titleHi": "जोड़ फिर सिखाओ",
        "qEn": "2 and what make 5? Let's try this again in a new way.",
        "qHi": "2 और क्या = 5? नए ढंग से फिर कोशिश।",
        "options": [
          "3",
          "4",
          "1"
        ],
        "answer": "3"
      },
      {
        "type": "mcq",
        "titleEn": "Reteach a sound",
        "titleHi": "ध्वनि फिर सिखाओ",
        "qEn": "First sound of pot, one more time?",
        "qHi": "pot की पहली ध्वनि, एक बार और?",
        "options": [
          "p",
          "s",
          "a"
        ],
        "answer": "p"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A failed skill should be…",
        "qHi": "कमज़ोर कौशल को…",
        "options": [
          {
            "value": "practised again in a new game",
            "label": "practised again in a new game"
          },
          {
            "value": "hidden forever",
            "label": "hidden forever"
          }
        ],
        "answer": "practised again in a new game",
        "speakEn": "A failed skill should be…",
        "speakHi": "कमज़ोर कौशल को…"
      },
      {
        "type": "mcq",
        "qEn": "The parent report uses…",
        "qHi": "रिपोर्ट में होती है…",
        "options": [
          {
            "value": "plain language",
            "label": "plain language"
          },
          {
            "value": "secret codes only",
            "label": "secret codes only"
          }
        ],
        "answer": "plain language",
        "speakEn": "The parent report uses…",
        "speakHi": "रिपोर्ट में होती है…"
      },
      {
        "type": "mcq",
        "qEn": "2 and 3 make…",
        "qHi": "2 और 3…",
        "options": [
          "5",
          "8",
          "1"
        ],
        "answer": "5",
        "speakEn": "2 and 3 make…",
        "speakHi": "2 और 3…"
      },
      {
        "type": "mcq",
        "qEn": "The first sound of pot is…",
        "qHi": "pot की पहली ध्वनि…",
        "options": [
          "p",
          "s",
          "z"
        ],
        "answer": "p",
        "speakEn": "The first sound of pot is…",
        "speakHi": "pot की पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "A report in the month should be…",
        "qHi": "महीने में रिपोर्ट…",
        "options": [
          {
            "value": "opened at least once",
            "label": "opened at least once"
          },
          {
            "value": "never opened",
            "label": "never opened"
          }
        ],
        "answer": "opened at least once",
        "speakEn": "A report in the month should be…",
        "speakHi": "महीने में रिपोर्ट…"
      },
      {
        "type": "mcq",
        "qEn": "Adaptive means the next game depends on…",
        "qHi": "अनुकूली मतलब अगला खेल निर्भर…",
        "options": [
          {
            "value": "what was hard",
            "label": "what was hard"
          },
          {
            "value": "a random TV show",
            "label": "a random TV show"
          }
        ],
        "answer": "what was hard",
        "speakEn": "Adaptive means the next game depends on…",
        "speakHi": "अनुकूली मतलब अगला खेल निर्भर…"
      },
      {
        "type": "mcq",
        "qEn": "If the reteach moves the skill up a step, that is…",
        "qHi": "अगर फिर सिखाने से कौशल ऊपर आए, वह है…",
        "options": [
          {
            "value": "progress",
            "label": "progress"
          },
          {
            "value": "a problem",
            "label": "a problem"
          }
        ],
        "answer": "progress",
        "speakEn": "If the reteach moves the skill up a step, that is…",
        "speakHi": "अगर फिर सिखाने से कौशल ऊपर आए, वह है…"
      },
      {
        "type": "mcq",
        "qEn": "Parents should see…",
        "qHi": "माता-पिता देखें…",
        "options": [
          {
            "value": "what is secure or still growing",
            "label": "what is secure or still growing"
          },
          {
            "value": "only a star cartoon",
            "label": "only a star cartoon"
          }
        ],
        "answer": "what is secure or still growing",
        "speakEn": "Parents should see…",
        "speakHi": "माता-पिता देखें…"
      },
      {
        "type": "mcq",
        "qEn": "This sits in Premium beside…",
        "qHi": "यह प्रीमियम में साथ है…",
        "options": [
          {
            "value": "the Basic course",
            "label": "the Basic course"
          },
          {
            "value": "nothing else",
            "label": "nothing else"
          }
        ],
        "answer": "the Basic course",
        "speakEn": "This sits in Premium beside…",
        "speakHi": "यह प्रीमियम में साथ है…"
      },
      {
        "type": "mcq",
        "qEn": "A new game for the same skill helps because…",
        "qHi": "उसी कौशल का नया खेल मदद करता है क्योंकि…",
        "options": [
          {
            "value": "it is a fresh chance",
            "label": "it is a fresh chance"
          },
          {
            "value": "it erases the child",
            "label": "it erases the child"
          }
        ],
        "answer": "it is a fresh chance",
        "speakEn": "A new game for the same skill helps because…",
        "speakHi": "उसी कौशल का नया खेल मदद करता है क्योंकि…"
      },
      {
        "type": "mcq",
        "qEn": "Number bonds within 5 include…",
        "qHi": "5 तक के जोड़ में…",
        "options": [
          "2 and 3",
          "20 and 30"
        ],
        "answer": "2 and 3",
        "speakEn": "Number bonds within 5 include…",
        "speakHi": "5 तक के जोड़ में…"
      },
      {
        "type": "mcq",
        "qEn": "The report is a sample in this demo, clearly labelled. True?",
        "qHi": "इस डेमो में रिपोर्ट नमूना है, साफ़ लेबल के साथ। सही?",
        "options": [
          "yes",
          "no"
        ],
        "answer": "yes",
        "speakEn": "The report is a sample in this demo, clearly labelled. True?",
        "speakHi": "इस डेमो में रिपोर्ट नमूना है, साफ़ लेबल के साथ। सही?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  }
];

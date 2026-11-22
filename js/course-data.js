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
        "answer": "mango",
        "promptEn": "cat, hat, mango, bat — which does not rhyme?",
        "promptHi": "cat, hat, mango, bat — कौन सा तुक नहीं मिलाता?"
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
        "answer": "cat",
        "promptEn": "Chotu says c-a-t. Which picture?",
        "promptHi": "छोटू कहते हैं c-a-t। कौन सी तस्वीर?"
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
        "answer": "mango",
        "promptEn": "Aam starts with aaa. Aam is a…",
        "promptHi": "आम aaa से शुरू होता है। आम है…"
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
        "answer": "a",
        "promptEn": "A se aam. Aam is a mango. What is the sound of a?",
        "promptHi": "A से आम। आम की ध्वनि a क्या है?"
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
        "answer": "Mini",
        "promptEn": "Who makes the paper boat?",
        "promptHi": "कागज़ की नाव कौन बनाता है?"
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
        "answer": "It might float",
        "promptEn": "The boat is in a puddle. What might happen next?",
        "promptHi": "नाव गड्ढे में है। आगे क्या हो सकता है?"
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
        "answer": "sat",
        "promptEn": "After a gap: s-a-t is…",
        "promptHi": "अंतराल के बाद: s-a-t है…"
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
        "answer": "the child",
        "promptEn": "The child’s ice has melted. Who might feel sad?",
        "promptHi": "बच्चे की बर्फ पिघल गई। कौन उदास हो सकता है?"
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
        "answer": "It is warm",
        "promptEn": "Why might the ice be melting?",
        "promptHi": "बर्फ क्यों पिघल रही होगी?"
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
        "showEmoji": "🪴",
        "promptEn": "Pot starts with which sound? Write it in your mind and tap it.",
        "promptHi": "पॉट किस ध्वनि से शुरू होता है?"
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
        "answer": "mango",
        "promptEn": "Which does not rhyme: cat, hat, mango?",
        "promptHi": "कौन सा तुक नहीं: cat, hat, mango?"
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
        "answer": "rain / puddle",
        "promptEn": "Mini had a paper boat in the…",
        "promptHi": "मिनी के पास कागज़ की नाव थी…"
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
        "answer": "banana",
        "promptEn": "Cups, cups, banana, cups. Which does not belong, and think why.",
        "promptHi": "कप, कप, केला, कप। कौन सा अलग है? क्यों सोचो।"
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
        "answer": "3",
        "promptEn": "Look quickly. How many laddoos? Don't count one by one.",
        "promptHi": "जल्दी देखो। कितने लड्डू? एक-एक मत गिनो।"
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
        "answer": "4",
        "promptEn": "Here are mangoes. Which numeral matches this picture?",
        "promptHi": "ये आम हैं। कौन सा अंक मिलता है?"
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
        "answer": "7 has two more than 5",
        "promptEn": "How do you know 7 is more than 5?",
        "promptHi": "कैसे पता 7, 5 से बड़ा है?"
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
        "answer": "roti",
        "promptEn": "Which is a circle, like a roti?",
        "promptHi": "रोटी जैसा गोला कौन सा है?"
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
        "answer": "The shape matches the hole",
        "promptEn": "Why does a puzzle piece fit?",
        "promptHi": "पहेली का टुकड़ा फिट क्यों होता है?"
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
        "answer": "the full bag",
        "promptEn": "A full bag and an empty bag. Which is heavier?",
        "promptHi": "भरा बैग और खाली बैग। कौन भारी?"
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
        "answer": "banana should be a leaf",
        "promptEn": "Mango, leaf, mango, leaf, banana. What is wrong?",
        "promptHi": "आम, पत्ता, आम, पत्ता, केला। क्या गलत?"
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
        "answer": "mango",
        "promptEn": "Mango, leaf, mango, leaf, …",
        "promptHi": "आम, पत्ता, आम, पत्ता, …"
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
        "answer": "3",
        "promptEn": "5 pedas in all, 2 on the plate. How many are hiding?",
        "promptHi": "कुल 5 पेड़े, थाली में 2। कितने छुपे?"
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
        "answer": "2 and 3 together are the whole 5",
        "promptEn": "How do you know 2 and 3 make 5?",
        "promptHi": "कैसे पता 2 और 3 मिलकर 5 हैं?"
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
        "answer": "3",
        "promptEn": "4 laddoos, eat 1. How many left?",
        "promptHi": "4 लड्डू, 1 खाया। कितने बचे?"
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
        "answer": "One was eaten, so 4 minus 1 is 3",
        "promptEn": "Why are 3 left?",
        "promptHi": "3 क्यों बचे?"
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
        "answer": "3",
        "promptEn": "Look quickly. How many?",
        "promptHi": "जल्दी देखो। कितने?"
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
        "answer": "banana should be a leaf",
        "promptEn": "Mango, leaf, mango, banana. What is wrong?",
        "promptHi": "आम, पत्ता, आम, केला। क्या गलत?"
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
        "answer": "the plate with 4",
        "promptEn": "One plate has 4 laddoos, one has 2. Which has more?",
        "promptHi": "एक थाली में 4, एक में 2। किसमें अधिक?"
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
        "answer": "s",
        "promptEn": "Which sound will we say for sun?",
        "promptHi": "sun के लिए कौन सी ध्वनि?"
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
        "answer": "I can see three",
        "promptEn": "How do you know there are 3?",
        "promptHi": "3 कैसे पता?"
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
        "answer": "s",
        "promptEn": "Which sound did Chotu model for sun?",
        "promptHi": "sun के लिए छोटू ने कौन सी ध्वनि बताई?"
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
        "answer": "mango",
        "promptEn": "अ se aam. Aam is a…",
        "promptHi": "अ से आम। आम है…"
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
        "answer": "3",
        "promptEn": "2 and what make 5? Let's try this again in a new way.",
        "promptHi": "2 और क्या = 5? नए ढंग से फिर कोशिश।"
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
        "answer": "p",
        "promptEn": "First sound of pot, one more time?",
        "promptHi": "pot की पहली ध्वनि, एक बार और?"
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
  },
  {
    "id": "lkg-eng-1",
    "level": "lkg",
    "subject": "english",
    "n": 1,
    "titleEn": "Four-block start and fluency on known sounds",
    "titleHi": "चार खंडों की शुरुआत और जानी ध्वनियों पर धाराप्रवाहता",
    "shortEn": "Revisit s, a, t, p, i, n, m, d: blend, a rhyme, and write one letter.",
    "shortHi": "s, a, t, p, i, n, m, d दोहराओ: जोड़ो, तुक, और एक अक्षर लिखो।",
    "scene": "school",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Every day we do four things: listen, blend a word, enjoy a short rhyme, and write one known letter.",
      "capHi": "हर दिन चार काम: सुनो, शब्द जोड़ो, छोटी तुक, और एक जाना अक्षर लिखो।",
      "speakEn": "This is our four-block start. We already know s, a, t, p, i, n, m, d. Let's blend sat and pin, clap a four-line rhyme, and write s.",
      "speakHi": "यह चार खंडों की शुरुआत है। हम s, a, t, p, i, n, m, d जानते हैं। sat और pin जोड़ो, तुक पर ताली, और s लिखो।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Blend sat",
        "titleHi": "sat जोड़ो",
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
        "type": "trace",
        "titleEn": "Write a known letter",
        "titleHi": "जाना अक्षर लिखो",
        "glyph": "s"
      },
      {
        "type": "mcq",
        "titleEn": "Blend pin",
        "titleHi": "pin जोड़ो",
        "qEn": "p-i-n. What word is this?",
        "qHi": "p-i-n। यह कौन सा शब्द है?",
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
        "promptEn": "p-i-n. What word is this?",
        "promptHi": "p-i-n। यह कौन सा शब्द है?"
      }
    ],
    "practice": [
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
        "qEn": "m-a-n is…",
        "qHi": "m-a-n है…",
        "options": [
          "man",
          "mat",
          "mad"
        ],
        "answer": "man",
        "speakEn": "m-a-n is…",
        "speakHi": "m-a-n है…"
      },
      {
        "type": "mcq",
        "qEn": "s-i-t is…",
        "qHi": "s-i-t है…",
        "options": [
          "sit",
          "sat",
          "sip"
        ],
        "answer": "sit",
        "speakEn": "s-i-t is…",
        "speakHi": "s-i-t है…"
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
        "qEn": "First sound of net?",
        "qHi": "net की पहली ध्वनि?",
        "options": [
          "n",
          "m",
          "s"
        ],
        "answer": "n",
        "speakEn": "First sound of net?",
        "speakHi": "net की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "A four-block day includes…",
        "qHi": "चार खंडों के दिन में…",
        "options": [
          {
            "value": "listening, blending, a rhyme and writing",
            "label": "listening, blending, a rhyme and writing"
          },
          {
            "value": "only a video",
            "label": "only a video"
          }
        ],
        "answer": "listening, blending, a rhyme and writing",
        "speakEn": "A four-block day includes…",
        "speakHi": "चार खंडों के दिन में…"
      },
      {
        "type": "mcq",
        "qEn": "p-a-t is…",
        "qHi": "p-a-t है…",
        "options": [
          "pat",
          "pot",
          "pit"
        ],
        "answer": "pat",
        "speakEn": "p-a-t is…",
        "speakHi": "p-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "d-i-p is…",
        "qHi": "d-i-p है…",
        "options": [
          "dip",
          "dad",
          "pad"
        ],
        "answer": "dip",
        "speakEn": "d-i-p is…",
        "speakHi": "d-i-p है…"
      },
      {
        "type": "mcq",
        "qEn": "We write letters we can already…",
        "qHi": "हम वे अक्षर लिखते हैं जो पहले से…",
        "options": [
          "hear",
          "ignore"
        ],
        "answer": "hear",
        "speakEn": "We write letters we can already…",
        "speakHi": "हम वे अक्षर लिखते हैं जो पहले से…"
      },
      {
        "type": "mcq",
        "qEn": "Which word uses only known sounds?",
        "qHi": "कौन सा शब्द जानी ध्वनियों से है?",
        "options": [
          "sat",
          "shop",
          "train"
        ],
        "answer": "sat",
        "speakEn": "Which word uses only known sounds?",
        "speakHi": "कौन सा शब्द जानी ध्वनियों से है?"
      },
      {
        "type": "mcq",
        "qEn": "Fluency means we can read sat and pin…",
        "qHi": "धाराप्रवाहता मतलब sat और pin…",
        "options": [
          {
            "value": "quickly and surely",
            "label": "quickly and surely"
          },
          {
            "value": "only after Z",
            "label": "only after Z"
          }
        ],
        "answer": "quickly and surely",
        "speakEn": "Fluency means we can read sat and pin…",
        "speakHi": "धाराप्रवाहता मतलब sat और pin…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-2",
    "level": "lkg",
    "subject": "english",
    "n": 2,
    "titleEn": "Sets 3 and 4: g, o, c, k, then ck, e, u, r",
    "titleHi": "समूह 3 और 4: g, o, c, k, फिर ck, e, u, r",
    "shortEn": "Read and spell kit, sock and duck. Segment a word Chotu says.",
    "shortHi": "kit, sock और duck पढ़ो और बनाओ। छोटू के शब्द के भाग करो।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "New sounds: g, o, c, k, then ck, e, u, r. Now we can read kit, sock and duck.",
      "capHi": "नई ध्वनियाँ: g, o, c, k, फिर ck, e, u, r। अब kit, sock और duck पढ़ सकते हैं।",
      "speakEn": "This set order is from Letters and Sounds, so we can spell by sounds before the alphabet is finished. Kit, sock, duck. Segment them with me: d-u-ck.",
      "speakHi": "यह क्रम Letters and Sounds से है, ताकि पूरी वर्णमाला से पहले वर्तनी शुरू हो। kit, sock, duck। भाग करो: d-u-ck।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Build kit",
        "titleHi": "kit बनाओ",
        "tiles": [
          "k",
          "i",
          "t"
        ],
        "word": "kit",
        "order": [
          "k",
          "i",
          "t"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "Segment duck",
        "titleHi": "duck के भाग",
        "qEn": "Chotu says duck. How many sounds, if ck is one sound?",
        "qHi": "छोटू duck कहते हैं। ck एक ध्वनि हो तो कितनी ध्वनियाँ?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": "3",
        "promptEn": "Chotu says duck. How many sounds, if ck is one sound?",
        "promptHi": "छोटू duck कहते हैं। ck एक ध्वनि हो तो कितनी ध्वनियाँ?"
      },
      {
        "type": "mcq",
        "titleEn": "Read sock",
        "titleHi": "sock पढ़ो",
        "qEn": "s-o-ck. What word?",
        "qHi": "s-o-ck। कौन सा शब्द?",
        "options": [
          {
            "value": "sock",
            "label": "sock",
            "emoji": "🧦"
          },
          {
            "value": "sack",
            "label": "sack",
            "emoji": "🛍️"
          },
          {
            "value": "sick",
            "label": "sick",
            "emoji": "🤒"
          }
        ],
        "answer": "sock",
        "promptEn": "s-o-ck. What word?",
        "promptHi": "s-o-ck। कौन सा शब्द?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "k-i-t is…",
        "qHi": "k-i-t है…",
        "options": [
          "kit",
          "cat",
          "cot"
        ],
        "answer": "kit",
        "speakEn": "k-i-t is…",
        "speakHi": "k-i-t है…"
      },
      {
        "type": "mcq",
        "qEn": "s-o-ck is…",
        "qHi": "s-o-ck है…",
        "options": [
          "sock",
          "sack",
          "sick"
        ],
        "answer": "sock",
        "speakEn": "s-o-ck is…",
        "speakHi": "s-o-ck है…"
      },
      {
        "type": "mcq",
        "qEn": "d-u-ck is…",
        "qHi": "d-u-ck है…",
        "options": [
          "duck",
          "dock",
          "deck"
        ],
        "answer": "duck",
        "speakEn": "d-u-ck is…",
        "speakHi": "d-u-ck है…"
      },
      {
        "type": "mcq",
        "qEn": "g-o-t is…",
        "qHi": "g-o-t है…",
        "options": [
          "got",
          "get",
          "gut"
        ],
        "answer": "got",
        "speakEn": "g-o-t is…",
        "speakHi": "g-o-t है…"
      },
      {
        "type": "mcq",
        "qEn": "c-a-t is…",
        "qHi": "c-a-t है…",
        "options": [
          "cat",
          "cot",
          "cut"
        ],
        "answer": "cat",
        "speakEn": "c-a-t is…",
        "speakHi": "c-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "First sound of red?",
        "qHi": "red की पहली ध्वनि?",
        "options": [
          "r",
          "d",
          "e"
        ],
        "answer": "r",
        "speakEn": "First sound of red?",
        "speakHi": "red की पहली ध्वनि?"
      },
      {
        "type": "mcq",
        "qEn": "ck is one sound, as in…",
        "qHi": "ck एक ध्वनि है, जैसे…",
        "options": [
          "duck",
          "cat",
          "pin"
        ],
        "answer": "duck",
        "speakEn": "ck is one sound, as in…",
        "speakHi": "ck एक ध्वनि है, जैसे…"
      },
      {
        "type": "mcq",
        "qEn": "r-u-g is…",
        "qHi": "r-u-g है…",
        "options": [
          "rug",
          "rag",
          "rig"
        ],
        "answer": "rug",
        "speakEn": "r-u-g is…",
        "speakHi": "r-u-g है…"
      },
      {
        "type": "mcq",
        "qEn": "p-e-t is…",
        "qHi": "p-e-t है…",
        "options": [
          "pet",
          "pat",
          "pot"
        ],
        "answer": "pet",
        "speakEn": "p-e-t is…",
        "speakHi": "p-e-t है…"
      },
      {
        "type": "mcq",
        "qEn": "c-u-p is…",
        "qHi": "c-u-p है…",
        "options": [
          "cup",
          "cap",
          "cop"
        ],
        "answer": "cup",
        "speakEn": "c-u-p is…",
        "speakHi": "c-u-p है…"
      },
      {
        "type": "mcq",
        "qEn": "We learn these sets before we finish…",
        "qHi": "ये समूह तब सीखते हैं जब अभी पूरी नहीं…",
        "options": [
          {
            "value": "the alphabet in order",
            "label": "the alphabet in order"
          },
          {
            "value": "our first word",
            "label": "our first word"
          }
        ],
        "answer": "the alphabet in order",
        "speakEn": "We learn these sets before we finish…",
        "speakHi": "ये समूह तब सीखते हैं जब अभी पूरी नहीं…"
      },
      {
        "type": "mcq",
        "qEn": "Segment means we break a word into…",
        "qHi": "खंड करना मतलब शब्द तोड़ना…",
        "options": [
          {
            "value": "sounds",
            "label": "pages"
          },
          {
            "value": "pages",
            "label": "pages"
          }
        ],
        "answer": "sounds",
        "speakEn": "Segment means we break a word into…",
        "speakHi": "खंड करना मतलब शब्द तोड़ना…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-3",
    "level": "lkg",
    "subject": "english",
    "n": 3,
    "titleEn": "Set 5, and captions with the, to, no, go, I",
    "titleHi": "समूह 5, और the, to, no, go, I वाले वाक्य",
    "shortEn": "Read the cat sat. Write a short caption with a tricky word.",
    "shortHi": "the cat sat पढ़ो। एक कठिन शब्द के साथ छोटा वाक्य लिखो।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Some words we learn by heart: the, to, no, go, I. Then we can read: the cat sat.",
      "capHi": "कुछ शब्द याद रखते हैं: the, to, no, go, I। फिर पढ़ सकते हैं: the cat sat।",
      "speakEn": "Set 5 joins our sounds, and we add tricky words. The cat sat. I can go. These words do not always look as they sound, so we practise them in captions.",
      "speakHi": "समूह 5 ध्वनियों से जुड़ता है, और कठिन शब्द आते हैं। The cat sat. I can go। ये शब्द जैसे दिखते हैं वैसे नहीं बजते, इसलिए वाक्यों में अभ्यास।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Read the caption",
        "titleHi": "वाक्य पढ़ो",
        "qEn": "The cat sat. Who sat?",
        "qHi": "The cat sat. कौन बैठा?",
        "sentence": "The cat sat.",
        "options": [
          {
            "value": "the cat",
            "label": "the cat",
            "emoji": "🐱"
          },
          {
            "value": "the dog",
            "label": "the dog",
            "emoji": "🐶"
          },
          {
            "value": "a duck",
            "label": "a duck",
            "emoji": "🦆"
          }
        ],
        "answer": "the cat",
        "promptEn": "The cat sat. Who sat?",
        "promptHi": "The cat sat. कौन बैठा?"
      },
      {
        "type": "sequence",
        "titleEn": "Build the caption",
        "titleHi": "वाक्य बनाओ",
        "items": [
          "The",
          "cat",
          "sat"
        ],
        "order": [
          "The",
          "cat",
          "sat"
        ],
        "titleEn2": "Tap the words in order"
      },
      {
        "type": "mcq",
        "titleEn": "A tricky word",
        "titleHi": "कठिन शब्द",
        "qEn": "Which word is a tricky word in: I can go.",
        "qHi": "I can go में कठिन शब्द कौन सा?",
        "sentence": "I can go.",
        "options": [
          "go",
          "can",
          "cat"
        ],
        "answer": "go",
        "promptEn": "Which word is a tricky word in: I can go.",
        "promptHi": "I can go में कठिन शब्द कौन सा?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "The cat sat. What did the cat do?",
        "qHi": "बिल्ली ने क्या किया?",
        "options": [
          "sat",
          "ran",
          "flew"
        ],
        "answer": "sat",
        "speakEn": "The cat sat. What did the cat do?",
        "speakHi": "बिल्ली ने क्या किया?"
      },
      {
        "type": "mcq",
        "qEn": "Which is a tricky word?",
        "qHi": "कठिन शब्द कौन सा?",
        "options": [
          "the",
          "sat",
          "pin"
        ],
        "answer": "the",
        "speakEn": "Which is a tricky word?",
        "speakHi": "कठिन शब्द कौन सा?"
      },
      {
        "type": "mcq",
        "qEn": "I can go. Who can go?",
        "qHi": "I can go. कौन जा सकता है?",
        "options": [
          "I",
          "the duck",
          "no one"
        ],
        "answer": "I",
        "speakEn": "I can go. Who can go?",
        "speakHi": "I can go. कौन जा सकता है?"
      },
      {
        "type": "mcq",
        "qEn": "No, I will not. The tricky word is…",
        "qHi": "No, I will not. कठिन शब्द…",
        "options": [
          "No",
          "will",
          "not later"
        ],
        "answer": "No",
        "speakEn": "No, I will not. The tricky word is…",
        "speakHi": "No, I will not. कठिन शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "A caption is a…",
        "qHi": "कैप्शन है…",
        "options": [
          {
            "value": "short sentence",
            "label": "short sentence"
          },
          {
            "value": "long book",
            "label": "long book"
          }
        ],
        "answer": "short sentence",
        "speakEn": "A caption is a…",
        "speakHi": "कैप्शन है…"
      },
      {
        "type": "mcq",
        "qEn": "to is a tricky word in…",
        "qHi": "to कठिन शब्द है…",
        "options": [
          {
            "value": "I go to the shop",
            "label": "I go to the shop"
          },
          {
            "value": "sat",
            "label": "sat"
          }
        ],
        "answer": "I go to the shop",
        "speakEn": "to is a tricky word in…",
        "speakHi": "to कठिन शब्द है…"
      },
      {
        "type": "mcq",
        "qEn": "The dog sat. Who sat?",
        "qHi": "The dog sat. कौन बैठा?",
        "options": [
          "the dog",
          "the cat",
          "I"
        ],
        "answer": "the dog",
        "speakEn": "The dog sat. Who sat?",
        "speakHi": "The dog sat. कौन बैठा?"
      },
      {
        "type": "mcq",
        "qEn": "We learn tricky words so we can read…",
        "qHi": "कठिन शब्द इसलिए सीखते हैं ताकि…",
        "options": [
          {
            "value": "captions",
            "label": "only Z"
          },
          {
            "value": "only Z",
            "label": "only Z"
          }
        ],
        "answer": "captions",
        "speakEn": "We learn tricky words so we can read…",
        "speakHi": "कठिन शब्द इसलिए सीखते हैं ताकि…"
      },
      {
        "type": "mcq",
        "qEn": "Which sentence has a tricky word?",
        "qHi": "किस वाक्य में कठिन शब्द है?",
        "options": [
          {
            "value": "I can go",
            "label": "I can go"
          },
          {
            "value": "sat",
            "label": "sat"
          }
        ],
        "answer": "I can go",
        "speakEn": "Which sentence has a tricky word?",
        "speakHi": "किस वाक्य में कठिन शब्द है?"
      },
      {
        "type": "mcq",
        "qEn": "go does not look exactly like it sounds. That is why it is…",
        "qHi": "go जैसे दिखता है वैसे नहीं बजता। इसलिए यह…",
        "options": [
          {
            "value": "tricky",
            "label": "easy"
          },
          {
            "value": "easy",
            "label": "easy"
          }
        ],
        "answer": "tricky",
        "speakEn": "go does not look exactly like it sounds. That is why it is…",
        "speakHi": "go जैसे दिखता है वैसे नहीं बजता। इसलिए यह…"
      },
      {
        "type": "mcq",
        "qEn": "The man sat. The first word is…",
        "qHi": "The man sat. पहला शब्द…",
        "options": [
          "The",
          "man",
          "sat"
        ],
        "answer": "The",
        "speakEn": "The man sat. The first word is…",
        "speakHi": "The man sat. पहला शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "Write in your mind: the cat sat. How many words?",
        "qHi": "मन में लिखो: the cat sat। कितने शब्द?",
        "options": [
          "3",
          "2",
          "5"
        ],
        "answer": "3",
        "speakEn": "Write in your mind: the cat sat. How many words?",
        "speakHi": "मन में लिखो: the cat sat। कितने शब्द?"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-4",
    "level": "lkg",
    "subject": "english",
    "n": 4,
    "titleEn": "CVC fluency: pot, pan, lid and more",
    "titleHi": "CVC धाराप्रवाहता: pot, pan, lid और अन्य",
    "shortEn": "A friendly word race, then spell pan or lid on tiles.",
    "shortHi": "शब्द दौड़, फिर टाइलों पर pan या lid बनाओ।",
    "scene": "home",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "We read lots of three-sound words, including Indian kitchen words: pot, pan and lid.",
      "capHi": "हम बहुत से तीन-ध्वनि शब्द पढ़ते हैं, रसोई के शब्द भी: pot, pan और lid।",
      "speakEn": "This is blending and spelling, not only picture matching. Pot, pan, lid, cat, pin, duck. Let's build pan with tiles.",
      "speakHi": "यह जोड़ना और वर्तनी है, केवल चित्र मिलाना नहीं। pot, pan, lid, cat, pin, duck। टाइलों से pan बनाओ।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Spell pan",
        "titleHi": "pan बनाओ",
        "tiles": [
          "p",
          "a",
          "n"
        ],
        "word": "pan",
        "order": [
          "p",
          "a",
          "n"
        ]
      },
      {
        "type": "word-build",
        "titleEn": "Spell lid",
        "titleHi": "lid बनाओ",
        "tiles": [
          "l",
          "i",
          "d"
        ],
        "word": "lid",
        "order": [
          "l",
          "i",
          "d"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "Word race",
        "titleHi": "शब्द दौड़",
        "qEn": "p-o-t. What word? A pot of dal.",
        "qHi": "p-o-t। कौन सा शब्द? दाल का पतीला।",
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
            "value": "pet",
            "label": "pet",
            "emoji": "🐶"
          }
        ],
        "answer": "pot",
        "promptEn": "p-o-t. What word? A pot of dal.",
        "promptHi": "p-o-t। कौन सा शब्द? दाल का पतीला।"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "p-a-n is…",
        "qHi": "p-a-n है…",
        "options": [
          "pan",
          "pin",
          "pen"
        ],
        "answer": "pan",
        "speakEn": "p-a-n is…",
        "speakHi": "p-a-n है…"
      },
      {
        "type": "mcq",
        "qEn": "l-i-d is…",
        "qHi": "l-i-d है…",
        "options": [
          "lid",
          "lad",
          "led"
        ],
        "answer": "lid",
        "speakEn": "l-i-d is…",
        "speakHi": "l-i-d है…"
      },
      {
        "type": "mcq",
        "qEn": "p-o-t is…",
        "qHi": "p-o-t है…",
        "options": [
          "pot",
          "pat",
          "pit"
        ],
        "answer": "pot",
        "speakEn": "p-o-t is…",
        "speakHi": "p-o-t है…"
      },
      {
        "type": "mcq",
        "qEn": "c-a-t is…",
        "qHi": "c-a-t है…",
        "options": [
          "cat",
          "cot",
          "cut"
        ],
        "answer": "cat",
        "speakEn": "c-a-t is…",
        "speakHi": "c-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "d-o-g is…",
        "qHi": "d-o-g है…",
        "options": [
          "dog",
          "dig",
          "dot"
        ],
        "answer": "dog",
        "speakEn": "d-o-g is…",
        "speakHi": "d-o-g है…"
      },
      {
        "type": "mcq",
        "qEn": "h-a-t is…",
        "qHi": "h-a-t है…",
        "options": [
          "hat",
          "hot",
          "hit"
        ],
        "answer": "hat",
        "speakEn": "h-a-t is…",
        "speakHi": "h-a-t है…"
      },
      {
        "type": "mcq",
        "qEn": "b-u-s is…",
        "qHi": "b-u-s है…",
        "options": [
          "bus",
          "bas",
          "bes"
        ],
        "answer": "bus",
        "speakEn": "b-u-s is…",
        "speakHi": "b-u-s है…"
      },
      {
        "type": "mcq",
        "qEn": "r-e-d is…",
        "qHi": "r-e-d है…",
        "options": [
          "red",
          "rid",
          "rod"
        ],
        "answer": "red",
        "speakEn": "r-e-d is…",
        "speakHi": "r-e-d है…"
      },
      {
        "type": "mcq",
        "qEn": "s-u-n is…",
        "qHi": "s-u-n है…",
        "options": [
          "sun",
          "sin",
          "son"
        ],
        "answer": "sun",
        "speakEn": "s-u-n is…",
        "speakHi": "s-u-n है…"
      },
      {
        "type": "mcq",
        "qEn": "A CVC word has…",
        "qHi": "CVC शब्द में होते हैं…",
        "options": [
          {
            "value": "three sounds, consonant-vowel-consonant",
            "label": "three sounds, consonant-vowel-consonant"
          },
          {
            "value": "ten letters always",
            "label": "ten letters always"
          }
        ],
        "answer": "three sounds, consonant-vowel-consonant",
        "speakEn": "A CVC word has…",
        "speakHi": "CVC शब्द में होते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Which is an Indian kitchen CVC word?",
        "qHi": "रसोई का CVC शब्द?",
        "options": [
          "pan",
          "ship",
          "train"
        ],
        "answer": "pan",
        "speakEn": "Which is an Indian kitchen CVC word?",
        "speakHi": "रसोई का CVC शब्द?"
      },
      {
        "type": "mcq",
        "qEn": "Fluency means reading pot and lid…",
        "qHi": "धाराप्रवाहता मतलब pot और lid…",
        "options": [
          {
            "value": "without slow guessing every time",
            "label": "without slow guessing every time"
          },
          {
            "value": "only tomorrow",
            "label": "only tomorrow"
          }
        ],
        "answer": "without slow guessing every time",
        "speakEn": "Fluency means reading pot and lid…",
        "speakHi": "धाराप्रवाहता मतलब pot और lid…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-5",
    "level": "lkg",
    "subject": "english",
    "n": 5,
    "titleEn": "Story talk and planned vocabulary, with a Hindi bridge",
    "titleHi": "कहानी बात और योजनाबद्ध शब्द, हिन्दी पुल के साथ",
    "shortEn": "A festival story: who, what, where and why. Five words come back later.",
    "shortHi": "त्योहार की कहानी: कौन, क्या, कहाँ, क्यों। पाँच शब्द बाद में लौटते हैं।",
    "scene": "diwali",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Amma lights a diya. Who is in the story? Where are they? Why might the room feel bright?",
      "capHi": "अम्मा दीया जलाती हैं। कहानी में कौन है? वे कहाँ हैं? कमरा उजाला क्यों लग सकता है?",
      "speakEn": "A festival story needs who, what, where and one why. New words — diya, sweet, night, bright, family — will come back next week. Diya in Hindi is also diya. Aam is mango.",
      "speakHi": "त्योहार की कहानी में कौन, क्या, कहाँ और एक क्यों चाहिए। नए शब्द — दीया, मिठाई, रात, उजाला, परिवार — अगले सप्ताह लौटेंगे।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Who is in the story?",
        "titleHi": "कहानी में कौन है?",
        "qEn": "Who lights the diya?",
        "qHi": "दीया कौन जलाता है?",
        "options": [
          {
            "value": "Amma",
            "label": "Amma",
            "emoji": "👩"
          },
          {
            "value": "a monkey",
            "label": "a monkey",
            "emoji": "🐒"
          },
          {
            "value": "a frog",
            "label": "a frog",
            "emoji": "🐸"
          }
        ],
        "answer": "Amma",
        "promptEn": "Who lights the diya?",
        "promptHi": "दीया कौन जलाता है?"
      },
      {
        "type": "mcq",
        "titleEn": "A why question",
        "titleHi": "एक क्यों प्रश्न",
        "qEn": "Why might the room feel bright?",
        "qHi": "कमरा उजाला क्यों लग सकता है?",
        "options": [
          {
            "value": "The diyas are lit",
            "label": "The diyas are lit"
          },
          {
            "value": "It is a cupboard",
            "label": "It is a cupboard"
          },
          {
            "value": "The sun went away forever",
            "label": "The sun went away forever"
          }
        ],
        "answer": "The diyas are lit",
        "promptEn": "Why might the room feel bright?",
        "promptHi": "कमरा उजाला क्यों लग सकता है?"
      },
      {
        "type": "match",
        "titleEn": "Hindi bridge words",
        "titleHi": "हिन्दी पुल शब्द",
        "pairs": [
          {
            "key": "diya",
            "leftEn": "diya",
            "leftHi": "दीया",
            "rightEn": "lamp",
            "rightHi": "दीपक"
          },
          {
            "key": "sweet",
            "leftEn": "mithai",
            "leftHi": "मिठाई",
            "rightEn": "sweet",
            "rightHi": "मीठी चीज़"
          },
          {
            "key": "family",
            "leftEn": "parivar",
            "leftHi": "परिवार",
            "rightEn": "family",
            "rightHi": "परिवार"
          }
        ]
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Where is the story set?",
        "qHi": "कहानी कहाँ है?",
        "options": [
          {
            "value": "at home at Diwali",
            "label": "at home at Diwali"
          },
          {
            "value": "in a desert only",
            "label": "in a desert only"
          }
        ],
        "answer": "at home at Diwali",
        "speakEn": "Where is the story set?",
        "speakHi": "कहानी कहाँ है?"
      },
      {
        "type": "mcq",
        "qEn": "What does Amma light?",
        "qHi": "अम्मा क्या जलाती हैं?",
        "options": [
          {
            "value": "a diya",
            "label": "a diya",
            "emoji": "🪔"
          },
          {
            "value": "a kettle",
            "label": "a kettle"
          }
        ],
        "answer": "a diya",
        "speakEn": "What does Amma light?",
        "speakHi": "अम्मा क्या जलाती हैं?"
      },
      {
        "type": "mcq",
        "qEn": "A why question asks for a…",
        "qHi": "क्यों प्रश्न माँगता है…",
        "options": [
          "reason",
          "colour only"
        ],
        "answer": "reason",
        "speakEn": "A why question asks for a…",
        "speakHi": "क्यों प्रश्न माँगता है…"
      },
      {
        "type": "mcq",
        "qEn": "Mithai means…",
        "qHi": "मिठाई मतलब…",
        "options": [
          "sweet",
          "shoe",
          "cloud"
        ],
        "answer": "sweet",
        "speakEn": "Mithai means…",
        "speakHi": "मिठाई मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "Parivar means…",
        "qHi": "परिवार मतलब…",
        "options": [
          "family",
          "rain",
          "pan"
        ],
        "answer": "family",
        "speakEn": "Parivar means…",
        "speakHi": "परिवार मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "The planned words should come back…",
        "qHi": "योजनाबद्ध शब्द लौटें…",
        "options": [
          {
            "value": "the following week",
            "label": "the following week"
          },
          {
            "value": "never",
            "label": "never"
          }
        ],
        "answer": "the following week",
        "speakEn": "The planned words should come back…",
        "speakHi": "योजनाबद्ध शब्द लौटें…"
      },
      {
        "type": "mcq",
        "qEn": "Night is when…",
        "qHi": "रात तब होती है जब…",
        "options": [
          {
            "value": "it is dark outside",
            "label": "it is dark outside"
          },
          {
            "value": "we always swim",
            "label": "we always swim"
          }
        ],
        "answer": "it is dark outside",
        "speakEn": "Night is when…",
        "speakHi": "रात तब होती है जब…"
      },
      {
        "type": "mcq",
        "qEn": "Bright means…",
        "qHi": "उजाला मतलब…",
        "options": [
          {
            "value": "full of light",
            "label": "full of light"
          },
          {
            "value": "very sour",
            "label": "very sour"
          }
        ],
        "answer": "full of light",
        "speakEn": "Bright means…",
        "speakHi": "उजाला मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "Who might feel happy in this story?",
        "qHi": "कहानी में कौन खुश हो सकता है?",
        "options": [
          {
            "value": "the family",
            "label": "the family"
          },
          {
            "value": "a melted ice only",
            "label": "a melted ice only"
          }
        ],
        "answer": "the family",
        "speakEn": "Who might feel happy in this story?",
        "speakHi": "कहानी में कौन खुश हो सकता है?"
      },
      {
        "type": "mcq",
        "qEn": "A Hindi bridge helps us…",
        "qHi": "हिन्दी पुल मदद करता है…",
        "options": [
          {
            "value": "use a home word to learn English",
            "label": "use a home word to learn English"
          },
          {
            "value": "forget Hindi",
            "label": "forget Hindi"
          }
        ],
        "answer": "use a home word to learn English",
        "speakEn": "A Hindi bridge helps us…",
        "speakHi": "हिन्दी पुल मदद करता है…"
      },
      {
        "type": "mcq",
        "qEn": "The story week is not only a video. We also…",
        "qHi": "कहानी केवल वीडियो नहीं। हम…",
        "options": [
          {
            "value": "answer questions",
            "label": "answer questions"
          },
          {
            "value": "stop at the play button",
            "label": "stop at the play button"
          }
        ],
        "answer": "answer questions",
        "speakEn": "The story week is not only a video. We also…",
        "speakHi": "कहानी केवल वीडियो नहीं। हम…"
      },
      {
        "type": "mcq",
        "qEn": "A good where-answer names a…",
        "qHi": "अच्छा कहाँ-उत्तर बताता है…",
        "options": [
          "place",
          "letter Z"
        ],
        "answer": "place",
        "speakEn": "A good where-answer names a…",
        "speakHi": "अच्छा कहाँ-उत्तर बताता है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-6",
    "level": "lkg",
    "subject": "english",
    "n": 6,
    "titleEn": "Dictation of known sounds, and careful letter formation",
    "titleHi": "जानी ध्वनियों का श्रुतलेख, और सावधानी से अक्षर बनाना",
    "shortEn": "Chotu says a word you can sound out. Write it. Then form s or a carefully.",
    "shortHi": "छोटू एक शब्द कहते हैं जिसे आप ध्वनियों से लिख सकते हैं। फिर s या a सावधानी से बनाओ।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "I will say a word you already know: sat. Hear each sound, then write the letters.",
      "capHi": "मैं एक जाना शब्द बोलूँगा: sat। हर ध्वनि सुनो, फिर अक्षर लिखो।",
      "speakEn": "This is writing from dictation, not copying a picture. We write only sounds we have been taught. Then we form s and a carefully, starting at the right place.",
      "speakHi": "यह श्रुतलेख है, चित्र की नकल नहीं। केवल सिखाई ध्वनियाँ लिखते हैं। फिर s और a सही जगह से सावधानी से बनाते हैं।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Write sat from sounds",
        "titleHi": "ध्वनियों से sat लिखो",
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
        "type": "trace",
        "titleEn": "Form the letter s",
        "titleHi": "अक्षर s बनाओ",
        "glyph": "s"
      },
      {
        "type": "mcq",
        "titleEn": "Start in the right place",
        "titleHi": "सही जगह से शुरू करो",
        "qEn": "When we form a letter carefully, we start…",
        "qHi": "अक्षर सावधानी से बनाते समय हम शुरू करते हैं…",
        "options": [
          {
            "value": "at the taught starting point",
            "label": "at the taught starting point"
          },
          {
            "value": "from any corner we like",
            "label": "from any corner we like"
          }
        ],
        "answer": "at the taught starting point",
        "promptEn": "When we form a letter carefully, we start…",
        "promptHi": "अक्षर सावधानी से बनाते समय हम शुरू करते हैं…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Chotu says s-a-t. Write…",
        "qHi": "छोटू s-a-t कहते हैं। लिखो…",
        "options": [
          "sat",
          "tas",
          "ast"
        ],
        "answer": "sat",
        "speakEn": "Chotu says s-a-t. Write…",
        "speakHi": "छोटू s-a-t कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu says p-i-n. Write…",
        "qHi": "छोटू p-i-n कहते हैं। लिखो…",
        "options": [
          "pin",
          "nip",
          "inp"
        ],
        "answer": "pin",
        "speakEn": "Chotu says p-i-n. Write…",
        "speakHi": "छोटू p-i-n कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu says c-a-t. Write…",
        "qHi": "छोटू c-a-t कहते हैं। लिखो…",
        "options": [
          "cat",
          "act",
          "tac"
        ],
        "answer": "cat",
        "speakEn": "Chotu says c-a-t. Write…",
        "speakHi": "छोटू c-a-t कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "We write only sounds we have been…",
        "qHi": "हम केवल वे ध्वनियाँ लिखते हैं जो…",
        "options": [
          "taught",
          "invented today"
        ],
        "answer": "taught",
        "speakEn": "We write only sounds we have been…",
        "speakHi": "हम केवल वे ध्वनियाँ लिखते हैं जो…"
      },
      {
        "type": "mcq",
        "qEn": "Dictation means writing from…",
        "qHi": "श्रुतलेख मतलब लिखना…",
        "options": [
          "hearing",
          "copying a TV picture only"
        ],
        "answer": "hearing",
        "speakEn": "Dictation means writing from…",
        "speakHi": "श्रुतलेख मतलब लिखना…"
      },
      {
        "type": "mcq",
        "qEn": "A careful s starts at the…",
        "qHi": "सावधान s शुरू होता है…",
        "options": [
          {
            "value": "taught starting point",
            "label": "taught starting point"
          },
          {
            "value": "bottom left always",
            "label": "bottom left always"
          }
        ],
        "answer": "taught starting point",
        "speakEn": "A careful s starts at the…",
        "speakHi": "सावधान s शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu says d-u-ck. Write…",
        "qHi": "छोटू d-u-ck कहते हैं। लिखो…",
        "options": [
          "duck",
          "cudk",
          "dkuc"
        ],
        "answer": "duck",
        "speakEn": "Chotu says d-u-ck. Write…",
        "speakHi": "छोटू d-u-ck कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu says p-a-n. Write…",
        "qHi": "छोटू p-a-n कहते हैं। लिखो…",
        "options": [
          "pan",
          "nap",
          "anp"
        ],
        "answer": "pan",
        "speakEn": "Chotu says p-a-n. Write…",
        "speakHi": "छोटू p-a-n कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "Letter formation is about…",
        "qHi": "अक्षर बनाना मतलब…",
        "options": [
          {
            "value": "how we write the letter",
            "label": "how we write the letter"
          },
          {
            "value": "only colouring it",
            "label": "only colouring it"
          }
        ],
        "answer": "how we write the letter",
        "speakEn": "Letter formation is about…",
        "speakHi": "अक्षर बनाना मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "If you hear pot, the first letter is…",
        "qHi": "अगर pot सुना, पहला अक्षर…",
        "options": [
          "p",
          "o",
          "t"
        ],
        "answer": "p",
        "speakEn": "If you hear pot, the first letter is…",
        "speakHi": "अगर pot सुना, पहला अक्षर…"
      },
      {
        "type": "mcq",
        "qEn": "If you hear lid, the last letter is…",
        "qHi": "अगर lid सुना, अंतिम अक्षर…",
        "options": [
          "d",
          "l",
          "i"
        ],
        "answer": "d",
        "speakEn": "If you hear lid, the last letter is…",
        "speakHi": "अगर lid सुना, अंतिम अक्षर…"
      },
      {
        "type": "mcq",
        "qEn": "Writing and forming letters is part of our…",
        "qHi": "लिखना और अक्षर बनाना हमारे…",
        "options": [
          {
            "value": "four-block day",
            "label": "four-block day"
          },
          {
            "value": "holiday only",
            "label": "holiday only"
          }
        ],
        "answer": "four-block day",
        "speakEn": "Writing and forming letters is part of our…",
        "speakHi": "लिखना और अक्षर बनाना हमारे…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-7",
    "level": "lkg",
    "subject": "english",
    "n": 7,
    "titleEn": "Oral language: three sentences, this or that, a or an",
    "titleHi": "मौखिक भाषा: तीन वाक्य, this या that, a या an",
    "shortEn": "Look at a market picture. Say three sentences. Choose this or that, a or an.",
    "shortHi": "बाज़ार का चित्र देखो। तीन वाक्य कहो। this या that, a या an चुनो।",
    "scene": "market",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Look with me. This is a mango. That is a cart. I can see an umbrella.",
      "capHi": "साथ देखो। This is a mango. That is a cart. I can see an umbrella.",
      "speakEn": "Oral language means we talk first. Try three short sentences. This is close to us. That is farther. We say a mango, but an umbrella, because umbrella starts with a vowel sound.",
      "speakHi": "मौखिक भाषा मतलब पहले बात। तीन छोटे वाक्य आज़माओ। This पास है, that दूर। a mango, लेकिन an umbrella, क्योंकि umbrella स्वर ध्वनि से शुरू होता है।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "This or that",
        "titleHi": "This या that",
        "qEn": "The mango in your hand is close. We say…",
        "qHi": "हाथ में आम पास है। हम कहते हैं…",
        "options": [
          {
            "value": "This is a mango",
            "label": "This is a mango"
          },
          {
            "value": "That is a mango, far away",
            "label": "That is a mango, far away"
          }
        ],
        "answer": "This is a mango",
        "promptEn": "The mango in your hand is close. We say…",
        "promptHi": "हाथ में आम पास है। हम कहते हैं…"
      },
      {
        "type": "mcq",
        "titleEn": "A or an",
        "titleHi": "A या an",
        "qEn": "Which is correct?",
        "qHi": "सही क्या है?",
        "options": [
          {
            "value": "an umbrella",
            "label": "an umbrella",
            "emoji": "☂️"
          },
          {
            "value": "a umbrella",
            "label": "a umbrella"
          }
        ],
        "answer": "an umbrella",
        "promptEn": "Which is correct?",
        "promptHi": "सही क्या है?"
      },
      {
        "type": "mcq",
        "titleEn": "Three sentences",
        "titleHi": "तीन वाक्य",
        "qEn": "A good picture talk has about…",
        "qHi": "अच्छी चित्र-बात में लगभग…",
        "options": [
          {
            "value": "three short sentences",
            "label": "three short sentences"
          },
          {
            "value": "one letter only",
            "label": "one letter only"
          }
        ],
        "answer": "three short sentences",
        "promptEn": "A good picture talk has about…",
        "promptHi": "अच्छी चित्र-बात में लगभग…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Close to us we say…",
        "qHi": "पास के लिए कहते हैं…",
        "options": [
          "this",
          "that"
        ],
        "answer": "this",
        "speakEn": "Close to us we say…",
        "speakHi": "पास के लिए कहते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Farther away we say…",
        "qHi": "दूर के लिए कहते हैं…",
        "options": [
          "that",
          "this"
        ],
        "answer": "that",
        "speakEn": "Farther away we say…",
        "speakHi": "दूर के लिए कहते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "We say ___ mango.",
        "qHi": "हम कहते हैं ___ mango.",
        "options": [
          "a",
          "an"
        ],
        "answer": "a",
        "speakEn": "We say ___ mango.",
        "speakHi": "हम कहते हैं ___ mango."
      },
      {
        "type": "mcq",
        "qEn": "We say ___ umbrella.",
        "qHi": "हम कहते हैं ___ umbrella.",
        "options": [
          "an",
          "a"
        ],
        "answer": "an",
        "speakEn": "We say ___ umbrella.",
        "speakHi": "हम कहते हैं ___ umbrella."
      },
      {
        "type": "mcq",
        "qEn": "We say ___ apple.",
        "qHi": "हम कहते हैं ___ apple.",
        "options": [
          "an",
          "a"
        ],
        "answer": "an",
        "speakEn": "We say ___ apple.",
        "speakHi": "हम कहते हैं ___ apple."
      },
      {
        "type": "mcq",
        "qEn": "We say ___ banana.",
        "qHi": "हम कहते हैं ___ banana.",
        "options": [
          "a",
          "an"
        ],
        "answer": "a",
        "speakEn": "We say ___ banana.",
        "speakHi": "हम कहते हैं ___ banana."
      },
      {
        "type": "mcq",
        "qEn": "We say ___ egg.",
        "qHi": "हम कहते हैं ___ egg.",
        "options": [
          "an",
          "a"
        ],
        "answer": "an",
        "speakEn": "We say ___ egg.",
        "speakHi": "हम कहते हैं ___ egg."
      },
      {
        "type": "mcq",
        "qEn": "Oral language comes…",
        "qHi": "मौखिक भाषा आती है…",
        "options": [
          {
            "value": "before long writing",
            "label": "before long writing"
          },
          {
            "value": "after a novel",
            "label": "after a novel"
          }
        ],
        "answer": "before long writing",
        "speakEn": "Oral language comes…",
        "speakHi": "मौखिक भाषा आती है…"
      },
      {
        "type": "mcq",
        "qEn": "A sentence starts with a capital and ends with a…",
        "qHi": "वाक्य बड़े अक्षर से शुरू, अंत में…",
        "options": [
          "full stop",
          "colour only"
        ],
        "answer": "full stop",
        "speakEn": "A sentence starts with a capital and ends with a…",
        "speakHi": "वाक्य बड़े अक्षर से शुरू, अंत में…"
      },
      {
        "type": "mcq",
        "qEn": "This is a cart. The first word is…",
        "qHi": "This is a cart. पहला शब्द…",
        "options": [
          "This",
          "cart",
          "a"
        ],
        "answer": "This",
        "speakEn": "This is a cart. The first word is…",
        "speakHi": "This is a cart. पहला शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "An is used before a…",
        "qHi": "an का प्रयोग होता है जब आगे…",
        "options": [
          {
            "value": "vowel sound",
            "label": "vowel sound"
          },
          {
            "value": "only the letter z",
            "label": "only the letter z"
          }
        ],
        "answer": "vowel sound",
        "speakEn": "An is used before a…",
        "speakHi": "an का प्रयोग होता है जब आगे…"
      },
      {
        "type": "mcq",
        "qEn": "Three sentences about a market might include…",
        "qHi": "बाज़ार के तीन वाक्यों में हो सकता है…",
        "options": [
          {
            "value": "I can see a cart",
            "label": "I can see a cart"
          },
          {
            "value": "zzzz",
            "label": "zzzz"
          }
        ],
        "answer": "I can see a cart",
        "speakEn": "Three sentences about a market might include…",
        "speakHi": "बाज़ार के तीन वाक्यों में हो सकता है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-8",
    "level": "lkg",
    "subject": "english",
    "n": 8,
    "titleEn": "A Phase 2 mini book, and a retell in order",
    "titleHi": "चरण 2 की छोटी किताब, और क्रम से दोहराना",
    "shortEn": "Read a four-page book of known words. Put the events in order.",
    "shortHi": "जाने शब्दों की चार पन्ने की किताब पढ़ो। घटनाएँ क्रम से लगाओ।",
    "scene": "school",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "Our mini book: The cat sat. The cat ran. The cat had a nap. The end.",
      "capHi": "हमारी छोटी किताब: The cat sat. The cat ran. The cat had a nap. The end.",
      "speakEn": "The words are ones we can already sound out, plus a few tricky words. After we read, we retell in order: first, next, then, last.",
      "speakHi": "शब्द वे हैं जिन्हें हम ध्वनियों से पढ़ सकते हैं, कुछ कठिन शब्द भी। पढ़ने के बाद क्रम से बताओ: पहले, फिर, तब, अंत में।"
    },
    "activities": [
      {
        "type": "sequence",
        "titleEn": "Retell in order",
        "titleHi": "क्रम से दोहराओ",
        "items": [
          "The cat sat",
          "The cat ran",
          "The cat had a nap"
        ],
        "order": [
          "The cat sat",
          "The cat ran",
          "The cat had a nap"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "What happened last?",
        "titleHi": "आखिर में क्या हुआ?",
        "qEn": "What happened last in the mini book?",
        "qHi": "छोटी किताब में आखिर में क्या हुआ?",
        "options": [
          {
            "value": "The cat had a nap",
            "label": "The cat had a nap"
          },
          {
            "value": "The cat sat first only and stopped",
            "label": "The cat sat first only and stopped"
          },
          {
            "value": "A bus flew away",
            "label": "A bus flew away"
          }
        ],
        "answer": "The cat had a nap",
        "promptEn": "What happened last in the mini book?",
        "promptHi": "छोटी किताब में आखिर में क्या हुआ?"
      },
      {
        "type": "mcq",
        "titleEn": "First event",
        "titleHi": "पहली घटना",
        "qEn": "What happened first?",
        "qHi": "पहले क्या हुआ?",
        "options": [
          {
            "value": "The cat sat",
            "label": "The cat sat"
          },
          {
            "value": "The cat had a nap",
            "label": "The cat had a nap"
          }
        ],
        "answer": "The cat sat",
        "promptEn": "What happened first?",
        "promptHi": "पहले क्या हुआ?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "First means…",
        "qHi": "पहले मतलब…",
        "options": [
          {
            "value": "at the beginning",
            "label": "at the beginning"
          },
          {
            "value": "at the end",
            "label": "at the end"
          }
        ],
        "answer": "at the beginning",
        "speakEn": "First means…",
        "speakHi": "पहले मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "Last means…",
        "qHi": "आखिर मतलब…",
        "options": [
          {
            "value": "at the end",
            "label": "at the end"
          },
          {
            "value": "before the start",
            "label": "before the start"
          }
        ],
        "answer": "at the end",
        "speakEn": "Last means…",
        "speakHi": "आखिर मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "After the cat sat, the cat…",
        "qHi": "बिल्ली बैठने के बाद…",
        "options": [
          "ran",
          "vanished forever"
        ],
        "answer": "ran",
        "speakEn": "After the cat sat, the cat…",
        "speakHi": "बिल्ली बैठने के बाद…"
      },
      {
        "type": "mcq",
        "qEn": "A mini book this week uses…",
        "qHi": "इस सप्ताह की छोटी किताब में…",
        "options": [
          {
            "value": "known words plus a few tricky words",
            "label": "known words plus a few tricky words"
          },
          {
            "value": "only long university words",
            "label": "only long university words"
          }
        ],
        "answer": "known words plus a few tricky words",
        "speakEn": "A mini book this week uses…",
        "speakHi": "इस सप्ताह की छोटी किताब में…"
      },
      {
        "type": "mcq",
        "qEn": "Retell in order helps us…",
        "qHi": "क्रम से दोहराना मदद करता है…",
        "options": [
          {
            "value": "remember the story",
            "label": "forget the story"
          },
          {
            "value": "forget the story",
            "label": "forget the story"
          }
        ],
        "answer": "remember the story",
        "speakEn": "Retell in order helps us…",
        "speakHi": "क्रम से दोहराना मदद करता है…"
      },
      {
        "type": "mcq",
        "qEn": "The cat had a nap. Nap means…",
        "qHi": "Nap मतलब…",
        "options": [
          {
            "value": "a short sleep",
            "label": "a short sleep"
          },
          {
            "value": "a loud song",
            "label": "a loud song"
          }
        ],
        "answer": "a short sleep",
        "speakEn": "The cat had a nap. Nap means…",
        "speakHi": "Nap मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "How many pages might a first mini book have?",
        "qHi": "पहली छोटी किताब में लगभग कितने पन्ने?",
        "options": [
          "4",
          "40"
        ],
        "answer": "4",
        "speakEn": "How many pages might a first mini book have?",
        "speakHi": "पहली छोटी किताब में लगभग कितने पन्ने?"
      },
      {
        "type": "mcq",
        "qEn": "Next comes after…",
        "qHi": "Next आता है… के बाद",
        "options": [
          "first",
          "never"
        ],
        "answer": "first",
        "speakEn": "Next comes after…",
        "speakHi": "Next आता है… के बाद"
      },
      {
        "type": "mcq",
        "qEn": "The end comes…",
        "qHi": "The end आता है…",
        "options": [
          {
            "value": "after the last event",
            "label": "after the last event"
          },
          {
            "value": "before page one",
            "label": "before page one"
          }
        ],
        "answer": "after the last event",
        "speakEn": "The end comes…",
        "speakHi": "The end आता है…"
      },
      {
        "type": "mcq",
        "qEn": "A good retell uses the words…",
        "qHi": "अच्छा दोहराना इन शब्दों से…",
        "options": [
          {
            "value": "first, next, then, last",
            "label": "first, next, then, last"
          },
          {
            "value": "maybe, never",
            "label": "maybe, never"
          }
        ],
        "answer": "first, next, then, last",
        "speakEn": "A good retell uses the words…",
        "speakHi": "अच्छा दोहराना इन शब्दों से…"
      },
      {
        "type": "mcq",
        "qEn": "The cat sat is a sentence we can…",
        "qHi": "The cat sat एक वाक्य है जिसे हम…",
        "options": [
          "read",
          "never sound"
        ],
        "answer": "read",
        "speakEn": "The cat sat is a sentence we can…",
        "speakHi": "The cat sat एक वाक्य है जिसे हम…"
      },
      {
        "type": "mcq",
        "qEn": "If you mix up the order, the story…",
        "qHi": "अगर क्रम गलत हो, कहानी…",
        "options": [
          {
            "value": "does not make sense",
            "label": "does not make sense"
          },
          {
            "value": "is always better",
            "label": "is always better"
          }
        ],
        "answer": "does not make sense",
        "speakEn": "If you mix up the order, the story…",
        "speakHi": "अगर क्रम गलत हो, कहानी…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-9",
    "level": "lkg",
    "subject": "english",
    "n": 9,
    "titleEn": "Vocabulary themes and word webs: animals, food, school",
    "titleHi": "शब्द विषय और जाल: जानवर, भोजन, स्कूल",
    "shortEn": "Sort words into themes. Make a word web around school.",
    "shortHi": "शब्दों को विषयों में छाँटो। स्कूल के चारों ओर शब्द जाल बनाओ।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Words live in families. Cow and hen are animals. Roti and dal are food. Slate and bag are school words.",
      "capHi": "शब्द परिवारों में रहते हैं। गाय और मुर्गी जानवर हैं। रोटी और दाल भोजन हैं। स्लेट और बैग स्कूल के शब्द हैं।",
      "speakEn": "A word web starts with one idea in the middle, then related words around it. Let's sort, then build a school web: slate, bag, teacher, friend.",
      "speakHi": "शब्द जाल बीच में एक विचार से शुरू होता है, फिर संबंधित शब्द चारों ओर। छाँटो, फिर स्कूल का जाल: स्लेट, बैग, शिक्षक, मित्र।"
    },
    "activities": [
      {
        "type": "sort",
        "titleEn": "Sort the words",
        "titleHi": "शब्द छाँटो",
        "groups": [
          {
            "id": "animals",
            "en": "animals",
            "hi": "जानवर",
            "items": [
              {
                "en": "cow",
                "hi": "गाय"
              },
              {
                "en": "hen",
                "hi": "मुर्गी"
              }
            ]
          },
          {
            "id": "food",
            "en": "food",
            "hi": "भोजन",
            "items": [
              {
                "en": "roti",
                "hi": "रोटी"
              },
              {
                "en": "dal",
                "hi": "दाल"
              }
            ]
          },
          {
            "id": "school",
            "en": "school",
            "hi": "स्कूल",
            "items": [
              {
                "en": "slate",
                "hi": "स्लेट"
              },
              {
                "en": "bag",
                "hi": "बैग"
              }
            ]
          }
        ]
      },
      {
        "type": "mcq",
        "titleEn": "School word web",
        "titleHi": "स्कूल का शब्द जाल",
        "qEn": "Which word belongs on a school word web?",
        "qHi": "स्कूल के शब्द जाल में कौन सा शब्द आएगा?",
        "options": [
          {
            "value": "teacher",
            "label": "teacher",
            "emoji": "👩‍🏫"
          },
          {
            "value": "ocean liner",
            "label": "ocean liner"
          },
          {
            "value": "volcano",
            "label": "volcano"
          }
        ],
        "answer": "teacher",
        "promptEn": "Which word belongs on a school word web?",
        "promptHi": "स्कूल के शब्द जाल में कौन सा शब्द आएगा?"
      },
      {
        "type": "match",
        "titleEn": "Theme match",
        "titleHi": "विषय मिलाओ",
        "pairs": [
          {
            "key": "cow",
            "leftEn": "cow",
            "leftHi": "गाय",
            "rightEn": "animal",
            "rightHi": "जानवर"
          },
          {
            "key": "roti",
            "leftEn": "roti",
            "leftHi": "रोटी",
            "rightEn": "food",
            "rightHi": "भोजन"
          },
          {
            "key": "bag",
            "leftEn": "bag",
            "leftHi": "बैग",
            "rightEn": "school",
            "rightHi": "स्कूल"
          }
        ]
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Cow belongs with…",
        "qHi": "गाय जुड़ती है…",
        "options": [
          "animals",
          "food"
        ],
        "answer": "animals",
        "speakEn": "Cow belongs with…",
        "speakHi": "गाय जुड़ती है…"
      },
      {
        "type": "mcq",
        "qEn": "Roti belongs with…",
        "qHi": "रोटी जुड़ती है…",
        "options": [
          "food",
          "school"
        ],
        "answer": "food",
        "speakEn": "Roti belongs with…",
        "speakHi": "रोटी जुड़ती है…"
      },
      {
        "type": "mcq",
        "qEn": "A slate belongs with…",
        "qHi": "स्लेट जुड़ती है…",
        "options": [
          "school",
          "animals"
        ],
        "answer": "school",
        "speakEn": "A slate belongs with…",
        "speakHi": "स्लेट जुड़ती है…"
      },
      {
        "type": "mcq",
        "qEn": "Hen is an…",
        "qHi": "मुर्गी है…",
        "options": [
          "animal",
          "vehicle"
        ],
        "answer": "animal",
        "speakEn": "Hen is an…",
        "speakHi": "मुर्गी है…"
      },
      {
        "type": "mcq",
        "qEn": "Dal is…",
        "qHi": "दाल है…",
        "options": [
          "food",
          "a letter"
        ],
        "answer": "food",
        "speakEn": "Dal is…",
        "speakHi": "दाल है…"
      },
      {
        "type": "mcq",
        "qEn": "A word web starts with…",
        "qHi": "शब्द जाल शुरू होता है…",
        "options": [
          {
            "value": "one idea in the middle",
            "label": "one idea in the middle"
          },
          {
            "value": "a random list only",
            "label": "a random list only"
          }
        ],
        "answer": "one idea in the middle",
        "speakEn": "A word web starts with…",
        "speakHi": "शब्द जाल शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "Friend can sit on a ___ word web.",
        "qHi": "मित्र बैठ सकता है ___ जाल पर।",
        "options": [
          "school",
          "ocean only"
        ],
        "answer": "school",
        "speakEn": "Friend can sit on a ___ word web.",
        "speakHi": "मित्र बैठ सकता है ___ जाल पर।"
      },
      {
        "type": "mcq",
        "qEn": "Mango sits best with…",
        "qHi": "आम सबसे अच्छा बैठता है…",
        "options": [
          "food",
          "shoes"
        ],
        "answer": "food",
        "speakEn": "Mango sits best with…",
        "speakHi": "आम सबसे अच्छा बैठता है…"
      },
      {
        "type": "mcq",
        "qEn": "Themes help us…",
        "qHi": "विषय मदद करते हैं…",
        "options": [
          {
            "value": "remember and use words",
            "label": "forget words"
          },
          {
            "value": "forget words",
            "label": "forget words"
          }
        ],
        "answer": "remember and use words",
        "speakEn": "Themes help us…",
        "speakHi": "विषय मदद करते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Which is not a school word?",
        "qHi": "स्कूल का शब्द कौन सा नहीं?",
        "options": [
          "cow",
          "teacher"
        ],
        "answer": "cow",
        "speakEn": "Which is not a school word?",
        "speakHi": "स्कूल का शब्द कौन सा नहीं?"
      },
      {
        "type": "mcq",
        "qEn": "Bag, slate and teacher all belong to…",
        "qHi": "बैग, स्लेट और शिक्षक सब…",
        "options": [
          "school",
          "weather"
        ],
        "answer": "school",
        "speakEn": "Bag, slate and teacher all belong to…",
        "speakHi": "बैग, स्लेट और शिक्षक सब…"
      },
      {
        "type": "mcq",
        "qEn": "A planned vocabulary set comes back…",
        "qHi": "योजनाबद्ध शब्द समूह लौटता है…",
        "options": [
          {
            "value": "later in the term",
            "label": "never"
          },
          {
            "value": "never",
            "label": "never"
          }
        ],
        "answer": "later in the term",
        "speakEn": "A planned vocabulary set comes back…",
        "speakHi": "योजनाबद्ध शब्द समूह लौटता है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-eng-10",
    "level": "lkg",
    "subject": "english",
    "n": 10,
    "titleEn": "Spaced mastery of Phase 2 reading, writing and story questions",
    "titleHi": "चरण 2 पढ़ना, लिखना और कहानी प्रश्नों की दोहराई महारत",
    "shortEn": "Mix earlier units: read, write, retell and answer a why-question.",
    "shortHi": "पहले की इकाइयाँ मिलाओ: पढ़ो, लिखो, दोहराओ और एक क्यों-प्रश्न का उत्तर दो।",
    "scene": "school",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "Today we mix everything: a caption, a spelled word, a retell and a why-question from our festival story.",
      "capHi": "आज सब मिलाते हैं: एक वाक्य, एक वर्तनी, एक दोहराना और त्योहार की कहानी का क्यों-प्रश्न।",
      "speakEn": "Spaced mastery means we come back to older work so it stays strong. Read the cat sat. Spell pan. Remember why the room felt bright.",
      "speakHi": "दोहराई महारत मतलब पुराना काम फिर आता है ताकि मजबूत रहे। the cat sat पढ़ो। pan की वर्तनी। कमरा उजाला क्यों लगा, याद करो।"
    },
    "activities": [
      {
        "type": "word-build",
        "titleEn": "Spell a known word",
        "titleHi": "जाना शब्द बनाओ",
        "tiles": [
          "p",
          "a",
          "n"
        ],
        "word": "pan",
        "order": [
          "p",
          "a",
          "n"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "Read a caption",
        "titleHi": "वाक्य पढ़ो",
        "qEn": "The cat sat. What did the cat do?",
        "qHi": "The cat sat. बिल्ली ने क्या किया?",
        "sentence": "The cat sat.",
        "options": [
          "sat",
          "flew",
          "sank"
        ],
        "answer": "sat",
        "promptEn": "The cat sat. What did the cat do?",
        "promptHi": "The cat sat. बिल्ली ने क्या किया?"
      },
      {
        "type": "mcq",
        "titleEn": "A why-question",
        "titleHi": "एक क्यों-प्रश्न",
        "qEn": "Why might a Diwali room feel bright?",
        "qHi": "दिवाली का कमरा उजाला क्यों लग सकता है?",
        "options": [
          {
            "value": "The diyas are lit",
            "label": "The diyas are lit"
          },
          {
            "value": "The moon hid under a bed",
            "label": "The moon hid under a bed"
          }
        ],
        "answer": "The diyas are lit",
        "promptEn": "Why might a Diwali room feel bright?",
        "promptHi": "दिवाली का कमरा उजाला क्यों लग सकता है?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "s-o-ck is…",
        "qHi": "s-o-ck है…",
        "options": [
          "sock",
          "sack",
          "sick"
        ],
        "answer": "sock",
        "speakEn": "s-o-ck is…",
        "speakHi": "s-o-ck है…"
      },
      {
        "type": "mcq",
        "qEn": "d-u-ck is…",
        "qHi": "d-u-ck है…",
        "options": [
          "duck",
          "deck",
          "dock"
        ],
        "answer": "duck",
        "speakEn": "d-u-ck is…",
        "speakHi": "d-u-ck है…"
      },
      {
        "type": "mcq",
        "qEn": "A tricky word is…",
        "qHi": "कठिन शब्द है…",
        "options": [
          "the",
          "sat"
        ],
        "answer": "the",
        "speakEn": "A tricky word is…",
        "speakHi": "कठिन शब्द है…"
      },
      {
        "type": "mcq",
        "qEn": "p-a-n is…",
        "qHi": "p-a-n है…",
        "options": [
          "pan",
          "pin",
          "pen"
        ],
        "answer": "pan",
        "speakEn": "p-a-n is…",
        "speakHi": "p-a-n है…"
      },
      {
        "type": "mcq",
        "qEn": "First, next, then, last helps us…",
        "qHi": "पहले, फिर, तब, अंत मदद करता है…",
        "options": [
          {
            "value": "retell in order",
            "label": "retell in order"
          },
          {
            "value": "skip the story",
            "label": "skip the story"
          }
        ],
        "answer": "retell in order",
        "speakEn": "First, next, then, last helps us…",
        "speakHi": "पहले, फिर, तब, अंत मदद करता है…"
      },
      {
        "type": "mcq",
        "qEn": "We say ___ umbrella.",
        "qHi": "हम कहते हैं ___ umbrella.",
        "options": [
          "an",
          "a"
        ],
        "answer": "an",
        "speakEn": "We say ___ umbrella.",
        "speakHi": "हम कहते हैं ___ umbrella."
      },
      {
        "type": "mcq",
        "qEn": "Roti belongs with…",
        "qHi": "रोटी जुड़ती है…",
        "options": [
          "food",
          "animals"
        ],
        "answer": "food",
        "speakEn": "Roti belongs with…",
        "speakHi": "रोटी जुड़ती है…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu says l-i-d. Write…",
        "qHi": "छोटू l-i-d कहते हैं। लिखो…",
        "options": [
          "lid",
          "dil",
          "ild"
        ],
        "answer": "lid",
        "speakEn": "Chotu says l-i-d. Write…",
        "speakHi": "छोटू l-i-d कहते हैं। लिखो…"
      },
      {
        "type": "mcq",
        "qEn": "Who lights the diya in our story?",
        "qHi": "हमारी कहानी में दीया कौन जलाता है?",
        "options": [
          "Amma",
          "a frog"
        ],
        "answer": "Amma",
        "speakEn": "Who lights the diya in our story?",
        "speakHi": "हमारी कहानी में दीया कौन जलाता है?"
      },
      {
        "type": "mcq",
        "qEn": "ck is one sound in…",
        "qHi": "ck एक ध्वनि है… में",
        "options": [
          "duck",
          "cat"
        ],
        "answer": "duck",
        "speakEn": "ck is one sound in…",
        "speakHi": "ck एक ध्वनि है… में"
      },
      {
        "type": "mcq",
        "qEn": "This is for something…",
        "qHi": "This होता है किसी चीज़ के लिए जो…",
        "options": [
          "close",
          "far only"
        ],
        "answer": "close",
        "speakEn": "This is for something…",
        "speakHi": "This होता है किसी चीज़ के लिए जो…"
      },
      {
        "type": "mcq",
        "qEn": "Mastery means we can still do last month's work…",
        "qHi": "महारत मतलब पिछले महीने का काम अभी भी…",
        "options": [
          {
            "value": "well",
            "label": "well"
          },
          {
            "value": "never again",
            "label": "never again"
          }
        ],
        "answer": "well",
        "speakEn": "Mastery means we can still do last month's work…",
        "speakHi": "महारत मतलब पिछले महीने का काम अभी भी…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-1",
    "level": "lkg",
    "subject": "maths",
    "n": 1,
    "titleEn": "Ten-frames, subitise to 5, and secure 1 to 10",
    "titleHi": "दस-फ्रेम, 5 तक एक नज़र में, और 1 से 10 पक्का",
    "shortEn": "Show 7 on a ten-frame. Name 4 without counting one by one. Talk about the number.",
    "shortHi": "दस-फ्रेम पर 7 दिखाओ। 4 बिना एक-एक गिने नाम लो। संख्या के बारे में बात करो।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "A ten-frame has two rows of five. 7 is a full five and two more. 4 we can see in one look.",
      "capHi": "दस-फ्रेम में पाँच की दो पंक्तियाँ हैं। 7 पूरा पाँच और दो और है। 4 एक नज़र में दिखता है।",
      "speakEn": "We secure 1 to 10 with maths talk, not only by saying the names. How do you see 7? I see 5 and 2. Subitise means see a small amount at a glance.",
      "speakHi": "1 से 10 को गणित-बात से पक्का करते हैं, केवल नाम नहीं। 7 कैसे दिखता है? मैं 5 और 2 देखता हूँ। एक नज़र में छोटी मात्रा देखना सबिटाइज़ है।"
    },
    "activities": [
      {
        "type": "ten-frame",
        "titleEn": "Show 7",
        "titleHi": "7 दिखाओ",
        "filled": 7,
        "qEn": "How many are filled on the ten-frame?",
        "qHi": "दस-फ्रेम पर कितने भरे हैं?",
        "options": [
          "6",
          "7",
          "8"
        ],
        "answer": "7"
      },
      {
        "type": "mcq",
        "titleEn": "Subitise 4",
        "titleHi": "4 एक नज़र में",
        "qEn": "How many dots? Try to see them all at once.",
        "qHi": "कितने बिंदु? एक साथ देखने की कोशिश करो।",
        "showEmoji": "••••",
        "options": [
          "4",
          "3",
          "5"
        ],
        "answer": "4",
        "promptEn": "How many dots? Try to see them all at once.",
        "promptHi": "कितने बिंदु? एक साथ देखने की कोशिश करो।"
      },
      {
        "type": "mcq",
        "titleEn": "Maths talk",
        "titleHi": "गणित-बात",
        "qEn": "7 on a ten-frame is…",
        "qHi": "दस-फ्रेम पर 7 है…",
        "options": [
          {
            "value": "5 and 2 more",
            "label": "5 and 2 more"
          },
          {
            "value": "only 1 and nothing else",
            "label": "only 1 and nothing else"
          }
        ],
        "answer": "5 and 2 more",
        "promptEn": "7 on a ten-frame is…",
        "promptHi": "दस-फ्रेम पर 7 है…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A ten-frame shows numbers to…",
        "qHi": "दस-फ्रेम संख्याएँ दिखाता है… तक",
        "options": [
          "10",
          "100"
        ],
        "answer": "10",
        "speakEn": "A ten-frame shows numbers to…",
        "speakHi": "दस-फ्रेम संख्याएँ दिखाता है… तक"
      },
      {
        "type": "mcq",
        "qEn": "5 and 2 more is…",
        "qHi": "5 और 2 और है…",
        "options": [
          "7",
          "52"
        ],
        "answer": "7",
        "speakEn": "5 and 2 more is…",
        "speakHi": "5 और 2 और है…"
      },
      {
        "type": "mcq",
        "qEn": "5 and 3 more is…",
        "qHi": "5 और 3 और है…",
        "options": [
          "8",
          "53"
        ],
        "answer": "8",
        "speakEn": "5 and 3 more is…",
        "speakHi": "5 और 3 और है…"
      },
      {
        "type": "mcq",
        "qEn": "5 and 5 is…",
        "qHi": "5 और 5 है…",
        "options": [
          "10",
          "55"
        ],
        "answer": "10",
        "speakEn": "5 and 5 is…",
        "speakHi": "5 और 5 है…"
      },
      {
        "type": "mcq",
        "qEn": "Subitise 3. How many?",
        "qHi": "3 एक नज़र में। कितने?",
        "options": [
          "3",
          "8"
        ],
        "answer": "3",
        "speakEn": "Subitise 3. How many?",
        "speakHi": "3 एक नज़र में। कितने?"
      },
      {
        "type": "mcq",
        "qEn": "A full ten-frame is…",
        "qHi": "भरा दस-फ्रेम है…",
        "options": [
          "10",
          "2"
        ],
        "answer": "10",
        "speakEn": "A full ten-frame is…",
        "speakHi": "भरा दस-फ्रेम है…"
      },
      {
        "type": "mcq",
        "qEn": "4 and 1 more is…",
        "qHi": "4 और 1 और है…",
        "options": [
          "5",
          "41"
        ],
        "answer": "5",
        "speakEn": "4 and 1 more is…",
        "speakHi": "4 और 1 और है…"
      },
      {
        "type": "mcq",
        "qEn": "6 is 5 and…",
        "qHi": "6 है 5 और…",
        "options": [
          "1",
          "10"
        ],
        "answer": "1",
        "speakEn": "6 is 5 and…",
        "speakHi": "6 है 5 और…"
      },
      {
        "type": "mcq",
        "qEn": "9 is 5 and…",
        "qHi": "9 है 5 और…",
        "options": [
          "4",
          "0"
        ],
        "answer": "4",
        "speakEn": "9 is 5 and…",
        "speakHi": "9 है 5 और…"
      },
      {
        "type": "mcq",
        "qEn": "Maths talk means we say how we…",
        "qHi": "गणित-बात मतलब हम बताते हैं कैसे…",
        "options": [
          "see the number",
          "hide the number"
        ],
        "answer": "see the number",
        "speakEn": "Maths talk means we say how we…",
        "speakHi": "गणित-बात मतलब हम बताते हैं कैसे…"
      },
      {
        "type": "mcq",
        "qEn": "Empty boxes on a ten-frame for 7:",
        "qHi": "7 के दस-फ्रेम पर खाली घर:",
        "options": [
          "3",
          "7"
        ],
        "answer": "3",
        "speakEn": "Empty boxes on a ten-frame for 7:",
        "speakHi": "7 के दस-फ्रेम पर खाली घर:"
      },
      {
        "type": "mcq",
        "qEn": "We should be sure of 1 to 10 before we rush to…",
        "qHi": "1 से 10 पक्के हों, तब जाकर भागें…",
        "options": [
          "bigger numbers",
          "forgetting 7"
        ],
        "answer": "bigger numbers",
        "speakEn": "We should be sure of 1 to 10 before we rush to…",
        "speakHi": "1 से 10 पक्के हों, तब जाकर भागें…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-2",
    "level": "lkg",
    "subject": "maths",
    "n": 2,
    "titleEn": "Number bonds to 5, then to 10, with CPA",
    "titleHi": "5 तक, फिर 10 तक संख्या जोड़, CPA के साथ",
    "shortEn": "3 and how many make 5? Then 6 and how many make 10, with objects then numbers.",
    "shortHi": "3 और कितने मिलकर 5? फिर 6 और कितने मिलकर 10, पहले वस्तुएँ फिर संख्याएँ।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "A number bond is a pair that makes a total. 3 and 2 make 5. 6 and 4 make 10.",
      "capHi": "संख्या जोड़ एक जोड़ा है जो कुल बनाता है। 3 और 2 मिलकर 5। 6 और 4 मिलकर 10।",
      "speakEn": "We start with objects, then pictures, then numbers. If you have 3 laddoos, how many more to make 5? If you have 6, how many more to make 10?",
      "speakHi": "पहले वस्तुएँ, फिर चित्र, फिर संख्याएँ। 3 लड्डू हों तो 5 बनाने के लिए कितने और? 6 हों तो 10 बनाने के लिए कितने और?"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Bond to 5",
        "titleHi": "5 का जोड़",
        "qEn": "3 and how many make 5?",
        "qHi": "3 और कितने मिलकर 5?",
        "options": [
          "2",
          "3",
          "5"
        ],
        "answer": "2",
        "promptEn": "3 and how many make 5?",
        "promptHi": "3 और कितने मिलकर 5?"
      },
      {
        "type": "ten-frame",
        "titleEn": "Make 10",
        "titleHi": "10 बनाओ",
        "filled": 6,
        "qEn": "6 are filled. How many more to make 10?",
        "qHi": "6 भरे हैं। 10 बनाने के लिए कितने और?",
        "options": [
          "3",
          "4",
          "5"
        ],
        "answer": "4"
      },
      {
        "type": "mcq",
        "titleEn": "Bond to 10",
        "titleHi": "10 का जोड़",
        "qEn": "6 and how many make 10?",
        "qHi": "6 और कितने मिलकर 10?",
        "options": [
          "4",
          "6",
          "16"
        ],
        "answer": "4",
        "promptEn": "6 and how many make 10?",
        "promptHi": "6 और कितने मिलकर 10?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "4 and how many make 5?",
        "qHi": "4 और कितने मिलकर 5?",
        "options": [
          "1",
          "4"
        ],
        "answer": "1",
        "speakEn": "4 and how many make 5?",
        "speakHi": "4 और कितने मिलकर 5?"
      },
      {
        "type": "mcq",
        "qEn": "1 and how many make 5?",
        "qHi": "1 और कितने मिलकर 5?",
        "options": [
          "4",
          "1"
        ],
        "answer": "4",
        "speakEn": "1 and how many make 5?",
        "speakHi": "1 और कितने मिलकर 5?"
      },
      {
        "type": "mcq",
        "qEn": "0 and 5 make…",
        "qHi": "0 और 5 मिलकर…",
        "options": [
          "5",
          "0"
        ],
        "answer": "5",
        "speakEn": "0 and 5 make…",
        "speakHi": "0 और 5 मिलकर…"
      },
      {
        "type": "mcq",
        "qEn": "2 and 3 make…",
        "qHi": "2 और 3 मिलकर…",
        "options": [
          "5",
          "23"
        ],
        "answer": "5",
        "speakEn": "2 and 3 make…",
        "speakHi": "2 और 3 मिलकर…"
      },
      {
        "type": "mcq",
        "qEn": "7 and how many make 10?",
        "qHi": "7 और कितने मिलकर 10?",
        "options": [
          "3",
          "7"
        ],
        "answer": "3",
        "speakEn": "7 and how many make 10?",
        "speakHi": "7 और कितने मिलकर 10?"
      },
      {
        "type": "mcq",
        "qEn": "8 and how many make 10?",
        "qHi": "8 और कितने मिलकर 10?",
        "options": [
          "2",
          "8"
        ],
        "answer": "2",
        "speakEn": "8 and how many make 10?",
        "speakHi": "8 और कितने मिलकर 10?"
      },
      {
        "type": "mcq",
        "qEn": "5 and 5 make…",
        "qHi": "5 और 5 मिलकर…",
        "options": [
          "10",
          "55"
        ],
        "answer": "10",
        "speakEn": "5 and 5 make…",
        "speakHi": "5 और 5 मिलकर…"
      },
      {
        "type": "mcq",
        "qEn": "9 and 1 make…",
        "qHi": "9 और 1 मिलकर…",
        "options": [
          "10",
          "91"
        ],
        "answer": "10",
        "speakEn": "9 and 1 make…",
        "speakHi": "9 और 1 मिलकर…"
      },
      {
        "type": "mcq",
        "qEn": "CPA means we move from objects to pictures to…",
        "qHi": "CPA मतलब वस्तुओं से चित्रों से…",
        "options": [
          "numbers",
          "guessing only"
        ],
        "answer": "numbers",
        "speakEn": "CPA means we move from objects to pictures to…",
        "speakHi": "CPA मतलब वस्तुओं से चित्रों से…"
      },
      {
        "type": "mcq",
        "qEn": "A bond is two parts that make a…",
        "qHi": "जोड़ दो भाग हैं जो बनाते हैं…",
        "options": [
          "total",
          "letter"
        ],
        "answer": "total",
        "speakEn": "A bond is two parts that make a…",
        "speakHi": "जोड़ दो भाग हैं जो बनाते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "10 take away 4 leaves…",
        "qHi": "10 में से 4 लेने पर बचते…",
        "options": [
          "6",
          "14"
        ],
        "answer": "6",
        "speakEn": "10 take away 4 leaves…",
        "speakHi": "10 में से 4 लेने पर बचते…"
      },
      {
        "type": "mcq",
        "qEn": "If 6 and 4 make 10, then 4 and 6 make…",
        "qHi": "अगर 6 और 4 मिलकर 10, तो 4 और 6 मिलकर…",
        "options": [
          "10",
          "46"
        ],
        "answer": "10",
        "speakEn": "If 6 and 4 make 10, then 4 and 6 make…",
        "speakHi": "अगर 6 और 4 मिलकर 10, तो 4 और 6 मिलकर…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-3",
    "level": "lkg",
    "subject": "maths",
    "n": 3,
    "titleEn": "11 to 20 as 10 and some ones, on a double ten-frame",
    "titleHi": "11 से 20: 10 और कुछ इकाई, दो दस-फ्रेम पर",
    "shortEn": "14 is a full ten and 4 ones. Build it on two ten-frames.",
    "shortHi": "14 एक पूरा दस और 4 इकाई है। दो दस-फ्रेम पर बनाओ।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "Teen numbers are a full ten and some ones. 14 is 10 and 4. See it on two ten-frames.",
      "capHi": "टीन्स संख्याएँ एक पूरा दस और कुछ इकाई हैं। 14 है 10 और 4। दो दस-फ्रेम पर देखो।",
      "speakEn": "We do not treat 11 to 20 as a new list of names only. 11 is 10 and 1. 20 is two full tens. That idea will help later with place value.",
      "speakHi": "11 से 20 को केवल नए नामों की सूची नहीं मानते। 11 है 10 और 1। 20 दो पूरे दस हैं। यह विचार बाद में स्थानीय मान में मदद करेगा।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "What is 14?",
        "titleHi": "14 क्या है?",
        "qEn": "14 is…",
        "qHi": "14 है…",
        "options": [
          {
            "value": "10 and 4 ones",
            "label": "10 and 4 ones"
          },
          {
            "value": "1 and 4 only",
            "label": "1 and 4 only"
          },
          {
            "value": "40",
            "label": "40"
          }
        ],
        "answer": "10 and 4 ones",
        "promptEn": "14 is…",
        "promptHi": "14 है…"
      },
      {
        "type": "ten-frame",
        "titleEn": "Ones for 14",
        "titleHi": "14 की इकाई",
        "filled": 4,
        "qEn": "This ten-frame shows the ones in 14. How many ones?",
        "qHi": "यह दस-फ्रेम 14 की इकाई दिखाता है। कितनी इकाई?",
        "options": [
          "4",
          "10",
          "14"
        ],
        "answer": "4"
      },
      {
        "type": "mcq",
        "titleEn": "Teen talk",
        "titleHi": "टीन बात",
        "qEn": "16 is a full ten and…",
        "qHi": "16 एक पूरा दस और…",
        "options": [
          "6 ones",
          "1 one",
          "60"
        ],
        "answer": "6 ones",
        "promptEn": "16 is a full ten and…",
        "promptHi": "16 एक पूरा दस और…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "11 is 10 and…",
        "qHi": "11 है 10 और…",
        "options": [
          "1",
          "11"
        ],
        "answer": "1",
        "speakEn": "11 is 10 and…",
        "speakHi": "11 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "12 is 10 and…",
        "qHi": "12 है 10 और…",
        "options": [
          "2",
          "20"
        ],
        "answer": "2",
        "speakEn": "12 is 10 and…",
        "speakHi": "12 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "13 is 10 and…",
        "qHi": "13 है 10 और…",
        "options": [
          "3",
          "30"
        ],
        "answer": "3",
        "speakEn": "13 is 10 and…",
        "speakHi": "13 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "15 is 10 and…",
        "qHi": "15 है 10 और…",
        "options": [
          "5",
          "50"
        ],
        "answer": "5",
        "speakEn": "15 is 10 and…",
        "speakHi": "15 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "17 is 10 and…",
        "qHi": "17 है 10 और…",
        "options": [
          "7",
          "70"
        ],
        "answer": "7",
        "speakEn": "17 is 10 and…",
        "speakHi": "17 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "18 is 10 and…",
        "qHi": "18 है 10 और…",
        "options": [
          "8",
          "80"
        ],
        "answer": "8",
        "speakEn": "18 is 10 and…",
        "speakHi": "18 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "19 is 10 and…",
        "qHi": "19 है 10 और…",
        "options": [
          "9",
          "90"
        ],
        "answer": "9",
        "speakEn": "19 is 10 and…",
        "speakHi": "19 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "20 is…",
        "qHi": "20 है…",
        "options": [
          {
            "value": "two full tens",
            "label": "two full tens"
          },
          {
            "value": "2 ones only",
            "label": "2 ones only"
          }
        ],
        "answer": "two full tens",
        "speakEn": "20 is…",
        "speakHi": "20 है…"
      },
      {
        "type": "mcq",
        "qEn": "10 and 4 ones is…",
        "qHi": "10 और 4 इकाई है…",
        "options": [
          "14",
          "104"
        ],
        "answer": "14",
        "speakEn": "10 and 4 ones is…",
        "speakHi": "10 और 4 इकाई है…"
      },
      {
        "type": "mcq",
        "qEn": "A double ten-frame can show to…",
        "qHi": "दो दस-फ्रेम दिखा सकते हैं… तक",
        "options": [
          "20",
          "3"
        ],
        "answer": "20",
        "speakEn": "A double ten-frame can show to…",
        "speakHi": "दो दस-फ्रेम दिखा सकते हैं… तक"
      },
      {
        "type": "mcq",
        "qEn": "Teen numbers are built from…",
        "qHi": "टीन संख्याएँ बनती हैं…",
        "options": [
          {
            "value": "ten and ones",
            "label": "ten and ones"
          },
          {
            "value": "only colours",
            "label": "only colours"
          }
        ],
        "answer": "ten and ones",
        "speakEn": "Teen numbers are built from…",
        "speakHi": "टीन संख्याएँ बनती हैं…"
      },
      {
        "type": "mcq",
        "qEn": "10 and 0 ones is…",
        "qHi": "10 और 0 इकाई है…",
        "options": [
          "10",
          "100"
        ],
        "answer": "10",
        "speakEn": "10 and 0 ones is…",
        "speakHi": "10 और 0 इकाई है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-4",
    "level": "lkg",
    "subject": "maths",
    "n": 4,
    "titleEn": "CPA addition within 10, and how many more",
    "titleHi": "10 के भीतर CPA जोड़, और कितने और",
    "shortEn": "4 laddoos and 3 more. How many, and how did you work it out?",
    "shortHi": "4 लड्डू और 3 और। कितने, और तुमने कैसे निकाला?",
    "scene": "home",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "We add with objects, then pictures, then a number sentence. 4 and 3 more is 7. How did you know?",
      "capHi": "पहले वस्तुओं से जोड़, फिर चित्र, फिर संख्या वाक्य। 4 और 3 और हैं 7। कैसे पता चला?",
      "speakEn": "How many more is also addition. If you have 4 and you need 7, you need 3 more. Always say your strategy: I counted on, or I used a bond.",
      "speakHi": "कितने और भी जोड़ है। 4 हों और 7 चाहिए, तो 3 और चाहिए। अपनी युक्ति बताओ: मैं गिनता गया, या मैंने जोड़ का उपयोग किया।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Add 4 and 3",
        "titleHi": "4 और 3 जोड़ो",
        "qEn": "4 laddoos and 3 more. How many?",
        "qHi": "4 लड्डू और 3 और। कितने?",
        "options": [
          "7",
          "43",
          "1"
        ],
        "answer": "7",
        "promptEn": "4 laddoos and 3 more. How many?",
        "promptHi": "4 लड्डू और 3 और। कितने?"
      },
      {
        "type": "mcq",
        "titleEn": "How many more",
        "titleHi": "कितने और",
        "qEn": "You have 4. You want 7. How many more?",
        "qHi": "तुम्हारे पास 4 हैं। 7 चाहिए। कितने और?",
        "options": [
          "3",
          "7",
          "11"
        ],
        "answer": "3",
        "promptEn": "You have 4. You want 7. How many more?",
        "promptHi": "तुम्हारे पास 4 हैं। 7 चाहिए। कितने और?"
      },
      {
        "type": "mcq",
        "titleEn": "A strategy",
        "titleHi": "एक युक्ति",
        "qEn": "A good way to add 4 and 3 is…",
        "qHi": "4 और 3 जोड़ने का अच्छा तरीका…",
        "options": [
          {
            "value": "count on from 4: 5, 6, 7",
            "label": "count on from 4: 5, 6, 7"
          },
          {
            "value": "guess a huge number",
            "label": "guess a huge number"
          }
        ],
        "answer": "count on from 4: 5, 6, 7",
        "promptEn": "A good way to add 4 and 3 is…",
        "promptHi": "4 और 3 जोड़ने का अच्छा तरीका…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "2 and 5 more is…",
        "qHi": "2 और 5 और है…",
        "options": [
          "7",
          "25"
        ],
        "answer": "7",
        "speakEn": "2 and 5 more is…",
        "speakHi": "2 और 5 और है…"
      },
      {
        "type": "mcq",
        "qEn": "1 and 8 more is…",
        "qHi": "1 और 8 और है…",
        "options": [
          "9",
          "18"
        ],
        "answer": "9",
        "speakEn": "1 and 8 more is…",
        "speakHi": "1 और 8 और है…"
      },
      {
        "type": "mcq",
        "qEn": "6 and 2 more is…",
        "qHi": "6 और 2 और है…",
        "options": [
          "8",
          "62"
        ],
        "answer": "8",
        "speakEn": "6 and 2 more is…",
        "speakHi": "6 और 2 और है…"
      },
      {
        "type": "mcq",
        "qEn": "5 and 4 more is…",
        "qHi": "5 और 4 और है…",
        "options": [
          "9",
          "54"
        ],
        "answer": "9",
        "speakEn": "5 and 4 more is…",
        "speakHi": "5 और 4 और है…"
      },
      {
        "type": "mcq",
        "qEn": "You have 6. You want 10. How many more?",
        "qHi": "6 हैं, 10 चाहिए। कितने और?",
        "options": [
          "4",
          "16"
        ],
        "answer": "4",
        "speakEn": "You have 6. You want 10. How many more?",
        "speakHi": "6 हैं, 10 चाहिए। कितने और?"
      },
      {
        "type": "mcq",
        "qEn": "You have 3. You want 8. How many more?",
        "qHi": "3 हैं, 8 चाहिए। कितने और?",
        "options": [
          "5",
          "11"
        ],
        "answer": "5",
        "speakEn": "You have 3. You want 8. How many more?",
        "speakHi": "3 हैं, 8 चाहिए। कितने और?"
      },
      {
        "type": "mcq",
        "qEn": "0 and 9 more is…",
        "qHi": "0 और 9 और है…",
        "options": [
          "9",
          "90"
        ],
        "answer": "9",
        "speakEn": "0 and 9 more is…",
        "speakHi": "0 और 9 और है…"
      },
      {
        "type": "mcq",
        "qEn": "7 + 2 =",
        "qHi": "7 + 2 =",
        "options": [
          "9",
          "5"
        ],
        "answer": "9",
        "speakEn": "7 + 2 =",
        "speakHi": "7 + 2 ="
      },
      {
        "type": "mcq",
        "qEn": "3 + 3 =",
        "qHi": "3 + 3 =",
        "options": [
          "6",
          "33"
        ],
        "answer": "6",
        "speakEn": "3 + 3 =",
        "speakHi": "3 + 3 ="
      },
      {
        "type": "mcq",
        "qEn": "A number sentence for 4 and 3 is…",
        "qHi": "4 और 3 का संख्या वाक्य…",
        "options": [
          "4 + 3 = 7",
          "43"
        ],
        "answer": "4 + 3 = 7",
        "speakEn": "A number sentence for 4 and 3 is…",
        "speakHi": "4 और 3 का संख्या वाक्य…"
      },
      {
        "type": "mcq",
        "qEn": "Counting on means we start from the first number and…",
        "qHi": "आगे गिनना मतलब पहली संख्या से शुरू कर…",
        "options": [
          "count the rest",
          "throw it away"
        ],
        "answer": "count the rest",
        "speakEn": "Counting on means we start from the first number and…",
        "speakHi": "आगे गिनना मतलब पहली संख्या से शुरू कर…"
      },
      {
        "type": "mcq",
        "qEn": "We should be able to say how we…",
        "qHi": "हमें बताना चाहिए हमने कैसे…",
        "options": [
          "got the answer",
          "hid the answer"
        ],
        "answer": "got the answer",
        "speakEn": "We should be able to say how we…",
        "speakHi": "हमें बताना चाहिए हमने कैसे…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-5",
    "level": "lkg",
    "subject": "maths",
    "n": 5,
    "titleEn": "Take away within 10, zero, and a missing part",
    "titleHi": "10 के भीतर घटाना, शून्य, और गुम भाग",
    "shortEn": "7 take away 2. What is left? What if we take all? Find the missing part.",
    "shortHi": "7 में से 2 लो। क्या बचा? अगर सब ले लें? गुम भाग ढूँढो।",
    "scene": "market",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "7 mangoes, sell 2. 5 are left. If we take all 7, 0 are left. Zero is a number.",
      "capHi": "7 आम, 2 बेचे। 5 बचे। अगर सारे 7 ले लें, 0 बचते हैं। शून्य एक संख्या है।",
      "speakEn": "Take away is the partner of add. A missing part is like: 3 and what make 8? That missing part is 5. Let's use objects first.",
      "speakHi": "घटाना जोड़ का साथी है। गुम भाग ऐसा: 3 और क्या मिलकर 8? वह गुम भाग 5 है। पहले वस्तुओं से करो।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Take away",
        "titleHi": "घटाओ",
        "qEn": "7 mangoes, sell 2. How many are left?",
        "qHi": "7 आम, 2 बेचे। कितने बचे?",
        "options": [
          "5",
          "9",
          "2"
        ],
        "answer": "5",
        "promptEn": "7 mangoes, sell 2. How many are left?",
        "promptHi": "7 आम, 2 बेचे। कितने बचे?"
      },
      {
        "type": "mcq",
        "titleEn": "Zero",
        "titleHi": "शून्य",
        "qEn": "7 take away 7 is…",
        "qHi": "7 में से 7 है…",
        "options": [
          "0",
          "7",
          "14"
        ],
        "answer": "0",
        "promptEn": "7 take away 7 is…",
        "promptHi": "7 में से 7 है…"
      },
      {
        "type": "mcq",
        "titleEn": "Missing part",
        "titleHi": "गुम भाग",
        "qEn": "3 and what make 8?",
        "qHi": "3 और क्या मिलकर 8?",
        "options": [
          "5",
          "8",
          "11"
        ],
        "answer": "5",
        "promptEn": "3 and what make 8?",
        "promptHi": "3 और क्या मिलकर 8?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "6 take away 1 is…",
        "qHi": "6 में से 1 है…",
        "options": [
          "5",
          "7"
        ],
        "answer": "5",
        "speakEn": "6 take away 1 is…",
        "speakHi": "6 में से 1 है…"
      },
      {
        "type": "mcq",
        "qEn": "9 take away 4 is…",
        "qHi": "9 में से 4 है…",
        "options": [
          "5",
          "13"
        ],
        "answer": "5",
        "speakEn": "9 take away 4 is…",
        "speakHi": "9 में से 4 है…"
      },
      {
        "type": "mcq",
        "qEn": "10 take away 3 is…",
        "qHi": "10 में से 3 है…",
        "options": [
          "7",
          "13"
        ],
        "answer": "7",
        "speakEn": "10 take away 3 is…",
        "speakHi": "10 में से 3 है…"
      },
      {
        "type": "mcq",
        "qEn": "8 take away 8 is…",
        "qHi": "8 में से 8 है…",
        "options": [
          "0",
          "16"
        ],
        "answer": "0",
        "speakEn": "8 take away 8 is…",
        "speakHi": "8 में से 8 है…"
      },
      {
        "type": "mcq",
        "qEn": "5 take away 0 is…",
        "qHi": "5 में से 0 है…",
        "options": [
          "5",
          "0"
        ],
        "answer": "5",
        "speakEn": "5 take away 0 is…",
        "speakHi": "5 में से 0 है…"
      },
      {
        "type": "mcq",
        "qEn": "4 and what make 10?",
        "qHi": "4 और क्या मिलकर 10?",
        "options": [
          "6",
          "14"
        ],
        "answer": "6",
        "speakEn": "4 and what make 10?",
        "speakHi": "4 और क्या मिलकर 10?"
      },
      {
        "type": "mcq",
        "qEn": "2 and what make 9?",
        "qHi": "2 और क्या मिलकर 9?",
        "options": [
          "7",
          "11"
        ],
        "answer": "7",
        "speakEn": "2 and what make 9?",
        "speakHi": "2 और क्या मिलकर 9?"
      },
      {
        "type": "mcq",
        "qEn": "10 − 6 =",
        "qHi": "10 − 6 =",
        "options": [
          "4",
          "16"
        ],
        "answer": "4",
        "speakEn": "10 − 6 =",
        "speakHi": "10 − 6 ="
      },
      {
        "type": "mcq",
        "qEn": "Zero means…",
        "qHi": "शून्य मतलब…",
        "options": [
          {
            "value": "none left",
            "label": "none left"
          },
          {
            "value": "a huge pile",
            "label": "a huge pile"
          }
        ],
        "answer": "none left",
        "speakEn": "Zero means…",
        "speakHi": "शून्य मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "A missing part is the number that…",
        "qHi": "गुम भाग वह संख्या है जो…",
        "options": [
          {
            "value": "completes the total",
            "label": "completes the total"
          },
          {
            "value": "erases the sum",
            "label": "erases the sum"
          }
        ],
        "answer": "completes the total",
        "speakEn": "A missing part is the number that…",
        "speakHi": "गुम भाग वह संख्या है जो…"
      },
      {
        "type": "mcq",
        "qEn": "5 take away 2 is…",
        "qHi": "5 में से 2 है…",
        "options": [
          "3",
          "7"
        ],
        "answer": "3",
        "speakEn": "5 take away 2 is…",
        "speakHi": "5 में से 2 है…"
      },
      {
        "type": "mcq",
        "qEn": "We check take away with objects or a…",
        "qHi": "घटाना जाँचते हैं वस्तुओं या… से",
        "options": [
          "ten-frame",
          "song only"
        ],
        "answer": "ten-frame",
        "speakEn": "We check take away with objects or a…",
        "speakHi": "घटाना जाँचते हैं वस्तुओं या… से"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-6",
    "level": "lkg",
    "subject": "maths",
    "n": 6,
    "titleEn": "Compare and order to 20, then begin 21 to 50 if secure",
    "titleHi": "20 तक तुलना और क्रम, फिर पक्का हो तो 21 से 50",
    "shortEn": "Which is more, 17 or 14? Put 11, 15, 20 in order. Write 21 only if 1 to 20 is sure.",
    "shortHi": "कौन अधिक, 17 या 14? 11, 15, 20 क्रम में लगाओ। 1 से 20 पक्के हों तभी 21 लिखो।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "On a number line or two ten-frames, 17 is more than 14 because it has more ones after ten.",
      "capHi": "संख्या रेखा या दो दस-फ्रेम पर, 17, 14 से अधिक है क्योंकि दस के बाद अधिक इकाई हैं।",
      "speakEn": "We compare and order to 20 first. Writing 21 to 50 comes only if 1 to 20 is secure. More, less, and in between are the words we use.",
      "speakHi": "पहले 20 तक तुलना और क्रम। 21 से 50 लिखना तभी जब 1 से 20 पक्के हों। अधिक, कम, और बीच में — ये शब्द प्रयोग करते हैं।"
    },
    "activities": [
      {
        "type": "compare",
        "titleEn": "Compare 17 and 14",
        "titleHi": "17 और 14 की तुलना",
        "qEn": "Which is more, 17 or 14?",
        "qHi": "कौन अधिक, 17 या 14?",
        "items": [
          {
            "id": "seventeen",
            "en": "17",
            "hi": "17",
            "size": 4,
            "color": "#2a9d8f"
          },
          {
            "id": "fourteen",
            "en": "14",
            "hi": "14",
            "size": 2,
            "color": "#e9c46a"
          }
        ],
        "answer": "seventeen"
      },
      {
        "type": "sequence",
        "titleEn": "Order to 20",
        "titleHi": "20 तक क्रम",
        "items": [
          "11",
          "15",
          "20"
        ],
        "order": [
          "11",
          "15",
          "20"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "In between",
        "titleHi": "बीच में",
        "qEn": "Which number is between 11 and 15?",
        "qHi": "11 और 15 के बीच कौन सी संख्या?",
        "options": [
          "13",
          "20",
          "2"
        ],
        "answer": "13",
        "promptEn": "Which number is between 11 and 15?",
        "promptHi": "11 और 15 के बीच कौन सी संख्या?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Which is more, 18 or 12?",
        "qHi": "कौन अधिक, 18 या 12?",
        "options": [
          "18",
          "12"
        ],
        "answer": "18",
        "speakEn": "Which is more, 18 or 12?",
        "speakHi": "कौन अधिक, 18 या 12?"
      },
      {
        "type": "mcq",
        "qEn": "Which is less, 16 or 19?",
        "qHi": "कौन कम, 16 या 19?",
        "options": [
          "16",
          "19"
        ],
        "answer": "16",
        "speakEn": "Which is less, 16 or 19?",
        "speakHi": "कौन कम, 16 या 19?"
      },
      {
        "type": "mcq",
        "qEn": "The number just after 14 is…",
        "qHi": "14 के ठीक बाद…",
        "options": [
          "15",
          "13"
        ],
        "answer": "15",
        "speakEn": "The number just after 14 is…",
        "speakHi": "14 के ठीक बाद…"
      },
      {
        "type": "mcq",
        "qEn": "The number just before 20 is…",
        "qHi": "20 के ठीक पहले…",
        "options": [
          "19",
          "21"
        ],
        "answer": "19",
        "speakEn": "The number just before 20 is…",
        "speakHi": "20 के ठीक पहले…"
      },
      {
        "type": "mcq",
        "qEn": "Order: 9, 12, 8. First is…",
        "qHi": "क्रम: 9, 12, 8। पहला है…",
        "options": [
          "8",
          "12"
        ],
        "answer": "8",
        "speakEn": "Order: 9, 12, 8. First is…",
        "speakHi": "क्रम: 9, 12, 8। पहला है…"
      },
      {
        "type": "mcq",
        "qEn": "15 is more than…",
        "qHi": "15 अधिक है… से",
        "options": [
          "11",
          "20"
        ],
        "answer": "11",
        "speakEn": "15 is more than…",
        "speakHi": "15 अधिक है… से"
      },
      {
        "type": "mcq",
        "qEn": "We write 21 to 50 only if…",
        "qHi": "21 से 50 लिखते हैं तभी जब…",
        "options": [
          {
            "value": "1 to 20 is secure",
            "label": "1 to 20 is secure"
          },
          {
            "value": "we skip 1 to 10",
            "label": "we skip 1 to 10"
          }
        ],
        "answer": "1 to 20 is secure",
        "speakEn": "We write 21 to 50 only if…",
        "speakHi": "21 से 50 लिखते हैं तभी जब…"
      },
      {
        "type": "mcq",
        "qEn": "10 and 7 ones is more than 10 and 4 ones. So 17 is more than…",
        "qHi": "10 और 7, 10 और 4 से अधिक। तो 17 अधिक है… से",
        "options": [
          "14",
          "70"
        ],
        "answer": "14",
        "speakEn": "10 and 7 ones is more than 10 and 4 ones. So 17 is more than…",
        "speakHi": "10 और 7, 10 और 4 से अधिक। तो 17 अधिक है… से"
      },
      {
        "type": "mcq",
        "qEn": "The smallest of 20, 11, 15 is…",
        "qHi": "20, 11, 15 में सबसे छोटी…",
        "options": [
          "11",
          "20"
        ],
        "answer": "11",
        "speakEn": "The smallest of 20, 11, 15 is…",
        "speakHi": "20, 11, 15 में सबसे छोटी…"
      },
      {
        "type": "mcq",
        "qEn": "The greatest of 13, 19, 16 is…",
        "qHi": "13, 19, 16 में सबसे बड़ी…",
        "options": [
          "19",
          "13"
        ],
        "answer": "19",
        "speakEn": "The greatest of 13, 19, 16 is…",
        "speakHi": "13, 19, 16 में सबसे बड़ी…"
      },
      {
        "type": "mcq",
        "qEn": "A number between 18 and 20 is…",
        "qHi": "18 और 20 के बीच…",
        "options": [
          "19",
          "1"
        ],
        "answer": "19",
        "speakEn": "A number between 18 and 20 is…",
        "speakHi": "18 और 20 के बीच…"
      },
      {
        "type": "mcq",
        "qEn": "Compare means we decide which is…",
        "qHi": "तुलना मतलब तय करना कौन…",
        "options": [
          {
            "value": "more or less",
            "label": "more or less"
          },
          {
            "value": "a colour",
            "label": "a colour"
          }
        ],
        "answer": "more or less",
        "speakEn": "Compare means we decide which is…",
        "speakHi": "तुलना मतलब तय करना कौन…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-7",
    "level": "lkg",
    "subject": "maths",
    "n": 7,
    "titleEn": "Informal measurement with a hand span, footsteps or a cup, and a record",
    "titleHi": "हाथ की बीता, कदम या प्याले से अनौपचारिक माप, और रिकॉर्ड",
    "shortEn": "How many hand spans is the table? How many cups fill the jug? Write the record.",
    "shortHi": "मेज़ कितनी बीता है? जग भरने में कितने प्याले? रिकॉर्ड लिखो।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "We measure with things we have: a hand span, footsteps, or a cup. Then we write the number down.",
      "capHi": "जो हमारे पास है उसी से मापते हैं: हाथ की बीता, कदम, या प्याला। फिर संख्या लिखते हैं।",
      "speakEn": "Informal means we are not using a ruler in centimetres yet. A record might say: the mat is 4 hand spans. The jug holds 3 cups. Always say what unit you used.",
      "speakHi": "अनौपचारिक मतलब अभी सेंटीमीटर का स्केल नहीं। रिकॉर्ड कह सकता है: चटाई 4 बीता है। जग में 3 प्याले हैं। हमेशा इकाई बताओ।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "A record",
        "titleHi": "एक रिकॉर्ड",
        "qEn": "The table is 5 hand spans. The record should include…",
        "qHi": "मेज़ 5 बीता है। रिकॉर्ड में होना चाहिए…",
        "options": [
          {
            "value": "the number and the unit: 5 hand spans",
            "label": "the number and the unit: 5 hand spans"
          },
          {
            "value": "only a smiley",
            "label": "only a smiley"
          }
        ],
        "answer": "the number and the unit: 5 hand spans",
        "promptEn": "The table is 5 hand spans. The record should include…",
        "promptHi": "मेज़ 5 बीता है। रिकॉर्ड में होना चाहिए…"
      },
      {
        "type": "compare",
        "titleEn": "Which is longer?",
        "titleHi": "कौन लंबी?",
        "qEn": "Which path is longer?",
        "qHi": "कौन सा रास्ता लंबा है?",
        "items": [
          {
            "id": "six",
            "en": "6 footsteps",
            "hi": "6 कदम",
            "size": 4,
            "color": "#457b9d"
          },
          {
            "id": "three",
            "en": "3 footsteps",
            "hi": "3 कदम",
            "size": 2,
            "color": "#a8dadc"
          }
        ],
        "answer": "six"
      },
      {
        "type": "mcq",
        "titleEn": "Capacity",
        "titleHi": "धारिता",
        "qEn": "The jug holds 3 cups of water. How many cups fill the jug?",
        "qHi": "जग में 3 प्याले पानी आते हैं। जग भरने में कितने प्याले?",
        "options": [
          "3",
          "30",
          "0"
        ],
        "answer": "3",
        "promptEn": "The jug holds 3 cups of water. How many cups fill the jug?",
        "promptHi": "जग में 3 प्याले पानी आते हैं। जग भरने में कितने प्याले?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A hand span measures…",
        "qHi": "हाथ की बीता नापती है…",
        "options": [
          "length",
          "colour"
        ],
        "answer": "length",
        "speakEn": "A hand span measures…",
        "speakHi": "हाथ की बीता नापती है…"
      },
      {
        "type": "mcq",
        "qEn": "A cup can measure…",
        "qHi": "प्याला नाप सकता है…",
        "options": [
          {
            "value": "how much a jug holds",
            "label": "how much a jug holds"
          },
          {
            "value": "the alphabet",
            "label": "the alphabet"
          }
        ],
        "answer": "how much a jug holds",
        "speakEn": "A cup can measure…",
        "speakHi": "प्याला नाप सकता है…"
      },
      {
        "type": "mcq",
        "qEn": "Footsteps can measure a…",
        "qHi": "कदम नाप सकते हैं…",
        "options": [
          "path",
          "song"
        ],
        "answer": "path",
        "speakEn": "Footsteps can measure a…",
        "speakHi": "कदम नाप सकते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "A good record names the…",
        "qHi": "अच्छा रिकॉर्ड बताता है…",
        "options": [
          {
            "value": "number and unit",
            "label": "number and unit"
          },
          {
            "value": "only a doodle",
            "label": "only a doodle"
          }
        ],
        "answer": "number and unit",
        "speakEn": "A good record names the…",
        "speakHi": "अच्छा रिकॉर्ड बताता है…"
      },
      {
        "type": "mcq",
        "qEn": "4 hand spans is longer than…",
        "qHi": "4 बीता लंबी है… से",
        "options": [
          "2 hand spans",
          "40 hand spans"
        ],
        "answer": "2 hand spans",
        "speakEn": "4 hand spans is longer than…",
        "speakHi": "4 बीता लंबी है… से"
      },
      {
        "type": "mcq",
        "qEn": "If a jug holds 5 cups, 5 is the…",
        "qHi": "अगर जग में 5 प्याले आते, 5 है…",
        "options": [
          "measure",
          "letter"
        ],
        "answer": "measure",
        "speakEn": "If a jug holds 5 cups, 5 is the…",
        "speakHi": "अगर जग में 5 प्याले आते, 5 है…"
      },
      {
        "type": "mcq",
        "qEn": "Informal measurement comes before a…",
        "qHi": "अनौपचारिक माप पहले आता है… से",
        "options": [
          "ruler in centimetres",
          "forgetting size"
        ],
        "answer": "ruler in centimetres",
        "speakEn": "Informal measurement comes before a…",
        "speakHi": "अनौपचारिक माप पहले आता है… से"
      },
      {
        "type": "mcq",
        "qEn": "We should use the same unit when we…",
        "qHi": "तुलना करते समय एक ही…",
        "options": [
          "compare",
          "sing"
        ],
        "answer": "compare",
        "speakEn": "We should use the same unit when we…",
        "speakHi": "तुलना करते समय एक ही…"
      },
      {
        "type": "mcq",
        "qEn": "2 cups and 1 more cup is…",
        "qHi": "2 प्याले और 1 और प्याला…",
        "options": [
          "3 cups",
          "21 cups"
        ],
        "answer": "3 cups",
        "speakEn": "2 cups and 1 more cup is…",
        "speakHi": "2 प्याले और 1 और प्याला…"
      },
      {
        "type": "mcq",
        "qEn": "A short mat might be 2 hand spans. A long mat might be…",
        "qHi": "छोटी चटाई 2 बीता। लंबी चटाई हो सकती है…",
        "options": [
          "6 hand spans",
          "0 hand spans"
        ],
        "answer": "6 hand spans",
        "speakEn": "A short mat might be 2 hand spans. A long mat might be…",
        "speakHi": "छोटी चटाई 2 बीता। लंबी चटाई हो सकती है…"
      },
      {
        "type": "mcq",
        "qEn": "Write: the shelf is 4 hand spans. The number is…",
        "qHi": "लिखो: शेल्फ 4 बीता है। संख्या है…",
        "options": [
          "4",
          "shelf"
        ],
        "answer": "4",
        "speakEn": "Write: the shelf is 4 hand spans. The number is…",
        "speakHi": "लिखो: शेल्फ 4 बीता है। संख्या है…"
      },
      {
        "type": "mcq",
        "qEn": "The unit in 4 hand spans is…",
        "qHi": "4 बीता में इकाई है…",
        "options": [
          "hand spans",
          "nothing"
        ],
        "answer": "hand spans",
        "speakEn": "The unit in 4 hand spans is…",
        "speakHi": "4 बीता में इकाई है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-8",
    "level": "lkg",
    "subject": "maths",
    "n": 8,
    "logic": true,
    "titleEn": "ABC and growing patterns, and state the rule",
    "titleHi": "ABC और बढ़ते पैटर्न, और नियम बताओ",
    "shortEn": "Clap-tap-stamp, clap-tap-stamp. What comes next, and what is the rule?",
    "shortHi": "ताली-थपकी-पैर, ताली-थपकी-पैर। आगे क्या, और नियम क्या है?",
    "scene": "school",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "An ABC pattern has three parts that repeat: clap, tap, stamp. A growing pattern gets bigger: 1, 2, 3 pebbles.",
      "capHi": "ABC पैटर्न में तीन भाग दोहराते हैं: ताली, थपकी, पैर। बढ़ता पैटर्न बड़ा होता है: 1, 2, 3 कंकड़।",
      "speakEn": "The important part is stating the rule, not only tapping the next picture. The rule might be: we repeat three actions, or we add one pebble each time.",
      "speakHi": "महत्वपूर्ण है नियम बताना, केवल अगला चित्र नहीं। नियम हो सकता है: तीन क्रियाएँ दोहराते हैं, या हर बार एक कंकड़ जोड़ते हैं।"
    },
    "activities": [
      {
        "type": "sequence",
        "titleEn": "What comes next?",
        "titleHi": "आगे क्या?",
        "items": [
          "👏",
          "🤚",
          "🦶",
          "👏",
          "🤚",
          "?"
        ],
        "order": [
          "👏",
          "🤚",
          "🦶",
          "👏",
          "🤚",
          "🦶"
        ]
      },
      {
        "type": "mcq",
        "titleEn": "State the rule",
        "titleHi": "नियम बताओ",
        "qEn": "Clap, tap, stamp, clap, tap, stamp. The rule is…",
        "qHi": "ताली, थपकी, पैर, ताली, थपकी, पैर। नियम है…",
        "options": [
          {
            "value": "repeat three actions",
            "label": "repeat three actions"
          },
          {
            "value": "add ten every time",
            "label": "add ten every time"
          }
        ],
        "answer": "repeat three actions",
        "promptEn": "Clap, tap, stamp, clap, tap, stamp. The rule is…",
        "promptHi": "ताली, थपकी, पैर, ताली, थपकी, पैर। नियम है…"
      },
      {
        "type": "mcq",
        "titleEn": "A growing pattern",
        "titleHi": "बढ़ता पैटर्न",
        "qEn": "1 pebble, 2 pebbles, 3 pebbles. What comes next, and why?",
        "qHi": "1 कंकड़, 2, 3। आगे क्या, और क्यों?",
        "options": [
          {
            "value": "4, because we add one each time",
            "label": "4, because we add one each time"
          },
          {
            "value": "1 again, with no reason",
            "label": "1 again, with no reason"
          }
        ],
        "answer": "4, because we add one each time",
        "promptEn": "1 pebble, 2 pebbles, 3 pebbles. What comes next, and why?",
        "promptHi": "1 कंकड़, 2, 3। आगे क्या, और क्यों?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "In 🔴🔵🟢🔴🔵__, next is…",
        "qHi": "🔴🔵🟢🔴🔵__ आगे…",
        "options": [
          "🟢",
          "🔴"
        ],
        "answer": "🟢",
        "speakEn": "In 🔴🔵🟢🔴🔵__, next is…",
        "speakHi": "🔴🔵🟢🔴🔵__ आगे…"
      },
      {
        "type": "mcq",
        "qEn": "An ABC pattern has…",
        "qHi": "ABC पैटर्न में होते हैं…",
        "options": [
          {
            "value": "three repeating parts",
            "label": "three repeating parts"
          },
          {
            "value": "no rule",
            "label": "no rule"
          }
        ],
        "answer": "three repeating parts",
        "speakEn": "An ABC pattern has…",
        "speakHi": "ABC पैटर्न में होते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "A growing pattern…",
        "qHi": "बढ़ता पैटर्न…",
        "options": [
          {
            "value": "gets bigger each time",
            "label": "gets bigger each time"
          },
          {
            "value": "stays the same size",
            "label": "stays the same size"
          }
        ],
        "answer": "gets bigger each time",
        "speakEn": "A growing pattern…",
        "speakHi": "बढ़ता पैटर्न…"
      },
      {
        "type": "mcq",
        "qEn": "The rule of 2, 4, 6 is…",
        "qHi": "2, 4, 6 का नियम…",
        "options": [
          {
            "value": "add 2 each time",
            "label": "add 2 each time"
          },
          {
            "value": "add 100",
            "label": "add 100"
          }
        ],
        "answer": "add 2 each time",
        "speakEn": "The rule of 2, 4, 6 is…",
        "speakHi": "2, 4, 6 का नियम…"
      },
      {
        "type": "mcq",
        "qEn": "Next in 2, 4, 6 is…",
        "qHi": "2, 4, 6 में आगे…",
        "options": [
          "8",
          "24"
        ],
        "answer": "8",
        "speakEn": "Next in 2, 4, 6 is…",
        "speakHi": "2, 4, 6 में आगे…"
      },
      {
        "type": "mcq",
        "qEn": "Stating the rule means we can say…",
        "qHi": "नियम बताना मतलब हम कह सकते हैं…",
        "options": [
          {
            "value": "why the next item is right",
            "label": "why the next item is right"
          },
          {
            "value": "nothing at all",
            "label": "nothing at all"
          }
        ],
        "answer": "why the next item is right",
        "speakEn": "Stating the rule means we can say…",
        "speakHi": "नियम बताना मतलब हम कह सकते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Clap, clap, tap. Next is…",
        "qHi": "ताली, ताली, थपकी। आगे…",
        "options": [
          "clap",
          "stamp only always"
        ],
        "answer": "clap",
        "speakEn": "Clap, clap, tap. Next is…",
        "speakHi": "ताली, ताली, थपकी। आगे…"
      },
      {
        "type": "mcq",
        "qEn": "1, 2, 3, 4 is a…",
        "qHi": "1, 2, 3, 4 है…",
        "options": [
          {
            "value": "growing pattern",
            "label": "colour mix"
          },
          {
            "value": "colour mix",
            "label": "colour mix"
          }
        ],
        "answer": "growing pattern",
        "speakEn": "1, 2, 3, 4 is a…",
        "speakHi": "1, 2, 3, 4 है…"
      },
      {
        "type": "mcq",
        "qEn": "If the rule is repeat red, blue, then after blue comes…",
        "qHi": "नियम लाल, नीला दोहराना हो तो नीले बाद…",
        "options": [
          "red",
          "green always"
        ],
        "answer": "red",
        "speakEn": "If the rule is repeat red, blue, then after blue comes…",
        "speakHi": "नियम लाल, नीला दोहराना हो तो नीले बाद…"
      },
      {
        "type": "mcq",
        "qEn": "Thinking and logic is woven in when we…",
        "qHi": "सोच और तर्क तब जुड़ता है जब हम…",
        "options": [
          {
            "value": "explain the rule",
            "label": "skip the rule"
          },
          {
            "value": "skip the rule",
            "label": "skip the rule"
          }
        ],
        "answer": "explain the rule",
        "speakEn": "Thinking and logic is woven in when we…",
        "speakHi": "सोच और तर्क तब जुड़ता है जब हम…"
      },
      {
        "type": "mcq",
        "qEn": "A pattern that repeats AB is…",
        "qHi": "AB दोहराने वाला पैटर्न…",
        "options": [
          {
            "value": "two parts, again and again",
            "label": "two parts, again and again"
          },
          {
            "value": "random",
            "label": "random"
          }
        ],
        "answer": "two parts, again and again",
        "speakEn": "A pattern that repeats AB is…",
        "speakHi": "AB दोहराने वाला पैटर्न…"
      },
      {
        "type": "mcq",
        "qEn": "Next in 5, 6, 7 is…",
        "qHi": "5, 6, 7 में आगे…",
        "options": [
          "8",
          "1"
        ],
        "answer": "8",
        "speakEn": "Next in 5, 6, 7 is…",
        "speakHi": "5, 6, 7 में आगे…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false
  },
  {
    "id": "lkg-math-9",
    "level": "lkg",
    "subject": "maths",
    "n": 9,
    "titleEn": "A first object graph, with two questions",
    "titleHi": "पहला वस्तु ग्राफ, दो प्रश्नों के साथ",
    "shortEn": "Line up fruit. Which row is longer? How many more bananas than mangoes?",
    "shortHi": "फल पंक्ति में लगाओ। कौन सी पंक्ति लंबी? आम से कितने अधिक केले?",
    "scene": "market",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "An object graph is a real line of things, or pictures in rows. We ask two questions about it.",
      "capHi": "वस्तु ग्राफ चीज़ों की असली पंक्ति है, या पंक्तियों में चित्र। हम इसके बारे में दो प्रश्न पूछते हैं।",
      "speakEn": "Suppose we have 5 bananas and 3 mangoes in rows. Which row is longer? How many more bananas than mangoes? Those two questions make the graph useful.",
      "speakHi": "मान लो 5 केले और 3 आम पंक्तियों में हैं। कौन सी पंक्ति लंबी? आम से कितने अधिक केले? ये दो प्रश्न ग्राफ को उपयोगी बनाते हैं।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Which row is longer?",
        "titleHi": "कौन सी पंक्ति लंबी?",
        "qEn": "5 bananas in a row, 3 mangoes in a row. Which row is longer?",
        "qHi": "5 केलों की पंक्ति, 3 आमों की पंक्ति। कौन लंबी?",
        "options": [
          {
            "value": "the banana row",
            "label": "the banana row",
            "emoji": "🍌"
          },
          {
            "value": "the mango row",
            "label": "the mango row",
            "emoji": "🥭"
          }
        ],
        "answer": "the banana row",
        "promptEn": "5 bananas in a row, 3 mangoes in a row. Which row is longer?",
        "promptHi": "5 केलों की पंक्ति, 3 आमों की पंक्ति। कौन लंबी?"
      },
      {
        "type": "mcq",
        "titleEn": "How many more?",
        "titleHi": "कितने अधिक?",
        "qEn": "How many more bananas than mangoes?",
        "qHi": "आम से कितने अधिक केले?",
        "options": [
          "2",
          "8",
          "5"
        ],
        "answer": "2",
        "promptEn": "How many more bananas than mangoes?",
        "promptHi": "आम से कितने अधिक केले?"
      },
      {
        "type": "compare",
        "titleEn": "Compare the rows",
        "titleHi": "पंक्तियों की तुलना",
        "qEn": "Which row has more?",
        "qHi": "किस पंक्ति में अधिक हैं?",
        "items": [
          {
            "id": "bananas",
            "en": "5 bananas",
            "hi": "5 केले",
            "emoji": "🍌",
            "size": 4,
            "color": "#f4c430"
          },
          {
            "id": "mangoes",
            "en": "3 mangoes",
            "hi": "3 आम",
            "emoji": "🥭",
            "size": 2,
            "color": "#e9c46a"
          }
        ],
        "answer": "bananas"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A graph of objects is a…",
        "qHi": "वस्तुओं का ग्राफ है…",
        "options": [
          {
            "value": "set of rows we can compare",
            "label": "set of rows we can compare"
          },
          {
            "value": "random pile only",
            "label": "random pile only"
          }
        ],
        "answer": "set of rows we can compare",
        "speakEn": "A graph of objects is a…",
        "speakHi": "वस्तुओं का ग्राफ है…"
      },
      {
        "type": "mcq",
        "qEn": "4 apples and 2 pears. The longer row is…",
        "qHi": "4 सेब और 2 नाशपाती। लंबी पंक्ति…",
        "options": [
          "apples",
          "pears"
        ],
        "answer": "apples",
        "speakEn": "4 apples and 2 pears. The longer row is…",
        "speakHi": "4 सेब और 2 नाशपाती। लंबी पंक्ति…"
      },
      {
        "type": "mcq",
        "qEn": "4 apples and 2 pears. How many more apples?",
        "qHi": "4 सेब, 2 नाशपाती। कितने अधिक सेब?",
        "options": [
          "2",
          "6"
        ],
        "answer": "2",
        "speakEn": "4 apples and 2 pears. How many more apples?",
        "speakHi": "4 सेब, 2 नाशपाती। कितने अधिक सेब?"
      },
      {
        "type": "mcq",
        "qEn": "We should ask at least…",
        "qHi": "हमें कम से कम पूछना चाहिए…",
        "options": [
          {
            "value": "two questions",
            "label": "two questions"
          },
          {
            "value": "no questions",
            "label": "no questions"
          }
        ],
        "answer": "two questions",
        "speakEn": "We should ask at least…",
        "speakHi": "हमें कम से कम पूछना चाहिए…"
      },
      {
        "type": "mcq",
        "qEn": "If both rows have 3, they are…",
        "qHi": "अगर दोनों पंक्तियों में 3 हों, वे…",
        "options": [
          "equal",
          "unequal always"
        ],
        "answer": "equal",
        "speakEn": "If both rows have 3, they are…",
        "speakHi": "अगर दोनों पंक्तियों में 3 हों, वे…"
      },
      {
        "type": "mcq",
        "qEn": "6 dots and 1 dot. How many more in the long row?",
        "qHi": "6 बिंदु और 1। लंबी पंक्ति में कितने अधिक?",
        "options": [
          "5",
          "7"
        ],
        "answer": "5",
        "speakEn": "6 dots and 1 dot. How many more in the long row?",
        "speakHi": "6 बिंदु और 1। लंबी पंक्ति में कितने अधिक?"
      },
      {
        "type": "mcq",
        "qEn": "The shorter row has the…",
        "qHi": "छोटी पंक्ति में होती है…",
        "options": [
          {
            "value": "smaller count",
            "label": "smaller count"
          },
          {
            "value": "always 100",
            "label": "always 100"
          }
        ],
        "answer": "smaller count",
        "speakEn": "The shorter row has the…",
        "speakHi": "छोटी पंक्ति में होती है…"
      },
      {
        "type": "mcq",
        "qEn": "A first graph can be made with…",
        "qHi": "पहला ग्राफ बन सकता है… से",
        "options": [
          {
            "value": "fruit, blocks or pictures",
            "label": "fruit, blocks or pictures"
          },
          {
            "value": "only calculus",
            "label": "only calculus"
          }
        ],
        "answer": "fruit, blocks or pictures",
        "speakEn": "A first graph can be made with…",
        "speakHi": "पहला ग्राफ बन सकता है… से"
      },
      {
        "type": "mcq",
        "qEn": "3 laddoos and 5 laddoos. Which is more?",
        "qHi": "3 लड्डू और 5 लड्डू। कौन अधिक?",
        "options": [
          "5",
          "3"
        ],
        "answer": "5",
        "speakEn": "3 laddoos and 5 laddoos. Which is more?",
        "speakHi": "3 लड्डू और 5 लड्डू। कौन अधिक?"
      },
      {
        "type": "mcq",
        "qEn": "How many more is 5 than 3?",
        "qHi": "5, 3 से कितने अधिक?",
        "options": [
          "2",
          "8"
        ],
        "answer": "2",
        "speakEn": "How many more is 5 than 3?",
        "speakHi": "5, 3 से कितने अधिक?"
      },
      {
        "type": "mcq",
        "qEn": "A useful graph helps us…",
        "qHi": "उपयोगी ग्राफ मदद करता है…",
        "options": [
          {
            "value": "answer questions",
            "label": "forget the objects"
          },
          {
            "value": "forget the objects",
            "label": "forget the objects"
          }
        ],
        "answer": "answer questions",
        "speakEn": "A useful graph helps us…",
        "speakHi": "उपयोगी ग्राफ मदद करता है…"
      },
      {
        "type": "mcq",
        "qEn": "Rows should start at the same…",
        "qHi": "पंक्तियाँ एक ही… से शुरू हों",
        "options": [
          "line",
          "planet"
        ],
        "answer": "line",
        "speakEn": "Rows should start at the same…",
        "speakHi": "पंक्तियाँ एक ही… से शुरू हों"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-math-10",
    "level": "lkg",
    "subject": "maths",
    "n": 10,
    "titleEn": "Spaced mastery: bonds, add and take away, ten-frames to 20, numerals",
    "titleHi": "दोहराई महारत: जोड़, घटाना-जोड़ना, 20 तक दस-फ्रेम, अंक",
    "shortEn": "Mix earlier work: a bond to 10, a reason for 4 + 3, a teen number, and a numeral if 1 to 20 is sure.",
    "shortHi": "पुराना काम मिलाओ: 10 का जोड़, 4 + 3 का कारण, एक टीन संख्या, और 1–20 पक्के हों तो अंक।",
    "scene": "school",
    "teach": {
      "pose": "clap",
      "anim": "clap",
      "capEn": "Today we mix it all: bonds to 10, add and take away with a reason, ten-frames to 20, and numerals to 50 only if 1 to 20 is secure.",
      "capHi": "आज सब मिलाते हैं: 10 तक जोड़, कारण के साथ जोड़ और घटाव, 20 तक दस-फ्रेम, और 1–20 पक्के हों तो 50 तक अंक।",
      "speakEn": "Spaced mastery keeps last month's maths strong. 6 and 4 make 10. 4 and 3 is 7 because I counted on. 14 is 10 and 4.",
      "speakHi": "दोहराई महारत पिछले महीने का गणित मजबूत रखती है। 6 और 4 मिलकर 10। 4 और 3 हैं 7 क्योंकि मैंने आगे गिना। 14 है 10 और 4।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "A bond to 10",
        "titleHi": "10 का जोड़",
        "qEn": "6 and how many make 10?",
        "qHi": "6 और कितने मिलकर 10?",
        "options": [
          "4",
          "6",
          "16"
        ],
        "answer": "4",
        "promptEn": "6 and how many make 10?",
        "promptHi": "6 और कितने मिलकर 10?"
      },
      {
        "type": "mcq",
        "titleEn": "Add with a reason",
        "titleHi": "कारण के साथ जोड़",
        "qEn": "4 + 3 = 7 because…",
        "qHi": "4 + 3 = 7 क्योंकि…",
        "options": [
          {
            "value": "I counted on: 5, 6, 7",
            "label": "I counted on: 5, 6, 7"
          },
          {
            "value": "I closed my eyes and guessed 100",
            "label": "I closed my eyes and guessed 100"
          }
        ],
        "answer": "I counted on: 5, 6, 7",
        "promptEn": "4 + 3 = 7 because…",
        "promptHi": "4 + 3 = 7 क्योंकि…"
      },
      {
        "type": "mcq",
        "titleEn": "A teen number",
        "titleHi": "एक टीन संख्या",
        "qEn": "14 on two ten-frames is…",
        "qHi": "दो दस-फ्रेम पर 14 है…",
        "options": [
          {
            "value": "10 and 4 ones",
            "label": "10 and 4 ones"
          },
          {
            "value": "1 and 4 only",
            "label": "1 and 4 only"
          }
        ],
        "answer": "10 and 4 ones",
        "promptEn": "14 on two ten-frames is…",
        "promptHi": "दो दस-फ्रेम पर 14 है…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "7 and how many make 10?",
        "qHi": "7 और कितने मिलकर 10?",
        "options": [
          "3",
          "17"
        ],
        "answer": "3",
        "speakEn": "7 and how many make 10?",
        "speakHi": "7 और कितने मिलकर 10?"
      },
      {
        "type": "mcq",
        "qEn": "8 take away 3 is…",
        "qHi": "8 में से 3 है…",
        "options": [
          "5",
          "11"
        ],
        "answer": "5",
        "speakEn": "8 take away 3 is…",
        "speakHi": "8 में से 3 है…"
      },
      {
        "type": "mcq",
        "qEn": "5 + 4 =",
        "qHi": "5 + 4 =",
        "options": [
          "9",
          "1"
        ],
        "answer": "9",
        "speakEn": "5 + 4 =",
        "speakHi": "5 + 4 ="
      },
      {
        "type": "mcq",
        "qEn": "16 is 10 and…",
        "qHi": "16 है 10 और…",
        "options": [
          "6",
          "60"
        ],
        "answer": "6",
        "speakEn": "16 is 10 and…",
        "speakHi": "16 है 10 और…"
      },
      {
        "type": "mcq",
        "qEn": "20 is…",
        "qHi": "20 है…",
        "options": [
          {
            "value": "two full tens",
            "label": "two full tens"
          },
          {
            "value": "2 ones",
            "label": "2 ones"
          }
        ],
        "answer": "two full tens",
        "speakEn": "20 is…",
        "speakHi": "20 है…"
      },
      {
        "type": "mcq",
        "qEn": "3 and what make 8?",
        "qHi": "3 और क्या मिलकर 8?",
        "options": [
          "5",
          "11"
        ],
        "answer": "5",
        "speakEn": "3 and what make 8?",
        "speakHi": "3 और क्या मिलकर 8?"
      },
      {
        "type": "mcq",
        "qEn": "Which is more, 17 or 12?",
        "qHi": "कौन अधिक, 17 या 12?",
        "options": [
          "17",
          "12"
        ],
        "answer": "17",
        "speakEn": "Which is more, 17 or 12?",
        "speakHi": "कौन अधिक, 17 या 12?"
      },
      {
        "type": "mcq",
        "qEn": "A growing pattern 1, 2, 3 continues with…",
        "qHi": "बढ़ता पैटर्न 1, 2, 3 आगे…",
        "options": [
          "4",
          "10 always"
        ],
        "answer": "4",
        "speakEn": "A growing pattern 1, 2, 3 continues with…",
        "speakHi": "बढ़ता पैटर्न 1, 2, 3 आगे…"
      },
      {
        "type": "mcq",
        "qEn": "5 bananas and 3 mangoes: how many more bananas?",
        "qHi": "5 केले, 3 आम: कितने अधिक केले?",
        "options": [
          "2",
          "8"
        ],
        "answer": "2",
        "speakEn": "5 bananas and 3 mangoes: how many more bananas?",
        "speakHi": "5 केले, 3 आम: कितने अधिक केले?"
      },
      {
        "type": "mcq",
        "qEn": "7 take away 7 is…",
        "qHi": "7 में से 7 है…",
        "options": [
          "0",
          "14"
        ],
        "answer": "0",
        "speakEn": "7 take away 7 is…",
        "speakHi": "7 में से 7 है…"
      },
      {
        "type": "mcq",
        "qEn": "A record of length should include a…",
        "qHi": "लंबाई के रिकॉर्ड में होना चाहिए…",
        "options": [
          "unit",
          "only a scribble"
        ],
        "answer": "unit",
        "speakEn": "A record of length should include a…",
        "speakHi": "लंबाई के रिकॉर्ड में होना चाहिए…"
      },
      {
        "type": "mcq",
        "qEn": "We start 21 to 50 when…",
        "qHi": "21 से 50 तब शुरू करते हैं जब…",
        "options": [
          {
            "value": "1 to 20 is secure",
            "label": "1 to 20 is secure"
          },
          {
            "value": "we skip teens",
            "label": "we skip teens"
          }
        ],
        "answer": "1 to 20 is secure",
        "speakEn": "We start 21 to 50 when…",
        "speakHi": "21 से 50 तब शुरू करते हैं जब…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "premium": false,
    "logic": false
  },
  {
    "id": "lkg-prem-1",
    "level": "lkg",
    "subject": "premium",
    "n": 1,
    "premium": true,
    "titleEn": "Talk to Chotu: read a word out loud",
    "titleHi": "छोटू से बात: शब्द ज़ोर से पढ़ो",
    "shortEn": "Say a CVC word to Chotu. He listens and cheers when you blend it clearly.",
    "shortHi": "छोटू को एक CVC शब्द कहो। साफ़ जोड़ने पर वे शाबाशी देते हैं।",
    "scene": "school",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Look at the word, blend the sounds, then say it to me. I am listening.",
      "capHi": "शब्द देखो, ध्वनियाँ जोड़ो, फिर मुझे कहो। मैं सुन रहा हूँ।",
      "speakEn": "Talk to Chotu is Premium. I will show a word like pan or lid. You say it out loud. If your device cannot hear, tap the matching word and I will still cheer.",
      "speakHi": "छोटू से बात प्रीमियम है। मैं pan या lid जैसा शब्द दिखाऊँगा। ज़ोर से कहो। अगर उपकरण न सुने, मिलता शब्द दबाओ, मैं फिर भी शाबाशी दूँगा।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Say pan",
        "titleHi": "pan कहो",
        "qEn": "Blend and say this word, then tap it.",
        "qHi": "जोड़ो, शब्द कहो, फिर दबाओ।",
        "showEmoji": "pan",
        "options": [
          "pan",
          "pin",
          "pen"
        ],
        "answer": "pan",
        "speakEn": "Say pan. P-a-n, pan.",
        "speakHi": "pan कहो। p-a-n, pan।",
        "promptEn": "Blend and say this word, then tap it.",
        "promptHi": "जोड़ो, शब्द कहो, फिर दबाओ।"
      },
      {
        "type": "mcq",
        "titleEn": "Say lid",
        "titleHi": "lid कहो",
        "qEn": "Blend and say this word, then tap it.",
        "qHi": "जोड़ो, शब्द कहो, फिर दबाओ।",
        "showEmoji": "lid",
        "options": [
          "lid",
          "lad",
          "led"
        ],
        "answer": "lid",
        "promptEn": "Blend and say this word, then tap it.",
        "promptHi": "जोड़ो, शब्द कहो, फिर दबाओ।"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Say the word: cat. You should say…",
        "qHi": "शब्द कहो: cat। कहना चाहिए…",
        "options": [
          "cat",
          "act"
        ],
        "answer": "cat",
        "speakEn": "Say the word: cat. You should say…",
        "speakHi": "शब्द कहो: cat। कहना चाहिए…"
      },
      {
        "type": "mcq",
        "qEn": "Say the word: pot. You should say…",
        "qHi": "शब्द कहो: pot। कहना चाहिए…",
        "options": [
          "pot",
          "top"
        ],
        "answer": "pot",
        "speakEn": "Say the word: pot. You should say…",
        "speakHi": "शब्द कहो: pot। कहना चाहिए…"
      },
      {
        "type": "mcq",
        "qEn": "Blend d-u-ck out loud. The word is…",
        "qHi": "d-u-ck ज़ोर से जोड़ो। शब्द है…",
        "options": [
          "duck",
          "cud"
        ],
        "answer": "duck",
        "speakEn": "Blend d-u-ck out loud. The word is…",
        "speakHi": "d-u-ck ज़ोर से जोड़ो। शब्द है…"
      },
      {
        "type": "mcq",
        "qEn": "Talk to Chotu means the child…",
        "qHi": "छोटू से बात मतलब बच्चा…",
        "options": [
          {
            "value": "speaks the word",
            "label": "speaks the word"
          },
          {
            "value": "only watches silently",
            "label": "only watches silently"
          }
        ],
        "answer": "speaks the word",
        "speakEn": "Talk to Chotu means the child…",
        "speakHi": "छोटू से बात मतलब बच्चा…"
      },
      {
        "type": "mcq",
        "qEn": "If the mic cannot hear, we…",
        "qHi": "अगर माइक न सुने, हम…",
        "options": [
          {
            "value": "tap the matching word",
            "label": "give up"
          },
          {
            "value": "give up",
            "label": "give up"
          }
        ],
        "answer": "tap the matching word",
        "speakEn": "If the mic cannot hear, we…",
        "speakHi": "अगर माइक न सुने, हम…"
      },
      {
        "type": "mcq",
        "qEn": "A clear blend starts with each…",
        "qHi": "साफ़ जोड़ हर… से शुरू होता है",
        "options": [
          "sound",
          "guess only"
        ],
        "answer": "sound",
        "speakEn": "A clear blend starts with each…",
        "speakHi": "साफ़ जोड़ हर… से शुरू होता है"
      },
      {
        "type": "mcq",
        "qEn": "Say sock. The last sound is…",
        "qHi": "sock कहो। अंतिम ध्वनि…",
        "options": [
          "ck",
          "s"
        ],
        "answer": "ck",
        "speakEn": "Say sock. The last sound is…",
        "speakHi": "sock कहो। अंतिम ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "This Premium chat works in…",
        "qHi": "यह प्रीमियम बात चलती है… में",
        "options": [
          {
            "value": "English and Hindi",
            "label": "English and Hindi"
          },
          {
            "value": "only a secret code",
            "label": "only a secret code"
          }
        ],
        "answer": "English and Hindi",
        "speakEn": "This Premium chat works in…",
        "speakHi": "यह प्रीमियम बात चलती है… में"
      },
      {
        "type": "mcq",
        "qEn": "Say kit. The first sound is…",
        "qHi": "kit कहो। पहली ध्वनि…",
        "options": [
          "k",
          "t"
        ],
        "answer": "k",
        "speakEn": "Say kit. The first sound is…",
        "speakHi": "kit कहो। पहली ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "Reading out loud helps…",
        "qHi": "ज़ोर से पढ़ना मदद करता है…",
        "options": [
          {
            "value": "fluency",
            "label": "hiding words"
          },
          {
            "value": "hiding words",
            "label": "hiding words"
          }
        ],
        "answer": "fluency",
        "speakEn": "Reading out loud helps…",
        "speakHi": "ज़ोर से पढ़ना मदद करता है…"
      },
      {
        "type": "mcq",
        "qEn": "The word I go has a tricky word…",
        "qHi": "I go में कठिन शब्द…",
        "options": [
          "go",
          "zzzz"
        ],
        "answer": "go",
        "speakEn": "The word I go has a tricky word…",
        "speakHi": "I go में कठिन शब्द…"
      },
      {
        "type": "mcq",
        "qEn": "Chotu cheers when the word is…",
        "qHi": "छोटू तब शाबाशी देते हैं जब शब्द…",
        "options": [
          "clear",
          "whispered into a pillow only"
        ],
        "answer": "clear",
        "speakEn": "Chotu cheers when the word is…",
        "speakHi": "छोटू तब शाबाशी देते हैं जब शब्द…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "lkg-prem-2",
    "level": "lkg",
    "subject": "premium",
    "n": 2,
    "premium": true,
    "titleEn": "Pronunciation and phonics coaching",
    "titleHi": "उच्चारण और ध्वनि कोचिंग",
    "shortEn": "Hear a tight contrast, like pin and pan. Copy Chotu, then pick the right word.",
    "shortHi": "करीबी अंतर सुनो, जैसे pin और pan। छोटू की नकल, फिर सही शब्द चुनो।",
    "scene": "school",
    "teach": {
      "pose": "listen",
      "anim": "listen",
      "capEn": "Pin and pan are close. Listen to the middle sound. I will coach you if they get mixed up.",
      "capHi": "pin और pan करीब हैं। बीच की ध्वनि सुनो। मिल जाएँ तो मैं कोचिंग दूँगा।",
      "speakEn": "Premium coaching is not a one-tap quiz only. We practise the sounds that Indian learners often mix, then we blend them in real words.",
      "speakHi": "प्रीमियम कोचिंग केवल एक टैप की प्रश्नोत्तरी नहीं। वे ध्वनियाँ अभ्यास करते हैं जो अक्सर मिल जाती हैं, फिर असली शब्दों में जोड़ते हैं।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Pin or pan",
        "titleHi": "pin या pan",
        "qEn": "Chotu says p-i-n. Which word?",
        "qHi": "छोटू p-i-n कहते हैं। कौन सा शब्द?",
        "options": [
          "pin",
          "pan",
          "pen"
        ],
        "answer": "pin",
        "promptEn": "Chotu says p-i-n. Which word?",
        "promptHi": "छोटू p-i-n कहते हैं। कौन सा शब्द?"
      },
      {
        "type": "clap",
        "titleEn": "Clap the sounds",
        "titleHi": "ध्वनियों पर ताली",
        "titleEn2": "Clap once for each sound in duck (d-u-ck).",
        "beats": 3,
        "promptEn": "Clap 3 times for d-u-ck.",
        "promptHi": "d-u-ck के लिए 3 ताली।"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "The middle sound of pin is…",
        "qHi": "pin की बीच की ध्वनि…",
        "options": [
          "i",
          "a"
        ],
        "answer": "i",
        "speakEn": "The middle sound of pin is…",
        "speakHi": "pin की बीच की ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "The middle sound of pan is…",
        "qHi": "pan की बीच की ध्वनि…",
        "options": [
          "a",
          "i"
        ],
        "answer": "a",
        "speakEn": "The middle sound of pan is…",
        "speakHi": "pan की बीच की ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "Ship starts with the sound…",
        "qHi": "ship शुरू होता है ध्वनि… से",
        "options": [
          "sh",
          "s only always"
        ],
        "answer": "sh",
        "speakEn": "Ship starts with the sound…",
        "speakHi": "ship शुरू होता है ध्वनि… से"
      },
      {
        "type": "mcq",
        "qEn": "Coaching means we try again when…",
        "qHi": "कोचिंग मतलब फिर कोशिश जब…",
        "options": [
          {
            "value": "two sounds get mixed",
            "label": "we finish forever"
          },
          {
            "value": "we finish forever",
            "label": "we finish forever"
          }
        ],
        "answer": "two sounds get mixed",
        "speakEn": "Coaching means we try again when…",
        "speakHi": "कोचिंग मतलब फिर कोशिश जब…"
      },
      {
        "type": "mcq",
        "qEn": "Duck has how many sounds if ck is one?",
        "qHi": "ck एक हो तो duck में कितनी ध्वनियाँ?",
        "options": [
          "3",
          "4"
        ],
        "answer": "3",
        "speakEn": "Duck has how many sounds if ck is one?",
        "speakHi": "ck एक हो तो duck में कितनी ध्वनियाँ?"
      },
      {
        "type": "mcq",
        "qEn": "Red starts with…",
        "qHi": "red शुरू होता है…",
        "options": [
          "r",
          "d"
        ],
        "answer": "r",
        "speakEn": "Red starts with…",
        "speakHi": "red शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "A tight contrast is two words that…",
        "qHi": "करीबी अंतर दो शब्द हैं जो…",
        "options": [
          {
            "value": "sound almost the same",
            "label": "sound almost the same"
          },
          {
            "value": "are unrelated",
            "label": "are unrelated"
          }
        ],
        "answer": "sound almost the same",
        "speakEn": "A tight contrast is two words that…",
        "speakHi": "करीबी अंतर दो शब्द हैं जो…"
      },
      {
        "type": "mcq",
        "qEn": "Copying Chotu helps the…",
        "qHi": "छोटू की नकल मदद करती है…",
        "options": [
          "mouth and ear",
          "feet only"
        ],
        "answer": "mouth and ear",
        "speakEn": "Copying Chotu helps the…",
        "speakHi": "छोटू की नकल मदद करती है…"
      },
      {
        "type": "mcq",
        "qEn": "Sit and sat differ in the…",
        "qHi": "sit और sat में अंतर…",
        "options": [
          "middle sound",
          "last letter only always"
        ],
        "answer": "middle sound",
        "speakEn": "Sit and sat differ in the…",
        "speakHi": "sit और sat में अंतर…"
      },
      {
        "type": "mcq",
        "qEn": "Pronunciation coaching is a…",
        "qHi": "उच्चारण कोचिंग है…",
        "options": [
          "Premium feature",
          "Basic-only video"
        ],
        "answer": "Premium feature",
        "speakEn": "Pronunciation coaching is a…",
        "speakHi": "उच्चारण कोचिंग है…"
      },
      {
        "type": "mcq",
        "qEn": "The last sound of sock is…",
        "qHi": "sock की अंतिम ध्वनि…",
        "options": [
          "ck",
          "s"
        ],
        "answer": "ck",
        "speakEn": "The last sound of sock is…",
        "speakHi": "sock की अंतिम ध्वनि…"
      },
      {
        "type": "mcq",
        "qEn": "We listen first, then we…",
        "qHi": "पहले सुनते हैं, फिर…",
        "options": [
          "copy",
          "cover our ears"
        ],
        "answer": "copy",
        "speakEn": "We listen first, then we…",
        "speakHi": "पहले सुनते हैं, फिर…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "lkg-prem-3",
    "level": "lkg",
    "subject": "premium",
    "n": 3,
    "premium": true,
    "titleEn": "Hindi literacy: swar, then early vyanjan",
    "titleHi": "हिन्दी साक्षरता: स्वर, फिर शुरुआती व्यंजन",
    "shortEn": "Meet अ आ इ ई and a few consonants. Match the sound to the letter.",
    "shortHi": "अ आ इ ई और कुछ व्यंजन मिलो। ध्वनि को अक्षर से मिलाओ।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "We start with Hindi swar: अ, आ, इ, ई. Then early vyanjan such as क and म.",
      "capHi": "हिन्दी स्वर से शुरू: अ, आ, इ, ई। फिर शुरुआती व्यंजन जैसे क और म।",
      "speakEn": "Premium Hindi follows a careful order, not a random alphabet song. Hear the sound, see the letter, and say it with me.",
      "speakHi": "प्रीमियम हिन्दी सावधानी से क्रम में है, कोई अनियमित गीत नहीं। ध्वनि सुनो, अक्षर देखो, और मेरे साथ कहो।"
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
            "rightEn": "a as in aam start",
            "rightHi": "अ जैसे अमरूद की शुरुआत"
          },
          {
            "key": "aa",
            "leftEn": "आ",
            "leftHi": "आ",
            "rightEn": "aa as in aam",
            "rightHi": "आ जैसे आम"
          },
          {
            "key": "i",
            "leftEn": "इ",
            "leftHi": "इ",
            "rightEn": "i as in imli start",
            "rightHi": "इ जैसे इमली की शुरुआत"
          }
        ]
      },
      {
        "type": "mcq",
        "titleEn": "An early vyanjan",
        "titleHi": "एक शुरुआती व्यंजन",
        "qEn": "Which letter is ka?",
        "qHi": "क कौन सा अक्षर है?",
        "options": [
          "क",
          "अ",
          "आ"
        ],
        "answer": "क",
        "promptEn": "Which letter is ka?",
        "promptHi": "क कौन सा अक्षर है?"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "अ is a…",
        "qHi": "अ है…",
        "options": [
          "swar",
          "vyanjan"
        ],
        "answer": "swar",
        "speakEn": "अ is a…",
        "speakHi": "अ है…"
      },
      {
        "type": "mcq",
        "qEn": "क is a…",
        "qHi": "क है…",
        "options": [
          "vyanjan",
          "swar"
        ],
        "answer": "vyanjan",
        "speakEn": "क is a…",
        "speakHi": "क है…"
      },
      {
        "type": "mcq",
        "qEn": "आ is heard in…",
        "qHi": "आ सुनाई देता है… में",
        "options": [
          "aam",
          "kit"
        ],
        "answer": "aam",
        "speakEn": "आ is heard in…",
        "speakHi": "आ सुनाई देता है… में"
      },
      {
        "type": "mcq",
        "qEn": "इ is a…",
        "qHi": "इ है…",
        "options": [
          "swar",
          "number"
        ],
        "answer": "swar",
        "speakEn": "इ is a…",
        "speakHi": "इ है…"
      },
      {
        "type": "mcq",
        "qEn": "म can start the word…",
        "qHi": "म से शब्द शुरू हो सकता है…",
        "options": [
          "maa",
          "kit"
        ],
        "answer": "maa",
        "speakEn": "म can start the word…",
        "speakHi": "म से शब्द शुरू हो सकता है…"
      },
      {
        "type": "mcq",
        "qEn": "We learn swar…",
        "qHi": "स्वर सीखते हैं…",
        "options": [
          {
            "value": "before a long random list of letters",
            "label": "before a long random list of letters"
          },
          {
            "value": "after college",
            "label": "after college"
          }
        ],
        "answer": "before a long random list of letters",
        "speakEn": "We learn swar…",
        "speakHi": "स्वर सीखते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "ई is a longer…",
        "qHi": "ई एक लंबा… है",
        "options": [
          "swar",
          "shoe"
        ],
        "answer": "swar",
        "speakEn": "ई is a longer…",
        "speakHi": "ई एक लंबा… है"
      },
      {
        "type": "mcq",
        "qEn": "Hindi literacy in LKG is…",
        "qHi": "LKG में हिन्दी साक्षरता है…",
        "options": [
          "Premium",
          "a hidden tax"
        ],
        "answer": "Premium",
        "speakEn": "Hindi literacy in LKG is…",
        "speakHi": "LKG में हिन्दी साक्षरता है…"
      },
      {
        "type": "mcq",
        "qEn": "The letter आ looks different from…",
        "qHi": "आ अलग दिखता है… से",
        "options": [
          "अ",
          "आ itself"
        ],
        "answer": "अ",
        "speakEn": "The letter आ looks different from…",
        "speakHi": "आ अलग दिखता है… से"
      },
      {
        "type": "mcq",
        "qEn": "Say क with Chotu. The sound is…",
        "qHi": "छोटू के साथ क कहो। ध्वनि है…",
        "options": [
          "ka",
          "zz"
        ],
        "answer": "ka",
        "speakEn": "Say क with Chotu. The sound is…",
        "speakHi": "छोटू के साथ क कहो। ध्वनि है…"
      },
      {
        "type": "mcq",
        "qEn": "Early vyanjan come…",
        "qHi": "शुरुआती व्यंजन आते हैं…",
        "options": [
          {
            "value": "after the first swar",
            "label": "after the first swar"
          },
          {
            "value": "never",
            "label": "never"
          }
        ],
        "answer": "after the first swar",
        "speakEn": "Early vyanjan come…",
        "speakHi": "शुरुआती व्यंजन आते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "A careful order helps children…",
        "qHi": "सावधान क्रम बच्चों को मदद करता है…",
        "options": [
          {
            "value": "hear and write the right letter",
            "label": "mix every letter"
          },
          {
            "value": "mix every letter",
            "label": "mix every letter"
          }
        ],
        "answer": "hear and write the right letter",
        "speakEn": "A careful order helps children…",
        "speakHi": "सावधान क्रम बच्चों को मदद करता है…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "lkg-prem-4",
    "level": "lkg",
    "subject": "premium",
    "n": 4,
    "premium": true,
    "titleEn": "Coached slate for letters and words",
    "titleHi": "अक्षरों और शब्दों के लिए कोच वाली स्लेट",
    "shortEn": "Trace a and s, then a short word like sat, with start-point coaching.",
    "shortHi": "a और s ट्रेस करो, फिर sat जैसा छोटा शब्द, शुरू बिंदु की कोचिंग के साथ।",
    "scene": "school",
    "teach": {
      "pose": "point",
      "anim": "bob",
      "capEn": "The slate shows where to start. We form letters carefully, then we write a word we can already sound out.",
      "capHi": "स्लेट बताती है कहाँ से शुरू करें। अक्षर सावधानी से बनाते हैं, फिर वह शब्द लिखते हैं जिसे ध्वनियों से जानते हैं।",
      "speakEn": "Premium coaching watches the path, not only the finished letter. Start at the right point for a, then for s, then write sat.",
      "speakHi": "प्रीमियम कोचिंग मार्ग देखती है, केवल बना अक्षर नहीं। a के सही बिंदु से शुरू, फिर s, फिर sat लिखो।"
    },
    "activities": [
      {
        "type": "trace",
        "titleEn": "Form a",
        "titleHi": "a बनाओ",
        "glyph": "a"
      },
      {
        "type": "trace",
        "titleEn": "Form s, then think sat",
        "titleHi": "s बनाओ, फिर sat सोचो",
        "glyph": "s"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "A coached slate shows the…",
        "qHi": "कोच वाली स्लेट दिखाती है…",
        "options": [
          {
            "value": "starting point",
            "label": "starting point"
          },
          {
            "value": "finished book only",
            "label": "finished book only"
          }
        ],
        "answer": "starting point",
        "speakEn": "A coached slate shows the…",
        "speakHi": "कोच वाली स्लेट दिखाती है…"
      },
      {
        "type": "mcq",
        "qEn": "We write words we can already…",
        "qHi": "हम वे शब्द लिखते हैं जिन्हें पहले से…",
        "options": [
          "sound out",
          "invent untaught"
        ],
        "answer": "sound out",
        "speakEn": "We write words we can already…",
        "speakHi": "हम वे शब्द लिखते हैं जिन्हें पहले से…"
      },
      {
        "type": "mcq",
        "qEn": "sat starts with…",
        "qHi": "sat शुरू होता है…",
        "options": [
          "s",
          "t"
        ],
        "answer": "s",
        "speakEn": "sat starts with…",
        "speakHi": "sat शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "The last letter of sat is…",
        "qHi": "sat का अंतिम अक्षर…",
        "options": [
          "t",
          "s"
        ],
        "answer": "t",
        "speakEn": "The last letter of sat is…",
        "speakHi": "sat का अंतिम अक्षर…"
      },
      {
        "type": "mcq",
        "qEn": "Careful formation means…",
        "qHi": "सावधान बनाना मतलब…",
        "options": [
          {
            "value": "the taught path",
            "label": "any scribble"
          },
          {
            "value": "any scribble",
            "label": "any scribble"
          }
        ],
        "answer": "the taught path",
        "speakEn": "Careful formation means…",
        "speakHi": "सावधान बनाना मतलब…"
      },
      {
        "type": "mcq",
        "qEn": "After letters, the slate can hold a…",
        "qHi": "अक्षरों के बाद स्लेट पर आ सकता है…",
        "options": [
          "short word",
          "only a huge paragraph"
        ],
        "answer": "short word",
        "speakEn": "After letters, the slate can hold a…",
        "speakHi": "अक्षरों के बाद स्लेट पर आ सकता है…"
      },
      {
        "type": "mcq",
        "qEn": "pin starts with…",
        "qHi": "pin शुरू होता है…",
        "options": [
          "p",
          "n"
        ],
        "answer": "p",
        "speakEn": "pin starts with…",
        "speakHi": "pin शुरू होता है…"
      },
      {
        "type": "mcq",
        "qEn": "This slate is a…",
        "qHi": "यह स्लेट है…",
        "options": [
          "Premium feature",
          "paper plane"
        ],
        "answer": "Premium feature",
        "speakEn": "This slate is a…",
        "speakHi": "यह स्लेट है…"
      },
      {
        "type": "mcq",
        "qEn": "Start-point coaching helps handwriting…",
        "qHi": "शुरू बिंदु की कोचिंग लिखावट…",
        "options": [
          "stay neat",
          "vanish"
        ],
        "answer": "stay neat",
        "speakEn": "Start-point coaching helps handwriting…",
        "speakHi": "शुरू बिंदु की कोचिंग लिखावट…"
      },
      {
        "type": "mcq",
        "qEn": "The middle letter of pan is…",
        "qHi": "pan का बीच का अक्षर…",
        "options": [
          "a",
          "p"
        ],
        "answer": "a",
        "speakEn": "The middle letter of pan is…",
        "speakHi": "pan का बीच का अक्षर…"
      },
      {
        "type": "mcq",
        "qEn": "We do not copy a picture. We form the…",
        "qHi": "चित्र की नकल नहीं। हम बनाते हैं…",
        "options": [
          "letter path",
          "TV screen"
        ],
        "answer": "letter path",
        "speakEn": "We do not copy a picture. We form the…",
        "speakHi": "चित्र की नकल नहीं। हम बनाते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "s and a are letters we should form…",
        "qHi": "s और a ऐसे अक्षर हैं जिन्हें…",
        "options": [
          "carefully",
          "with closed eyes only"
        ],
        "answer": "carefully",
        "speakEn": "s and a are letters we should form…",
        "speakHi": "s और a ऐसे अक्षर हैं जिन्हें…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  },
  {
    "id": "lkg-prem-5",
    "level": "lkg",
    "subject": "premium",
    "n": 5,
    "premium": true,
    "titleEn": "Adaptive reteach and a weekly parent report",
    "titleHi": "अनुकूलित पुनःशिक्षण और साप्ताहिक अभिभावक रिपोर्ट",
    "shortEn": "Retry a weak skill, such as a bond to 10. Parents see a short weekly note mapped to LKG goals.",
    "shortHi": "कमज़ोर कौशल फिर आज़माओ, जैसे 10 का जोड़। अभिभावक LKG लक्ष्यों से जुड़ी छोटी साप्ताहिक नोट देखें।",
    "scene": "home",
    "teach": {
      "pose": "wave",
      "anim": "wave",
      "capEn": "If a bond to 10 was tricky, we come back to it with new objects. Then a short report goes to the parent.",
      "capHi": "अगर 10 का जोड़ कठिन रहा, नई वस्तुओं के साथ लौटते हैं। फिर अभिभावक को छोटी रिपोर्ट जाती है।",
      "speakEn": "Adaptive reteach means the next practice follows what the child missed, not a random new game. The weekly report is mapped to LKG goals, such as Phase 2 words and bonds to 10.",
      "speakHi": "अनुकूलित पुनःशिक्षण मतलब अगला अभ्यास उसी पर जाता है जो छूट गया, कोई अनियमित खेल नहीं। साप्ताहिक रिपोर्ट LKG लक्ष्यों से जुड़ी है, जैसे चरण 2 शब्द और 10 तक जोड़।"
    },
    "activities": [
      {
        "type": "mcq",
        "titleEn": "Reteach a bond",
        "titleHi": "जोड़ फिर सिखाओ",
        "qEn": "A child missed 6 and how many make 10. Try again: the missing part is…",
        "qHi": "बच्चे से 6 और कितने मिलकर 10 छूट गया। फिर: गुम भाग है…",
        "options": [
          "4",
          "16",
          "6"
        ],
        "answer": "4",
        "promptEn": "A child missed 6 and how many make 10. Try again: the missing part is…",
        "promptHi": "बच्चे से 6 और कितने मिलकर 10 छूट गया। फिर: गुम भाग है…"
      },
      {
        "type": "mcq",
        "titleEn": "A parent report",
        "titleHi": "अभिभावक रिपोर्ट",
        "qEn": "A useful weekly report tells a parent…",
        "qHi": "उपयोगी साप्ताहिक रिपोर्ट अभिभावक को बताती है…",
        "options": [
          {
            "value": "what is secure and what needs practice, linked to LKG goals",
            "label": "what is secure and what needs practice, linked to LKG goals"
          },
          {
            "value": "only a star count with no meaning",
            "label": "only a star count with no meaning"
          }
        ],
        "answer": "what is secure and what needs practice, linked to LKG goals",
        "promptEn": "A useful weekly report tells a parent…",
        "promptHi": "उपयोगी साप्ताहिक रिपोर्ट अभिभावक को बताती है…"
      }
    ],
    "practice": [
      {
        "type": "mcq",
        "qEn": "Adaptive means the practice follows…",
        "qHi": "अनुकूलित मतलब अभ्यास चलता है…",
        "options": [
          {
            "value": "what was missed",
            "label": "a random advert"
          },
          {
            "value": "a random advert",
            "label": "a random advert"
          }
        ],
        "answer": "what was missed",
        "speakEn": "Adaptive means the practice follows…",
        "speakHi": "अनुकूलित मतलब अभ्यास चलता है…"
      },
      {
        "type": "mcq",
        "qEn": "A weekly report is for the…",
        "qHi": "साप्ताहिक रिपोर्ट है… के लिए",
        "options": [
          "parent",
          "stranger on a bus"
        ],
        "answer": "parent",
        "speakEn": "A weekly report is for the…",
        "speakHi": "साप्ताहिक रिपोर्ट है… के लिए"
      },
      {
        "type": "mcq",
        "qEn": "LKG goals include…",
        "qHi": "LKG लक्ष्यों में है…",
        "options": [
          {
            "value": "Phase 2 words and bonds to 10",
            "label": "Phase 2 words and bonds to 10"
          },
          {
            "value": "calculus only",
            "label": "calculus only"
          }
        ],
        "answer": "Phase 2 words and bonds to 10",
        "speakEn": "LKG goals include…",
        "speakHi": "LKG लक्ष्यों में है…"
      },
      {
        "type": "mcq",
        "qEn": "If pan was hard to spell, we reteach…",
        "qHi": "अगर pan की वर्तनी कठिन रही, हम फिर सिखाते हैं…",
        "options": [
          {
            "value": "p-a-n",
            "label": "a new long novel"
          },
          {
            "value": "a new long novel",
            "label": "a new long novel"
          }
        ],
        "answer": "p-a-n",
        "speakEn": "If pan was hard to spell, we reteach…",
        "speakHi": "अगर pan की वर्तनी कठिन रही, हम फिर सिखाते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "7 and how many make 10?",
        "qHi": "7 और कितने मिलकर 10?",
        "options": [
          "3",
          "17"
        ],
        "answer": "3",
        "speakEn": "7 and how many make 10?",
        "speakHi": "7 और कितने मिलकर 10?"
      },
      {
        "type": "mcq",
        "qEn": "Mapped to goals means the report uses…",
        "qHi": "लक्ष्यों से जुड़ी मतलब रिपोर्ट प्रयोग करती है…",
        "options": [
          {
            "value": "school language, not only game scores",
            "label": "school language, not only game scores"
          },
          {
            "value": "secret codes",
            "label": "secret codes"
          }
        ],
        "answer": "school language, not only game scores",
        "speakEn": "Mapped to goals means the report uses…",
        "speakHi": "लक्ष्यों से जुड़ी मतलब रिपोर्ट प्रयोग करती है…"
      },
      {
        "type": "mcq",
        "qEn": "Reteach should use…",
        "qHi": "पुनःशिक्षण में इस्तेमाल हो…",
        "options": [
          {
            "value": "new objects or a new picture",
            "label": "the same failed screen only"
          },
          {
            "value": "the same failed screen only",
            "label": "the same failed screen only"
          }
        ],
        "answer": "new objects or a new picture",
        "speakEn": "Reteach should use…",
        "speakHi": "पुनःशिक्षण में इस्तेमाल हो…"
      },
      {
        "type": "mcq",
        "qEn": "This unit is…",
        "qHi": "यह इकाई है…",
        "options": [
          "Premium",
          "a hidden fee at a shop"
        ],
        "answer": "Premium",
        "speakEn": "This unit is…",
        "speakHi": "यह इकाई है…"
      },
      {
        "type": "mcq",
        "qEn": "A short note is better than…",
        "qHi": "छोटी नोट बेहतर है… से",
        "options": [
          {
            "value": "a long unread essay",
            "label": "a long unread essay"
          },
          {
            "value": "silence forever",
            "label": "silence forever"
          }
        ],
        "answer": "a long unread essay",
        "speakEn": "A short note is better than…",
        "speakHi": "छोटी नोट बेहतर है… से"
      },
      {
        "type": "mcq",
        "qEn": "14 is 10 and 4. If this was weak, we return to the…",
        "qHi": "14 है 10 और 4। अगर कमज़ोर रहा, लौटते हैं…",
        "options": [
          "double ten-frame",
          "airport only"
        ],
        "answer": "double ten-frame",
        "speakEn": "14 is 10 and 4. If this was weak, we return to the…",
        "speakHi": "14 है 10 और 4। अगर कमज़ोर रहा, लौटते हैं…"
      },
      {
        "type": "mcq",
        "qEn": "Parents can see what is…",
        "qHi": "अभिभावक देख सकते हैं क्या…",
        "options": [
          {
            "value": "secure",
            "label": "secret from them"
          },
          {
            "value": "secret from them",
            "label": "secret from them"
          }
        ],
        "answer": "secure",
        "speakEn": "Parents can see what is…",
        "speakHi": "अभिभावक देख सकते हैं क्या…"
      },
      {
        "type": "mcq",
        "qEn": "The next step after a miss is…",
        "qHi": "चूक के बाद अगला कदम…",
        "options": [
          {
            "value": "a gentle reteach",
            "label": "delete the child"
          },
          {
            "value": "delete the child",
            "label": "delete the child"
          }
        ],
        "answer": "a gentle reteach",
        "speakEn": "The next step after a miss is…",
        "speakHi": "चूक के बाद अगला कदम…"
      }
    ],
    "masteryNeed": 4,
    "masteryCount": 5,
    "logic": false
  }
];

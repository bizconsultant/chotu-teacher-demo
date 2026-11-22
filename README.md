# Chotu Teacher — clickable demo

A mobile-first prototype of **Chotu Teacher**, an English and Maths learning app for Indian children from Nursery (age 3) to Class 1 (age 6). The goal is to turn the time kids already spend watching reels into learning that feels like entertainment.

Open `index.html` in a phone browser, or start a local server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`. The live demo is at [https://bizconsultant.github.io/chotu-teacher-demo/](https://bizconsultant.github.io/chotu-teacher-demo/). It works best in Chrome or Safari, with the volume up so you can hear Chotu.

## What this demo includes

- **Chotu Reels**: a full-screen vertical feed (swipe up or down, or tap the arrows) of short animated learning clips with Chotu's voice and captions. Each level (Nursery, LKG, UKG, Class 1) has 10 reels mixing a phonics chant, an Indian story moment (market, Diwali, monsoon), a maths trick, and a one-tap quiz. A big star button awards stars.
- The home screen leads with Chotu Reels, plus a daily streak and a "new episode today" badge.
- English / Hindi language toggle, with Chotu speaking via the Web Speech API (`speechSynthesis`, pitch 1.6, `en-IN` / `hi-IN`)
- Parent plans: 7-day free trial, Basic ₹249/month or ₹949/year, Premium ₹349/month or ₹1,949/year, Family Premium for 2 children at ₹2,999/year (demo only — no payment)
- Home with a level picker that really changes the course: Nursery (3), LKG (4), UKG (5) and Class 1 (6)
- Playable Basic lessons with **10 or more questions** drawn from a larger pool and shuffled each time you play (answer choices shuffled too), with a progress bar:
  - Nursery: beginning sounds + subitising / count mangoes to 5 + odd-one-out logic
  - LKG: CVC blending (c-a-t) + ten-frame number bonds to 10 + pattern logic
  - UKG: digraphs and short sentences + rupee shop within 20 + shape / pattern logic
  - Class 1: read a sentence and answer a story question + equal groups or tens-and-ones + number-pattern / closer-to logic
- Stars, a sticker book, and unlockable outfits for Chotu (cap, glasses, sash, garland, festival look)
- A parent screen-time limit (off, 1-minute demo test, 10, 20 or 30 minutes). When time is up, a gentle "Chotu is tired, see you tomorrow" screen appears. Changing the limit needs a simple adult maths question.
- Tracing slate (finger / stylus drawing), with glyphs that change by level
- Premium preview: Talk to Chotu (speech recognition where the browser supports it, otherwise tap buttons), a clearly labelled sample weekly parent report, and a rupee-coin game

## Limits

- Voice recognition (`SpeechRecognition` / `webkitSpeechRecognition`) works best in Chrome or Edge on Android, and Safari on newer iPhones. Many desktop browsers and in-app web views need a microphone permission, and some block it on insecure (non-HTTPS) pages.
- Speech voices depend on the device. If an Indian voice is installed, Chotu uses it; otherwise the browser’s default voice is used at a higher pitch.
- This is a front-end prototype only. Nothing is billed, and the parent report uses clearly labelled sample data. Stars, stickers, outfits, streaks and the time limit are stored in the browser (`localStorage`).

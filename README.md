# Chotu Teacher — clickable demo

A mobile-first prototype of **Chotu Teacher**, an English and Maths learning app for Indian children aged 3–6.

**Try it on your phone:** https://bizconsultant.github.io/chotu-teacher-demo/

Open `index.html` in a phone browser, or start a local server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## What this demo includes

- English / Hindi language toggle, with Chotu speaking via the Web Speech API (`speechSynthesis`, pitch 1.6, `en-IN` / `hi-IN`)
- Parent plans: 3-day free trial, Basic ₹499/month, Premium ₹999/month (demo only — no payment)
- Home with Nursery / LKG / UKG age bands and stars
- Basic English: letters A–E, phonics, find-the-letter quiz
- Basic Maths: count mangoes and laddoos (1–10), how-many quiz
- Tracing slate (finger / stylus drawing)
- Premium preview: Talk to Chotu (speech recognition where the browser supports it, otherwise tap buttons), sample weekly parent report, rupee-coin counting

## Limits

- Voice recognition (`SpeechRecognition` / `webkitSpeechRecognition`) works best in Chrome or Edge on Android, and Safari on newer iPhones. Many desktop browsers and in-app web views need a microphone permission, and some block it on insecure (non-HTTPS) pages.
- Speech voices depend on the device. If an Indian voice is installed, Chotu uses it; otherwise the browser’s default voice is used at a higher pitch.
- This is a front-end prototype only. Nothing is billed, and the parent report uses clearly labelled sample data.

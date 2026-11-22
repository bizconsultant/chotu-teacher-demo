# Chotu Teacher — clickable demo

A mobile-first English and Maths app for Indian children from Nursery (age 3) to Class 1 (age 6). The aim is to turn time already spent on phones into learning that feels like entertainment.

Live demo: [https://bizconsultant.github.io/chotu-teacher-demo/](https://bizconsultant.github.io/chotu-teacher-demo/). Best in Chrome or Safari, with the volume up so you can hear Chotu.

```bash
python3 -m http.server 4173
```

## What this demo includes

- **Full Nursery course** (age 3) and **full LKG course** (age 4) and **full UKG course** (age 5): each has all 10 English and 10 Maths Basic units from the Age-wise Syllabus, plus Premium units (5 in Nursery and LKG, 6 in UKG). Each unit has a Chotu-voiced teach segment, 2 or 3 activities (tap, match, clap, ten-frame, word building, compare, sort, trace, and more), a shuffled practice pool of 10+ questions, and a star-check that unlocks the next unit. Progress is saved in the browser. Thinking & Logic and Hindi-to-English bridging sit inside Basic units.
- A course map on the home screen, a 7-day trial, Basic ₹249/month or ₹949/year, Premium ₹349/month or ₹1,949/year, Family Premium ₹2,999/year (demo only — no payment). A toggle on the plans screen unlocks Premium units for this demo.
- **Chotu Reels**: 5 shorter, higher-quality clips per finished level (Nursery, LKG and UKG), with scene backgrounds (market, home, school, Diwali, monsoon), animated Chotu poses, captions, sound effects, and a tap-along beat or quiz in every reel. Each reel is tied to a unit.
- English / Hindi toggle, Chotu's voice (`speechSynthesis`, pitch 1.6, `en-IN` / `hi-IN`)
- Stars, stickers, unlockable outfits, daily streak, and a parent screen-time limit

Class 1 course maps will be filled with the same 10+10 unit structure next.

## Limits

- This is a front-end web prototype, not a native Play Store or App Store app. Nothing is billed. Parent reports use clearly labelled sample data.
- Speech voices depend on the device. Recognition works best in Chrome or Edge on Android, and Safari on newer iPhones, on a secure (HTTPS) page.
- Stars, stickers, outfits, streaks, time limits and course progress are stored in the browser (`localStorage`).

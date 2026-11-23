# Chotu Teacher — clickable demo

A mobile-first English and Maths app for Indian children from Nursery (age 3) to Class 1 (age 6). The aim is to turn time already spent on phones into learning that feels like entertainment.

Live demo: [https://bizconsultant.github.io/chotu-teacher-demo/](https://bizconsultant.github.io/chotu-teacher-demo/). Best in Chrome or Safari, with the volume up so you can hear Chotu.

```bash
python3 -m http.server 4173
```

## What this demo includes

- **Full Nursery course** (age 3), **full LKG course** (age 4), **full UKG course** (age 5) and **full Class 1 course** (age 6): each has all 10 English and 10 Maths Basic units from the Age-wise Syllabus, plus Premium units (5 in Nursery and LKG, 6 in UKG and Class 1). Each unit has a Chotu-voiced teach segment, 2 or 3 activities (tap, match, clap, ten-frame, word building, compare, sort, trace, and more), a shuffled practice pool of 10+ questions, and a star-check that unlocks the next unit. Progress is saved in the browser. Thinking & Logic and Hindi-to-English bridging sit inside Basic units.
- A course map on the home screen, a 7-day trial, Basic ₹249/month or ₹949/year, Premium ₹349/month or ₹1,949/year, Family Premium ₹2,999/year (demo only — no payment). A toggle on the plans screen unlocks Premium units for this demo.
- **Chotu Reels**: 5 shorter, higher-quality clips per level (Nursery, LKG, UKG and Class 1), with scene backgrounds (market, home, school, Diwali, monsoon), animated Chotu poses, captions, sound effects, and a tap-along beat or quiz in every reel. Each reel is tied to a unit.
- English / Hindi toggle, Chotu's voice (`speechSynthesis`, pitch 1.6, `en-IN` / `hi-IN`)
- Stars, stickers, unlockable outfits, daily streak, and a parent screen-time limit

## Round H: clarity pass (Nursery first)

- **Subject routing fixed.** English, Maths and Thinking & Logic each open their own subject map (tabs: All, English, Maths, Logic). Before, all three tiles opened the same English-first map.
- **Slow voice.** Chotu speaks at rate 0.7 (pitch 1.4), one short sentence at a time with pauses. Parents can switch Slow or Normal (default Slow) on the plans screen and on the Screen time screen. Saved in `localStorage` (`chotuVoiceSpeed`).
- **Clear interaction.** Every activity starts with one spoken and written instruction, a big 🔁 *Say again* button, a pointing hand on tap tasks, and a glowing *Tap and say* mic on voice tasks. A first-time *How to play with Chotu* intro (tap, mic, stars) is also on the map under ❓.
- **Hints and retries.** Wrong: gentle hint and retry. After 2 wrong tries the right answer glows. Right: cheer and a star.
- **No repeats.** Each lesson draws its practice and star-check questions from one shuffled, de-duplicated deck without replacement, and the correct answer never sits in the same position twice in a row.
- **Objective and summary.** Every unit opens with "Today we will learn…", shows progress dots ("3 of 6"), and ends with "You learnt…" plus stars. The parent report lists each unit's learning goal and status.
- **Quality-checked Nursery units:** English 1 (sounds around us), English 2 (rhymes and claps), Maths 1 (sort and odd one out), in English and Hindi. The other Nursery units and the other levels use the new player but still have the older question text.
- **Rhymes** (Nursery and LKG): Twinkle Twinkle, Baa Baa Black Sheep, Johny Johny, Humpty Dumpty, Jack and Jill, Machli Jal Ki Rani Hai and Chanda Mama Door Ke, with karaoke highlighting, a simple tune, *Sing with me* and a fun check.

## Round U: UKG pass

- **Syllabus alignment.** All 26 UKG units (10 English, 10 Maths, 6 Premium) now carry the unit titles and goals from the *Chotu Teacher: Age-wise Syllabus* Page (UKG, age 5), and the Thinking & Logic thread is flagged on Maths 1, 2, 4, 8, 9 and 10. See `js/ukg-v2.js` and the home unit list in `js/app.js`.
- **Reworked to the Nursery standard** (picture-led, English and Hindi, objective card, one instruction per task, hints, "You learnt" summary, parent goal): English 1 (Phase 2 fluency, then Phase 3 sh, ch, th, ng, plus j, v, w, x, y, z, qu), English 2 (vowel digraphs ai, ee, igh, oa, oo) and Maths 1 (bonds to 10 and make-10 talk). Each has a 20-item pool: 8 for practice and 5 for the star check, with a star-check retry drawn from the unused items first.
- **New UKG rhymes** (traditional, public domain): Rain, Rain, Go Away; Hickory Dickory Dock (time); One, Two, Buckle My Shoe (counting); Five Currant Buns (take away 1); Aloo Kachaloo (Hindi folk rhyme). Rhymes are now listed per level (Nursery and LKG keep their 7).
- The other 23 UKG units have the syllabus title and goal but still the older question text.

## Limits

- This is a front-end web prototype, not a native Play Store or App Store app. Nothing is billed. Parent reports use clearly labelled sample data.
- Speech voices depend on the device. Recognition works best in Chrome or Edge on Android, and Safari on newer iPhones, on a secure (HTTPS) page.
- Stars, stickers, outfits, streaks, time limits and course progress are stored in the browser (`localStorage`).

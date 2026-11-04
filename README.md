# Anatomy Revision — MBBS exam-focused study tool

Content-first anatomy revision: navigate by **region** or **system**, open a structured
high-yield card, then drill with **flashcards (spaced repetition)** and **MCQs** generated
from the same data. No build step, no install.

## Run it
- **Easiest:** double-click `index.html` (opens in any modern browser, works offline).
- Or serve the folder: `python3 -m http.server 8000` → http://localhost:8000
- Optional content check (needs Node): `node tools/validate.js` (`--list` prints every entry with ✔/⚠).

Progress (spaced repetition, bookmarks, MCQ stats) is saved in the browser's localStorage.
Use **Progress → Export** to back it up or move it to another device.

## Folder layout
```
index.html                 page shell + the list of content files to load
css/app.css                styles (light/dark automatic)
js/registry.js             global namespace, regions/systems list, helpers
js/schema.js               THE CARD TEMPLATE: fields per type + quiz question templates
js/card.js                 detail-card renderer
js/navigator.js            home / region / system / search pages
js/quiz.js                 question generation, flashcards, MCQ
js/store.js                localStorage progress + spaced-repetition intervals
js/progress.js             progress dashboard + verification queue
diagrams/upper-limb.js     stylized clickable navigator (zones)
content/<region>/<type>.js CONTENT — source of truth (one file per region × structure group)
tools/validate.js          checks content for errors, broken links, unknown fields
```

## Content files
Each file is `AN.registerStructures('<its path>', [ {...}, {...} ])`. JS syntax, so you can
write `// comments` (e.g. page references). One entry looks like:

```js
{
  id: 'ul-nerve-median',          // unique; used in links and quiz progress — don't rename casually
  name: 'Median nerve', aka: [],
  type: 'nerve',                  // muscle | nerve | artery | vein | lymphatic | bone | joint | space | organ
  system: ['nervous'],            // ids from js/registry.js (can be empty for spaces)
  region: 'upper-limb',
  zones: ['arm', 'forearm'],      // clickable diagram zones it appears under
  verified: false,                // set true only after you've checked it
  source: '',                     // e.g. "BDC 8e Vol 1 p.112"
  doubtful: ['branches'],         // individual fields to re-check (highlighted ⚠ on the card)
  reviewNote: '',                 // note to yourself, shown on the card
  description: '', location: '', parts: [],
  nerve: { rootValue: '', course: '', branches: [], motor: [], sensory: [] },  // block named after type
  relations: [ { dir: 'anterior', text: '…', ref: 'other-structure-id' } ],
  clinical:  [ { title: '…', text: '…' } ],
  highYield: [ '…' ],
  mnemonics: [ { text: '…', meaning: '…' } ]
}
```
The fields of each type block are defined in `js/schema.js`. Empty fields show as “— not yet entered”.
Cross-link anywhere in text with `[[structure-id]]` or `[[structure-id|label]]`.

## Verifying a structure
1. Open **Verify** in the app: it lists every unverified entry and flagged field, by file.
2. Open that file, check each field against your textbook, and correct it.
3. Remove checked fields from `doubtful`, fill `source`, set `verified: true`.
4. Run `node tools/validate.js`, then reload the page.

Until an entry is verified, its card shows a yellow ⚠ banner. Quizzes use **only verified,
non-flagged fields** by default. Tick “Include unverified content” to drill draft content, and
each such question will carry a ⚠ label.

## Adding a structure / file / region
- **Structure:** copy an existing entry of the same type in the right file and change `id` and the fields.
- **New content file:** create `content/<region>/<group>.js` and add a `<script src=…>` line to the
  CONTENT block of `index.html`.
- **New quiz question type:** add `q: '… {name}?'` to a field in `js/schema.js`.
- **Diagram for a new region:** copy `diagrams/upper-limb.js`, change the zones/shapes, and add its script tag.

## Spaced repetition
Each quiz question is scheduled on its own: **Hard** → due tomorrow, and repeated once
more in the same session. **Medium** → interval ×1.5 (first review: 2 days). **Easy** →
interval ×2.5 (first review: 4 days). New questions are capped per day (default 20, set
under Progress). Keys: Space = show answer, 1/2/3 = Hard/Medium/Easy. In MCQs, 1–4 picks
an answer and Enter goes to the next question.

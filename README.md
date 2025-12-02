# Story Pack Generator

This repository contains a minimal implementation of the Storyteller Highlights → Story Pack challenge.

It transforms:

data/match_events.json → out/story.json

using a simple highlight heuristic.

---

## How to Run the Generator

From the project root, run:

    node generate.js

This creates:

    out/story.json

### View the Story Pack

1. Open preview/index.html in your browser  
2. Click “Load pack.json”  
3. Select out/story.json

---

## Logic Used

- A highlight is any event whose type contains the substring "goal"
  (covers "goal" and "penalty goal").
- The first slide is always a cover slide.
- Highlight slides appear in the same order as the event feed.
- If no goal events exist, a single info fallback slide is added.
- All slides use assets/placeholder.png.

---

## File Overview

- generate.js  
  Generates the story pack.

- data/match_events.json  
  Raw event source.

- out/story.json  
  Generated story pack.

- assets/  
  Contains placeholder image.

- tests/  
  Minimal invariant tests.

---

## Running Tests

Use the built-in Node test runner:

    node --test

Tests verify:
- A cover slide is always present  
- Highlight slides contain required fields  
- The fallback slide appears when no goal events exist

---

## Notes

This implementation is intentionally minimal:
- No AI captions  
- No image matching  
- No ranking weights  
- No metadata enrichment  

It satisfies all required invariants for the compensated task.

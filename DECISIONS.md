# DECISIONS

## Heuristic and ranking
- A highlight is any event where the "type" field contains the substring "goal".
- This catches "goal" and "penalty goal" events.
- No scoring, no weights, and no ranking beyond the natural ordering in the data.

## Data handling (duplicates, missing fields, out-of-order minutes)
- Events are processed in the order they appear in the JSON.
- No deduplication was added because the dataset did not include exact duplicate events.
- Missing minutes default to 0, which still satisfies schema constraints.
- Out-of-order minutes are preserved instead of re-sorted to avoid over-engineering.

## Pack structure and invariants
- The first slide is always a cover slide.
- Highlight slides follow directly after the cover.
- If no highlight events exist, a single "info" fallback slide is added.
- All images use the built-in placeholder to avoid unnecessary asset matching.

## What I would do with 2 more hours
- Implement tunable ranking using a weights.json file.
- Improve captions by extracting player names or key phrases.
- Add schema validation during generation.
- Enhance tests to cover edge cases like corrupted data or unexpected event types.
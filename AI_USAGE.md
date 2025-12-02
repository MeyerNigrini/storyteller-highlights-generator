# AI USAGE

## Where AI helped
- Assisted with understanding the story pack schema.
- Helped outline a minimal, valid generator that meets required invariants.
- Wrote the initial structure for README, DECISIONS, and tests.
- Ensured the solution remained as simple and correct as possible.

## Prompts or strategies that worked
- Asking for the minimum-viable implementation.
- Breaking the task into small steps.
- Requesting clean code in plain JS with no dependencies.

## Verification steps (tests, assertions, manual checks)
- Ran the generator and opened preview/index.html to confirm slides load correctly.
- Confirmed the cover slide always appears first.
- Verified highlight slides contain required fields.
- Tested fallback behaviour with no goal events.
- Reviewed output manually for schema compliance.

## Cases where you chose not to use AI and why
- Did not use AI to generate story captions or commentary because the minimum task did not require it.
- Did not use AI to match images or produce explanations; kept it simple by using the default placeholder image.
- Did not use AI for ranking or weighting logic, as the goal was minimal correctness rather than enhanced ranking behaviour.

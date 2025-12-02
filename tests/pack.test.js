// tests/pack.test.js
import test from "node:test";
import assert from "node:assert";
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

test("generator outputs a cover page", () => {
  execSync("node generate.js");
  const story = JSON.parse(readFileSync("out/story.json", "utf8"));
  assert.strictEqual(story.pages[0].type, "cover");
});

test("highlights include required fields", () => {
  execSync("node generate.js");
  const story = JSON.parse(readFileSync("out/story.json", "utf8"));

  const highlights = story.pages.filter(p => p.type === "highlight");
  for (const h of highlights) {
    assert.ok(typeof h.minute === "number");
    assert.ok(h.headline.length > 0);
    assert.ok(h.caption.length > 0);
  }
});

test("fallback info page appears when no highlights exist", () => {
  // Backup original
  const original = readFileSync("data/match_events.json", "utf8");

  // Remove all goal events
  const temp = JSON.parse(original);
  temp.messages[0].message = temp.messages[0].message.filter(
    e => !e.type.toLowerCase().includes("goal")
  );
  writeFileSync("data/match_events.json", JSON.stringify(temp, null, 2));

  execSync("node generate.js");
  const story = JSON.parse(readFileSync("out/story.json", "utf8"));

  assert.ok(story.pages.some(p => p.type === "info"));

  // Restore original
  writeFileSync("data/match_events.json", original);
});

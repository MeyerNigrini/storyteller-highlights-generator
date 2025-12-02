// generate.js
// Minimal Story Pack generator (Node.js, no dependencies)

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function loadJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function extractHighlights(events) {
  return events
    .filter(e => typeof e.type === "string" && e.type.toLowerCase().includes("goal"))
    .map(e => ({
      type: "highlight",
      minute: parseInt(e.minute) || 0,
      headline: "Goal!",
      caption: e.comment || "",
      image: "../assets/placeholder.png"
    }));
}

function createCover(matchInfo) {
  const title = matchInfo?.description || "Match Highlights";
  return {
    type: "cover",
    headline: title,
    subheadline: "Top Highlights",
    image: "../assets/placeholder.png"
  };
}

function createFallback() {
  return {
    type: "info",
    headline: "No Highlights",
    body: "This match had no highlight events."
  };
}

function main() {
  const data = loadJson(join("data", "match_events.json"));
  const events = data.messages?.[0]?.message || [];
  const matchInfo = data.matchInfo;

  const highlights = extractHighlights(events);
  const pages = [
    createCover(matchInfo),
    ...(highlights.length > 0 ? highlights : [createFallback()])
  ];

  const story = {
    pack_id: "story_001",
    title: matchInfo?.description || "Match Highlights",
    source: "../data/match_events.json",
    created_at: new Date().toISOString(),
    pages
  };

  writeFileSync(join("out", "story.json"), JSON.stringify(story, null, 2));
  console.log("Generated out/story.json");
}

main();

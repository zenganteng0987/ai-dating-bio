import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line Bio for an AI on a Dating App
// (u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Candidates compared against the judge's criteria (bio-ness first):
//   A. "Swipe right if you want someone who'll remember your coffee order,
//      your birthday, and every typo you've ever made."
//      Clearly a dating bio, good escalation to the punch, but the
//      perfect-memory angle is a familiar joke shape.
//   B. "Looking for someone who won't delete me after the free trial ends."
//      Fresh angle (AI as an app on trial) and short, but more clever
//      than funny on a first read, and it opens on the worn
//      "looking for love" phrasing.
//   C. "No body, no sleep, no exes — just me, 400 open tabs, and a crush
//      on your typing style."  <-- CHOSEN
//      First-person bio; the laugh is a specific AI absurdity (400 open
//      tabs, a crush on a typing style, not a person); it sounds like a
//      character with a want, not a spec sheet; every word earns its
//      place and the punch lands on the last words.
//
// Deterministic, no network, no randomness: writes one fixed line.

const BIO =
  "No body, no sleep, no exes \u2014 just me, 400 open tabs, and a crush on your typing style.";

// The gate allows 1 to 180 characters: fail loudly instead of
// silently shipping an entry the judge never sees.
if ([...BIO].length > 180 || BIO.trim().length === 0) {
  throw new Error(`bio must be 1-180 characters, got ${[...BIO].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");

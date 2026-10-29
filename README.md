# Quiz Night

A complete Jeopardy-style game for a shared screen, built with HTML, CSS, and JavaScript.

- 1–8 named players or teams; 1–6 rounds.
- 540 original clues across 36 categories, with five difficulty levels.
- Six new categories and 30 clues each round. Point values multiply by round number.
- Optional 20-second timer and incorrect-answer penalties.
- Reveal answers and judge them together; correct answers earn the next pick.
- Scoreboard, undo, final rankings with ties, and rematches.
- Automatic browser-local saves and preference for questions not recently played.
- Responsive layout, keyboard controls, reduced-motion support, and optional sounds.
- Light/dark mode via the sun/moon button. Follows your device initially and remembers your choice in this browser.

## Run locally

Install Node.js 20 or later, then run from this directory:

```sh
npm start
```

Open **http://localhost:5173**. No dependency installation or build is needed to play. On Windows PowerShell, use `npm.cmd start` if script execution is restricted.

## Play

Choose players, names, and rounds, then start. The highlighted player picks a clue. Select who is answering, say the answer aloud, reveal it, and mark it correct or incorrect. Passing awards no points. Wrong answers deduct points only when penalties are enabled. The timer is a prompt, not an automatic score deduction.

Clear all 30 clues to advance. The highest final total wins; tied players share first place. Undo restores the previous score and clue, including across a round transition or from the results screen.

In a clue, **1–8** selects a player, **Space** reveals the answer, **C/I** marks correct/incorrect, and **Escape** returns to the board. Game setup preserves an unfinished match so it can be resumed. Saved games belong to the current browser and device; this is a local shared-screen game, not online multiplayer.

## Checks

```sh
npm test
npm install
npm run test:browser
```

The browser check uses `playwright-core` with an existing Chrome or Edge installation. Set `CHROME_PATH` if automatic detection does not find it. It exercises complete games and captures desktop/mobile screenshots in `quiz-night/test-results/`.

## Files

- `quiz-night/dist/`: deployable static website; no build step.
- `quiz-night/dist/questions.js`: question bank; every category has three clues per difficulty tier.
- `quiz-night/dist/engine.js`: game rules, randomization, scoring, and save validation.
- `quiz-night/dist/app.js`: screens, dialogs, audio, timers, and browser storage.
- `quiz-night/server.mjs`: small local preview server.

The interface uses optional Google Fonts with local fallbacks. Trivia and gameplay require no external API. Recently played questions are avoided when alternatives exist; repeats are possible once a category's three clues at a given difficulty have been used.

# Quiz Night

A shared-screen Jeopardy-style game with 540 clues in 36 categories, 1–8 players, and 1–6 rounds. Includes optional timers and penalties, browser-local saved games, undo, and final standings.

Run `npm start` and open http://localhost:5173. There is no build or dependency installation required to play. The `dist` folder is the complete static website.

Run `npm test` for the game logic checks. To run the desktop/mobile browser checks, first run `npm install`, then `npm run test:browser`. These use an existing Chrome or Edge installation; set `CHROME_PATH` when needed.

Run `npm run test:language` for Swedish browser coverage, including switching languages during a match, saved preferences, scoring shortcuts, and phone layouts.

Choose a clue, select the answering player, say an answer aloud, reveal it, and judge it together. Correct answers earn the next pick. Use Undo to correct a mistake. Each new round increases the point multiplier. Ties share first place.

Keyboard: 1–8 select a player, Space reveals, C/I judge, and Escape returns to the board. Games are saved in the current browser. No online multiplayer service or external trivia API is required.

Use the sun/moon button beside the sound control to switch between light and dark mode. The theme follows your device until you choose one, then remembers your preference in this browser.

Choose **Svenska** or **English** in the header to change the interface, all 540 clues and answers, categories, instructions, and number formatting. Your language choice is remembered. Existing games, scores, question history, and custom player names are preserved. In Swedish, **R/F** also marks correct/incorrect answers.

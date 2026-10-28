import { QUESTION_BANK, QUESTION_COUNT } from './questions.js';
import { COLORS, createGame, openClue, activeClue, resolveClue, undoClue, roundComplete, advanceRound, rankings, restoreGame } from './engine.js';

const $ = selector => document.querySelector(selector);
const app = $('#app');
const clueDialog = $('#clue-dialog');
const infoDialog = $('#info-dialog');
const KEY = 'quiz-night-game-v1';
const RECENT_KEY = 'quiz-night-recent-v1';
const h = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const number = value => new Intl.NumberFormat('en-US').format(value);
const icon = (name) => {
  const paths = {
    sound: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/>',
    mute: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="m16 9 5 6m0-6-5 6"/>',
    users: '<circle cx="9" cy="7" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5"/>',
    rounds: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    undo: '<path d="m8 4-5 5 5 5M3 9h11a6 6 0 0 1 0 12"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.check}</svg>`;
};
let storageNotice = false;
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { if (!storageNotice) { storageNotice = true; toast('Browser storage is unavailable. Keep this tab open to finish your game.'); } } },
  remove(key) { try { localStorage.removeItem(key); } catch { /* The active game still works in memory. */ } }
};
let game = null;
let savedGame = restoreGame(storage.get(KEY));
let screen = 'setup';
let config = { count: 3, rounds: 2, names: Array.from({ length: 8 }, (_, i) => `Player ${i + 1}`), timer: true, penalties: false };
let recent;
try { recent = JSON.parse(storage.get(RECENT_KEY)); } catch { recent = []; }
if (!Array.isArray(recent) || !recent.every(id => typeof id === 'string')) recent = [];
let sound = storage.get('quiz-night-sound') === 'true';
let audioContext;
let timerId;
let toastId;
let confirmAction;
let lastTile;

function toast(message) {
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  clearTimeout(toastId);
  toastId = setTimeout(() => $('#toast').classList.remove('visible'), 3500);
}

function playTone(kind = 'open') {
  if (!sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    audioContext.resume();
    const notes = kind === 'correct' ? [523.25, 659.25, 783.99] : kind === 'incorrect' ? [260, 195] : kind === 'time' ? [440, 440] : [392, 523.25];
    notes.forEach((frequency, i) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      oscillator.connect(gain); gain.connect(audioContext.destination);
      const start = audioContext.currentTime + i * .12;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(.055, start + .015);
      gain.gain.exponentialRampToValueAtTime(.001, start + .22);
      oscillator.start(start); oscillator.stop(start + .23);
    });
  } catch { /* Audio is optional. */ }
}

function updateSound() {
  $('#sound-button').innerHTML = icon(sound ? 'sound' : 'mute');
  $('#sound-button').setAttribute('aria-label', `Turn sound ${sound ? 'off' : 'on'}`);
  $('#sound-button').setAttribute('aria-pressed', String(sound));
  $('#sound-button').title = `Turn sound ${sound ? 'off' : 'on'}`;
}
function persist() { if (game) { storage.set(KEY, JSON.stringify(game)); savedGame = game; } }
function scrollTop() { window.scrollTo({ top: 0, behavior: 'instant' }); }
function goHome() {
  clearInterval(timerId);
  if (clueDialog.open) clueDialog.close();
  if (game) persist();
  screen = 'setup';
  renderSetup(); scrollTop();
}

function renderSetup() {
  screen = 'setup';
  const previewCategories = [['✦', 'Outer Space'], ['◎', 'World Cities'], ['♫', 'Music Mix'], ['▷', 'At the Movies'], ['♨', 'Food & Drink'], ['♧', 'Wild Animals']];
  app.innerHTML = `
    ${savedGame && savedGame.status === 'playing' ? `<div class="resume-banner"><p><strong>Your game night is waiting.</strong> Round ${savedGame.round + 1} of ${savedGame.rounds} · ${savedGame.players.length} player${savedGame.players.length === 1 ? '' : 's'}</p><button class="text-button" data-action="resume">Resume game <span>→</span></button><button class="text-button discard" data-action="discard">Discard</button></div>` : ''}
    <div class="setup-layout">
      <section class="hero" aria-labelledby="hero-title">
        <div class="eyebrow"><span class="eyebrow-dot"></span> A LITTLE FRIENDLY COMPETITION</div>
        <h1 id="hero-title">Big brains.<br>Bigger <span>bragging</span><br>rights.</h1>
        <p class="hero-description">Your living room. Your favorite people.<br>A whole lot of “wait, I know this one.”<br>Let’s make a game night of it.</p>
        <div class="hero-stats"><div class="hero-stat"><strong>${QUESTION_COUNT}</strong><span>curated questions</span></div><div class="hero-stat"><strong>${QUESTION_BANK.length}</strong><span>categories to explore</span></div><div class="hero-stat"><strong>1–8</strong><span>players or teams</span></div></div>
        <p class="hero-note">${icon('check')} No sign-ups. No downloads. Just one more round.</p>
      </section>
      <section class="setup-card" aria-labelledby="setup-title">
        <div class="card-heading"><h2 id="setup-title">Make it your game.</h2><span class="small-star" aria-hidden="true">✳</span></div>
        <p class="card-subtitle">Gather your people. We’ll bring the questions.</p>
        <div class="setting-row"><div class="setting-label">${icon('users')} Players <span class="setting-hint">or teams</span></div><div class="stepper"><button data-action="fewer" aria-label="Remove a player" ${config.count === 1 ? 'disabled' : ''}>−</button><strong aria-live="polite">${config.count}</strong><button data-action="more" aria-label="Add a player" ${config.count === 8 ? 'disabled' : ''}>+</button></div></div>
        <div class="player-inputs">${config.names.slice(0, config.count).map((name, i) => `<label class="player-input" style="--player-color:${COLORS[i]}"><span class="player-dot"></span><input data-name="${i}" aria-label="Player ${i + 1} name" value="${h(name)}" maxlength="24" autocomplete="off" spellcheck="false"></label>`).join('')}</div>
        <div class="setting-row"><div class="setting-label">${icon('rounds')} Rounds</div><span class="setting-hint">30 clues per round</span></div>
        <div class="round-options" role="group" aria-label="Number of rounds">${Array.from({ length: 6 }, (_, i) => `<button class="round-option ${config.rounds === i + 1 ? 'selected' : ''}" data-round="${i + 1}" aria-pressed="${config.rounds === i + 1}" aria-label="${i + 1} round${i ? 's' : ''}">${i + 1}</button>`).join('')}</div>
        <p class="round-caption">${config.rounds * 30} questions · about ${config.rounds * 15}–${config.rounds * 25} minutes of friendly rivalry</p>
        <div class="game-options"><label class="toggle-label"><span>Question timer <small>20 seconds</small></span><input class="switch" type="checkbox" id="timer-setting" ${config.timer ? 'checked' : ''}></label><label class="toggle-label"><span>Wrong answer penalty <small>lose clue points</small></span><input class="switch" type="checkbox" id="penalty-setting" ${config.penalties ? 'checked' : ''}></label></div>
        <button class="primary-button start-button" data-action="start">Let’s play <span class="arrow">→</span></button>
        <p class="setup-footnote">One screen. Everyone plays. Game-show energy.</p>
      </section>
    </div>
    <section class="preview-section" aria-labelledby="preview-title"><div class="section-heading"><h2 id="preview-title">A peek at the board <span>PREVIEW</span></h2><p>Pick a category. Pick your points. Trust your brain.</p></div><div class="preview-board" aria-hidden="true">${previewCategories.map(([symbol, title]) => `<div class="preview-column"><div class="preview-category"><span>${symbol}</span>${title}</div>${[200, 400, 600].map(value => `<div class="preview-value">${value}</div>`).join('')}</div>`).join('')}</div><div class="preview-bottom"><span>↻</span> A freshly shuffled board every game. No repeat categories in a match.</div></section>`;
}

function startGame() {
  game = createGame(QUESTION_BANK, config.names.slice(0, config.count), config.rounds, config, recent);
  persist(); screen = 'board'; renderBoard(); scrollTop(); playTone();
}

function renderBoard() {
  screen = 'board';
  const board = game.boards[game.round];
  const completed = board.reduce((total, c) => total + c.clues.filter(q => q.done).length, 0);
  const picker = game.players[game.picker];
  app.innerHTML = `<section aria-labelledby="board-title">
    <div class="game-topbar"><div><div class="game-eyebrow"><span class="live-dot"></span> THE FLOOR IS YOURS</div><h1 class="game-title" id="board-title">${completed === 30 ? 'That’s a round.' : 'Pick your next “I know this.”'}</h1></div><div class="game-tools"><button class="text-button" data-action="home">← Game setup</button><div class="round-pill">Round <b>${game.round + 1} <span style="color:#aaa3b4;font-weight:400">/ ${game.rounds}</span></b></div></div></div>
    <div class="board-wrap"><div class="board">${board.map((category, column) => `<div class="board-column"><h2 class="category-header" id="category-${column}"><span class="category-symbol" aria-hidden="true">${h(category.icon)}</span>${h(category.name)}</h2>${category.clues.map((clue, row) => `<button class="clue-tile ${clue.done ? 'done' : ''}" data-column="${column}" data-row="${row}" ${clue.done ? 'disabled' : ''} aria-label="${h(category.name)}, ${clue.value} points${clue.done ? ', played' : ''}">${clue.done ? `${clue.result?.result === 'correct' ? '✓' : '—'}<span class="tile-done-name">${clue.result?.result === 'skip' ? 'Passed' : h(game.players[clue.result?.player]?.name || 'Played')}</span>` : number(clue.value)}</button>`).join('')}</div>`).join('')}</div></div>
    <div class="board-bottom"><div class="turn-indicator" style="--player-color:${picker.color}"><span class="player-dot"></span><span><strong>${h(picker.name)}</strong>${completed === 30 ? ', nicely played.' : ', pick a clue.'}</span></div><div><span class="progress-track"><span style="width:${completed / 30 * 100}%"></span></span>${completed} / 30 played</div><button class="text-button" data-action="undo" ${game.history.length ? '' : 'disabled'}>↶ Undo last clue</button></div>
    ${roundComplete(game) ? `<div class="round-finish"><div><h2>${game.round + 1 === game.rounds ? 'The final answer is in.' : 'New categories. Bigger stakes.'}</h2><p>${game.round + 1 === game.rounds ? 'Let’s see who earned the bragging rights.' : `Round ${game.round + 2} brings six new categories and ${game.round + 2}× the points.`}</p></div><button class="primary-button" data-action="advance">${game.round + 1 === game.rounds ? 'See the results' : 'Next round'} <span class="arrow">→</span></button></div>` : ''}
    <section class="score-section" aria-label="Scoreboard"><div class="score-heading"><h2>The friendly rivalry</h2><span>${game.settings.penalties ? 'Wrong answers lose points' : 'No penalties. Take a guess.'}</span></div><div class="score-cards ${game.players.length > 4 ? 'many' : ''}" style="--players:${Math.min(4, game.players.length)}">${game.players.map(p => `<div class="score-card ${p.id === game.picker ? 'active' : ''}" style="--player-color:${p.color}"><div class="player-name"><span class="player-dot"></span><span>${h(p.name)}</span></div>${p.id === game.picker ? '<span class="your-pick">YOUR PICK</span>' : ''}<div class="player-score">${number(p.score)} <span style="font:10px var(--font);color:var(--muted);letter-spacing:0">pts</span></div><div class="player-correct">${p.correct} correct answer${p.correct === 1 ? '' : 's'}</div></div>`).join('')}</div></section>
  </section>`;
}

function showClue() {
  if (!game.active) return;
  clearInterval(timerId);
  const clue = activeClue(game);
  const category = game.boards[game.round][game.active.column];
  if (!Number.isFinite(game.active.remaining)) game.active.remaining = 20;
  const revealed = game.active.revealed;
  clueDialog.innerHTML = `<div class="clue-top"><div class="clue-category">${h(category.name)} <b>${number(clue.value)} pts</b></div><button class="icon-button clue-close" data-clue="close" aria-label="Return to board">×</button></div>
    <div class="clue-content"><div class="clue-timer" id="clue-timer" aria-live="off"></div><h2 id="clue-heading">${h(clue.question)}</h2>${game.settings.timer ? '<div class="timer-track"><div class="timer-fill" id="timer-fill"></div></div>' : ''}</div>
    <div class="clue-controls"><p class="answering-label">Who’s answering?</p><div class="answering-players" role="group" aria-label="Answering player">${game.players.map(p => `<button class="answer-player ${p.id === game.active.player ? 'selected' : ''}" data-player="${p.id}" aria-pressed="${p.id === game.active.player}" style="--player-color:${p.color}"><span class="player-dot"></span><span>${h(p.name)}</span></button>`).join('')}</div>
    ${revealed ? `<div class="answer-panel"><span>THE ANSWER</span><p>${h(clue.answer)}</p></div><div class="judging-buttons"><button class="judge-button" data-clue="correct">✓ Correct <span>+${number(clue.value)}</span></button><button class="judge-button incorrect" data-clue="incorrect">× Incorrect <span>${game.settings.penalties ? '−' + number(clue.value) : '0'} pts</span></button></div><p class="keyboard-hint">Be your own judge. Close enough? You decide.</p>` : '<button class="primary-button reveal-button" data-clue="reveal">Reveal the answer <span class="arrow">↗</span></button><p class="keyboard-hint">Say your answer out loud, then press <kbd>space</kbd> to reveal.</p>'}
    <button class="text-button skip-button" data-clue="skip">Nobody knows? Pass this clue →</button></div>`;
  if (!clueDialog.open) clueDialog.showModal();
  updateTimer();
  if (game.settings.timer && !revealed && game.active.remaining > 0) {
    timerId = setInterval(() => {
      if (!game?.active || !clueDialog.open) { clearInterval(timerId); return; }
      game.active.remaining = Math.max(0, game.active.remaining - 1);
      updateTimer(); persist();
      if (game.active.remaining === 0) { clearInterval(timerId); playTone('time'); }
    }, 1000);
  }
  clueDialog.querySelector(revealed ? '[data-clue="correct"]' : '[data-clue="reveal"]')?.focus();
  persist();
}

function updateTimer() {
  const timer = $('#clue-timer');
  if (!timer || !game?.active) return;
  const { revealed, remaining } = game.active;
  timer.textContent = revealed ? 'THE MOMENT OF TRUTH' : !game.settings.timer ? 'TAKE YOUR TIME. YOU’VE GOT THIS.' : remaining > 0 ? `${remaining} seconds to shine` : 'Time’s up! Make your call, then reveal.';
  timer.classList.toggle('urgent', game.settings.timer && !revealed && remaining <= 5);
  const fill = $('#timer-fill');
  if (fill) fill.style.width = `${remaining / 20 * 100}%`;
}

function closeClue() {
  clearInterval(timerId);
  if (game?.active) game.active = null;
  persist(); clueDialog.close();
  if (lastTile) app.querySelector(`[data-column="${lastTile[0]}"][data-row="${lastTile[1]}"]`)?.focus();
}

function judge(result) {
  if (!game?.active) return;
  if (result !== 'skip' && !game.active.revealed) return;
  const clue = activeClue(game);
  const player = game.players[game.active.player];
  const value = clue.value;
  const id = clue.id;
  if (!resolveClue(game, result)) return;
  recent = [...recent.filter(previous => previous !== id), id].slice(-400);
  storage.set(RECENT_KEY, JSON.stringify(recent));
  clearInterval(timerId); clueDialog.close(); persist(); renderBoard();
  playTone(result);
  toast(result === 'correct' ? `${player.name} gets ${number(value)} points. Nicely done!` : result === 'skip' ? 'Passed. On to the next one.' : game.settings.penalties ? `${player.name} loses ${number(value)} points. Next clue, fresh start.` : 'No points lost. There’s always the next clue.');
  if (roundComplete(game)) app.querySelector('[data-action="advance"]')?.focus();
  else app.querySelector('.clue-tile:not(:disabled)')?.focus({ preventScroll: true });
}

function renderResults() {
  screen = 'results';
  const ranked = rankings(game);
  const winners = ranked.filter(p => p.score === ranked[0].score);
  const winnerNames = winners.map(p => p.name).join(' & ');
  const title = game.players.length === 1 ? 'A brainy performance.' : winners.length > 1 ? 'Bragging rights, shared.' : `${h(winnerNames)} takes the crown.`;
  app.innerHTML = `<section class="results" aria-labelledby="results-title"><div class="result-confetti" aria-hidden="true">${Array.from({ length: 24 }, (_, i) => `<i style="--x:${i / 24 * 100}%;--c:${COLORS[i % COLORS.length]};--r:${i * 29}deg;animation-delay:${i % 5 * .06}s"></i>`).join('')}</div><div class="result-badge" aria-hidden="true">♛</div><div class="eyebrow">THAT’S A WRAP</div><h1 id="results-title">${title}</h1><p class="result-subtitle">${game.rounds} round${game.rounds === 1 ? '' : 's'}. ${game.history.length} questions. ${game.players.reduce((sum, p) => sum + p.correct, 0)} correct answers.<br>${winners.length > 1 ? 'A tie at the top. Sounds like a rematch is in order.' : 'Same time next game night?'}</p>
    <div class="leaderboard">${ranked.map((p, i) => { const rank = ranked.findIndex(other => other.score === p.score) + 1; return `<div class="leader-row ${rank === 1 ? 'winner' : ''}" style="--player-color:${p.color}"><span class="rank">${rank === 1 ? '♛' : rank}</span><span class="leader-avatar">${h(p.name.charAt(0).toUpperCase())}</span><div class="leader-info"><strong>${h(p.name)}</strong><small>${p.correct} correct answer${p.correct === 1 ? '' : 's'}${rank === 1 ? ' · Bragging rights secured' : ''}</small></div><span class="leader-score">${number(p.score)} <small style="font:10px var(--font);color:var(--muted)">pts</small></span></div>`; }).join('')}</div>
    <div class="result-actions"><button class="primary-button" data-action="rematch">Same players, fresh questions <span>↻</span></button><button class="secondary-button" data-action="home">Back to game setup</button></div><button class="text-button" data-action="undo">↶ Correct the last score</button></section>`;
  scrollTop();
}

function showHow() {
  infoDialog.innerHTML = `<div class="info-heading"><h2 id="info-title">One screen. Big energy.</h2><button class="icon-button" data-info="close" aria-label="Close instructions">×</button></div><p>Gather around a shared screen. Play solo, with friends, or as teams — you’re all in charge of the show.</p><ol class="how-steps"><li><span class="step-number">1</span><div><strong>Pick your challenge</strong><p>The highlighted player chooses a category and point value. Higher values bring trickier questions.</p></div></li><li><span class="step-number">2</span><div><strong>Make your call</strong><p>Select who’s answering, then say the answer out loud. The optional 20-second timer is a friendly prompt; it never deducts points automatically.</p></div></li><li><span class="step-number">3</span><div><strong>Reveal. Judge. Celebrate.</strong><p>Reveal the answer and mark it correct or incorrect. You decide if an answer is close enough. Correct answers earn the points and the next pick. Otherwise, the next player picks.</p></div></li><li><span class="step-number">4</span><div><strong>Keep the rivalry going</strong><p>Clear all 30 clues to move on. Every round has new categories, and values multiply by the round number. Highest total wins — ties share the crown.</p></div></li></ol><p>Need a do-over? Use “Undo last clue.” Games save in this browser. Keyboard shortcuts: <kbd>1</kbd>–<kbd>8</kbd> choose a player, <kbd>space</kbd> reveals, and <kbd>C</kbd> / <kbd>I</kbd> mark answers.</p><button class="primary-button" data-info="close">Got it. Let’s play.</button>`;
  infoDialog.showModal();
}

function confirm(title, message, label, action) {
  confirmAction = action;
  infoDialog.innerHTML = `<div class="info-heading"><h2 id="info-title">${h(title)}</h2></div><p>${h(message)}</p><div class="info-actions"><button class="secondary-button" data-info="close">Keep my game</button><button class="primary-button" data-info="confirm">${h(label)}</button></div>`;
  infoDialog.showModal();
}

app.addEventListener('input', event => {
  if (event.target.matches('[data-name]')) config.names[Number(event.target.dataset.name)] = event.target.value;
});
app.addEventListener('change', event => {
  if (event.target.id === 'timer-setting') config.timer = event.target.checked;
  if (event.target.id === 'penalty-setting') config.penalties = event.target.checked;
});
app.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.disabled) return;
  if (button.dataset.round) { config.rounds = Number(button.dataset.round); renderSetup(); app.querySelector(`[data-round="${config.rounds}"]`).focus(); return; }
  if (button.dataset.column !== undefined && game && screen === 'board') {
    lastTile = [Number(button.dataset.column), Number(button.dataset.row)];
    if (openClue(game, ...lastTile)) { showClue(); playTone(); }
    return;
  }
  switch (button.dataset.action) {
    case 'more': case 'fewer': {
      const action = button.dataset.action;
      config.count = Math.max(1, Math.min(8, config.count + (action === 'more' ? 1 : -1))); renderSetup();
      const next = app.querySelector(`[data-action="${action}"]`); if (!next.disabled) next.focus();
      break;
    }
    case 'start':
      if (savedGame?.status === 'playing') confirm('A fresh start?', 'Starting a new game replaces your saved match and its scores.', 'Start fresh', startGame);
      else startGame();
      break;
    case 'resume': game = savedGame; game.status === 'finished' ? renderResults() : renderBoard(); if (game.active) showClue(); scrollTop(); break;
    case 'discard': confirm('Leave this match behind?', 'This clears your saved game and scores. You can start a new game with fresh questions.', 'Discard game', () => { savedGame = null; game = null; storage.remove(KEY); renderSetup(); }); break;
    case 'home': goHome(); break;
    case 'undo': if (undoClue(game)) { persist(); renderBoard(); toast('Last clue undone. Scores restored.'); } break;
    case 'advance': if (advanceRound(game)) { persist(); if (game.status === 'finished') { renderResults(); playTone('correct'); } else { renderBoard(); scrollTop(); } } break;
    case 'rematch': config = { ...config, count: game.players.length, names: [...game.players.map(p => p.name), ...config.names.slice(game.players.length)], rounds: game.rounds, ...game.settings }; startGame(); break;
  }
});

clueDialog.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || !game?.active) return;
  if (button.dataset.player !== undefined) {
    game.active.player = Number(button.dataset.player); persist();
    clueDialog.querySelectorAll('[data-player]').forEach(b => { const selected = Number(b.dataset.player) === game.active.player; b.classList.toggle('selected', selected); b.setAttribute('aria-pressed', String(selected)); });
    return;
  }
  switch (button.dataset.clue) {
    case 'close': closeClue(); break;
    case 'reveal': game.active.revealed = true; showClue(); break;
    case 'correct': case 'incorrect': case 'skip': judge(button.dataset.clue); break;
  }
});
clueDialog.addEventListener('cancel', event => { event.preventDefault(); closeClue(); });
infoDialog.addEventListener('click', event => {
  const action = event.target.closest('button')?.dataset.info;
  if (action === 'close') { infoDialog.close(); confirmAction = null; }
  if (action === 'confirm') { const callback = confirmAction; confirmAction = null; infoDialog.close(); callback?.(); }
});
infoDialog.addEventListener('cancel', () => { confirmAction = null; });
$('#home-button').addEventListener('click', goHome);
$('#how-button').addEventListener('click', showHow);
$('#sound-button').addEventListener('click', () => { sound = !sound; storage.set('quiz-night-sound', String(sound)); updateSound(); playTone(); });
document.addEventListener('keydown', event => {
  if (!clueDialog.open || infoDialog.open || !game?.active || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
  const key = event.key.toLowerCase();
  if (/^[1-8]$/.test(key) && game.players[Number(key) - 1]) { event.preventDefault(); clueDialog.querySelector(`[data-player="${Number(key) - 1}"]`).click(); }
  if (key === ' ' && !game.active.revealed) { event.preventDefault(); game.active.revealed = true; showClue(); }
  if (key === 'c' && game.active.revealed) { event.preventDefault(); judge('correct'); }
  if (key === 'i' && game.active.revealed) { event.preventDefault(); judge('incorrect'); }
});
window.addEventListener('pagehide', persist);
updateSound();
renderSetup();

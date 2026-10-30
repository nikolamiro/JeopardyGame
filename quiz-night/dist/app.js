import { QUESTION_BANK } from './questions.js';
import { t, getLanguage, setLanguage, number } from './i18n.js';
import { setupView, boardView, clueView, resultsView, howView, confirmView } from './views.js';
import { createGame, openClue, activeClue, resolveClue, undoClue, roundComplete, advanceRound, restoreGame } from './engine.js';

const $ = selector => document.querySelector(selector);
const app = $('#app');
const clueDialog = $('#clue-dialog');
const infoDialog = $('#info-dialog');
const KEY = 'quiz-night-game-v1';
const RECENT_KEY = 'quiz-night-recent-v1';
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
  set(key, value) { try { localStorage.setItem(key, value); } catch { if (!storageNotice) { storageNotice = true; toast(t('storageUnavailable')); } } },
  remove(key) { try { localStorage.removeItem(key); } catch { /* The active game still works in memory. */ } }
};
let game = null;
let savedGame = restoreGame(storage.get(KEY));
let screen = 'setup';
let config = { count: 3, rounds: 2, names: Array.from({ length: 8 }, (_, i) => t('playerName', { n: i + 1 })), automaticNames: Array(8).fill(true), timer: true, penalties: false };
let recent;
try { recent = JSON.parse(storage.get(RECENT_KEY)); } catch { recent = []; }
if (!Array.isArray(recent) || !recent.every(id => typeof id === 'string')) recent = [];
let sound = storage.get('quiz-night-sound') === 'true';
let audioContext;
let timerId;
let toastId;
let confirmAction;
let confirmCopy = null;
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
  const label = t(sound ? 'soundOff' : 'soundOn');
  $('#sound-button').setAttribute('aria-label', label);
  $('#sound-button').setAttribute('aria-pressed', String(sound));
  $('#sound-button').title = label;
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
  app.innerHTML = setupView(config, savedGame, icon);
}

function startGame() {
  game = createGame(QUESTION_BANK, config.names.slice(0, config.count).map((name, i) => name.trim() || t('playerName', { n: i + 1 })), config.rounds, config, recent);
  persist(); screen = 'board'; renderBoard(); scrollTop(); playTone();
}

function renderBoard() {
  screen = 'board';
  app.innerHTML = boardView(game);
}

function showClue() {
  if (!game.active) return;
  clearInterval(timerId);
  if (!Number.isFinite(game.active.remaining)) game.active.remaining = 20;
  const revealed = game.active.revealed;
  clueDialog.innerHTML = clueView(game);
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
  timer.textContent = revealed ? t('truth') : !game.settings.timer ? t('takeTime') : remaining > 0 ? t('secondsLeft', { n: remaining }) : t('timesUp');
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
  toast(t(result === 'correct' ? 'correctToast' : result === 'skip' ? 'skipToast' : game.settings.penalties ? 'incorrectToast' : 'noPenaltyToast', { name: player.name, points: number(value) }));
  if (roundComplete(game)) app.querySelector('[data-action="advance"]')?.focus();
  else app.querySelector('.clue-tile:not(:disabled)')?.focus({ preventScroll: true });
}

function renderResults() {
  screen = 'results';
  app.innerHTML = resultsView(game);
  scrollTop();
}

function showHow() {
  confirmCopy = null;
  infoDialog.innerHTML = howView();
  if (!infoDialog.open) infoDialog.showModal();
}

function confirm(title, message, label, action) {
  confirmAction = action;
  confirmCopy = [title, message, label];
  infoDialog.innerHTML = confirmView(...confirmCopy);
  infoDialog.showModal();
}

function updateChrome() {
  document.documentElement.lang = getLanguage();
  document.title = t('pageTitle');
  $('meta[name="description"]').content = t('description');
  $('#home-button').setAttribute('aria-label', t('home'));
  $('.header-tagline').textContent = t('tagline');
  $('.site-header nav').setAttribute('aria-label', t('controls'));
  $('.help-label').textContent = t('how');
  $('#how-button').title = t('how');
  $('#language-select').setAttribute('aria-label', t('language'));
  $('#language-select').value = getLanguage();
  $('.site-footer > span:first-child').textContent = t('footer');
  $('.site-footer > span:last-child').innerHTML = t('footerMade') + ' <span class="tiny-star">✦</span>';
  updateSound();
  window.dispatchEvent(new Event('quiz-night-languagechange'));
}

$('#language-select').addEventListener('change', event => {
  if (!setLanguage(event.target.value)) return;
  config.names = config.names.map((name, i) => config.automaticNames[i] ? t('playerName', { n: i + 1 }) : name);
  updateChrome();
  $('#toast').classList.remove('visible');
  if (screen === 'setup') renderSetup();
  else if (screen === 'results') renderResults();
  else renderBoard();
  if (clueDialog.open) showClue();
  if (infoDialog.open) infoDialog.innerHTML = confirmCopy ? confirmView(...confirmCopy) : howView();
});

app.addEventListener('input', event => {
  if (event.target.matches('[data-name]')) {
    const index = Number(event.target.dataset.name);
    config.names[index] = event.target.value;
    config.automaticNames[index] = false;
  }
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
      if (savedGame?.status === 'playing') confirm('freshTitle', 'freshMessage', 'freshAction', startGame);
      else startGame();
      break;
    case 'resume': game = savedGame; game.status === 'finished' ? renderResults() : renderBoard(); if (game.active) showClue(); scrollTop(); break;
    case 'discard': confirm('discardTitle', 'discardMessage', 'discardAction', () => { savedGame = null; game = null; storage.remove(KEY); renderSetup(); }); break;
    case 'home': goHome(); break;
    case 'undo': if (undoClue(game)) { persist(); renderBoard(); toast(t('undoToast')); } break;
    case 'advance': if (advanceRound(game)) { persist(); if (game.status === 'finished') { renderResults(); playTone('correct'); } else { renderBoard(); scrollTop(); } } break;
    case 'rematch': config = { ...config, automaticNames: Array(8).fill(false), count: game.players.length, names: [...game.players.map(p => p.name), ...config.names.slice(game.players.length)], rounds: game.rounds, ...game.settings }; startGame(); break;
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
  if ((key === 'c' || getLanguage() === 'sv' && key === 'r') && game.active.revealed) { event.preventDefault(); judge('correct'); }
  if ((key === 'i' || getLanguage() === 'sv' && key === 'f') && game.active.revealed) { event.preventDefault(); judge('incorrect'); }
});
window.addEventListener('pagehide', persist);
updateChrome();
renderSetup();

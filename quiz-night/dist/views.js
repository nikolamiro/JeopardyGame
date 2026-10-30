import { QUESTION_BANK, QUESTION_COUNT } from './questions.js';
import { COLORS, activeClue, roundComplete, rankings } from './engine.js';
import { t, count, number, categoryName, translatedClue } from './i18n.js';

const h = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

export function setupView(config, savedGame, icon) {
  const previewCategories = [2, 0, 10, 8, 6, 4].map(index => QUESTION_BANK[index]);
  return `
    ${savedGame?.status === 'playing' ? `<div class="resume-banner"><p><strong>${t('resumeTitle')}</strong> ${t('roundOf', { n: savedGame.round + 1, total: savedGame.rounds })} · ${count('player', savedGame.players.length)}</p><button class="text-button" data-action="resume">${t('resume')} <span>→</span></button><button class="text-button discard" data-action="discard">${t('discard')}</button></div>` : ''}
    <div class="setup-layout">
      <section class="hero" aria-labelledby="hero-title">
        <div class="eyebrow"><span class="eyebrow-dot"></span> ${t('eyebrow')}</div>
        <h1 id="hero-title">${t('hero')}</h1>
        <p class="hero-description">${t('heroDescription')}</p>
        <div class="hero-stats"><div class="hero-stat"><strong>${QUESTION_COUNT}</strong><span>${t('curated')}</span></div><div class="hero-stat"><strong>${QUESTION_BANK.length}</strong><span>${t('categories')}</span></div><div class="hero-stat"><strong>1–8</strong><span>${t('teams')}</span></div></div>
        <p class="hero-note">${icon('check')} ${t('noSignup')}</p>
      </section>
      <section class="setup-card" aria-labelledby="setup-title">
        <div class="card-heading"><h2 id="setup-title">${t('setupTitle')}</h2><span class="small-star" aria-hidden="true">✳</span></div>
        <p class="card-subtitle">${t('setupSubtitle')}</p>
        <div class="setting-row"><div class="setting-label">${icon('users')} ${t('players')} <span class="setting-hint">${t('orTeams')}</span></div><div class="stepper"><button data-action="fewer" aria-label="${t('removePlayer')}" ${config.count === 1 ? 'disabled' : ''}>−</button><strong aria-live="polite">${config.count}</strong><button data-action="more" aria-label="${t('addPlayer')}" ${config.count === 8 ? 'disabled' : ''}>+</button></div></div>
        <div class="player-inputs">${config.names.slice(0, config.count).map((name, i) => `<label class="player-input" style="--player-color:${COLORS[i]}"><span class="player-dot"></span><input data-name="${i}" aria-label="${t('playerNameLabel', { n: i + 1 })}" value="${h(name)}" maxlength="24" autocomplete="off" spellcheck="false"></label>`).join('')}</div>
        <div class="setting-row"><div class="setting-label">${icon('rounds')} ${t('rounds')}</div><span class="setting-hint">${t('cluesPerRound')}</span></div>
        <div class="round-options" role="group" aria-label="${t('roundNumber')}">${Array.from({ length: 6 }, (_, i) => `<button class="round-option ${config.rounds === i + 1 ? 'selected' : ''}" data-round="${i + 1}" aria-pressed="${config.rounds === i + 1}" aria-label="${count('round', i + 1)}">${i + 1}</button>`).join('')}</div>
        <p class="round-caption">${t('duration', { questions: config.rounds * 30, min: config.rounds * 15, max: config.rounds * 25 })}</p>
        <div class="game-options"><label class="toggle-label"><span>${t('timer')} <small>${t('seconds20')}</small></span><input class="switch" type="checkbox" id="timer-setting" ${config.timer ? 'checked' : ''}></label><label class="toggle-label"><span>${t('penalty')} <small>${t('losePoints')}</small></span><input class="switch" type="checkbox" id="penalty-setting" ${config.penalties ? 'checked' : ''}></label></div>
        <button class="primary-button start-button" data-action="start">${t('start')} <span class="arrow">→</span></button>
        <p class="setup-footnote">${t('setupFootnote')}</p>
      </section>
    </div>
    <section class="preview-section" aria-labelledby="preview-title"><div class="section-heading"><h2 id="preview-title">${t('preview')} <span>${t('previewBadge')}</span></h2><p>${t('previewHint')}</p></div><div class="preview-board" aria-hidden="true">${previewCategories.map(category => `<div class="preview-column"><div class="preview-category"><span>${category.icon}</span>${category.id === 'category-6' ? t('foodDrink') : h(categoryName(category))}</div>${[200, 400, 600].map(value => `<div class="preview-value">${number(value)}</div>`).join('')}</div>`).join('')}</div><div class="preview-bottom"><span>↻</span> ${t('freshBoards')}</div></section>`;
}

export function boardView(game) {
  const board = game.boards[game.round];
  const completed = board.reduce((total, c) => total + c.clues.filter(q => q.done).length, 0);
  const picker = game.players[game.picker];
  return `<section aria-labelledby="board-title">
    <div class="game-topbar"><div><div class="game-eyebrow"><span class="live-dot"></span> ${t('yourFloor')}</div><h1 class="game-title" id="board-title">${t(completed === 30 ? 'roundDone' : 'pickNext')}</h1></div><div class="game-tools"><button class="text-button" data-action="home">← ${t('setup')}</button><div class="round-pill">${t('round')} <b>${game.round + 1} <span style="color:#aaa3b4;font-weight:400">/ ${game.rounds}</span></b></div></div></div>
    <div class="board-wrap"><div class="board">${board.map((category, column) => `<div class="board-column"><h2 class="category-header" id="category-${column}"><span class="category-symbol" aria-hidden="true">${h(category.icon)}</span>${h(categoryName(category))}</h2>${category.clues.map((clue, row) => `<button class="clue-tile ${clue.done ? 'done' : ''}" data-column="${column}" data-row="${row}" ${clue.done ? 'disabled' : ''} aria-label="${h(categoryName(category))}, ${number(clue.value)} ${t('points')}${clue.done ? ', ' + t('played') : ''}">${clue.done ? `${clue.result?.result === 'correct' ? '✓' : '—'}<span class="tile-done-name">${clue.result?.result === 'skip' ? t('passed') : h(game.players[clue.result?.player]?.name || t('playedLabel'))}</span>` : number(clue.value)}</button>`).join('')}</div>`).join('')}</div></div>
    <div class="board-bottom"><div class="turn-indicator" style="--player-color:${picker.color}"><span class="player-dot"></span><span><strong>${h(picker.name)}</strong>${t(completed === 30 ? 'nicelyPlayed' : 'pickClue')}</span></div><div><span class="progress-track"><span style="width:${completed / 30 * 100}%"></span></span>${completed} / 30 ${t('played')}</div><button class="text-button" data-action="undo" ${game.history.length ? '' : 'disabled'}>↶ ${t('undo')}</button></div>
    ${roundComplete(game) ? `<div class="round-finish"><div><h2>${t(game.round + 1 === game.rounds ? 'finalAnswer' : 'nextRoundTitle')}</h2><p>${game.round + 1 === game.rounds ? t('seeWinner') : t('roundMultiplier', { n: game.round + 2 })}</p></div><button class="primary-button" data-action="advance">${t(game.round + 1 === game.rounds ? 'results' : 'nextRound')} <span class="arrow">→</span></button></div>` : ''}
    <section class="score-section" aria-label="${t('scoreboard')}"><div class="score-heading"><h2>${t('rivalry')}</h2><span>${t(game.settings.penalties ? 'penaltiesOn' : 'penaltiesOff')}</span></div><div class="score-cards ${game.players.length > 4 ? 'many' : ''}" style="--players:${Math.min(4, game.players.length)}">${game.players.map(p => `<div class="score-card ${p.id === game.picker ? 'active' : ''}" style="--player-color:${p.color}"><div class="player-name"><span class="player-dot"></span><span>${h(p.name)}</span></div>${p.id === game.picker ? `<span class="your-pick">${t('yourPick')}</span>` : ''}<div class="player-score">${number(p.score)} <span style="font:10px var(--font);color:var(--muted);letter-spacing:0">${t('pts')}</span></div><div class="player-correct">${count('correct', p.correct)}</div></div>`).join('')}</div></section>
  </section>`;
}

export function clueView(game) {
  const clue = translatedClue(activeClue(game));
  const category = game.boards[game.round][game.active.column];
  const revealed = game.active.revealed;
  return `<div class="clue-top"><div class="clue-category">${h(categoryName(category))} <b>${number(clue.value)} ${t('pts')}</b></div><button class="icon-button clue-close" data-clue="close" aria-label="${t('returnBoard')}">×</button></div>
    <div class="clue-content"><div class="clue-timer" id="clue-timer" aria-live="off"></div><h2 id="clue-heading">${h(clue.question)}</h2>${game.settings.timer ? '<div class="timer-track"><div class="timer-fill" id="timer-fill"></div></div>' : ''}</div>
    <div class="clue-controls"><p class="answering-label">${t('whoAnswers')}</p><div class="answering-players" role="group" aria-label="${t('answeringPlayer')}">${game.players.map(p => `<button class="answer-player ${p.id === game.active.player ? 'selected' : ''}" data-player="${p.id}" aria-pressed="${p.id === game.active.player}" style="--player-color:${p.color}"><span class="player-dot"></span><span>${h(p.name)}</span></button>`).join('')}</div>
    ${revealed ? `<div class="answer-panel"><span>${t('answer')}</span><p>${h(clue.answer)}</p></div><div class="judging-buttons"><button class="judge-button" data-clue="correct">✓ ${t('correct')} <span>+${number(clue.value)}</span></button><button class="judge-button incorrect" data-clue="incorrect">× ${t('incorrect')} <span>${game.settings.penalties ? '−' + number(clue.value) : '0'} ${t('pts')}</span></button></div><p class="keyboard-hint">${t('judgeHint')}</p>` : `<button class="primary-button reveal-button" data-clue="reveal">${t('reveal')} <span class="arrow">↗</span></button><p class="keyboard-hint">${t('sayAnswer')} <kbd>${t('space')}</kbd> ${t('toReveal')}</p>`}
    <button class="text-button skip-button" data-clue="skip">${t('skip')} →</button></div>`;
}

export function resultsView(game) {
  const ranked = rankings(game);
  const winners = ranked.filter(p => p.score === ranked[0].score);
  const title = game.players.length === 1 ? t('soloResult') : winners.length > 1 ? t('tieResult') : t('winnerResult', { name: winners.map(p => p.name).join(' & ') });
  return `<section class="results" aria-labelledby="results-title"><div class="result-confetti" aria-hidden="true">${Array.from({ length: 24 }, (_, i) => `<i style="--x:${i / 24 * 100}%;--c:${COLORS[i % COLORS.length]};--r:${i * 29}deg;animation-delay:${i % 5 * .06}s"></i>`).join('')}</div><div class="result-badge" aria-hidden="true">♛</div><div class="eyebrow">${t('wrap')}</div><h1 id="results-title">${h(title)}</h1><p class="result-subtitle">${count('round', game.rounds)}. ${t('questionSummary', { n: game.history.length })} ${count('correct', game.players.reduce((sum, p) => sum + p.correct, 0))}.<br>${t(winners.length > 1 ? 'tieHint' : 'nextNight')}</p>
    <div class="leaderboard">${ranked.map(p => { const rank = ranked.findIndex(other => other.score === p.score) + 1; return `<div class="leader-row ${rank === 1 ? 'winner' : ''}" style="--player-color:${p.color}"><span class="rank">${rank === 1 ? '♛' : rank}</span><span class="leader-avatar">${h(p.name.charAt(0).toUpperCase())}</span><div class="leader-info"><strong>${h(p.name)}</strong><small>${count('correct', p.correct)}${rank === 1 ? t('braggingRights') : ''}</small></div><span class="leader-score">${number(p.score)} <small style="font:10px var(--font);color:var(--muted)">${t('pts')}</small></span></div>`; }).join('')}</div>
    <div class="result-actions"><button class="primary-button" data-action="rematch">${t('rematch')} <span>↻</span></button><button class="secondary-button" data-action="home">${t('backSetup')}</button></div><button class="text-button" data-action="undo">↶ ${t('correctLast')}</button></section>`;
}

export function howView() {
  return `<div class="info-heading"><h2 id="info-title">${t('howTitle')}</h2><button class="icon-button" data-info="close" aria-label="${t('closeInstructions')}">×</button></div><p>${t('howIntro')}</p><ol class="how-steps">${[1, 2, 3, 4].map(n => `<li><span class="step-number">${n}</span><div><strong>${t('how' + n + 'Title')}</strong><p>${t('how' + n)}</p></div></li>`).join('')}</ol><p>${t('howKeyboard')}</p><button class="primary-button" data-info="close">${t('gotIt')}</button>`;
}

export function confirmView(title, message, label) {
  return `<div class="info-heading"><h2 id="info-title">${t(title)}</h2></div><p>${t(message)}</p><div class="info-actions"><button class="secondary-button" data-info="close">${t('keepGame')}</button><button class="primary-button" data-info="confirm">${t(label)}</button></div>`;
}

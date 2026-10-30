import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTION_BANK } from '../dist/questions.js';
import { SWEDISH_CATEGORIES, SWEDISH_CLUES } from '../dist/questions-sv.js';
import { STRINGS, setLanguage, getLanguage, t, count, number, categoryName, translatedClue } from '../dist/i18n.js';
import { createGame, openClue, resolveClue, advanceRound, restoreGame } from '../dist/engine.js';
import { setupView, boardView, clueView, resultsView, howView, confirmView } from '../dist/views.js';

test('every English category and all 540 clue IDs have a complete Swedish counterpart', () => {
  assert.equal(SWEDISH_CATEGORIES.size, 36);
  assert.equal(SWEDISH_CLUES.size, 540);
  const questions = new Set();
  for (const category of QUESTION_BANK) {
    const localized = SWEDISH_CATEGORIES.get(category.id);
    assert.ok(localized?.name);
    assert.equal(localized.clues.length, category.clues.length);
    for (const clue of category.clues) {
      const sv = SWEDISH_CLUES.get(clue.id);
      assert.ok(sv?.question.length > 10, clue.id);
      assert.ok(sv?.answer?.trim(), clue.id);
      assert.notEqual(sv.question, clue.question);
      questions.add(sv.question);
    }
  }
  assert.equal(questions.size, 540);
});
test('UI translations retain the same placeholders in both languages', () => {
  const placeholders = text => [...text.matchAll(/\{(\w+)\}/g)].map(m => m[1]).sort();
  for (const [key, [en, sv]] of Object.entries(STRINGS)) {
    assert.ok(en?.trim() && sv?.trim(), key);
    assert.deepEqual(placeholders(en), placeholders(sv), key);
  }
});
test('language changes localize saved clues without mutating scores, IDs, or history', () => {
  const g = createGame(QUESTION_BANK, ['Åsa', 'Player 1'], 2, { penalties: true });
  openClue(g, 0, 0); resolveClue(g, 'correct', 0); openClue(g, 1, 4);
  g.active.revealed = true; g.active.remaining = 7;
  const saved = JSON.stringify(g);
  const oldGame = restoreGame(saved);
  for (const lang of ['sv', 'en']) {
    setLanguage(lang);
    for (const category of oldGame.boards.flat()) {
      assert.equal(categoryName(category), lang === 'sv' ? SWEDISH_CATEGORIES.get(category.id).name : category.name);
      for (const clue of category.clues) {
        const q = translatedClue(clue);
        assert.equal(q.id, clue.id); assert.equal(q.value, clue.value); assert.equal(q.done, clue.done);
        assert.equal(q.question, lang === 'sv' ? SWEDISH_CLUES.get(clue.id).question : clue.question);
      }
    }
    assert.equal(JSON.stringify(oldGame), saved);
  }
});
test('Swedish numbers, plurals, invalid preferences, and imported unknown clues are handled', () => {
  setLanguage('sv');
  assert.equal(count('round', 1), '1 omgång');
  assert.equal(count('round', 2), '2 omgångar');
  assert.equal(count('player', 2), '2 spelare');
  assert.equal(count('correct', 1), '1 rätt svar');
  assert.equal(count('correct', 2), '2 rätta svar');
  assert.equal(number(1000), '1\u00a0000');
  assert.equal(setLanguage('unsupported'), false); assert.equal(getLanguage(), 'sv');
  const unknown = { id: 'imported', question: 'Custom question', answer: 'Custom answer', value: 200 };
  assert.deepEqual(translatedClue(unknown), unknown);
  setLanguage('en'); assert.equal(count('round', 1), '1 round'); assert.equal(count('round', 2), '2 rounds');
});
test('all game screens render in both languages and player HTML stays escaped', () => {
  const config = { count: 2, rounds: 1, names: ['<img src=x>', 'Åsa'], timer: false, penalties: true };
  for (const language of ['en', 'sv']) {
    setLanguage(language);
    const g = createGame(QUESTION_BANK, config.names, 1, config);
    const setup = setupView(config, g, () => '');
    assert.ok(setup.includes(t('setupTitle'))); assert.ok(setup.includes('&lt;img src=x&gt;'));
    assert.ok(boardView(g).includes(t('scoreboard')));
    openClue(g, 0, 0);
    assert.ok(clueView(g).includes(t('reveal')));
    g.active.revealed = true;
    assert.ok(clueView(g).includes(t('answer')));
    resolveClue(g, 'correct', 0);
    for (let c = 0; c < 6; c++) for (let r = 0; r < 5; r++) if (openClue(g, c, r)) resolveClue(g, 'skip');
    assert.ok(boardView(g).includes(t('finalAnswer'))); advanceRound(g);
    const result = resultsView(g);
    assert.ok(result.includes(t('winnerResult', { name: '&lt;img src=x&gt;' })));
    assert.ok(!result.includes('<img'));
    g.players[1].score = g.players[0].score;
    assert.ok(resultsView(g).includes(t('tieResult')));
    assert.ok(howView().includes(t('howTitle')));
    assert.ok(confirmView('freshTitle', 'freshMessage', 'freshAction').includes(t('freshAction')));
  }
  setLanguage('en');
});

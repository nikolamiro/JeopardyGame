import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTION_BANK, QUESTION_COUNT } from '../dist/questions.js';
import { createGame, openClue, activeClue, resolveClue, undoClue, roundComplete, advanceRound, rankings, restoreGame } from '../dist/engine.js';

test('540 complete, unique clues across 36 balanced categories', () => {
  assert.equal(QUESTION_BANK.length, 36);
  assert.equal(QUESTION_COUNT, 540);
  const clues = QUESTION_BANK.flatMap(c => c.clues);
  assert.equal(new Set(clues.map(c => c.id)).size, 540);
  assert.equal(new Set(clues.map(c => c.question.toLowerCase())).size, 540);
  for (const category of QUESTION_BANK) {
    assert.equal(category.clues.length, 15);
    for (let tier = 0; tier < 5; tier++) assert.equal(category.clues.filter(c => c.tier === tier).length, 3);
    for (const clue of category.clues) {
      assert.ok(clue.question.length > 15, clue.id);
      assert.ok(clue.answer?.length > 0, clue.id);
      assert.ok(!clue.question.includes('|'));
    }
  }
});
test('all supported player counts and round counts produce complete unique boards', () => {
  for (let players = 1; players <= 8; players++) {
    for (let rounds = 1; rounds <= 6; rounds++) {
      const game = createGame(QUESTION_BANK, Array.from({ length: players }, (_, i) => `Person ${i}`), rounds);
      assert.equal(game.players.length, players);
      const categories = game.boards.flat();
      assert.equal(new Set(categories.map(c => c.id)).size, 6 * rounds);
      assert.equal(new Set(categories.flatMap(c => c.clues.map(q => q.id))).size, 30 * rounds);
      game.boards.forEach((board, round) => board.forEach(category => category.clues.forEach((q, row) => assert.equal(q.value, 200 * (row + 1) * (round + 1)))));
    }
  }
});
test('invalid setup is rejected and blank player names get sensible defaults', () => {
  for (const rounds of [0, 7, 2.3, '2']) assert.throws(() => createGame(QUESTION_BANK, ['A'], rounds));
  for (const names of [[], Array(9).fill('A'), null]) assert.throws(() => createGame(QUESTION_BANK, names, 1));
  assert.equal(createGame(QUESTION_BANK, ['  '], 1).players[0].name, 'Player 1');
});
test('correct answer awards selected player points and board control; no double scoring', () => {
  const g = createGame(QUESTION_BANK, ['Ada', 'Sam'], 1);
  assert.ok(openClue(g, 0, 4));
  assert.equal(activeClue(g).value, 1000);
  assert.equal(openClue(g, 1, 1), false);
  assert.ok(resolveClue(g, 'correct', 1));
  assert.equal(g.players[1].score, 1000);
  assert.equal(g.players[1].correct, 1);
  assert.equal(g.picker, 1);
  assert.equal(resolveClue(g, 'correct', 1), false);
  assert.equal(openClue(g, 0, 4), false);
});
test('incorrect and passed clues rotate control, with optional negative scores', () => {
  for (const penalties of [false, true]) {
    const g = createGame(QUESTION_BANK, ['Ada', 'Sam'], 1, { penalties });
    openClue(g, 0, 0); resolveClue(g, 'incorrect', 0);
    assert.equal(g.players[0].score, penalties ? -200 : 0);
    assert.equal(g.picker, 1);
    openClue(g, 0, 1); resolveClue(g, 'skip', 1);
    assert.equal(g.players[1].score, 0);
    assert.equal(g.picker, 0);
    assert.equal(g.players[0].correct, 0);
  }
});
test('invalid scoring and invalid tile coordinates do not mutate the game', () => {
  const g = createGame(QUESTION_BANK, ['A'], 1);
  assert.equal(openClue(g, -1, 0), false);
  assert.equal(openClue(g, 0, 5), false);
  openClue(g, 0, 0);
  assert.equal(resolveClue(g, 'correct', 9), false);
  assert.equal(resolveClue(g, 'invalid', 0), false);
  assert.equal(g.history.length, 0);
  assert.equal(g.players[0].score, 0);
});
test('undo restores points, correct count, picker, and clue availability', () => {
  const g = createGame(QUESTION_BANK, ['A', 'B'], 1, { penalties: true });
  for (const result of ['correct', 'incorrect', 'skip']) {
    const before = structuredClone(g);
    openClue(g, 1, 3); resolveClue(g, result, 1); assert.ok(undoClue(g));
    assert.deepEqual(g, before);
  }
});
test('six-round game ends only after all 180 clues; undo can cross rounds and results', () => {
  const g = createGame(QUESTION_BANK, ['A', 'B'], 6);
  assert.equal(advanceRound(g), false);
  for (let round = 0; round < 6; round++) {
    for (let column = 0; column < 6; column++) for (let row = 0; row < 5; row++) {
      openClue(g, column, row); resolveClue(g, 'correct', round % 2);
    }
    assert.ok(roundComplete(g));
    assert.ok(advanceRound(g));
    if (round === 0) {
      assert.ok(undoClue(g)); assert.equal(g.round, 0); assert.equal(roundComplete(g), false);
      openClue(g, 5, 4); resolveClue(g, 'correct', 0); advanceRound(g);
    }
  }
  assert.equal(g.status, 'finished');
  assert.equal(g.history.length, 180);
  assert.equal(g.players.reduce((sum, p) => sum + p.score, 0), 378000);
  undoClue(g);
  assert.equal(g.status, 'playing'); assert.equal(g.round, 5); assert.equal(g.history.length, 179);
});
test('fresh questions are preferred until the local bank has been exhausted', () => {
  const recent = QUESTION_BANK.flatMap(c => c.clues.filter((_, i) => i % 3 !== 2).map(q => q.id));
  const g = createGame(QUESTION_BANK, ['A'], 6, {}, recent);
  assert.ok(g.boards.flatMap(b => b.flatMap(c => c.clues)).every(q => !recent.includes(q.id)));
  const all = QUESTION_BANK.flatMap(c => c.clues.map(q => q.id));
  assert.doesNotThrow(() => createGame(QUESTION_BANK, ['A'], 6, {}, all));
});
test('saved games survive refresh including active player, reveal, and timer state', () => {
  const g = createGame(QUESTION_BANK, ['A', 'B'], 2);
  openClue(g, 4, 3); g.active.player = 1; g.active.revealed = true; g.active.remaining = 7;
  assert.deepEqual(restoreGame(JSON.stringify(g)), g);
});
test('corrupt saved data is rejected safely', () => {
  for (const bad of ['', null, '{}', 'not json', '{"version":1}']) assert.equal(restoreGame(bad), null);
  const base = createGame(QUESTION_BANK, ['A'], 1);
  for (const mutate of [g => { g.round = 7; }, g => { g.players[0].score = '100'; }, g => { g.boards[0][0].clues.pop(); }, g => { g.active = { row: 99, column: 0, player: 0 }; }, g => { g.history = [{ player: -1 }]; }]) {
    const g = structuredClone(base); mutate(g); assert.equal(restoreGame(g), null);
  }
});
test('rankings retain tied leaders without mutating player order', () => {
  const g = createGame(QUESTION_BANK, ['A', 'B', 'C'], 1);
  g.players[0].score = -200; g.players[1].score = 800; g.players[2].score = 800;
  assert.deepEqual(rankings(g).map(p => p.name), ['B', 'C', 'A']);
  assert.deepEqual(g.players.map(p => p.name), ['A', 'B', 'C']);
});

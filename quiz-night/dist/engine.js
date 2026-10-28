export const VALUES = [200, 400, 600, 800, 1000];
export const COLORS = ['#7254d3', '#df845c', '#459c92', '#cf668e', '#6689ca', '#b29039', '#7d9b50', '#9b70a3'];

export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createGame(bank, names, rounds, settings = {}, recentIds = []) {
  if (!Array.isArray(names) || names.length < 1 || names.length > 8) throw new Error('Choose 1–8 players.');
  if (!Number.isInteger(rounds) || rounds < 1 || rounds > 6) throw new Error('Choose 1–6 rounds.');
  if (bank.length < rounds * 6) throw new Error('Not enough categories.');
  const recent = new Set(recentIds);
  const categories = shuffle(bank).slice(0, rounds * 6);
  const boards = Array.from({ length: rounds }, (_, round) => categories.slice(round * 6, round * 6 + 6).map(category => ({
    id: category.id, name: category.name, icon: category.icon,
    clues: VALUES.map((value, tier) => {
      const choices = category.clues.filter(q => q.tier === tier);
      const fresh = choices.filter(q => !recent.has(q.id));
      const question = shuffle(fresh.length ? fresh : choices)[0];
      if (!question) throw new Error(`Missing tier ${tier} in ${category.name}`);
      return { ...question, value: value * (round + 1), done: false, result: null };
    })
  })));
  return {
    version: 1, players: names.map((name, id) => ({ id, name: String(name).trim().slice(0, 24) || `Player ${id + 1}`, score: 0, correct: 0, color: COLORS[id] })),
    rounds, round: 0, picker: 0, boards, settings: { timer: settings.timer !== false, penalties: !!settings.penalties },
    active: null, status: 'playing', history: [], startedAt: Date.now()
  };
}

export function openClue(game, column, row) {
  const clue = game.boards[game.round]?.[column]?.clues[row];
  if (game.status !== 'playing' || game.active || !clue || clue.done) return false;
  game.active = { column, row, player: game.picker, revealed: false };
  return true;
}

export function activeClue(game) {
  return game.active ? game.boards[game.round][game.active.column].clues[game.active.row] : null;
}

export function resolveClue(game, result, player = game.active?.player) {
  const clue = activeClue(game);
  if (!clue || clue.done || !['correct', 'incorrect', 'skip'].includes(result)) return false;
  if (!Number.isInteger(player) || !game.players[player]) return false;
  const delta = result === 'correct' ? clue.value : result === 'incorrect' && game.settings.penalties ? -clue.value : 0;
  game.history.push({ round: game.round, column: game.active.column, row: game.active.row, picker: game.picker, player, delta, result });
  game.players[player].score += delta;
  if (result === 'correct') game.players[player].correct++;
  clue.done = true;
  clue.result = { result, player, delta };
  game.picker = result === 'correct' ? player : (game.picker + 1) % game.players.length;
  game.active = null;
  return true;
}

export function undoClue(game) {
  if (game.active || !game.history.length) return false;
  const event = game.history.pop();
  game.round = event.round;
  game.status = 'playing';
  game.picker = event.picker;
  game.players[event.player].score -= event.delta;
  if (event.result === 'correct') game.players[event.player].correct--;
  const clue = game.boards[event.round][event.column].clues[event.row];
  clue.done = false;
  clue.result = null;
  return true;
}

export function roundComplete(game) { return game.boards[game.round].every(c => c.clues.every(q => q.done)); }
export function advanceRound(game) {
  if (game.active || !roundComplete(game)) return false;
  if (game.round + 1 === game.rounds) game.status = 'finished';
  else game.round++;
  return true;
}
export function rankings(game) { return [...game.players].sort((a, b) => b.score - a.score); }

export function restoreGame(value) {
  try {
    const g = typeof value === 'string' ? JSON.parse(value) : value;
    if (!g || g.version !== 1 || !['playing', 'finished'].includes(g.status) || !Number.isInteger(g.rounds) || g.rounds < 1 || g.rounds > 6 || !Number.isInteger(g.round) || g.round < 0 || g.round >= g.rounds) return null;
    if (!Array.isArray(g.players) || g.players.length < 1 || g.players.length > 8 || !g.players.every((p, i) => p.id === i && typeof p.name === 'string' && p.name.length <= 24 && Number.isFinite(p.score) && Number.isInteger(p.correct) && COLORS.includes(p.color))) return null;
    if (!Number.isInteger(g.picker) || !g.players[g.picker] || !g.settings || typeof g.settings.timer !== 'boolean' || typeof g.settings.penalties !== 'boolean') return null;
    if (!Array.isArray(g.boards) || g.boards.length !== g.rounds || !g.boards.every(b => Array.isArray(b) && b.length === 6 && b.every(c => typeof c.name === 'string' && Array.isArray(c.clues) && c.clues.length === 5 && c.clues.every(q => typeof q.id === 'string' && typeof q.question === 'string' && typeof q.answer === 'string' && Number.isFinite(q.value) && typeof q.done === 'boolean')))) return null;
    if (!Array.isArray(g.history) || !g.history.every(e => Number.isInteger(e.round) && e.round >= 0 && e.round < g.rounds && Number.isInteger(e.column) && e.column >= 0 && e.column < 6 && Number.isInteger(e.row) && e.row >= 0 && e.row < 5 && Number.isInteger(e.player) && !!g.players[e.player] && Number.isInteger(e.picker) && !!g.players[e.picker] && Number.isFinite(e.delta) && ['correct', 'incorrect', 'skip'].includes(e.result))) return null;
    if (g.active && (!Number.isInteger(g.active.column) || g.active.column < 0 || g.active.column > 5 || !Number.isInteger(g.active.row) || g.active.row < 0 || g.active.row > 4 || !Number.isInteger(g.active.player) || !g.players[g.active.player] || typeof g.active.revealed !== 'boolean' || g.boards[g.round][g.active.column].clues[g.active.row].done)) return null;
    return g;
  } catch { return null; }
}

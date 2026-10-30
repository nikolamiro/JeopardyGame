import { SWEDISH_CATEGORIES, SWEDISH_CLUES } from './questions-sv.js';

// English and Swedish UI copy lives together so missing translations are visible.
export const STRINGS = {
  pageTitle: ['Quiz Night — A little friendly competition.', 'Quiz Night — Lite vänskaplig tävlan.'],
  description: ['Turn your living room into a game show. A Jeopardy-style trivia game with 540 clues and 36 categories.', 'Förvandla vardagsrummet till en frågesport. Ett Jeopardy-liknande spel med 540 frågor och 36 kategorier.'],
  home: ['Quiz Night home', 'Quiz Night – startsida'],
  tagline: ['GOOD COMPANY. GREAT QUESTIONS.', 'GOTT SÄLLSKAP. KLURIGA FRÅGOR.'],
  controls: ['Game controls', 'Spelkontroller'],
  language: ['Language', 'Språk'],
  how: ['How to play', 'Så spelar ni'],
  soundOn: ['Turn sound on', 'Slå på ljud'],
  soundOff: ['Turn sound off', 'Stäng av ljud'],
  footer: ['A little friendly competition goes a long way.', 'Lite vänskaplig tävlan räcker långt.'],
  footerMade: ['Made for game night', 'Gjord för spelkvällen'],
  storageUnavailable: ['Browser storage is unavailable. Keep this tab open to finish your game.', 'Webbläsaren kan inte spara spelet. Håll fliken öppen tills ni har spelat klart.'],
  playerName: ['Player {n}', 'Spelare {n}'],
  playerNameLabel: ['Player {n} name', 'Namn på spelare {n}'],
  roundOne: ['round', 'omgång'], roundMany: ['rounds', 'omgångar'],
  playerOne: ['player', 'spelare'], playerMany: ['players', 'spelare'],
  correctOne: ['correct answer', 'rätt svar'], correctMany: ['correct answers', 'rätta svar'],
  resumeTitle: ['Your game night is waiting.', 'Spelkvällen väntar på er.'],
  roundOf: ['Round {n} of {total}', 'Omgång {n} av {total}'],
  resume: ['Resume game', 'Fortsätt spela'], discard: ['Discard', 'Ta bort'],
  eyebrow: ['A LITTLE FRIENDLY COMPETITION', 'LITE VÄNSKAPLIG TÄVLAN'],
  hero: ['Big brains.<br>Bigger <span>bragging</span><br>rights.', 'Kloka huvuden.<br>En kväll att <span>minnas.</span>'],
  heroDescription: ['Your living room. Your favorite people.<br>A whole lot of “wait, I know this one.”<br>Let’s make a game night of it.', 'Ert vardagsrum. Era favoritpersoner.<br>Massor av ”vänta, det här kan jag!”<br>Dags för en riktig spelkväll.'],
  curated: ['curated questions', 'utvalda frågor'], categories: ['categories to explore', 'kategorier att utforska'], teams: ['players or teams', 'spelare eller lag'],
  noSignup: ['No sign-ups. No downloads. Just one more round.', 'Inga konton. Inga nedladdningar. Bara en omgång till.'],
  setupTitle: ['Make it your game.', 'Spela på ert sätt.'],
  setupSubtitle: ['Gather your people. We’ll bring the questions.', 'Samla gänget. Vi står för frågorna.'],
  players: ['Players', 'Spelare'], orTeams: ['or teams', 'eller lag'],
  removePlayer: ['Remove a player', 'Ta bort en spelare'], addPlayer: ['Add a player', 'Lägg till en spelare'],
  rounds: ['Rounds', 'Omgångar'], cluesPerRound: ['30 clues per round', '30 frågor per omgång'], roundNumber: ['Number of rounds', 'Antal omgångar'],
  duration: ['{questions} questions · about {min}–{max} minutes of friendly rivalry', '{questions} frågor · ungefär {min}–{max} minuters vänskaplig tävlan'],
  timer: ['Question timer', 'Tid per fråga'], seconds20: ['20 seconds', '20 sekunder'], penalty: ['Wrong answer penalty', 'Poängavdrag vid fel svar'], losePoints: ['lose clue points', 'förlora frågans poäng'],
  start: ['Let’s play', 'Nu kör vi'], setupFootnote: ['One screen. Everyone plays. Game-show energy.', 'En skärm. Alla spelar. Riktig frågesportskänsla.'],
  preview: ['A peek at the board', 'En titt på spelplanen'], previewBadge: ['PREVIEW', 'FÖRHANDSVISNING'],
  previewHint: ['Pick a category. Pick your points. Trust your brain.', 'Välj kategori. Välj poäng. Lita på din kunskap.'],
  freshBoards: ['A freshly shuffled board every game. No repeat categories in a match.', 'En nyblandad spelplan varje gång. Inga upprepade kategorier under matchen.'],
  foodDrink: ['Food & Drink', 'Mat & dryck'],
  yourFloor: ['THE FLOOR IS YOURS', 'ORDET ÄR ERT'],
  roundDone: ['That’s a round.', 'Där satt omgången.'], pickNext: ['Pick your next “I know this.”', 'Välj nästa ”det här kan jag”.'],
  setup: ['Game setup', 'Spelinställningar'], round: ['Round', 'Omgång'], points: ['points', 'poäng'], pts: ['pts', 'p'],
  played: ['played', 'spelade'], playedLabel: ['Played', 'Spelad'], passed: ['Passed', 'Passad'],
  nicelyPlayed: [', nicely played.', ', snyggt spelat.'], pickClue: [', pick a clue.', ', välj en fråga.'],
  undo: ['Undo last clue', 'Ångra senaste frågan'], finalAnswer: ['The final answer is in.', 'Sista svaret är lämnat.'],
  nextRoundTitle: ['New categories. Bigger stakes.', 'Nya kategorier. Fler poäng.'],
  seeWinner: ['Let’s see who earned the bragging rights.', 'Nu ser vi vem som får skryta.'],
  roundMultiplier: ['Round {n} brings six new categories and {n}× the points.', 'Omgång {n} bjuder på sex nya kategorier och {n} gånger poängen.'],
  results: ['See the results', 'Visa resultatet'], nextRound: ['Next round', 'Nästa omgång'],
  scoreboard: ['Scoreboard', 'Poängtavla'], rivalry: ['The friendly rivalry', 'Den vänskapliga tävlingen'],
  penaltiesOn: ['Wrong answers lose points', 'Fel svar ger poängavdrag'], penaltiesOff: ['No penalties. Take a guess.', 'Inga avdrag. Våga gissa.'],
  yourPick: ['YOUR PICK', 'DU VÄLJER'], returnBoard: ['Return to board', 'Tillbaka till spelplanen'],
  whoAnswers: ['Who’s answering?', 'Vem svarar?'], answeringPlayer: ['Answering player', 'Spelaren som svarar'],
  answer: ['THE ANSWER', 'SVARET'], correct: ['Correct', 'Rätt'], incorrect: ['Incorrect', 'Fel'],
  judgeHint: ['Be your own judge. Close enough? You decide.', 'Ni dömer själva. Nära nog? Ni bestämmer.'],
  reveal: ['Reveal the answer', 'Visa svaret'], space: ['space', 'mellanslag'],
  sayAnswer: ['Say your answer out loud, then press', 'Säg svaret högt och tryck sedan på'], toReveal: ['to reveal.', 'för att visa svaret.'],
  skip: ['Nobody knows? Pass this clue', 'Ingen som vet? Passa frågan'],
  truth: ['THE MOMENT OF TRUTH', 'SANNINGENS ÖGONBLICK'], takeTime: ['TAKE YOUR TIME. YOU’VE GOT THIS.', 'TA GOD TID PÅ ER. DET HÄR KAN NI.'],
  secondsLeft: ['{n} seconds to shine', '{n} sekunder kvar'], timesUp: ['Time’s up! Make your call, then reveal.', 'Tiden är ute! Svara och visa sedan facit.'],
  correctToast: ['{name} gets {points} points. Nicely done!', '{name} får {points} poäng. Snyggt!'],
  skipToast: ['Passed. On to the next one.', 'Frågan passad. Vidare till nästa.'],
  incorrectToast: ['{name} loses {points} points. Next clue, fresh start.', '{name} förlorar {points} poäng. Ny fråga, ny chans.'],
  noPenaltyToast: ['No points lost. There’s always the next clue.', 'Inga poäng förlorade. Nästa fråga är en ny chans.'],
  soloResult: ['A brainy performance.', 'Starkt jobbat!'], tieResult: ['Bragging rights, shared.', 'En delad seger.'],
  winnerResult: ['{name} takes the crown.', '{name} tar hem segern.'], wrap: ['THAT’S A WRAP', 'TACK FÖR MATCHEN'],
  questionSummary: ['{n} questions.', '{n} frågor.'], tieHint: ['A tie at the top. Sounds like a rematch is in order.', 'Oavgjort i toppen. Det låter som läge för revansch.'],
  nextNight: ['Same time next game night?', 'Samma tid nästa spelkväll?'], braggingRights: [' · Bragging rights secured', ' · Skryträttigheterna säkrade'],
  rematch: ['Same players, fresh questions', 'Samma spelare, nya frågor'], backSetup: ['Back to game setup', 'Tillbaka till inställningarna'], correctLast: ['Correct the last score', 'Rätta senaste poängen'],
  howTitle: ['One screen. Big energy.', 'En skärm. Stor spelglädje.'], closeInstructions: ['Close instructions', 'Stäng spelreglerna'],
  howIntro: ['Gather around a shared screen. Play solo, with friends, or as teams — you’re all in charge of the show.', 'Samlas runt en gemensam skärm. Spela själv, med vänner eller i lag. Ni leder frågesporten tillsammans.'],
  how1Title: ['Pick your challenge', 'Välj er utmaning'], how1: ['The highlighted player chooses a category and point value. Higher values bring trickier questions.', 'Den markerade spelaren väljer kategori och poäng. Högre poäng ger svårare frågor.'],
  how2Title: ['Make your call', 'Ge ert svar'], how2: ['Select who’s answering, then say the answer out loud. The optional 20-second timer is a friendly prompt; it never deducts points automatically.', 'Välj vem som svarar och säg svaret högt. Den valfria tiden på 20 sekunder är en påminnelse och drar aldrig av poäng automatiskt.'],
  how3Title: ['Reveal. Judge. Celebrate.', 'Visa. Bedöm. Fira.'], how3: ['Reveal the answer and mark it correct or incorrect. You decide if an answer is close enough. Correct answers earn the points and the next pick. Otherwise, the next player picks.', 'Visa facit och markera rätt eller fel. Ni avgör om svaret är tillräckligt nära. Rätt svar ger poäng och rätten att välja nästa fråga. Annars går turen vidare.'],
  how4Title: ['Keep the rivalry going', 'Fortsätt tävla'], how4: ['Clear all 30 clues to move on. Every round has new categories, and values multiply by the round number. Highest total wins — ties share the crown.', 'Spela alla 30 frågor för att gå vidare. Varje omgång har nya kategorier och poängen multipliceras med omgångens nummer. Högst totalpoäng vinner. Vid oavgjort delas segern.'],
  howKeyboard: ['Need a do-over? Use “Undo last clue.” Games save in this browser. Keyboard shortcuts: <kbd>1</kbd>–<kbd>8</kbd> choose a player, <kbd>space</kbd> reveals, and <kbd>C</kbd> / <kbd>I</kbd> mark answers.', 'Blev det fel? Välj ”Ångra senaste frågan”. Spelet sparas i den här webbläsaren. Tangentbord: <kbd>1</kbd>–<kbd>8</kbd> väljer spelare, <kbd>mellanslag</kbd> visar svaret, <kbd>R</kbd> markerar rätt och <kbd>F</kbd> fel. Även <kbd>C</kbd> / <kbd>I</kbd> fungerar.'],
  gotIt: ['Got it. Let’s play.', 'Jag förstår. Nu kör vi.'], keepGame: ['Keep my game', 'Behåll spelet'],
  freshTitle: ['A fresh start?', 'Börja om?'], freshMessage: ['Starting a new game replaces your saved match and its scores.', 'Ett nytt spel ersätter den sparade matchen och dess poäng.'], freshAction: ['Start fresh', 'Starta nytt spel'],
  discardTitle: ['Leave this match behind?', 'Lämna den här matchen?'], discardMessage: ['This clears your saved game and scores. You can start a new game with fresh questions.', 'Det här tar bort den sparade matchen och poängen. Ni kan starta ett nytt spel med nya frågor.'], discardAction: ['Discard game', 'Ta bort spelet'],
  undoToast: ['Last clue undone. Scores restored.', 'Senaste frågan ångrad. Poängen återställda.']
};

let language = 'en';
try { if (globalThis.localStorage?.getItem('quiz-night-language') === 'sv') language = 'sv'; } catch { /* Use English when storage is blocked. */ }
export function getLanguage() { return language; }
export function setLanguage(value) {
  if (!['en', 'sv'].includes(value)) return false;
  language = value;
  try { globalThis.localStorage?.setItem('quiz-night-language', value); } catch { /* Still switch for this visit. */ }
  if (globalThis.document) document.documentElement.lang = value;
  return true;
}
export function t(key, values = {}) {
  const entry = STRINGS[key];
  if (!entry) throw new Error(`Missing UI translation: ${key}`);
  return entry[language === 'sv' ? 1 : 0].replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
}
export function number(value) { return new Intl.NumberFormat(language === 'sv' ? 'sv-SE' : 'en-US').format(value); }
export function count(key, n) { return `${number(n)} ${t(key + (n === 1 ? 'One' : 'Many'))}`; }
export function categoryName(category) { return language === 'sv' ? SWEDISH_CATEGORIES.get(category.id)?.name ?? category.name : category.name; }
export function translatedClue(clue) { return language === 'sv' ? { ...clue, ...SWEDISH_CLUES.get(clue.id) } : clue; }
if (globalThis.document) document.documentElement.lang = language;

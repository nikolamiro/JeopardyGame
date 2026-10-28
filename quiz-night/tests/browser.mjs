import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const project = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(project, 'test-results');
await mkdir(out, { recursive: true });
const port = 4173;
const server = spawn(process.execPath, [path.join(project, 'server.mjs')], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
let browser;
const errors = [];
try {
  await new Promise((resolve, reject) => { server.stdout.once('data', resolve); server.once('error', reject); server.once('exit', code => reject(new Error(`Server exited: ${code}`))); });
  const executablePath = process.env.CHROME_PATH || ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/chromium', '/usr/bin/google-chrome'].find(existsSync);
  assert.ok(executablePath, 'Set CHROME_PATH to an installed Chrome/Chromium browser.');
  browser = await chromium.launch({ executablePath, headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('.hero-stat strong').first().textContent(), '540');
  await page.screenshot({ path: path.join(out, 'setup-desktop.png'), fullPage: true });
  await page.getByRole('button', { name: 'How to play' }).click();
  assert.ok(await page.locator('#info-dialog').isVisible());
  await page.getByRole('button', { name: 'Got it. Let’s play.' }).click();
  await page.getByRole('button', { name: 'Turn sound on' }).click();
  assert.equal(await page.getByRole('button', { name: 'Turn sound off' }).getAttribute('aria-pressed'), 'true');
  await page.getByRole('button', { name: 'Turn sound off' }).click();
  await page.getByLabel('Player 1 name', { exact: true }).fill('<img src=x onerror=x()>');
  await page.getByLabel('Player 2 name', { exact: true }).fill('Mira');
  await page.getByLabel('Question timer').uncheck();
  await page.getByLabel('Wrong answer penalty').check();
  await page.getByRole('button', { name: 'Let’s play', exact: false }).click();
  assert.equal(await page.locator('.clue-tile').count(), 30);
  assert.equal(await page.locator('.score-cards img').count(), 0, 'Names must be escaped.');
  await page.screenshot({ path: path.join(out, 'board-desktop.png'), fullPage: true });
  await page.locator('[data-column="0"][data-row="0"]').click();
  assert.equal(await page.locator('.answer-panel').count(), 0);
  await page.keyboard.press('2');
  await page.keyboard.press('Space');
  assert.ok(await page.locator('.answer-panel').isVisible());
  await page.screenshot({ path: path.join(out, 'answer-desktop.png'), fullPage: true });
  await page.keyboard.press('c');
  let saved = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz-night-game-v1')));
  assert.equal(saved.players[1].score, 200); assert.equal(saved.picker, 1);
  await page.locator('[data-column="1"][data-row="1"]').click();
  await page.keyboard.press('Space'); await page.keyboard.press('i');
  saved = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz-night-game-v1')));
  assert.equal(saved.players[1].score, -200);
  await page.getByRole('button', { name: 'Undo last clue' }).click();
  saved = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz-night-game-v1')));
  assert.equal(saved.players[1].score, 200);
  await page.reload();
  await page.getByRole('button', { name: 'Resume game' }).click();
  assert.equal(await page.locator('.clue-tile.done').count(), 1);
  // Save and resume an open, revealed clue with a different answering player.
  await page.locator('.clue-tile:not(:disabled)').first().click();
  await page.keyboard.press('3'); await page.keyboard.press('Space');
  await page.reload(); await page.getByRole('button', { name: 'Resume game' }).click();
  assert.ok(await page.locator('.answer-panel').isVisible());
  assert.equal(await page.locator('[data-player="2"]').getAttribute('aria-pressed'), 'true');
  await page.keyboard.press('Escape');
  // Finish both complete rounds through real UI actions.
  for (let round = 0; round < 2; round++) {
    const remaining = await page.locator('.clue-tile:not(:disabled)').count();
    for (let i = 0; i < remaining; i++) {
      await page.locator('.clue-tile:not(:disabled)').first().click();
      await page.locator('[data-clue="skip"]').click();
    }
    await page.locator('[data-action="advance"]').click();
    if (round === 0) assert.equal(await page.locator('.clue-tile').first().textContent(), '400');
  }
  assert.ok(await page.locator('.results').isVisible());
  assert.equal(await page.locator('.leader-info strong').first().textContent(), 'Mira');
  await page.screenshot({ path: path.join(out, 'results-desktop.png'), fullPage: true });
  await page.getByRole('button', { name: 'Correct the last score' }).click();
  assert.equal(await page.locator('.clue-tile:not(:disabled)').count(), 1);
  await page.locator('.clue-tile:not(:disabled)').click();
  await page.locator('[data-clue="skip"]').click();
  await page.locator('[data-action="advance"]').click();
  await page.getByRole('button', { name: 'Same players, fresh questions' }).click();
  saved = await page.evaluate(() => JSON.parse(localStorage.getItem('quiz-night-game-v1')));
  assert.equal(saved.history.length, 0); assert.equal(saved.players[1].name, 'Mira');
  assert.ok(saved.players.every(p => p.score === 0));
  // Mobile configuration, all eight players, and six rounds.
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  mobile.on('pageerror', error => errors.push(error.message));
  await mobile.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle' });
  await mobile.screenshot({ path: path.join(out, 'setup-mobile.png'), fullPage: true });
  for (let i = 0; i < 5; i++) await mobile.getByRole('button', { name: 'Add a player' }).click();
  assert.ok(await mobile.getByRole('button', { name: 'Add a player' }).isDisabled());
  await mobile.getByRole('button', { name: '6 rounds', exact: true }).click();
  await mobile.locator('[data-action="start"]').click();
  assert.equal(await mobile.locator('.score-card').count(), 8);
  assert.ok(await mobile.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Board fits mobile viewport.');
  await mobile.screenshot({ path: path.join(out, 'board-mobile.png'), fullPage: true });
  // Restore a timer about to expire, then verify expiry does not deduct points.
  await mobile.locator('.clue-tile').first().click();
  await mobile.evaluate(() => { const g = JSON.parse(localStorage.getItem('quiz-night-game-v1')); g.active.remaining = 1; localStorage.setItem('quiz-night-game-v1', JSON.stringify(g)); });
  await mobile.reload(); await mobile.getByRole('button', { name: 'Resume game' }).click();
  await mobile.waitForFunction(() => document.querySelector('#clue-timer')?.textContent.includes('Time’s up'));
  saved = await mobile.evaluate(() => JSON.parse(localStorage.getItem('quiz-night-game-v1')));
  assert.ok(saved.players.every(p => p.score === 0));
  await mobile.screenshot({ path: path.join(out, 'clue-mobile.png'), fullPage: true });
  await mobile.getByRole('button', { name: 'Return to board' }).click();
  await mobile.getByRole('button', { name: 'Game setup' }).click();
  await mobile.getByRole('button', { name: 'Discard', exact: true }).click();
  await mobile.getByRole('button', { name: 'Discard game', exact: true }).click();
  assert.equal(await mobile.locator('.resume-banner').count(), 0);
  // Corrupt storage should recover to usable setup.
  await mobile.evaluate(() => localStorage.setItem('quiz-night-game-v1', '{broken'));
  await mobile.reload(); assert.ok(await mobile.locator('.setup-card').isVisible());
  assert.deepEqual(errors, []);
  console.log('Browser checks passed: setup, names, audio, instructions, scoring, penalties, undo, refresh, 2 complete rounds, results, rematch, 8 players, 6 rounds, mobile layout, timer expiry, discard, and corrupt-save recovery.');
  console.log(`Screenshots: ${out}`);
} finally {
  await browser?.close();
  server.kill();
}

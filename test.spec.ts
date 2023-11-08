import { test, expect } from '@playwright/test';
require('dotenv').config();

const username = process.env.WIKIPEDIA_USERNAME;
const password = process.env.WIKIPEDIA_PASSWORD;

if (!username || !password) {
  console.error('Please provide valid credentials in the .env file.');
  process.exit(1);
}

test('Wikipedia Login and Preferences', async ({ page }) => {
  // Крок 1: Логін на сайт 'Wikipedia'
  await loginToWikipedia(page);

  // Крок 2: Перехід до розділу 'Preferences' і зміна мови
  await goToPreferences(page);
});

async function loginToWikipedia(page) {
  await page.goto('https://www.wikipedia.org');
  await page.click('text=English');
  await page.click('text=Log in');
  await page.fill('#wpName1', 'username');
  await page.fill('#wpPassword1', 'password');
  await page.click('button:has-text("Log in")');
  await page.waitForLoadState('networkidle');
}

async function goToPreferences(page) {
  await page.click('#vector-user-links-dropdown-checkbox');
  const preferencesLocator = page.locator('text=Preferences');
  const preferencesElements = await preferencesLocator.all();
  expect(preferencesElements.length).toBeGreaterThan(0);
  await preferencesElements[0].click();
  await page.waitForURL('https://en.wikipedia.org/wiki/Special:Preferences');
  await page.waitForLoadState('networkidle');

 // Перехід до вкладки 'User profile'
  await page.click('text=User profile');
  await page.waitForLoadState('networkidle');

  // Вибір нової мови інтерфейсу ('Українська')
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight); // Скрол до низу на один екран
  });
  
  await page.click('text=More language settings');
  await page.click('[lang="uk"]');

  // // Збереження змін
  await page.click('text=Застосувати налаштування');

  // // Очікування зміни мови інтерфейсу
  await page.waitForSelector('text=Налаштування', { timeout: 10000 });

}








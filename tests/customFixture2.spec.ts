import { test as base } from '@playwright/test';
import mysql from 'mysql2/promise';

// Define fixture types
type MyFixtures = {
  authToken: string;
  db: mysql.Connection;
  loggedInPage: import('@playwright/test').Page;
};

// Extend base test with multiple fixtures
export const test = base.extend<MyFixtures>({
//   authToken: async ({}, use) => {
//     const token = await getAuthToken(); // custom function
//     await use(token);
//   },

  db: async ({}, use) => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'test_user',
      password: 'test_password',
      database: 'test_db',
    });
    await use(connection);
    await connection.end();
  },

  loggedInPage: async ({ page, authToken }, use) => {
    await page.goto('/login');
    await page.evaluate(token => localStorage.setItem('auth', token), authToken);
    await use(page);
  },
});

// Example test using all fixtures
test('query users with logged-in page', async ({ loggedInPage, db }) => {
  const [rows] = await db.execute('SELECT * FROM users');
  console.log(rows);

  await loggedInPage.goto('/dashboard');
  await loggedInPage.screenshot({ path: 'dashboard.png' });
});
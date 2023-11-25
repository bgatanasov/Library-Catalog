const { test, expect } = require('@playwright/test');
const pageUrl = "http://localhost:3000"

test('Verify "All Books" link is visible', async ({ page }) => {
  await page.goto(pageUrl);

  await page.waitForSelector('nav.navbar');

  const allBooksLink = await page.$('a[href="/catalog"]');

  const isLinkVisible = await allBooksLink.isVisible();
  expect(isLinkVisible).toBe(true);
});

test('Verify login button is working', async ({ page }) => {
    await page.goto(pageUrl);
  
    await page.waitForSelector('nav.navbar');
  
    const LoginButton = await page.$('a[href="/login"]');
  
    const isLoginButtonVisible = await LoginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
  });

  test('Verify register button is working', async ({ page }) => {
    await page.goto(pageUrl);
  
    await page.waitForSelector('nav.navbar');
  
    // const RegisterButton = await page.$('a[href="/register"]');
    const RegisterButton = await page.$('xpath=/html/body/div/header/nav/section/div[1]/a[2]');
    const isRegisterButtonVisible = await RegisterButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
  });

  test('Verify All buttons is visible after login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
  
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');
    //await page.waitForSelector('nav.navbar');
  
    const allBooksLink = await page.$('a[href="/catalog"]');
  
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
  });
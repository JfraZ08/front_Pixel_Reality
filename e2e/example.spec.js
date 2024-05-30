// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://pixelreality.netlify.app/');
  await page.getByRole('link', { name: 'L\'entreprise' }).click();
  await page.getByRole('link', { name: 'Photographie' }).click();
  await page.getByRole('link', { name: 'Imagerie IA' }).click();
  await page.getByRole('link', { name: 'Photogrammétrie' }).click();
  await page.getByRole('link', { name: 'QR Codes' }).click();
  await page.getByRole('link', { name: 'Photogrammétrie' }).click();
  await page.getByRole('link', { name: 'contactez moi' }).click();
  await page.getByPlaceholder('Votre nom').click();
  await page.getByPlaceholder('Votre nom').fill('jerem');
  await page.getByPlaceholder('Votre nom').press('Tab');
  await page.getByPlaceholder('Votre adresse mail').fill('fraz@fraz.fr');
  await page.getByPlaceholder('Votre adresse mail').press('Tab');
  await page.getByPlaceholder('Sujet').fill('test end to end');
  await page.getByPlaceholder('Message').click();
  await page.getByPlaceholder('Message').fill('test');
  await page.getByRole('button', { name: 'Envoyer' }).click();
});

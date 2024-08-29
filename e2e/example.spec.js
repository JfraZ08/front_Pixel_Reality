// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://front-pixel-reality.vercel.app/');
  await page.goto('https://front-pixel-reality.vercel.app/admin/drone');
  await page.getByPlaceholder('Titre de l\'article').click();
  await page.getByPlaceholder('Titre de l\'article').fill('titre de l\'article');
  await page.getByPlaceholder('Contenu de l\'article').click();
  await page.getByPlaceholder('Contenu de l\'article').fill('contenu de l\'article');
  await page.getByRole('button', { name: 'Ajouter l\'article' }).click();
  await page.getByPlaceholder('Nom du tag').click();
  await page.getByPlaceholder('Nom du tag').fill('Nom du tag');
  await page.getByRole('button', { name: 'Ajouter le tag' }).click();
  await page.getByPlaceholder('Nom de la catégorie').click();
  await page.getByPlaceholder('Nom de la catégorie').fill('nom de la catégorie');
  await page.getByRole('button', { name: 'Ajouter la catégorie' }).click();
});

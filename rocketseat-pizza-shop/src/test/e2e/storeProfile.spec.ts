import { expect, test } from '@playwright/test'

test('if user can update profile successfully', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Admin Profile' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('pitsa shop')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Perfeito, as informações foram atualizadas.')
  await expect(toast).toBeVisible()
})

test('if user gets an error on update profile', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Admin Profile' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByLabel('Nome').fill('testing-error')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente.')
  await expect(toast).toBeVisible()
})

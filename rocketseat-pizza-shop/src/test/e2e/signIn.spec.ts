import { test, expect } from '@playwright/test'

test('if user can sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page.locator('#email').fill('admin@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText('Autenticado com sucesso!')

  await expect(toast).toBeVisible()
})

test('if user sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page.locator('#email').fill('ablabluble@gmail.com')
  await page.getByRole('button', { name: 'Acessar Painel' }).click()

  const toast = page.getByText(
    'Email não encontrado.',
  )

  await expect(toast).toBeVisible()
})

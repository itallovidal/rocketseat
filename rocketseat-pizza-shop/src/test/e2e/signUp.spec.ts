import { test, expect } from '@playwright/test'

test('if user can sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.locator('#restaurantName').fill('Pizza Shop')
  await page.locator('#managerName').fill('manager-name')
  await page.locator('#email').fill('admin@gmail.com')
  await page.locator('#phone').fill('2199999999')
  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()
  const toast = page.getByText('Estabelecimento criado com sucesso!')

  await expect(toast).toBeVisible()
})

test('if user sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.locator('#restaurantName').fill('pitsa Shop')
  await page.locator('#managerName').fill('manager-name')
  await page.locator('#email').fill('admin@gmail.com')
  await page.locator('#phone').fill('2199999999')
  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()
  const toast = page.getByText('Erro ao cadastrar o restaurante.')

  await expect(toast).toBeVisible()
})

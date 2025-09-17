import { test, expect } from '@playwright/test';

test.describe('Oysho Login Testi', () => {

  test('geçersiz kimlik bilgileriyle hata mesajı göstermeli', async ({ page }) => {
    // 1. Doğrudan giriş sayfasına git
    await page.goto('https://www.oysho.com/tr/login');
    });
    });
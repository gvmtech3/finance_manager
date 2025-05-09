// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 10000
  },
  retries: 2,
  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    navigationTimeout: 15000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
});
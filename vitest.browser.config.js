// vitest.browser.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'browser',
    include: ['src/**/*.browser.test.{js,jsx}'],
    browser: {
      enabled: true,
      instances: [
        { browser: 'chromium' },
      ],
      provider: playwright(),
      headless: true,
    },
  },
})

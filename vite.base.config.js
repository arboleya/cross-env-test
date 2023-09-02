import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    ui: false,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['json']
    },
  },
})

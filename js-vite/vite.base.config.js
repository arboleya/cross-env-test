import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    ui: false,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['json']
    },
  },
})

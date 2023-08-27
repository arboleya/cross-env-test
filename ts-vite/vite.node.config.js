import { mergeConfig } from 'vitest/config'
import baseConfig from './vite.base.config'

export default mergeConfig(baseConfig, {
  test: {
    coverage: {
      reportsDirectory: 'coverage/node'
    }
  },
})

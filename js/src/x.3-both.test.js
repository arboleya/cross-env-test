import { expect, test } from 'vitest'
import { ping } from './x'

/**
 * @group browser
 * @group node
 */
test('ping-pong should work everywhere', () => {
  expect(ping()).toEqual('pong')
})

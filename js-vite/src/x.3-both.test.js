import { expect, test } from 'vitest'
import { ping, pong } from './x'

/**
 * @group browser
 * @group node
 */
test('ping-pong should work everywhere', () => {
  expect(ping()).toEqual('pong')
  expect(pong()).toEqual('ping')
})

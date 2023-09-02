import { ping, pong } from './index'

/**
 * @group browser
 * @group node
 */
test('ping-pong should work everywhere', () => {
  expect(ping()).toEqual('pong')
  expect(pong()).toEqual('ping')
})

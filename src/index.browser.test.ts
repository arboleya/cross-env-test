import { whereami } from './index'

/**
 * @group browser
 */
test('gets env in browser', () => {
  expect(whereami()).toEqual('browser')
})

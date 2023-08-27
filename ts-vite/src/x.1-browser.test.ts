import { whereami } from './x'

/**
 * @group browser
 */
test('gets env in browser', () => {
  expect(whereami()).toEqual('browser')
})

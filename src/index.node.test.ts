import { whereami } from './index'


/**
 * @group node
 */
test('gets env in node', () => {
  expect(whereami()).toEqual('node')
})

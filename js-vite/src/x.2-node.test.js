import { expect, test } from 'vitest'
import { whereami } from './x'

/**
 * @group node
 */
test('gets env in node', () => {
  expect(whereami()).toEqual('node')
})
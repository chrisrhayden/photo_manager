/* global it describe expect */

import {getKeys} from './App'

describe('App', () => {
  it('takes a page number and returns a starting and ending index', () => {
    const arrayOfKeys = Array.from({length: 60}, (_, i) => i + 1)
    expect(getKeys(arrayOfKeys, 1, 20)).toEqual([1, 20])
    expect(getKeys(arrayOfKeys, 3, 20)).toEqual([41, 60])
  })
})

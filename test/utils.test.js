import {
  extents,
  getValueByPath,
} from '../src/utils'

describe('misc', () => {
  describe('extents()', () => {
    it('returns correct values when params are in ascending order', () =>
      expect(extents(0, 100)).to.be.eql({ min: 0, max: 100 }))

    it('returns correct values when params are in descending order', () =>
      expect(extents(100, 0)).to.be.eql({ min: 0, max: 100 }))
  })

  describe('getValueByPath()', () => {
    const SCHEMA = {
      a: 12,
      b: '123',
      c: {
        d: ['asdf'],
      },
      e: '456',
    }

    it('gets root value (returns self)', () =>
      expect(getValueByPath(SCHEMA, [])).to.be.eq(SCHEMA))

    it('gets the top-level value', () =>
      expect(getValueByPath(SCHEMA, ['a'])).to.be.eq(12))

    it('gets the last top-level value', () =>
      expect(getValueByPath(SCHEMA, ['e'])).to.be.eq('456'))

    it('gets the last top-level value', () =>
      expect(getValueByPath(SCHEMA, ['c'])).to.be.eql({ d: ['asdf'] }))

    it('gets the nested value', () =>
      expect(getValueByPath(SCHEMA, ['c', 'd'])).to.be.eql(['asdf']))

    it('gets the value from an array', () =>
      expect(getValueByPath(SCHEMA, ['c', 'd', '0'])).to.be.eql('asdf'))

    it('returns undefined path does not exist', () =>
      expect(getValueByPath(SCHEMA, ['x'])).to.be.eql(undefined))

    it('returns undefined path does not exist (beyond)', () =>
      expect(getValueByPath(SCHEMA, ['x', 'y'])).to.be.eql(undefined))
  })
})

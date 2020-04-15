import * as utils from '../../../logics/SSSS/utils'

// ____________________________________________________________________________
//
test('getRandomIntList(n, q)', () => {
  const testCase = [
    { n: 10, q: 7 },
    { n: 15, q: 101 },
  ]
  for (const { n, q } of testCase) {
    const result = utils.getRandomIntList(n, q)
    expect(result.length).toBe(n)
    for (const v of result) {
      // v must be an integer
      expect(v).toBe(Math.round(v))
      // v must be 0 <= v <= q-1.
      expect(v).toBeGreaterThanOrEqual(0)
      expect(v).toBeLessThan(q)
    }
  }
})
// ____________________________________________________________________________
//
test('elInverse(element, q)', () => {
  const testCase = [{ q: 7 }, { q: 101 }, { q: 1009 }]

  for (const { q } of testCase) {
    for (let i = 0; i < 5; i++) {
      // el must be el > 0
      const el = Math.ceil(Math.random() * (q - 1))

      const res = utils.elInverse(el, q)
      // res must be an integer
      expect(res).toBe(Math.round(res))
      // res must be 0 <= v <= q-1.
      expect(res).toBeGreaterThanOrEqual(0)
      expect(res).toBeLessThan(q)
      // res must be el^{-1}
      expect((res * el) % q).toBe(1)
    }
  }
})
// ____________________________________________________________________________
//
test('seekIntercept(shares, q)', () => {
  const mockShares: utils.Coordinate[] = [
    { x: 80, y: 1 },
    { x: 81, y: 9 },
  ]
  const mockMod = 11
  const expected = 10
  expect(utils.seekIntercept(mockShares, mockMod)).toBe(expected)
})

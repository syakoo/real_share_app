import * as conv from '../../logics/convertor'

import { Share } from '../../types/store'
// ____________________________________________________________________________
//
test('shareToStr(share)', () => {
  const mockShare: Share = {
    sharingId: 'ABCDEFG12345=0plm-@;.^[:/]',
    t: 1,
    x: 2,
    y: 'ABCDEFG12345=0plm-@;.^[:/]',
  }
  const expected = 'ABCDEFG12345=0plm-@;.^[:/],1,2,ABCDEFG12345=0plm-@;.^[:/]'
  expect(conv.shareToStr(mockShare)).toBe(expected)
})

test('strToShare(str)', () => {
  const mockStr = 'ABCDEFG12345=0plm-@;.^[:/],1,2,ABCDEFG12345=0plm-@;.^[:/]'
  const expected: Share = {
    sharingId: 'ABCDEFG12345=0plm-@;.^[:/]',
    t: 1,
    x: 2,
    y: 'ABCDEFG12345=0plm-@;.^[:/]',
  }
  expect(conv.strToShare(mockStr)).toEqual(expected)
})

test('shareToStr() and strToShare()', () => {
  const mockShare: Share = {
    sharingId: 'ABCDEFG12345=0plm-@;.^[:/]',
    t: Math.round(Math.random() * 1000),
    x: Math.round(Math.random() * 1000),
    y: 'ABCDEFG12345=0plm-@;.^[:/]',
  }
  expect(conv.strToShare(conv.shareToStr(mockShare))).toEqual(mockShare)
})
// ____________________________________________________________________________
//
test('encodeToNumArr(str)', () => {
  const mockStr = 'ABCDEFG12345=0plm-@;.^[:/]'
  const expected = [
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    49,
    50,
    51,
    52,
    53,
    61,
    48,
    112,
    108,
    109,
    45,
    64,
    59,
    46,
    94,
    91,
    58,
    47,
    93,
  ]
  expect(conv.encodeToNumArr(mockStr)).toEqual(expected)
})

test('dencodeFromNumArr(numArr)', () => {
  const mockNumArr = [
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    49,
    50,
    51,
    52,
    53,
    61,
    48,
    112,
    108,
    109,
    45,
    64,
    59,
    46,
    94,
    91,
    58,
    47,
    93,
  ]
  const expected = 'ABCDEFG12345=0plm-@;.^[:/]'
  expect(conv.decodeFromNumArr(mockNumArr)).toBe(expected)
})

test('encodeToNumArr and decodeFromNumArr', () => {
  const mockStr = 'ABCDEFG12345=0plm-@;.^[:/]'
  expect(conv.decodeFromNumArr(conv.encodeToNumArr(mockStr))).toBe(mockStr)
})

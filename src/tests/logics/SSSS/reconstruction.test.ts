import { reconstruction } from '../../../logics/SSSS/reconstruction'

import type { Share } from '../../../types/store'
// ____________________________________________________________________________
//
test('reconstuction({sharingId, t, x, y}[])', () => {
  const testCase: Share[] = [
    { sharingId: '158692', t: 3, x: 1, y: ';\fd3[\u0003 9^`\u001c' },
    {
      sharingId: '158692',
      t: 3,
      x: 2,
      y: 'Ir\u0001\u0015?\u0017K7Dn\u000b',
    },
    {
      sharingId: '158692',
      t: 3,
      x: 3,
      y: '\u0013\u001aA\u0012\u001b\\yi$\u00171',
    },
  ]

  expect(reconstruction(testCase)).toBe('hello world')
})

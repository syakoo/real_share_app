import { sharing } from '../../../logics/SSSS/sharing'

import type { MessageForm } from '../../../types/form'
// ____________________________________________________________________________
//
test('sharing({message, n, t})', () => {
  const testCase: MessageForm[] = [
    { message: 'hello world', t: 2, n: 3 },
    { message: 'hello world', t: 3, n: 3 },
    { message: 'hello world', t: 3, n: 5 },
  ]

  for (const msgForm of testCase) {
    const res = sharing(msgForm)
    console.log({ res })
    const xSet = new Set(res.map((s) => s.x))
    // each share must be a distinct point
    expect(xSet.size).toBe(msgForm.n)
  }
})

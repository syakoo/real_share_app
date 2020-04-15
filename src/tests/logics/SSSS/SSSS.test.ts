import { reconstruction } from '../../../logics/SSSS/reconstruction'
import { sharing } from '../../../logics/SSSS/sharing'

import type { MessageForm } from '../../../types/form'
// ____________________________________________________________________________
//
test('all(sharing and reconstruction)', () => {
  const testCase: MessageForm[] = [
    { message: 'hello world', t: 2, n: 3 },
    { message: 'HELLO WORLD', t: 3, n: 3 },
    { message: '1234567890!"#$%&()=~|-^\\[]@:/.;<>', t: 3, n: 5 },
  ]

  for (const msgForm of testCase) {
    const shares = sharing(msgForm)
    const result = reconstruction(shares.slice(0, msgForm.t))

    expect(result).toBe(msgForm.message)
  }
})

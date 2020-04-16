import { getRandomIntList } from './utils'
import { encodeToNumArr, decodeFromNumArr } from '../convertor'
import { q } from './config'

import type { MessageForm } from '../../types/form'
import type { Share } from '../../types/store'
// ____________________________________________________________________________
//
export const sharing = ({ message, n, t }: MessageForm): Share[] => {
  if (n < t) throw Error('n must be greater than or equal t')
  if (t <= 1) throw Error('t must be greater than 1')

  const msgEncoded = encodeToNumArr(message)
  const sharingId = String(Date.now()).slice(-6)

  const sharesList: number[][] = [...Array(n)].map(() => [])
  msgEncoded.forEach((msg, i) => {
    let f = getRandomIntList(t - 1, q)
    sharesList.forEach((_, j) => {
      let shareY = msg
      const shareX = j + 1
      f.forEach((val, k) => {
        shareY += val * Math.pow(shareX, k + 1)
        shareY %= q
      })
      sharesList[j].push(shareY)
    })
  })
  const sharesY = sharesList.map((s) => decodeFromNumArr(s))

  const result = sharesY.map(
    (y, i): Share => {
      return {
        sharingId,
        t,
        x: i + 1,
        y,
      }
    }
  )

  return result
}

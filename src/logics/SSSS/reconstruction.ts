import { seekIntercept } from './utils'
import { encodeToNumArr, decodeFromNumArr } from '../convertor'
import { q } from './config'

import type { Coordinate } from './utils'
import type { Share } from '../../types/store'
//_____________________________________________________________________________
//
export const reconstruction = (shares: Share[]): string => {
  if (shares.length === 0) throw new Error('shares must be none empty')
  if (shares[0].t > shares.length)
    throw new Error('the number of shares must be greater or equal t')

  const sharesList: Coordinate[][] = []
  for (const share of shares) {
    const shareYEncoded = encodeToNumArr(share.y)
    shareYEncoded.forEach((shareY, i) => {
      const corr: Coordinate = {
        x: share.x,
        y: shareY,
      }
      if (i in sharesList) {
        sharesList[i].push(corr)
      } else {
        sharesList[i] = [corr]
      }
    })
  }
  const msgNumArr = sharesList.map((shares) => seekIntercept(shares, q))
  const result = decodeFromNumArr(msgNumArr)

  return result
}

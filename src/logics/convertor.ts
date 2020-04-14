import { Share } from '../types/store'
// ____________________________________________________________________________
//
export const shareToStr = (share: Share): string => {
  return `${share.sharingId},${share.t},${share.x},${share.y}`
}

export const strToShare = (str: string): Share => {
  const list = str.split(',')

  try {
    const share: Share = {
      sharingId: list[0],
      t: Number(list[1]),
      x: Number(list[2]),
      y: list[3],
    }
    return share
  } catch {
    throw new Error('対応しているシェアではありません。')
  }
}

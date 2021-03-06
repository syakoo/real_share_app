import * as util from 'util'

import { Share } from '../types/store'
// ____________________________________________________________________________
//
export const shareToStr = (share: Share): string => {
  return `${share.sharingId},,${share.t},,${share.x},,${share.y}`
}

export const strToShare = (str: string): Share => {
  const list = str.split(',,')

  try {
    const share: Share = {
      sharingId: list[0],
      t: Number(list[1]),
      x: Number(list[2]),
      y: list[3],
    }
    return share
  } catch {
    throw new Error('対応している形式ではありません。')
  }
}

export const encodeToNumArr = (str: string) => {
  let encoder: TextEncoder
  if ('TextEncoder' in window) {
    encoder = new TextEncoder()
  } else {
    encoder = new util.TextEncoder()
  }
  const u8Array = encoder.encode(str)
  const result = Array.from(u8Array)

  return result
}

export const decodeFromNumArr = (numArr: number[]) => {
  const u8Array = new Uint8Array(numArr)
  let decoder: TextDecoder
  if ('TextDecoder' in window) {
    decoder = new TextDecoder()
  } else {
    decoder = new util.TextDecoder() as TextDecoder
  }
  const result = decoder.decode(u8Array)

  return result
}

import { SharingActionTypes } from './sharing.types'

import { Share } from '#/types/store'
// ____________________________________________________________________________
//
export const initSharingState = () => ({
  type: SharingActionTypes.INIT_SHARING_STATE,
})

export const setMessage = (message: string) => ({
  type: SharingActionTypes.SET_MESSAGE,
  payload: { message },
})

export const setShares = (shares: Share[]) => ({
  type: SharingActionTypes.SET_SHARES,
  payload: { shares },
})

export const setCounter = (count: number) => ({
  type: SharingActionTypes.SET_COUNTER,
  payload: { count },
})

export const decrementCounter = () => ({
  type: SharingActionTypes.DECREMENT_COUNTER,
})

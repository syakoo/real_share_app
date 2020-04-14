import { SharingActionTypes } from './sharing.types'

import { MessageForm } from '../../types/form'
// ____________________________________________________________________________
//
export const initSharingState = () => ({
  type: SharingActionTypes.INIT_SHARING_STATE,
})

export const setCounter = (count: number) => ({
  type: SharingActionTypes.SET_COUNTER,
  payload: { count },
})

export const decrementCounter = () => ({
  type: SharingActionTypes.DECREMENT_COUNTER,
})

export const startSharing = (messageForm: MessageForm) => ({
  type: SharingActionTypes.START_SHARING,
  payload: { messageForm },
})

export const endSharing = () => ({
  type: SharingActionTypes.END_SHARING,
})

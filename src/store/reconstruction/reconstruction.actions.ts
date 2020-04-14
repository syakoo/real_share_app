import { ReconstructionActionTypes } from './reconstruction.types'

import { Share } from '../../types/store'
// ____________________________________________________________________________
//
export const initReconstructionState = () => ({
  type: ReconstructionActionTypes.INIT_RECONSTRUCTION_STATE,
})

export const setMessage = (message: string) => ({
  type: ReconstructionActionTypes.SET_MESSAGE,
  payload: { message },
})

export const setShares = (shares: Share[]) => ({
  type: ReconstructionActionTypes.SET_SHARES,
  payload: { shares },
})

export const appendShareFromText = (text: string) => ({
  type: ReconstructionActionTypes.APPEND_SHARE_FROM_TEXT,
  payload: { text },
})

export const changeIsReady = (isReady: boolean) => ({
  type: ReconstructionActionTypes.CHANGE_ISREADY,
  payload: { isReady },
})

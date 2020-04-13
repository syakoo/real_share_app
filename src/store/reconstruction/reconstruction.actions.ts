import { ReconstructionActionTypes } from './reconstruction.types'

import { Share } from '#/types/store'
// ____________________________________________________________________________
//
export const initReconstructionState = () => ({
  type: ReconstructionActionTypes.INIT_RECONSTRUCTION_STATE,
})

export const setMessage = (message: string) => ({
  type: ReconstructionActionTypes.SET_MESSAGE,
  payload: { message },
})

export const appendShare = (share: Share) => ({
  type: ReconstructionActionTypes.APPEND_SHARE,
  payload: { share },
})

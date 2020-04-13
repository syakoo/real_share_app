import { combineReducers } from 'redux'

import { NFCState, NFCReducer } from './nfc/nfc.reducer'
import { ConfigState, configReducer } from './config/config.reducer'
import { SharingState, sharingReducer } from './sharing/sharing.reducer'
import {
  ReconstructionState,
  reconstructionReducer,
} from './reconstruction/reconstruction.reducer'
// ____________________________________________________________________________
//
export interface State {
  nfc: NFCState
  config: ConfigState
  sharing: SharingState
  reconstruction: ReconstructionState
}
// ____________________________________________________________________________
//
export const rootReducer = combineReducers<State>({
  nfc: NFCReducer,
  config: configReducer,
  sharing: sharingReducer,
  reconstruction: reconstructionReducer,
})

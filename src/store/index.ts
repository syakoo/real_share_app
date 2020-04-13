import Redux, { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

import { NFCActions } from './nfc/nfc.reducer'
import { ConfigActions } from './config/config.reducer'
import { SharingActions } from './sharing/sharing.reducer'
import { ReconstructionActions } from './reconstruction/reconstruction.reducer'
// ____________________________________________________________________________
//
export type Actions =
  | ConfigActions
  | NFCActions
  | SharingActions
  | ReconstructionActions
// ____________________________________________________________________________
//
const middlewares: Redux.Middleware[] = []
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

import Redux, { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

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
const sagaMiddleware = createSagaMiddleware()

const middlewares: Redux.Middleware[] = [sagaMiddleware]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

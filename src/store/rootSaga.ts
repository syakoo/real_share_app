import { all, call } from 'redux-saga/effects'

import sharingSagas from './sharing/sharing.sagas'
import nfcSagas from './nfc/nfc.sagas'
import reconstructionSagas from './reconstruction/reconstruction.sagas'

import { store } from './'
// ____________________________________________________________________________
//
export function* rootSaga() {
  yield all([
    call(sharingSagas),
    call(nfcSagas, store),
    call(reconstructionSagas),
  ])
}

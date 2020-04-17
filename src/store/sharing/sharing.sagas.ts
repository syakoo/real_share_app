import { all, put, call, takeLatest } from 'redux-saga/effects'

import {
  startSharing,
  endSharing,
  setCounter,
  decrementCounter,
  initSharingState,
} from './sharing.actions'
import { setError } from '../config/config.actions'
import { writingNDEF } from '../nfc/nfc.sagas'
import { shareToStr } from '../../logics/convertor'
import { sharing as SSSSSharing } from '../../logics/SSSS/sharing'

import { SharingActionTypes } from './sharing.types'
import { Share } from '../../types/store'
// ____________________________________________________________________________
//
function* sendShares(counter: number, shares: Share[]) {
  while (counter > 0) {
    const shareMsg = shareToStr(shares[counter - 1])
    try {
      yield call(writingNDEF, shareMsg)
      counter--
      yield put(decrementCounter())
    } catch (error) {
      yield put(
        setError('An error occurred while writing shares. Please try again.')
      )
    }
    yield new Promise((resolve) => setTimeout(resolve, 1000))
  }
}
export function* sharing(action: ReturnType<typeof startSharing>) {
  try {
    const { message, t, n } = action.payload.messageForm
    const shares: Share[] = SSSSSharing({ message, n, t })
    yield put(setCounter(n))
    yield sendShares(n, shares)
    yield put(endSharing())
  } catch (error) {
    yield put(
      setError(
        'An error occurred while sharing. Please start again from the beginning.'
      )
    )
    yield put(initSharingState())
  }
}
// ____________________________________________________________________________
//
export function* onSharingStart() {
  yield takeLatest(SharingActionTypes.START_SHARING, sharing)
}
// ____________________________________________________________________________
//
export default function* () {
  yield all([call(onSharingStart)])
}

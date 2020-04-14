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

import { SharingActionTypes } from './sharing.types'
import { Share } from '../../types/store'
// ____________________________________________________________________________
//
function* sendShares(counter: number, shares: Share[]) {
  while (counter > 0) {
    const shareMsg = shareToStr(shares[counter - 1])
    yield call(writingNDEF, shareMsg)
    counter--
    yield put(decrementCounter())
    yield new Promise((resolve) => setTimeout(resolve, 1000))
  }
}
export function* sharing(action: ReturnType<typeof startSharing>) {
  try {
    const { message, t, n } = action.payload.messageForm
    // TODO: calc shares from message, t, n
    const shares: Share[] = [
      { sharingId: 'TEST', t, x: 1, y: 'A' },
      { sharingId: 'TEST', t, x: 2, y: 'B' },
      { sharingId: 'TEST', t, x: 3, y: 'C' },
      { sharingId: 'TEST', t, x: 4, y: 'D' },
      { sharingId: 'TEST', t, x: 5, y: 'E' },
    ]
    yield put(setCounter(n))
    yield sendShares(n, shares)
    yield put(endSharing())
  } catch (error) {
    console.error({ error })
    yield put(
      setError(
        'シェア中にエラーが発生しました。お手数ですが、最初からやり直してください。'
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

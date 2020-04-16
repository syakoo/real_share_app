import { all, call, put, takeLatest, select } from 'redux-saga/effects'

import { appendShareFromText, setShares } from './reconstruction.actions'
import { setError } from '../config/config.actions'

import { State } from '../rootReducer'

import { strToShare } from '../../logics/convertor'

import { Share } from 'types/store'
import { ReconstructionActionTypes } from './reconstruction.types'
// ____________________________________________________________________________
//
function* appendingShareFromText(
  action: ReturnType<typeof appendShareFromText>
) {
  const {
    reconstruction: { isReady, shares },
  }: State = yield select()
  if (!isReady) return

  const { text } = action.payload
  let share: Share
  try {
    share = strToShare(text)
  } catch (error) {
    yield put(setError('The format of the data is different.'))
    return
  }

  if (shares.length !== 0) {
    if (shares[0].sharingId !== share.sharingId) {
      yield put(setError('This is a share of another data.'))
      return
    }
    if (shares.find((s) => s.x === share.x)) {
      yield put(
        setError('Duplicate loads or the same share has already been loaded.')
      )
      return
    }
  }

  const newShares = [...shares, share]
  yield put(setShares(newShares))
}
// ____________________________________________________________________________
//
export function* onAppendShare() {
  yield takeLatest(
    ReconstructionActionTypes.APPEND_SHARE_FROM_TEXT,
    appendingShareFromText
  )
}
// ____________________________________________________________________________
//
export default function* () {
  yield all([call(onAppendShare)])
}

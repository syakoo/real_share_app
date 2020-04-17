import { all, put, call, takeLatest, select } from 'redux-saga/effects'
import { Store, Dispatch } from 'redux'

import { setFetchedMessage } from './nfc.actions'
import { appendShareFromText } from '../reconstruction/reconstruction.actions'

import { NFCActionTypes } from './nfc.types'
import { State } from '../rootReducer'
import { setError } from 'store/config/config.actions'
// ____________________________________________________________________________
//
async function writeNDEF(message: string, writer: NDEFWriter) {
  await writer.write(message)
}
async function readNFC(reader: NDEFReader, dispatch: Dispatch<any>) {
  reader.onerror = (error) => {
    console.log({ error })
    throw new Error(error.message)
  }

  reader.onreading = (event) => {
    for (const record of event.message.records) {
      if (record.recordType === 'text') {
        const textDecoder = new TextDecoder()
        const data = textDecoder.decode(record.data)

        dispatch(setFetchedMessage(data))
      }
    }
  }
  await reader.scan()
}
export function* writingNDEF(message: string) {
  const {
    nfc: { writer },
  }: State = yield select()

  if (writer) {
    yield call(writeNDEF, message, writer)
  }
}
function* readingNFC(store: Store<State>) {
  const {
    nfc: { reader },
  }: State = yield select()

  if (reader) {
    const { dispatch } = store
    try {
      yield call(readNFC, reader, dispatch)
    } catch (error) {
      yield put(setError('An error occurred while reading. Please try again.'))
    }
  }
}
function* appendFetchedMessageToShares(
  action: ReturnType<typeof setFetchedMessage>
) {
  const { message } = action.payload
  yield put(appendShareFromText(message))
}
// ____________________________________________________________________________
//
function* onReadingNFC(store: Store<State>) {
  yield takeLatest(NFCActionTypes.START_NFC_READ_LISTEN, readingNFC, store)
}
function* onChangeFetchedMessage() {
  yield takeLatest(
    NFCActionTypes.SET_FETCHED_MESSAGE,
    appendFetchedMessageToShares
  )
}
// ____________________________________________________________________________
//
export default function* (store: Store<State>) {
  yield all([call(onReadingNFC, store), call(onChangeFetchedMessage)])
}

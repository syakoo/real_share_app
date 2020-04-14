import { NFCActionTypes } from './nfc.types'

// ____________________________________________________________________________
//
export const initNDEF = () => ({
  type: NFCActionTypes.INIT_NDEF,
})

export const setFetchedMessage = (message: string) => ({
  type: NFCActionTypes.SET_FETCHED_MESSAGE,
  payload: { message },
})

export const startNFCReadListen = () => ({
  type: NFCActionTypes.START_NFC_READ_LISTEN,
})

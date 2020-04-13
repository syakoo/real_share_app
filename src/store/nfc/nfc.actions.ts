import { NFCActionTypes } from './nfc.types'
// ____________________________________________________________________________
//
export const initNDEF = () => ({
  type: NFCActionTypes.INIT_NDEF,
})

export const startNFCReadListen = () => ({
  type: NFCActionTypes.START_NFC_READ_LISTEN,
})

export const startNFCWriteListen = () => ({
  type: NFCActionTypes.START_NFC_WRITE_LISTEN,
})

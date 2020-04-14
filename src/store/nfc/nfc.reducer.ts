import { ReducerActions } from '../../types/store'
// ____________________________________________________________________________
//
export interface NFCState {
  enabled: boolean
  fetchedMessage: string
  reader: NDEFReader | null
  writer: NDEFWriter | null
}
export type NFCActions = ReducerActions<typeof import('./nfc.actions')>
// ____________________________________________________________________________
//
const initialState: NFCState = {
  enabled: 'NDEFReader' in window && 'NDEFWriter' in window,
  fetchedMessage: '',
  reader: null,
  writer: null,
}
// ____________________________________________________________________________
//
export const NFCReducer = (state = initialState, action: NFCActions) => {
  switch (action.type) {
    case 'NFC:INIT_NDEF':
      if (state.enabled && !state.reader) {
        return {
          ...state,
          reader: new NDEFReader(),
          writer: new NDEFWriter(),
        }
      } else {
        return state
      }
    case 'NFC:SET_FETCHED_MESSAGE':
      return {
        ...state,
        fetchedMessage: action.payload.message,
      }
    default:
      return state
  }
}

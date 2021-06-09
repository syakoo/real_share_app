import { ReducerActions } from '../../types/store'
// ____________________________________________________________________________
//
export interface NFCState {
  enabled: boolean
  fetchedMessage: string
  ndef: NDEFReader | null
}
export type NFCActions = ReducerActions<typeof import('./nfc.actions')>
// ____________________________________________________________________________
//
const initialState: NFCState = {
  enabled: 'NDEFReader' in window,
  fetchedMessage: '',
  ndef: null,
}
// ____________________________________________________________________________
//
export const NFCReducer = (state = initialState, action: NFCActions) => {
  switch (action.type) {
    case 'NFC:INIT_NDEF':
      if (state.enabled && !state.ndef) {
        return {
          ...state,
          ndef: new NDEFReader(),
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

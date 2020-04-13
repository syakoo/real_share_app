import { Share, ReducerActions } from '#/types/store'
//_____________________________________________________________________________
//
export interface SharingState {
  message: string
  shares: Share[]
  count: number
}
export type SharingActions = ReducerActions<typeof import('./sharing.actions')>
// ____________________________________________________________________________
//
export const initialState: SharingState = {
  message: '',
  shares: [],
  count: 0,
}
// ____________________________________________________________________________
//
export const sharingReducer = (state = initialState, action: SharingActions) => {
  switch (action.type) {
    case 'SHARING:INIT_SHARING_STATE':
      return {
        ...state,
        ...initialState,
      }
    case 'SHARING:SET_MESSAGE':
      return {
        ...state,
        message: action.payload.message,
      }
    case 'SHARING:SET_SHARES':
      return {
        ...state,
        shares: action.payload.shares,
      }
    case 'SHARING:SET_COUNTER':
      return {
        ...state,
        count: action.payload.count,
      }
    case 'SHARING:DECREMENT_COUNTER':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

import { ReducerActions } from '../../types/store'
//_____________________________________________________________________________
//
export interface SharingState {
  sharingStep: 'INPUT' | 'SHARING' | 'SUCCESS'
  count: number
}
export type SharingActions = ReducerActions<typeof import('./sharing.actions')>
// ____________________________________________________________________________
//
export const initialState: SharingState = {
  sharingStep: 'INPUT',
  count: 0,
}
// ____________________________________________________________________________
//
export const sharingReducer = (
  state = initialState,
  action: SharingActions
): SharingState => {
  switch (action.type) {
    case 'SHARING:INIT_SHARING_STATE':
      return {
        ...state,
        ...initialState,
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
    case 'SHARING:START_SHARING':
      return {
        ...state,
        sharingStep: 'SHARING',
      }
    case 'SHARING:END_SHARING':
      return {
        ...state,
        sharingStep: 'SUCCESS',
      }
    default:
      return state
  }
}

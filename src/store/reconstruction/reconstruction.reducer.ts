import { Share, ReducerActions } from '../../types/store'
//_____________________________________________________________________________
//
export interface ReconstructionState {
  isReady: boolean
  message: string
  shares: Share[]
}
export type ReconstructionActions = ReducerActions<
  typeof import('./reconstruction.actions')
>
// ____________________________________________________________________________
//
export const initialState: ReconstructionState = {
  isReady: false,
  message: '',
  shares: [],
}
// ____________________________________________________________________________
//
export const reconstructionReducer = (
  state = initialState,
  action: ReconstructionActions
) => {
  switch (action.type) {
    case 'RECONSTRUCTION:INIT_RECONSTRUCTION_STATE':
      return {
        ...state,
        ...initialState,
      }
    case 'RECONSTRUCTION:SET_MESSAGE':
      return {
        ...state,
        message: action.payload.message,
      }
    case 'RECONSTRUCTION:SET_SHARES':
      return {
        ...state,
        shares: action.payload.shares,
      }
    case 'RECONSTRUCTION:CHANGE_ISREADY':
      return {
        ...state,
        isReady: action.payload.isReady,
      }
    default:
      return state
  }
}

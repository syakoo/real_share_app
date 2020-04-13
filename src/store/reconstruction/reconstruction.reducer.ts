import { Share, ReducerActions } from '#/types/store'
//_____________________________________________________________________________
//
export interface ReconstructionState {
  message: string
  shares: Share[]
}
export type ReconstructionActions = ReducerActions<
  typeof import('./reconstruction.actions')
>
// ____________________________________________________________________________
//
export const initialState: ReconstructionState = {
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
    case 'RECONSTRUCTION:APPEND_SHARE':
      return {
        ...state,
        shares: [...state.shares, action.payload.share],
      }
    default:
      return state
  }
}

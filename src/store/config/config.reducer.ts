import { MyError, ReducerActions } from '#/types/store'
// ____________________________________________________________________________
//
export interface ConfigState {
  error: MyError | null
}
export type ConfigActions = ReducerActions<typeof import('./config.actions')>
// ____________________________________________________________________________
//
const initialState: ConfigState = {
  error: null,
}
// ____________________________________________________________________________
//
export const configReducer = (state = initialState, action: ConfigActions) => {
  switch (action.type) {
    case 'CONFIG:SET_ERROR':
      return {
        ...state,
        error: {
          message: action.payload.error,
          date: new Date(),
        },
      }
    default:
      return state
  }
}

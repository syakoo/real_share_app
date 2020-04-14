import { ConfigActionTypes } from './config.types'
import { MyError } from '../../types/store'
// ____________________________________________________________________________
//
export const setError = (error: MyError['message']) => ({
  type: ConfigActionTypes.SET_ERROR,
  payload: { error },
})

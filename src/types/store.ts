import { Store, Dispatch } from 'redux'

import { Actions } from '../store'
import { State } from '../store/rootReducer'
// ____________________________________________________________________________
//
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
}
type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never

export type ReducerActions<T> = Unbox<ReturnTypes<T>>
// ____________________________________________________________________________
//
declare module 'react-redux' {
  interface DefaultRootState extends State {}
  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}
// ____________________________________________________________________________
//
export type Share = {
  sharingId: string
  t: number
  x: number
  y: string
}
export type MyError = {
  message: string
  date: Date
}

interface NDEFRecord {
  recordType: 'text' | 'url' | 'mime' | 'empty'
  data: BufferSource
  encoding?: string
  lang?: string
}
interface NDEFMessage {
  records: NDEFRecord[]
}
interface NDEFReadingEvent extends Event {
  message: NDEFMessage
}
declare global {
  export class NDEFReader {
    scan: () => Promise<any>
    onerror: (error: any) => void
    onreading: (event: NDEFReadingEvent) => void
    write: (message: string, option?: { [k: string]: any }) => Promise<any>
  }
  export class NDEFWriter {
    write: (message: string, option?: { [k: string]: any }) => Promise<any>
  }
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { initNDEF, startNFCReadListen } from '../../../store/nfc/nfc.actions'
// ____________________________________________________________________________
//
export const NFCGate: React.FC = ({ children }) => {
  const enabled = useSelector((state) => state.nfc.enabled)
  const dispatch = useDispatch()

  useEffect(() => {
    if (enabled) {
      dispatch(initNDEF())
      dispatch(startNFCReadListen())
    }
  }, [enabled, dispatch])
  return <>{enabled ? children : <div>NFC Did not supported</div>}</>
}

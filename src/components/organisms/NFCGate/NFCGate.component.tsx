import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { initNDEF, startNFCReadListen } from '../../../store/nfc/nfc.actions'

import styles from './NFCGate.module.scss'
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
  return <>{enabled ? children : <NFCDenied />}</>
}

const NFCDenied: React.FC = () => (
  <div className={styles.denied}>
    <h1>NFC Did Not Supported</h1>
    <div>
      <h2>How to set WebNFC enabled</h2>
      <p>
        If you're using Google Chrome, go to{' '}
        <a href="chrome://flags/#enable-webnfc">
          chrome://flags/#enable-webnfc
        </a>{' '}
        and enable it.
      </p>
      <p>
        If that still doesn't work, either restart this browser or check your
        phone's NFC settings.
      </p>
    </div>
  </div>
)

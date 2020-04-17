import React from 'react'
import { useSelector } from 'react-redux'

import { MessageForm } from '../../molecules/MessageForm/MessageForm.component'
import { SharingTable } from '../../molecules/SharingTable/SharingTable.component'

import nfcLogo from '../../../assets/Nfc-icon-vector-01.svg'
import styles from './SharingOrg.module.scss'
// ____________________________________________________________________________
//
export const SharingOrg: React.FC = () => {
  const step = useSelector((state) => state.sharing.sharingStep)
  return (
    <>
      {step === 'INPUT' && <MessageForm />}
      {step === 'SHARING' && <SharingTable />}
      {step === 'SUCCESS' && <SharingCompleted />}
    </>
  )
}

const SharingCompleted: React.FC = () => {
  return (
    <div className={styles.sharingComp}>
      <div className={styles.title}>Completed !!</div>
      <div className={styles.body}>
        <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
        <div className={styles.nfc}>
          <div className={styles.waves}>
            <span className={styles.wave}></span>
            <span className={styles.wave}></span>
            <span className={styles.wave}></span>
          </div>
          <div className={styles.nfcLogo}>
            <img src={nfcLogo} alt="nfc" />
          </div>
        </div>
      </div>
    </div>
  )
}

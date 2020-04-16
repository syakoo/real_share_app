import React from 'react'
import { useSelector } from 'react-redux'

import { MessageForm } from '../../molecules/MessageForm/MessageForm.component'
import { SharingTable } from '../../molecules/SharingTable/SharingTable.component'

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
    </div>
  )
}

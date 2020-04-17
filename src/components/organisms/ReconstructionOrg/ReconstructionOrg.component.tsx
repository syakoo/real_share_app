import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { reconstruction as SSSSReconstruction } from '../../../logics/SSSS/reconstruction'

import { SharesTable } from '../../molecules/SharesTable/SharesTable.component'

import styles from './ReconstructionOrg.module.scss'
// ____________________________________________________________________________
//
export const ReconstructionOrg: React.FC = () => {
  const shares = useSelector((state) => state.reconstruction.shares)
  const [message, setMessage] = useState<null | string>(null)

  useEffect(() => {
    if (shares.length === 0) return

    const { t } = shares[0]
    if (t <= shares.length) {
      setMessage(SSSSReconstruction(shares.slice(0, t)))
    }
  }, [shares])

  return (
    <div>
      <div className={styles.cardTable}>
        {shares.map((share) => (
          <div className={styles.card} key={`CARD-${share.x}`}>
            <span className={styles.y}>{share.y}</span>
          </div>
        ))}
        {!message && (
          <div className={styles.waves}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
          </div>
        )}
        {message && (
          <div className={styles.messageBody}>
            <span className={styles.message}>{message}</span>
          </div>
        )}
      </div>
      <div>
        <div className={styles.info}>
          {message ? 'Completed!!' : 'PUT SHARE'}
          {shares.length !== 0 && `(${shares.length}/${shares[0].t})`}
        </div>
        {shares.length !== 0 && <SharesTable shares={shares} />}
      </div>
    </div>
  )
}

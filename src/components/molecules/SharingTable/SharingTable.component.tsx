import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './SharingTable.module.scss'
// ____________________________________________________________________________
//
const cardCSS = (i: number, num: number) => {
  return `transform: translate(-50%, -50%) rotate(${
    (60 * (-num + 2 * i + 1)) / num
  }deg);`
}

const SharingCount: React.FC = () => {
  const { sharesNum, count } = useSelector((state) => state.sharing)

  useEffect(() => {
    const targets = document.querySelectorAll('#card')
    if (targets) {
      targets.forEach((t, i) => {
        t.setAttribute('style', cardCSS(i, count))
      })
    }
  }, [count])

  return (
    <>
      <div className={styles.cardTable}>
        {[...Array(sharesNum)].map((_, i) => (
          <div
            key={`CARD-${i}`}
            id="card"
            className={`${styles.card} ${i + 1 > count ? styles.hidden : ''}`}
          ></div>
        ))}
      </div>
    </>
  )
}

export const SharingTable: React.FC = () => {
  const { message } = useSelector((state) => state.sharing)

  return (
    <>
      <div className={styles.sharingTable}>
        <div className={styles.message}>{message}</div>
        <SharingCount />
      </div>
      <div className={styles.info}>PUT NFC</div>
    </>
  )
}

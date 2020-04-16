import React from 'react'

import { Share } from '../../../types/store'

import styles from './SharesTable.module.scss'
// ____________________________________________________________________________
//
type SharesTable = {
  shares: Share[]
}
// ____________________________________________________________________________
//
export const SharesTable: React.FC<SharesTable> = ({ shares }) => {
  return (
    <table className={styles.sharesTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Share</th>
        </tr>
      </thead>
      <tbody>
        {shares.map((share) => (
          <tr key={`SHARE-${share.x}`}>
            <td>{share.x}</td>
            <td>{share.y}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

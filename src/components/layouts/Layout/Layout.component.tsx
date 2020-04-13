import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import styles from './Layout.module.scss'

import { pages } from '../../pages'
// ____________________________________________________________________________
//
export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        {pages.map((page) => (
          <Link to={page.path}>{page.name}</Link>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
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
          <Link key={`PATH-${page.name}`} to={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

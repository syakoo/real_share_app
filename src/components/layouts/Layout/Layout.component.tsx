import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Layout.module.scss'

import { ErrorGate } from '../../molecules/ErrorGate/ErrorGate.component'

import { pages } from '../../pages'
// ____________________________________________________________________________
//
type Layout = {
  pageTitle?: string
}
// ____________________________________________________________________________
//
export const Layout: React.FC<Layout> = ({ children, pageTitle }) => {
  return (
    <div className={styles.layout}>
      <ErrorGate>
        <div className={styles.body}>
          {pageTitle && <div className={styles.title}>{pageTitle}</div>}
          {children}
        </div>
        <div className={styles.footer}>
          {pages.map((page) => (
            <Link key={`PATH-${page.name}`} to={page.path}>
              {page.name}
            </Link>
          ))}
        </div>
      </ErrorGate>
    </div>
  )
}

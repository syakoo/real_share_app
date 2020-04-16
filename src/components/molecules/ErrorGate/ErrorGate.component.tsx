import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import styles from './ErrorGate.module.scss'
// ____________________________________________________________________________
//
export const ErrorGate: React.FC = ({ children }) => {
  const error = useSelector((state) => state.config.error)

  useEffect(() => {
    if (!error) return
    if (new Date().getTime() - error.date.getTime() > 500) return
    const targetNode = document.querySelector('#error')
    if (!targetNode) return
    targetNode.textContent = null

    const errorMain = document.createElement('div')
    const errorTitle = document.createElement('div')
    errorTitle.classList.add('error__title')
    errorTitle.innerHTML = 'Error'
    const errorBody = document.createElement('div')
    errorBody.classList.add('error__body')
    errorBody.innerHTML = error.message

    errorMain.appendChild(errorTitle)
    errorMain.appendChild(errorBody)
    targetNode.appendChild(errorMain)
  }, [error])

  return (
    <>
      <div id="error" className={styles.errorMain}></div>
      {children}
    </>
  )
}

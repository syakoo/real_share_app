import React from 'react'

import styles from './CustomButton.module.scss'
// _______________________________________
//
type CustomButton = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>
// _______________________________________
//
export const CustomButton: React.FC<CustomButton> = ({
  children,
  onClick,
  ...otherProps
}) => {
  return (
    <>
      <button
        className={styles.customButton}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </>
  )
}

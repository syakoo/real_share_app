import React, { useCallback } from 'react'

import styles from './CustomInput.module.scss'
// _________________________________________________
//
type CustomInputText = {
  label?: string
  value: string
  setValue: (value: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

type CustomInputNumber = {
  label?: string
  min: number
  max: number
  value: number
  setValue: (value: number) => void
} & React.InputHTMLAttributes<HTMLInputElement>
// _________________________________________________
//
export const CustomInputText: React.FC<CustomInputText> = ({
  label,
  setValue,
  ...otherProps
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setValue(e.target.value)
  }

  return (
    <div className={styles.form}>
      {label ? (
        <label>
          <span className={styles.label}>{label}</span>
          <input type="text" onChange={handleChange} {...otherProps} />
        </label>
      ) : (
        <input type="text" onChange={handleChange} {...otherProps} />
      )}
    </div>
  )
}

export const CustomInputNumber: React.FC<CustomInputNumber> = ({
  label,
  value,
  setValue,
  min,
  max,
  ...otherProps
}) => {
  const handleIncrement = useCallback(() => {
    if (value < max) {
      navigator.vibrate(50)
      setValue(value + 1)
    }
  }, [value, max, setValue])
  const handleDecrement = useCallback(() => {
    if (value > min) {
      navigator.vibrate(50)
      setValue(value - 1)
    }
  }, [value, min, setValue])

  return (
    <div className={styles.form}>
      {label ? (
        <>
          <span className={styles.label}>{label}</span>
          <div className={styles.inputNum}>
            <button onClick={handleDecrement} disabled={value <= min}>
              -
            </button>
            <span className={styles.numValue}>{value}</span>
            <button onClick={handleIncrement} disabled={value >= max}>
              +
            </button>
          </div>
        </>
      ) : (
        <div className={styles.inputNum}>
          <button onClick={handleDecrement}>-</button>
          <span className={styles.numValue}>{value}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
    </div>
  )
}

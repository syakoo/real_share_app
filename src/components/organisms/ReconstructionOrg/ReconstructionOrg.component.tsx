import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { reconstruction as SSSSReconstruction } from '../../../logics/SSSS/reconstruction'
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
      {shares.map((share) => (
        <span>{share.x}</span>
      ))}
      <h1>{message}</h1>
    </div>
  )
}

import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { startSharing } from '../../../store/sharing/sharing.actions'

import { MessageForm as TMessageForm } from '../../../types/form'
// ____________________________________________________________________________
//
export const MessageForm: React.FC = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const [threshhold, setThreshhold] = useState(2)
  const [num, setNum] = useState(3)

  const handleSharingStart = useCallback(() => {
    const messageForm: TMessageForm = {
      message,
      t: threshhold,
      n: num,
    }
    console.log([messageForm])
    dispatch(startSharing(messageForm))
  }, [dispatch, message, threshhold, num])

  return (
    <div>
      <label>
        <span>message</span>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <label>
        <span>threshhold</span>
        <input
          type="number"
          value={threshhold}
          onChange={(e) => setThreshhold(Number(e.target.value))}
        />
      </label>
      <label>
        <span>num</span>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </label>
      <div>
        <button onClick={handleSharingStart}>next</button>
      </div>
    </div>
  )
}

import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  CustomInputText,
  CustomInputNumber,
} from '../../atoms/CustomInput/CustomInput.components'

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
      <CustomInputText label="Message" value={message} setValue={setMessage} />
      <CustomInputNumber
        label="Threshhold"
        value={threshhold}
        setValue={setThreshhold}
        min={2}
        max={num}
      />
      <CustomInputNumber
        label="Number of Shares"
        value={num}
        setValue={setNum}
        min={threshhold}
        max={9}
      />
      <div>
        <button onClick={handleSharingStart}>Sharing</button>
      </div>
    </div>
  )
}

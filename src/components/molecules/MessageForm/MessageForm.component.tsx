import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  CustomInputText,
  CustomInputNumber,
} from '../../atoms/CustomInput/CustomInput.components'
import { CustomButton } from '../../atoms/CustomButton/CustomButton.component'

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
    dispatch(startSharing(messageForm))
  }, [dispatch, message, threshhold, num])

  return (
    <div>
      <CustomInputText
        label="Message"
        value={message}
        setValue={setMessage}
        maxLength={20}
      />
      <CustomInputNumber
        label="Threshold"
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
      <div style={{ textAlign: 'center' }}>
        <CustomButton onClick={handleSharingStart} disabled={!message}>
          Sharing
        </CustomButton>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Layout } from '../../layouts/Layout/Layout.component'
import { MessageForm } from '../../molecules/MessageForm/MessageForm.component'

import { initSharingState } from '../../../store/sharing/sharing.actions'
// ____________________________________________________________________________
//
export const SharingPage: React.FC<RouteComponentProps> = () => {
  const step = useSelector((state) => state.sharing.sharingStep)
  const dispatch = useDispatch()

  useEffect(() => {
    if (step === 'SUCCESS') {
      return () => {
        dispatch(initSharingState())
      }
    }
  }, [step, dispatch])

  return (
    <Layout>
      <h1>Sharing</h1>
      <div>
        {step === 'INPUT' && <MessageForm />}
        {step === 'SHARING' && <div>put NFC</div>}
        {step === 'SUCCESS' && <div>Completed!!</div>}
      </div>
    </Layout>
  )
}

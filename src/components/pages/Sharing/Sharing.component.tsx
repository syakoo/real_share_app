import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useDispatch } from 'react-redux'

import { Layout } from '../../layouts/Layout/Layout.component'
import { SharingOrg } from '../../organisms/SharingOrg/SharingOrg.component'

import { initSharingState } from '../../../store/sharing/sharing.actions'
// ____________________________________________________________________________
//
export const SharingPage: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(initSharingState())
    }
  }, [dispatch])

  return (
    <Layout pageTitle="Sharing">
      <SharingOrg />
    </Layout>
  )
}

import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useDispatch } from 'react-redux'

import { Layout } from '../../layouts/Layout/Layout.component'
import { ReconstructionOrg } from '../../organisms/ReconstructionOrg/ReconstructionOrg.component'

import {
  changeIsReady,
  initReconstructionState,
} from '../../../store/reconstruction/reconstruction.actions'
// ____________________________________________________________________________
//
export const ReconstructionPage: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeIsReady(true))
    return () => {
      dispatch(initReconstructionState())
    }
  }, [dispatch])

  return (
    <Layout pageTitle="Reconstcution">
      <ReconstructionOrg />
    </Layout>
  )
}

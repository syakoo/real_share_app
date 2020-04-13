import React from 'react'
import { RouteComponentProps } from 'react-router'

import { Layout } from '../../layouts/Layout/Layout.component'
// ____________________________________________________________________________
//
export const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  )
}

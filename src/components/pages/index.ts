import React from 'react'
import { RouteComponentProps } from 'react-router'

import { HomePage } from './Home/Home.component'
import { SharingPage } from './Sharing/Sharing.component'
import { ReconstructionPage } from './Reconstruction/Reconstruction.component'
// ____________________________________________________________________________
//
export type PageName = 'HOME' | 'SHARING' | 'RECONSTRUCTION'
export interface PageList {
  path: string
  name: PageName
  component: React.FC<RouteComponentProps>
}
// ____________________________________________________________________________
//
export const pages: PageList[] = [
  { path: '/', name: 'HOME', component: HomePage },
  { path: '/sharing', name: 'SHARING', component: SharingPage },
  {
    path: '/reconstruction',
    name: 'RECONSTRUCTION',
    component: ReconstructionPage,
  },
]

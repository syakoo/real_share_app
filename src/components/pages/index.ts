import React from 'react'
import { RouteComponentProps } from 'react-router'

import { HomePage } from './Home/Home.component'
import { SharingPage } from './Sharing/Sharing.component'
import { ReconstructionPage } from './Reconstruction/Reconstruction.component'

import homeIcon from '../../assets/home.svg'
import sharingIcon from '../../assets/sharing.svg'
import reconstructionIcon from '../../assets/reconstruction.svg'
// ____________________________________________________________________________
//
export type PageName = 'HOME' | 'SHARING' | 'RECONSTRUCTION'
export interface PageList {
  path: string
  name: PageName
  component: React.FC<RouteComponentProps>
  iconUrl: string
}
// ____________________________________________________________________________
//
export const pages: PageList[] = [
  { path: '/', name: 'HOME', component: HomePage, iconUrl: homeIcon },
  {
    path: '/sharing',
    name: 'SHARING',
    component: SharingPage,
    iconUrl: sharingIcon,
  },
  {
    path: '/reconstruction',
    name: 'RECONSTRUCTION',
    component: ReconstructionPage,
    iconUrl: reconstructionIcon,
  },
]

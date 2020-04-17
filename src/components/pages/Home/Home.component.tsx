import React from 'react'
import { RouteComponentProps } from 'react-router'

import { Layout } from '../../layouts/Layout/Layout.component'

import logo from '../../../assets/logo.svg'

import styles from './Home.module.scss'
// ____________________________________________________________________________
//
export const HomePage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div className={styles.img}>
        <img src={logo} alt="real sharing" />
      </div>
      <div className={styles.card}>
        <h1>Real Sharing</h1>
        <p>A simulation web app of a secret sharing scheme using NFC.</p>
        <ul>
          <li>
            Repo:{' '}
            <a href="https://github.com/syakoo/real_share_app">
              https://github.com/syakoo/real_share_app
            </a>
          </li>
          <li>
            Movie:{' '}
            <a href="https://youtu.be/6DLYic2Zvy0">
              https://youtu.be/6DLYic2Zvy0
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <h1>What's the Secret Sharing</h1>
        <p>
          From Wikipedia(
          <a href="https://en.wikipedia.org/wiki/Secret_sharing">
            Secret sharing
          </a>
          ):
        </p>
        <i>
          Secret sharing (also called secret splitting) refers to methods for
          distributing a secret amongst a group of participants, each of whom is
          allocated a share of the secret. The secret can be reconstructed only
          when a sufficient number, of possibly different types, of shares are
          combined together; individual shares are of no use on their own.
        </i>
      </div>
      <div className={styles.card}>
        <h1>Help</h1>
        <h2>SharingForm</h2>
        <p>
          In the sharing page, fill out the input form. The form contains three
          params below.
        </p>
        <ul>
          <li>Message</li>
          <li>Threshold</li>
          <li>Number of Shares</li>
        </ul>
        <h3>Message</h3>
        <p>
          The string you want to secret.{' '}
          <span className={styles.warning}>
            Due to encoding issues, non-alphanumeric characters may not work
            well.
          </span>
        </p>
        <h3>Threshold</h3>
        <p>The number of shares needed to unlock the secret.</p>
        <h3>Number of Shares</h3>
        <p>The number of shares for writing data to NFC tags and cards.</p>
      </div>
    </Layout>
  )
}

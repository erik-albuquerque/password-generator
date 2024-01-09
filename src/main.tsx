/* eslint-disable simple-import-sort/imports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import { App } from './app'

import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)

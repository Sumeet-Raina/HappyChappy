import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { ActionCableProvider } from 'react-actioncable-provider'
import { API_WS_ROOT } from '../constants'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>,
    document.body.appendChild(document.createElement('div'))
  )
})
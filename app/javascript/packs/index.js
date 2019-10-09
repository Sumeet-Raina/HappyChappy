import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { ActionCableProvider } from 'react-actioncable-provider'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ActionCableProvider>
      <App />
    </ActionCableProvider>,
    document.body.appendChild(document.createElement('div'))
  )
})
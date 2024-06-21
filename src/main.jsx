import './index.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import UserReducer from './UserReducer.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)

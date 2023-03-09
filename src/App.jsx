import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>,
)

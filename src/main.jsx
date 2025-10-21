import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from 'react-toastify'



import GlobalStyle from './styles/globalStyles.js'
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'
import { BrowserRouter, Route } from 'react-router-dom'
import { Router } from './routes/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
      </Elements>
    <GlobalStyle />,
    <ToastContainer/>
    </AppProvider>
  </StrictMode>,
)

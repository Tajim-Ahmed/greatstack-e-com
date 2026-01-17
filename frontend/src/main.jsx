import {BrowserRouter } from 'react-router-dom'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './context/shopcontext.jsx'
import 'dotenv'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </BrowserRouter>
)

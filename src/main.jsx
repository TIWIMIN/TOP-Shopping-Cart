import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { index: true, element: <Home />}, 
      { path: "Shop", element: <Shop />}, 
      { path: "Checkout", element: <Checkout />},
    ]
  }
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

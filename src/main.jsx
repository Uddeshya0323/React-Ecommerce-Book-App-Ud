import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './component/ErrorBoundary/ErrorBoundary.jsx'
import Home from './component/Home.jsx'
import './index.css'
import Checkout from './component/Checkout.jsx'
import { StateProvider } from './component/StateProvider.jsx'
import reducer, { initialState } from './component/Reducer.jsx'
import  Login  from './component/Login.jsx'

const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  errorElement : <ErrorBoundary/>,
  children : [
    {
      path : "",
      element : <Home/>,
      errorElement : <ErrorBoundary/>
    },
    {
      path : "Home",
      element : <Home/>,
      errorElement : <ErrorBoundary/>
    },
    {
      path : "Checkout",
      element : <Checkout/>,
      errorElement : <ErrorBoundary/>
    },
    {
      path : "Login",
      element : <Login/>,
      errorElement : <ErrorBoundary/>
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer= {reducer}>
    <RouterProvider router={router}/>
    </StateProvider>
  </React.StrictMode>,
)

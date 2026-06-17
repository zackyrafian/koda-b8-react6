import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
// import { ProfilePage } from './pages'
import {}
import './index.css'

const router = createBrowserRouter([
  {
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />*/}
    <RouterProvider router={router} />
  </StrictMode>,
)

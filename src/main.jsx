import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProfilePage from './pages/profile'
import Article from './pages/article'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/:username', 
    element: <ProfilePage />
  },
  {
    path: '/:username/:slug',
    element: <Article />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
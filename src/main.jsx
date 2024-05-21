import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PostsPage from './pages/PostsPage.jsx'
import PostPage from './pages/PostPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: 'posts/:slug',
        element: <PostPage />,
      },
      {
        path: "about",
        element: <AboutPage />
      }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

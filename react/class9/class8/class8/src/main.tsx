import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './app/store.ts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './components/AppLayout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import StudentDetail from './pages/StudentDetails.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:'/student/:id',
        element:<StudentDetail />
      },
      

    ]

  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)

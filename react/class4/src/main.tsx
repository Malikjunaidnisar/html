import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, Route, RouterProvider } from "react-router";
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Layout from './components/Layout.tsx';
import { createRoutesFromElements } from 'react-router';

/*const router = createBrowserRouter([
  {path:'/',
   element:"home" 
  }
])*/
/*const router = createBrowserRouter([
 {
  path:'/',
  element:<Layout />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/about',
      element:<About />
    },
    {
      path:'/contact',
      element:<Contact />
    }
  ]
 }
])*/

/*const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />

  </Route>
))*/


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)

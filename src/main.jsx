import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Feature from './pages/Feature.jsx'
import { router } from './routes/Routes.jsx'


// const router = createBrowserRouter ([
//   {
//     path:'/',
//     element:<MainLayout/>,
//     children: [
//       {
//         index:true,
//         element:<Home/>
//       },
//       {
//         path:'feature',
//         element:<Feature/>
//       }
//     ]

//   }
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

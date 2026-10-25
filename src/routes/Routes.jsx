import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Feature from "../pages/Feature";
import Documentaion from "../pages/Documentaion";
import Login from "../pages/Login";
import Register from "../pages/Register";


 export const router = createBrowserRouter ([
  {
    path:'/',
    element:<MainLayout/>,
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path:'feature',
        element:<Feature/>
      },
      {
        path:'documentaion',
        element:<Documentaion/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }
    ]

  }
])
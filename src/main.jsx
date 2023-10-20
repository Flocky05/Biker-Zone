import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import { ThemeProvider } from "@material-tailwind/react";
import Shop from './component/Shop/Shop';
import News from './component/News/News';
import Contract from './component/Contract/Contract';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/shop",
        element:<Shop></Shop>
      },
      {
        path:"/news",
        element:<News></News>
      },
      {
        path:"/contract",
        element:<Contract></Contract>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

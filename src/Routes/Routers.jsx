import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import ErrorPage from "../Shared/Error/Error";



  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:  <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage> ,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
  ]);
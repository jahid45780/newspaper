import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import ErrorPage from "../Shared/Error/Error";
import SignUp from "../Shared/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllArticles from "../Pages/AllArticles/AllArticles";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import AddArticles from "../Pages/AddArticles/AddArticles";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Premium from "../Pages/Dashboard/Premium/Premium";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";




  
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
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/dashboard',
          element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
        },
        {
          path:'/AllArticles',
          element:<AllArticles></AllArticles>
        },
        {
          path:'/detail/:id',
         element:<NewsDetail></NewsDetail>,
          loader: ({params}) => fetch(`https://newspaper-server-site-mu.vercel.app/allNews/${params.id}`)
        },
        {
          path:'/addArticles',
          element:<AddArticles></AddArticles>
        },
        {
          path:'/premium',
          element:<Premium></Premium>
        }
      ]
    },
          //  dashboard contant
    {
      path:'/dashboard',
      element:<PrivateRoute> <Premium></Premium> </PrivateRoute>,
      children:[
        {
          path:'/dashboard/userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'/dashboard/allUsers',
          element:<AllUser></AllUser>
        },
        {
          path:'/dashboard/adminHome',
          element:<AdminHome></AdminHome> 
        }
      ]
    }

  ]);
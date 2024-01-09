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
          loader: ({params}) => fetch(`http://localhost:5000/allNews/${params.id}`)
        },
        {
          path:'/addArticles',
          element:<AddArticles></AddArticles>
        }
      ]
    },
  ]);
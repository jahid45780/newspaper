import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routers';
import AuthProvider from './Providers/AuthProvider';
import TsParticles from './Pages/TsParticles/TsParticles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <div className=' max-w-8xl mx-auto ' >
       <TsParticles></TsParticles>
      <RouterProvider router={router} />
      </div>
      </AuthProvider>
  </React.StrictMode>,
)

// max-w-7xl mx-auto
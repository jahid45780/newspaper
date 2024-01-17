import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routers';
import AuthProvider from './Providers/AuthProvider';
import TsParticles from './Pages/TsParticles/TsParticles';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient} >
     <AuthProvider>
      <div className=' max-w-8xl mx-auto m-2 ' >
       <TsParticles></TsParticles>
      <RouterProvider router={router} />
      </div>
      </AuthProvider>
     </QueryClientProvider>
  </React.StrictMode>,
)

// max-w-7xl mx-auto
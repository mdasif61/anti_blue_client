import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './Home/Home.jsx'
import Products from './Pages/Products';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Order from './Pages/Order';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path:'/order/:id',
        element:<Order></Order>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='bg-blue-100 min-h-screen'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)

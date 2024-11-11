import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Error from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children :[
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "login",
        element : <Login></Login>
      },
      {
        path: "register",
        element : <Register></Register>
      },
      {
        path: "orders",
        element : <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)

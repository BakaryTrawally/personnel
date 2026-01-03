import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Index from './pages/Index'
import Personnel from './pages/AddPersonnel'
import Services from './pages/Personnel'
import ErrorPage from "./pages/ErrorPage";
import Card from './pages/Card'
import './index.css'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { loader } from './pages/Card'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import EditForm from './pages/EditForm'
import Leave from './pages/Leave'
import LeaveData from './pages/LeaveData'
import ProtectedRoute from './pages/ProtectedRoute'
import Logout from './pages/Logout'
// If using CRA:

const router = createHashRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/register",
    element: <Register />
  },
  // 🔒 Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/addpersonnel", element: <Personnel /> },
      { path: "/personnel", element: <Services /> },
      { path: "/leave", element: <Leave /> },
      { path: "/addPersonnel/:id", element: <LeaveData /> },
      { path: "/update/:id", element: <EditForm /> },
      { path: "/card", loader: loader, element: <Card /> },
    ]
  },
  { path: "/404", element: <NotFound /> }
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index/>
//   },
//   {
//      path: "/register",
//      element: <Register/>
//    },
   

//   // 🔒 Protected Routes
//   {
//     element: <ProtectedRoute />,   // <-- no Layout used here
//     children: [
//       { path: "/addpersonnel", element: <Personnel /> },
//       { path: "/personnel", element: <Services /> },
//       { path: "/leave", element: <Leave /> },
//       { path: "/addPersonnel/:id", element: <LeaveData /> },
//       { path: "/update/:id", element: <EditForm /> },
//       { path: "/card", loader: loader, element: <Card /> },
//     ]
//   },

// { path: "/404", element: <NotFound /> }
// ]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index/>,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/",
//     element: <ProtectedRoute>
//                <Index/>
//              </ProtectedRoute>,
//             //  errorElement: <ErrorPage/>
   
//   },
//   {
//     path: "/addpersonnel",
//     element: <Personnel/>
//   },
//   {
//     path: "/personnel",
//     element: <Services/>
//   },
//   {
//     path: "/leave",
//     element: <Leave/>
//   },
//   {
//     path: "/register",
//     element: <Register/>
//   },
//   {
//     path: "/addPersonnel/:id",
//     element: <LeaveData/>
//   },
//   {
//     path: "/update/:id",
//     element: <EditForm/>
//   },
//   {
//     path: "/card",
//     loader: loader,
//     element: <Card />
//   },
//   {
//     path: "/404",
//     element: <NotFound />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

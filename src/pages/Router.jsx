// import { createHashRouter, useNavigate} from "react-router-dom";
// import Index from "./Index";
// import Register from "./Register";
// import Logout from "./Logout";
// import Personnel from "./Personnel";
// // import Services from "./Services";
// import Leave from "./Leave";
// import LeaveData from "./LeaveData";
// import EditForm from "./EditForm";
// import Card, { loader } from "./Card";
// import NotFound from "./NotFound";
// import ProtectedRoute from "./ProtectedRoute";


// const Navigate = useNavigate();
// const router = createHashRouter([
    
//   // Public Routes
//   {
//     path: "/",
//     element: <Index />
//   },
//   {
//     path: "/register",
//     element: <Register />
//   },

//   // Protected Routes (all under /app)
//   {
//     path: "/app",
//     element: <ProtectedRoute />,
//     children: [
//       { path: "logout", element: <Logout /> },                 // /#/app/logout
//       { path: "addpersonnel", element: <Personnel /> },       // /#/app/addpersonnel
//     //   { path: "personnel", element: <Services /> },           // /#/app/personnel
//       { path: "leave", element: <Leave /> },                  // /#/app/leave
//       { path: "addPersonnel/:id", element: <LeaveData /> },   // /#/app/addPersonnel/:id
//       { path: "update/:id", element: <EditForm /> },          // /#/app/update/:id
//       { path: "card", loader: loader, element: <Card /> },    // /#/app/card
//       { index: true, element: <Navigate to="logout" /> }     // /#/app redirects to logout
//     ]
//   },

//   // 404 Page
//   { path: "/404", element: <NotFound /> },
//   { path: "*", element: <Navigate to="/404" /> } // catch-all
// ]);

// export default router;

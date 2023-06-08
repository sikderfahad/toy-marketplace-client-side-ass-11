import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home/Home";
import Root from "./layout/Root/Root";
import AuthProvider from "./provider/AuthProvider";
import NotFound from "./layout/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HiddenRoute from "./privateRoute/HiddenRoute/HiddenRoute";
import PrivateRoute from "./privateRoute/PrivateRoute/PrivateRoute";
import ToyDetails from "./pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <HiddenRoute>
            <Login></Login>,
          </HiddenRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <HiddenRoute>
            <Register></Register>,
          </HiddenRoute>
        ),
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/toyes/${params.id}`),
      },
    ],
  },

  {
    path: "/",
    element: <NotFound></NotFound>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

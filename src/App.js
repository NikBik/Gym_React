import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./styles/tailwind.css";
import Dashboard from "./components/Dasboard";
import path from "path-browserify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BodyComponent from "./components/BodyComponent";
import ErrorClassComponent from "./components/ErrorClassComponent";
import UserContext, { UserProvider } from "./components/UserContext";

// Define your routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorClassComponent />,
    children: [
      {
        path: "dashboard", // Use relative path
        element: <Dashboard />,
        children: [
          {
            path: "", // Default route for /dashboard
            element: <BodyComponent />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={appRouter} />
    </UserProvider>
  );
};

export default App;

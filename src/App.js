import React from "react";
import Home from "./pages/Home";
import "./styles/tailwind.css";
import Dashboard from "./components/Dasboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BodyComponent from "./components/BodyComponent";
import ErrorClassComponent from "./components/ErrorClassComponent";
import UserContext, { UserProvider } from "./components/UserContext";
import { UserWorkoutProvider } from "./components/WorkoutContext";
import { WorkoutProvider } from "./components/SubscriptionContext";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TermsOfUse from "./components/TermsOfUse";
import SubscriptionList from "./components/SubscriptionList";
import WorkoutList from "./components/WorkoutList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorClassComponent />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <BodyComponent />,
          },
          {
            path: "aboutUs",
            element: <AboutUs />,
          },
          {
            path: "contactUs",
            element: <ContactUs />,
          },
          {
            path: "termsOfUse",
            element: <TermsOfUse />,
          },
          {
            path: "mySubscriptions",
            element: <SubscriptionList />,
          },
          {
            path: "myWorkouts",
            element: <WorkoutList />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <UserWorkoutProvider>
      <WorkoutProvider>
        <UserProvider>
          <RouterProvider router={appRouter} />
        </UserProvider>
      </WorkoutProvider>
    </UserWorkoutProvider>
  );
};

export default App;

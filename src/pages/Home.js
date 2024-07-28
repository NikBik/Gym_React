import React, { useContext } from "react";
import "../styles/tailwind.css";
import LoginComponent from "../components/LoginComponent";
import { Outlet } from "react-router-dom";
import UserContext from "../components/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="container">
      {user.username === "Default" || user.username === undefined ? (
        <LoginComponent />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Home;

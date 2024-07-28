// LoginComponent.js
import LOGO_URL from "../utils/constants.js";
import React, { useContext, useState, useEffect } from "react";
import "../styles/tailwind.css";
import { getUser } from "../services/apis";
import UserContext from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZawtpjy3Zkt9hvDel0dS0TI_UYC8SIcpmg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkoZadNhHWZvffJshBa1w7gcLqJewP3qO_w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37asF6aAa1qrVPYqi5o2xS8E1VBvetGZ5tw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVC0vfSBHyENUuLtVKbfqgTpmz5KGND3Dww&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5YIUwbJ01LWqi_QNuowanJa98LXLSC5woA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyk9jVIj8coK11HxhHH_omU3nO0vFGblK6Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyWjceRflb7Vr9trkiwW3mZ0z5qVDFMwoCA&s",
];

const LoginComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const userObj = async (data) => {
    try {
      const userData = await getUser(data);
      console.log(userData);
      setUser({
        id: userData.id,
        username: userData.username,
        firstName: userData.firstName,
        lastName: userData.lastName,
        password: userData.password,
        lastLogin: userData.lastLogin,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      const errObject = error;
      setError(errObject.response.data);
    }
  };

  const validateDetails = (event) => {
    event.preventDefault();
    var user = document.getElementById("username");
    var pwd = document.getElementById("password");
    if (user.value === "") {
      setError("Username cannot be empty");
    } else if (pwd.value === "") {
      setError("Password cannot be empty");
    } else {
      userObj({
        name: user.value,
        password: pwd.value,
      });
    }
  };

  return (
    <div className="login-page">
      <header className="site-header">
        <div className="logo-container">
          <div className="logoDiv">
            <img src={LOGO_URL} alt="Logo" className="logoImg" />
          </div>
        </div>
        <div className="site-name-container">
          <h4 className="site-name">Welcome</h4>
          <h4 className="site-name">To</h4>
          <h4 className="site-name">DumbBells</h4>
          <h4 className="site-name">Paradise</h4>
        </div>
      </header>

      <div className="login-box">
        <div className="login-heading">Login</div>
        <div className="error-message">{error}</div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={(event) => validateDetails(event)}
          >
            Login
          </button>
        </form>
        <div className="links">
          <a href="#forgot-username" className="link">
            Forgot Username?
          </a>
          <a href="#forgot-password" className="link">
            Forgot Password?
          </a>
          <a href="#signup" className="link">
            Sign Up
          </a>
        </div>
      </div>
      <div className="image-slider">
        <div className="slider-wrapper">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slider-image ${
                currentImageIndex === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

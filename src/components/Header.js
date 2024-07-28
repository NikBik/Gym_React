import LOGO_URL from "../utils/constants.js";
import "../styles/tailwind.css";
import { useContext } from "react";
import UserContext from "./UserContext.js";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    setUser({
      id: null,
      username: "Default",
      firstName: null,
      lastName: null,
      password: null,
      lastLogin: null,
    });
  };

  return (
    <header className="header">
      <Link to="">
        <div className="logoDiv">
          <img src={LOGO_URL} alt="Logo" className="logoImg" />
        </div>
      </Link>
      <Link to="">
        <div className="appName">DumbBells Paradise</div>
      </Link>
      <nav className="navItems">
        <ul className="navList">
          <Link to="mySubscriptions">
            <li>My Subscriptions</li>
          </Link>
          <Link to="myWorkouts">
            <li>My Workouts</li>
          </Link>
          <Link to="">
            <li>Home</li>
          </Link>
        </ul>
        <button className="loginButton" onClick={logout}>
          Sign Out
        </button>
        <span className="userGreeting">Hello {user.firstName} !!</span>
      </nav>
    </header>
  );
};

export default HeaderComponent;

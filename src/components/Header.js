import LOGO_URL from "../utils/constants.js";
import "../styles/tailwind.css";
import { useContext } from "react";
import UserContext from "./UserContext.js";

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
      <div className="logoDiv">
        <img src={LOGO_URL} alt="Logo" className="logoImg" />
      </div>
      <div className="appName">DumbBells Paradise</div>
      <nav className="navItems">
        <ul className="navList">
          <li>Profile</li>
          <li>Wallet</li>
          <li>Cart</li>
          <li>Home</li>
        </ul>
        <button className="loginButton" onClick={logout}>
          LoggedIn
        </button>
        <span className="userGreeting">Hello {user.firstName} !!</span>
      </nav>
    </header>
  );
};

export default HeaderComponent;

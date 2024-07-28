import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;

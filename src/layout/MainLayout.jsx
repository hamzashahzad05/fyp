import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { isLoggedIn } from "../helpers";
import { Navigate } from "react-router-dom";

const MainLayout = () => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;

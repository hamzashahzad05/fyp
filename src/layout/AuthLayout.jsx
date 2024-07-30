import { Outlet } from "react-router-dom";
import { isLoggedIn } from "../helpers";
import { Navigate } from "react-router-dom";

const AuthLayout = () => {
  if (isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <img
        className="img-fluid"
        src="/assets/images/home-logo.png"
        alt="logo"
      />

      <Outlet />
    </div>
  );
};

export default AuthLayout;

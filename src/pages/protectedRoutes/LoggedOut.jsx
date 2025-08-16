import { Navigate, Outlet } from "react-router-dom";

const LoggedOut = () => {
  const user = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (user && role === "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default LoggedOut;

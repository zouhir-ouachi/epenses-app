import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated, "isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="hidden flex-col md:flex">
      <Header />
      <Dashboard />
    </div>
  );
};

export default PrivateLayout;

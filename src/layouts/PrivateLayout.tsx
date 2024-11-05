import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import { SignedIn } from "@clerk/clerk-react";

const PrivateLayout = () => {
  return (
    <SignedIn>
      <div className="hidden flex-col md:flex">
        <Header />
        <Dashboard />
      </div>
    </SignedIn>
  );
};

export default PrivateLayout;

import DateRangePicker from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const DashboardHeader = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="flex items-center space-x-2">
        <DateRangePicker />
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;

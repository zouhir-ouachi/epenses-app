import DashboardCards from "@/components/DashboardCards";
import DateRangePicker from "@/components/DateRangePicker";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <DateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <DashboardCards />
    </div>
  );
}

import DateRangePicker from "@/components/DateRangePicker";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="flex items-center space-x-2">
        <DateRangePicker />
      </div>
    </div>
  );
};

export default DashboardHeader;

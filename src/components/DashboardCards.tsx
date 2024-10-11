import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Chart from "./Chart";
import RecentTransactions from "./RecentTransactions";
import { Button } from "./ui/button";
import TransactionsDrawer from "./TransactionsDrawer";
export default function DashboardCards() {
  const tabOptions = [
    {
      name: "Overview",
      value: "overview",
      disabled: false,
    },
    {
      name: "Analytics",
      value: "analytics",
      disabled: true,
    },
    {
      name: "Reports",
      value: "reports",
      disabled: true,
    },
    {
      name: "Notifications",
      value: "notifications",
      disabled: true,
    },
  ];
  const data = [
    {
      name: "Your Balance",
      amount: "$52,340.22",
      changePercentage: "+15.2% from last month",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      name: "Income",
      count: "+2,740",
      changePercentage: "+135.3% from last month",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      name: "Expences",
      count: "+13,412",
      changePercentage: "+17.8% from last month",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
  ];

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        {tabOptions.map((tab) =>
          tab.disabled ? (
            <TabsTrigger key={tab.value} value={tab.value} disabled>
              {tab.name}
            </TabsTrigger>
          ) : (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.name}
            </TabsTrigger>
          )
        )}
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.name}
                </CardTitle>
                {item.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {item.amount || item.count}
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.changePercentage || item.changeSinceLastHour}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Chart />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </div>
              <TransactionsDrawer />
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}

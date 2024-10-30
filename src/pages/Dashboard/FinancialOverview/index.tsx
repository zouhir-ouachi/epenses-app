import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Transaction = {
  id: string;
  amount: number;
  title: string;
  category: string;
  date_time: string;
  type: "Income" | "Expense";
};

type FinancialOverviewProps = {
  transactions: Transaction[];
};

const FinancialOverview = ({ transactions }: FinancialOverviewProps) => {
  const totalIncome: number = transactions
    .filter((t: Transaction) => t.type === "Income")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const totalExpenses: number = transactions
    .filter((t: Transaction) => t.type === "Expense")
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0);

  const balance: number = totalIncome - totalExpenses;

  const data = [
    {
      name: "Your Balance",
      amount: balance.toFixed(2),
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
      count: totalIncome.toFixed(2),
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
      name: "Expenses",
      count: totalExpenses.toFixed(2),
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
    <div className="grid gap-4 md:grid-cols-3">
      {data.map((item) => (
        <Card key={item.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {item.amount || item.count}
            </div>
            <p className="text-xs text-muted-foreground">
              {item.changePercentage}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FinancialOverview;

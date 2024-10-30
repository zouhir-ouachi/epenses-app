import DashboardHeader from "./DashboardHeader";
import { useGlobalContext } from "@/utils/hooks";
import FinancialOverview from "./FinancialOverview";
import TransactionsChart from "./TransactionsChart";
import RecentTransactions from "./RecentTransactions";
import { useMemo } from "react";
import { filterTransactions } from "./filterTransactions";

export default function Dashboard() {
  const {
    state: { transactions, dateRange },
  } = useGlobalContext();

  const filteredTransactions = useMemo(() => {
    return filterTransactions(transactions, dateRange);
  }, [transactions, dateRange]);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <DashboardHeader />
      <FinancialOverview transactions={filteredTransactions} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
        <TransactionsChart />
        <RecentTransactions transactions={filteredTransactions} />
      </div>
    </div>
  );
}

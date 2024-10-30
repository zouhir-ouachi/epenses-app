import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import PaginationControls from "./PaginationControls";
import TransactionsDrawer from "./TransactionsDrawer";
import TransactionsList from "./TransactionsList";
import { useGlobalContext } from "@/utils/hooks";
import { Transaction } from "@/types/types";

type RecentTransactionsProps = {
  transactions: Transaction[];
};

const ITEMS_PER_PAGE = 5;

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  const {
    state: { dateRange: date },
  } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  const data = useMemo(() => transactions, [date]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [data, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    if (date) {
      setCurrentPage(1);
    }
  }, [date]);

  return (
    <Card className="col-span-3 flex flex-col justify-between">
      <div>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              You made {transactions.length} transactions this month.
            </CardDescription>
          </div>
          <TransactionsDrawer />
        </CardHeader>
        <CardContent>
          <TransactionsList transactions={currentItems} />
        </CardContent>
      </div>
      <CardFooter>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </CardFooter>
    </Card>
  );
};

export default RecentTransactions;

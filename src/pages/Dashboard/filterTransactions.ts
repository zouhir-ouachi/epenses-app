import { Transaction } from "@/types/types";
import { startOfDay, endOfDay, isSameDay, isWithinInterval } from "date-fns";
import { DateRange } from "react-day-picker";

export function filterTransactions(
  transactions: Transaction[],
  dateRange: DateRange | undefined
): Transaction[] {
  if (!dateRange?.from && !dateRange?.to) {
    return transactions;
  }

  const fromDate = dateRange?.from
    ? startOfDay(new Date(dateRange.from))
    : undefined;

  const toDate = dateRange?.to ? endOfDay(new Date(dateRange.to)) : undefined;

  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date_time);

    if (fromDate && toDate) {
      return isWithinInterval(transactionDate, {
        start: fromDate,
        end: toDate,
      });
    } else if (fromDate) {
      return isSameDay(transactionDate, fromDate);
    }
    return true;
  });
}

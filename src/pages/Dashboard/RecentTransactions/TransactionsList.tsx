/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  format,
  differenceInDays,
  isThisYear,
  isToday,
  compareDesc,
} from "date-fns";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { ArrowTopRightIcon, ArrowBottomRightIcon } from "@radix-ui/react-icons";

export default function TransactionsList({ transactions }: any) {
  const formatTransactionDate = (date: Date) => {
    const today = new Date();
    const diffInDays = differenceInDays(today, date);
    if (isToday(date)) {
      return "Today";
    }
    if (diffInDays <= 30) {
      return `${diffInDays} days ago`;
    }

    if (isThisYear(date)) {
      return format(date, "MMMM d");
    }

    return format(date, "MMMM d, yyyy");
  };

  return (
    <div className="space-y-8">
      {transactions
        .sort((a: any, b: any) => compareDesc(a.date_time, b.date_time))
        .map((transaction: any, index: any) => {
          const { type, date_time } = transaction;
          const isExpence = type === "Expense";

          return (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>
                  {isExpence ? (
                    <ArrowBottomRightIcon color="#ef4444" stroke="#ef4444" />
                  ) : (
                    <ArrowTopRightIcon color="#22c55e" stroke="#22c55e" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatTransactionDate(date_time)}
                </p>
              </div>
              <div className="ml-auto font-medium">{transaction.amount}</div>
            </div>
          );
        })}
    </div>
  );
}

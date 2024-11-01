import { SelectOptions, Transaction } from "@/types/types";
import { Dispatch, SetStateAction, useMemo } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";

type YearlyFilterProps = {
  transactions: Transaction[];
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
};

export const YearlyFilter = ({
  transactions,
  year,
  setYear,
}: YearlyFilterProps) => {
  const years: number[] = useMemo(() => {
    const uniqueYears = new Set(
      transactions.map((transaction) =>
        new Date(transaction.date_time).getFullYear()
      )
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [transactions]);

  const yearOptions: SelectOptions[] = years.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  return (
    <Select onValueChange={setYear} defaultValue={year}>
      <SelectTrigger className="w-1/5">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {yearOptions.map((year) => (
          <SelectItem key={year.value} value={year.value}>
            {year.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

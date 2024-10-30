import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "./Chart";
import { getYear } from "date-fns";
import { useMemo, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
import { useGlobalContext } from "@/utils/hooks";

interface YearOption {
  label: string;
  value: string;
}

const TransactionsChart = () => {
  const {
    state: { transactions },
  } = useGlobalContext();

  const [currentYear, setCurrentYear] = useState<string>(
    getYear(new Date()).toString()
  );

  const years: number[] = useMemo(() => {
    const uniqueYears = new Set(
      transactions.map((transaction) =>
        new Date(transaction.date_time).getFullYear()
      )
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, []);

  const yearOptions: YearOption[] = years.map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  return (
    <Card className="col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Yearly Overview</CardTitle>

          <Select onValueChange={setCurrentYear} defaultValue={currentYear}>
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
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <Chart currentYear={currentYear} />
      </CardContent>
    </Card>
  );
};

export default TransactionsChart;

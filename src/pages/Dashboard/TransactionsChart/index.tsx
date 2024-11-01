import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "./Chart";
import { getYear } from "date-fns";
import { useState } from "react";
import { useGlobalContext } from "@/utils/hooks";
import { YearlyFilter } from "./YearlyFilter";

const TransactionsChart = () => {
  const {
    state: { transactions },
  } = useGlobalContext();

  const [year, setYear] = useState<string>(getYear(new Date()).toString());

  return (
    <Card className="col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Yearly Overview</CardTitle>

          <YearlyFilter
            transactions={transactions}
            year={year}
            setYear={setYear}
          />
        </div>
      </CardHeader>
      <CardContent className="pl-2">
        <Chart currentYear={year} transactions={transactions} />
      </CardContent>
    </Card>
  );
};

export default TransactionsChart;

import { useGlobalContext } from "@/utils/hooks";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Chart({ currentYear }: any) {
  const {
    state: { transactions },
  } = useGlobalContext();

  function calculateMonthlyExpenses(transactions: any) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthlyTotals = monthNames.map((name) => ({
      name,
      total: 0,
    }));

    const expenses = transactions.filter(
      (t) =>
        t.type === "Expense" &&
        new Date(t.date_time).getFullYear().toString() === currentYear
    );

    expenses.forEach((transaction) => {
      const date = new Date(transaction.date_time);
      const monthIndex = date.getMonth();
      monthlyTotals[monthIndex].total += transaction.amount;
    });

    monthlyTotals.forEach((month) => {
      month.total = Math.round(month.total);
    });

    return monthlyTotals;
  }

  const monthlyExpenses = calculateMonthlyExpenses(transactions);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={monthlyExpenses}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

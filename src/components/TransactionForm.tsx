import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from "./ui/select";

const formSchema = z.object({
  description: z.string({ required_error: "Description is required" }),
  amount: z.number({ required_error: "Amount is required" }),
  category: z.string({
    required_error: "Please select a category of your transaction",
  }),
});

export default function TransactionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const incomeCategories = [
    {
      value: "salary",
      label: "Salary/Wages",
    },
    {
      value: "business",
      label: "Business/Side Hustle",
    },
    {
      value: "investments",
      label: "Investments",
    },
    {
      value: "gifts",
      label: "Gifts/Donations",
    },
    {
      value: "other_income",
      label: "Other Income",
    },
  ];

  const expenseCategories = [
    {
      value: "housing",
      label: "Housing",
    },
    {
      value: "utilities",
      label: "Utilities",
    },
    {
      value: "food",
      label: "Food & Groceries",
    },
    {
      value: "transportation",
      label: "Transportation",
    },
    {
      value: "health_insurance",
      label: "Health & Insurance",
    },
    {
      value: "debt_payments",
      label: "Debt Payments",
    },
    {
      value: "entertainment",
      label: "Entertainment",
    },
    {
      value: "shopping",
      label: "Shopping",
    },
    {
      value: "savings_investments",
      label: "Savings/Investments",
    },
    {
      value: "miscellaneous",
      label: "Miscellaneous",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a categorie" />
                </SelectTrigger>
                <SelectContent>
                  {incomeCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

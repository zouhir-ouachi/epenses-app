import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
import { expenseCategories, incomeCategories } from "@/data";
import { Input } from "../../../components/ui/input";

const formSchema = z.object({
  description: z.string({ required_error: "Description is required" }),
  title: z.string({ required_error: "Title is required" }),
  amount: z.number(),
  category: z.string({
    required_error: "Please select a category of your transaction",
  }),
});

interface TransactionFormProps {
  transactionType: string;
}

export default function TransactionForm({
  transactionType,
}: TransactionFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const isExpense = transactionType === "expenses";

  const catgories = isExpense ? expenseCategories : incomeCategories;
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
                  <SelectValue
                    placeholder={`Select an ${
                      isExpense ? "expense" : "incom"
                    } categorie `}
                  />
                </SelectTrigger>
                <SelectContent>
                  {catgories.map((category) => (
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

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Transaction title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center mx-auto justify-center w-2/3 overflow-hidden">
                  <span
                    className={`pl-3 pr-1 text-2xl ${
                      isExpense ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className={`${
                      isExpense
                        ? "text-red-500 placeholder:text-red-500"
                        : "text-green-500 placeholder:text-green-500"
                    } flex-1 text-center h-50 text-4xl font-bold border-none focus:ring-0 focus:outline-none focus-visible:ring-0`}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mb-8">
          Submit
        </Button>
      </form>
    </Form>
  );
}

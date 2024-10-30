import TransactionForm from "./TransactionForm";
import { Button } from "../../../components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

export default function TransactionsDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full h-100 max-w-sm pb-6">
          <DrawerHeader>
            <DrawerTitle>Add your recent transaction</DrawerTitle>
            <DrawerDescription>
              Please choose whether you want to add an income or expense
              transaction.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center">
              <Tabs defaultValue="expenses" className="grid w-full grid-col ">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                  <TabsTrigger value="incom">Incom</TabsTrigger>
                </TabsList>
                <TabsContent value="expenses">
                  <TransactionForm transactionType="expenses" />
                </TabsContent>
                <TabsContent value="incom">
                  <TransactionForm transactionType="incom" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

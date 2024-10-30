import { DateRange } from "react-day-picker";

export interface Transaction {
  id: string;
  amount: number;
  title: string;
  category: string;
  date_time: string;
  type: "Income" | "Expense";
}

export interface GlobalState {
  transactions: Transaction[];
  dateRange?: DateRange | undefined;
}

export type TransactionActionType =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string }
  | { type: "UPDATE_TRANSACTION"; payload: Transaction }
  | { type: "SET_DATE_RANGE"; payload: DateRange | undefined };

export type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

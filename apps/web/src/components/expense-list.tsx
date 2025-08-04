import { ExpenseItemProps } from "@repo/ui";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export interface ExpenseListProps {
  expenses: ExpenseItemProps[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense, index) => (
          <TableRow key={index}>
            <TableCell>{expense.amount.toFixed(2)}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>{expense.description}</TableCell>
            <TableCell>
              {typeof expense.date === "string"
                ? expense.date
                : new Date(expense.date).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


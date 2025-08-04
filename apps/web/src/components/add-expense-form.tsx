import { useState } from "react";
import { z } from "zod";
import { ExpenseItemProps } from "@repo/ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

interface AddExpenseFormProps {
  categories: string[];
  onFormSubmit: (expense: ExpenseItemProps) => void;
}

export function AddExpenseForm({
  categories,
  onFormSubmit,
}: AddExpenseFormProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: undefined as Date | undefined,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    amount: z
      .number({ required_error: "Amount is required" })
      .positive({ message: "Amount is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    description: z.string().optional(),
    date: z.date({ required_error: "Date is required" }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse({
      amount: parseFloat(form.amount),
      category: form.category,
      description: form.description || undefined,
      date: form.date,
    });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onFormSubmit({
      amount: result.data.amount,
      category: result.data.category,
      description: result.data.description ?? "",
      date: result.data.date,
    });
    setForm({ amount: "", category: "", description: "", date: undefined });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Add new expense <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />
            {errors.amount && (
              <p className="text-sm text-red-500">{errors.amount}</p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Select
              value={form.category}
              onValueChange={(value) =>
                setForm({ ...form, category: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  id="category"
                  name="category"
                  placeholder="Select a category"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category}</p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="grid gap-3">
            <DatePicker
              date={form.date}
              onDateChange={(date) => setForm({ ...form, date })}
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

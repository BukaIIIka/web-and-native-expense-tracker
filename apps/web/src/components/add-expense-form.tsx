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

export function AddExpenseForm({
  categories,
  onFormSubmit,
}: {
  categories: string[];
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            Add new expense <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new expense</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" name="amount" type="number" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Select>
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
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>

            <div className="grid gap-3">
              <DatePicker />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onSubmit={onFormSubmit}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

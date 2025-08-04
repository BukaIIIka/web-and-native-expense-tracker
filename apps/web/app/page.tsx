"use client";

import { useUser } from "@repo/context/src";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components";

export default function Web() {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-5 px-4 md:px-6">
      <TypographyH1>
        Take Control of Your Money,
        <br /> One Expense at a Time
      </TypographyH1>
      <TypographyP className="text-center" data-goo={"goo"}>
        <Button asChild size="lg" className="text-balance font-bold">
          {user ? (
            <Link href="/dashboard">See My Spending Insights</Link>
          ) : (
            <Link href="/signup">Sign Up Free — No Card Needed</Link>
          )}
        </Button>
      </TypographyP>
    </div>
  );
}

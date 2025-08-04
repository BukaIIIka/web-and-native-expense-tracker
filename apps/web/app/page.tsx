"use client";

import { useUser } from "@repo/context/src";

import styles from "@/styles/index.module.css";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TypographyH1, TypographyP } from "@/components";

export default function Web() {
  const { user } = useUser();

  return (
    <div className={cn(styles.container, "flex flex-col gap-5")}>
      <TypographyH1>
        Take Control of Your Money,
        <br /> One Expense at a Time
      </TypographyH1>
      <TypographyP>
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

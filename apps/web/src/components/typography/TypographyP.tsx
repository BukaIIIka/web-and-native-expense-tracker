import * as React from "react";
import { cn } from "@/lib/utils";

export function TypographyP({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}
      {...props}
    >
      {children}
    </p>
  );
}

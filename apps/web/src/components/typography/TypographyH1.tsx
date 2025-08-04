import * as React from "react";
import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  ...props
}: React.ComponentProps<"h1">) {
  const { className, ...otherProps } = props;

  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-balance",
      )}
      {...otherProps}
    >
      {children}
    </h1>
  );
}

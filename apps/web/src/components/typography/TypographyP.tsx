import * as React from "react";
import { cn } from "@/lib/utils";

export function TypographyP({ children, ...props }: React.ComponentProps<"p">) {
  const { className, ...otherProps } = props;
  return (
    <p
      className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}
      {...otherProps}
    >
      {children}
    </p>
  );
}

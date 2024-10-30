import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";

export default function MainNav({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Button
        variant="link"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary text-decoration-none"
        )}
      >
        Overview
      </Button>
      <Button
        variant="link"
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        )}
      >
        Settings
      </Button>
    </nav>
  );
}

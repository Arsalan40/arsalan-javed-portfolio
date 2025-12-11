import { cn } from "@/lib/cn";
import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

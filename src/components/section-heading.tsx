import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  align?: "left" | "center";
  /** One line at lg+; wraps naturally on smaller screens. Default true. */
  singleLineDesktop?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  className,
  eyebrowClassName,
  titleClassName,
  align = "left",
  singleLineDesktop = true,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className={cn("text-[15px] font-semibold tracking-[0.10em] text-gold", eyebrowClassName)}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 max-w-none font-sans text-3xl font-semibold tracking-tight md:text-4xl",
          singleLineDesktop && "lg:whitespace-nowrap",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TitlePairingProps = {
  /** Navy line — matches portfolio “POSSIBILITIES MADE REAL!” */
  eyebrow: ReactNode;
  /** Black line — matches “This work brought us here.” */
  title: ReactNode;
  eyebrowAs?: "p" | "h1" | "h2";
  titleAs?: "p" | "h1" | "h2";
  eyebrowClassName?: string;
  titleClassName?: string;
  className?: string;
};

/** Exact navy + black size/weight pairing from portfolio / about heroes. */
export function TitlePairing({
  eyebrow,
  title,
  eyebrowAs: EyebrowTag = "p",
  titleAs: TitleTag = "h1",
  eyebrowClassName,
  titleClassName,
  className,
}: TitlePairingProps) {
  return (
    <div className={className}>
      <EyebrowTag
        className={cn(
          "text-[30px] font-semibold tracking-[0.01em] text-navy",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </EyebrowTag>
      <TitleTag
        className={cn(
          "mt-1 text-4xl font-semibold tracking-tight md:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </TitleTag>
    </div>
  );
}

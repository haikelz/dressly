import { HTMLAttributes } from "react";
import { ChildrenProps } from "~/types";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & ChildrenProps;

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p
      className="font-normal text-sm font-ubuntu text-neutral-500 leading-relaxed"
      {...props}
    >
      {children}
    </p>
  );
}

import { ChildrenProps } from "~/types";

type HeadingProps = ChildrenProps & {
  as: "h3" | "h4";
};

export function Heading({ children, as }: HeadingProps) {
  return (
    <>
      {as === "h3" ? (
        <h3 className="font-lora font-semibold text-[28px] leading-[120px] text-neutral-900">
          {children}
        </h3>
      ) : as === "h4" ? (
        <h4 className="font-lora">{children}</h4>
      ) : null}
    </>
  );
}

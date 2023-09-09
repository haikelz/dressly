import { ChildrenProps } from "~/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <main className="flex justify-center items-center max-w-7xl flex-col w-full p-4">
      {children}
    </main>
  );
}

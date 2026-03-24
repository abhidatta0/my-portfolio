import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto bg-white dark:bg-black p-4 md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default Container;

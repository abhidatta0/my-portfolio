import { PenLine } from "lucide-react";
import { motion } from "motion/react";

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="lg:fixed lg:left-6 lg:bottom-6 bottom-0 flex flex-row justify-center items-center lg:flex lg:flex-col gap-6"
    >
      <a
        href="https://github.com/abhidatta0"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors group"
      >
        <img
          src="/images/github.svg"
          alt="github"
          className="size-10"
          width={40}
          height={40}
        />
        <Tooltip text="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/abhirup-datta-a27036216"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors group relative"
      >
        <img
          src="/images/linkedin.svg"
          alt="github"
          className="size-10"
          width={40}
          height={40}
        />
        <Tooltip text="Linkedin" />
      </a>
      <a
        href="https://abhirupdatta.hashnode.dev/"
        rel="noreferrer"
        target="_blank"
        className="text-slate-400 hover:text-cyan-400 transition-colors group relative"
      >
        <PenLine
          size={36}
          className="text-slate-400 hover:text-cyan-400 transition-colors"
        />
        <Tooltip text="Read my Blogs" />
      </a>
    </motion.div>
  );
};

interface TooltipProps {
  text: string;
}
const Tooltip = ({ text }: TooltipProps) => {
  return (
    <span className="absolute left-15 top-0 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {text}
    </span>
  );
};

export default SocialSidebar;

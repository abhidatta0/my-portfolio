import { BookOpen } from "lucide-react";
import { motion } from "motion/react";

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 bottom-0 hidden lg:flex flex-col gap-6 after:h-24 after:mx-auto"
    >
      <a
        href="https://github.com/abhidatta0"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <img
          src="/images/github.svg"
          alt="github"
          className="size-10"
          width={40}
          height={40}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/abhirup-datta-a27036216"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <img
          src="/images/linkedin.svg"
          alt="github"
          className="size-10"
          width={40}
          height={40}
        />
      </a>
      <a
        href="https://abhirupdatta.hashnode.dev/"
        rel="noreferrer"
        target="_blank"
        className="text-slate-400 hover:text-cyan-400 transition-colors group relative"
      >
        <BookOpen size={36} />
        <span className="absolute left-10 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Read my Blogs
        </span>
      </a>
    </motion.div>
  );
};

export default SocialSidebar;

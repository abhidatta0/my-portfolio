import { PROJECTS } from "@/constants/projects";
import { ExternalLink, Play } from "lucide-react";
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <div className="grid md:grid-cols-2  gap-8">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col"
        >
          <div className="aspect-video bg-black relative group">
            <video
              src={project.videoUrl}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              muted
              loop
              onMouseOver={(e) => e.currentTarget.play()}
              onMouseOut={(e) => e.currentTarget.pause()}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden">
              <Play className="text-white/50 w-12 h-12" />
            </div>
          </div>

          <div className="p-6 flex-1">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <a
              href={project.liveLink}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Try it out <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default Portfolio;

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

const App = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30">
      <Navbar />
      <Container className="min-h-screen">
        <SectionWrapper id="about">
          <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hi, I am Abhirup
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I am a results-driven Software Engineer with 6+ years of experience
            building scalable, high-performance web and mobile applications.
            Passionate about developer experience, clean component architecture,
            and delivering measurable impact through technology.
          </p>
        </SectionWrapper>
      </Container>
    </div>
  );
};

export default App;

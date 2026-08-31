import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Portfolio from "@/Portfolio";
import { PromoBanner } from "@/PromoBanner";
import SocialSidebar from "@/SocialSidebar";
import Technologies from "@/Technologies";
import { useScroll, motion } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-primary/10 text-slate-800 min-h-screen font-sans selection:bg-cyan-500/30">
      <PromoBanner />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-primary h-2 w-full origin-left fixed top-0 left-0 md:p-3 rounded-r-3xl z-10"
      />
      <Container className="min-h-screen">
        <Navbar />
        <SectionWrapper id="about">
          <p className="md:text-xl text-sm text-slate-700 max-w-2xl leading-relaxed tracking-normal">
            I am a results-driven Software Engineer with 6+ years of experience
            building scalable, high-performance web and mobile applications.
            Passionate about developer experience, clean component architecture,
            and delivering measurable impact through technology.
          </p>
        </SectionWrapper>

        <SectionWrapper id="tech">
          <h2 className="text-3xl font-bold mb-8 text-primary-strong">
            Technologies
          </h2>
          <Technologies />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <h2 className="text-3xl font-bold mb-8 text-primary-strong">
            Projects
          </h2>
          <Portfolio />
        </SectionWrapper>
        <SocialSidebar />
      </Container>
    </main>
  );
};

export default App;

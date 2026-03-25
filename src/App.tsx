import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import { TECH_STACK } from "@/constants/techstacks";

const App = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30">
      <Navbar />
      <Container className="min-h-screen">
        <SectionWrapper id="about">
          <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Hi, I am Abhirup
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I am a results-driven Software Engineer with 6+ years of experience
            building scalable, high-performance web and mobile applications.
            Passionate about developer experience, clean component architecture,
            and delivering measurable impact through technology.
          </p>
        </SectionWrapper>

        <SectionWrapper id="tech">
          <h2 className="text-3xl font-bold mb-8 text-primary">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-primary text-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </SectionWrapper>
      </Container>
    </div>
  );
};

export default App;

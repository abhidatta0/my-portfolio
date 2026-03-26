import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Portfolio from "@/Portfolio";
import Technologies from "@/Technologies";

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
          <Technologies />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
          <Portfolio />
        </SectionWrapper>
      </Container>
    </div>
  );
};

export default App;

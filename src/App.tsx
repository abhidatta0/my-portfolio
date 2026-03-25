import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
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
          <Technologies />
        </SectionWrapper>
      </Container>
    </div>
  );
};

export default App;

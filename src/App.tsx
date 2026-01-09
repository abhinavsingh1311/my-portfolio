import "./App.css";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
} from "./components/sections";
import ScrollNav from "./components/ui/ScrollNav";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-black text-white overflow-x-hidden">
        <ScrollNav />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;

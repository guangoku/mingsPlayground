import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import LandingPage from "@/pages/LandingPage";
import ProjectsPage from "@/pages/Projects";
import BlogPage from "@/pages/Blog";
import OctopusGirlProjectPage from "@/pages/projects/octopus-girl";
import FlashMindProjectPage from "@/pages/projects/flashmind";
import CharityBoxProjectPage from "@/pages/projects/charity-box";
import NepalTravelProjectPage from "@/pages/projects/nepal-travel";


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Individual project pages */}
          <Route path="/projects/octopus-girl" element={<OctopusGirlProjectPage />} />
          <Route path="/projects/flashmind" element={<FlashMindProjectPage />} />
          <Route path="/projects/charity-box" element={<CharityBoxProjectPage />} />
          <Route path="/projects/nepal-travel" element={<NepalTravelProjectPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

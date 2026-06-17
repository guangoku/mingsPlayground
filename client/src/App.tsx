import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import LandingPage from "@/pages/LandingPage";
import ProjectPostPage from "@/pages/projects/ProjectPostPage";
import BlogPostPage from "@/pages/blog/BlogPostPage";


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Dynamic project page */}
          <Route path="/projects/:slug" element={<ProjectPostPage />} />
          {/* Dynamic blog post page */}
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

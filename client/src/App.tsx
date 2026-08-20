import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import LandingPage from "@/pages/LandingPage";
import ProjectPostPage from "@/pages/projects/ProjectPostPage";
import BlogPostPage from "@/pages/blog/BlogPostPage";
import OneDayAWeekPage from "@/pages/blog/OneDayAWeekPage";
import GapYearPage from "@/pages/gapyear/GapYearPage";
import NotFound from "@/pages/not-found";


function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Dynamic project page */}
          <Route path="/projects/:slug" element={<ProjectPostPage />} />
          {/* Art-directed pieces with their own pages */}
          <Route path="/blog/one-day-a-week" element={<OneDayAWeekPage />} />
          {/* Dynamic blog post page */}
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Gap-year wrap-up (standalone visual form) */}
          <Route path="/gap-year" element={<GapYearPage />} />
          {/* Anything else */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

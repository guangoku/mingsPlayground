import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { toc } from '@/lib/gapyear/content';
import RedThread from '@/components/gapyear/RedThread';
import TitleSlide from '@/components/gapyear/sections/TitleSlide';
import WhoIsMing from '@/components/gapyear/sections/WhoIsMing';
import WhyStop from '@/components/gapyear/sections/WhyStop';
import OldTrackTests from '@/components/gapyear/sections/OldTrackTests';
import PreflightChecks from '@/components/gapyear/sections/PreflightChecks';
import MindsetShift from '@/components/gapyear/sections/MindsetShift';
import WorldCollage from '@/components/gapyear/sections/WorldCollage';
import CoLiving from '@/components/gapyear/sections/CoLiving';
import SelfStudy from '@/components/gapyear/sections/SelfStudy';
import TechForGood from '@/components/gapyear/sections/TechForGood';
import ThreeGenerations from '@/components/gapyear/sections/ThreeGenerations';
import StartupLab from '@/components/gapyear/sections/StartupLab';
import GapLedger from '@/components/gapyear/sections/GapLedger';
import QuickQA from '@/components/gapyear/sections/QuickQA';
import ToBeContinued from '@/components/gapyear/sections/ToBeContinued';
import '@/styles/gapyear.css';

/**
 * Gap-year wrap-up: a standalone scrollytelling piece in the hand-drawn
 * deck style (charcoal / cream / vermillion). Deliberately independent of
 * the site's ocean theme and blog/project layouts.
 */
export default function GapYearPage() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const isStatic = params?.has('static') ?? false;
  const isCompact = params?.has('compact') ?? false;

  // Header gets a backdrop once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on mount; ?at=N jumps to slide N (QA/deep-link helper)
  useLayoutEffect(() => {
    const at = new URLSearchParams(window.location.search).get('at');
    const slides = document.querySelectorAll<HTMLElement>('.gy-slide');
    const idx = at === null ? NaN : parseInt(at, 10);
    if (!Number.isNaN(idx) && slides[idx]) {
      window.scrollTo(0, slides[idx].offsetTop + 1);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={`gy-root ${isStatic ? 'gy-static' : ''} ${isCompact ? 'gy-compact' : ''}`}>
      <RedThread anchors={toc} />

      {/* Minimal top bar: back link + language toggle. Always stays on top. */}
      <header
        className={`gy-header fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-3 text-[#f3eeda] ${
          scrolled ? 'gy-header-scrolled' : ''
        }`}
      >
        <Link to="/" className="gy-h text-lg opacity-70 hover:opacity-100 transition-opacity">
          ← Ming's Playground
        </Link>
        <button
          type="button"
          onClick={toggleLanguage}
          className="gy-h text-lg opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Toggle language"
        >
          {language === 'en' ? '中文' : 'EN'}
        </button>
      </header>

      <TitleSlide />
      <WhoIsMing />
      <WhyStop />
      <OldTrackTests />
      <PreflightChecks />
      <MindsetShift />
      <SelfStudy />
      <WorldCollage />
      <CoLiving />
      <ThreeGenerations />
      <TechForGood />
      <StartupLab />
      <GapLedger />
      <QuickQA />
      <ToBeContinued />
    </div>
  );
}

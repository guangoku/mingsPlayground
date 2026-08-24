import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { tabTitleFor } from '@/lib/share-meta';

/**
 * Keep the browser tab in step with the route and the language.
 *
 * The build writes a real <head> per route (scripts/prerender-meta.ts), which
 * covers the first load and every crawler. After that navigation is
 * client-side, so the title is set again here - from the same table, so the
 * two never drift.
 */
export default function RouteTitle() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = tabTitleFor(pathname, language);
  }, [pathname, language]);

  return null;
}

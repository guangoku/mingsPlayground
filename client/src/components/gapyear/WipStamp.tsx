import { useLanguage } from '@/hooks/useLanguage';

/** Hand-drawn "under construction" stamp for placeholder chapters. */
export default function WipStamp({ className = '' }: { className?: string }) {
  const { language } = useLanguage();
  return (
    <span
      className={`gy-h gy-accent inline-block border-2 border-dashed border-current rounded-lg px-3 py-1 text-base md:text-lg -rotate-6 ${className}`}
    >
      {language === 'zh' ? '施工中 🚧' : 'under construction 🚧'}
    </span>
  );
}

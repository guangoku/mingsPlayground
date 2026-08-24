import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { selfStudy } from '@/lib/gapyear/chapters';
import { PHOTOS } from '@/lib/gapyear/art';
import Slide from '../Slide';
import StudyBoard from '../StudyBoard';
import { NOTE_ART } from '../noteArt';
import { SPEECH_PAIR, SUPPORT, BOOK, DIVE_MASK, type DoodleSpec } from '../doodles';

const FACES: Record<string, DoodleSpec> = {
  oldfriends: SPEECH_PAIR,
  newfriends: SUPPORT,
  ditan: BOOK,
  komodo: DIVE_MASK,
};

export default function SelfStudy() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="verm" id="gy-self" tag={t({ zh: '生活', en: 'life' })} className="gy-wide">
      <StudyBoard
        heading={selfStudy.heading}
        sub={selfStudy.sub}
        prompt={selfStudy.prompt}
        pieces={selfStudy.pieces}
        icons={FACES}
        art={NOTE_ART}
        photos={PHOTOS}
      />
    </Slide>
  );
}

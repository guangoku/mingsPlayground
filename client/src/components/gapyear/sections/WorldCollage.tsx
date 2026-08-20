import { useLanguage } from '@/hooks/useLanguage';
import { getBilingualText } from '@/lib/utils';
import { worldStudy } from '@/lib/gapyear/chapters';
import { PHOTOS } from '@/lib/gapyear/art';
import Slide from '../Slide';
import StudyBoard from '../StudyBoard';
import { NOTE_ART } from '../noteArt';
import { TEMPLE, CHURCH, ODD_ONE_OUT, TREE, type DoodleSpec } from '../doodles';

const FACES: Record<string, DoodleSpec> = {
  tibetan: TEMPLE,
  spain: CHURCH,
  korea: ODD_ONE_OUT,
  planetree: TREE,
};

export default function WorldCollage() {
  const { language } = useLanguage();
  const t = (bt: { zh: string; en: string }) => getBilingualText(bt, language);

  return (
    <Slide variant="charcoal" id="gy-collage" tag={t({ zh: '生活', en: 'life' })} className="gy-wide">
      <StudyBoard
        heading={worldStudy.heading}
        sub={worldStudy.sub}
        intro={worldStudy.intro}
        prompt={worldStudy.prompt}
        pieces={worldStudy.pieces}
        icons={FACES}
        art={NOTE_ART}
        photos={PHOTOS}
        boardSide="right"
      />
    </Slide>
  );
}

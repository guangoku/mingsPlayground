/**
 * Ming's Procreate-drawn doodles (trimmed + optimized exports).
 * Rendered via InkStamp, which uses the PNG alpha as a mask so each
 * drawing can take any ink color from currentColor.
 */
import walking from '@assets/gapyear/walking.png';
import arrow from '@assets/gapyear/arrow.png';
import scribble from '@assets/gapyear/scribble.png';
import octopus from '@assets/gapyear/octopus.png';
import hillclimb from '@assets/gapyear/hillclimb.png';
import club from '@assets/gapyear/club.png';

export interface ArtAsset {
  src: string;
  /** width / height of the trimmed image */
  ratio: number;
}

export const ART = {
  walking: { src: walking, ratio: 611 / 720 },
  arrow: { src: arrow, ratio: 702 / 137 },
  scribble: { src: scribble, ratio: 653 / 720 },
  octopus: { src: octopus, ratio: 551 / 720 },
  hillclimb: { src: hillclimb, ratio: 720 / 528 },
  club: { src: club, ratio: 293 / 720 },
} satisfies Record<string, ArtAsset>;

import friendsMeal from '@assets/gapyear/photos/friends-meal.jpg';
import friendsBike from '@assets/gapyear/photos/friends-bike.jpg';
import friendsKids from '@assets/gapyear/photos/friends-kids.jpg';
import friendsAfternoon from '@assets/gapyear/photos/friends-afternoon.jpg';
import friendsCat from '@assets/gapyear/photos/friends-cat.jpg';
import friendsGame from '@assets/gapyear/photos/friends-game.jpg';
import friendsBoat from '@assets/gapyear/photos/friends-boat.jpg';
import planetreeSpring from '@assets/gapyear/photos/planetree-spring.jpg';
import planetreeDusk from '@assets/gapyear/photos/planetree-dusk.jpg';
import planetreeWinter from '@assets/gapyear/photos/planetree-winter.jpg';
import planetreeBark from '@assets/gapyear/photos/planetree-bark.jpg';
import planetreeHug from '@assets/gapyear/photos/planetree-hug.jpg';

/**
 * Photos, keyed by note id (or piece key for a board face).
 * Anything without a photo falls back to its sketch.
 */
export const PHOTOS: Record<string, string> = {
  'oldfriends-meal': friendsMeal,
  'oldfriends-bike': friendsBike,
  'oldfriends-kids': friendsKids,
  'oldfriends-afternoon': friendsAfternoon,
  'oldfriends-cat': friendsCat,
  'oldfriends-game': friendsGame,
  'oldfriends-boat': friendsBoat,
  'planetree-spring': planetreeSpring,
  'planetree-dusk': planetreeDusk,
  'planetree-winter': planetreeWinter,
  'planetree-bark': planetreeBark,
  'planetree-hug': planetreeHug,
};

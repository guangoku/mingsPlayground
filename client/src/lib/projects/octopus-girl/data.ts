/**
 * Octopus Girl project data
 * Complete project data and configuration
 */

import { type ProjectData } from '../shared/types';
import { PROJECT_CATEGORIES, PROJECT_TAGS } from '../shared/constants';
import { OCTOPUS_GIRL_IMAGES } from './images';
import { OCTOPUS_GIRL_CONSTANTS } from './constants';

export const octopusGirlData: ProjectData = {
  id: OCTOPUS_GIRL_CONSTANTS.PROJECT_ID,
  title: {
    en: 'Octopus Girl: A Personal Avatar',
    zh: '章鱼女孩：我的角色形象'
  },
  category: PROJECT_CATEGORIES.ART.id,
  description: {
    en: 'Born from my love of the sea, she reflects the octopus\’s intelligence, curiosity, and adaptability.',
    zh: '源于我对大海的热爱，她体现了章鱼的智慧、好奇与适应力。'
  },
  imageUrl: OCTOPUS_GIRL_IMAGES.hero,
  tags: [PROJECT_CATEGORIES.ART.id, PROJECT_TAGS.CHARACTER_DESIGN.id, PROJECT_TAGS.AI_GENERATED_ART.id] as any,
  mainContentTitle: {
    en: 'The Story',
    zh: '创作故事'
  },
    
  theStory: {
    en: `Octopus Girl is more than a character — she is my personal avatar \
    and a recurring theme in my creative work. Inspired by my love of scuba diving \
    and fascination with marine life, she embodies the qualities I admire most in \
    octopuses: intelligence, curiosity, adaptability, playfulness, and a touch of \
    shyness. Through a series of illustrations, I explore her moods, colors, and \
    personalities — from warm and curious to contemplative and serene. \
    This project is both a visual journey and a reflection of my own values: \
    problem-solving, exploration, and embracing the unknown.`,
    zh:`这个角色代表了我持续学习和适应的旅程，就像章鱼可以改变形状和颜色来适应任何环境一样。`
  },
  aboutOctopus: {
    title: {
      en: 'About Octopus',
      zh: '章鱼'
    },
    content: {
      en: `Octopuses are some of the ocean's most fascinating creatures. They are 
      **highly intelligent**, able to solve puzzles and escape tricky situations.
      **Naturally curious**, they explore their surroundings with a sense of wonder. 
      They are **adaptive** — changing color and texture to blend in. 
      and **playful**, often interacting with objects just for fun.
      Despite all this, they can also be **shy**, hiding away when they feel uncertain.
 These qualities make the octopus a symbol of intelligence, curiosity, adaptability, playfulness, and gentle mystery.`,
      zh: `章鱼是海洋中最令人着迷的生物之一。它们**聪明过人**，能够解谜、甚至逃出复杂的环境。
      它们天生好奇，总是带着探索的心态观察周围世界；
      它们善于伪装，能改变颜色与质地以适应环境；
      它们也会展现出顽皮的一面，主动与物体互动。
      同时，章鱼又带有一丝害羞，在不安时会选择躲藏。
      正因如此，章鱼常被视为智慧、好奇、适应力、玩心与神秘的象征。`
    },
    imageUrl: OCTOPUS_GIRL_IMAGES.aboutOctopus,
  },
    aboutOctopusGirl: {
    title: {
      en: 'About Octopus Girl',
      zh: '章鱼女孩'
    },
    content: {
      en: `Octopus Girl is my personal avatar, inspired by these very traits. 
      She reflects the qualities I admire most — problem-solving, exploration, 
      and adaptability — with a touch of curiosity and shyness. The character 
      also comes from my love of scuba diving and marine life. For me, 
      she is not just a design but a way of expressing values I want to carry: 
      staying curious, embracing change, and finding joy in the unknown.`,
      zh: `“章鱼女孩”是我为自己创造的化身，灵感正来自这些特质。
      她代表了我所欣赏的品质——解决问题的能力、探索精神与适应力，
      同时也带着好奇与一丝腼腆。
      这个角色的灵感同样来自我对潜水与海洋生物的热爱。
      对我而言，她不仅是一种设计，更是我希望保持的价值观的表达：
      保持好奇，勇于拥抱变化，在未知中找到乐趣。`
    }
  },
  characterDesigns: {
    title: {
      en: 'First Designs',
      zh: '初稿设计'
    },
    content: {
      en: `The first stage of Octopus Girl began with a series of twelve illustrations. Using MidJourney, I explored different moods and personalities — playful, warm, contemplative, serene — until her character started to take shape.

One of my favorite prompts was:

\`\`\`
A lovely little girl with octopus as her hair, charming character illustrations, minimal art, simplified line work, flat illustration, Noritake style --niji 6 --stylize 50
\`\`\`

The combination of \`--niji 6\` and \`--stylize 50\` gave me the simple, minimal style I liked. From there, I did many re-runs, selecting the variations that resonated most. This process wasn't about finding one "perfect" image, but about exploring and refining the character's visual identity through experimentation.`,
      zh: `"章鱼女孩"的第一阶段从十二幅插画开始。我使用 MidJourney 来探索她不同的情绪与个性——有时活泼温暖，有时沉思宁静——直到她的形象逐渐清晰。

其中我最喜欢的一个提示语是：

\`\`\`
一个可爱的女孩，头发像章鱼，迷人的角色插画，极简风格，简化线条，平面插画，Noritake 风格 --niji 6 --stylize 50
\`\`\`

其中 \`--niji 6\` 与 \`--stylize 50\` 的组合生成了我喜欢的简洁极简风格。之后我进行了大量的重新生成，从中挑选出最契合的版本。这个过程并不是为了找到某一幅"完美"的图像，而是通过实验与探索，逐步塑造出角色的视觉身份。`
    },
    detailImages: [...OCTOPUS_GIRL_IMAGES.initialDesigns]
  },
  variations: {
    title: {
      en: 'Variations',
      zh: '变体'
    },
    content: {
      en: `To push the character further, I experimented with translating Octopus Girl into different styles:

- **3D character model** - showing how she might live in an interactive world
- **Clay-toy version** - emphasizing her playfulness  
- **2D anime character design** - highlighting her expressiveness

Each variation revealed a new side of her personality. These explorations showed me how flexible and adaptable she can be as a personal avatar.`,
      zh: `为了进一步拓展角色，我尝试将"章鱼女孩"转化为不同风格：

- **三维角色模型** - 展示她如何在互动世界中存在
- **黏土玩具造型** - 突出她的玩趣特质
- **二维动漫角色设计** - 强化她的表现力

每一种变体都呈现了她性格的另一面。这些尝试让我看到了她作为个人化身的灵活性与适应力。`
    },
    detailImages: [...OCTOPUS_GIRL_IMAGES.variations],
  }
};

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

  aboutOctopus: {
    title: {
      en: 'About Octopus',
      zh: '章鱼'
    },
    content: {
      en: `Octopuses are some of the ocean's most fascinating creatures. Their traits include:
- **Highly intelligent** - able to solve puzzles and escape tricky situations  
- **Naturally curious** - exploring their surroundings with a sense of wonder  
- **Adaptive** — changing color and texture to blend in  
- **Playful** — interacting with objects just for fun  
- **Shy** — hiding away when they feel uncertain  `,
      zh: `章鱼是海洋中最奇妙的生物之一。它们的特质包括：  
- **聪明** —— 能解开谜题，甚至逃离复杂的环境  
- **好奇** —— 总爱带着探索的心态观察周围  
- **适应力强** —— 能随环境变化颜色和质地  
- **爱玩** —— 会主动摆弄物体，展现玩心  
- **害羞** —— 在不安时会选择躲藏`
  },
    imageUrl: OCTOPUS_GIRL_IMAGES.aboutOctopus,
  },
    aboutOctopusGirl: {
    title: {
      en: 'About Octopus Girl',
      zh: '章鱼女孩'
    },
    content: {
      en:`Octopus Girl is my personal avatar, inspired by the traits I admire in octopuses: problem-solving, curiosity, adaptability, playfulness, and a bit of shyness.  She is more than a character — a simple, recognizable figure that reflects parts of myself.`,
      zh: `“章鱼女孩”是我的个人角色形象，灵感来自章鱼的特质：解决问题、好奇、适应力强、爱玩，也有些害羞。她不仅仅是一个角色，更是一个简洁、容易识别的形象，映照了我的一部分。`
    }
  },
  characterDesigns: {
    title: {
      en: 'First Designs',
      zh: '初稿设计'
    },
    content: {
      en: `The first stage of Octopus Girl began with a series of illustrations. Using **MidJourney**, I explored different moods and personalities — playful, warm, contemplative, serene — until her character started to take shape.

  A core prompt I used was:
  
\`\`\`
A lovely little girl with octopus as her hair, charming character illustrations, minimal art, simplified line work, flat illustration, Noritake style --niji 6 --stylize 50
\`\`\`

The combination of \`--niji 6\` and \`--stylize 50\` gave me the simple, minimal style. 
From there, I did many re-runs, selecting the variations that resonated most. 
These chosen 2D images then became the foundation for the next stage: translating the character into different forms. 

The goal wasn’t a perfect image, but to explore and shape the character’s visual identity.

`,
      zh:  `“章鱼女孩”的第一阶段从一组插画开始。我用 MidJourney 去探索她不同的情绪和个性——有时活泼温暖，有时沉思宁静——直到她的形象逐渐清晰。  

其中一个我最喜欢的提示语是：  

\`\`\`
A lovely little girl with octopus as her hair, charming character illustrations, minimal art, simplified line work, flat illustration, Noritake style --niji 6 --stylize 50
\`\`\`

\`--niji 6\` 和 \`--stylize 50\` 的组合给出了我喜欢的极简风格。之后我进行了大量重跑，从中挑选出最契合的版本。  
这些二维图像成为下一阶段的基础：把角色转化为不同的形式。  

目标并不是找到一张“完美”的图，而是在实验中不断探索和塑造她的视觉形象。`
    },
    detailImages: [...OCTOPUS_GIRL_IMAGES.initialDesigns]
  },

variations: {
  title: {
    en: "Variations",
    zh: "变体"
  },
  intro: {
    en: `To take Octopus Girl beyond 2D sketches, I experimented with **Nano Banana** in Google AI Studio.  
The strategy was simple: upload a 2D reference and ask the model to **preserve her design and colors** while reimagining her in new forms.  
This kept her identity consistent but opened the door to playful transformations.`,
    zh: `为了让“章鱼女孩”走出二维草图，我尝试了 Google AI Studio 的 **Nano Banana**。  
思路很简单：先上传一张二维参考图，再要求模型在**保持设计和色彩一致**的前提下进行再创作。  
这样既能维持她的辨识度，又能展开更多有趣的变化。`
  },
  sections: [
    {
      title: { en: "Clay-toy Versions", zh: "黏土玩具造型" },
      description: {
        en: `I asked the model to re-imagine Octopus Girl as a **hand-sculpted clay figurine**.  
The results were charming: smooth textures, slight imperfections, and vibrant clay colors that looked like real toys.  `,
        zh: `我让模型把章鱼女孩重塑成**手工黏土小雕像**。  
结果非常可爱：光滑的质感，带有轻微的不完美，颜色鲜艳，像真的玩偶。`
      },
      images: [...OCTOPUS_GIRL_IMAGES.toy]
    },
    {
      title: { en: "3D Cartoon Model", zh: "3D 卡通模型" },
      description: {
        en: `Next, a **Pixar/Disney-style 3D version** with big expressive eyes, smooth shading, and playful proportions.  
I explored scenes like hugging knees, standing by a Christmas tree (later moved underwater), even a post-shower look.  
Each pose hinted at how she might live in an animated world.`,
        zh: `接着是 **Pixar/Disney 风格的 3D 版本**，大眼睛、平滑光影、趣味比例。  
我尝试了不同场景：抱膝、站在圣诞树下（后来搬到水下）、洗澡后的造型。  
每个姿势都像是在展示她在动画世界里的生活。`
      },
      images: [...OCTOPUS_GIRL_IMAGES.cartoon3D]
    },
    {
      title: { en: "2D Anime Variations", zh: "二维动漫变体" },
      description:  {
        en: `Finally, I built **Japanese anime-style sheets**: standing, action poses, outfits, expressions, turnarounds.  
Ocean details added personality — bubbles, starfish hair clips, a mischievous tentacle hand, even seaweed slippers.  
Through chat iterations, I tweaked prompts and watched her personality emerge.`,
        zh: `最后，我生成了 **日系动漫风格的角色表**：站姿、动作、服装、表情、转面图。  
加入了一些海洋元素：气泡、海星发饰、调皮的触手、甚至海草拖鞋。  
我通过多轮迭代修改提示，看着她的性格一点点显现出来。`
      },
      images: [...OCTOPUS_GIRL_IMAGES.anime2D]
    }
  ]
},
finishingThoughts: {
  title: {
    en: "Finishing Thoughts",
    zh: "最后的想法"
  },
  content: {
    en: `Working with AI models was fun, though not always smooth.  
Sometimes the model misunderstood, and I had to adjust details by hand.  

Still, the best part was the **brainstorming**: each run sparked new directions, unexpected details, and fresh ideas.  
Through many iterations, Octopus Girl kept surprising me — and that sense of discovery made the journey meaningful.`,
    zh: `与 AI 模型的合作很有趣，但并不总是顺利。  
有时模型没理解到位，我需要手动去修正一些细节。    

真正的乐趣在于**头脑风暴**：每次生成都会带来新的方向、意外的细节和新的灵感。  
在不断的迭代中，“章鱼女孩”总能带给我惊喜——这种探索的感觉让整个过程变得很有意义。`
  }
}
};

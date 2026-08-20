/**
 * Gap-year page: chapter content (bilingual).
 * ZH is the source voice, from the 开放麦 script; EN is an adaptation.
 */
import type { BilingualText } from '@/lib/types';
import type { VoiceEntry } from './voice';

export interface Story {
  key: string;
  title: BilingualText;
  hook?: BilingualText;
  /** One line of setup, then the concrete list, then the conclusions */
  intro?: BilingualText;
  bullets?: readonly BilingualText[];
  paragraphs: readonly VoiceEntry[];
}

/* ------------------------------ 茗云是谁 ------------------------------ */

export const who = {
  heading: { zh: '背景', en: 'Background' },
  lines: [
    { zh: '数据工程师，工作到第十年', en: 'Data engineer, ten years in.' },
    { zh: '在美国科技大厂打工', en: 'Big-tech worker, US chapter.' },
    {
      zh: '2024 年 12 月，和伴侣一起辞职上路',
      en: 'Dec 2024: quit, together with my partner.',
    },
    { zh: '人回了西雅图，事还在路上', en: 'Back in Seattle now - still exploring.' },
  ],
} as const;

/* --------------------------- 在原有轨道的尝试 --------------------------- */

export const tests = {
  heading: { zh: '在原有轨道的尝试', en: 'Tests on the old track' },
  sub: {
    zh: '能不能不裸辞，用更小的改动解决问题？',
    en: 'Could smaller changes fix it, without quitting cold?',
  },
  cards: [
    {
      key: 'test1',
      title: { zh: '测试 1：停薪留职 & 生活切换', en: 'Test 1: unpaid leave & a life switch' },
      intro: { zh: '停薪留职两个月，换一种活法。', en: 'Two months of unpaid leave, a different way of living.' },
      bullets: [
        { zh: '回东北照顾爷爷奶奶，他们 89 岁', en: 'Back to Dongbei for my grandparents, both 89' },
        { zh: '奶奶刚做完心脏搭桥，还在恢复', en: 'Grandma still recovering from heart bypass' },
        { zh: '陪爸妈做体检', en: 'Checkups with my parents' },
        { zh: '给自己留了点时间旅行', en: 'A little time to travel' },
      ],
      paragraphs: [
        {
          lead: { zh: '结果', en: 'result' },
          text: {
            zh: '不上班特别好。一回去上班，不到一周就打回原形。',
            en: 'Off work, great. Back at work, under a week to snap right back.',
          },
        },
      ],
    },
    {
      key: 'test2',
      title: {
        zh: '测试 2：降低工作投入 & 找其他重心',
        en: 'Test 2: dialing work down & finding another center',
      },
      intro: {
        zh: '工作上稍微摆烂，看看别的项目能不能做起来。',
        en: 'Coast a little at work, see if something else takes root.',
      },
      bullets: [
        { zh: '参加本地的创业活动', en: 'Local startup events' },
        { zh: '参加本地的公益活动', en: 'Local charity work' },
        { zh: '想至少摸出个方向，给自己一个辞职的理由', en: 'Hoping to find a direction, a reason to quit' },
      ],
      paragraphs: [
        {
          lead: { zh: '结果', en: 'result' },
          text: {
            zh: '有改善，生活里多了新东西。但没解决根本问题。',
            en: 'It helped, new things in life. But it never touched the root.',
          },
        },
        {
          lead: { zh: '为什么', en: 'why' },
          text: {
            zh: '我不是高能量的人，留着主业就没精力再探一条路。很多人能做到，我不太行。',
            en: 'I am not a high-energy person. With the day job in place, nothing was left to explore with. Plenty manage it. I could not.',
          },
        },
      ],
    },
  ] satisfies Story[],
  conclusion: {
    zh: '这一轮尝试的结论是：还是得有一些大动作。',
    en: 'Conclusion of the round: it was going to take a bigger move.',
  },
} as const;

/* ---------------------------- 离职前的确认 ---------------------------- */

export const prep = {
  heading: { zh: '离职前，确认的几件事', en: 'Before quitting, a few things to check' },
  cards: [
    {
      key: 'money',
      title: { zh: '算账 × 存款', en: 'the math × the savings' },
      paragraphs: [
        {
          lead: { zh: '确认的是', en: 'what I checked' },
          text: {
            zh: '能有一段有限的探索期，不用一睁眼就想：今天是不是该找工作了？',
            en: 'That I could afford a bounded stretch, without waking up asking: should I job-hunt today?',
          },
        },
        {
          lead: { zh: '实际情况', en: 'how it went' },
          text: {
            zh: '当时定的是一年。有 9 个月几乎没焦虑过。现在超过一年了，最近打算重新算一次。',
            en: 'The budget said a year. Nine months came with almost no anxiety. Past the year mark now, so it is time to redo the math.',
          },
        },
      ],
    },
    {
      key: 'door',
      title: { zh: '退路 × two-way door', en: 'the way back × two-way door' },
      paragraphs: [
        {
          lead: { zh: '前公司的说法', en: 'my old company said' },
          text: {
            zh: 'one-way door vs. two-way door。走砸了，能不能用小代价走回来？',
            en: 'One-way door vs. two-way door. If it goes badly, can you walk back cheaply?',
          },
        },
        {
          lead: { zh: '我的情况', en: 'my case' },
          text: {
            zh: '行业和阶段对空白期、年龄没那么苛刻。这条路不是不可逆的。',
            en: 'My industry and stage are forgiving about gaps and age. This door swings both ways.',
          },
        },
      ],
    },
    {
      key: 'support',
      title: { zh: '伴侣 × 家人支持', en: 'partner × family' },
      paragraphs: [
        {
          lead: { zh: '伴侣', en: 'partner' },
          text: {
            zh: '刚好也在相似的阶段，能一起离职、一起探索。',
            en: 'At a similar point, so we could quit and explore together.',
          },
        },
        {
          lead: { zh: '家人', en: 'family' },
          text: {
            zh: '担心，但一直支持。我爸妈还劝我：要不来广东，在家啃老。',
            en: 'Worried, but always backing me. My parents kept offering: come home to Guangdong and live off us?',
          },
        },
        {
          lead: { zh: '窗口', en: 'the window' },
          text: {
            zh: '没有重的赡养和育儿责任。这种机会不是一直在。',
            en: 'No heavy caretaking or parenting yet. That does not stay open forever.',
          },
        },
      ],
    },
  ] satisfies Story[],
  closing: {
    zh: '确认完这些，在 2024 年底一个阴雨的冬天，我们裸辞离开了。',
    en: 'Checks done - and on a drizzly winter day at the end of 2024, we quit.',
  },
} as const;

/* --------------------------- 最优解 → 小试错 --------------------------- */

export const shift = {
  heading: { zh: '一个转变', en: 'One shift' },
  statement: {
    zh: '从「想清楚最优解」，到「小规模试错和判断」',
    en: 'from "figure out the optimal plan" to "small experiments, quick judgment"',
  },
  directionsLabel: { zh: '离职时，只有模糊的方向感', en: 'At quitting time, only a fuzzy sense of direction' },
  directions: [
    { k: { zh: '事业', en: 'work' }, v: { zh: '在科技领域找到热情和使命感', en: 'find passion and mission inside tech' } },
    {
      k: { zh: '生活', en: 'life' },
      v: { zh: '找回活力，去班味，眼里要有光', en: 'get the spark back - less office musk, more light in the eyes' },
    },
    {
      k: { zh: '关系', en: 'people' },
      v: { zh: '把时间交还给重要的家人和朋友', en: 'give time back to the people who matter' },
    },
  ],
  thesis: {
    zh: '后面这些行动，看起来「东一榔头，西一棒槌」，但都来自同一个逻辑。',
    en: 'Everything after this looks like random swings east and west - but it all runs on this one logic.',
  },
  voiceLabel: { zh: '多说两句', en: 'hear me out' },
  voice: [
    {
      lead: { zh: '卡住的地方', en: 'where I got stuck' },
      text: {
        zh: '我习惯先想明白，找到「最优解」，再开始动。',
        en: 'My habit: think it all through, find the "optimal" answer, then move.',
      },
    },
    {
      lead: { zh: '创业的思路', en: 'from startups' },
      text: {
        zh: '最小可行性测试、快速原型。先跑起来，再修。',
        en: 'Minimum viable tests, quick prototypes. Start running, then correct.',
      },
    },
    {
      lead: { zh: '《地下室手记》', en: 'Notes from Underground' },
      text: {
        zh: '一个蹲在地下室写日记碎碎念的小公务员，戳中了我一些阴暗内心。我不想变成那种用「思考」逃避生活、行动瘫痪的人。',
        en: 'A clerk muttering into his diary in a basement, hitting uncomfortably close. I did not want to become someone who hides from life inside "thinking".',
      },
    },
    {
      lead: { zh: '一个反面例子', en: 'a case in point' },
      text: {
        zh: '公益这事我纠结过很久：是不是只在修补旧系统？做数据的习惯又让我执着于可规模化。纠结的这段时间，我连原本在做的捐款和参与都停了。',
        en: 'I agonized over charity for ages: just patching a broken system? My data habits demanded everything scale. Net effect: I paused the donating I was already doing.',
      },
    },
    {
      lead: { zh: '爬山的比喻', en: 'the mountain picture' },
      text: {
        zh: '我人还在山脚下，却在纠结哪座才是喜马拉雅。机器学习的解法是：先找几个点开始爬，怎么都在进步，爬几座才看得出哪里更高。',
        en: 'Still at the foot of the mountains, debating which peak was Everest. The ML answer: pick a few starting points and climb. You progress either way, and only then can you see which peaks are higher.',
      },
    },
  ],
} as const;

/* -------------------- 对自己的比较研究（先看自己） -------------------- */

export const selfStudy = {
  heading: { zh: '对自己的比较研究', en: 'A comparative study of myself' },
  sub: { zh: '在不同地方，重新校准自己', en: 'recalibrating, one place at a time' },
  prompt: { zh: '点一块', en: 'pick a piece' },
  pieces: [
    {
      key: 'oldfriends',
      title: { zh: '老朋友', en: 'Old friends' },
      hook: {
        zh: '爱瞎操心的还是瞎操心，不靠谱的还是不靠谱',
        en: 'the worriers still worry, the flaky ones are still flaky',
      },
      chipsLabel: { zh: '毕业后只剩：', en: 'after graduation:' },
      chips: [
        { zh: '新工作', en: 'new job' },
        { zh: '新地址', en: 'new city' },
        { zh: '结婚', en: 'married' },
        { zh: '生娃', en: 'a baby' },
      ],
      prose: [
        {
          zh: '这次终于重聚。一顿饭当面补上近况，浮世绘一样，互相看见一片生活的切片。还和 ta 们的家人小孩做了朋友 :)',
          en: 'This gap we finally reunited. One meal fills in the news - ukiyo-e style, a slice of each other\'s life. Now I am friends with their families and kids too :)',
        },
      ],
      list: {
        label: { zh: '更珍贵的是饭局之外：', en: 'past the meal:' },
        items: [
          { zh: '哄睡孩子后的宵夜', en: 'a supper once the kid was down' },
          { zh: '公园四人单车', en: 'a four-seater bike' },
          { zh: '睡一个被窝', en: 'one quilt' },
          { zh: '打游戏撸猫', en: 'games and cats' },
          { zh: '射箭滑雪露营', en: 'archery, skiing, camping' },
        ],
      },
      notes: [
        { id: 'oldfriends-meal', art: 'speech' },
        { id: 'oldfriends-afternoon', art: 'tree' },
        { id: 'oldfriends-kids', art: 'heart' },
        { id: 'oldfriends-bike', art: 'support' },
        { id: 'oldfriends-cat', art: 'heart' },
        { id: 'oldfriends-game', art: 'sparkle' },
        { id: 'oldfriends-boat', art: 'support' },
      ],
      closing: [
        {
          zh: '那个从前就喜欢的人，又从记忆里回来了，又玩到了一起。',
          en: 'The person I always liked walked back out of memory, and we are playing together again.',
        },
        {
          zh: '原来大家只是在不同的地方，一起长大、成长、变老～',
          en: 'Turns out we have just been growing up - and growing old - together, in different places ~',
        },
      ],
    },
    {
      key: 'newfriends',
      title: { zh: '新朋友', en: 'New friends' },
      hook: { zh: '路上认识的人，照出另一个我', en: 'the people met on the road, and the me they reflect' },
      wip: true,
      notes: [],
    },
    {
      key: 'ditan',
      title: { zh: '我与地坛', en: 'Me and Ditan Park' },
      shortTitle: { zh: '我与地坛', en: 'Ditan Park' },
      hook: { zh: '完美人生的低配版，差不了太多', en: 'a budget edition of the perfect life' },
      notes: [
        { id: 'ditan-a', art: 'book', caption: { zh: '在地坛读《我与地坛》', en: 'Reading Shi Tiesheng in the park he wrote about.' } },
        { id: 'ditan-b', art: 'tree', caption: { zh: '他畅想的那种人生', en: 'The life he imagined.' } },
        { id: 'ditan-c', art: 'heart', caption: { zh: '我这版，配置低一点', en: 'Mine: lower spec, same shape.' } },
      ],
    },
    {
      key: 'komodo',
      title: { zh: '科莫多', en: 'Komodo' },
      hook: { zh: '我比很多年都更像自己', en: 'more myself than I had been in years' },
      notes: [
        { id: 'komodo-a', art: 'mask', caption: { zh: '两个月，几乎天天在水里', en: 'Two months, in the water almost daily.' } },
        { id: 'komodo-b', art: 'fish', caption: { zh: '非常健康的海，很接近天堂', en: 'A thriving reef. Close enough to paradise.' } },
        { id: 'komodo-c', art: 'support', caption: { zh: '第二次来：路好了，潜店管理层是本地人', en: 'Second visit: better roads, locals running the shop.' } },
        { id: 'komodo-d', art: 'sparkle', caption: { zh: '自信、放松、对生活有掌控感', en: 'Confident, relaxed, in charge of their lives.' } },
      ],
    },
  ],
} as const;

/* --------------------- 世界的拼贴（对世界的比较研究） --------------------- */

export const worldStudy = {
  heading: { zh: '世界的拼贴', en: 'The world as collage' },
  sub: { zh: '一个个随机的角度', en: 'a pile of random angles' },
  intro: { zh: '没什么系统的路线，凑着凑着成了一张拼图。', en: 'No systematic route. The pieces just added up.' },
  prompt: { zh: '点一块', en: 'pick a piece' },
  pieces: [
    {
      key: 'tibetan',
      title: { zh: '藏传佛教', en: 'Tibetan Buddhism' },
      hook: { zh: '从义县大佛寺，到尼泊尔的山顶', en: 'from the Big Buddha at home to a Nepali mountaintop' },
      notes: [
        { id: 'tibetan-a', art: 'temple', caption: { zh: '义县大佛寺，小时候只当是「我们那儿的庙」', en: 'The Big Buddha at home. Growing up it was just "our temple".' } },
        { id: 'tibetan-b', art: 'painting', caption: { zh: '长大了才在自己家门口当了回游客', en: 'Took until now to be a tourist on my own doorstep.' } },
        { id: 'tibetan-c', art: 'mountains', caption: { zh: '几千公里外的山顶，同一支藏传佛教', en: 'A mountaintop thousands of km away. Same lineage.' } },
        { id: 'tibetan-d', art: 'speech', caption: { zh: '掏出手机，给老喇嘛看我故乡的照片', en: 'Pulled out my phone, showed the old lama photos of home.' } },
        { id: 'tibetan-e', art: 'hair', caption: { zh: '小姑娘、老喇嘛、我奶奶：都嫌弃我的头发', en: 'The girl, the lama, my grandma: all disliked my hair.' } },
        { id: 'tibetan-f', art: 'scarf', caption: { zh: '边境 bazaar 只剩一个摊，买了条当地女性组织做的围巾', en: "Border bazaar down to one stall. Bought a scarf from a women's org." } },
      ],
    },
    {
      key: 'spain',
      title: { zh: '强烈的西班牙', en: 'Intense Spain' },
      shortTitle: { zh: '西班牙', en: 'Spain' },
      hook: { zh: '不知道为什么，这里的东西都直戳心灵', en: 'somehow everything here goes straight through you' },
      notes: [
        { id: 'spain-a', art: 'church', caption: { zh: '圣家堂一种 intense，中世纪教堂另一种', en: 'Sagrada Família: one intense. Medieval churches: another.' } },
        { id: 'spain-b', art: 'painting', caption: { zh: '格尔尼卡，和对面抱着孩子哭的女人', en: 'Guernica, and the weeping woman across from it.' } },
        { id: 'spain-c', art: 'painting', caption: { zh: '戈雅的农神，不敢看', en: "Goya's Saturn. Couldn't look." } },
        { id: 'spain-d', art: 'sparkle', caption: { zh: '弗拉门戈：小说里写的那种萨满', en: 'Flamenco: the shamanic hit novels describe.' } },
      ],
    },
    {
      key: 'korea',
      title: { zh: '韩国', en: 'Korea' },
      hook: { zh: '离得最近的一面镜子，也最有可比性', en: 'the closest mirror, and the most comparable' },
      notes: [
        { id: 'korea-a', art: 'odd', caption: { zh: '很多视角和中国更相近，所以更好对照', en: 'So many angles run close to China. Easy to compare.' } },
        { id: 'korea-b', art: 'painting', caption: { zh: '我习惯站在「被侵略」那一边看历史', en: 'I grew up reading history from the invaded side.' } },
        { id: 'korea-c', art: 'temple', caption: { zh: '在这儿，我们是「宗主国」那一边', en: 'Here, we are the suzerain side of the story.' } },
        { id: 'korea-d', art: 'speech', caption: { zh: '她身边的人怕「不一样」，我一直觉得与众不同挺好', en: 'People around her fear differing. I always liked being different.' } },
      ],
    },
    {
      key: 'planetree',
      title: { zh: '悬铃木的四季', en: 'Plane trees, four seasons' },
      shortTitle: { zh: '悬铃木', en: 'Plane trees' },
      hook: { zh: '同一种树，跟着我换了好几个城市', en: 'one kind of tree, city after city' },
      notes: [
        { id: 'planetree-spring', art: 'tree', caption: { zh: '春天，新叶刚冒头', en: 'Spring: new leaves just out.' } },
        { id: 'planetree-dusk', art: 'sparkle', caption: { zh: '傍晚，和路灯一起亮', en: 'Dusk: lit up with the street lamp.' } },
        { id: 'planetree-winter', art: 'tree', caption: { zh: '冬天剪成光秃秃的样子', en: 'Winter: pruned down to bare arms.' } },
        { id: 'planetree-bark', art: 'painting', caption: { zh: '树皮永远是那身迷彩', en: 'The bark always wears the same camo.' } },
        { id: 'planetree-hug', art: 'heart', caption: { zh: '忍不住抱一下', en: 'Had to hug one.' } },
      ],
    },
  ],
} as const;

/* ----------------------------- 共居社区 ----------------------------- */

export const coliving = {
  heading: { zh: '共居社区', en: 'Co-living' },
  sub: { zh: '大理 · 西班牙乡间 · 首尔', en: 'Dali · rural Spain · Seoul' },
  paragraphs: [
    {
      zh: '我们在大理、西班牙乡间、首尔都住过共居社区。它既是认识世界各地的人的窗口，也是理解当地的一种方式。',
      en: 'We stayed in co-living communities in Dali, rural Spain, and Seoul. Each one is a window onto people from everywhere, and a way into the local place itself.',
    },
    {
      zh: '西班牙乡村那个，长期支持欧洲青年回乡共建新农村。我们在的时候，他们用一周办了个黑客松，做了个村子水表系统的应用，很实用。',
      en: 'The Spanish one has spent years helping young Europeans move back and rebuild their villages. While we were there they ran a week-long hackathon, and shipped a genuinely useful app for the village water meters.'
    },
    {
      zh: '「地方」和「人」，是可以被技术认真对待的。',
      en: 'Places and people can be taken seriously by technology.',
    },
  ],
  note: {
    zh: '三个社区的详细对比，之后会单独写一篇 → 待续',
    en: 'A fuller three-way comparison is coming as its own piece → to be continued',
  },
} as const;

/* ----------------------------- 向善的位置 ----------------------------- */

export const good = {
  heading: { zh: '从技术视角，看向善的位置', en: 'Where a tech person fits in doing good' },
  blocks: [
    {
      key: 'start',
      title: { zh: '我从哪里开始？', en: 'Where I started' },
      bullets: [
        { zh: '不用技术的：难民支持、户外无障碍', en: 'No tech: refugee support, outdoor accessibility' },
        { zh: '找公司里做这些事的人聊', en: 'Interviews inside for-profit companies' },
        {
          zh: '用技术的：益盒、Digital Aid Seattle',
          en: 'With tech: CharityBox, Digital Aid Seattle',
        },
      ],
    },
    {
      key: 'observe',
      title: { zh: '我的观察', en: 'What I saw' },
      bullets: [
        { zh: '盈利公司内部也在向善', en: 'For-profit companies do good too' },
        {
          zh: '多数场景，现成工具就够用，技术只是辅助',
          en: 'Mostly, off-the-shelf tools are enough; tech just assists',
        },
        {
          zh: '技术主导的项目也有，不多，合适就值得做',
          en: 'Tech-led ones exist. Not many, but worth it when they fit',
        },
      ],
    },
    {
      key: 'position',
      title: { zh: '我对自己位置的判断', en: 'My own position' },
      lead: { zh: '非全职 · 长期参与', en: 'not full-time · long-term' },
      bullets: [
        { zh: '本职：做力所能及的「好」产品', en: 'Day job: the best "good" product within reach' },
        { zh: '项目：短期高强度，或长期轻参与', en: 'Projects: short and intense, or long and light' },
        { zh: '咨询：给技术判断和经验', en: 'Advising: technical judgment and experience' },
        { zh: '持续捐款', en: 'Keep donating' },
      ],
    },
  ],
  voiceLabel: { zh: '多说两句', en: 'hear me out' },
  voice: [
    {
      lead: { zh: '先从熟悉的地方找', en: 'starting where I knew' },
      text: {
        zh: '户外公益帮残障人士骑行、滑雪，想过推广到国内、把设备成本打下来，后来发现我不是最合适的人。难民支持想做点工具，因为制度变化停了。',
        en: 'Outdoor accessibility - helping disabled folks ride and ski. I thought about bringing it to China and cutting equipment costs, then admitted I was not the right person. Refugee tooling stopped when the policy changed.',
      },
    },
    {
      lead: { zh: '公司里也有人在做', en: 'people inside companies' },
      text: {
        zh: '有人长期支持教育项目，有人做职业咨询，有人在会议里插播乳腺癌防治科普。一起工作很多年，不聊我完全不知道。',
        en: 'One supports education projects, one does career counseling, one slips breast-cancer PSAs into meetings. Years working together and I had no idea.',
      },
    },
    {
      lead: { zh: '有激励就有能力', en: 'incentives unlock scale' },
      text: {
        zh: '部门层面也有：碳影响追踪、物流对社区的影响、无障碍标准。制度激励清晰的时候，盈利公司是真能推动很大的事的。',
        en: 'At the org level too: carbon tracking, warehouse-community impact, accessibility standards. With clear incentives, a for-profit really can move big things.',
      },
    },
    {
      lead: { zh: '益盒很特别', en: 'CharityBox is special' },
      text: {
        zh: '第一次做产品能这么直观地感觉到用户。看捐赠记录会被感动：有人调高了月捐，我就想，哦，是不是最近涨工资了，然后还想到了我们。呜呜呜。',
        en: 'The first product where users feel completely real to me. Reading donation records gets me: someone raises their monthly amount and I think, oh, did they get a raise? And they thought of us. 呜呜呜.',
      },
    },
    {
      lead: { zh: '走完一圈', en: 'after the loop' },
      text: {
        zh: '公益不适合当我全职的职业，但会是长期参与的方向。这样我能做很多年。',
        en: 'Charity is not my full-time career, but it is my long-term lane. Shaped like this I can keep at it for years.',
      },
    },
  ],
} as const;

/* ----------------------------- 重新认识彼此 ----------------------------- */

export const family = {
  heading: { zh: '重新认识彼此', en: 'Getting to know each other again' },
  sub: { zh: '三代人的不同课题', en: 'three generations, three different questions' },
  rows: [
    {
      key: 'g90',
      num: '90+',
      title: { zh: '面对离别', en: 'facing goodbye' },
      paragraphs: [
        {
          zh: '我没那么抗拒他们准备身后事了，只想多陪陪，多攒点好回忆。',
          en: 'I no longer flinch when they plan for the end. I just want more time together, more good memories.',
        },
      ],
      bullets: [
        { zh: '爷爷有个小本子，记着各种事，包括我所有的前男友', en: "Grandpa's little notebook logs everything, my ex-boyfriends included" },
        { zh: '手抖写不了毛笔字，就天天去公园唱歌，还是家里唯一不跑调的', en: 'Too shaky for calligraphy, so he sings in the park daily. Only one of us in tune' },
        { zh: '奶奶 89 岁重新拿回了家里的财政大权', en: 'Grandma took back the household finances at 89' },
        { zh: '90 岁了，还会为抢电视吵架', en: 'At 90, still fighting over the TV' },
      ],
      closing: {
        zh: '老去不是一条直线，还是很有生命力的。',
        en: 'Old age is not a straight line down. It is still full of life.',
      },
    },
    {
      key: 'g60',
      num: '60+',
      title: { zh: '初老与重新展开', en: 'early old age, opening up again' },
      paragraphs: [
        {
          zh: '爸妈在适应身体的变化，也在学怎么退休。我妈反而正在高度展开期：',
          en: 'My parents are adjusting to their bodies and learning how to retire. My mom is in a full expansion phase:',
        },
      ],
      bullets: [
        { zh: '前几个月学手机摄影', en: 'phone photography a few months back' },
        { zh: '后来说要写自传', en: 'then an autobiography' },
        { zh: '上周用 90 年代结婚的被面，做了两床特别漂亮的新被子', en: "last week, two gorgeous quilts from their 1990s wedding covers" },
      ],
      closing: {
        zh: '五月和我妈在云南走了一段。现在离得远，就远程搭把手。有时候觉得像在看一个后辈成长。',
        en: 'In May my mom and I traveled Yunnan together. From far away now, I lend a hand remotely. Sometimes it feels like watching a younger person grow up.',
      },
    },
    {
      key: 'g30',
      num: '30+',
      title: { zh: '在有限中选择', en: 'choosing within limits' },
      paragraphs: [
        {
          zh: '我们这代三十多岁，课题是在有限的时间、精力和条件里做选择：',
          en: 'Our generation, in our thirties, chooses inside limits of time, energy and circumstance:',
        },
      ],
      bullets: [
        { zh: '在哪里生活', en: 'where to live' },
        { zh: '要不要换一条路', en: 'whether to switch paths' },
        { zh: '要不要承担风险', en: 'whether to take the risk' },
      ],
    },
  ],
} as const;

/* ------------------- 施工中的三章（占位，逐节设计时填充） ------------------- */

export const startup = {
  heading: { zh: '创业实验中', en: 'Startup, mid-experiment' },
  entries: [
    { zh: 'Founder Institute', en: 'Founder Institute' },
    { zh: 'Atolla', en: 'Atolla' },
    { zh: '一人公司社区', en: 'one-person-company community' },
  ],
  note: { zh: '实验记录中，之后来写。', en: 'Experiment log in progress - coming later.' },
} as const;

export const ledger = {
  heading: { zh: 'Gap 的账本', en: 'The ledger of the gap' },
  costTitle: { zh: '花掉的', en: 'What it cost' },
  costs: [
    {
      zh: '实际花销：数字还没算完，算完填这里',
      en: 'Actual spend: still adding it up - real numbers go here',
    },
    {
      zh: '机会成本：两年没拿的工资，先不细算了',
      en: 'Opportunity cost: two years of salary not earned - not doing that math yet',
    },
  ],
  challengeTitle: { zh: '变重的', en: 'What got heavy' },
  challenges: [
    {
      zh: 'routine 建立不起来：每换一个地方，作息就重来一遍',
      en: 'Routines never stick: every new place resets the clock',
    },
    {
      zh: '交到朋友，然后一次次离开他们',
      en: 'Making friends, then leaving them, again and again',
    },
    {
      zh: '生命中不可承受之轻：轻了太久，有些东西反而变重了。焦虑，还有家人的压力',
      en: 'The unbearable lightness of being: when life stays light for too long, some things start to get heavy - anxiety, and pressure from family',
    },
  ],
  note: { zh: '细节还在整理，之后慢慢补。', en: 'Details still being sorted - more to come.' },
} as const;

export const qa = {
  heading: { zh: '快问快答', en: 'Quick Q&A' },
  teasers: [
    { zh: '最想定居在哪里？', en: 'Where would you settle?' },
    { zh: '后悔吗？', en: 'Any regrets?' },
    { zh: '接下来呢？', en: "What's next?" },
  ],
  note: { zh: '问题征集中。', en: 'Collecting questions.' },
} as const;

/**
 * Resume section content.
 *
 * The section is a compact read for people arriving from LinkedIn or the PDF:
 * depth lives in the project pages and the PDF, so each role gets a line or
 * two. Wording mirrors the 2026-10-02 resume and LinkedIn; change it there
 * first, then here.
 *
 * Titles separate their parts with " · " so a narrow screen can break the
 * line between parts instead of inside one. Body text marks highlighted
 * phrases as **like this**; Ming picks them.
 */
import { type BilingualText } from "@/lib/types";

export interface ResumeLink {
    label: BilingualText;
    href: string;
}

/** One line of the resume: dates (or a label) on the left, the role on the right. */
export interface ResumeRow {
    /** A date range, or a label such as "Across orgs" where the dates would go. */
    when: BilingualText;
    /** Role · organisation. */
    title?: BilingualText;
    body?: BilingualText;
    link?: ResumeLink;
}

export interface ResumeDegree {
    /** Degree · school. */
    title: BilingualText;
    year: string;
}

export interface ResumeCard {
    /** An employer heading that groups the rows below it. */
    heading?: {
        when: BilingualText;
        title: BilingualText;
        note: BilingualText;
    };
    rows: ResumeRow[];
    education?: {
        when: BilingualText;
        degrees: ResumeDegree[];
    };
}

export const RESUME_SUMMARY: { title: BilingualText; body: BilingualText; location: BilingualText } = {
    title: {
        en: "AI Engineer, Data & ML Platforms · Ex-Amazon Tech Lead · Founder, Atolla Ocean",
        zh: "AI 工程师 · 数据与机器学习平台 · 前亚马逊技术负责人 · Atolla Ocean 创始人",
    },
    body: {
        en: "**10+ years** turning messy data into clear architecture, reliable pipelines and products **in production**. Strongest at **zero-to-one** work out of ambiguity, **then scaling it**, translating between engineers, scientists and product.",
        zh: "**十年以上**经验，把杂乱的数据变成清晰的架构、可靠的数据管道和**真正上线**的产品。最擅长在模糊中**从零到一**，**再把它做大**；在工程师、科学家和产品之间搭桥。",
    },
    location: { en: "Seattle, WA", zh: "美国华盛顿州西雅图" },
};

export const RESUME_CARDS: ResumeCard[] = [
    // Now: the startup and the pro-bono work
    {
        rows: [
            {
                when: { en: "Jan 2026 – now", zh: "2026年1月 – 至今" },
                title: { en: "Founder · Atolla Ocean", zh: "创始人 · Atolla Ocean" },
                body: {
                    en: "A **multimodal AI pipeline** that turns divers' video into highlight clips and a digital aquarium. Vision models, **LLM enrichment**, and **evals** on performance, latency and cost. **Built solo from zero**; used by other divers.",
                    zh: "一条**多模态 AI 流水线**，把潜水者的视频变成精彩片段和数字水族馆。视觉模型、**LLM 增强**，以及覆盖效果、延迟和成本的**评测**。**独自从零搭建**，已有其他潜水者在用。",
                },
                link: {
                    label: { en: "See the Atolla project", zh: "看看 Atolla 项目" },
                    href: "/projects/atolla-ocean",
                },
            },
            {
                when: { en: "Jan 2025 – now", zh: "2025年1月 – 至今" },
                title: { en: "Sole Engineer, pro bono · CharityBox (益盒)", zh: "唯一工程师（无偿）· 益盒 CharityBox" },
                body: {
                    en: "**Full-stack owner** of an effective-giving platform in China, driving its **AI transformation**. Brought two contractor builds in-house; built the **agent harness** the team works through.",
                    zh: "**全栈负责**一个中国的有效公益平台，推动机构的 **AI 转型**。把两个外包项目收回自建；搭建了团队日常运作所依托的 **agent harness**。",
                },
                link: {
                    label: { en: "Read One Day a Week", zh: "读「每周一天」" },
                    href: "/blog/one-day-a-week",
                },
            },
        ],
    },

    // Amazon, by team
    {
        heading: {
            when: { en: "Oct 2017 – Dec 2024", zh: "2017年10月 – 2024年12月" },
            title: { en: "Amazon · Seattle", zh: "亚马逊 · 西雅图" },
            note: {
                en: "Promoted to DE III and tech lead in Oct 2020.",
                zh: "2020 年 10 月晋升为数据工程师 III，并任技术负责人。",
            },
        },
        rows: [
            {
                when: { en: "Feb 2024 – Dec 2024", zh: "2024年2月 – 2024年12月" },
                title: {
                    en: "Senior Data Engineer (Tech Lead) · Data Platform",
                    zh: "高级数据工程师（技术负责人）· 数据平台",
                },
                body: {
                    en: "A 5-engineer team serving a **200+ person org** of strategists, scientists and economists. Ran the **warehouse** and built **lakehouse** systems and self-serve tools.",
                    zh: "5 人团队，服务一个 **200 多人的组织**，成员来自策略、科学和经济学背景。负责**数据仓库**运维，搭建**湖仓**系统和自助工具。",
                },
            },
            {
                when: { en: "Feb 2021 – Jan 2024", zh: "2021年2月 – 2024年1月" },
                title: {
                    en: "Senior Data Engineer (Tech Lead) · Full-Stack ML Product",
                    zh: "高级数据工程师（技术负责人）· 全栈机器学习产品",
                },
                body: {
                    en: "**Founding engineer** of a zero-to-one internal product, later leading 6, mostly software engineers. Built the stack from 5 data vendors through a **knowledge graph** to **search and ranking APIs**; ran batch and near-real-time **models in production**.",
                    zh: "一个从零到一的内部产品的**创始工程师**，后来带 6 人团队，以软件工程师为主。搭建整套技术栈：从 5 家数据供应商，经**知识图谱**，到**搜索与排序 API**；批量和准实时模型**在生产环境运行**。",
                },
            },
            {
                when: { en: "Jan 2019 – Jan 2021", zh: "2019年1月 – 2021年1月" },
                title: {
                    en: "Senior Data Engineer (Tech Lead) · ML Data Platform",
                    zh: "高级数据工程师（技术负责人）· 机器学习数据平台",
                },
                body: {
                    en: "Built it from zero for training models on **restricted-tier customer data**, then worked on its org-wide ML-system design. **Continuous-training pipeline**: labeling, retraining, golden-set evaluation, drift monitoring.",
                    // "restricted-tier" stays in English, unexplained, by Ming's rule.
                    zh: "从零搭建，用于在 **restricted-tier 客户数据**上训练模型，之后参与其全组织的机器学习系统设计。**持续训练流水线**：标注、重训、黄金集评测、漂移监控。",
                },
            },
            {
                when: { en: "Across orgs", zh: "跨组织" },
                body: {
                    en: "Led **privacy and security reviews**; hiring loops, mentoring and AWS cost optimization.",
                    zh: "主导**隐私与安全审查**；招聘面试、带新人和 AWS 成本优化。",
                },
            },
            {
                when: { en: "Oct 2017 – Dec 2018", zh: "2017年10月 – 2018年12月" },
                title: {
                    en: "Business Intelligence Engineer · Amazon Kids+",
                    zh: "商业智能工程师 · 亚马逊 Kids+",
                },
                body: {
                    en: "**Redshift data models**, curated datasets and self-serve dashboards for product, marketing and finance.",
                    zh: "为产品、市场和财务团队搭建 **Redshift 数据模型**、整理好的数据集和自助看板。",
                },
            },
        ],
    },

    // Before Amazon, and school
    {
        rows: [
            {
                when: { en: "Feb 2015 – Sep 2017", zh: "2015年2月 – 2017年9月" },
                title: {
                    en: "Senior Data Analyst · Universal McCann Worldwide",
                    zh: "高级数据分析师 · Universal McCann Worldwide",
                },
                body: {
                    en: "Marketing-mix and Bayesian models for media budgets. Self-serve ETL and data-quality tools: 90% faster workflows, about 80% fewer errors. Promoted in 2017.",
                    zh: "用于媒体预算的营销组合与贝叶斯模型。自助式 ETL 与数据质量工具：流程快 90%，错误减少约 80%。2017 年晋升。",
                },
            },
        ],
        education: {
            when: { en: "Education", zh: "教育" },
            degrees: [
                {
                    title: { en: "MA, Statistics · Columbia University", zh: "统计学硕士 · 哥伦比亚大学" },
                    year: "2015",
                },
                {
                    title: {
                        en: "Bachelor of Economics, Statistics (Minor: Mathematics) · Xiamen University",
                        zh: "经济学学士（统计学，辅修数学）· 厦门大学",
                    },
                    year: "2013",
                },
            ],
        },
    },
];

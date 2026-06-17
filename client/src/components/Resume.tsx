import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Globe, Calendar, Waves, Building, ArrowLeft, GraduationCap } from "lucide-react";
import AmazonLogo from "../../../attached_assets/logos/logo_amazon.png";
import ColumbiaLogo from "../../../attached_assets/logos/logo_columbia.png";
import XiamenLogo from "../../../attached_assets/logos/logo_xiamen_university.png";
import UMLogo from "../../../attached_assets/logos/logo_um.png";
import { getBilingualText } from "@/lib/utils";
import { LANGUAGES } from "@/lib/constants";
import { type Language, type BilingualText } from "@/lib/types";

// Served from client/public — replace this file to update the downloadable resume.
const RESUME_PDF_URL = "/Mingyun_Guan_Resume.pdf";

interface ResumeProps {
  language: Language;
  isDark?: boolean;
}

const resumeData = {
  profile: {
    headline: {
      en: "Data Platform & ML Engineer · Founder, Atolla Ocean · Ex-Amazon",
      zh: "数据平台与机器学习工程师 · Atolla Ocean 创始人 · 前亚马逊",
    },
    subhead: {
      en: "End-to-end systems builder with 10+ years across data infrastructure, ML engineering, and analytics. I lead zero-to-one projects from architecture through production, mentor engineers, and bridge product, data science, and engineering — known for owning outcomes, not just pipelines.",
      zh: "拥有 10 年以上经验的端到端系统构建者，横跨数据基础设施、机器学习工程与数据分析。擅长从架构到生产主导从零到一的项目，培养工程师，并在产品、数据科学与工程团队之间搭建桥梁——专注于交付成果，而不仅仅是数据管道。",
    },
    location: {
      en: "Seattle, WA",
      zh: "美国华盛顿州西雅图",
    },
  },

  highlights: {
    en: [
      "Founder of Atolla Ocean — building an AI platform that turns recreational divers' footage into marine-life identification and structured, educational dive stories.",
      "10+ years shipping zero-to-one data/ML systems end to end (prototype ~3mo, public beta ~11mo).",
      "Architected full data/ML stacks: multi-source ingestion → knowledge graph → trend detection → APIs & OpenSearch ranking.",
      "Deployed 5 batch ML models with near-real-time ranking on SageMaker + CI/CD; integrated 5+ external data providers into an S3/Glue/Snowflake/Redshift/Athena lakehouse.",
      "IC tech lead: led a 6-engineer team, org-level security/privacy reviews, hiring, mentoring, and AWS cost efficiency.",
      "Founder Institute 2025 cohort; exploring computer vision for marine-species identification from real diver media.",
    ],
    zh: [
      "Atolla Ocean 创始人——打造一款 AI 平台，将休闲潜水者的水下影像转化为海洋生物识别与结构化的科普潜水故事。",
      "10 年以上从零到一交付数据 / 机器学习系统的端到端经验（约 3 个月出原型，约 11 个月上线公测）。",
      "设计完整的数据 / 机器学习架构：多源数据接入 → 知识图谱 → 趋势检测 → API 与 OpenSearch 排序。",
      "部署 5 个批量机器学习模型并实现准实时排序（SageMaker + CI/CD）；将 5+ 外部数据源集成进 S3/Glue/Snowflake/Redshift/Athena 数据湖仓。",
      "作为技术负责人：带领 6 人工程团队，主导组织级安全与隐私审查、招聘、指导及 AWS 成本优化。",
      "Founder Institute 2025 学员；探索基于真实潜水影像的海洋物种计算机视觉识别。",
    ],
  },

  experience: [
    {
      company: {
        en: "Atolla Ocean",
        zh: "Atolla Ocean",
      },
      title: {
        en: "Founder",
        zh: "创始人",
      },
      period: {
        en: "Nov 2025 – Present",
        zh: "2025年11月 – 至今",
      },
      location: {
        en: "Seattle & China",
        zh: "西雅图与中国",
      },
      bullets: {
        en: [
          "Building an AI platform that helps recreational divers identify marine life and turn raw dive footage into structured, educational stories.",
          "Defining product direction, user experience, and validation strategy from zero; running user interviews and discovery as part of the Founder Institute 2025 cohort.",
          "Exploring computer vision and ML for species identification using real diver media; prototyping early MVP concepts end to end.",
        ],
        zh: [
          "打造一款 AI 平台，帮助休闲潜水者识别海洋生物，并将原始潜水影像转化为结构化的科普故事。",
          "从零定义产品方向、用户体验与验证策略；作为 Founder Institute 2025 学员开展用户访谈与需求探索。",
          "基于真实潜水影像探索计算机视觉与机器学习的物种识别方法；端到端打造早期 MVP 原型。",
        ],
      },
    },
    {
      company: {
        en: "Amazon",
        zh: "亚马逊",
      },
      title: {
        en: "Senior Data Engineer (Tech Lead)",
        zh: "高级数据工程师（技术负责人）",
      },
      subtitle: {
        en: "Progressed DE II → DE III; IC Tech Lead across Strategic Business Trends and Customer Service ML.",
        zh: "从数据工程师 II 晋升至 III；担任技术负责人，横跨战略业务趋势与客户服务机器学习团队。",
      },
      period: {
        en: "Jan 2019 – Dec 2024",
        zh: "2019年1月 – 2024年12月",
      },
      duration: {
        en: "6 yrs",
        zh: "6年",
      },
      location: {
        en: "Seattle, WA",
        zh: "美国西雅图",
      },
      bullets: {
        en: [
          "Led a 6-engineer team delivering a zero-to-one internal web product with ML backends — prototype in ~3 months, public beta in ~11 months.",
          "Architected the full data/ML stack: multi-source ingestion → knowledge graph → trend detection → APIs and OpenSearch-based ranking.",
          "Built and deployed 5 batch ML models with near-real-time ranking via SageMaker and CI/CD.",
          "Integrated 5+ external data providers into an S3 + Glue + Snowflake + Redshift + Athena lakehouse; designed schemas, metadata layers, and data-quality monitoring.",
          "Designed NLP pipelines for contact classification with inter-day latency; built defect-detection workflows using AutoGluon and deep learning.",
          "Led org-level privacy/security reviews, hiring loops, onboarding, and AWS cost efficiency.",
        ],
        zh: [
          "带领 6 人工程团队交付从零到一的内部 Web 产品及其机器学习后端——约 3 个月出原型，约 11 个月上线公测。",
          "设计完整的数据 / 机器学习架构：多源数据接入 → 知识图谱 → 趋势检测 → API 与基于 OpenSearch 的排序。",
          "构建并部署 5 个批量机器学习模型，通过 SageMaker 与 CI/CD 实现准实时排序。",
          "将 5+ 外部数据源集成进 S3 + Glue + Snowflake + Redshift + Athena 数据湖仓；设计数据模式、元数据层与数据质量监控。",
          "设计客户联系分类的 NLP 管道（跨日延迟）；使用 AutoGluon 与深度学习构建缺陷检测流程。",
          "主导组织级隐私与安全审查、招聘流程、新人培养及 AWS 成本优化。",
        ],
      },
    },
    {
      company: {
        en: "Amazon",
        zh: "亚马逊",
      },
      title: {
        en: "Business Intelligence Engineer — Amazon Kids+",
        zh: "商业智能工程师 — Amazon Kids+",
      },
      period: {
        en: "Oct 2017 – Dec 2018",
        zh: "2017年10月 – 2018年12月",
      },
      duration: {
        en: "1 yr 3 mos",
        zh: "1年3个月",
      },
      location: {
        en: "Seattle, WA",
        zh: "美国西雅图",
      },
      bullets: {
        en: [
          "Designed scalable Redshift data models and analytical foundations for product, marketing, and finance.",
          "Built self-serve dashboards enabling non-technical teams to explore data independently; delivered analyses shaping pricing strategy and UX decisions.",
        ],
        zh: [
          "为产品、营销与财务团队设计可扩展的 Redshift 数据模型与分析基础。",
          "构建自助式仪表盘，使非技术团队能够独立探索数据；交付的分析影响了定价策略与用户体验决策。",
        ],
      },
    },
    {
      company: {
        en: "Universal McCann Worldwide",
        zh: "Universal McCann Worldwide",
      },
      title: {
        en: "Senior Data Analyst",
        zh: "高级数据分析师",
      },
      promotion: {
        en: "promoted from Data Analyst",
        zh: "从数据分析师晋升",
      },
      period: {
        en: "Feb 2015 – Sep 2017",
        zh: "2015年2月 – 2017年9月",
      },
      duration: {
        en: "2 yrs 8 mos",
        zh: "2年8个月",
      },
      location: {
        en: "New York, NY",
        zh: "美国纽约",
      },
      bullets: {
        en: [
          "Built marketing-mix and Bayesian models to measure media impact and optimize budgets.",
          "Designed self-serve ETL and data-quality tools — 90% faster workflows, ~80% fewer errors.",
        ],
        zh: [
          "构建营销组合（MMM）与贝叶斯模型，衡量媒体投放效果并优化预算。",
          "设计自助式 ETL 与数据质量工具——效率提升 90%，错误率下降约 80%。",
        ],
      },
    },
  ],

  independent: {
    sectionTitle: {
      en: "Independent & Volunteer",
      zh: "独立项目与志愿服务",
    },
    role: {
      en: "Sole Engineer & AI Advisor",
      zh: "唯一工程师与 AI 顾问",
    },
    org: {
      en: "CharityBox (益盒)",
      zh: "益盒 CharityBox",
    },
    type: {
      en: "Volunteer",
      zh: "志愿",
    },
    period: {
      en: "Jan 2025 – Present",
      zh: "2025年1月 – 至今",
    },
    location: {
      en: "Remote",
      zh: "远程",
    },
    bullets: {
      en: [
        "Only technical contributor to a WeChat-based platform making 1%-income giving simple and transparent across China — owning full-stack development end to end.",
        "Leading the organization's AI transformation: building internal tools and providing strategic guidance on AI adoption.",
        "Built an automated operational data pipeline integrating multiple sources via Feishu to support reporting and program management.",
      ],
      zh: [
        "作为唯一的技术贡献者，为一款微信平台开发——让「捐出 1% 收入」变得简单透明，覆盖全中国，端到端负责全栈开发。",
        "主导机构的 AI 转型：搭建内部工具并就 AI 落地提供战略指导。",
        "通过飞书构建自动化运营数据管道，整合多方数据源，支撑报告与项目管理。",
      ],
    },
  },

  skills: {
    core: {
      en: ["Pipelines & orchestration", "Data modeling", "MLOps (SageMaker, CI/CD)", "Knowledge graphs", "API design"],
      zh: ["数据管道与编排", "数据建模", "MLOps（SageMaker, CI/CD）", "知识图谱", "API 设计"],
    },
    platforms: {
      en: ["AWS", "Redshift", "Athena", "S3", "Glue", "Lambda", "Step Functions", "SageMaker", "OpenSearch", "CDK", "Snowflake", "Spark"],
      zh: ["AWS", "Redshift", "Athena", "S3", "Glue", "Lambda", "Step Functions", "SageMaker", "OpenSearch", "CDK", "Snowflake", "Spark"],
    },
    languages: {
      en: ["Python", "SQL", "TypeScript", "JavaScript", "Git"],
      zh: ["Python", "SQL", "TypeScript", "JavaScript", "Git"],
    },
    analytics: {
      en: ["Tableau", "Metrics & experimentation", "A/B testing", "Data visualization"],
      zh: ["Tableau", "指标与实验设计", "A/B 测试", "数据可视化"],
    },
    leadership: {
      en: ["IC tech lead", "Cross-functional communication", "Mentoring", "Security & privacy reviews"],
      zh: ["技术负责人", "跨职能沟通", "指导与培养", "安全与隐私审查"],
    },
  },

  education: [
    {
      school: {
        en: "Columbia University",
        zh: "哥伦比亚大学",
      },
      degree: {
        en: "Master of Arts, Statistics",
        zh: "统计学硕士",
      },
      year: "2015",
    },
    {
      school: {
        en: "Xiamen University",
        zh: "厦门大学",
      },
      degree: {
        en: "Bachelor of Economics, Statistics (Minor: Mathematics)",
        zh: "经济学学士（统计学），辅修数学",
      },
      year: "2013",
    },
  ],
};

export default function Resume({ language, isDark = false }: ResumeProps) {
  return (
    <section className="py-16 px-6 resume-bg" id="resume">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-resume-title">
            {getBilingualText({ en: 'Resume', zh: '简历' }, language)}
          </h2>
          <p className="text-lg mb-6 text-muted-foreground" data-testid="text-resume-description">
            {getBilingualText({
              en: 'A comprehensive overview of my professional experience and skills.',
              zh: '我的职业经历和技能的全面概述。'
            }, language)}
          </p>
          <Button
            asChild
            className="hover-elevate"
            data-testid="button-download-resume"
            style={{
              backgroundColor: 'hsl(var(--graphite-gray))',
              color: 'white',
              borderColor: 'hsl(var(--graphite-gray))'
            }}
          >
            <a href={RESUME_PDF_URL} download="Mingyun_Guan_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              {getBilingualText({ en: 'Download PDF', zh: '下载 PDF' }, language)}
            </a>
          </Button>
        </div>

        {/* Profile Block */}
        <Card className="mb-8 resume-card">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-foreground">
                {getBilingualText(resumeData.profile.headline, language)}
              </h2>
              <p className="text-base text-muted-foreground">
                {getBilingualText(resumeData.profile.subhead, language)}
              </p>
              {resumeData.profile.location && (
                <div className="text-sm flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 opacity-70" aria-hidden />
                  <span>{getBilingualText(resumeData.profile.location, language)}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card className="mb-8 resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              {getBilingualText({ en: 'Key Highlights', zh: '核心亮点' }, language)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {(resumeData.highlights?.[language] ?? resumeData.highlights.en).map((h: string, index: number) => (
                <li key={index} className="text-muted-foreground">{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground" data-testid="text-experience-title">
              {getBilingualText({ en: 'Experience', zh: '工作经历' }, language)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div key={exp.company.en + exp.period.en} className="space-y-1" data-testid={`experience-${index}`}>
                <h3 className="font-medium text-foreground" data-testid={`text-job-title-${index}`}>
                  {getBilingualText(exp.title, language)}
                  {exp.promotion && (
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      ({getBilingualText(exp.promotion, language)})
                    </span>
                  )}
                </h3>
                <div className="text-sm flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {exp.company.en === "Amazon" ? (
                      <img src={AmazonLogo} alt="Amazon" className="h-6 w-6 object-contain flex-shrink-0" />
                    ) : exp.company.en === "Universal McCann Worldwide" ? (
                      <img src={UMLogo} alt="Universal McCann" className="h-6 w-6 object-contain flex-shrink-0" />
                    ) : exp.company.en === "Atolla Ocean" ? (
                      <Waves className="h-6 w-6 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                    ) : (
                      <Building className="h-6 w-6 flex-shrink-0" />
                    )}
                    <span className="font-semibold text-base">{getBilingualText(exp.company, language)}</span>
                  </div>
                  <span className="hidden sm:inline">·</span>
                  <div className="flex flex-wrap items-center gap-x-1 gap-y-1 min-w-0">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{getBilingualText(exp.period, language)}</span>
                    {exp.duration && (
                      <>
                        <span>·</span>
                        <span>{getBilingualText(exp.duration, language)}</span>
                      </>
                    )}
                    {exp.location && (
                      <>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          {getBilingualText(exp.location, language)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {exp.subtitle && (
                  <p className="text-sm italic text-muted-foreground">
                    {getBilingualText(exp.subtitle, language)}
                  </p>
                )}
                <ul className="list-disc pl-5 space-y-1">
                  {(exp.bullets?.[language] ?? exp.bullets.en).map((bullet: string, bulletIndex: number) => (
                    <li key={bulletIndex} className="text-sm text-muted-foreground" data-testid={`text-achievement-${index}-${bulletIndex}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Independent & Volunteer */}
        <Card className="mb-8 resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              {getBilingualText(resumeData.independent.sectionTitle, language)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <h3 className="font-medium text-foreground">
                {getBilingualText(resumeData.independent.role, language)}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({getBilingualText(resumeData.independent.type, language)})
                </span>
              </h3>
              <div className="text-sm flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Building className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-base">{getBilingualText(resumeData.independent.org, language)}</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex flex-wrap items-center gap-x-1 gap-y-1 min-w-0">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>{getBilingualText(resumeData.independent.period, language)}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    {getBilingualText(resumeData.independent.location, language)}
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {(resumeData.independent.bullets?.[language] ?? resumeData.independent.bullets.en).map((bullet: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground" data-testid="text-skills-title">
              {getBilingualText({ en: 'Skills', zh: '技能' }, language)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm text-foreground" data-testid="text-core-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Core', zh: '核心' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.core?.[language] ?? resumeData.skills.core.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-core-skill-${index}`}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm text-foreground" data-testid="text-platforms-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Platforms', zh: '平台' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.platforms?.[language] ?? resumeData.skills.platforms.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    data-testid={`badge-platform-skill-${index}`}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm text-foreground" data-testid="text-languages-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Languages', zh: '语言' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.languages?.[language] ?? resumeData.skills.languages.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="default"
                    data-testid={`badge-language-skill-${index}`}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm text-foreground" data-testid="text-analytics-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Analytics', zh: '分析' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.analytics?.[language] ?? resumeData.skills.analytics.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-analytics-skill-${index}`}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm text-foreground" data-testid="text-leadership-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Leadership', zh: '领导力' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.leadership?.[language] ?? resumeData.skills.leadership.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    data-testid={`badge-leadership-skill-${index}`}
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground" data-testid="text-education-title">
              {getBilingualText({ en: 'Education', zh: '教育经历' }, language)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {resumeData.education.map((ed, index) => (
              <div key={ed.school.en} className="flex justify-between items-center" data-testid={`education-${index}`}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {ed.school.en === "Columbia University" && <img src={ColumbiaLogo} alt="Columbia University" className="h-6 w-6 object-contain" />}
                    {ed.school.en === "Xiamen University" && <img src={XiamenLogo} alt="Xiamen University" className="h-6 w-6 object-contain" />}
                    {ed.school.en !== "Columbia University" && ed.school.en !== "Xiamen University" && <GraduationCap className="h-6 w-6" />}
                    <p className="text-base font-semibold text-foreground" data-testid={`text-school-${index}`}>{getBilingualText(ed.school, language)}</p>
                    <span className="text-base text-muted-foreground">—</span>
                    <h4 className="font-medium text-base text-foreground" data-testid={`text-degree-${index}`}>{getBilingualText(ed.degree, language)}</h4>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground" data-testid={`text-year-${index}`}>{ed.year}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

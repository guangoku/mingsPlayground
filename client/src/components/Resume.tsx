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

interface ResumeProps {
  language: Language;
  isDark?: boolean;
}

const resumeData = {
  profile: {
    headline: {
      en: "Senior / Staff-level Data & ML Generalist",
      zh: "跨领域数据与机器学习工程师",
    },
    subhead: {
      en: "End-to-end systems builder — breadth in analytics, ML, and full stack; depth in data infrastructure. Fluent across PM, DS, and Eng.",
      zh: "端到端系统构建者 —— 覆盖分析、机器学习与全栈开发的广度，专长于数据基础设施。善于跨职能沟通，能与产品、数据科学及工程团队高效合作。",
    },
    location: {
      en: "Seattle-based, globally connected",
      zh: "常驻西雅图，全球合作",
    },
  },

  highlights: {
    en: [
      "Shipped zero-to-one data/ML backends (prototype ~3mo, beta ~11mo).",
      "Multi-source ingestion → S3 lake + Glue; onboarded 5+ data vendors.",
      "Deployed 5 batch ML models; near-real-time ranking with OpenSearch.",
      "Led security/privacy reviews; cost hygiene on AWS; mentored & hired.",
      "Earlier: NLP data pipelines, AutoGluon/deep learning, core BIE foundations.",
      "Started career in marketing statistical models; automated ETL & modeling (90% faster).",
    ],
    zh: [
      "主导交付从零到一的数据/机器学习后端（3 个月原型，11 个月测试版）。",
      "构建多源数据接入 → S3 数据湖与 Glue 目录，支持 5+ 外部数据供应商。",
      "部署 5 个批量机器学习模型；实现基于 OpenSearch 的准实时排序。",
      "主导安全与隐私审查；优化 AWS 成本；指导与招聘新人。",
      "早期经验包括自然语言处理数据管道、AutoGluon 深度学习模型、商业智能基础建设。",
      "职业起点于营销统计建模；开发自助 ETL 与建模工具（效率提升 90%）。",
    ],
  },

  experience: [
    {
      company: {
        en: "Amazon",
        zh: "亚马逊",
      },
      title: {
        en: "Data Engineer III (Tech Lead) — Strategic Business Trends",
        zh: "数据工程师 III（技术负责人） — 战略业务趋势团队",
      },
      period: {
        en: "Feb 2021 – Dec 2024",
        zh: "2021年2月 – 2024年12月",
      },
      duration: {
        en: "3 yrs 11 mos",
        zh: "3年11个月",
      },
      bullets: {
        en: [
          "Served as technical lead, leading a 6-engineer team to deliver zero-to-one web product with ML backends (prototype ~3mo, beta ~11mo).",
          "Architected ingestion → ML knowledge graph & trend detection → APIs/search.",
          "Built ingestion pipelines across APIs, Snowflake, S3, and Redshift into an S3 + Glue data lake; evaluated and integrated data from 5+ external providers.",
          "MLOps on SageMaker/CI-CD; deployed 5 batch models; near-real-time ranking.",
          "Led org security/privacy reviews; hiring, mentoring, AWS cost hygiene.",
        ],
        zh: [
          "担任技术负责人，带领 6 人团队交付从零到一的 Web 产品及其机器学习后端（3 个月原型，11 个月测试版）。",
          "负责整体架构：数据接入 → 知识图谱与趋势检测 → API 与搜索。",
          "构建数据接入管道（API、Snowflake、S3、Redshift）→ S3 数据湖与 Glue 目录；评估并集成 5+ 外部数据源。",
          "基于 SageMaker 与 CI/CD 的 MLOps；部署 5 个批量模型与准实时排序。",
          "负责组织级别安全与隐私审查；招聘、指导新人；优化 AWS 成本。",
        ],
      },
    },
    {
      company: {
        en: "Amazon",
        zh: "亚马逊",
      },
      title: {
        en: "Data Engineer III (Tech Lead) — Customer Service ML",
        zh: "数据工程师 III（技术负责人）— 客户服务机器学习",
      },
      promotion: {
        en: "promoted from Data Engineer II",
        zh: "从数据工程师 II 晋升",
      },
      period: {
        en: "Jan 2019 – Jan 2021",
        zh: "2019年1月 – 2021年1月",
      },
      duration: {
        en: "2 yrs 1 mos",
        zh: "2年1个月",
      },
      bullets: {
        en: [
          "Built large-scale data structures & streaming orchestration for contact classification.",
          "Designed and deployed NLP data pipelines with inter-day latency and DQ monitoring.",
          "Developed defect-detection models with AutoGluon & deep learning.",
          "Took on tech lead responsibilities during team transition.",
        ],
        zh: [
          "构建大规模数据结构与流式编排，用于客户联系分类。",
          "设计并部署自然语言处理数据管道（跨日延迟），并建立数据质量监控。",
          "使用 AutoGluon 与深度学习开发缺陷检测模型。",
          "在团队过渡期间承担技术负责人职责。",
        ],
      },
    },
    {
      company: {
        en: "Amazon",
        zh: "亚马逊",
      },
      title: {
        en: "Business Intelligence Engineer — FreeTime Unlimited",
        zh: "商业智能工程师 — FreeTime Unlimited",
      },
      period: {
        en: "Oct 2017 – Dec 2018",
        zh: "2017年10月 – 2018年12月",
      },
      duration: {
        en: "1 yr 3 mos",
        zh: "1年3个月",
      },
      bullets: {
        en: [
          "Translated requirements into metrics, statistical models, and automated reporting for decision-making.",
          "Managed Redshift and implemented best-practice data modeling.",
          "Designed and implemented new Redshift data models; operated and optimized schema, queries, and cost for performance and scalability.",
        ],
        zh: [
          "将业务需求转化为指标、统计模型与自动化报告，支持决策制定。",
          "设计并实现新的 Redshift 数据模型；运维并优化模式、查询与成本，以提升性能与可扩展性。",
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
      bullets: {
        en: [
          "Built marketing mix & Bayesian models to measure media impact and optimize budgets.",
          "Developed self-serve ETL/DQ/modeling tools for non-technical users (90% faster; ~80% fewer errors).",
        ],
        zh: [
          "构建营销归因与预算优化模型（MMM/贝叶斯方法），评估媒体投放效果并提供优化建议。",
          "开发自助式 ETL/数据质量/建模工具，供非技术用户使用（效率提升 90%，错误率下降约 80%）。",
        ],
      },
    },
  ],

  gap: {
    title: {
      en: "Independent Projects & Professional Engagements",
      zh: "独立项目与专业参与",
    },
    period: "Dec 2024 – present",
    bullets: {
      en: [
        "Volunteer developer for CharityBox / 益盒 — contributed product and engineering work to a WeChat-based app supporting effective giving; improved donation flows and UX.",
        "Creator of FlashMind, a self-initiated learning app combining flashcards and knowledge-mapping; responsible for end-to-end product design, prototyping, and full-stack development.",
        "Continued professional learning through independent projects and exploration of new technologies",
      ],
      zh: [
        "作为志愿开发者参与 公益平台『益盒』，在微信小程序中贡献产品与工程工作，优化捐赠流程与用户体验。",
        "独立开发 FlashMind 学习应用，将学习卡片与知识地图结合；负责从产品设计、原型到全栈开发的端到端实现。",
        "通过独立项目和探索新技术持续学习与提升。",
      ],
    },
  },

  skills: {
    core: {
      en: ["Data/ML systems", "MLOps (SageMaker, CI/CD)", "Ingestion & orchestration", "APIs"],
      zh: ["数据/机器学习系统", "MLOps（SageMaker, CI/CD）", "数据接入与编排", "API 开发"],
    },
    platforms: {
      en: ["AWS Compute/Orchestration (Lambda, Step Functions)", "AWS Data (S3, Redshift, Glue, OpenSearch)", "AWS ML & IaC (SageMaker, CDK)", "Spark"],
      zh: ["AWS Compute/Orchestration (Lambda, Step Functions)", "AWS Data (S3, Redshift, Glue, OpenSearch)", "AWS ML & IaC (SageMaker, CDK)", "Spark"],
    },
    languages: {
      en: ["Python", "SQL", "Git", "TypeScript"],
      zh: ["Python", "SQL", "Git", "TypeScript"],
    },
    analytics: {
      en: ["Tableau", "Metrics/experimentation", "Data modeling"],
      zh: ["Tableau", "指标与实验设计", "数据建模"],
    },
    collaboration: {
      en: ["Cross-functional communication", "Hiring & mentoring", "Security & privacy reviews"],
      zh: ["跨职能沟通", "招聘与指导", "安全与隐私审查"],
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
  const handleDownloadPDF = () => {
    console.log('Downloading PDF resume');
    // TODO: Implement PDF download functionality
  };




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
          {/* TODO: Implement PDF download functionality */}
          {/* <Button
            onClick={handleDownloadPDF}
            className="hover-elevate"
            data-testid="button-download-resume"
            style={{
              backgroundColor: 'hsl(var(--graphite-gray))',
              color: 'white',
              borderColor: 'hsl(var(--graphite-gray))'
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            {getBilingualText({ en: 'Download PDF', zh: '下载PDF' }, language)}
          </Button> */}
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
                <div className="text-sm flex items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    {exp.company.en === "Amazon" && <img src={AmazonLogo} alt="Amazon" className="h-6 w-6 object-contain" />}
                    {exp.company.en === "Universal McCann Worldwide" && <img src={UMLogo} alt="Universal McCann" className="h-6 w-6 object-contain" />}
                    {exp.company.en !== "Amazon" && exp.company.en !== "Universal McCann Worldwide" && <Building className="h-6 w-6" />}
                    <span className="font-semibold text-base">{getBilingualText(exp.company, language)}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{getBilingualText(exp.period, language)}</span>
                    {exp.duration && (
                      <>
                        <span>·</span>
                        <span>{getBilingualText(exp.duration, language)}</span>
                      </>
                    )}
                  </div>
                </div>
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

        {/* Independent Projects & Exploration */}
        <Card className="mb-8 resume-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">
              {getBilingualText(resumeData.gap.title, language)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-sm flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{resumeData.gap.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {(resumeData.gap.bullets?.[language] ?? resumeData.gap.bullets.en).map((bullet: string, index: number) => (
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
              <h4 className="font-medium text-sm text-foreground" data-testid="text-collaboration-skills" style={{ minWidth: '80px' }}>
                {getBilingualText({ en: 'Collaboration', zh: '协作' }, language)}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.collaboration?.[language] ?? resumeData.skills.collaboration.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    data-testid={`badge-collaboration-skill-${index}`}
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
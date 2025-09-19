import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Globe, Calendar, Waves, Building, ArrowLeft, GraduationCap } from "lucide-react";
import AmazonLogo from "../../../attached_assets/logos/logo_amazon.png";
import ColumbiaLogo from "../../../attached_assets/logos/logo_columbia.png";
import XiamenLogo from "../../../attached_assets/logos/logo_xiamen_university.png";
import UMLogo from "../../../attached_assets/logos/logo_um.png";

interface ResumeProps {
  language: 'en' | 'zh';
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
      company: "Amazon",
      title: {
        en: "Data Engineer III (Tech Lead) — Strategic Business Trends",
        zh: "数据工程师 III（技术负责人） — 战略业务趋势团队",
      },
      period: "Feb 2021 – Dec 2024",
      duration: "3 yrs 11 mos",
      bullets: {
        en: [
          "Served as technical lead, managing a 6-engineer team to deliver zero-to-one data/ML backends (prototype ~3mo, beta ~11mo).",
          "Architected ingestion → ML knowledge graph & trend detection → APIs/search.",
          "Built ingestion across APIs/Snowflake/S3/Redshift → S3 + Glue (5+ vendors onboarded).",
          "MLOps on SageMaker/CI-CD; deployed 5 batch models; near-real-time ranking.",
          "Led org security/privacy reviews; hiring, mentoring, AWS cost hygiene.",
        ],
        zh: [
          "担任技术负责人，带领 6 人团队交付从零到一的数据/机器学习后端（3 个月原型，11 个月测试版）。",
          "负责整体架构：数据接入 → 知识图谱与趋势检测 → API 与搜索。",
          "构建多源数据接入（API、Snowflake、S3、Redshift）→ S3 数据湖与 Glue 目录；完成 5+ 供应商对接。",
          "基于 SageMaker 与 CI/CD 的 MLOps；部署 5 个批量模型与准实时排序。",
          "负责组织级别安全与隐私审查；招聘、指导新人；优化 AWS 成本。",
        ],
      },
    },
    {
      company: "Amazon",
      title: {
        en: "Data Engineer III (Tech Lead) ← Data Engineer II — Customer Service ML",
        zh: "数据工程师 III（技术负责人） ← 数据工程师 II — 客户服务机器学习团队",
      },
      period: "Jan 2019 – Jan 2021",
      duration: "2 yrs 1 mos",
      bullets: {
        en: [
          "Built large-scale data structures & streaming orchestration for contact classification.",
          "Designed and deployed NLP data pipelines with inter-day latency and DQ monitoring.",
          "Developed defect-detection models with AutoGluon & deep learning.",
          "Took on Tech Lead responsibilities during team transition.",
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
      company: "Amazon",
      title: {
        en: "Business Intelligence Engineer — FreeTime Unlimited",
        zh: "商业智能工程师 — FreeTime Unlimited",
      },
      period: "Oct 2017 – Dec 2018",
      duration: "1 yr 3 mos",
      bullets: {
        en: [
          "Translated requirements into metrics, statistical models, and automated reporting for decision-making.",
          "Managed Redshift and implemented best-practice data modeling.",
        ],
        zh: [
          "将业务需求转化为指标、统计模型与自动化报告，支持决策制定。",
          "管理 Redshift 并实施最佳实践数据建模。",
        ],
      },
    },
    {
      company: "Universal McCann Worldwide",
      title: {
        en: "Senior Data Analyst ← Data Analyst",
        zh: "高级数据分析师 ← 数据分析师",
      },
      period: "Feb 2015 – Sep 2017",
      duration: "2 yrs 8 mos",
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
      en: "Independent Projects & Exploration",
      zh: "独立项目与探索",
    },
    period: "Dec 2024 – present",
    bullets: {
      en: [
        "Volunteer developer for CharityBox / 益盒 — WeChat mini-program supporting effective giving.",
        "Building FlashMind — a flashcard-inspired mapping and learning app.",
        "Exploring new directions through travel, family, and creative side projects.",
      ],
      zh: [
        "在公益平台『益盒』担任志愿开发者，参与小程序功能设计与实现，帮助用户更便捷地完成捐赠。",
        "自主开发 FlashMind 应用，把学习卡片与知识地图结合，探索新的学习方式。",
        "通过旅行、家庭与创意项目，拓展视野并寻找新的可能性。",
      ],
    },
  },

  skills: {
    core: {
      en: ["Data/ML systems", "MLOps (SageMaker, CI/CD)", "Ingestion & orchestration", "APIs"],
      zh: ["数据/机器学习系统", "MLOps（SageMaker, CI/CD）", "数据接入与编排", "API 开发"],
    },
    platforms: {
      en: ["AWS (CDK, Step Functions, Lambda, Glue, Redshift, S3, SageMaker, OpenSearch)", "Spark"],
      zh: ["AWS（CDK, Step Functions, Lambda, Glue, Redshift, S3, SageMaker, OpenSearch）", "Spark"],
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
      school: "Columbia University",
      degree: {
        en: "MA, Statistics",
        zh: "统计学硕士",
      },
      year: "2014",
    },
    {
      school: "Xiamen University",
      degree: {
        en: "B.Econ, Statistics (Minor: Mathematics)",
        zh: "经济学学士（统计学），辅修数学",
      },
      year: "2013",
    },
  ],
};

export default function Resume({ language }: ResumeProps) {
  const handleDownloadPDF = () => {
    console.log('Downloading PDF resume');
    // TODO: Implement PDF download functionality
  };

  const handleContactClick = (type: string, value: string) => {
    console.log(`Contact clicked: ${type} - ${value}`);
    // TODO: Implement contact actions (email, phone, website)
  };

  const t = <T extends Record<string, string>>(obj: T) => obj?.[language] ?? obj?.en;


  return (
    <section className="py-16 px-6" id="resume" style={{ backgroundColor: 'hsl(var(--light-slate-gray))' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-resume-title" style={{ color: 'hsl(var(--graphite-gray))' }}>
            {language === 'en' ? 'Resume' : '简历'}
          </h2>
          <p className="text-lg mb-6" data-testid="text-resume-description" style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>
            {language === 'en'
              ? 'A comprehensive overview of my professional experience and skills.'
              : '我的职业经历和技能的全面概述。'
            }
          </p>
          <Button
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
            {language === 'en' ? 'Download PDF' : '下载PDF'}
          </Button>
        </div>

        {/* Profile Block */}
        <Card className="mb-8" style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <h2 className="text-xl font-medium" style={{ color: 'hsl(var(--graphite-gray))' }}>
                {t(resumeData.profile.headline)}
              </h2>
              <p className="text-base" style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>
                {t(resumeData.profile.subhead)}
              </p>
              {resumeData.profile.location && (
                <div className="text-sm flex items-center gap-2" style={{ color: 'hsl(var(--graphite-gray) / 0.6)' }}>
                  <MapPin className="h-4 w-4 opacity-70" aria-hidden />
                  <span>{t(resumeData.profile.location)}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card className="mb-8" style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: 'hsl(var(--graphite-gray))' }}>
              {language === 'en' ? 'Key Highlights' : '核心亮点'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {(resumeData.highlights?.[language] ?? resumeData.highlights.en).map((h: string, index: number) => (
                <li key={index} style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8" style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-experience-title" style={{ color: 'hsl(var(--graphite-gray))' }}>
              {language === 'en' ? 'Experience' : '工作经历'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div key={exp.company + exp.period} className="space-y-1" data-testid={`experience-${index}`}>
                <h3 className="font-medium" data-testid={`text-job-title-${index}`} style={{ color: 'hsl(var(--graphite-gray))' }}>
                  {t(exp.title)}
                </h3>
                <div className="text-base flex items-center gap-2" style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>
                  <div className="flex items-center gap-2">
                    {exp.company === "Amazon" && <img src={AmazonLogo} alt="Amazon" className="h-6 w-6 object-contain" />}
                    {exp.company === "Universal McCann Worldwide" && <img src={UMLogo} alt="Universal McCann" className="h-6 w-6 object-contain" />}
                    {exp.company !== "Amazon" && exp.company !== "Universal McCann Worldwide" && <Building className="h-6 w-6" />}
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                    {exp.duration && (
                      <>
                        <span>·</span>
                        <span>{exp.duration}</span>
                      </>
                    )}
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {(exp.bullets?.[language] ?? exp.bullets.en).map((bullet: string, bulletIndex: number) => (
                    <li key={bulletIndex} className="text-sm" data-testid={`text-achievement-${index}-${bulletIndex}`} style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Independent Projects & Exploration */}
        <Card className="mb-8" style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: 'hsl(var(--graphite-gray))' }}>
              {t(resumeData.gap.title)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-sm flex items-center gap-2" style={{ color: 'hsl(var(--graphite-gray) / 0.7)' }}>
                <Calendar className="h-4 w-4" />
                <span>{resumeData.gap.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {(resumeData.gap.bullets?.[language] ?? resumeData.gap.bullets.en).map((bullet: string, index: number) => (
                  <li key={index} className="text-sm" style={{ color: 'hsl(var(--graphite-gray) / 0.8)' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8" style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-skills-title" style={{ color: 'hsl(var(--graphite-gray))' }}>
              {language === 'en' ? 'Skills' : '技能'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm" data-testid="text-core-skills" style={{ color: 'hsl(var(--graphite-gray))', minWidth: '80px' }}>
                {language === 'zh' ? '核心' : 'Core'}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.core?.[language] ?? resumeData.skills.core.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-core-skill-${index}`}
                    className="text-xs"
                    style={{
                      borderColor: 'hsl(var(--graphite-gray) / 0.4)',
                      color: 'hsl(var(--graphite-gray) / 0.8)',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm" data-testid="text-platforms-skills" style={{ color: 'hsl(var(--graphite-gray))', minWidth: '80px' }}>
                {language === 'zh' ? '平台' : 'Platforms'}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.platforms?.[language] ?? resumeData.skills.platforms.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    data-testid={`badge-platform-skill-${index}`}
                    className="text-xs"
                    style={{
                      backgroundColor: 'hsl(var(--graphite-gray) / 0.1)',
                      color: 'hsl(var(--graphite-gray) / 0.8)',
                      borderColor: 'hsl(var(--graphite-gray) / 0.2)'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm" data-testid="text-languages-skills" style={{ color: 'hsl(var(--graphite-gray))', minWidth: '80px' }}>
                {language === 'zh' ? '语言' : 'Languages'}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.languages?.[language] ?? resumeData.skills.languages.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="default"
                    data-testid={`badge-language-skill-${index}`}
                    className="text-xs"
                    style={{
                      backgroundColor: 'hsl(var(--graphite-gray))',
                      color: 'white',
                      borderColor: 'hsl(var(--graphite-gray))'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm" data-testid="text-analytics-skills" style={{ color: 'hsl(var(--graphite-gray))', minWidth: '80px' }}>
                {language === 'zh' ? '分析' : 'Analytics'}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.analytics?.[language] ?? resumeData.skills.analytics.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-analytics-skill-${index}`}
                    className="text-xs"
                    style={{
                      borderColor: 'hsl(var(--graphite-gray) / 0.4)',
                      color: 'hsl(var(--graphite-gray) / 0.8)',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-sm" data-testid="text-collaboration-skills" style={{ color: 'hsl(var(--graphite-gray))', minWidth: '80px' }}>
                {language === 'zh' ? '协作' : 'Collaboration'}:
              </h4>
              <div className="flex flex-wrap gap-1">
                {(resumeData.skills.collaboration?.[language] ?? resumeData.skills.collaboration.en).map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    data-testid={`badge-collaboration-skill-${index}`}
                    className="text-xs"
                    style={{
                      backgroundColor: 'hsl(var(--graphite-gray) / 0.1)',
                      color: 'hsl(var(--graphite-gray) / 0.8)',
                      borderColor: 'hsl(var(--graphite-gray) / 0.2)'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card style={{ backgroundColor: 'hsl(var(--graphite-gray) / 0.05)', borderColor: 'hsl(var(--graphite-gray) / 0.2)' }}>
          <CardHeader>
            <CardTitle className="text-xl" data-testid="text-education-title" style={{ color: 'hsl(var(--graphite-gray))' }}>
              {language === 'en' ? 'Education' : '教育经历'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {resumeData.education.map((ed, index) => (
              <div key={ed.school} className="flex justify-between items-center" data-testid={`education-${index}`}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {ed.school === "Columbia University" && <img src={ColumbiaLogo} alt="Columbia University" className="h-6 w-6 object-contain" />}
                    {ed.school === "Xiamen University" && <img src={XiamenLogo} alt="Xiamen University" className="h-6 w-6 object-contain" />}
                    {ed.school !== "Columbia University" && ed.school !== "Xiamen University" && <GraduationCap className="h-6 w-6" />}
                    <p className="text-base font-semibold" data-testid={`text-school-${index}`} style={{ color: 'hsl(var(--graphite-gray))' }}>{ed.school}</p>
                    <span className="text-base" style={{ color: 'hsl(var(--graphite-gray) / 0.6)' }}>—</span>
                    <h4 className="font-medium text-base" data-testid={`text-degree-${index}`} style={{ color: 'hsl(var(--graphite-gray))' }}>{t(ed.degree)}</h4>
                  </div>
                </div>
                <span className="text-sm" data-testid={`text-year-${index}`} style={{ color: 'hsl(var(--graphite-gray) / 0.6)' }}>{ed.year}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
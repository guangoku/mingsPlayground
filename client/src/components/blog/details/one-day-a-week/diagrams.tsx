import { type BilingualText } from "@/lib/types";

/**
 * The essay's hand-drawn diagrams. Colours all route through the .odw
 * vocabulary in one-day-a-week.css, so they follow the site theme; every
 * visible string goes through t() so the diagrams speak both languages.
 */
interface DiagramProps {
    t: (text: BilingualText) => string;
}

/** The lede's marginal illustration: the magic-date calendar. */
export function CalendarIllustration({ t }: DiagramProps) {
    return (
        <svg className="odw-side-ill" viewBox="0 0 150 185" aria-hidden="true">
            <defs>
                <marker id="odw-ah0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                </marker>
            </defs>
            <rect x="50" y="10" width="6" height="18" rx="3" fill="currentColor" opacity="0.45" />
            <rect x="94" y="10" width="6" height="18" rx="3" fill="currentColor" opacity="0.45" />
            <rect x="25" y="20" width="100" height="95" rx="8" className="d-box" />
            <path d="M25 46 v-18 a8 8 0 0 1 8 -8 h84 a8 8 0 0 1 8 8 v18 z" fill="hsl(var(--odw-accent))" />
            <text
                x="75" y="38" textAnchor="middle"
                style={{ fill: "hsl(var(--odw-panel))", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em" }}
            >
                {t({ en: "FEB 2025", zh: "2025年2月" })}
            </text>
            <text
                x="75" y="93" textAnchor="middle"
                style={{ fontFamily: "var(--font-sans)", fontSize: 36, fontWeight: 700, fill: "currentColor" }}
            >
                11
            </text>
            <path d="M14,48 l1.8,4.7 L20.5,54.5 l-4.7,1.8 L14,61 l-1.8,-4.7 L7.5,54.5 l4.7,-1.8 z" fill="hsl(var(--odw-accent))" />
            <path d="M135,38 l1.5,3.9 L140.4,43.4 l-3.9,1.5 L135,48.8 l-1.5,-3.9 L129.6,43.4 l3.9,-1.5 z" fill="hsl(var(--odw-accent))" opacity="0.75" />
            <path d="M132,102 l1.2,3.1 L136.3,106.3 l-3.1,1.2 L132,110.6 l-1.2,-3.1 L127.7,106.3 l3.1,-1.2 z" fill="hsl(var(--odw-accent))" opacity="0.55" />
            <rect x="34" y="133" width="72" height="32" rx="4" className="d-box" opacity="0.85" />
            <line x1="42" y1="144" x2="98" y2="144" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <line x1="42" y1="153" x2="84" y2="153" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            <line x1="118" y1="133" x2="118" y2="170" className="d-line" markerEnd="url(#odw-ah0)" />
        </svg>
    );
}

/** Then/now: two volunteers + contractors vs one volunteer + AI. */
export function TeamThenNowFigure({ t }: DiagramProps) {
    return (
        <figure>
            <svg
                viewBox="0 0 720 250" role="img"
                aria-label={t({
                    en: "Then: two volunteers covered maintenance and a paid contracting team covered big builds for the core product. Now: one volunteer with AI covers the core product and everything around it, about one day a week",
                    zh: "之前：两名志愿者做维护，付费外包团队做大型开发，共同支撑核心产品。现在：一名志愿者加 AI，每周约一天，覆盖核心产品和周边一切",
                })}
            >
                <defs>
                    <marker id="odw-ah4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                    </marker>
                </defs>
                <text x="175" y="30" textAnchor="middle" className="d-t d-t-panel">{t({ en: "then", zh: "之前" })}</text>
                <text x="537" y="30" textAnchor="middle" className="d-t d-t-panel">{t({ en: "now", zh: "现在" })}</text>
                <line x1="358" y1="18" x2="358" y2="235" className="d-divider" />

                <rect x="30" y="50" width="130" height="48" rx="4" className="d-box" />
                <text x="95" y="79" textAnchor="middle" className="d-t d-t-strong">{t({ en: "2 volunteers", zh: "2 名志愿者" })}</text>

                <rect x="180" y="50" width="140" height="48" rx="4" className="d-box" />
                <text x="250" y="70" textAnchor="middle" className="d-t d-t-strong">{t({ en: "contracting team", zh: "外包团队" })}</text>
                <text x="250" y="86" textAnchor="middle" className="d-t d-t-sub">
                    <tspan className="d-t-paid">{t({ en: "paid,", zh: "付费，" })}</tspan>
                    {t({ en: " per project", zh: "按项目" })}
                </text>

                <line x1="95" y1="98" x2="140" y2="175" className="d-line" markerEnd="url(#odw-ah4)" />
                <text x="97" y="142" textAnchor="end" className="d-t d-t-label">{t({ en: "maintenance", zh: "日常维护" })}</text>
                <line x1="250" y1="98" x2="205" y2="175" className="d-line" markerEnd="url(#odw-ah4)" />
                <text x="242" y="142" className="d-t d-t-label">{t({ en: "big builds", zh: "大型开发" })}</text>

                <rect x="105" y="177" width="140" height="42" rx="4" className="d-box" />
                <text x="175" y="202" textAnchor="middle" className="d-t">{t({ en: "core product", zh: "核心产品" })}</text>

                <rect x="455" y="50" width="165" height="48" rx="4" className="d-box-accent" />
                <text x="537" y="70" textAnchor="middle" className="d-t d-t-strong">{t({ en: "1 volunteer + AI", zh: "1 名志愿者 + AI" })}</text>
                <text x="537" y="86" textAnchor="middle" className="d-t d-t-sub">{t({ en: "~1 day a week", zh: "每周约一天" })}</text>

                <line x1="537" y1="98" x2="537" y2="175" className="d-line" markerEnd="url(#odw-ah4)" />
                <text x="547" y="142" className="d-t d-t-label">{t({ en: "wider scope", zh: "范围更大" })}</text>

                <rect x="430" y="177" width="215" height="48" rx="4" className="d-box" />
                <text x="537" y="196" textAnchor="middle" className="d-t">{t({ en: "core product", zh: "核心产品" })}</text>
                <text x="537" y="213" textAnchor="middle" className="d-t d-t-sub">{t({ en: "+ everything around it", zh: "+ 周边一切" })}</text>
            </svg>
            <figcaption>{t({ en: "Headcount down, scope up.", zh: "人少了，覆盖面大了。" })}</figcaption>
        </figure>
    );
}

/** How the permission tiers evolved, ending at "full automation, next". */
export function HarnessEvolutionFigure({ t }: DiagramProps) {
    return (
        <figure>
            <svg
                viewBox="0 0 720 132" role="img"
                aria-label={t({
                    en: "Harness evolution: minimum grants caused alarm fatigue, which led to tiered gates and labeled decisions in use today, heading toward per-scenario full automation next",
                    zh: "护栏演进：最小授权引发警报疲劳，进而演成分级闸门和决策留痕（现在），下一步是按场景全自动",
                })}
            >
                <defs>
                    <marker id="odw-ah7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                    </marker>
                </defs>
                <rect x="8" y="24" width="124" height="56" rx="4" className="d-box" />
                <text x="70" y="47" textAnchor="middle" className="d-t d-t-chip">{t({ en: "minimum grants", zh: "最小授权" })}</text>
                <text x="70" y="64" textAnchor="middle" className="d-t d-t-sub">{t({ en: "asked about everything", zh: "事事都要问" })}</text>
                <line x1="132" y1="52" x2="152" y2="52" className="d-line" markerEnd="url(#odw-ah7)" />
                <rect x="156" y="24" width="124" height="56" rx="4" className="d-box" />
                <text x="218" y="47" textAnchor="middle" className="d-t d-t-chip">{t({ en: "alarm fatigue", zh: "警报疲劳" })}</text>
                <text x="218" y="64" textAnchor="middle" className="d-t d-t-sub">{t({ en: "rubber-stamp approvals", zh: "审批走过场" })}</text>
                <line x1="280" y1="52" x2="300" y2="52" className="d-line" markerEnd="url(#odw-ah7)" />
                <rect x="304" y="24" width="124" height="56" rx="4" className="d-box-accent" />
                <text x="366" y="47" textAnchor="middle" className="d-t d-t-chip">{t({ en: "tiered gates", zh: "分级闸门" })}</text>
                <text x="366" y="64" textAnchor="middle" className="d-t d-t-sub">{t({ en: "asks match risk", zh: "按风险发问" })}</text>
                <line x1="428" y1="52" x2="448" y2="52" className="d-line" markerEnd="url(#odw-ah7)" />
                <rect x="452" y="24" width="124" height="56" rx="4" className="d-box-accent" />
                <text x="514" y="47" textAnchor="middle" className="d-t d-t-chip">{t({ en: "labeled decisions", zh: "决策留痕" })}</text>
                <text x="514" y="64" textAnchor="middle" className="d-t d-t-sub">{t({ en: "every ask saved", zh: "每次审批都存档" })}</text>
                <line x1="576" y1="52" x2="596" y2="52" className="d-line" markerEnd="url(#odw-ah7)" />
                <rect x="600" y="24" width="112" height="56" rx="4" className="d-box-dashed" />
                <text x="656" y="47" textAnchor="middle" className="d-t d-t-chip">{t({ en: "full automation", zh: "全自动" })}</text>
                <text x="656" y="64" textAnchor="middle" className="d-t d-t-sub">{t({ en: "per scenario", zh: "按场景逐个放开" })}</text>
                <path d="M 304 94 L 304 102 L 576 102 L 576 94" className="d-line" />
                <text x="440" y="120" textAnchor="middle" className="d-t d-t-label">{t({ en: "today", zh: "现在" })}</text>
                <text x="656" y="120" textAnchor="middle" className="d-t d-t-label">{t({ en: "next", zh: "下一步" })}</text>
            </svg>
            <figcaption className="emph">
                {t({ en: "The harness evolves on run-log evidence.", zh: "护栏靠运行日志里的证据演进。" })}
            </figcaption>
        </figure>
    );
}

/** The repetition-cure ladder: scripts, pipeline, skills, and the feedback loop. */
export function RepetitionLadderFigure({ t }: DiagramProps) {
    return (
        <figure>
            <svg
                viewBox="0 0 720 310" role="img"
                aria-label={t({
                    en: "The repetition-cure ladder: copy-paste chores become shell scripts, the weekly ops grind becomes a pipeline, judgment questions become skills, and logged cases feed back into revising those skills",
                    zh: "重复与解法的阶梯：复制粘贴的杂活变成 shell 脚本，每周运营琐事变成数据管道，判断类问题变成技能；归档案例再反哺技能的修订",
                })}
            >
                <defs>
                    <marker id="odw-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                    </marker>
                    <marker id="odw-ah2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head-accent" />
                    </marker>
                </defs>

                <rect x="35" y="195" width="185" height="58" rx="4" className="d-box" />
                <text x="127" y="218" textAnchor="middle" className="d-t d-t-sub">{t({ en: "copy-paste chores", zh: "复制粘贴的杂活" })}</text>
                <text x="127" y="238" textAnchor="middle" className="d-t d-t-strong">{t({ en: "shell scripts", zh: "shell 脚本" })}</text>

                <rect x="265" y="140" width="185" height="58" rx="4" className="d-box" />
                <text x="357" y="163" textAnchor="middle" className="d-t d-t-sub">{t({ en: "weekly ops grind", zh: "每周运营琐事" })}</text>
                <text x="357" y="183" textAnchor="middle" className="d-t d-t-strong">{t({ en: "pipeline (ETL + RPA)", zh: "数据管道（ETL + RPA）" })}</text>

                <rect x="495" y="85" width="185" height="58" rx="4" className="d-box-accent" />
                <text x="587" y="108" textAnchor="middle" className="d-t d-t-sub">{t({ en: "judgment questions", zh: "判断类问题" })}</text>
                <text x="587" y="128" textAnchor="middle" className="d-t d-t-strong">{t({ en: "skills", zh: "技能" })}</text>

                <line x1="220" y1="212" x2="265" y2="182" className="d-line" markerEnd="url(#odw-ah2)" />
                <line x1="450" y1="157" x2="495" y2="127" className="d-line" markerEnd="url(#odw-ah2)" />

                <rect x="510" y="215" width="155" height="40" rx="4" className="d-box" />
                <text x="587" y="239" textAnchor="middle" className="d-t">{t({ en: "logged cases", zh: "归档案例" })}</text>

                <line x1="612" y1="143" x2="612" y2="215" className="d-line" markerEnd="url(#odw-ah2)" />
                <text x="622" y="184" className="d-t d-t-label">{t({ en: "every run filed", zh: "每次运行都归档" })}</text>

                <path d="M 510 235 C 440 235 440 155 493 122" className="d-line-accent" markerEnd="url(#odw-ah2a)" />
                <text x="428" y="248" textAnchor="end" className="d-t d-t-accent">{t({ en: "revise in batches,", zh: "同类的坑攒够了，" })}</text>
                <text x="428" y="264" textAnchor="end" className="d-t d-t-accent">{t({ en: "when stumbles rhyme", zh: "就批量修订" })}</text>

                <line x1="35" y1="285" x2="680" y2="285" className="d-line" markerEnd="url(#odw-ah2)" />
                <text x="35" y="303" className="d-t d-t-label">{t({ en: "cheaper cures first", zh: "便宜的解法优先" })}</text>
                <text x="680" y="303" textAnchor="end" className="d-t d-t-label">
                    {t({ en: "costlier cures only where they pay", zh: "贵的解法只用在值得的地方" })}
                </text>
            </svg>
            <figcaption>
                {t({
                    en: "Each kind of repetition got the cheapest cure that held; the skills' own logged runs feed their revisions.",
                    zh: "每类重复都用能压住它的最便宜解法；技能靠自己的运行记录迭代。",
                })}
            </figcaption>
        </figure>
    );
}

/** One /cb_triage run, end to end. */
export function TriageFlowFigure({ t }: DiagramProps) {
    return (
        <figure>
            <svg
                viewBox="0 0 720 250" role="img"
                aria-label={t({
                    en: "cb_triage, one run end to end: prime the workspace context; intake, restating and classifying the question until the asker confirms it; investigate three codebases, every caller, git history and read-only data; widen to who else is hit by the same cause; solve with at least two compared fixes iterated with the human and no change before sign-off; file the report with a forwardable reply and log it to the tracker",
                    zh: "/cb_triage 一次运行：先加载工作区上下文；接案，复述并分类问题直到提问者确认；排查三个代码库、所有调用方、git 历史和只读数据；扩面，看同一根因还伤到谁；定案，至少两个方案对比，与人反复迭代，签核前不动手；最后归档报告和可转发的回复，登记为任务",
                })}
            >
                <defs>
                    <marker id="odw-ah6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                    </marker>
                    <marker id="odw-ah6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head-accent" />
                    </marker>
                </defs>

                <rect x="14" y="16" width="202" height="72" rx="4" className="d-box" />
                <text x="115" y="40" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Prime", zh: "加载 Prime" })}</text>
                <text x="115" y="60" textAnchor="middle" className="d-t d-t-sub">{t({ en: "the workspace context,", zh: "工作区上下文，" })}</text>
                <text x="115" y="75" textAnchor="middle" className="d-t d-t-sub">{t({ en: "before anything else", zh: "先于一切" })}</text>

                <line x1="216" y1="52" x2="244" y2="52" className="d-line" markerEnd="url(#odw-ah6)" />

                <rect x="248" y="16" width="202" height="72" rx="4" className="d-box" />
                <text x="349" y="40" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Intake", zh: "接案 Intake" })}</text>
                <text x="349" y="60" textAnchor="middle" className="d-t d-t-sub">{t({ en: "restate and classify until", zh: "复述并分类，" })}</text>
                <text x="349" y="75" textAnchor="middle" className="d-t d-t-sub">{t({ en: "the asker confirms it", zh: "直到提问者确认" })}</text>

                <line x1="450" y1="52" x2="478" y2="52" className="d-line" markerEnd="url(#odw-ah6)" />

                <rect x="482" y="16" width="202" height="72" rx="4" className="d-box" />
                <text x="583" y="40" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Investigate", zh: "排查 Investigate" })}</text>
                <text x="583" y="60" textAnchor="middle" className="d-t d-t-sub">{t({ en: "3 codebases, every caller,", zh: "3 个代码库、所有调用方、" })}</text>
                <text x="583" y="75" textAnchor="middle" className="d-t d-t-sub">{t({ en: "git history, read-only data", zh: "git 历史、只读数据" })}</text>

                <path d="M 583 88 v 24 H 115 v 22" fill="none" className="d-line" markerEnd="url(#odw-ah6)" />

                <rect x="14" y="146" width="202" height="72" rx="4" className="d-box" />
                <text x="115" y="170" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Widen", zh: "扩面 Widen" })}</text>
                <text x="115" y="190" textAnchor="middle" className="d-t d-t-sub">{t({ en: "who else is hit by", zh: "同一个根因，" })}</text>
                <text x="115" y="205" textAnchor="middle" className="d-t d-t-sub">{t({ en: "the same cause?", zh: "还伤到了谁？" })}</text>

                <line x1="216" y1="182" x2="244" y2="182" className="d-line" markerEnd="url(#odw-ah6)" />

                <rect x="248" y="146" width="202" height="72" rx="4" className="d-box" />
                <text x="349" y="170" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Solve", zh: "定案 Solve" })}</text>
                <text x="349" y="190" textAnchor="middle" className="d-t d-t-sub">{t({ en: "2+ fixes compared, no", zh: "至少 2 个方案对比，" })}</text>
                <text x="349" y="205" textAnchor="middle" className="d-t d-t-sub">{t({ en: "change before sign-off", zh: "签核之前不动手" })}</text>
                <path d="M 335 144 a 14 14 0 1 1 28 0" fill="none" className="d-line-accent" markerEnd="url(#odw-ah6a)" />
                <text x="349" y="122" textAnchor="middle" className="d-t d-t-accent">{t({ en: "iterate with the human", zh: "与人反复迭代" })}</text>

                <line x1="450" y1="182" x2="478" y2="182" className="d-line" markerEnd="url(#odw-ah6)" />

                <rect x="482" y="146" width="202" height="72" rx="4" className="d-box-accent" />
                <text x="583" y="170" textAnchor="middle" className="d-t d-t-strong">{t({ en: "File", zh: "归档 File" })}</text>
                <text x="583" y="190" textAnchor="middle" className="d-t d-t-sub">{t({ en: "report + a reply the asker", zh: "报告 + 可直接转发的回复，" })}</text>
                <text x="583" y="205" textAnchor="middle" className="d-t d-t-sub">{t({ en: "can forward, logged as a task", zh: "登记为任务" })}</text>
            </svg>
            <figcaption className="emph">
                {t({
                    en: "/cb_triage, one run: a teammate's message in, a filed report out.",
                    zh: "/cb_triage 一次运行：进来一条同事消息，出去一份归档报告。",
                })}
            </figcaption>
        </figure>
    );
}

/** The ops data platform: sources, orchestrator, Feishu hub, and what ops built on top. */
export function OpsPipelineFigure({ t }: DiagramProps) {
    return (
        <figure>
            <svg
                viewBox="0 0 720 275" role="img"
                aria-label={t({
                    en: "Ops data pipeline: a central orchestrator syncs about 12 tables across the member database (app plus backend) and vendor systems (API where possible, browser automation where not) into a Feishu base. Donation records write back to the member database. On top of the Feishu base, the ops team builds dashboards, weekly reports, reminders, manual trackers and the Canva certificate flow. A control panel toggles and schedules runs; each run pings the ops chat.",
                    zh: "运营数据平台图：中央的编排器同步约 12 张表；数据从会员数据库（小程序加后端）和供应商系统（有 API 走 API，没有的走浏览器自动化）流入飞书多维表格，捐款记录写回会员数据库。运营团队在飞书上搭建看板、周报、提醒、人工跟踪表和 Canva 证书流程。控制台也是一张飞书多维表格，负责开关和排程；每次运行后编排器给运营群发一条消息。",
                })}
            >
                <defs>
                    <marker id="odw-ah8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" className="arrow-head" />
                    </marker>
                </defs>

                {/* control panel + ops chat: the parts the team owns */}
                <rect x="195" y="8" width="130" height="42" rx="4" className="d-box-owned-accent" />
                <text x="260" y="26" textAnchor="middle" className="d-t d-t-chip">{t({ en: "control panel", zh: "控制台" })}</text>
                <text x="260" y="41" textAnchor="middle" className="d-t d-t-sub">{t({ en: "also a Feishu base", zh: "也是飞书多维表格" })}</text>

                <rect x="355" y="8" width="130" height="42" rx="4" className="d-box-owned-accent" />
                <text x="420" y="32" textAnchor="middle" className="d-t d-t-chip">{t({ en: "ops team chat", zh: "运营团队群" })}</text>

                <line x1="260" y1="50" x2="260" y2="88" className="d-line" markerEnd="url(#odw-ah8)" />
                <line x1="420" y1="88" x2="420" y2="50" className="d-line" markerEnd="url(#odw-ah8)" />
                <text x="432" y="70" className="d-t d-t-label">{t({ en: "message", zh: "消息" })}</text>

                {/* sources */}
                <rect x="14" y="88" width="140" height="48" rx="4" className="d-box" />
                <text x="84" y="109" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Member DB", zh: "会员数据库" })}</text>
                <text x="84" y="125" textAnchor="middle" className="d-t d-t-sub">{t({ en: "app + backend", zh: "小程序 + 后端" })}</text>

                <rect x="14" y="158" width="140" height="48" rx="4" className="d-box" />
                <text x="84" y="179" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Vendor systems", zh: "供应商系统" })}</text>
                <text x="84" y="195" textAnchor="middle" className="d-t d-t-sub">{t({ en: "API or browser", zh: "API 或浏览器自动化" })}</text>

                {/* orchestrator */}
                <rect x="210" y="88" width="260" height="120" rx="4" className="d-box" />
                <text x="340" y="118" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Orchestrator", zh: "编排器" })}</text>
                <text x="340" y="152" textAnchor="middle" className="d-t d-t-sub">{t({ en: "~12 tables synced", zh: "约 12 张表" })}</text>
                <text x="340" y="180" textAnchor="middle" className="d-t d-t-sub">{t({ en: "scheduled + on-demand", zh: "定时 + 按需" })}</text>

                <line x1="154" y1="112" x2="210" y2="112" className="d-line" markerEnd="url(#odw-ah8)" />
                <line x1="210" y1="130" x2="154" y2="130" className="d-line" markerEnd="url(#odw-ah8)" />
                <text x="182" y="105" textAnchor="middle" className="d-t d-t-label">{t({ en: "read", zh: "读" })}</text>
                <text x="182" y="147" textAnchor="middle" className="d-t d-t-label">{t({ en: "write back", zh: "写回" })}</text>

                <line x1="154" y1="182" x2="210" y2="182" className="d-line" markerEnd="url(#odw-ah8)" />

                {/* the Feishu hub and what ops built on it */}
                <rect x="520" y="88" width="180" height="48" rx="4" className="d-box-owned-accent" />
                <text x="610" y="109" textAnchor="middle" className="d-t d-t-strong">{t({ en: "Feishu base", zh: "飞书多维表格" })}</text>
                <text x="610" y="125" textAnchor="middle" className="d-t d-t-sub">{t({ en: "one hub", zh: "一个中枢" })}</text>

                <line x1="470" y1="112" x2="520" y2="112" className="d-line" markerEnd="url(#odw-ah8)" />

                <rect x="520" y="158" width="180" height="94" rx="4" className="d-box-owned-accent" />
                <text x="610" y="178" textAnchor="middle" className="d-t d-t-strong">{t({ en: "built on top by ops", zh: "运营在上面搭建" })}</text>
                <text x="610" y="200" textAnchor="middle" className="d-t d-t-sub">{t({ en: "dashboards · weekly reports", zh: "看板 · 周报" })}</text>
                <text x="610" y="218" textAnchor="middle" className="d-t d-t-sub">{t({ en: "reminders · manual trackers", zh: "提醒 · 人工跟踪表" })}</text>
                <text x="610" y="240" textAnchor="middle" className="d-t d-t-sub">{t({ en: "Canva → certificates + mail", zh: "Canva → 证书与邮寄" })}</text>

                <line x1="610" y1="136" x2="610" y2="158" className="d-line" markerEnd="url(#odw-ah8)" />
            </svg>
        </figure>
    );
}

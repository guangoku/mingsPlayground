import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import octopusSignoff from "@assets/projects/one-day-a-week/author-mark.webp";
import { getBilingualText } from "@/lib/utils";
import { type Language, type BilingualText } from "@/lib/types";
import {
    CalendarIllustration,
    TeamThenNowFigure,
    HarnessEvolutionFigure,
    RepetitionLadderFigure,
    TriageFlowFigure,
    OpsPipelineFigure,
    MarkWorkspace,
    MarkHarness,
    MarkLoop,
    MarkHandover,
} from "./diagrams";
import "./one-day-a-week.css";

interface OneDayAWeekDetailProps {
    language: Language;
}

/** The workspace tree, kept as strings so <pre> spacing survives JSX. */
const TREE: Record<Language, Array<[string, string]>> = {
    en: [
        ["workspace/", ""],
        ["├── agent instructions    ", "# orientation: what this place is, where to look"],
        ["├── domain glossary       ", "# business term → table → service"],
        ["├── skills/               ", "# a dozen packaged procedures (triage lives here)"],
        ["├── reports/              ", "# every investigation ever filed"],
        ["├── scripts/              ", "# deploy, database access, server ops"],
        ["├── mini-app/       ┐                 ", "# member-facing WeChat app"],
        ["├── backend/        ├  product repos  ", "# server API + payments"],
        ["├── admin portal/   ┘                 ", "# admin console"],
        ["└── data pipeline/                    ", "# ops data pipeline"],
    ],
    zh: [
        ["workspace/", ""],
        ["├── agent instructions    ", "# 方位图：这里是什么、去哪儿找"],
        ["├── domain glossary       ", "# 业务词 → 数据表 → 服务"],
        ["├── skills/               ", "# 十来个封装好的流程（排查就住在这里）"],
        ["├── reports/              ", "# 历次调查全部归档"],
        ["├── scripts/              ", "# 部署、数据库访问、服务器运维"],
        ["├── mini-app/       ┐               ", "# 面向会员的微信小程序"],
        ["├── backend/        ├  产品仓库      ", "# 服务端 API + 支付"],
        ["├── admin portal/   ┘               ", "# 管理后台"],
        ["└── data pipeline/                  ", "# 运营数据管道"],
    ],
};

/**
 * "One Day a Week" - the CharityBox essay, in both languages.
 * The write-up the CharityBox project page has been promising.
 */
export default function OneDayAWeekDetail({ language }: OneDayAWeekDetailProps) {
    const t = (text: BilingualText) => getBilingualText(text, language);
    // Bold and links land in different places per language, so paragraphs
    // carry both renderings and pick one here.
    const L = ({ en, zh }: { en: ReactNode; zh: ReactNode }) => (
        <>{language === "en" ? en : zh}</>
    );

    return (
        <article className={`odw ${language === "zh" ? "odw-zh" : ""}`}>
            <header className="odw-hero">
                <span className="odw-eyebrow">
                    {t({ en: "CharityBox · the write-up", zh: "益盒 · 工作复盘" })}
                </span>
                <h1 className="detail-title">
                    {t({ en: "One Day a Week", zh: "每周一天" })}
                </h1>
                <p className="odw-subtitle">
                    <L
                        en={<>Being an <strong>entire tech team</strong> for a mission-driven org - solo, with AI.</>}
                        zh={<>独自一人，带着 AI，做一家公益机构的<strong>整个技术团队</strong>。</>}
                    />
                </p>
                <hr className="odw-hero-rule" />
            </header>

            <div className="odw-story">
                <CalendarIllustration t={t} />
                <p>
                    <L en={<>"The magic date didn't work."</>} zh={<>「魔法日期失灵了。」</>} />
                </p>
                <p>
                    <L
                        en={<>Our newest intern had just learned the folklore: when publishing in our WeChat mini-app, set the date to 2025-02-11. Nobody remembers why. This time, the articles sank to the bottom of the feed anyway.</>}
                        zh={<>新来的实习生刚从前辈那里学到这条口口相传的规矩：在我们的微信小程序里发文章，日期要填 2025-02-11。没人记得为什么。这一次，文章还是沉到了列表底部。</>}
                    />
                </p>
                <p>
                    <L
                        en={<>I handed the thread to a triage skill and went back to my day job. It came back with the root cause, a proper fix, and a drafted reply; shipping was the easy part. The culprit turns up below.</>}
                        zh={<>我把聊天记录丢给一个排查技能，回头继续忙主业。它回来时带着根因（root cause）、一套合理的修复方案，还有一份拟好的回复；上线反而成了最轻松的一步。谁是真凶，下文揭晓。</>}
                    />
                </p>
            </div>

            <h2>{t({ en: "The team, then and now", zh: "团队：之前与现在" })}</h2>
            <p>
                <L
                    en={<>益盒 CharityBox is a Chinese social enterprise - research and advisory for effective giving, with 5M+ RMB steered to vetted programs. Its product: a WeChat mini-app for 1,500+ members - a payment system (monthly pledges, one-time donations, birthday and group campaigns, matched giving), alongside receipts, donor gifts, certificates and a research-and-events channel, with an admin portal behind it.</>}
                    zh={<>益盒 CharityBox 是一家公益研究与咨询机构，用严格的影响力模型帮捐赠人识别对中国最紧迫问题有显著改变的底层解法，累计撬动 500 万+ 人民币。产品是一个微信小程序，1,500 多位会员在上面捐赠。一套支付系统：月捐、次捐、生日捐、一起捐、配捐；开票、礼物、证书、研究与活动频道也都在里面；后面还有一个管理后台。</>}
                />
            </p>
            <p>
                <L
                    en={<>I joined in January 2025 as one of two pro bono engineers: one front end, one backend. Big builds went out to a contracting team, paid per project.</>}
                    zh={<>我 2025 年 1 月加入时，团队有两名志愿工程师，一个管前端，一个管后端；大型开发外包出去，按项目付费。</>}
                />
            </p>
            <p>
                <L
                    en={<>The backend engineer has since moved on. <strong>Today the entire tech team is me, about one day a week, covering more ground than before.</strong></>}
                    zh={<>后来，后端工程师离开了。<strong>现在，整个技术团队就剩我一个人，每周投入大约一天，负责的范围却比从前更大。</strong></>}
                />
            </p>

            <TeamThenNowFigure t={t} />

            <p>
                <L
                    en={<>Small mission-driven orgs mostly never own custom software. The menu:</>}
                    zh={<>小型公益机构，大多永远不会拥有自己的定制软件。摆在面前的选项无非几个：</>}
                />
            </p>
            <ul>
                <li>
                    <L
                        en={<>spreadsheets and SaaS, up to a point</>}
                        zh={<>表格加 SaaS，能撑一阵，但有上限</>}
                    />
                </li>
                <li>
                    <L
                        en={<>an agency build - decaying from delivery day, nobody stays to touch the code</>}
                        zh={<>找外包做一版：交付那天起就开始烂，没人留下来碰代码</>}
                    />
                </li>
                <li>
                    <L
                        en={<>lately, vibe-coding it yourself - fine until the system outgrows a page</>}
                        zh={<>最近还能自己 vibe coding：拼个静态站够用，系统一复杂就漏洞百出</>}
                    />
                </li>
            </ul>
            <p>
                <L
                    en={<><strong>Custom software is a pet, not a purchase</strong>: the cost is the feeding, not the buying. AI changed the price of the feeding, not the need for a feeder. One day a week is what it costs us now.</>}
                    zh={<><strong>定制软件是要养的</strong>：钱花在养上，不在买上。AI 改了养的价格，没改「得有人养」这件事。我们现在养它，就是每周一天。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Four moves: a context layer, a harness, a loop, a handover.</strong> Old ideas, new leverage - and none of it needs a big team to copy.</>}
                    zh={<><strong>四步：一层上下文、一套护栏、一个循环、一次移交。</strong>都是老思路，新杠杆；哪一步都用不着一支大团队。</>}
                />
            </p>
            <p className="odw-reader-call">
                <L
                    en={<>If you run a <strong>nonprofit or small org</strong> with software to keep alive and no budget for a full-time engineer, or you are an <strong>engineer with a day a week to give</strong> - what follows is for you.</>}
                    zh={<>如果你运营一家<strong>公益组织或小机构</strong>，手里有一套要养的软件，却没有全职工程师的预算；或者你是一名<strong>每周能拿出一天的工程师</strong>，下面的内容就是写给你的。</>}
                />
            </p>

            <h2>
                <span className="odw-move-mark"><MarkWorkspace className="odw-move-mark-svg" /></span>
                <span className="odw-eyebrow">{t({ en: "Move 1", zh: "第 1 步" })}</span>
                {t({ en: "Context and memory", zh: "上下文与记忆（Context and Memory）" })}
            </h2>
            <p>
                <L
                    en={<>The first move was context engineering: <strong>one workspace that holds everything the AI needs to know</strong>. Most questions span all three codebases - a single donation field appears in the mini-app form, the server API, and the admin export - and no single repo holds the full picture.</>}
                    zh={<>第一步是上下文工程（context engineering）：<strong>一个工作区，装下 AI 需要知道的一切</strong>。大多数问题横跨三个代码库：同一个捐赠字段，会同时出现在小程序表单、服务端 API 和管理后台的导出里，单看任何一个仓库都拼不出全貌。</>}
                />
            </p>
            <div className="odw-eng-tag">
                {t({ en: "engineer detail - skip freely", zh: "工程师细节，可跳过" })}
            </div>
            <pre className="odw-tree">
                {TREE[language].map(([code, comment], i) => (
                    <span key={i}>
                        {code}
                        {comment && <span className="c">{comment}</span>}
                        {"\n"}
                    </span>
                ))}
            </pre>
            <p>
                <L
                    en={<>The quiet compounder is reports/: <strong>every investigation goes back in, and future sessions read it</strong> - corrections land in the same file.</>}
                    zh={<>真正闷声攒复利的是 reports/：<strong>每次调查的结论都归档进去，后面的会话接着读</strong>；发现写错了，就改在同一份文件里。</>}
                />
            </p>
            <p>
                <L
                    en={<>A fresh session carries a few global preferences at most; the workspace is what remembers. Reading it works by <strong>progressive disclosure</strong>: the orientation file and glossary serve as the map, and the AI pulls in <strong>only what the task needs</strong> - fast, and cheap in tokens.</>}
                    zh={<>新开一个会话，随身带的至多是几条全局偏好；真正的记忆都长在工作区里。读法是<strong>渐进式披露（progressive disclosure）</strong>：说明文件和词表当地图，AI <strong>按任务取用需要的那部分</strong>，又快，又省 token。</>}
                />
            </p>

            <h2>
                <span className="odw-move-mark"><MarkHarness className="odw-move-mark-svg" /></span>
                <span className="odw-eyebrow">{t({ en: "Move 2", zh: "第 2 步" })}</span>
                {t({ en: "The harness", zh: "护栏（Harness）" })}
            </h2>
            <p>
                <L
                    en={<>An AI with this much reach needs a leash before it needs a to-do list. The second move was the harness: <strong>workspace-level permission rules</strong> binding every session and every skill.</>}
                    zh={<>手伸得这么长的 AI，先得套上缰绳，再谈派活。第二步就是护栏：<strong>工作区一级的权限规则</strong>，管住每一个会话、每一个技能。</>}
                />
            </p>
            <table className="odw-rules">
                <tbody>
                    <tr>
                        <th>{t({ en: "The AI wants to...", zh: "AI 想要……" })}</th>
                        <th>{t({ en: "The rule", zh: "规则" })}</th>
                    </tr>
                    <tr>
                        <td>{t({ en: "read code, logs, test data", zh: "读代码、日志、测试数据" })}</td>
                        <td>{t({ en: "free", zh: "放行" })}</td>
                    </tr>
                    <tr>
                        <td>{t({ en: "read production data", zh: "读生产数据" })}</td>
                        <td>{t({ en: "read-only account; each query approved", zh: "只读账号，一条查询一次审批" })}</td>
                    </tr>
                    <tr>
                        <td>{t({ en: "write code", zh: "写代码" })}</td>
                        <td>
                            {t({
                                en: "free in the workspace; solutions discussed first, every merge reviewed",
                                zh: "工作区内放行；方案先讨论，每次合并必审",
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>{t({ en: "change data, send messages", zh: "改数据、发消息" })}</td>
                        <td>
                            {t({
                                en: "stops and asks; default is no. Messages: drafts only - a human presses send",
                                zh: "停下来问，默认不行。消息只出草稿，发送键在人手里",
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>{t({ en: "deploy to test servers", zh: "部署到测试服务器" })}</td>
                        <td>
                            {t({
                                en: "free - its playground, end to end",
                                zh: "放行。测试环境是它的游乐场，端到端随便跑",
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>{t({ en: "deploy to production", zh: "部署到生产" })}</td>
                        <td>
                            {t({
                                en: "human-only. The AI writes the full plan - scope, timeline, pre-checks, steps, validation, rollback, scripts; the human executes; the AI runs read-only checks alongside",
                                zh: "只能人来。AI 写完整方案：范围、时间线、前置检查、步骤、验证、回滚、脚本；人执行；AI 在旁边跑只读校验",
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>
                <L
                    en={<><strong>The tiers were not designed up front; they evolved:</strong></>}
                    zh={<><strong>这套分级不是一开始设计好的，是长出来的：</strong></>}
                />
            </p>

            <HarnessEvolutionFigure t={t} />

            <p>
                <L
                    en={<><strong>Alarm fatigue</strong> was the turn. A gate that fires on everything gets approved without reading - and then risky actions slip through with the trivial ones.</>}
                    zh={<><strong>警报疲劳（alarm fatigue）</strong>是转折点。什么都拦的闸门，最后人看都不看就放行，高风险动作就混在琐事里溜了过去。</>}
                />
            </p>
            <p>
                <L
                    en={<>The run logs showed which approvals had turned into rubber stamps. Every stop-and-ask since is saved with the human's decision: <strong>labels</strong>. Where they justify it, a gate opens - classifying cases, raising related hazards, filing findings. Dozens of samples, not thousands; any gate that misbehaves goes back behind the ask.</>}
                    zh={<>运行日志暴露出哪些审批已经沦为走过场。此后每一次「停下来问」，都连同人的决定一起存档，成为<strong>标注（labels）</strong>。有数据撑腰的地方，闸门就放开一格：分类案例、提示关联风险、归档结论。样本量是几十条，不是几千条；哪个闸门出了错，就退回人工审批。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Enforcement is code</strong> where it matters most. Every major AI coding agent supports <strong>hooks: register a script, and the agent runs it before each command</strong>. Ours is a Python guard that checks each command against the rules above and refuses production deploys outright. Two properties make it hold:</>}
                    zh={<><strong>最关键的环节，靠代码硬性把关。</strong>主流 AI 编码智能体都支持<strong>钩子（hooks）：注册一个脚本，每条命令执行前智能体先跑它</strong>。我们的是一个 Python 守卫，逐条对照上面的规则，生产部署直接拒绝。它靠两点站得住脚：</>}
                />
            </p>
            <ul>
                <li>
                    <L
                        en={<>the guard and its rule files are <strong>human-edit-only</strong> - the AI cannot loosen its own leash</>}
                        zh={<>守卫和规则文件<strong>只允许人编辑</strong>：AI 松不开自己的缰绳</>}
                    />
                </li>
                <li>
                    <L
                        en={<>the decision lands <strong>before the command runs</strong> - nothing said in a conversation can talk past it</>}
                        zh={<>判定发生在<strong>命令执行之前</strong>：对话里说什么都绕不过去</>}
                    />
                </li>
            </ul>
            <p>
                <L
                    en={<>The rest - merge review, pressing send - is process the human holds; and nothing personally identifying leaves the team's systems, including in this post.</>}
                    zh={<>剩下的环节（合并审查、按下发送键）始终握在人手里。另外，所有个人信息都不出团队的系统，这篇文章也不例外。</>}
                />
            </p>

            <h2>
                <span className="odw-move-mark"><MarkLoop className="odw-move-mark-svg" /></span>
                <span className="odw-eyebrow">{t({ en: "Move 3", zh: "第 3 步" })}</span>
                {t({ en: "The compounding loop", zh: "复利循环" })}
            </h2>
            <p>
                <L
                    en={<>Site reliability engineers call it toil: manual, repetitive work that grows with the operation instead of shrinking with it. The third move was a loop for killing it, cheapest cure first.</>}
                    zh={<>SRE（网站可靠性工程师）给这类活起了个名字：toil（琐事），业务越长它越多、从不自己变少的重复手工活。第三步是一个专门消灭它的循环，从最便宜的解法下手。</>}
                />
            </p>

            <RepetitionLadderFigure t={t} />

            <p>
                <L
                    en={<>Copy-paste chores became shell scripts. The weekly operations grind became a pipeline - numbers in Impact, below. The top rung is skills: written procedures the AI can execute, runbooks that run. The ones in daily use:</>}
                    zh={<>复制粘贴的杂活变成了 shell 脚本。每周的运营琐事变成了一条数据管道（数字见下文「成效」）。最上层是技能（skill）：AI 能执行的成文流程，会自己跑的 runbook。日常在用的这些：</>}
                />
            </p>
            <div className="odw-eng-tag">
                {t({ en: "engineer detail - skip freely", zh: "工程师细节，可跳过" })}
            </div>
            <ul>
                <li>
                    <L
                        en={<><strong>/prime</strong> - loads the workspace context in one command; other skills call it first</>}
                        zh={<><strong>/prime</strong>：一条命令加载全部工作区上下文；其他技能先调它</>}
                    />
                </li>
                <li>
                    <L
                        en={<><strong>/plan-feature</strong> and <strong>/execute</strong> - spec-driven development tailored to this workspace<sup>*</sup></>}
                        zh={<><strong>/plan-feature</strong> 和 <strong>/execute</strong>：为这个工作区定制的规格驱动开发（spec-driven）<sup>*</sup></>}
                    />
                </li>
                <li>
                    <L
                        en={<><strong>/onboard</strong> - walks a new member through setup, at engineer or non-engineer depth</>}
                        zh={<><strong>/onboard</strong>：带新成员完成环境搭建，分工程师和非工程师两种深度</>}
                    />
                </li>
                <li>
                    <L
                        en={<><strong>/cb_triage</strong> - the daily workhorse: the end-to-end cycle for small and medium problems</>}
                        zh={<><strong>/cb_triage</strong>：日常主力，中小问题的端到端处理流程</>}
                    />
                </li>
            </ul>
            <p className="odw-fn">
                <L
                    en={<>* Engineer's footnote: git worktrees keep parallel work safe across the nested repos.</>}
                    zh={<>* 工程师注脚：git worktree 让并行工作在嵌套仓库之间互不踩踏。</>}
                />
            </p>
            <p>
                <L
                    en={<>The expensive repetition was judgment work: the steady stream of "a user says X happened, what's going on?" <strong>That is what /cb_triage does</strong> - one written procedure, from the teammate's message to a filed report.</>}
                    zh={<>最贵的重复是判断类工作：那句问个不停的「有用户说出了 X，怎么回事？」<strong>这正是 /cb_triage 干的活儿</strong>：一份成文流程，从同事的一条消息，一路走到一份归档报告。</>}
                />
            </p>

            <TriageFlowFigure t={t} />

            <p>
                <L
                    en={<>The steps are the easy half. What the file mostly encodes is temperament, translated:</>}
                    zh={<>步骤是容易的一半。这份文件真正写进去的，是心法：</>}
                />
            </p>
            <blockquote className="odw-skill">
                <span className="odw-label">
                    {t({ en: "cb_triage.md - excerpt, translated", zh: "cb_triage.md · 节选" })}
                </span>
                <p>
                    {t({
                        en: "Slow down. Do not propose a fix before you understand the code around it.",
                        zh: "慢下来。没读懂周围的代码之前，不要提修复方案。",
                    })}
                </p>
                <p>
                    {t({
                        en: "For every piece of code you touch: who was it written for, and which other paths run through it?",
                        zh: "你碰的每一段代码：它当初是为谁写的？还有哪些路径会经过它？",
                    })}
                </p>
                <p>
                    {t({
                        en: "The question you were asked is often the tip of an iceberg; if you find a bigger hazard nearby, surface it.",
                        zh: "别人问你的问题往往只是冰山一角；如果附近有更大的隐患，把它摆到明面上。",
                    })}
                </p>
            </blockquote>
            <aside className="odw-story">
                <span className="odw-label">
                    {t({ en: "The magic date, resolved", zh: "魔法日期，真相" })}
                </span>
                <p>
                    <L
                        en={<>The magic date was never magic: when every article carries the same timestamp, the manual sort order decides. 2025-02-11 was just the day someone first did it.</>}
                        zh={<>魔法日期从来不是魔法：当所有文章的时间戳都相同，排序就由手工设置的顺序字段说了算。2025-02-11 只是第一个人这么填的那一天。</>}
                    />
                </p>
                <p>
                    <L
                        en={<>What broke it: a March commit titled "fix" started sending dates as strings, and the parser, which read only numbers, failed them to zero - January 1970.</>}
                        zh={<>弄坏它的，是三月一个标题叫「fix」的提交：日期开始按字符串发送，而只认数字的解析器把它们统统置零，落在 1970 年 1 月。</>}
                    />
                </p>
                <p>
                    <L
                        en={<><strong>The widening mattered more than the fix.</strong> The intern's posts were the newest of sixteen buried since March, and the report came back with the cause, the blast radius, and the fixes.</>}
                        zh={<><strong>扩面比修复更重要。</strong>实习生的文章只是三月以来被埋掉的十六篇里最新的几篇；报告带回来的是根因、波及范围和修复方案。</>}
                    />
                </p>
            </aside>
            <p>
                <L
                    en={<>When the stumbles start to rhyme, the skill gets revised against its own logged runs: <strong>cures leave records, and records improve the cures.</strong></>}
                    zh={<>同类的坑攒够了，技能就照着自己的运行记录修订：<strong>解法留下记录，记录再改进解法。</strong></>}
                />
            </p>

            <h2>
                <span className="odw-move-mark"><MarkHandover className="odw-move-mark-svg" /></span>
                <span className="odw-eyebrow">{t({ en: "Move 4", zh: "第 4 步" })}</span>
                {t({ en: "Built to be owned", zh: "为移交而建" })}
            </h2>
            <p>
                <L
                    en={<>Software an org cannot operate without you is not really theirs. <strong>It is a dependency with one person's name on it.</strong> So the fourth move pushes the controls outward.</>}
                    zh={<>一套离了你就转不动的软件，并不真正属于机构。<strong>那只是一个挂着某个人名字的依赖项。</strong>所以第四步，是把控制权一点点交出去。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>The ops data platform is the enabler.</strong> Data lands in one Feishu base - the team's collaboration suite - and everything from there on is theirs.</>}
                    zh={<><strong>运营数据平台就是那个交接点。</strong>数据汇进一张飞书多维表格 - 团队本来就在飞书上办公 - 从这里往下，都归他们。</>}
                />
            </p>

            <OpsPipelineFigure t={t} />

            <p>
                <L
                    en={<>Beyond the platform, three more:</>}
                    zh={<>除了这个平台，还有三件：</>}
                />
            </p>
            <ul>
                <li>
                    <L
                        en={<><strong>Onboarding runs as a guided command</strong> in any major AI coding assistant, on two routes: engineers get the full setup and the permission rules above; non-engineers get data and documents, no deploy access. Either way a newcomer inherits <strong>the whole trail of past work</strong>.</>}
                        zh={<><strong>新人引导做成了一条向导式命令</strong>，主流 AI 编码助手都能跑，分两条路线：工程师拿到完整环境和上面那套权限规则；非工程师拿到数据和文档，不给部署权限。走哪条路，新人都直接继承<strong>此前的全部工作档案</strong>。</>}
                    />
                </li>
                <li>
                    <L
                        en={<><strong>A read-only chat bot</strong> for triage-grade questions works as a proof of concept, and is parked on cost: unattended runs bill per token instead of sitting inside a flat subscription.</>}
                        zh={<><strong>一个只读聊天机器人</strong>能回答排查级的问题，概念验证（proof of concept）已经跑通，卡在成本上：无人值守按 token 计费，进不了包月订阅。</>}
                    />
                </li>
                <li>
                    <L
                        en={<><strong>Further out:</strong> PMs already write specs an AI can act on; next is PMs triaging their own questions, then proposing, building and testing small features - engineer review before merge, CI/CD to deploy.</>}
                        zh={<><strong>再往远看：</strong>PM 已经在写 AI 能直接执行的需求文档；下一步是 PM 自己动手排查问题，再往后是自己提出、构建、测试小功能，工程师合并前把关，CI/CD 负责部署。</>}
                    />
                </li>
            </ul>
            <p>
                <L
                    en={<><strong>The human half is short but load-bearing.</strong> None of this lands without teammates who meet the system halfway - and the work that keeps it moving is the engineer's, not the AI's: joining product design early, bringing better tools in when they land, keeping an eye on security habits. Trust is built in person rather than in tooling: time on site with the team, scheduled availability, a response SLA, and "the AI did it" never standing in for a person's accountability.</>}
                    zh={<><strong>人的部分写出来很短，却是承重墙。</strong>这一切能落地，靠的是愿意迎上来半步的队友；而让它一直转下去的功夫在工程师身上，不在 AI：尽早参与产品设计、把趁手的新工具带进来、盯着大家的安全习惯。信任是人和人处出来的，不是工具给的：定期到场、固定的可用时段、说到做到的响应时限，还有一条底线：「是 AI 干的」永远不能替人担责。</>}
                />
            </p>
            <p>
                <L
                    en={<>Every quarter, the org should need its engineer for less of this.</>}
                    zh={<>每过一个季度，机构需要这位工程师的地方，都应该更少一点。</>}
                />
            </p>

            <h2>{t({ en: "Impact", zh: "成效" })}</h2>
            <p>
                <L
                    en={<>What did this buy the org? Three things - and what they cost.</>}
                    zh={<>这些换来了什么？三件事，外加一笔账。</>}
                />
            </p>

            {/* The numbers are the strongest thing in this section and they were
                buried mid-paragraph. Lifted out, they also give the scroll a
                place to breathe. */}
            <div className="odw-stats">
                <div className="odw-stat">
                    <span className="odw-stat-n">~70%</span>
                    <span className="odw-stat-l">
                        {t({ en: "of the weekly manual effort, gone", zh: "每周手工投入消失" })}
                    </span>
                </div>
                <div className="odw-stat">
                    <span className="odw-stat-n">36</span>
                    <span className="odw-stat-l">
                        {t({ en: "tasks shipped in three months", zh: "三个月完成的任务" })}
                    </span>
                </div>
                <div className="odw-stat">
                    <span className="odw-stat-n">2</span>
                    <span className="odw-stat-l">
                        {t({ en: "big builds brought in-house", zh: "大项目收回自建" })}
                    </span>
                </div>
                <div className="odw-stat">
                    <span className="odw-stat-n">1</span>
                    <span className="odw-stat-l">
                        {t({ en: "volunteered day a week", zh: "每周志愿一天" })}
                    </span>
                </div>
            </div>
            <p>
                <L
                    en={<>The ops team got their week back. <strong>About 70% of the weekly manual effort is gone</strong> - their number, and largely their own doing: the pipeline moves the data, and everything running on top of it they built themselves.</>}
                    zh={<>运营团队把自己的一周拿了回来。<strong>每周约 70% 的手工投入消失了。</strong>这个数字是他们自己统计的，功劳也大半在他们自己：管道负责搬数据，管道之上跑的一切都是他们亲手搭的。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Two big builds came in-house this quarter:</strong> the ops data pipeline and one-time donation, with group and birthday donations next. Pre-AI, each was several engineer-weeks at about 1,500 RMB per engineer-day - work the org used to buy by the project, now fitting inside the volunteer day.</>}
                    zh={<><strong>两个大项目这个季度收回了自建：</strong>运营数据管道和次捐，组队捐和生日捐排在后面。放在 AI 之前，每一个都要花数周的工程师工时、按每人天约 1,500 元的价钱向外采购；现在，它们装进了每周一天的志愿时间里。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>The long tail gets handled.</strong> 36 tracked tasks in the past three months: 27 system operations - customer issues and routine fixes - and 9 product features, one of them mid-size.</>}
                    zh={<><strong>长尾有人接。</strong>近三个月 36 个跟踪任务：27 个系统运营（客户问题和例行修复），9 个产品功能，其中一个中等规模。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Cost and time:</strong> a flat US$100-a-month AI subscription, shared with other personal projects. The real input is the volunteered day a week. Big builds get planned 2-to-3-day weeks plus communication time, roughly once a quarter.</>}
                    zh={<><strong>那笔账：</strong>AI 订阅每月 100 美元，还是和其他个人项目合用的。真正投入的，是每周志愿出来的那一天。遇到大项目，会提前排出每周 2 到 3 天的攻坚周，加上沟通时间，大约一个季度一次。</>}
                />
            </p>

            <h2>{t({ en: "What's still hard", zh: "仍然难的事" })}</h2>
            <p>
                <L
                    en={<>Three real gaps, in descending order of how much they worry me.</>}
                    zh={<>三个实打实的短板，最让我担心的排在最前面。</>}
                />
            </p>
            <p>
                <L
                    en={<><strong>The bus factor is still one.</strong> If I vanish, the workspace, the skills and every report remain - but there is no successor. Two things de-risk it without fixing it: a PM is set up with the dev tooling, and the engineer who left is reachable for emergencies and the occasional design review. Neither covers the maintenance in between. A solution could be a second volunteer engineer, half a day a week each. <strong>Same scope, bus factor two.</strong></>}
                    zh={<><strong>巴士系数（bus factor）还是 1。</strong>哪天我消失了，工作区、技能、所有报告都还在，但没有人接手。有两件事能降低风险，却治不了本：一位 PM 已经配好了开发工具链；离开的那位工程师，紧急情况找得到人，偶尔还能来做设计评审。可两头都盖不住中间的日常维护。一个可能的解法，是再来一位志愿工程师，一人半天。<strong>活儿不变，巴士系数变成 2。</strong></>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Tech debt moves at one-day-a-week speed.</strong> The codebase arrived from its contracting era with very little test coverage, and the scariest parts are the hardest to reach: the payment sheet is native UI that WeChat's own automation SDK cannot drive, and a mini-app is not a web page an AI can open and see. The cure is known - mock the payment call in UI tests, replay real callbacks against the backend - but knowing is not building, and signature verification still ends at a human eye. <strong>AI made the fixes cheap. It did not make them safe to run without eyes.</strong></>}
                    zh={<><strong>技术债只能按每周一天的速度还。</strong>代码库是外包时代传下来的，测试覆盖率很低，而最吓人的部分偏偏最难覆盖到：支付收银台是原生 UI，连微信自家的 SDK 也驱动不了；小程序也不是一个 AI 打开就能看的网页。解法早就清楚：UI 测试里把支付调用 mock 掉，再拿真实回调对后端做回放。可知道不等于建成，而且签名校验到今天还得靠人眼把关。<strong>AI 让修复变便宜了，却没让它敢脱开人眼跑。</strong></>}
                />
            </p>
            <p>
                <L
                    en={<><strong>Autonomy keeps getting deferred.</strong> Unattended runs bill per token, outside the flat subscription - real on a small budget, but a price curve. Designing and tuning the loop takes real building, queued behind features and customer issues. <strong>At one day a week, lower priority does not mean later. It means never scheduled.</strong></>}
                    zh={<><strong>自主运行一再被推迟。</strong>无人值守按 token 计费，进不了包月订阅，对预算有限的机构是道真门槛，但价格终归会往下走。更难的在后面：设计和调优这样一套循环，是实打实的开发，不是改改配置；这种活儿永远排在新功能和客户问题后面。<strong>在每周一天的节奏下，「优先级低」不等于「以后做」，而是「永远排不上」。</strong></>}
                />
            </p>

            <div className="odw-closing">
                <h2>{t({ en: "Where to find each other", zh: "去哪儿找到彼此" })}</h2>
                <p>
                    <L
                        en={<><strong>If you are an engineer:</strong> I arrived as a podcast listener, then a donor, then the person who answered their front-end posting without a front-end background. They took the risk; the first months were a steep climb. If you are considering a pivot into an adjacent field, this is one of the best ways in.</>}
                        zh={<><strong>如果你是工程师：</strong>我先是他们播客的听众，后来成了捐赠人，最后成了那个没写过前端、却应了前端招募帖的人。他们愿意赌这一把；头几个月爬得很吃力。如果你正想转去一个相邻的技术领域，这是最好的入口之一。</>}
                    />
                </p>
                <p>
                    <L
                        en={<><strong>If you run such an org:</strong> when you do pay for a build, scope what happens after the invoice clears: monitoring and alarms, tests someone else can run, a runbook, a deploy a stranger can follow. Otherwise you buy a feature and inherit a liability. And post the ask publicly - it reaches people a private plea never will, doubles as a story about your work, and some who answer will offer part-time or pro bono instead.</>}
                        zh={<><strong>如果你运营这样一家机构：</strong>真要花钱外包开发，就把尾款付清之后的事一并写进合同：监控和告警、别人也跑得起来的测试、一份 runbook、陌生人也能照着执行的部署。不然你买回来的是一个功能，附赠一笔负债。另外，把招募需求公开发出去：能碰到私下托人永远碰不到的人，发出去本身就是一篇讲你们工作的故事，回应的人里还会有人主动提出兼职或者纯公益帮忙。</>}
                    />
                </p>
                <p>
                    <L
                        en={<>The platforms below take listings from both sides. They skew US and China, which is where my own experience is.</>}
                        zh={<>下面这些平台两边都接：机构发需求，工程师找项目。名单偏美国和中国，因为我自己的经验就在这两边。</>}
                    />
                </p>
                <ul>
                    <li>
                        <a href="https://www.catchafire.org/" target="_blank" rel="noopener noreferrer">Catchafire</a>
                        {t({ en: " - matches skilled volunteers with nonprofits", zh: "：为公益组织匹配技能志愿者" })}
                    </li>
                    <li>
                        <a href="https://www.democracylab.org/" target="_blank" rel="noopener noreferrer">DemocracyLab</a>
                        {t({ en: " - civic-tech projects seeking volunteers", zh: "：招募志愿者的公民科技项目" })}
                    </li>
                    <li>
                        <a href="https://www.digitalaidseattle.org/" target="_blank" rel="noopener noreferrer">Digital Aid Seattle</a>
                        {t({ en: " - digital help for nonprofits", zh: "：为公益组织提供数字化帮助" })}
                    </li>
                    <li>
                        <a href="https://techforgood.qq.com/projects" target="_blank" rel="noopener noreferrer">
                            {t({ en: "腾讯技术公益 Tencent Tech for Good", zh: "腾讯技术公益" })}
                        </a>
                        {t({ en: " - tech-volunteering project board (China)", zh: "：技术志愿项目版（中国）" })}
                    </li>
                    <li>
                        <a href="https://www.theabconline.org/digitalization" target="_blank" rel="noopener noreferrer">
                            {t({ en: "美好社会咨询社 A Better Community", zh: "美好社会咨询社 ABC" })}
                        </a>
                        {t({ en: " - pro bono consulting for Chinese nonprofits", zh: "：面向中国公益组织的公益咨询" })}
                    </li>
                    <li>
                        <a href="https://mp.weixin.qq.com/s/JQaCl6GezuYUPU-xK0TKug" target="_blank" rel="noopener noreferrer">
                            Khub 罕见病开源社区
                        </a>
                        {t({
                            en: " - open-source community building tools with rare-disease groups (China, WeChat)",
                            zh: "：与罕见病群体共建工具的开源社区（微信公众号）",
                        })}
                    </li>
                    <li>
                        {t({ en: "Learning: ", zh: "学习资源：" })}
                        <a href="https://aiforgood.itu.int/" target="_blank" rel="noopener noreferrer">AI for Good</a>
                        {" · "}
                        <a href="https://claude.com/solutions/nonprofits" target="_blank" rel="noopener noreferrer">Claude for nonprofits</a>
                    </li>
                </ul>
                <p>
                    <L
                        en={<><strong>Why I stay:</strong> not for the technical depth. The product is straightforward - payments are the deepest it gets - and none of it is technically heroic. What it offers instead is breadth - every kind of problem a tech company has - and the freedom to do what you believe is right.</>}
                        zh={<><strong>我为什么留下来：</strong>不是为了技术深度。产品并不复杂，最深的一块也就是支付，别的算不上硬核。它给的是另外两样东西：一家做软件的公司会碰到的每一类问题，这里都有；还有按你认定对的方式去做事的自由。</>}
                    />
                </p>
                <p>
                    <L
                        en={<>And the work is appreciated in a way that is rare. The users are here because they want to give, and they genuinely love the small app that lets them - when something you fixed makes their month a little smoother, they say so.</>}
                        zh={<>这份工作的正反馈，也是别处少有的。用户本来就是善良的捐赠者，真心喜欢这个产品；修好一个小问题，也会收到鼓励。</>}
                    />
                </p>
                <p>
                    <L
                        en={<>If you want to compare notes, my email is <Link to="/#contact">on this site</Link>.</>}
                        zh={<>想聊聊的话，<Link to="/#contact">网站上</Link>有我的邮箱。</>}
                    />
                </p>

                {/* The one place the piece signs off as a person. */}
                <div className="odw-signoff">
                    <img src={octopusSignoff} alt="" loading="lazy" aria-hidden />
                    <p className="odw-signoff-text">
                        {t({
                            en: 'One day a week, still going.',
                            zh: '每周一天，还在继续。',
                        })}
                    </p>
                </div>
            </div>
        </article>
    );
}

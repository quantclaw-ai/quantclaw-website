/**
 * Translation dictionary for the QuantClaw landing page.
 * One dictionary per locale; types enforce parity so a missing key on any
 * language breaks the build rather than ever silently showing English.
 */

export type Lang = "en" | "zh" | "ja";

export const LOCALES: Lang[] = ["en", "zh", "ja"];

export const LOCALE_META: Record<Lang, { label: string; short: string; href: string }> = {
  en: { label: "English", short: "EN", href: "/" },
  zh: { label: "中文",    short: "中", href: "/zh" },
  ja: { label: "日本語",  short: "日", href: "/ja" },
};

// ─── Fixed data (no translation) ────────────────────────────────────

export const GITHUB_URL = "https://github.com/quantclaw-ai/QuantClaw";
export const EMAIL = "harry@quantclaw-ai.com";

// Agent roster — names + glyphs + colors are universal; roles translated below.
export const AGENT_ROSTER: { key: string; color: string; glyph: string }[] = [
  { key: "scheduler",    color: "#f59e0b", glyph: "M" },
  { key: "sentinel",     color: "#f43f5e", glyph: "W" },
  { key: "researcher",   color: "#06b6d4", glyph: "?" },
  { key: "ingestor",     color: "#3b82f6", glyph: "⇵" },
  { key: "miner",        color: "#ef4444", glyph: "⛏" },
  { key: "trainer",      color: "#ec4899", glyph: "◈" },
  { key: "backtester",   color: "#8b5cf6", glyph: "↻" },
  { key: "evaluator",    color: "#14b8a6", glyph: "✓" },
  { key: "executor",     color: "#22c55e", glyph: "⟶" },
  { key: "risk_monitor", color: "#a855f7", glyph: "⛨" },
  { key: "compliance",   color: "#6366f1", glyph: "§" },
  { key: "debugger",     color: "#eab308", glyph: "⊘" },
  { key: "reporter",     color: "#f97316", glyph: "▤" },
];

// ─── Translation shape ──────────────────────────────────────────────

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { agents: string; features: string; architecture: string; getStarted: string };
  hero: {
    subtitle: string;
    taglineLeft: string;
    taglineMid: string;
    taglineRight: string;
    primaryCta: string;
    secondaryCta: string;
  };
  agents: {
    eyebrow: string;
    title: string;
    intro: string;
    list: { name: string; role: string }[];  // same order as AGENT_ROSTER
  };
  features: {
    eyebrow: string;
    title: string;
    items: { tag: string; title: string; desc: string }[];
  };
  harness: {
    eyebrow: string;
    title: string;
    intro: string;
    layers: { name: string; desc: string }[];
  };
  how: {
    eyebrow: string;
    titlePrefix: string;
    titleTo: string;
    steps: { title: string; desc: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { label: string; items: string[] }[];
  };
  cta: {
    titleHi: string;
    titleLow: string;
    body: string;
    button: string;
  };
  footer: { license: string };
}

// ─── EN ─────────────────────────────────────────────────────────────

const EN: Dictionary = {
  meta: {
    title: "QuantClaw — Open-Source Quant Trading Superagent",
    description: "AI-powered multi-agent harness for quantitative trading. Factor mining, backtesting, ML training, paper-first campaigns.",
  },
  nav: { agents: "Agents", features: "Features", architecture: "Architecture", getStarted: "Get Started" },
  hero: {
    subtitle: "Open-source multi-agent harness for quantitative trading.",
    taglineLeft: "THIRTEEN PETS",
    taglineMid: "ONE TRADING FLOOR",
    taglineRight: "PAPER-FIRST SAFETY",
    primaryCta: "Get Started",
    secondaryCta: "View Source",
  },
  agents: {
    eyebrow: "THE ROSTER",
    title: "Thirteen Pets on the Floor",
    intro: "Every agent has a scoped job declared in a single manifest. The planner reads it, the dispatcher runs it, and you watch it on the trading floor.",
    list: [
      { name: "Scheduler",    role: "Cron trigger daemon" },
      { name: "Sentinel",     role: "Reactive alert guardian" },
      { name: "Researcher",   role: "LLM-driven factor hypothesis search" },
      { name: "Ingestor",     role: "Market data fetcher with range-aware cache" },
      { name: "Miner",        role: "Evolutionary factor discovery in sandbox" },
      { name: "Trainer",      role: "Sandboxed ML training — xgboost / lightgbm / lstm / …" },
      { name: "Backtester",   role: "Historical strategy replay" },
      { name: "Evaluator",    role: "Held-out validation, calibrated over time" },
      { name: "Executor",     role: "Paper / live order submission" },
      { name: "Risk Monitor", role: "Drawdown, concentration, leverage daemon" },
      { name: "Compliance",   role: "Rule-based trade gatekeeper" },
      { name: "Debugger",     role: "LLM diagnostic on cycle failures" },
      { name: "Reporter",     role: "Executive summary, always last step" },
    ],
  },
  features: {
    eyebrow: "CAPABILITIES",
    title: "What the Harness Actually Does",
    items: [
      { tag: "AGENTS",         title: "13 Specialists, One Floor",
        desc: "Each agent has a scoped job, declared inputs/outputs, and a matching pet on the dashboard trading floor — complete with breathing, blinking, and species-specific idle animations." },
      { tag: "ROUTING",        title: "Multi-Provider LLM Routing",
        desc: "Anthropic, OpenAI, Google Gemini, and local Ollama — swap providers in config, not code. OAuth via a Node.js sidecar means Claude Code / Codex / Gemini CLI logins just work." },
      { tag: "CAPITAL SAFETY", title: "Paper-First Campaigns",
        desc: "Broad goals like \"go make me cash\" compile into a paper-first state machine. The campaign only advances to paper after a held-out validation gate, and pauses on drawdown breach — not arbitrary cycle limits." },
      { tag: "CODE SAFETY",    title: "Sandboxed Factor Execution",
        desc: "LLM-generated factor and training code runs in subprocess-isolated sandboxes with AST-enforced import whitelists, blocked dunder access, env-var stripping, and resource caps." },
      { tag: "DATA",           title: "20 Built-in Data Sources",
        desc: "Twelve free (Yahoo Finance, FRED, SEC EDGAR, World Bank, IMF, BLS, Treasury, ECB, BIS, CFTC, OpenInsider, Stooq) plus eight API-key sources (Alpha Vantage, Finnhub, FMP, SimFin, Tiingo, Twelve Data, Nasdaq, EIA). One range-aware parquet cache shared across them all." },
      { tag: "DISCOVERY",      title: "Shadow Search in Paper Phase",
        desc: "While one strategy runs in paper, the discovery pipeline continues in the background every Nth cycle. The allocator arbitrates incumbent-vs-challenger on each rebalance, so you never stop looking for better alpha." },
      { tag: "OBSERVABILITY",  title: "Typed Event Bus & Cost Tracking",
        desc: "Every agent action is a typed event. Router tracks LLM tokens per call, per agent, per model — fires cost.budget_warning on threshold cross, routed to Telegram / Discord / Slack by urgency." },
      { tag: "PERSISTENCE",    title: "Append-Only Memory with Compaction",
        desc: "Playbook is a JSONL log every agent writes to. Compaction keeps latest-per-key snapshots and archives the tail to gzip so restart stays fast no matter how long the campaign runs." },
    ],
  },
  harness: {
    eyebrow: "ARCHITECTURE",
    title: "Eight Cooperating Layers",
    intro: "The LLM is one tool inside the system. Everything around it is the harness.",
    layers: [
      { name: "Mission",       desc: "CampaignManager compiles broad goals into phase state machines" },
      { name: "Orchestration", desc: "OODA + Planner + Dispatcher + LLMRouter + OAuth sidecar" },
      { name: "Agent",         desc: "Thirteen specialists declared in a single manifest" },
      { name: "Execution",     desc: "Sandbox for LLM code, narrow Strategy contract, paper runner" },
      { name: "Portfolio",     desc: "DeploymentAllocator with active / watchlist / retired tiers" },
      { name: "Memory",        desc: "Append-only Playbook JSONL + queryable SQLite state DB" },
      { name: "Observability", desc: "Typed events, urgency-routed Telegram / Discord / Slack sinks" },
      { name: "Interface",     desc: "Next.js dashboard — trading floor, plan approvals, stop button" },
    ],
  },
  how: {
    eyebrow: "GET STARTED",
    titlePrefix: "From",
    titleTo: "to",
    steps: [
      { title: "Install",          desc: "pip install quantclaw; quantclaw dashboard launches the backend, sidecar, and Next.js dashboard on your machine." },
      { title: "Authenticate",     desc: "Sign in via Claude Code / Codex / Gemini CLI OAuth, or set an API key. Local models via Ollama work too — no network required." },
      { title: "Set a goal",       desc: "Chat naturally. Broad goals like \"go make me cash\" or \"find alpha\" compile into a standing profit campaign." },
      { title: "Watch the floor",  desc: "Thirteen pet-agents work in real time on the trading floor. Approve plans, hit the stop button, adjust risk limits — you stay CEO." },
      { title: "Paper, then live", desc: "Campaigns run paper-first. Drawdown breach and executor-failure streaks auto-pause. Promote to live only when you choose." },
    ],
  },
  stack: {
    eyebrow: "BUILT WITH",
    title: "Tech Stack",
    groups: [
      { label: "Engine",    items: ["Python 3.12", "FastAPI", "asyncio", "SQLite", "aiosqlite"] },
      { label: "ML",        items: ["pandas", "numpy", "scikit-learn", "xgboost", "lightgbm"] },
      { label: "Interface", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "WebSocket"] },
      { label: "Sidecar",   items: ["Node.js", "@anthropic-ai/sdk", "openai", "@google/genai"] },
    ],
  },
  cta: {
    titleHi: "Raise Your Own",
    titleLow: " Pet Farm",
    body: "MIT-licensed, runs on your own machine, every agent visible, inspectable, and yours.",
    button: "Get Started on GitHub",
  },
  footer: { license: "Open Source · MIT License" },
};

// ─── ZH (简体中文) ──────────────────────────────────────────────────

const ZH: Dictionary = {
  meta: {
    title: "QuantClaw — 开源量化交易多智能体系统",
    description: "AI 驱动的多智能体量化交易框架。因子挖掘、回测、ML 训练、纸面交易优先。",
  },
  nav: { agents: "代理", features: "功能", architecture: "架构", getStarted: "开始使用" },
  hero: {
    subtitle: "开源多智能体量化交易框架。",
    taglineLeft: "十三只宠物",
    taglineMid: "一个交易大厅",
    taglineRight: "纸面交易优先",
    primaryCta: "开始使用",
    secondaryCta: "查看源码",
  },
  agents: {
    eyebrow: "名册",
    title: "交易大厅上的十三只宠物",
    intro: "每个代理在统一清单中都有明确的职责。规划者读取它,调度者执行它,你则在交易大厅上观察它们工作。",
    list: [
      { name: "调度器 Scheduler",      role: "定时触发守护进程" },
      { name: "哨兵 Sentinel",         role: "响应式警报守护" },
      { name: "研究员 Researcher",     role: "LLM 驱动的因子假设搜索" },
      { name: "采集器 Ingestor",       role: "区间感知缓存的行情数据抓取器" },
      { name: "矿工 Miner",            role: "沙盒中的演化式因子发现" },
      { name: "训练师 Trainer",        role: "沙盒化 ML 训练 — xgboost / lightgbm / lstm / …" },
      { name: "回测器 Backtester",     role: "历史策略回放" },
      { name: "评估器 Evaluator",      role: "持出法校验,长期持续校准" },
      { name: "执行器 Executor",       role: "纸面 / 实盘订单提交" },
      { name: "风控 Risk Monitor",     role: "回撤、集中度、杠杆监控守护" },
      { name: "合规 Compliance",       role: "规则式交易关口" },
      { name: "调试员 Debugger",       role: "失败循环的 LLM 诊断" },
      { name: "报告员 Reporter",       role: "执行摘要,总是流水线最后一步" },
    ],
  },
  features: {
    eyebrow: "能力",
    title: "这套框架究竟做了什么",
    items: [
      { tag: "代理",       title: "十三位专家,一个大厅",
        desc: "每个代理都有明确的职责、声明的输入输出,并在仪表盘交易大厅上拥有一只对应的宠物 — 它们会呼吸、眨眼,每种物种还有独特的空闲动画。" },
      { tag: "路由",       title: "多提供商 LLM 路由",
        desc: "Anthropic、OpenAI、Google Gemini 和本地 Ollama — 只需修改配置就能切换提供商,无需改代码。通过 Node.js sidecar 走 OAuth,Claude Code / Codex / Gemini CLI 登录开箱即用。" },
      { tag: "资金安全",   title: "纸面交易优先",
        desc: "像「go make me cash」这样的宽泛目标会被编译成以纸面交易为先的状态机。只有通过持出法验证后才能进入纸面阶段,触及回撤阈值即暂停 — 不会因为任意循环次数而结束。" },
      { tag: "代码安全",   title: "沙盒化因子执行",
        desc: "LLM 生成的因子和训练代码在子进程隔离的沙盒中运行,包含 AST 强制的导入白名单、dunder 访问拦截、环境变量剥离与资源上限。" },
      { tag: "数据",       title: "20 种内置数据源",
        desc: "十二种免费源(Yahoo Finance、FRED、SEC EDGAR、世界银行、IMF、BLS、美国财政部、ECB、BIS、CFTC、OpenInsider、Stooq),外加八种 API key 源(Alpha Vantage、Finnhub、FMP、SimFin、Tiingo、Twelve Data、Nasdaq、EIA)。共享一套区间感知的 parquet 缓存。" },
      { tag: "探索",       title: "纸面阶段的影子搜索",
        desc: "当一个策略在纸面运行时,发现流水线每隔 N 个循环继续在后台工作。分配器在每次再平衡时仲裁在位者与挑战者 — 你永远不会停止寻找更好的 alpha。" },
      { tag: "可观测性",   title: "类型化事件总线与成本追踪",
        desc: "每个代理动作都是一个类型化事件。路由器按调用、代理、模型追踪 LLM token — 在超过阈值时触发 cost.budget_warning,按紧急程度路由到 Telegram / Discord / Slack。" },
      { tag: "持久化",     title: "带压缩的只追加内存",
        desc: "Playbook 是所有代理写入的 JSONL 日志。压缩只保留每个键的最新快照,并把历史尾部归档为 gzip — 无论活动跑多久,重启都很快。" },
    ],
  },
  harness: {
    eyebrow: "架构",
    title: "八层协同",
    intro: "LLM 只是系统里的一个工具。围绕它的一切才是 harness。",
    layers: [
      { name: "任务",       desc: "CampaignManager 把宽泛目标编译为阶段状态机" },
      { name: "编排",       desc: "OODA + Planner + Dispatcher + LLMRouter + OAuth sidecar" },
      { name: "代理",       desc: "清单中声明的十三位专家" },
      { name: "执行",       desc: "LLM 代码沙盒、精简 Strategy 契约、纸面执行器" },
      { name: "组合",       desc: "DeploymentAllocator 管理 活跃 / 观察 / 退役 三档" },
      { name: "记忆",       desc: "只追加的 Playbook JSONL + 可查询的 SQLite 状态数据库" },
      { name: "可观测性",   desc: "类型化事件、按紧急程度路由的 Telegram / Discord / Slack 通道" },
      { name: "界面",       desc: "Next.js 仪表盘 — 交易大厅、计划审批、停止按钮" },
    ],
  },
  how: {
    eyebrow: "开始使用",
    titlePrefix: "从",
    titleTo: "到",
    steps: [
      { title: "安装",              desc: "pip install quantclaw;quantclaw dashboard 会在你本机启动后端、sidecar 和 Next.js 仪表盘。" },
      { title: "认证",              desc: "通过 Claude Code / Codex / Gemini CLI OAuth 登录,或填入 API key。也支持本地 Ollama 模型 — 离线可用。" },
      { title: "设定目标",          desc: "自然对话即可。像「go make me cash」或「find alpha」这样的宽泛目标会被编译为持续运行的盈利活动。" },
      { title: "观察交易大厅",      desc: "十三只宠物代理在交易大厅实时工作。审批计划、按下停止、调整风险上限 — 你始终是 CEO。" },
      { title: "先纸面,后实盘",    desc: "活动默认纸面优先。回撤破限或执行器连续失败会自动暂停。你决定何时上实盘。" },
    ],
  },
  stack: {
    eyebrow: "技术栈",
    title: "技术栈",
    groups: [
      { label: "引擎",    items: ["Python 3.12", "FastAPI", "asyncio", "SQLite", "aiosqlite"] },
      { label: "机器学习", items: ["pandas", "numpy", "scikit-learn", "xgboost", "lightgbm"] },
      { label: "界面",    items: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "WebSocket"] },
      { label: "Sidecar", items: ["Node.js", "@anthropic-ai/sdk", "openai", "@google/genai"] },
    ],
  },
  cta: {
    titleHi: "饲养你自己的",
    titleLow: " 宠物农场",
    body: "MIT 许可,跑在你自己的机器上,每一个代理都可见、可审、属于你。",
    button: "前往 GitHub 开始",
  },
  footer: { license: "开源 · MIT 许可证" },
};

// ─── JA (日本語) ───────────────────────────────────────────────────

const JA: Dictionary = {
  meta: {
    title: "QuantClaw — オープンソースのクオンツ取引スーパーエージェント",
    description: "AI マルチエージェント型クオンツ取引ハーネス。ファクターマイニング、バックテスト、ML 学習、ペーパーファースト運用。",
  },
  nav: { agents: "エージェント", features: "機能", architecture: "アーキテクチャ", getStarted: "はじめる" },
  hero: {
    subtitle: "オープンソースのマルチエージェント型クオンツ取引ハーネス。",
    taglineLeft: "十三匹のペット",
    taglineMid: "一つのトレーディングフロア",
    taglineRight: "ペーパーファースト",
    primaryCta: "はじめる",
    secondaryCta: "ソースを見る",
  },
  agents: {
    eyebrow: "ロスター",
    title: "トレーディングフロアの十三匹",
    intro: "すべてのエージェントは単一のマニフェストで役割を宣言しています。プランナーが読み、ディスパッチャが実行し、あなたはトレーディングフロアで観察します。",
    list: [
      { name: "Scheduler スケジューラー",  role: "cron トリガーのデーモン" },
      { name: "Sentinel センチネル",       role: "リアクティブなアラート守護" },
      { name: "Researcher リサーチャー",   role: "LLM 駆動のファクター仮説探索" },
      { name: "Ingestor インジェスター",   role: "レンジ対応キャッシュを持つ市場データ取得" },
      { name: "Miner マイナー",            role: "サンドボックス内での進化的ファクター発見" },
      { name: "Trainer トレーナー",        role: "サンドボックス化された ML 学習 — xgboost / lightgbm / lstm / …" },
      { name: "Backtester バックテスター", role: "過去データでの戦略リプレイ" },
      { name: "Evaluator エバリュエーター", role: "ホールドアウト検証、長期キャリブレーション" },
      { name: "Executor エグゼキューター", role: "ペーパー / ライブ注文の送信" },
      { name: "Risk Monitor リスクモニター", role: "ドローダウン・集中・レバレッジ監視デーモン" },
      { name: "Compliance コンプライアンス", role: "ルールベースの取引ゲートキーパー" },
      { name: "Debugger デバッガー",       role: "サイクル失敗時の LLM 診断" },
      { name: "Reporter レポーター",       role: "常に最後に走るエグゼクティブサマリー" },
    ],
  },
  features: {
    eyebrow: "機能",
    title: "このハーネスが実際にやること",
    items: [
      { tag: "エージェント",   title: "十三の専門家、一つのフロア",
        desc: "各エージェントには明確な役割、宣言された入出力、そしてダッシュボードのトレーディングフロア上に対応するペットがいます — 呼吸し、まばたきし、種ごとに固有のアイドルアニメーションを持ちます。" },
      { tag: "ルーティング",   title: "マルチプロバイダ LLM ルーティング",
        desc: "Anthropic、OpenAI、Google Gemini、ローカルの Ollama — コードではなく設定でプロバイダを切り替え。Node.js サイドカー経由の OAuth で Claude Code / Codex / Gemini CLI のログインがそのまま使えます。" },
      { tag: "資金安全性",     title: "ペーパーファーストのキャンペーン",
        desc: "「go make me cash」のような広いゴールは、ペーパーファーストの状態機械にコンパイルされます。ホールドアウト検証を通過してから初めてペーパーに進み、ドローダウン超過で自動停止 — 任意のサイクル上限ではありません。" },
      { tag: "コード安全性",   title: "サンドボックス化されたファクター実行",
        desc: "LLM が生成したファクター・学習コードは、AST で強制した import ホワイトリスト、dunder アクセス遮断、環境変数の除去、リソース上限を備えたサブプロセス隔離のサンドボックスで実行されます。" },
      { tag: "データ",         title: "20 種類のデータソース内蔵",
        desc: "無料 12 種(Yahoo Finance、FRED、SEC EDGAR、World Bank、IMF、BLS、米財務省、ECB、BIS、CFTC、OpenInsider、Stooq)、API キー 8 種(Alpha Vantage、Finnhub、FMP、SimFin、Tiingo、Twelve Data、Nasdaq、EIA)。共通のレンジ対応 parquet キャッシュで動作。" },
      { tag: "探索",           title: "ペーパー期間中のシャドウ探索",
        desc: "一つの戦略がペーパーで走っている間、発見パイプラインが N サイクルごとに裏で回り続けます。アロケータが各リバランスで現職対挑戦者を裁定 — より良いアルファを探し続けます。" },
      { tag: "可観測性",       title: "型付きイベントバスとコスト計測",
        desc: "すべてのエージェント行動は型付きイベントです。ルーターは LLM トークンを呼び出し単位・エージェント単位・モデル単位で追跡 — しきい値越えで cost.budget_warning を発火、緊急度に応じて Telegram / Discord / Slack へ振り分けます。" },
      { tag: "永続化",         title: "コンパクション付き追記専用メモリ",
        desc: "Playbook は全エージェントが書き込む JSONL ログです。コンパクションは各キーの最新スナップショットを残し、古い尾部を gzip に退避 — キャンペーンが長引いても起動が速いまま。" },
    ],
  },
  harness: {
    eyebrow: "アーキテクチャ",
    title: "協働する八層",
    intro: "LLM はシステム内のひとつの道具。その周りすべてがハーネスです。",
    layers: [
      { name: "ミッション",     desc: "CampaignManager が広いゴールをフェーズ状態機械へコンパイル" },
      { name: "オーケストレーション", desc: "OODA + Planner + Dispatcher + LLMRouter + OAuth サイドカー" },
      { name: "エージェント",   desc: "単一マニフェストに宣言された十三の専門家" },
      { name: "実行",           desc: "LLM コードのサンドボックス、絞った Strategy 契約、ペーパーランナー" },
      { name: "ポートフォリオ", desc: "DeploymentAllocator が アクティブ / ウォッチリスト / リタイア を管理" },
      { name: "メモリ",         desc: "追記専用の Playbook JSONL + 問い合わせ可能な SQLite 状態 DB" },
      { name: "可観測性",       desc: "型付きイベント、緊急度で振り分ける Telegram / Discord / Slack シンク" },
      { name: "インタフェース", desc: "Next.js ダッシュボード — トレーディングフロア、計画承認、停止ボタン" },
    ],
  },
  how: {
    eyebrow: "はじめる",
    titlePrefix: "",
    titleTo: "まで",
    steps: [
      { title: "インストール",      desc: "pip install quantclaw;quantclaw dashboard がバックエンド・サイドカー・Next.js ダッシュボードをローカルで起動します。" },
      { title: "認証",              desc: "Claude Code / Codex / Gemini CLI の OAuth でサインインするか、API キーを設定。Ollama のローカルモデルなら通信なしでも動きます。" },
      { title: "ゴールを設定",      desc: "自然な会話で指示します。「go make me cash」や「find alpha」のような広いゴールは、常駐するプロフィットキャンペーンへコンパイルされます。" },
      { title: "フロアを見る",      desc: "十三匹のペット・エージェントがトレーディングフロアでリアルタイムに働きます。計画の承認、停止ボタン、リスク上限の調整 — あなたは CEO のまま。" },
      { title: "ペーパー、そしてライブ", desc: "キャンペーンはペーパーファースト。ドローダウン突破やエグゼキューター連続失敗で自動停止。ライブ昇格はあなたの判断で。" },
    ],
  },
  stack: {
    eyebrow: "技術スタック",
    title: "技術スタック",
    groups: [
      { label: "エンジン",   items: ["Python 3.12", "FastAPI", "asyncio", "SQLite", "aiosqlite"] },
      { label: "ML",         items: ["pandas", "numpy", "scikit-learn", "xgboost", "lightgbm"] },
      { label: "インタフェース", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "WebSocket"] },
      { label: "サイドカー", items: ["Node.js", "@anthropic-ai/sdk", "openai", "@google/genai"] },
    ],
  },
  cta: {
    titleHi: "あなた自身の",
    titleLow: " ペット牧場を",
    body: "MIT ライセンス、あなたのマシン上で動作、すべてのエージェントが可視・検査可能・あなたのもの。",
    button: "GitHub ではじめる",
  },
  footer: { license: "オープンソース · MIT ライセンス" },
};

export const COPY: Record<Lang, Dictionary> = { en: EN, zh: ZH, ja: JA };

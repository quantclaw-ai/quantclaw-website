const GITHUB_URL = "https://github.com/quantclaw-ai/QuantClaw";
const EMAIL = "slzhang0824@gmail.com";

const FEATURES = [
  {
    icon: "🤖",
    title: "12 Specialized Agents",
    desc: "Researcher, Backtester, Miner, Trainer, Executor, and more — each with its own LLM brain.",
  },
  {
    icon: "🧠",
    title: "Multi-LLM Support",
    desc: "OpenAI, Anthropic, Gemini, DeepSeek, Ollama, and 10+ providers. Mix models per agent.",
  },
  {
    icon: "📊",
    title: "30+ Data Sources",
    desc: "Yahoo Finance, FRED, SEC EDGAR, crypto exchanges, and premium APIs — auto-ingested.",
  },
  {
    icon: "🔬",
    title: "Factor Mining",
    desc: "LLM agents discover alpha factors autonomously. Evaluate, backtest, and deploy.",
  },
  {
    icon: "⚡",
    title: "ML Training Pipeline",
    desc: "Train models on discovered factors with walk-forward validation and overfitting guards.",
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    desc: "Real-time drawdown limits, position sizing, and compliance checks before every trade.",
  },
];

const STACK = [
  "Python", "FastAPI", "Next.js", "TypeScript", "Tailwind",
  "WebSocket", "asyncio", "SQLite",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen circuit-bg">
      {/* ════════════ NAV ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void/70 border-b border-trace">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/crab.png" alt="QuantClaw" className="w-7 h-7 object-contain" />
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-gold">Q</span>
              <span className="text-[#6a7a9a]">uantClaw</span>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">Features</a>
            <a href="#how" className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">How It Works</a>
            <a href="#contact" className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">Contact</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-trace text-sm text-[#6a7a9a] hover:border-circuit/30 hover:text-circuit-light transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* ════════════ HERO — THE CRAB IS THE PAGE ════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Crab as full background */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <img
            src="/crab.png"
            alt=""
            className="w-auto max-w-none opacity-50 crab-hero select-none"
            style={{
              height: "90vh",
              marginTop: "-2vh",
              maskImage: "radial-gradient(ellipse 55% 55% at 50% 40%, black 20%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 40%, black 20%, transparent 75%)",
            }}
          />
        </div>

        {/* Dark gradient so text is readable */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(180deg, rgba(5,9,17,0.2) 0%, rgba(5,9,17,0.4) 30%, rgba(5,9,17,0.8) 55%, rgba(5,9,17,0.97) 75%)",
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6" style={{ marginTop: "40vh" }}>
          <h1
            className="text-7xl md:text-8xl font-extrabold tracking-tight mb-4 animate-fade-up"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gold text-glow-gold">Quant</span>
            <span className="text-[#4a5a78]">Claw</span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#4a5e80] font-light max-w-xl mx-auto mb-2 animate-fade-up"
            style={{ animationDelay: "0.1s", fontFamily: "var(--font-body)" }}
          >
            Open-source AI-powered multi-agent harness for quantitative trading
          </p>

          <p
            className="text-[10px] text-circuit font-mono tracking-[0.3em] uppercase mb-10 animate-fade-up text-glow-circuit"
            style={{ animationDelay: "0.2s", opacity: 0.4 }}
          >
            FROM BEGINNER → AUTONOMOUS QUANT
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gold text-[#050911] font-semibold text-base tracking-wide hover:bg-gold-light transition-all"
              style={{ fontFamily: "var(--font-display)", boxShadow: "0 0 25px rgba(212,165,23,0.15)" }}
            >
              Get Started
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-trace text-[#5a6a8a] font-medium text-base hover:border-circuit/30 hover:text-circuit-light transition-all"
              style={{ fontFamily: "var(--font-display)" }}
            >
              View Source
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="w-px h-8" style={{ background: "linear-gradient(180deg, transparent, rgba(14,107,128,0.3))" }} />
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section id="features" className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit" style={{ opacity: 0.5 }}>
              CAPABILITIES
            </p>
            <h2 className="text-4xl font-bold text-[#7a8aa8]" style={{ fontFamily: "var(--font-display)" }}>
              What QuantClaw Does
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-trace bg-hull/50 hover:border-circuit/20 transition-all group"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-base font-semibold text-[#8a9ab8] mb-2 group-hover:text-circuit-light transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-[#3e5070] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section id="how" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit" style={{ opacity: 0.5 }}>
              WORKFLOW
            </p>
            <h2 className="text-4xl font-bold text-[#7a8aa8]" style={{ fontFamily: "var(--font-display)" }}>
              How It Works
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Install & Configure", desc: "pip install quantclaw, pick your LLM provider, and choose your experience level." },
              { step: "02", title: "Agents Activate", desc: "12 specialized agents spin up — researcher, miner, backtester, trainer, and more." },
              { step: "03", title: "Autonomous Discovery", desc: "Agents mine factors, backtest strategies, and train ML models on your data sources." },
              { step: "04", title: "You Stay In Control", desc: "Review every decision, approve trades, adjust risk limits. CEO mode — not autopilot." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start p-5 rounded-lg border border-trace bg-hull/30 hover:border-circuit/15 transition-all">
                <span className="text-2xl font-bold text-circuit/30 shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#8a9ab8] mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-[#3e5070] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TECH STACK ════════════ */}
      <section id="stack" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit" style={{ opacity: 0.5 }}>
            BUILT WITH
          </p>
          <h2 className="text-4xl font-bold text-[#7a8aa8] mb-10" style={{ fontFamily: "var(--font-display)" }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((s) => (
              <span key={s} className="px-4 py-2 rounded-md border border-trace bg-hull/40 text-sm font-mono text-[#5a6a8a]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/crab.png" alt="" className="w-20 h-20 object-contain mx-auto mb-6 crab-hero select-none" style={{
            filter: "drop-shadow(0 0 15px rgba(212,165,23,0.2))",
          }} />
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gold text-glow-gold">Start Trading</span>
            <span className="text-[#4a5a78]"> Smarter</span>
          </h2>
          <p className="text-[#3e5070] mb-8 max-w-md mx-auto">
            Free, open-source, and built for everyone from beginners to professional quants.
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-gold text-[#050911] font-semibold text-base tracking-wide hover:bg-gold-light transition-all"
            style={{ fontFamily: "var(--font-display)", boxShadow: "0 0 25px rgba(212,165,23,0.15)" }}
          >
            Get Started on GitHub
          </a>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer id="contact" className="border-t border-trace py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/crab.png" alt="QuantClaw" className="w-6 h-6 object-contain" />
            <span className="text-sm font-mono text-[#2a3e5a]">QuantClaw v0.1.0</span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="text-sm text-[#3e5070] hover:text-circuit-light transition-colors">
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#3e5070] hover:text-circuit-light transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="text-[10px] text-[#1a2a45] font-mono">
            Open Source — MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}


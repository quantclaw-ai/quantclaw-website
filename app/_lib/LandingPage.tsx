import {
  COPY,
  EMAIL,
  GITHUB_URL,
  LOCALE_META,
  LOCALES,
  type Lang,
} from "./copy";
import { AgentRoster } from "./AgentRoster";

const stagger = (i: number, base = 0.08) => ({ animationDelay: `${base + i * 0.05}s` });

export function LandingPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const homeHref = LOCALE_META[lang].href;

  return (
    <div className="min-h-screen circuit-bg grain" lang={lang}>
      {/* ════════════ NAV ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void/70 border-b border-trace">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href={homeHref} className="flex items-center gap-2.5">
            <img src="/crab.png" alt="QuantClaw" className="w-7 h-7 object-contain" />
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-gold">Q</span>
              <span className="text-[#6a7a9a]">uantClaw</span>
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a href={`${homeHref === "/" ? "" : homeHref}#agents`}   className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">{t.nav.agents}</a>
            <a href={`${homeHref === "/" ? "" : homeHref}#features`} className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">{t.nav.features}</a>
            <a href={`${homeHref === "/" ? "" : homeHref}#harness`}  className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">{t.nav.architecture}</a>
            <a href={`${homeHref === "/" ? "" : homeHref}#how`}      className="text-sm text-[#4a5e80] hover:text-circuit-light transition-colors hidden md:block">{t.nav.getStarted}</a>

            {/* Language toggle */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-md border border-trace">
              {LOCALES.map((code) => {
                const isActive = code === lang;
                return (
                  <a
                    key={code}
                    href={LOCALE_META[code].href}
                    aria-label={LOCALE_META[code].label}
                    className={`px-2 py-0.5 text-xs font-mono rounded transition-all ${
                      isActive
                        ? "text-gold text-glow-gold"
                        : "text-[#4a5e80] hover:text-circuit-light"
                    }`}
                  >
                    {LOCALE_META[code].short}
                  </a>
                );
              })}
            </div>

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

      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines">
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

        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(180deg, rgba(5,9,17,0.2) 0%, rgba(5,9,17,0.4) 30%, rgba(5,9,17,0.8) 55%, rgba(5,9,17,0.97) 75%)",
        }} />

        <div className="relative z-10 text-center px-6" style={{ marginTop: "40vh" }}>
          <h1
            className="text-7xl md:text-8xl font-extrabold tracking-tight mb-4 animate-fade-up"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gold text-glow-gold">Quant</span>
            <span className="text-[#4a5a78]">Claw</span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#6a7e9e] font-light max-w-2xl mx-auto mb-3 animate-fade-up"
            style={{ animationDelay: "0.1s", fontFamily: "var(--font-body)" }}
          >
            {t.hero.subtitle}
          </p>

          <p
            className="text-[10px] text-circuit font-mono tracking-[0.3em] uppercase mb-10 animate-fade-up text-glow-circuit inline-flex items-center gap-3 flex-wrap justify-center"
            style={{ animationDelay: "0.2s", opacity: 0.55 }}
          >
            <span>{t.hero.taglineLeft}</span>
            <span className="text-[#1a2a45]">·</span>
            <span>{t.hero.taglineMid}</span>
            <span className="text-[#1a2a45]">·</span>
            <span>{t.hero.taglineRight}</span>
            <span className="w-[7px] h-3 bg-circuit-light/70 animate-cursor-blink ml-1" />
          </p>

          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-gold text-[#050911] font-semibold text-base tracking-wide hover:bg-gold-light transition-all"
              style={{ fontFamily: "var(--font-display)", boxShadow: "0 0 25px rgba(212,165,23,0.15)" }}
            >
              {t.hero.primaryCta}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="w-px h-8" style={{ background: "linear-gradient(180deg, transparent, rgba(14,107,128,0.3))" }} />
        </div>
      </section>

      {/* ════════════ AGENT ROSTER ════════════ */}
      <AgentRoster copy={t.agents} />

      {/* ════════════ FEATURES ════════════ */}
      <section id="features" className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit animate-pulse-dim">
              {t.features.eyebrow}
            </p>
            <h2 className="text-4xl font-bold text-[#9aa8c8]" style={{ fontFamily: "var(--font-display)" }}>
              {t.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.features.items.map((f, i) => (
              <div
                key={f.title}
                className="feature-card p-6 rounded-lg border border-trace bg-hull/50 animate-fade-up"
                style={stagger(i)}
              >
                <p className="feature-tag text-[9px] font-mono tracking-[0.3em] uppercase mb-3 text-[#3e6570] transition-colors">
                  {f.tag}
                </p>
                <h3
                  className="text-base font-semibold text-[#c0cde0] mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[#5a6e8c] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ ARCHITECTURE ════════════ */}
      <section id="harness" className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit animate-pulse-dim">
              {t.harness.eyebrow}
            </p>
            <h2 className="text-4xl font-bold text-[#9aa8c8]" style={{ fontFamily: "var(--font-display)" }}>
              {t.harness.title}
            </h2>
            <p className="text-[#4a5e80] text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              {t.harness.intro}
            </p>
          </div>

          <div className="relative pl-2">
            {t.harness.layers.map((l, i) => (
              <div
                key={l.name}
                className="layer-row flex gap-6 items-start p-5 rounded-lg border border-trace bg-hull/30 hover:border-circuit/25 transition-all mb-4 animate-fade-up"
                style={stagger(i)}
              >
                <span
                  className="relative z-10 text-2xl font-bold tabular-nums shrink-0 w-12 text-center"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(14,107,128,0.6)",
                    textShadow: "0 0 10px rgba(14,107,128,0.25)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="layer-spine" />
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#c0cde0] tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{l.name}</h3>
                  <p className="text-sm text-[#5a6e8c] leading-relaxed mt-1">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <section id="how" className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit animate-pulse-dim">
              {t.how.eyebrow}
            </p>
            <h2
              className="text-4xl font-bold text-[#9aa8c8]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.how.titlePrefix}{" "}
              <span className="font-mono text-gold text-[0.85em]">npm install</span>{" "}
              {t.how.titleTo}{" "}
              <span className="font-mono text-gold text-[0.85em]">&ldquo;go make me cash&rdquo;</span>
            </h2>
          </div>

          <div className="space-y-4">
            {t.how.steps.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start p-5 rounded-lg border border-trace bg-hull/30 hover:border-circuit/25 hover:bg-hull/50 transition-all animate-fade-up"
                style={stagger(i)}
              >
                <span
                  className="text-2xl font-bold shrink-0 tabular-nums"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(212,165,23,0.35)",
                    textShadow: "0 0 10px rgba(212,165,23,0.2)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#c0cde0] mb-1 tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm text-[#5a6e8c] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TECH STACK ════════════ */}
      <section id="stack" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit animate-pulse-dim">
              {t.stack.eyebrow}
            </p>
            <h2 className="text-4xl font-bold text-[#9aa8c8]" style={{ fontFamily: "var(--font-display)" }}>
              {t.stack.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.stack.groups.map((group, gi) => (
              <div key={group.label} className="animate-fade-up" style={stagger(gi)}>
                <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-[#3e6570]">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-md border border-trace bg-hull/40 text-xs font-mono text-[#7a8aa8] hover:border-circuit/35 hover:text-circuit-light transition-all"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <img src="/crab.png" alt="" className="w-24 h-24 object-contain mx-auto mb-6 crab-hero select-none" style={{
            filter: "drop-shadow(0 0 20px rgba(212,165,23,0.25))",
          }} />
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gold text-glow-gold">{t.cta.titleHi}</span>
            <span className="text-[#4a5a78]">{t.cta.titleLow}</span>
          </h2>
          <p className="text-[#5a6e8c] mb-10 max-w-md mx-auto leading-relaxed">
            {t.cta.body}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 rounded-lg bg-gold text-[#050911] font-semibold text-base tracking-wide hover:bg-gold-light transition-all"
            style={{ fontFamily: "var(--font-display)", boxShadow: "0 0 25px rgba(212,165,23,0.15)" }}
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer id="contact" className="border-t border-trace py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/crab.png" alt="QuantClaw" className="w-6 h-6 object-contain" />
          </div>

          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="text-sm text-[#5a6e8c] hover:text-circuit-light transition-colors">
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#5a6e8c] hover:text-circuit-light transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="text-[10px] text-[#1a2a45] font-mono tracking-wider">
            {t.footer.license}
          </p>
        </div>
      </footer>
    </div>
  );
}

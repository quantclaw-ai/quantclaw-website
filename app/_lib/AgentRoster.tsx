"use client";

import { useState } from "react";
import { AGENT_ROSTER, type Dictionary } from "./copy";

const stagger = (i: number, base = 0.02) => ({ animationDelay: `${base + i * 0.04}s` });

export function AgentRoster({ copy }: { copy: Dictionary["agents"] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="agents" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[10px] font-mono text-circuit tracking-[0.3em] uppercase mb-3 text-glow-circuit animate-pulse-dim">
            {copy.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-[#9aa8c8]" style={{ fontFamily: "var(--font-display)" }}>
            {copy.title}
          </h2>
          <p className="text-[#4a5e80] text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            {copy.intro}
          </p>
          <p className="text-[10px] font-mono text-[#3e6570] tracking-[0.25em] uppercase mt-4">
            ↳ {copy.clickHint}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AGENT_ROSTER.map((a, i) => {
            const label = copy.list[i];
            const isOpen = openKey === a.key;
            return (
              <button
                key={a.key}
                type="button"
                onClick={() => setOpenKey(isOpen ? null : a.key)}
                aria-expanded={isOpen}
                className={`agent-card group text-left w-full rounded-lg bg-hull/40 animate-fade-up cursor-pointer ${
                  isOpen ? "agent-card-open" : ""
                }`}
                style={{ ["--accent" as string]: a.color, ...stagger(i) }}
              >
                <div className="flex items-center gap-4 pl-6 pr-4 py-4">
                  <span
                    className="shrink-0 w-10 h-10 rounded-md border flex items-center justify-center font-semibold text-base transition-transform group-hover:scale-105"
                    style={{
                      borderColor: `${a.color}55`,
                      background: `${a.color}10`,
                      color: a.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {a.glyph}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-sm font-semibold text-[#c0cde0] group-hover:text-white transition-colors tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {label.name}
                    </p>
                    <p className="text-xs text-[#4a5e80] leading-snug mt-0.5">{label.role}</p>
                  </div>
                  <span
                    className={`shrink-0 w-5 h-5 flex items-center justify-center text-[10px] font-mono transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                    style={{ color: a.color }}
                  >
                    +
                  </span>
                </div>

                {/* Expandable detail — uses the grid-rows 0fr→1fr trick for smooth height */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="mx-4 mb-4 mt-1 pl-5 pr-4 py-3 rounded-md border"
                      style={{
                        borderColor: `${a.color}30`,
                        background: `${a.color}08`,
                      }}
                    >
                      <p className="text-xs text-[#b0bdd0] leading-relaxed whitespace-pre-wrap">
                        {label.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

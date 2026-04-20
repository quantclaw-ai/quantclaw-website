import type { Metadata } from "next";
import { COPY, LOCALE_META, type Lang } from "./copy";

const SITE = "https://www.quantclaw-ai.com";

export function localeMetadata(lang: Lang): Metadata {
  const t = COPY[lang];
  const path = LOCALE_META[lang].href;
  const url = path === "/" ? SITE : `${SITE}${path}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        "en":    `${SITE}/`,
        "zh-CN": `${SITE}/zh`,
        "ja-JP": `${SITE}/ja`,
        // x-default helps Google pick a locale when none match.
        "x-default": `${SITE}/`,
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url,
      siteName: "QuantClaw",
      type: "website",
      locale: lang === "zh" ? "zh_CN" : lang === "ja" ? "ja_JP" : "en_US",
    },
  };
}

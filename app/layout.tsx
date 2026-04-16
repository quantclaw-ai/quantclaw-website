import type { Metadata } from "next";
import { Rajdhani, Exo_2, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const exo2 = Exo_2({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "QuantClaw — Open-Source Quant Trading Superagent",
  description:
    "AI-powered multi-agent harness for quantitative trading. Factor mining, backtesting, ML model training, and autonomous portfolio management.",
  openGraph: {
    title: "QuantClaw — Open-Source Quant Trading Superagent",
    description:
      "AI-powered multi-agent harness for quantitative trading.",
    url: "https://www.quantclaw-ai.com",
    siteName: "QuantClaw",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${exo2.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050911] text-[#b0bdd0]">
        {children}
      </body>
    </html>
  );
}

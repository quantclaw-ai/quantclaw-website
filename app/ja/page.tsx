import type { Metadata } from "next";
import { LandingPage } from "../_lib/LandingPage";
import { localeMetadata } from "../_lib/metadata";

export const metadata: Metadata = localeMetadata("ja");

export default function Page() {
  return <LandingPage lang="ja" />;
}

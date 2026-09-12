import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <h1>Terms</h1>;
}


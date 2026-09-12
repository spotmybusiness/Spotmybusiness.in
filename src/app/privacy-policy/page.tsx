import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return <h1>Privacy Policy</h1>;
}


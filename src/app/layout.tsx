import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charterportaal Phase 1",
  description: "Authentication and RBAC foundation preview for Charterportaal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

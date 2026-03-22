import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayple | The Future of Self-Care",
  description: "Direct access to the highest-rated beauty and wellness professionals, right in your pocket.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

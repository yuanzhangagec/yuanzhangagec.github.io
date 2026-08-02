import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuanzhangagec.github.io"),
  title: "Yuan Zhang | Agricultural Economist",
  description: "Yuan Zhang is an agricultural economist researching production, commodity markets, transportation disruptions, and risk.",
  openGraph: {
    title: "Yuan Zhang | Agricultural Economist",
    description: "Research on agricultural production, commodity markets, and risk.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yuan Zhang, Agricultural Economist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuan Zhang | Agricultural Economist",
    description: "Research on agricultural production, commodity markets, and risk.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jirat Nimsombun",
  description:
    "Jirat Nimsombun — engineering, technology, and strategy. Experience, selected projects, leadership, and contact links.",
  metadataBase: new URL("https://aomsin832.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jirat Nimsombun",
    description: "Engineering · Technology · Strategy",
    url: "/",
    siteName: "Jirat Nimsombun",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

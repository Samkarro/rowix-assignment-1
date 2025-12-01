import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGen",
  description: "Digital solutions that drive success.",
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

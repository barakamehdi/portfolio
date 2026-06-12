import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EL BARAKA | Full-Stack Engineer",
  description: "Building systems that scale. Creating experiences that resonate. A 42 Network developer specializing in full-stack engineering.",
  openGraph: {
    title: "EL BARAKA | Full-Stack Engineer",
    description: "Building systems that scale. Creating experiences that resonate.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}

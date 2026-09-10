import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Louahchi — Software Engineer",
  description:
    "Full-stack software engineer from Algeria. I build scalable web applications, backend systems and modern user experiences.",
  keywords: [
    "Mohamed Louahchi",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Algeria"
  ],
  authors: [{ name: "Mohamed Louahchi" }],
  openGraph: {
    title: "Mohamed Louahchi — Software Engineer",
    description:
      "Full-stack software engineer passionate about building useful products and learning new technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}


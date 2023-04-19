// These styles apply to every route in the application
import 'app/globals.css';
import { Providers } from 'app/providers';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Alan AI",
  description:
    "Alan AI is a free, open-source, and extensible a new way to use LLM with internet access, i",
  keywords: ["Next.js", "React", "JavaScript"],
  themeColor: "#62c0c9",
  authors: [{ name: "Turing AI", url: "https://turingai.tech" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/neon.png",
    shortcut: "/icons/neon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};


export default function Layout({
  children,
}: {
  children: any
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


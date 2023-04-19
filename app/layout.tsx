// These styles apply to every route in the application
import 'app/globals.css';
import { Providers } from 'app/providers';
import type { Metadata } from 'next';
import type { ReactNode } from "react";


const APP_NAME = "Renato Portfolio";
const APP_DESCRIPTION = "This is an example of using next-pwa";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function Layout({
  children,
}: {
  children: ReactNode
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


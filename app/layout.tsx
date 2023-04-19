// These styles apply to every route in the application
import 'app/globals.css';
import { Providers } from 'app/providers';
import type { Metadata } from 'next';


const APP_NAME = "Renato Portfolio";
const APP_DEFAULT_TITLE = "My Awesome PWA Portfolio";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA Portfolio in the world! My awesome PWA";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icons/touch-icon-ipad.png", sizes: "152x152" },
      { url: "/icons/touch-icon-ipad-retina.png", sizes: "167x167" },
      { url: "/icons/touch-icon-iphone-retina.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: "/icons/og.png",
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: "/icons/twitter.png",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
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


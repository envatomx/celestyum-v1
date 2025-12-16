// app/layout.tsx  (FULL CODE - applies Bitpop to body, Altroned available for headings)
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { altroned, bitpop } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://celestyum.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://celestyum.com/assets/images/poster.jpg",
        width: 1200,
        height: 630,
        alt: "CELESTYUM® Festival Poster",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["https://celestyum.com/assets/images/poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background antialiased overflow-x-hidden",
          altroned.variable,   // Available for headings
          bitpop.className,    // Default body font
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link isExternal href="https://vibecluv.com">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">vibecluv</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
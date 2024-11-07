import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
  ),
  title: {
    template: "%s | Profile E-Commerce",
    default: "Profile E-Commerce",
  },
  description: "Profile E-Commerce the Next-Gen Shopping Experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
    title: "Profile Shop",
    countryName: "India",
    siteName: "Profile Shop",
    description:
      "Profile.fyi is the next-gen professional social network aimed at enabling people to build their ultimate career profile by showcasing things that matter.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nirmalya_nayak",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

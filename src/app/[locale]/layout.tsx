import type { Metadata } from "next";
import "../globals.css";
import "../index.css";
import NavigationHeader from "@/components/layout/NavigationHeader";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import routing from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Kẹo Dừa Ngọc Mai - Hương vị ngọt ngào từ xứ Dừa Bến Tre",
    template: "%s | Kẹo Dừa Ngọc Mai",
  },
  description:
    "Thưởng thức tinh hoa ẩm thực miền Tây với kẹo dừa Bến Tre được chế biến thủ công từ những nguyên liệu tươi ngon nhất. Kẹo dừa Ngọc Mai - Hương vị truyền thống, chất lượng đảm bảo.",
  keywords: [
    "kẹo dừa",
    "kẹo dừa Bến Tre",
    "kẹo dừa Ngọc Mai",
    "kẹo dừa thủ công",
    "kẹo dừa truyền thống",
    "kẹo dừa tự nhiên",
    "đặc sản Bến Tre",
    "quà tặng miền Tây",
    "kẹo dừa sạch",
    "kẹo dừa chất lượng",
  ],
  authors: [{ name: "Kẹo Dừa Ngọc Mai" }],
  creator: "Kẹo Dừa Ngọc Mai",
  publisher: "Kẹo Dừa Ngọc Mai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.BASE_URL || ""),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.BASE_URL || "",
    title: "Kẹo Dừa Ngọc Mai - Hương vị ngọt ngào từ xứ Dừa Bến Tre",
    description:
      "Thưởng thức tinh hoa ẩm thực miền Tây với kẹo dừa Bến Tre được chế biến thủ công từ những nguyên liệu tươi ngon nhất.",
    siteName: "Kẹo Dừa Ngọc Mai",
    images: [
      {
        url: "/image/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Kẹo Dừa Ngọc Mai - Đặc sản Bến Tre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kẹo Dừa Ngọc Mai - Hương vị ngọt ngào từ xứ Dừa Bến Tre",
    description:
      "Thưởng thức tinh hoa ẩm thực miền Tây với kẹo dừa Bến Tre được chế biến thủ công từ những nguyên liệu tươi ngon nhất.",
    images: ["/image/hero-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: `${process.env.BASE_URL}/favicon.svg`, type: "image/svg+xml" },
      {
        url: `${process.env.BASE_URL}/image/favicon-32x32.png`,
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: `${process.env.BASE_URL}/image/favicon-16x16.png`,
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: `${process.env.BASE_URL}/favicon.svg`,
    apple: [
      {
        url: `${process.env.BASE_URL}/image/apple-touch-icon.png`,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  // manifest: "/image/site.webmanifest",
  category: "food",
  classification: "Kẹo dừa thủ công truyền thống",
  other: {
    "geo.region": "VN-50", // Bến Tre province code
    "geo.placename": "Bến Tre, Việt Nam",
    "geo.position": "10.2333;106.3833", // Approximate coordinates of Bến Tre
    ICBM: "10.2333, 106.3833",
    "google-site-verification": "HrIaxgo277BWjBgoBpZ9qO-jcLb_KJVd-Nhc_czyy6Q",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) { 
    notFound();
  }
  
setRequestLocale(locale);

  return (
    <html lang="vi">
      <body className="">
        <NextTopLoader />
        <GoogleAnalytics gaId="G-54KQGSXJWC" />
        <NextIntlClientProvider >
        <NavigationHeader/>
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

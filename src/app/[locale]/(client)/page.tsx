import BrandIntroduction from "@/components/layout/BrandIntroduction";
import ContactForm from "@/components/layout/ContactForm";
import HeroSection from "@/components/layout/HeroSection";
import ProductShowcase from "@/components/layout/ProductShowcase";
import Testimonials from "@/components/layout/Testimonials";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Kẹo Dừa Ngọc Mai - Đặc sản Truyền Thống",
  description:
    "Khám phá hương vị đích thực của kẹo dừa Bến Tre tại Kẹo Dừa Ngọc Mai. Sản phẩm thủ công 100% tự nhiên. Đặt hàng ngay để thưởng thức ẩm thực miền Tây!",
  keywords: [
    "kẹo dừa Bến Tre",
    "kẹo dừa thủ công",
    "đặc sản miền Tây",
    "kẹo dừa tự nhiên",
    "quà tặng Bến Tre",
    "kẹo dừa truyền thống",
    "kẹo dừa sạch",
    "kẹo dừa chất lượng cao",
    "đặt hàng kẹo dừa",
    "kẹo dừa online",
  ],
  openGraph: {
    title: "Kẹo Dừa Ngọc Mai - Đặc sản Bến Tre Thủ Công Truyền Thống",
    description:
      "Khám phá hương vị đích thực của kẹo dừa Bến Tre tại Kẹo Dừa Ngọc Mai. Sản phẩm thủ công 100% tự nhiên.",
    url: process.env.BASE_URL || "",
    images: [
      {
        url: "/image/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Kẹo Dừa Ngọc Mai - Đặc sản Bến Tre",
      },
      {
        url: "/image/keo-dua-tap-cam-1.jpg",
        width: 800,
        height: 600,
        alt: "Kẹo dừa thập cẩm thủ công",
      },
    ],
  },
  twitter: {
    title: "Kẹo Dừa Ngọc Mai - Đặc sản Bến Tre Thủ Công Truyền Thống",
    description:
      "Khám phá hương vị đích thực của kẹo dừa Bến Tre tại Kẹo Dừa Ngọc Mai. Sản phẩm thủ công 100% tự nhiên.",
    images: ["/image/hero-banner.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "product:price:amount": "50000",
    "product:price:currency": "VND",
    "product:availability": "in stock",
    "product:condition": "new",
    "business:contact_data:street_address": "Bến Tre, Việt Nam",
    "business:contact_data:locality": "Bến Tre",
    "business:contact_data:region": "Bến Tre",
    "business:contact_data:country_name": "Việt Nam",
  },
};

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "Kẹo Dừa Ngọc Mai",
//   description:
//     "Chuyên sản xuất và phân phối kẹo dừa thủ công truyền thống từ Bến Tre",
//   url: process.env.BASE_URL || "",
//   logo: process.env.BASE_URL + "/favicon.svg",
//   image: process.env.BASE_URL + "/image/hero-banner.jpg",
//   address: {
//     "@type": "PostalAddress",
//     addressLocality: "Bến Tre",
//     addressRegion: "Bến Tre",
//     addressCountry: "VN",
//   },
//   contactPoint: {
//     "@type": "ContactPoint",
//     contactType: "customer service",
//     availableLanguage: "Vietnamese",
//   },
//   sameAs: [
//     "https://facebook.com/keoduangocmai",
//     "https://instagram.com/keoduangocmai",
//   ],
//   hasOfferCatalog: {
//     "@type": "OfferCatalog",
//     name: "Kẹo Dừa Ngọc Mai",
//     itemListElement: [
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Product",
//           name: "Kẹo Dừa Thập Cẩm",
//           description: "Kẹo dừa thủ công truyền thống với nhiều loại hương vị",
//           image: process.env.BASE_URL + "/image/keo-dua-thap-cam-1.jpg",
//           category: "Thực phẩm",
//           review: {
//             "@type": "Review",
//             author: {
//               "@type": "Person",
//               name: "Chị Minh Châu",
//             },
//             datePublished: "2025-07-20",
//             reviewBody: "Kẹo rất ngon, gói đẹp, đáng mua.",
//             reviewRating: {
//               "@type": "Rating",
//               ratingValue: "5",
//               bestRating: "5",
//             },
//           },
//         },
//       },
//     ],
//   },
// };

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen">
      {/* <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <HeroSection />
      <BrandIntroduction />
      <ProductShowcase />
      {/* <ProductionProcess /> */}
      <Testimonials />
      <ContactForm />
      <Toaster position="top-right" richColors />
    </div>
  );
}

import ProductDetail from "@/components/layout/productDetail";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { getMessages, setRequestLocale } from "next-intl/server";
import { getTranslatedProductBySlug } from "@/helper/product-helper";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const messages = await getMessages();
  const product = getTranslatedProductBySlug(slug, messages as any);
  const t = await getTranslations({ locale });

  if (!product) {
    return {
      title: `${t("products.common.notFound")} | Kẹo Dừa Ngọc Mai`,
      description: t("products.common.notFound"),
    };
  }

  return {
    title: `${product.name} | Kẹo Dừa Ngọc Mai`,
    description: product.description,
    keywords: [
      "kẹo dừa",
      product.name.toLowerCase(),
      "kẹo dừa bến tre",
      "kẹo dừa ngọc mai",
      "kẹo dừa truyền thống",
      "kẹo dừa tự nhiên",
      ...product.features.map((feature) => feature.toLowerCase()),
    ].join(", "),
    openGraph: {
      title: `${product.name} | Kẹo Dừa Ngọc Mai`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Kẹo Dừa Ngọc Mai`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `/${locale}/product/${product.slug}`,
    },
  };
}

export default async function Page(props: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await props.params;
  setRequestLocale(locale);
  
  const messages = await getMessages();
  const product = getTranslatedProductBySlug(slug, messages as any);
  const t = await getTranslations({ locale });

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {t("products.common.notFound")}
          </h1>
          <Button>
            <Link href={`/${locale}`}>{t("products.common.goHome")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

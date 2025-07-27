import ProductDetail from "@/components/layout/productDetail";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/contants/product.contant";
import { Params } from "@/interfaces/params.interface";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm | Kẹo Dừa Ngọc Mai",
      description: "Sản phẩm bạn đang tìm kiếm không tồn tại.",
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
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Kẹo Dừa Ngọc Mai`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default async function Page(props: { params: Params }) {
  const { slug } = await props.params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Không tìm thấy sản phẩm
          </h1>
          <Button>
            <Link href="/">Về trang chủ</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

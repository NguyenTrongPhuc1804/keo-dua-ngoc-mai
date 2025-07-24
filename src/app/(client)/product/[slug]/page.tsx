import ProductDetail from "@/components/layout/productDetail";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/contants/product.contant";
import { Params } from "@/interfaces/params.interface";
import Link from "next/link";
import React from "react";

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

"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { getTranslatedProducts } from "@/helper/product-helper";

const ProductShowcase = () => {
  const t = useTranslations("productShow");
  const tProducts = useTranslations("products");
  
  // Lấy products đã được dịch
  const products = useMemo(() => {
    const productsList = tProducts.raw("list") as Array<{
      name: string;
      origin: string;
      weight: string;
      shelfLife: string;
      description: string;
      price: string;
      features: string[];
    }>;
    
    return getTranslatedProducts({
      products: {
        list: productsList,
      },
    });
  }, [tProducts]);

  return (
    <section id="products" className="py-20 bg-[#FFCB61]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
          </p>
          <div className="w-24 h-1 bg-coconut-brown rounded-full mx-auto mt-6"></div>
        </div>

        {/* Product Image */}
        <div className="mb-16">
          <Image
            src="/image/banner-keo-dua.jpg"
            alt="Các loại kẹo dừa Ngọc Mai"
            className="w-full max-w-4xl mx-auto h-80 object-cover rounded-3xl shadow-2xl"
            width={600}
            height={400}
            loading="lazy"
          />
        </div>
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300 group-hover:opacity-0"
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <Image
                  src={product?.image2 || ""}
                  alt={`${product.name} - ảnh 2`}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-48 object-cover group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-coconut-brown transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-nature-green rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-coconut-brown">
                      {product.price}
                    </span>
                    <Button variant="cta" size="sm">
                      <Link href={`/product/${product.slug}`}>
                        {t("viewDetail")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="px-12 py-6 text-lg">
            Xem Tất Cả Sản Phẩm
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductShowcase;

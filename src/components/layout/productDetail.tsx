"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/interfaces/product.interface";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const ProductDetail = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Thông tin sản phẩm
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Xuất xứ:</span>
                    <span className="font-medium text-foreground">
                      {product.origin}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Trọng lượng:</span>
                    <span className="font-medium text-foreground">
                      {product?.weight}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Hạn sử dụng:</span>
                    <span className="font-medium text-foreground">
                      {product?.shelfLife}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Đặc điểm nổi bật
                </h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-nature-green flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Thành phần
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-coconut-light text-coconut-brown rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Storage */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Bảo quản
                </h3>
                <p className="text-muted-foreground">
                  Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Lợi ích sức khỏe
                </h3>
                <div className="space-y-3">
                  {product.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-nature-green flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Description */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Mô tả chi tiết
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </CardContent>
            </Card> */}

            {/* CTA */}
            <div className="pt-6">
              <Button
                variant="hero"
                size="lg"
                className="w-full text-lg py-6"
                onClick={() => router.push("/#contact")}
              >
                Liên hệ đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

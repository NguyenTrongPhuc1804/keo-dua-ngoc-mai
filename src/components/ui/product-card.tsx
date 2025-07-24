"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/interfaces/product.interface";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/product/${product.slug}`)}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          width={500}
          height={300}
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
              <a href="#contact">Đặt Hàng</a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

import { PRODUCTS } from "@/contants/product.contant";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL;
  const now = new Date();
  return [
    {
      url: baseUrl + "/",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...PRODUCTS.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

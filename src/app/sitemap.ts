import { PRODUCTS } from "@/contants/product.contant";
import type { MetadataRoute } from "next";
import routing from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL;
  const now = new Date();
  
  // Tạo URLs cho tất cả các ngôn ngữ
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Duyệt qua từng locale
  routing.locales.forEach((locale) => {
    // Trang chủ cho mỗi locale
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    });
    
    // Trang sản phẩm cho mỗi locale
    PRODUCTS.forEach((product) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/product/${product.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    });
  });
  
  return sitemapEntries;
}

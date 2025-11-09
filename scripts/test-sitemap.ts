/**
 * Script test để kiểm tra sitemap entries
 * Chạy: npx tsx scripts/test-sitemap.ts
 */

import { PRODUCTS } from "../src/contants/product.contant";
import routing from "../src/i18n/routing";

// Giả lập BASE_URL (bạn có thể thay đổi giá trị này)
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

function generateSitemapEntries() {
  const now = new Date();
  const sitemapEntries: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: "monthly" | "weekly" | "daily" | "always" | "hourly" | "never";
    priority: number;
  }> = [];

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

// Chạy test
console.log("=== SITEMAP ENTRIES TEST ===\n");
console.log(`Base URL: ${baseUrl}\n`);
console.log(`Locales: ${routing.locales.join(", ")}\n`);
console.log(`Total products: ${PRODUCTS.length}\n`);

const entries = generateSitemapEntries();

console.log(`Total sitemap entries: ${entries.length}\n`);
console.log("=== DANH SÁCH URLs ===\n");

entries.forEach((entry, index) => {
  console.log(`${index + 1}. ${entry.url}`);
  console.log(`   - Priority: ${entry.priority}`);
  console.log(`   - Change Frequency: ${entry.changeFrequency}`);
  console.log(`   - Last Modified: ${entry.lastModified.toISOString()}\n`);
});

console.log("\n=== THỐNG KÊ ===\n");
console.log(`- Trang chủ (${routing.locales.length} locales): ${routing.locales.length} URLs`);
console.log(`- Trang sản phẩm (${PRODUCTS.length} products x ${routing.locales.length} locales): ${PRODUCTS.length * routing.locales.length} URLs`);
console.log(`- Tổng cộng: ${entries.length} URLs`);


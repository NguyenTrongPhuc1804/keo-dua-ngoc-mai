// Base product data - chỉ chứa thông tin không thay đổi (id, slug, images)
// Translations được lấy từ messages files thông qua helper function
export const PRODUCT_BASE_DATA = [
  {
    id: 1,
    slug: "keo-dua-truyen-thong",
    image: "/image/keo-dua-beo.jpg",
    image2: "/image/keo-dua-beo.jpg",
    images: ["/image/keo-dua-beo.jpg"],
  },
  {
    id: 2,
    slug: "keo-dua-sau-rieng",
    image: "/image/keo-dua-sau-rieng.jpg",
    image2: "/image/keo-dua-sau-rieng.jpg",
    images: ["/image/keo-dua-sau-rieng.jpg"],
  },
  {
    id: 3,
    slug: "keo-dua-la-dua",
    image: "/image/keo-dua-la-dua.jpg",
    image2: "/image/keo-dua-la-dua.jpg",
    images: ["/image/keo-dua-la-dua.jpg"],
  },
  {
    id: 4,
    slug: "keo-dua-chuoi-tuoi",
    image: "/image/keo-dua-chuoi-tuoi.jpg",
    image2: "/image/keo-dua-chuoi-tuoi.jpg",
    images: ["/image/keo-dua-chuoi-tuoi.jpg"],
  },
  {
    id: 5,
    slug: "keo-dua-sau-rieng-dua",
    image: "/image/keo-sau-rieng-dua.jpg",
    image2: "/image/keo-sau-rieng-dua.jpg",
    images: ["/image/keo-sau-rieng-dua.jpg"],
  },
  {
    id: 6,
    slug: "keo-dua-thap-cam",
    image: "/image/keo-dua-thap-cam-2.jpg",
    image2: "/image/keo-dua-thap-cam.jpeg",
    images: ["/image/keo-dua-thap-cam-2.jpg", "/image/keo-dua-thap-cam.jpeg"],
  },
  {
    id: 7,
    slug: "keo-dua-que",
    image: "/image/hero-top.jpg",
    image2: "/image/hero-top.jpg",
    images: ["/image/hero-top.jpg"],
  },
];

// Export PRODUCTS để tương thích với code cũ (sử dụng trong sitemap)
// Lưu ý: Nên sử dụng getTranslatedProducts từ helper thay vì PRODUCTS
export const PRODUCTS = PRODUCT_BASE_DATA;

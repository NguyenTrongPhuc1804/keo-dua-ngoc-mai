import { Product } from "@/interfaces/product.interface";
import { PRODUCT_BASE_DATA } from "@/contants/product.contant";

// Type cho product translations từ messages
type ProductTranslation = {
  name: string;
  origin: string;
  weight: string;
  shelfLife: string;
  description: string;
  price: string;
  features: string[];
};

type ProductsMessages = {
  list: ProductTranslation[];
};

/**
 * Lấy danh sách products đã được dịch
 * @param messages - Messages object từ next-intl
 * @returns Array of translated Product objects
 */
export function getTranslatedProducts(
  messages: { products: ProductsMessages }
): Product[] {
  const translations = messages.products.list;

  return PRODUCT_BASE_DATA.map((baseProduct, index) => {
    const translation = translations[index];
    if (!translation) {
      throw new Error(
        `Missing translation for product at index ${index} (slug: ${baseProduct.slug})`
      );
    }

    return {
      ...baseProduct,
      name: translation.name,
      origin: translation.origin,
      weight: translation.weight,
      shelfLife: translation.shelfLife,
      description: translation.description,
      price: translation.price,
      features: translation.features,
    };
  });
}

/**
 * Lấy một product đã được dịch theo slug
 * @param slug - Product slug
 * @param messages - Messages object từ next-intl
 * @returns Translated Product object hoặc undefined nếu không tìm thấy
 */
export function getTranslatedProductBySlug(
  slug: string,
  messages: { products: ProductsMessages }
): Product | undefined {
  const products = getTranslatedProducts(messages);
  return products.find((product) => product.slug === slug);
}

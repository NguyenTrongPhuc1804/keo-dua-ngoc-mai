export interface Product {
  id: number;
  slug: string;
  name: string;
  origin: string;
  weight?: string; // Optional, as not all products may have a weight specified
  shelfLife?: string; // Optional, as not all products may have a shelf life specified
  description: string;
  price: string;
  image: string;
  features: string[];
}

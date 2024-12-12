export default interface FormData {
  id?: string;
  productName: string;
  shortDescription: string;
  productDescription: string;
  category: string;
  subCategory: string;
  productType: string;
  price: number | null;
  availability: string;
  sku: string;
  productImage?: FileList | null;
  productImageUrl?: string | null;
  galleryImages?: { image: FileList | null }[];
  galleryImageUrls?: { image: string | null }[];
  variations: { [key: string]: any }[];
}

export interface CartItem {
  id: string;
  article: string;
  quantity: number;
  total: number;
  variation?: {};
}

export interface CartState {
  items: CartItem[];
}

export interface Product {
  id: string;
  category: string;
  subCategory?: string;
  [key: string]: any;
}

export interface ProductState {
  items: FormData[];
  loadedCategories: string[];
  loadedSubCategories: string[];
  currentCategory: string | null;
  currentSubCategory: string | null;
  selectedProduct: FormData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

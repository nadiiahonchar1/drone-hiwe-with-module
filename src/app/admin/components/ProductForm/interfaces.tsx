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
  productImageUrl: string | null;
  galleryImages?: { image: FileList | null }[];
  galleryImageUrls: { image: string | null }[];
  variations: { [key: string]: any }[];
}

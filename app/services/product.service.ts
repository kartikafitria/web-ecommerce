import { fetchAPI } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetchAPI<Product[]>("/products");

  if (!res) {
    console.error("Failed to fetch products");
    return [];
  }

  return res;
};

export const getProductDetail = async (
  id: string
): Promise<Product | null> => {
  const res = await fetchAPI<Product>(`/products/${id}`);

  if (!res) {
    console.error("Failed to fetch product detail:", id);
    return null;
  }

  return res;
};

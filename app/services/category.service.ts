import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  const res = await fetchAPI<Category[]>("/categories");

  if (!res) {
    console.error("Failed to fetch categories");
    return [];
  }

  return res;
};

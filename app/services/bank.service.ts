import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
  const res = await fetchAPI<Bank[]>("/banks");

  if (!res) {
    console.error("Failed to fetch banks");
    return [];
  }

  return res;
};

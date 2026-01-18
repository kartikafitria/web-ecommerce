
import { fetchAPI } from "@/app/lib/api";

export type Transaction = {
  _id: string;
  status: "pending" | "paid" | "rejected";
  amount?: number;
};

export async function transactionCheckout(form: FormData) {
  return await fetchAPI<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
}


export async function getTransactionById(id: string) {
  if (!id) {
    console.error("Transaction ID is undefined");
    return null;
  }

  return await fetchAPI<Transaction>(`/transactions/${id}`);
}

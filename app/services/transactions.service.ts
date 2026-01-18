import { fetchAPI } from "@/app/lib/api";

export type Transaction = {
  _id: string;
  status: "pending" | "paid" | "rejected";
  amount?: number;
};

export async function transactionCheckout(
  form: FormData
): Promise<Transaction | null> {
  const res = await fetchAPI<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });

  if (!res) {
    console.error("Failed to checkout transaction");
    return null;
  }

  return res;
}

export async function getTransactionById(
  id: string
): Promise<Transaction | null> {
  if (!id) {
    console.error("Transaction ID is undefined");
    return null;
  }

  const res = await fetchAPI<Transaction>(`/transactions/${id}`);

  if (!res) {
    console.error("Failed to fetch transaction:", id);
    return null;
  }

  return res;
}

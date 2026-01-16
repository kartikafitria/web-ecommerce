import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      ...options,
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Fetch failed");
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

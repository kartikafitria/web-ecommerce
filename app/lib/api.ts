
export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    console.error("API URL is not defined");
    return null;
  }

  const url = `${baseUrl}${endpoint}`;

  console.log("FETCH URL:", url);

  try {
    const res = await fetch(url, {
      ...options,
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("FETCH FAILED:", {
        url,
        status: res.status,
        errorText,
      });
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return null;
  }
}

export function getImageUrl(path: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

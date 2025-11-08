export async function apiSafeFetch<T = any>(url: string, options?: RequestInit): Promise<T> {
  const baseUrl = typeof window === "undefined" ? process.env.NEXT_PUBLIC_BASE_URL || "" : "";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);

  const type = res.headers.get("content-type") || "";
  if (!type.includes("application/json"))
    throw new Error(`Expected JSON but got: ${(await res.text()).slice(0, 100)}...`);

  return res.json();
}
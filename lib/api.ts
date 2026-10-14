const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000/api"
).replace(/\/$/, "");

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { body, headers, ...rest } = options;

  const response = await fetch(
    `${API_BASE_URL}/${endpoint.replace(/^\//, "")}`,
    {
      ...rest,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(body !== undefined
          ? { "Content-Type": "application/json" }
          : {}),
        ...headers,
      },
      ...(body !== undefined
        ? { body: JSON.stringify(body) }
        : {}),
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `API error ${response.status}: ${message}`
    );
  }

  return response.json() as Promise<T>;
}
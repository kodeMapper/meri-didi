import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Determine if this is a cross-origin request to the Render backend
  const isRenderBackend = url.includes('meri-biwi-1.onrender.com');
  
  const res = await fetch(url, {
    method,
    headers: data ? { 
      "Content-Type": "application/json",
      // Add specific headers for render backend if needed
      ...(isRenderBackend ? { "X-Requested-With": "XMLHttpRequest" } : {})
    } : {},
    body: data ? JSON.stringify(data) : undefined,
    // Only include credentials for same-origin requests
    credentials: isRenderBackend ? "omit" : "include",
    // Longer timeout for render backend (which might cold start)
    ...(isRenderBackend ? { signal: AbortSignal.timeout(30000) } : {})
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

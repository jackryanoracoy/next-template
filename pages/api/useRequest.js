// Fetch remote data with SWR
import useSWR, { useSWRInfinite } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const baseUrl = "https://my-json-server.typicode.com/jackryanoracoy/jsonplaceholder";

export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const { data: posts, error } = useSWR(url, fetcher);

  return { posts, error };
};

export const usePaginatePosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const PAGE_LIMIT = 9;

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${url}?_page=${index + 1}&_limit=${PAGE_LIMIT}`,
    fetcher
  );

  const articles = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { articles, error, isLoadingMore, size, setSize, isReachingEnd };
};

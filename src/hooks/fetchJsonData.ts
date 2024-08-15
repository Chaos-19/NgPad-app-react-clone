import { useState, useEffect } from "react";

const loadData = async (filePath: string) => {
  const response = await import(/* @vite-ignore */ `../assets/${filePath}`);
  return response.default;
};

export default function useFetchJsonData<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchJson = async () => {
      try {
        setIsLoading(true);
        const res = await loadData(path);
        setData(res);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJson();
  }, [path]);

  return {
    data,
    isLoading,
    error,
  };
}

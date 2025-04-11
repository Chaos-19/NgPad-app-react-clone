import type { Route } from "./+types/root";
import LessonContent from '~/components/lesson-content';

import { useQuery ,QueryClient} from "@tanstack/react-query";

import { queryClient } from "~/root"
import { useLoaderData } from "react-router"


async function fetchProductById() {
  const response = await fetch("/api/tutorials/Angular/categories/");
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
    return queryClient.fetchQuery({
    queryKey: ["product"], // Cache key
    queryFn: () => fetchProductById(), // Fetch function
  });
}

/*
 */

export default function Category({  }: Route.ComponentProps) {
  const loaderData = useLoaderData(); // Prefetched data from clientLoader

  const { data, isLoading, error } = useQuery({
    queryKey: ["product"], // Same cache key
    queryFn: () => fetchProductById(), // Fetch only if needed
    initialData: loaderData, // Use the prefetched data
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product.</div>;
  
  if(isLoading) <div>isLoading ....</div>
  
    return (
        <div>
            <div className="text-7xl text-blue-900 font-extrabold">
                Test Data
            </div>
            {JSON.stringify(data)}
        </div>
    );
}
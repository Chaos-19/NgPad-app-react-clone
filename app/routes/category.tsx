import type { Route } from "./+types/root";


export async function clientLoader({}: Route.ClientLoaderArgs) {

  let categories = null;
    try {
        const result = await fetch("/api/tutorials/Angular/categories/");
        categories = await result.json();
    } catch (error) {
        console.error(error);
    }
    return categories;
}

/*
 */

export default function Category({ loaderData }: Route.ComponentProps) {
  const {data ,error, isLoading} = loaderData
  
  if(isLoading) <div>isLoading ....</div>
  
    return (
        <div>
            <div className="text-7xl text-blue-900 font-extrabold">
                Test Data
            </div>
            {JSON.stringify(loaderData)}
        </div>
    );
}

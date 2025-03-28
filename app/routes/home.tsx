import type { Route } from "./+types";
import { useEffect } from "react";
import { CategoryColList, CategoryRowList } from "~/components";
import BannerImage from "~/assets/main-icons/ads-free.png";

interface Props {
    // Define your props here
}

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

function Home({ loaderData: categories }: Route.ComponentProps) {
    
    return (
        <div className="w-full flex flex-col">
            {[...categories.slice(0, 1)].map((categoryData, index) => (
                <CategoryColList {...categoryData} key={categoryData.name} />
            ))}
            <div>
                <img src={BannerImage} />
            </div>
            {[...categories.slice(1, 5)].map((categoryData, index) =>
                ![1].includes(index) ? (
                    <CategoryColList
                        {...categoryData}
                        key={categoryData.name}
                    />
                ) : (
                    <CategoryRowList
                        {...categoryData}
                        key={categoryData.name}
                    />
                )
            )}
            <div>
                <img src={BannerImage} />
            </div>
            {[...categories.slice(5)].map((categoryData, index) =>
               ![0,4].includes(index) ? (
                    <CategoryColList
                        {...categoryData}
                        key={categoryData.name}
                    />
                ) : (
                    <CategoryRowList
                        {...categoryData}
                        key={categoryData.name}
                    />
                )
            )}
        </div>
    );
}
export default Home;

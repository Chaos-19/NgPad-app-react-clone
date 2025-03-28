import type { Route } from "./+types/root";
import { useContext, useEffect } from "react";
import { SectionCard } from "~/components";
import { useLocation } from "react-router";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
     const { id } = params
     if(!id) return;
     
    const res = await fetch(`/api/courses/${id}/sections/`)
    
    return await res.json();
}

export default function CourseSectionDetail({ loaderData }: Route.ComponentProps) {
    const location = useLocation();
    
    const {title,icon,description,is_nested} = location.state

    return (
        <div className="w-full pb-32">
            <div className="py-5 mt-3 px-5">
                <img src={icon} className="size-16" />
            </div>
            <div className="px-6 py-1">
                <p className="text-muted-foreground text-[13px] font-semibold">
                    {description}
                </p>
            </div>
            <div className="flex flex-col gap-3 px-4 py-5">
              {loaderData.map((data, index) => (
                <SectionCard
                  {...data}
                />
              ))}
            </div>
        </div>
    );
}

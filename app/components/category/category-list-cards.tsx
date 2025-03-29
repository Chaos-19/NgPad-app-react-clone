import { useContext, useEffect } from "react";
import { Card } from "~/components/ui/card";
import type {
    CategoryColListCardProps,
    CategoryRowListCardProps,
    CourseColListCardProps
} from "./types";
import { Link } from "react-router";

//import { CourseContext } from "~/context/course";

export const CatagoryColListCard = ({
    id,
    title,
    icon,
    description,
    is_nested
}: //folder
Partial<CourseColListCardProps>) => {
    const route = is_nested ? "sections" : "content";

    //const { setCourseContent } = useContext(CourseContext);

    return (
        <Link
            preventScrollReset={true}
            to={`${title}/course/${route}/${id}`}
            state={{
                id,
                title,
                icon,
                description,
                is_nested
            }}
        >
            <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
                <div className="flex items-center gap-5 py-1">
                    <img src={icon} alt={title} className="size-14" />
                    <div className="flex flex-col gap-2 py-1.5">
                        <h2
                            className="text-lg font-bold"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h2>
                        <p className="text-xs text-muted-foreground line-clamp-3">
                            {description}
                        </p>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export const CategoryRowListCard = ({
    id,
    title,
    icon,
    description,
    is_nested
}: CategoryRowListCardProps) => {
    const route = is_nested ? "sections" : "content"

    return (
        <Link
            preventScrollReset={true}
            to={`${title}/course/${route}/${id}`}
            state={{
                id,
                title,
                icon,
                description,
                is_nested
            }}
        >
            <Card className="py-5 px-3">
                <div className="p-3 w-[270px]">
                    <img src={icon} alt={title} className="size-14" />
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">
                        {title.replace("&amp;", "&")}
                    </h2>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                        {description}
                    </p>
                </div>
            </Card>
        </Link>
    );
};

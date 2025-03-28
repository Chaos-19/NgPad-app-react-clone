import React, { useState, useEffect, useMemo } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "~/components/ui/accordion";
import { Link } from "react-router";
import { Card } from "~/components/ui/card";
import { CatagoryColListCard } from "./category-list-cards";

import type { CategoryColListProps } from "./types";

const CategoryColList = ({
    bannerIcon,
    name,
    icon,
    slug,
    courses
}: CategoryColListProps) => {
    const [openValue, setOpenValue] = useState<string>(name);

    return (
        <Accordion
            type="single"
            collapsible
            value={openValue}
            onValueChange={setOpenValue}
            className="data-[state=open]"
        >
            <AccordionItem value={name} className="">
                <AccordionTrigger className="px-4">
                    <div className="flex justify-between items-center gap-5 py-4 px-5">
                        <img src={icon} className="size-10" />
                        <h2 className="text-base font-semibold text-foreground capitalize text-left">
                            {name}
                        </h2>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-3 px-4">
                        {bannerIcon && (
                            <Card className="shadow border drop-shadow backdrop-brightness-100 py-5">
                                <div className="flex justify-center items-center py-4">
                                    <img
                                        src={(bannerIcon)}
                                        alt="banner"
                                        className="size-24"
                                    />
                                </div>
                            </Card>
                        )}
                        {courses &&
                            courses.map(info => (
                                <CatagoryColListCard
                                    key={info.title}
                                    {...info}
                                />
                            ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CategoryColList;

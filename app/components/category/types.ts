import React from "react";

interface CourseType {
    id: number;
    title: string;
    icon: string;
    description: string;
    is_nested: boolean;
}

interface CategoryType {
    name: string;
    icon: string;
    slug: string;
    courses: CourseType[];
}

interface CategoryRowListProps extends CategoryType {}

interface CategoryRowListCardProps extends CategoryType {
   /* 
    courseInfo?: string;
    postID: string;
    */
}

export interface CategoryColListProps extends CategoryType {
    bannerIcon?: string;
}

export interface CategoryColListCardProps extends CategoryType {
    /*
    courseInfo: string;
    isNested: boolean;
    postID: string;
    folder: string;
    */
}
export interface CourseColListCardProps extends CategoryType {
    description: string;

    //slug: string;
    is_nested: boolean;
    /*postID: string;
    folder: string;*/
}

export interface NestedContentCardProps extends CategoryType {
    courseInfo: string;
    isNested: boolean;
    postID: string;
    taxonomy: string;
    index: number;
    folder?: string;
}

export interface RegularContentCardProps {
    courseDetail: Post;
    index: number;
    lang?: string;
}
export interface InterviewListCardProps {
    title: string;
    content: string;
    index: number;
}

export type Post = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: any[];
    _links: {
        self: {
            href: string;
        }[];
        collection: {
            href: string;
        }[];
        about: {
            href: string;
        }[];
        author: {
            embeddable: boolean;
            href: string;
        }[];
        replies: {
            embeddable: boolean;
            href: string;
        }[];
        "version-history": {
            count: number;
            href: string;
        }[];
        "wp:attachment": {
            href: string;
        }[];
        "wp:term": {
            taxonomy: string;
            embeddable: boolean;
            href: string;
        }[];
        curies: {
            name: string;
            href: string;
            templated: boolean;
        }[];
    };
};

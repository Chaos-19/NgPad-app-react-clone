import React from 'react';

interface CategoryRowListProps {
  title: string;
  icon: string;
  fileName: string;
}

interface CategoryRowListCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug: string;
  postID: string;
}

export interface CategoryColListProps {
  title: string;
  fileName: string;
  bannerIcon?: string;
  icon: string;
}
export interface CategoryColListCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug: string;
  isNested: boolean;
  postID: string;
  folder: string;
}

export interface NestedContentCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug: string;
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
    'version-history': {
      count: number;
      href: string;
    }[];
    'wp:attachment': {
      href: string;
    }[];
    'wp:term': {
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

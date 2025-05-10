export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type Book = {
  id: string;
  title: string;
  coverImage: string;
  modelUrl?: string;
  description: string;
  publishDate: string;
  series?: string;
  seriesNumber?: number;
  buyLinks: {
    amazon?: string;
    barnes?: string;
    bookshop?: string;
    indiebound?: string;
  };
};

export type MapLocation = {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  image?: string;
  relatedBooks?: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags?: string[];
};

export type Event = {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  location?: string;
  url?: string;
  allDay?: boolean;
};
import { Url } from "url";

export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    video: string;
    slug: {
        current: string;
    };
    body: [object];
}

export interface Noticia {
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        image: string;
    };
    comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    video: string;
    slugnews: {
        current: string;
    };
    body: [object];
    publishedAt: [object]
}


export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    };
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export interface Prices {
    id: string;
    symbol: string;
    name: string;
    image: string;
    price_change_percentage_24h: number;
    current_price: number;
}

import { title } from "process";

export interface NavItem {
    id: number;
    name: string;
    target: string;
    active: boolean;
}

export const navs: NavItem[] = [
    { id: 1, name: 'Home', target: 'hero', active: false },
    { id: 2, name: 'About', target: 'about', active: false },
    { id: 3, name: 'Menu', target: 'menu', active: false },
    { id: 4, name: 'Specials', target: 'specials', active: false },
    { id: 5, name: 'Events', target: 'events', active: false },
    { id: 6, name: 'Chefs', target: 'chefs', active: false },
    { id: 7, name: 'Gallery', target: 'gallery', active: false },
];

export const whyUs=[
    {
    id: 1,
    title:'Lorem Ipsum',
    content: `info 1`,
    },
    {
        id: 2,
        title:'Lorem Ipsum',
        content: `info 2`,
        },
        {
            id: 3,
            title:'Lorem Ipsum',
            content: `info 3`,
            },

];
'use client';

import React, { useState, useEffect } from 'react';
import { filters } from '../data/data';
import './menu.css';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';

interface MenuData {
    id: number;
    name: string;
    preview: string;
    price: number;
    ingredients: string;
    category: string;
}

interface Filter {
    id: number;
    name: string;
    category: string;
    active: boolean;
}

export default function Menu() {
    const [data, setData] = useState<MenuData[]>([]);
    const [items, setItems] = useState<MenuData[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('mutton');
    const [selectedFilter, setSelectedFilter] = useState<string>('mutton');

    const getMenuData = () => {
        fetch('http://localhost:3000/api/menu')
            .then(res => res.json())
            .then((menu: MenuData[]) => setData(menu))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getMenuData();
    }, []);

    useEffect(() => {
        setItems(data.filter(item => item.category === activeFilter));
    }, [data, activeFilter]);

    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
        setSelectedFilter(category);
    };

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-filters">
                            {filters.map((filter) => (
                                <li
                                    key={filter.id}
                                    className={`${filter.category === activeFilter ? 'filter-active' : ''} ${
                                        filter.category === selectedFilter ? 'selected' : ''
                                    }`}
                                    onClick={() => handleFilterChange(filter.category)}
                                >
                                    {filter.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    {!items ? (
                        <Preloader />
                    ) : items.length > 0 ? (
                        items.map(
                            (item: MenuData) => <MenuItem key={item.id} item={item} />
                        )
                    ) : (
                        <Preloader /> 
                    )}
                </div>
            </div>
        </section>
    );
}

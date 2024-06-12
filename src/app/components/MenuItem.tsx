import React from 'react';
import './menuItem.css';
import Image from 'next/image';

export default function MenuItem({
    item,
}: {
    item: {
        id: number;
        name: string;
        preview: string;
        price: number;
        ingredients: string;
    };
}) {
    return (
        <div className="col-lg-6 menu-item">
            <Image src={item.preview} className="menu-img" alt="" />
            <div className="menu-content">
                <span className="menu-name">{item.name}</span>
                <span>₹{item.price}</span>
            </div>
            <div className="menu-ingredients">{item.ingredients}</div>
        </div>
    );
}

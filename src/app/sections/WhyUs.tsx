'use client';

import React, { useEffect, useState } from 'react';
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

async function fetchWhyUsData() {
    try {
        const response = await fetch('http://localhost:3000/api/whyus');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const WhyUs: React.FC = () => {
    const [whyUsData, setWhyUsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchWhyUsData();
            setWhyUsData(data);
        };
        fetchData();
    }, []);

    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <SectionTitle title="why us" subtitle="Why Choose Our Catering" />
                <div className="row">
                    {whyUsData.map((item: any) => (
                        <WhyUsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

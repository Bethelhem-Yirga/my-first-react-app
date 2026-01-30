// App.jsx
import { useState } from 'react';
import Service from './Components/Service/Service';
import './App.css';

const App = () => {
    const serviceData = [
        {
            name: 'Full Makeup',
            description: 'Complete makeup application including foundation, eyes, and lips.',
            images: [
                'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
                'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w-400',
                'https://images.unsplash.com/photo-1530026405186-1d5d54f63c3b?w=400'
            ]
        },
        {
            name: 'Nail Art',
            description: 'Creative and artistic nail designs customized for your style.',
            images: [
                'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
                'https://images.unsplash.com/photo-1607779097041-aafb6d768240?w=400',
                'https://images.unsplash.com/photo-1607779097102-bca3bdc3bf3e?w=400'
            ]
        },
        {
            name: 'Henna Design',
            description: 'Traditional henna designs for special occasions.',
            images: [
                'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
                'https://images.unsplash.com/photo-1609924247608-7c0f1c7c5b2a?w=400',
                'https://images.unsplash.com/photo-1608549999892-c55ea2a587fc?w=400'
            ]
        },
    ];

    return (
        <div className="app-container">
            <h1>Beauty Services</h1>
            <Service title="Our Premium Services" services={serviceData} />
        </div>
    );
};

export default App;
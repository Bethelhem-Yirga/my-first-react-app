// App.jsx
import { useState } from 'react';
import Greeting from './Components/Greeting';
import Service from './Components/Service';
import './App.css';

const App = () => {
    const serviceData = [
        {
            name: 'Full Makeup',
            description: 'Complete makeup application including foundation, eyes, and lips.',
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQL3e3SpD23v8fImW1WPLaLluuXNmJwrawQ1mlMUWoxaad0TcaC4Cg0VHxzV8&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQL3e3SpD23v8fImW1WPLaLluuXNmJwrawQ1mlMUWoxaad0TcaC4Cg0VHxzV8&s',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQL3e3SpD23v8fImW1WPLaLluuXNmJwrawQ1mlMUWoxaad0TcaC4Cg0VHxzV8&s'
            ]
        },
        {
            name: 'Nail',
            description: 'Creative and artistic nail designs customized for your style.',
            images: [
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu6OwU1_dMX-vCP6LbFpaWXJyM1K91MKRZpfK6NOuAqjEJTsv4H73AwBPCRM&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu6OwU1_dMX-vCP6LbFpaWXJyM1K91MKRZpfK6NOuAqjEJTsv4H73AwBPCRM&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu6OwU1_dMX-vCP6LbFpaWXJyM1K91MKRZpfK6NOuAqjEJTsv4H73AwBPCRM&s'
            ] // Add images if any
        },
        {
            name: 'Henna',
            description: 'Traditional henna designs for special occasions.',
            images: [
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY5YTiBNztTb9O4I3bPC1C9PtOjfdYrMoV-UmhTTIPv_EqbJt7oBBGtTfPQ&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY5YTiBNztTb9O4I3bPC1C9PtOjfdYrMoV-UmhTTIPv_EqbJt7oBBGtTfPQ&s',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlY5YTiBNztTb9O4I3bPC1C9PtOjfdYrMoV-UmhTTIPv_EqbJt7oBBGtTfPQ&s'
            ] // Add images if any
        },

      
    ];

    return (
        <div>
            <Service title="Our Services" services={serviceData} />
        </div>
    );
};

export default App;
import React from 'react';

const Service = ({ title, services }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        {service.name}
                        <p>{service.description}</p>
                        {service.images && service.images.length > 0 && (
                            <div>
                                {service.images.map((image, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={image}
                                        alt={service.name}
                                        style={{ width: '100px', margin: '0.5em' }} // Adjust styles as needed
                                    />
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Service;
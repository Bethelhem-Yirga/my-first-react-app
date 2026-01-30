import React from 'react';
import styles from './Service.module.css'; // Import styles as object

const Service = ({ title, services }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul className={styles.serviceList}>
                {services.map((service, index) => (
                    <li key={index} className={styles.serviceItem}>
                        <h3 className={styles.serviceTitle}>{service.name}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                        {service.images && service.images.length > 0 && (
                            <div className={styles.imageContainer}>
                                {service.images.map((image, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={image}
                                        alt={service.name}
                                        className={styles.serviceImage}
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
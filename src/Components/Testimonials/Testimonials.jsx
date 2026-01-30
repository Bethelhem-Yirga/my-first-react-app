import React from 'react';
import './Testimonials.module.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = ({ testimonials = [] }) => {
    // If no testimonials provided, use default data
    const defaultTestimonials = testimonials.length > 0 ? testimonials : [
        {
            name: 'Sarah Johnson',
            role: 'Bride',
            text: 'The bridal makeup was absolutely stunning! The team was professional and made me feel so special on my wedding day.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4b1?w=200'
        },
        {
            name: 'Maria Rodriguez',
            role: 'Regular Client',
            text: 'I\'ve been getting my nails done here for 2 years. The artists are incredibly talented and the service is always excellent.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
        },
        {
            name: 'Emily Chen',
            role: 'Event Planner',
            text: 'Perfect henna designs for our corporate event! All our guests were impressed with the intricate patterns.',
            rating: 4,
            image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200'
        }
    ];

    return (
        <div className="testimonials-container">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real experiences from our happy customers</p>
            
            <div className="testimonials-grid">
                {defaultTestimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <FaQuoteLeft className="quote-icon" />
                        
                        <div className="testimonial-content">
                            <p className="testimonial-text">{testimonial.text}</p>
                            
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="author-info">
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="author-image"
                            />
                            <div className="author-details">
                                <h4 className="author-name">{testimonial.name}</h4>
                                <p className="author-role">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
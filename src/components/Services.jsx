import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import artificialGrassImg from '../assets/Product/Artificial Grass.png';
import falseCeilingImg from '../assets/Product/False Ceiling.png';
import flutedPanelsImg from '../assets/Product/Fluted Panels.png';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'PVC Wall Panels',
    description: 'Premium quality PVC wall panels for elegant and durable interiors.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
  },
  {
    id: 2,
    title: 'WPC Wall Panels',
    description: 'Eco-friendly WPC panels combining wood and plastic for modern spaces.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  },
  {
    id: 3,
    title: 'Fluted Panels',
    description: 'Stylish fluted panels adding texture and sophistication to walls.',
    image: flutedPanelsImg,
  },
  {
    id: 4,
    title: 'Charcoal Panels',
    description: 'Sleek charcoal panels for a contemporary and luxurious look.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 5,
    title: 'Wooden Flooring',
    description: 'Classic wooden flooring that adds warmth and elegance to any space.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
  },
  {
    id: 6,
    title: 'SPC Flooring',
    description: 'Durable SPC flooring perfect for high-traffic areas.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 7,
    title: 'Wallpaper',
    description: 'Beautiful wallpapers to transform your walls instantly.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
  {
    id: 8,
    title: 'Imported Wallpaper',
    description: 'Exclusive imported wallpapers from international designers.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
  {
    id: 9,
    title: 'Window Blinds',
    description: 'Stylish and functional window blinds for light control.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
  },
  {
    id: 10,
    title: 'False Ceiling',
    description: 'Modern false ceiling designs to enhance your interior.',
    image: falseCeilingImg,
  },
  {
    id: 11,
    title: 'Artificial Grass',
    description: 'Lush artificial grass for balconies and outdoor spaces.',
    image: artificialGrassImg,
  },
  {
    id: 12,
    title: 'Modular Kitchen',
    description: 'Custom modular kitchens designed for functionality and style.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 13,
    title: 'Residential Interiors',
    description: 'Complete residential interior solutions for dream homes.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 14,
    title: 'Commercial Interiors',
    description: 'Professional commercial interiors for offices and retail.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    id: 15,
    title: 'Custom Furniture',
    description: 'Handcrafted custom furniture pieces designed for you.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Our Services</h6>
          <h2 className="section-title">Premium Interior Solutions</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <a href="#contact" className="service-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

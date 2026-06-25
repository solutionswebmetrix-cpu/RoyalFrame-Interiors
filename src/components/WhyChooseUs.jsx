import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaGem,
  FaUsers,
  FaLightbulb,
  FaTags,
  FaClock,
  FaSmile,
  FaShieldAlt,
} from 'react-icons/fa';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <FaGem />,
    title: 'Premium Materials',
    desc: 'We use only the finest quality materials for lasting elegance.',
  },
  {
    icon: <FaUsers />,
    title: 'Experienced Team',
    desc: 'Our skilled designers bring years of expertise to every project.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Creative Design',
    desc: 'Innovative designs tailored to your unique vision and style.',
  },
  {
    icon: <FaTags />,
    title: 'Affordable Luxury',
    desc: 'Premium interiors at competitive and transparent pricing.',
  },
  {
    icon: <FaClock />,
    title: 'On-time Delivery',
    desc: 'We respect your time and deliver projects as promised.',
  },
  {
    icon: <FaSmile />,
    title: 'Customer Satisfaction',
    desc: 'Your happiness is our top priority in every interaction.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Warranty Support',
    desc: 'Comprehensive warranty and after-sales service for peace of mind.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Why Choose Us</h6>
          <h2 className="section-title">The RoyalFrame Advantage</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

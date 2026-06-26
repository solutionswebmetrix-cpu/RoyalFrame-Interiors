import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
          });
        },
        once: true,
      });
    });
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image" ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="About RoyalFrame Interiors"
            />
            <div className="image-decoration"></div>
          </div>
          <div className="about-content" ref={contentRef}>
            <h6 className="section-subtitle">About Us</h6>
            <h2 className="section-title">Crafting Elegant Spaces, Building Timeless Interiors</h2>
            <p className="about-text">
              At RoyalFrame Interiors, we transform spaces into extraordinary living and working environments. With years of experience in luxury interior design, we combine creativity, craftsmanship, and attention to detail to deliver exceptional results.
            </p>
            <p className="about-text">
              Our team of skilled designers and craftsmen work closely with clients to understand their vision and bring it to life with premium materials and innovative solutions.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number" data-target="15">0</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="500">0</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="400">0</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" data-target="25">0</span>
                <span className="stat-label">Expert Designers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

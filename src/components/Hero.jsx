import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.to('.hero-bg', {
          y: self.progress * 100,
          duration: 0.1,
        });
      },
    });
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Luxury Interior"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          House Design Studio
        </h1>
        <h2 className="hero-subtitle" ref={subtitleRef}>
          Luxury Interior Design & Space Transformation
        </h2>
        <p className="hero-desc" ref={descRef}>
          We design elegant residential and commercial interiors with premium craftsmanship, innovative ideas, and flawless execution.
        </p>
        <div className="hero-buttons" ref={buttonsRef}>
          <a href="#services" className="btn btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get Free Quote
          </a>
        </div>
        <div className="scroll-indicator" onClick={handleScroll}>
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;

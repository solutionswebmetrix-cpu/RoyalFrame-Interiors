import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'We discuss your requirements, preferences, and budget to understand your vision.',
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'Our team creates detailed plans and mood boards for your project.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'We develop detailed designs and 3D visualizations to bring your space to life.',
  },
  {
    number: '04',
    title: 'Material Selection',
    desc: 'We help you choose the perfect materials and finishes.',
  },
  {
    number: '05',
    title: 'Installation',
    desc: 'Our expert craftsmen execute the installation with precision.',
  },
  {
    number: '06',
    title: 'Final Handover',
    desc: 'We deliver a flawless finished space and provide after-sales support.',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
          delay: index * 0.15,
        }
      );
    });
  }, []);

  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">Our Process</h6>
          <h2 className="section-title">How We Work</h2>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step"
              ref={(el) => (stepsRef.current[index] = el)}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

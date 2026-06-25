import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of interior design services including wall panels, flooring, false ceilings, modular kitchens, residential and commercial interiors, custom furniture, and more.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project duration depends on the scope and complexity. Small projects take 2-4 weeks, while larger ones may take 8-12 weeks. We provide a detailed timeline during consultation.',
  },
  {
    id: 3,
    question: 'Do you provide free consultations?',
    answer: 'Yes! We offer free initial consultations to understand your requirements and provide a customized quote for your project.',
  },
  {
    id: 4,
    question: 'What is your pricing structure?',
    answer: 'Our pricing is transparent and competitive. We provide detailed quotes after assessing your project requirements during the consultation.',
  },
  {
    id: 5,
    question: 'Do you offer warranty on your work?',
    answer: 'Yes, we provide comprehensive warranty on all our work and materials. Details are discussed during the project planning phase.',
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="faq" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h6 className="section-subtitle">FAQ</h6>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                <span>{faq.question}</span>
                {activeId === faq.id ? <FaMinus /> : <FaPlus />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

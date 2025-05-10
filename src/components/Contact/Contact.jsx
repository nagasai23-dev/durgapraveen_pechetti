import React, { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-info" ref={infoRef}>
          <h2>Get In Touch</h2>
          <p>Ready to start your project or have questions? Reach out and let's create something amazing together.</p>

          <div className="contact-details">
            <div className="detail-item">
              <h3>Email</h3>
              <a href="mailto:durgapraveen.pechetti@gmail.com ">durgapraveen.pechetti@gmail.com</a>
            </div>

            <div className="detail-item">
              <h3>🟢 WhatsApp</h3>
              <a
                href="https://wa.me/916302412225"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
              >
                +91 6302412225
              </a>
            </div>

            <div className="detail-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@CinemaCelluloid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper" ref={formRef}>
          <h3>Send Me a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setError('Failed to send message. Please try again later or contact me directly at pdp0457@gmail.com');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  // console.log("EmailJS Env Vars:", {
  //   service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //   template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //   user: import.meta.env.VITE_EMAILJS_USER_ID
  // });
  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      {submitted && (
        <div className="success-message" role="alert">
          Thank you! Your message has been sent. I'll get back to you soon.
        </div>
      )}

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
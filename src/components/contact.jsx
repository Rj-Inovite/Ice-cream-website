import React, { useState, useEffect } from 'react';
import './contact.css'; // This is crucial for styling!

const Contact = () => {
  // Replace these with your actual social media links
  const socialLinks = {
    instagram: "https://www.instagram.com/icecream/",
    facebook: "https://www.instagram.com/icecreamrolls/?hl=en",
    twitter: "https://www.instagram.com/icecreamrolls/?hl=en",
  };

  // Dummy data for ratings
  const staffRating = 4.8;
  const averageRating = 4.9;
  const totalRatings = 1250;

  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Melt your worries and contact Freshnfreeze 🍧 ✨ ';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500); // Hide cursor after typing
      }
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact-page">
      
      {/* 1. Header Section */}
      <header className="contact-header" data-aos="fade-down">
        <h1>
          <span className="ice-cream-icon">🍦</span> {displayedText}<span className="cursor">|</span> <span className="ice-cube-icon">🧊</span>
        </h1>
        <p>
          Got a flavor suggestion, a catering inquiry, or just want to say hi? We'd love to hear from you!
        </p>
      </header>

      {/* 2. Main Content Container (Form & Info Side-by-Side) */}
      <div className="contact-container">
        
        {/* Contact Information Section (Animated on Scroll) */}
        <section className="contact-info" data-aos="fade-right">
          <h2>Find Us</h2>
          <div className="info-item">
            <span className="icon">📍</span>
            <p>123 Frozen Treat Lane, Chilltown, CA 90210</p>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <p>
              Email Us: <a href="mailto:hello@freshnfreeze.com">hello@freshnfreeze.com</a>
            </p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p>Call Us: (555) 321-TREAT</p>
          </div>
        </section>

        {/* Contact Form Section (Animated on Scroll) */}
        <section className="contact-form-section" data-aos="fade-left">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Freeze & Send!
            </button>
          </form>
        </section>
      </div>

      {/* 3. Mini Sections (Ratings & Hours) */}
      <div className="mini-sections-container">
        
        <section className="rating-box" data-aos="zoom-in-up" data-aos-delay="100">
          <h3>Customer Happiness Score</h3>
          <div className="rating-visual">
            <span className="rating-number">{averageRating}</span> / 5.0
          </div>
          <p className="rating-detail">
            Based on {totalRatings} delicious scoops!
          </p>
          <div className="stars-animation">⭐⭐⭐⭐⭐</div>
        </section>

        <section className="rating-box" data-aos="zoom-in-up" data-aos-delay="200">
          <h3>Our Staff Energy Level</h3>
          <div className="rating-visual">
            <span className="rating-number">{staffRating}</span> / 5.0
          </div>
          <p className="rating-detail">
            Dedicated to serving the sweetest scoops!
          </p>
          <div className="staff-icon">👩‍🍳👨‍🍳</div>
        </section>

        <section className="hours-box" data-aos="zoom-in-up" data-aos-delay="300">
          <h3>Our Working Hours</h3>
          <ul>
            <li><span className="day">Mon - Thu:</span> 11:00 AM - 9:00 PM</li>
            <li><span className="day">Fri - Sat:</span> 11:00 AM - 11:00 PM</li>
            <li><span className="day">Sunday:</span> 12:00 PM - 8:00 PM</li>
          </ul>
        </section>
      </div>



      {/* 5. Map Section */}
      <section className="map-section" data-aos="fade-up" data-aos-delay="200">
        <h2>Where The Magic Happens</h2>
        <div className="map-placeholder">
          <iframe 
            title="Fresh'n'Freeze Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-122.084!3d37.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzc0MjIwMTQzNy40MjIwMTk!5e0!3m2!1sen!2sus!4v1628000000000" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
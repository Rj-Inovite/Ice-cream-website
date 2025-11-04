import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Set white color for the logo, text, and icons using CSS vars below */}
      <div className="container footer-grid">
        <div>
          <h2 className="footer-logo"><Link to="/">FreshnFreeze</Link></h2>
          <p>FreshnFreeze delivers the freshest quality ingredients and frozen goods right to your door, ensuring perfect meal prep every time.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Shipping FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            {/* These social icons are retained but will be styled to fit the new pink theme */}
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1923b2b7647f0b9ec98_facebook.svg" alt="Facebook" className="inline-icon" width="24" height="24" /></span>
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1b8ce5aa2c69ae7f320_twitter.svg" alt="Twitter" className="inline-icon" width="24" height="24" /></span>
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1c29bcbb4d315952d2a_linkedin.svg" alt="LinkedIn" className="inline-icon" width="24" height="24" /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 FreshnFreeze. All rights reserved.
      </div>

      <style>{`
        /* Define a custom variable for the link hover/accent color */
        :root {
          --bright-pink: #FF7096; /* Primary accent color */
          --dark-pink: #A03050; /* Dark pink for accents */
          --light-pink: #F7E5E9; /* Light pink for text */
          --border-color: #702038; /* Dark border */
        }

        .footer {
          background-color: white;
          color: var(--bright-pink);
          padding: 80px 0 30px;
          font-family: 'Inter', sans-serif;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }

        .footer-logo {
          color: var(--bright-pink); /* Use the bright pink for the logo */
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -1px;
        }
          
        .footer-logo a,
        .footer-logo a:link,
        .footer-logo a:visited {
          color: var(--bright-pink);
          text-decoration: none;
        }

        .footer-col h4 {
          color: var(--bright-pink); /* Use bright pink for headings */
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col ul li {
          margin-bottom: 0.8rem;
        }

        .footer-col ul a {
          color: var(--bright-pink);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-col ul a:hover {
          color: var(--dark-pink); /* Darker pink on hover */
        }

        .footer-social span {
          margin-right: 15px;
          cursor: pointer;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .footer-social span img {
          filter: invert(90%) sepia(10%) saturate(1000%) hue-rotate(300deg) brightness(120%) contrast(100%); /* Inverts and tints the image slightly for visibility */
          transition: filter 0.3s ease;
          border-radius: 4px;
        }
        
        .footer-social span:hover {
          transform: translateY(-2px);
        }

        .footer-social span:hover img {
          filter: invert(70%) sepia(90%) saturate(1000%) hue-rotate(300deg) brightness(150%) contrast(100%); /* Brighter hover state */
        }


        .footer-bottom {
          text-align: center;
          border-top: 1px solid var(--bright-pink);
          padding-top: 30px;
          font-size: 0.85rem;
          color: var(--bright-pink);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .footer-grid { 
            grid-template-columns: 1fr 1fr;
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-grid { 
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-grid > div {
            margin-bottom: 2rem;
          }
          .footer-social {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          .footer-social span {
            margin-right: 0;
          }
        }
      `}</style>
    </footer>
  );
}

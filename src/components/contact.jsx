import React, { useState, useRef, useEffect, useCallback } from 'react';
import './contact.css';

// Load Lucide Icons for aesthetic vector icons (using inline SVG for better control)
const Icons = {
  Location: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Phone: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  ChevronDown: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  Instagram: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  Facebook: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Twitter: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1 1.7 1 4.2-2 6.5-3 2.5-7 3.7-10 3.7h-1c-.5 0-1-.1-1.5-.2 2.6-3.8 3.5-7.5 3.5-7.5C10.6 8.5 13 6.9 13 4.8 13 3 10.5 1.7 8 2.5c-1.5.5-2.5 1.5-3 3-.5 1.5-.2 4.5 2 6l-1 1c-1.5-1-2.5-2.5-3-4C3 9 3 7 4 5h-.5C2.4 5.5 1 7 1 9.5c0 1.5.8 3 2 4l-1 1c-.5-1-.5-2.5 0-3.5 1.3 1.2 2.7 2 4.5 2h2c1.5 0 2.8-.5 3.8-1.5 1.5-1.5 2-3.5 1.5-5.5 1.2-.8 2.5-1.5 4-2.2z"/></svg>,
};

// --- Reveal Component ---
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const animationClasses = isVisible
    ? 'reveal-visible'
    : 'reveal-hidden';

  const delayStyle = { transitionDelay: `${delay}ms` };

  return (
    <div className={animationClasses} ref={domRef} style={delayStyle}>
      {children}
    </div>
  );
};

// --- Contact Form ---
const ContactForm = ({ showToast }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      showToast('Successfully received your message!', 'success');
      e.target.reset();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RevealOnScroll delay={100}>
        <input type="text" placeholder="Your Name" required className="input-field"/>
      </RevealOnScroll>
      <RevealOnScroll delay={200}>
        <input type="email" placeholder="Your Email" required className="input-field"/>
      </RevealOnScroll>
      <RevealOnScroll delay={300}>
        <textarea placeholder="Your Message (Let us know your favorite flavor!)" rows="5" required className="input-field textarea-field"></textarea>
      </RevealOnScroll>
      <RevealOnScroll delay={400}>
        <button type="submit" className="submit-btn">Send Message</button>
      </RevealOnScroll>
    </form>
  );
};

// --- Contact Info Card ---
const ContactInfoCard = ({ icon: Icon, title, content, isSocial = false, link = '#' }) => (
  <RevealOnScroll delay={isSocial ? 0 : 100}>
    <a href={link} target="_blank" rel="noopener noreferrer" className={`block ${isSocial ? '' : 'h-full'}`}>
      <div className={`contact-card ${isSocial ? 'social-card' : ''}`}>
        <div className="icon-wrapper"><Icon className="icon-style" /></div>
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
    </a>
  </RevealOnScroll>
);

// --- FAQ Item ---
const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <RevealOnScroll delay={index * 150 + 500}>
      <div className="faq-item">
        <button className="faq-question" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
          {question}
          <Icons.ChevronDown className={`faq-chevron ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div id={`faq-answer-${index}`} className={`faq-answer ${isOpen ? 'open' : ''}`}>
          <p>{answer}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: 'What makes freshnfreeze ice cream unique?', answer: 'We use only farm-fresh ingredients, source organic milk, and churn in small batches to ensure the creamiest texture and the most intense, natural flavors possible. It\'s a difference you can taste!' },
    { question: 'Do you offer vegan or dairy-free options?', answer: 'Absolutely! We offer a rotating selection of delicious vegan sorbets and coconut milk-based ice creams. Check our "Flavors" page for this week\'s dairy-free treats.' },
    { question: 'Can I order custom flavors for an event?', answer: 'Yes! We love catering events. Please contact our catering team directly via email with your flavor idea and event details, and we\'ll whip up something special.' },
    { question: 'Where are your stores located?', answer: 'Our flagship store is shown on the map below! We also have pop-up locations announced weekly on our Instagram and Facebook pages.' },
    { question: 'What are your store hours?', answer: 'Our main location is open Mon - Sun from 10:00 AM to 10:00 PM, ready to satisfy your late-night cravings!' },
  ];

  return (
    <div className="container mx-auto px-4 max-w-5xl mt-20">
      <RevealOnScroll delay={100}>
        <h2 className="faq-title">Sweet Questions, Sweet Answers</h2>
      </RevealOnScroll>
      <RevealOnScroll delay={250}>
        <p className="faq-subtitle">Everything you need to know about our fresh, frozen delights.</p>
      </RevealOnScroll>
      <div className="faq-container">
        {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
      </div>
    </div>
  );
};

// --- Toast ---
const ToastNotification = ({ message, type, isVisible }) => {
  const baseClasses = "toast-base";
  let typeClasses = type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : '';
  return <div className={`${baseClasses} ${typeClasses} ${isVisible ? 'show-toast' : ''}`}>{message}</div>;
};

// --- Main App ---
export default function Contact() {
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const showToast = useCallback((message, type) => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => { setToast(prev => ({ ...prev, isVisible: false })); }, 4000);
  }, []);

  return (
    <div className="contact-page">
      <ToastNotification message={toast.message} type={toast.type} isVisible={toast.isVisible} />

      {/* Animated Tagline */}
      <div className="tagline-container">
        <h1 className="animated-tagline">Melt your worries, Drop us Message</h1>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 max-w-7xl pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <RevealOnScroll delay={50}>
            <div className="form-wrapper">
              <h2 className="form-title">Send Us a Message</h2>
              <ContactForm showToast={showToast} />
            </div>
          </RevealOnScroll>
        </div>
        <div className="lg:col-span-1">
          <div className="contact-info-grid">
            <RevealOnScroll delay={200}>
              <div className="social-wrapper">
                <h3 className="social-title">Join Our Sweet Community</h3>
                <div className="grid grid-cols-3 gap-4">
                  <ContactInfoCard isSocial icon={Icons.Instagram} title="Instagram" content="@freshnfreeze_scoops" link="https://instagram.com/freshnfreeze_scoops"/>
                  <ContactInfoCard isSocial icon={Icons.Facebook} title="Facebook" content="/FreshNFreeze" link="https://facebook.com/FreshNFreeze"/>
                  <ContactInfoCard isSocial icon={Icons.Twitter} title="Twitter" content="#freshnfreeze" link="https://twitter.com/freshnfreeze"/>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-20">
        <RevealOnScroll><h2 className="map-title">Find Our Sweet Spot</h2></RevealOnScroll>
        <RevealOnScroll delay={200}>
          <div className="map-wrapper">
            <iframe 
              title="FreshNFreeze Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.693333333333!2d-122.41941558468165!3d37.7749295797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f9d0c6551%3A0x6b815e840d46d23a!2sIce%20Cream%20Shop%20Placeholder!5e0!3m2!1sen!2sus!4v1625078400000!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </RevealOnScroll>
      </div>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}

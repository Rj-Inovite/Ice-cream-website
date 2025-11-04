import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './home.css';
import heart from '../assets/images/heart.png';
import c7 from '../assets/images/c7.png';
import c5 from '../assets/images/c5.png';
import b3 from '../assets/images/b3.png';
import img12 from '../assets/images/12.png';

const Home = () => {
  const scrollRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const navigate = useNavigate();

  const videos = [
    '/src/assets/images/vid 13.mp4',
    '/src/assets/images/vid 2.mp4',
    '/src/assets/images/vid 11.mp4',
    '/src/assets/images/vid 12.mp4',
    '/src/assets/images/vid 1.mp4',
    '/src/assets/images/vid 5.mp4',
    '/src/assets/images/vid 4.mp4',
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // For the "Love" section background and text animation
  const { scrollYProgress: loveScrollProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center center'] // Adjust these offsets as needed
  });
  const backgroundColor = useTransform(loveScrollProgress, [0, 1], ['#ffffff', '#ADD8E6']); // Example: white to light blue
  const loveTextOpacity = useTransform(loveScrollProgress, [0.5, 1], [0, 1]);
  const loveTextY = useTransform(loveScrollProgress, [0.5, 1], [50, 0]);

  const customerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };




  return (
    <div className="home-container" ref={scrollRef}>
      {/* 1. Starting Banner Section with Videos and Manual Controls */}
      <section className="banner-section">
        <div className="video-container">
          <motion.video
            key={currentVideo}
            src={videos[currentVideo]}
            autoPlay
            loop
            muted
            className="banner-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <button className="nav-btn prev-btn" onClick={prevVideo}>
            ‹
          </button>
          <button className="nav-btn next-btn" onClick={nextVideo}>
            ›
          </button>
          <div className="video-indicators">
            {videos.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentVideo ? 'active' : ''}`}
                onClick={() => setCurrentVideo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Scroll-triggered "Love" section with animated background and text */}
      <motion.section
        className="love-section"
        style={{ backgroundColor }}
      >
        <motion.h1
          className="love-text"
          style={{ opacity: loveTextOpacity, y: loveTextY }}
        >
          <span className="love-word"> Taste the Fresh.Feel the Freeze</span>
        </motion.h1>
      </motion.section>
        {/* Heart image - you'll need to position this using CSS relative to the love-text */}
        <img src={heart} alt="Heart" className="love-heart" />


      {/* 3. Minimized Horizontal Row with Virtual Counts */}
      <section className="counts-section">
        <div className="count-item">
          <motion.span
            className="count-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            50+
          </motion.span>
          <p>Stores</p>
        </div>
        <div className="count-item">
          <motion.span
            className="count-number"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            10,000+
          </motion.span>
          <p>Happy Customers</p>
        </div>
        {/* Add more count items as needed */}
      </section>

      {/* 4. Four Ice Cream Image Sections */}
      <section className="icecream-grid">
        <motion.div
          className="icecream-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          onClick={() => navigate('/shop')}
          style={{ cursor: 'pointer' }}
        >
          <img src={c7} alt="Ice Cream Flavor C7 " />
          <h3>Fruit Carnival</h3>
        </motion.div>
        <motion.div
          className="icecream-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          onClick={() => navigate('/shop')}
          style={{ cursor: 'pointer' }}
        >
          <img src={c5} alt="Ice Cream Flavor C5" />
          <h3>Fusion Fiesta</h3>
        </motion.div>
        <motion.div
          className="icecream-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          onClick={() => navigate('/shop')}
          style={{ cursor: 'pointer' }}
        >
          <img src={b3} alt="Ice Cream Flavor B3" />
          <h3>Strawberry Dreambliss</h3>
        </motion.div>
        <motion.div
          className="icecream-block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          onClick={() => navigate('/shop')}
          style={{ cursor: 'pointer' }}
        >
          <img src={img12} alt="Ice Cream Flavor 12" />
          <h3>Berrylicious Fantasy</h3>
        </motion.div>
      </section>

      {/* 5. "Freshnfreeze" Section with Background Video and Text */}
      <section className="freshnfreeze-promo">
        <video
          src="/src/assets/images/vid7.mp4"
          autoPlay
          loop
          muted
          className="promo-background"
        />
        <div className="promo-content">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Experience the <span className="highlight">Freshnfreeze</span> Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Indulge in our artisanal ice creams made with the finest, freshest ingredients.
          </motion.p>
        </div>
      </section>

      {/* 6. Small Banner Section with Sliding Images */}
      <section className="small-banner-slider">
        <div className="banner-slider-container">
          <motion.div
            className="banner-slide-track"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }} // Example for continuous slide
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQBTzdNrp54fZWPIkfMAXBvYXRp6pxxsdSg&s" alt="Small Banner 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGaIdXCKX2hkZjIhqAC2cfyFb1ULvKTrMzQ&s" alt="Small Banner 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LG-iHs_Fg2x21JO0k_gMQr2MSejDr31gPg&s" alt="Small Banner 3" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJMqq2gtDvxVV04x3M8ELliCp2MEW-N7mBg&s" alt="Small Banner 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdK_u_864tTJLJvIPTVhXY4ogT0hYeqAOKg&s" alt="Small Banner 5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSiMBTyNDgLyfhtg-cE5aHj7Z-WQ10K9-jQ&s" alt="Small Banner 6" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbJ67QaN9eTABnvg-ULwV40awztz5LPORZQ&s" alt="Small Banner 7" />
        
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQBTzdNrp54fZWPIkfMAXBvYXRp6pxxsdSg&s" alt="Small Banner 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGaIdXCKX2hkZjIhqAC2cfyFb1ULvKTrMzQ&s" alt="Small Banner 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LG-iHs_Fg2x21JO0k_gMQr2MSejDr31gPg&s" alt="Small Banner 3" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJMqq2gtDvxVV04x3M8ELliCp2MEW-N7mBg&s" alt="Small Banner 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdK_u_864tTJLJvIPTVhXY4ogT0hYeqAOKg&s" alt="Small Banner 5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSiMBTyNDgLyfhtg-cE5aHj7Z-WQ10K9-jQ&s" alt="Small Banner 6" />
          
        
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQBTzdNrp54fZWPIkfMAXBvYXRp6pxxsdSg&s" alt="Small Banner 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGaIdXCKX2hkZjIhqAC2cfyFb1ULvKTrMzQ&s" alt="Small Banner 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LG-iHs_Fg2x21JO0k_gMQr2MSejDr31gPg&s" alt="Small Banner 3" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJMqq2gtDvxVV04x3M8ELliCp2MEW-N7mBg&s" alt="Small Banner 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdK_u_864tTJLJvIPTVhXY4ogT0hYeqAOKg&s" alt="Small Banner 5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSiMBTyNDgLyfhtg-cE5aHj7Z-WQ10K9-jQ&s" alt="Small Banner 6" />
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQBTzdNrp54fZWPIkfMAXBvYXRp6pxxsdSg&s" alt="Small Banner 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGaIdXCKX2hkZjIhqAC2cfyFb1ULvKTrMzQ&s" alt="Small Banner 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LG-iHs_Fg2x21JO0k_gMQr2MSejDr31gPg&s" alt="Small Banner 3" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJMqq2gtDvxVV04x3M8ELliCp2MEW-N7mBg&s" alt="Small Banner 4" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdK_u_864tTJLJvIPTVhXY4ogT0hYeqAOKg&s" alt="Small Banner 5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSiMBTyNDgLyfhtg-cE5aHj7Z-WQ10K9-jQ&s" alt="Small Banner 6" />
          
        
          </motion.div>
        </div>
      </section>

      {/* 8. Life Feels Better with a Scoop in Your Hand Section */}
      <section className="happy-customers-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Life Feels Better with a Scoop in Your Hand
        </motion.h2>
        <motion.p
          className="section-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Here's to the giggles, the tiny drips, and the unplanned happiness that comes with every bite
        </motion.p>
        <motion.p
          className="section-quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          We don't just serve ice cream—we serve tiny celebrations of life
        </motion.p>
        <div className="customer-grid">
          {[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcokfLgg2Cb0kV0JadG8FcvaEHqImRnp7U3Q&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jtKBV-zI1cGDskgqwFDsUnjAfcqgYMoUJA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9okWJoaW5VilSEzHsA4-5rTKBzSV59MYdxA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0by5DkC0qpyp08nCVYXCb8LRBxwcsX1qGg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoXLtDnFyDn8GbBfCzrOmL5g1HV4fXbVFqg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENhKClamGhvvLU4-JWGrNWEQpIhmoCMU4IQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xP6rN4917loOHJ43apPWd5Dsp1YNwfvGVg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMMW20zg_xfjKNFXq1V1fHJlqUDL_nMixug&s'
          ].map((src, i) => (
            <motion.div
              key={i}
              className="customer-circle"
              variants={customerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              whileHover={{ scale: 1.1, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={src} alt={`Customer ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
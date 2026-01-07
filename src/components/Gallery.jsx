import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingConfig } from '../config';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imagesPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, weddingConfig.gallery.length - imagesPerView);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = maxIndex;
      if (nextIndex > maxIndex) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  const visibleImages = weddingConfig.gallery.slice(currentIndex, currentIndex + imagesPerView);
  
  // If we're near the end and need to wrap around
  if (visibleImages.length < imagesPerView) {
    const remaining = imagesPerView - visibleImages.length;
    visibleImages.push(...weddingConfig.gallery.slice(0, remaining));
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', color: 'var(--ocean-deep)', marginBottom: '1rem' }}
        >
          Our Moments
        </motion.h2>
        <p className="script-text" style={{ marginBottom: '3rem' }}>A glimpse into our story</p>
        
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: isMobile ? '100%' : '1200px', 
          margin: '0 auto',
          paddingBottom: '60px'
        }}>
          <div style={{
            display: 'flex',
            gap: isMobile ? '0' : '20px',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: isMobile ? '450px' : '500px'
          }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: isMobile ? 0 : (direction > 0 ? 300 : -300) }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? 0 : (direction > 0 ? -300 : 300) }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  display: 'flex',
                  gap: isMobile ? '0' : '20px',
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                {visibleImages.map((item, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    className="glass-card"
                    whileHover={{ scale: 1.02 }}
                    style={{ 
                      flex: isMobile ? '0 0 100%' : '0 0 calc(33.333% - 14px)',
                      maxWidth: isMobile ? '100%' : 'calc(33.333% - 14px)',
                      padding: isMobile ? '8px' : '12px',
                      // aspectRatio: isMobile ? '4/5' : 'auto',
                      height: isMobile ? '50vh' : '500px',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {/* Subtle background gradient instead of blur for a cleaner look */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.05) 100%)',
                        zIndex: 0
                      }} />

                      {/* Main image - strictly contained to prevent any clipping */}
                      <img 
                        src={item.url} 
                        alt={item.caption} 
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '100%', 
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          position: 'relative',
                          zIndex: 1,
                          userSelect: 'none',
                          padding: '2px'
                        }} 
                        draggable="false"
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '20px',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: '0 0 12px 12px'
                      }}>
                        <p style={{ 
                          fontFamily: 'var(--font-serif)', 
                          fontSize: isMobile ? '1.1rem' : '1.2rem',
                          margin: 0
                        }}>
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            style={{
              position: 'absolute',
              top: '50%',
              left: isMobile ? '5px' : '-60px',
              // transform: 'translateY(-50%)',
              background: 'var(--glass)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: isMobile ? '36px' : '50px',
              height: isMobile ? '36px' : '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: 'var(--ocean-deep)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronLeft size={isMobile ? 18 : 24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            style={{
              position: 'absolute',
              top: '50%',
              right: isMobile ? '5px' : '-60px',
              // transform: 'translateY(-50%)',
              background: 'var(--glass)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: isMobile ? '36px' : '50px',
              height: isMobile ? '36px' : '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: 'var(--ocean-deep)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronRight size={isMobile ? 18 : 24} />
          </motion.button>

          {/* Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 2
          }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                style={{
                  width: currentIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === index ? 'var(--gold)' : 'var(--sand-dark)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;



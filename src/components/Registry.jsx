import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plane, X } from 'lucide-react';

const Registry = () => {
  const [showBlessings, setShowBlessings] = useState(false);

  // Use useLayoutEffect to prevent flickering/layout shift before paint
  useLayoutEffect(() => {
    if (showBlessings) {
      // Calculate scrollbar width to prevent "jumping"
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [showBlessings]);

  const registries = [
    {
      name: "Honeymoon Fund 😜",
      description: "Help us create unforgettable memories on our first trip as a married couple.",
      icon: <Plane size={32} />,
      link: "#"
    }
  ];

  return (
    <section 
      id="registry" 
      className="registry-section" 
      style={{ 
        position: 'relative', 
        zIndex: showBlessings ? 10001 : 1 
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="registry-header"
        >
          <p className="script-text">Gift & Blessings</p>
          <p className="registry-subtitle">
            Your presence at our wedding is the greatest gift of all. We are truly honored to have you celebrate with us.
          </p>
        </motion.div>

        <div className="registry-grid" style={{ display: 'flex', justifyContent: 'center' }}>
          {registries.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="registry-card glass"
              style={{ maxWidth: '400px', width: '100%' }}
            >
              <div className="registry-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <motion.button
                onClick={() => setShowBlessings(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Pay via UPI
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blessings Modal */}
      <AnimatePresence>
        {showBlessings && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="blessings-modal-overlay"
            onClick={() => setShowBlessings(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(26, 60, 64, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 10002,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              touchAction: 'none' // Prevent touch scrolling on mobile
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass blessings-card"
              style={{
                maxWidth: '500px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '3rem 2rem',
                textAlign: 'center',
                position: 'relative',
                background: 'var(--sand-light)',
                borderRadius: '30px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
              }}
            >
              <button 
                onClick={() => setShowBlessings(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--ocean-deep)',
                  cursor: 'none',
                  padding: '10px'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <Heart size={60} fill="var(--gold)" />
              </div>
              
              <p style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>અરે ના હોય!</p>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--ocean-deep)', marginBottom: '1rem', lineHeight: 1.2 }}>
                Your Blessings are Enough!
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', opacity: 0.9, lineHeight: '1.6', marginBottom: '2rem' }}>
                We are so grateful for your love and presence. That is the only gift we truly need as we start our new journey together.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBlessings(false)}
                className="btn-primary"
                style={{ minWidth: '180px' }}
              >
                Thank You
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Registry);

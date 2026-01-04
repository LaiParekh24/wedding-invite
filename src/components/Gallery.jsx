import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginBottom: '1rem' }}
        >
          Our Moments
        </motion.h2>
        <p className="script-text" style={{ marginBottom: '3rem' }}>A glimpse into our story</p>
        
        <div className="gallery-grid">
          {weddingConfig.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card"
              style={{ padding: '10px', height: '400px', overflow: 'hidden', position: 'relative' }}
            >
              <div style={{ 
                width: '100%', 
                height: '100%', 
                position: 'relative'
              }}>
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                  color: 'white',
                  textAlign: 'left',
                  borderRadius: '0 0 12px 12px'
                }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';

const Travel = () => {
  return (
    <section className="travel" id="travel">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginBottom: '1rem' }}
        >
          Travel & Stay
        </motion.h2>
        <p className="script-text" style={{ marginBottom: '3rem' }}>Getting there is half the fun</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card"
          >
            <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '1rem' }}>✈️ Flights</h3>
            <p style={{ color: 'var(--text-light)' }}>
              The nearest airport is Surat Airport (STV), about 1.5 hours away. 
              Mumbai Airport (BOM) is also an option, approximately 3.5 hours drive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card"
          >
            <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '1rem' }}>🏨 Accommodation</h3>
            <p style={{ color: 'var(--text-light)' }}>
              We have reserved a block of rooms at the Tithal Beach Resort. 
              Please mention "Falak & Shrey Wedding" when booking for a special rate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card"
          >
            <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '1rem' }}>🚗 Transport</h3>
            <p style={{ color: 'var(--text-light)' }}>
              Shuttle services will be provided from the resort to the venue 
              for all wedding events. Private taxis are also easily available.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Travel;

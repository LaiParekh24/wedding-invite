import React from 'react';
import { motion } from 'framer-motion';

const DressCode = () => {
  return (
    <section className="dress-code" id="dress-code">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card dress-code-card"
        >
          <h2 className="dress-code-title">Dress Code</h2>
          
          <p className="dress-code-intro" style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>
            We'd love to see you dressed for the occasion! Here's what to wear for each celebration:
          </p>
          
          {/* Poojan */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="dress-code-subtitle" style={{ color: 'var(--ocean-deep)', marginBottom: '1rem' }}>
              🙏 Poojan
            </h3>
            <p style={{ fontSize: '1.05rem', opacity: 0.8 }}>
              Pooja Na Kapda
            </p>
          </div>

          {/* Sangeet Night */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 className="dress-code-subtitle" style={{ color: 'var(--ocean-deep)', marginBottom: '1rem' }}>
              ✨ Sangeet Night
            </h3>
            <p style={{ fontSize: '1.05rem', opacity: 0.8, marginBottom: '1.5rem' }}>
              Fun, festive & Bollywood vibes
            </p>
            <div className="dress-code-grid">
              <div className="dress-code-item">
                <h4>For Men</h4>
                <p>Indo-western outfits / Smart kurtas</p>
              </div>
              <div className="dress-code-item">
                <h4>For Women</h4>
                <p>Gowns, lehengas, or festive fusion wear</p>
              </div>
            </div>
          </div>

          {/* Wedding */}
          <div>
            <h3 className="dress-code-subtitle" style={{ color: 'var(--ocean-deep)', marginBottom: '1rem' }}>
              💍 Wedding (Shaadi)
            </h3>
            <p style={{ fontSize: '1.05rem', opacity: 0.8, marginBottom: '1.5rem' }}>
              Traditional & elegant
            </p>
            <div className="dress-code-grid">
              <div className="dress-code-item">
                <h4>For Men</h4>
                <p>Sherwani or Bandhgala</p>
              </div>
              <div className="dress-code-item">
                <h4>For Women</h4>
                <p>Saree or Chaniya Choli</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;

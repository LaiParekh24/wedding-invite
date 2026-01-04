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
          {/* <div className="divider">
            <div className="line"></div>
            <div className="shell-icon">🐚</div>
            <div className="line"></div>
          </div> */}
          
          <h3 className="dress-code-subtitle">
            Beach Formal
          </h3>
          
          <p className="dress-code-intro">
            We'd love to see you in your best beach-inspired formal attire! 
            Think light fabrics, breezy silhouettes, and elegant summer styles.
          </p>
          
          <div className="dress-code-grid">
            <div className="dress-code-item">
              <h4>For Gentlemen</h4>
              <p>
                Linen suits, light-colored blazers, or dress shirts with chinos. Ties are optional. 
                Comfortable loafers or boat shoes are recommended.
              </p>
            </div>
            <div className="dress-code-item">
              <h4>For Ladies</h4>
              <p>
                Midi or maxi dresses in floral prints or soft pastels. 
                Wedged heels or elegant flats are best for the sandy terrain.
              </p>
            </div>
          </div>
          
          <p className="dress-code-note">
            Note: The ceremony will be on the sand, so please choose your footwear accordingly!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;

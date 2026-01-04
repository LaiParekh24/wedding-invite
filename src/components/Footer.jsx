import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { weddingConfig } from '../config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="footer-content"
        >
          <p className="script-text" style={{ fontSize: '3rem' }}>{weddingConfig.couple.initials}</p>
          
          <div className="footer-info">
            <p className="footer-date">{weddingConfig.date}</p>
            <p className="footer-location">{weddingConfig.location}</p>
          </div>

          <div className="footer-social">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="social-link"><Instagram size={20} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="social-link"><Facebook size={20} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href={`mailto:${weddingConfig.contact.email}`} className="social-link"><Mail size={20} /></motion.a>
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="footer-heart"
          >
            <Heart size={24} fill="var(--coral)" color="var(--coral)" />
          </motion.div>

          <p className="footer-tagline">Designed with love for our special day</p>
          
          <div className="footer-bottom">
            <p>&copy; 2026 {weddingConfig.couple.bride} & {weddingConfig.couple.groom}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

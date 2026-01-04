import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config';
import Countdown from './Countdown';
import { generateICS } from '../utils/calendar';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="container"
      >
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="script-text"
        >
          {weddingConfig.tagline}
        </motion.p>
        
        <motion.h1 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {weddingConfig.couple.bride} <br />
          <span className="ampersand">&</span> <br />
          {weddingConfig.couple.groom}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hero-details"
        >
          <p className="hero-date">
            {weddingConfig.date}
          </p>
          <p className="hero-location">
            {weddingConfig.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hero-actions"
        >
          <Countdown targetDate={weddingConfig.date} />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => generateICS({
              title: `Wedding of ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom}`,
              description: `Join us for our special day at ${weddingConfig.venue}!`,
              location: `${weddingConfig.venue}, ${weddingConfig.location}`,
              startTime: '20260824T170000',
              endTime: '20260824T230000'
            })}
            className="btn-primary"
          >
            Save the Date
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ marginTop: '5rem' }}
        >
          <div className="scroll-indicator floating">
            <div className="mouse"></div>
            <p style={{ 
              fontSize: '0.7rem', 
              marginTop: '1.5rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em',
              opacity: 0.6
            }}>Scroll to explore</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Hero;

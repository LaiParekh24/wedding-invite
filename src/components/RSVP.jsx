import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart } from 'lucide-react';
import { weddingConfig } from '../config';

const RSVP = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="rsvp-card glass"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rsvp-heart"
          >
            <Heart size={60} fill="var(--coral)" color="var(--coral)" opacity={0.8} />
          </motion.div>
          
          <p className="script-text">Join Us</p>
          <h2 className="rsvp-title">
            Are You Coming?
          </h2>
          <p className="rsvp-deadline">
            Please kindly respond by <span className="deadline-date">{weddingConfig.rsvpDeadline}</span>
          </p>

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="success-message"
            >
              <h3 className="success-title">Thank You!</h3>
              <p className="success-text">We've received your response. We can't wait to celebrate with you!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <input type="text" placeholder="Your Full Name" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="" disabled selected>Will you attend?</option>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              <div className="form-group">
                <input type="number" placeholder="Number of Guests" min="1" max="5" />
              </div>
              <div className="form-group">
                <textarea placeholder="Dietary requirements or a sweet note for us..." rows="4"></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary rsvp-btn"
                disabled={formState === 'sending'}
              >
                {formState === 'sending' ? 'Sending...' : 'Send RSVP'}
                <Send size={18} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};


export default RSVP;

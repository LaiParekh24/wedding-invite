import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config';

const Venue = () => {
  return (
    <section id="venue" className="venue-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="venue-content glass"
          style={{ overflow: 'hidden', padding: 0 }}
        >
          <div className="venue-text">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="script-text">The Place</p>
              <h2 className="venue-title">
                The Venue
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="venue-name">
                {weddingConfig.venue}
              </p>
              <p className="venue-address">
                <MapPin size={20} strokeWidth={1.5} />
                {weddingConfig.location}
              </p>
              
              {/* <p className="venue-description">
                Join us at this breathtaking coastal retreat where the waves meet the shore. 
                A perfect setting for our special day.
              </p> */}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary venue-btn"
              onClick={() => window.open(weddingConfig.mapLocation.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingConfig.venue + ' ' + weddingConfig.location)}`, '_blank')}
            >
              <Navigation size={18} />
              Get Directions
            </motion.button>
          </div>
          
          <div className="venue-map" style={{ height: '100%', minHeight: '400px' }}>
            <iframe
              src={weddingConfig.mapLocation.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Venue;

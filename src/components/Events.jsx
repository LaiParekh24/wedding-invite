import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import { weddingConfig } from '../config';
import { generateICS } from '../utils/calendar';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="script-text" style={{ fontSize: '2.5rem' }}>The Details</p>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginTop: '-1rem' }}>
            The Celebration
          </h2>
        </motion.div>

        <div className="events-grid">
          {weddingConfig.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="event-card glass"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="event-icon">
                {index === 0 ? <Clock size={40} strokeWidth={1.5} /> : index === 1 ? <Calendar size={40} strokeWidth={1.5} /> : <MapPin size={40} strokeWidth={1.5} />}
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{event.name}</h3>
              <div className="event-details">
                <p style={{ fontWeight: 500 }}><Clock size={18} color="var(--ocean-blue)" /> {event.time}</p>
                <p style={{ fontWeight: 500 }}><Calendar size={18} color="var(--ocean-blue)" /> {event.date}</p>
                <p style={{ fontWeight: 500 }}><MapPin size={18} color="var(--ocean-blue)" /> {event.location}</p>
              </div>
              <p className="event-description" style={{ fontSize: '1.05rem', opacity: 0.8, flexGrow: 1 }}>{event.description}</p>
              
              <div className="event-footer">
                <div className="event-line"></div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => generateICS(event)}
                  className="event-calendar-btn"
                >
                  <Download size={16} />
                  Save to Calendar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;


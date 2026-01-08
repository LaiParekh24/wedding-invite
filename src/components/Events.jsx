import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Download, Shirt, Navigation, Sun, Gift, Music, Heart } from 'lucide-react';
import { weddingConfig } from '../config';
import { generateICS } from '../utils/calendar';

const iconMap = {
  Sun: Sun,
  Gift: Gift,
  Music: Music,
  Heart: Heart,
  Clock: Clock,
  Calendar: Calendar,
  MapPin: MapPin
};

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="events-header"
        >
          <p className="script-text">The Details</p>
          <h2>The Celebration</h2>
        </motion.div>

        <div className="events-grid">
          {weddingConfig.events.map((event, index) => {
            const IconComponent = iconMap[event.icon] || MapPin;
            return (
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
                  <IconComponent strokeWidth={1.5} />
                </div>
              <h3 style={{ color: 'var(--gold)' }}>{event.name}</h3>
              <div className="event-details">
                <p style={{ fontWeight: 500 }}><Clock size={18} color="var(--ocean-blue)" /> {event.time}</p>
                <p style={{ fontWeight: 500 }}><Calendar size={18} color="var(--ocean-blue)" /> {event.date}</p>
                <motion.a 
                  href={event.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ color: 'var(--ocean-blue)', x: 5 }}
                  style={{ fontWeight: 500, color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }}
                  className="event-location-link"
                >
                  <MapPin size={18} color="var(--ocean-blue)" /> {event.location}
                </motion.a>
              </div>
              <p className="event-description">{event.description}</p>
              
              {event.dressCode && (
                <div className="event-dress-code" style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(var(--ocean-blue-rgb), 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--ocean-blue)' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ocean-deep)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shirt size={16} /> Dress Code
                  </p>
                  <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.4' }}>{event.dressCode}</p>
                </div>
              )}

              {event.schedule && (
                <div className="event-schedule" style={{ marginTop: '1.5rem', width: '100%', background: 'rgba(255,255,255,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  {event.schedule.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: i === event.schedule.length - 1 ? 0 : '0.5rem', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--ocean-deep)' }}>{item.label}</span>
                      <span style={{ fontWeight: 500 }}>{item.time}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="event-footer">
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => generateICS(event)}
                  className="event-calendar-btn"
                >
                  <Calendar size={18} strokeWidth={2} />
                  <span>Calendar</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(event.mapLink, '_blank')}
                  className="event-map-btn"
                >
                  <Navigation size={18} fill="white" />
                  <span>Directions</span>
                </motion.button>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Events;


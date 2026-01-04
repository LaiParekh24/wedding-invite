import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: "2020",
      title: "How We Met",
      description: "A chance encounter at a local coffee shop in Santa Monica.",
      icon: "☕"
    },
    {
      year: "2021",
      title: "First Trip",
      description: "Exploring the beautiful coastlines of Big Sur together.",
      icon: "🚗"
    },
    {
      year: "2023",
      title: "The Proposal",
      description: "A sunset proposal on the very beach where we're getting married.",
      icon: "💍"
    },
    {
      year: "2026",
      title: "The Big Day",
      description: "Starting our forever with all of you by our side.",
      icon: "✨"
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="script-text" style={{ fontSize: '2.5rem' }}>Our Journey</p>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginTop: '-1rem' }}>
            How It All Began
          </h2>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content glass">
                <span className="timeline-year">{event.year}</span>
                <div className="timeline-icon">{event.icon}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

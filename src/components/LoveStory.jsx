import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config';

const LoveStory = () => {
  return (
    <section id="love-story" className="love-story-section">
      <div className="container">
        <div className="love-story-grid">
          <motion.div 
            className="love-story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="image-stack">
              <img src="/images/couple-forever.jpeg" alt="Our Love" className="img-main" />
              <div className="img-accent glass">
                <p className="script-text" style={{ fontSize: '2rem', color: 'var(--ocean-deep)' }}>Forever</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="love-story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="script-text">Our Story</p>
            <h2 className="love-story-title">
              How We Met
            </h2>
            <div className="story-content">
              <p>Ours began in the most unexpected way. An arranged meeting, biodatas exchanged—but barely read. What truly mattered happened when we met. From our very first conversation, we felt an instant ease, a natural connection. Meetings turned into long conversations, conversations into comfort, and before we knew it, two paths gently chose each other. That’s how we met—by fate, by faith, and by saying yes to a feeling.</p>
              {/* <p>
                It all started with a simple cup of coffee in Santa Monica. What was supposed to be a quick 30-minute meeting turned into a four-hour conversation about travel, music, and our shared love for the ocean.
              </p>
              <p>
                From that day on, we were inseparable. We've traveled to over ten countries together, adopted a golden retriever named Sandy, and built a life filled with laughter and adventure.
              </p>
              <p>
                Three years later, on the same beach where we'll say "I do," Ethan asked the most important question of his life. And Sophia, with tears of joy, said yes.
              </p> */}
            </div>
            <div className="story-quote">
              <p>"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."</p>
              <span>— Shrey Parekh</span>
              {/* <span>— Maya Angelou</span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;

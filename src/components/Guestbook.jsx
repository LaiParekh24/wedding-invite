import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Guestbook = () => {
  const [messages, setMessages] = useState([
    { name: "Aunt Mary", message: "So happy for you both! Can't wait to celebrate." },
    { name: "The Smiths", message: "Wishing you a lifetime of love and happiness." }
  ]);

  return (
    <section className="guestbook" id="guestbook">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginBottom: '3rem' }}
        >
          Guestbook
        </motion.h2>
        
        <div className="glass-card" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '1.5rem' }}>Leave a Message</h3>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--sand-dark)', background: 'white' }}
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--sand-dark)', background: 'white' }}
            ></textarea>
            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Post Message</button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          {messages.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '20px' }}
            >
              <p style={{ fontWeight: '600', color: 'var(--ocean-deep)' }}>{m.name}</p>
              <p style={{ color: 'var(--text-light)', fontStyle: 'italic' }}>"{m.message}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;

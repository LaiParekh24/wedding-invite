import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "How far is the venue from Valsad Railway Station?", a: "The venue is just 10–15 minutes away from Valsad Railway Station." },
    { q: "Do we need to pre-book transport?", a: "No stress! Autos and local transport are easily available near the station." },
    { q: "Do I need to carry my own toiletries?", a: "Basic toiletries will be provided by us. However, we request you to please carry your own towels." },
    { q: "Is parking available at the venue?", a: "Yes, ample parking space is available for guests.But we don’t have EV charging station" },
    { q: "Lost? Confused? Need chai?", a: "Family members will be around to help—just ask anyone smiling 😄" },
    // { q: "Is there a gift registry?", a: "Your presence is the greatest gift! If you wish to give, we have a registry section below with some ideas." }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '2.5rem', color: 'var(--ocean-deep)', marginBottom: '3rem' }}
        >
          Common Questions
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '25px' }}
            >
              <h3 style={{ color: 'var(--ocean-blue)', fontSize: '1.2rem', marginBottom: '0.8rem' }}>{faq.q}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

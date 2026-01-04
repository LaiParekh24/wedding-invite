import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { q: "Can I bring a plus one?", a: "We have carefully curated our guest list to stay within venue capacity. Please refer to your invitation for the number of seats reserved in your honor." },
    { q: "Are children welcome?", a: "We love your little ones! However, we have decided to make our wedding an adults-only celebration." },
    { q: "What time should I arrive?", a: "We recommend arriving 30 minutes before the ceremony starts to find your seat and enjoy the pre-wedding music." },
    { q: "Is there a gift registry?", a: "Your presence is the greatest gift! If you wish to give, we have a registry section below with some ideas." }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginBottom: '3rem' }}
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

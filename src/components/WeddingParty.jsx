import React from 'react';
import { motion } from 'framer-motion';

const WeddingParty = () => {
  const party = [
    { name: "Sarah Johnson", role: "Maid of Honor", relation: "Sister of the Bride" },
    { name: "Michael Chen", role: "Best Man", relation: "Childhood Friend" },
    { name: "Emily Davis", role: "Bridesmaid", relation: "College Roommate" },
    { name: "David Wilson", role: "Groomsman", relation: "Brother of the Groom" },
  ];

  return (
    <section className="wedding-party" id="wedding-party">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ fontSize: '3.5rem', color: 'var(--ocean-deep)', marginBottom: '3rem' }}
        >
          Wedding Party
        </motion.h2>
        
        <div className="wedding-party-grid">
          {party.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '30px' }}
            >
              <div style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                margin: '0 auto 1.5rem',
                overflow: 'hidden',
                border: '3px solid var(--pearl)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={index === 0 ? "/images/party-1.png" : `/images/gallery-${index + 1}.png`} 
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '0.5rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--gold)', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase' }}>{member.role}</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '0.5rem' }}>{member.relation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;

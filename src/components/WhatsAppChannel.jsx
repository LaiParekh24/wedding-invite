import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bell, Calendar, Camera } from 'lucide-react';
import { weddingConfig } from '../config';

const WhatsAppChannel = () => {
  const whatsappChannelLink = weddingConfig.contact.whatsappChannelLink;

  const features = [
    {
      icon: <Bell size={24} />,
      title: "Live Updates",
      description: "Get real-time updates about all wedding events"
    },
    {
      icon: <Calendar size={24} />,
      title: "Schedule Changes",
      description: "Stay informed about any timing updates"
    },
    {
      icon: <Camera size={24} />,
      title: "Photo Sharing",
      description: "Access exclusive photos and moments"
    }
  ];

  return (
    <section className="whatsapp-channel-section" id="whatsapp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="script-text" style={{ fontSize: '2.5rem' }}>Stay Connected</p>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--ocean-deep)', marginTop: '-1rem' }}>
            Join Our WhatsApp Group
          </h2>
          <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem', opacity: 0.8 }}>
            Don't miss a moment! Join our WhatsApp Group for live updates, schedule changes, and exclusive content from our wedding celebrations.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '3rem'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card"
              style={{ 
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(37, 211, 102, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: '#25D366'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--ocean-deep)' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '1rem', opacity: 0.7, lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.a
            href={whatsappChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '18px 40px',
              borderRadius: '50px',
              background: '#25D366',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <MessageCircle size={24} />
            Join WhatsApp Group
          </motion.a>
          
          <p style={{ 
            marginTop: '1.5rem', 
            fontSize: '0.9rem', 
            opacity: 0.6,
            fontStyle: 'italic'
          }}>
            Click to join and never miss an update!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppChannel;

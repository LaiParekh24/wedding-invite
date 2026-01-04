import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Coffee, Plane } from 'lucide-react';
import { weddingConfig } from '../config';

const Registry = () => {
  const registries = [
    {
      name: "Honeymoon Fund 😜",
      description: "Help us create unforgettable memories on our first trip as a married couple.",
      icon: <Plane size={32} />,
      link: "#"
    },
    // {
    //   name: "Home Essentials",
    //   description: "Contributions towards our future home and daily life together.",
    //   icon: <Coffee size={32} />,
    //   link: "#"
    // },
    // {
    //   name: "Charity Donation",
    //   description: "In lieu of gifts, we would be honored if you donated to a cause close to our hearts.",
    //   icon: <Heart size={32} />,
    //   link: "#"
    // },
    // {
    //   name: "Send a Gift",
    //   description: "Contribute to our new beginning directly via UPI.",
    //   icon: <Gift size={32} />,
    //   link: "#"
    // }
  ];
  const upiLink = `upi://pay?pa=${weddingConfig.registry.upiId}&pn=${encodeURIComponent(weddingConfig.registry.payeeName)}&tn=${encodeURIComponent(weddingConfig.registry.message)}`;

  return (
    <section id="registry" className="registry-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="registry-header"
        >
          <p className="script-text">Gift & Blessings</p>
          {/* <h2 className="registry-title">
            Gift & Blessings
          </h2> */}
          <p className="registry-subtitle">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, you can do so via UPI.
          </p>
        </motion.div>

        <div className="registry-grid">
          {registries.map((item, index) => (
          <motion.div
              key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="registry-card glass"
            style={{ maxWidth: '400px', width: '100%' }}
          >
            <div className="registry-icon">{item.icon}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <motion.a
              href={upiLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay via UPI
            </motion.a>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;

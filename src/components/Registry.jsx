import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Coffee, Plane } from 'lucide-react';

const Registry = () => {
  const registries = [
    {
      name: "Honeymoon Fund",
      description: "Help us create unforgettable memories on our first trip as a married couple.",
      icon: <Plane size={32} />,
      link: "#"
    },
    {
      name: "Home Essentials",
      description: "Contributions towards our future home and daily life together.",
      icon: <Coffee size={32} />,
      link: "#"
    },
    {
      name: "Charity Donation",
      description: "In lieu of gifts, we would be honored if you donated to a cause close to our hearts.",
      icon: <Heart size={32} />,
      link: "#"
    }
  ];

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
          <p className="script-text">Gift Registry</p>
          <h2 className="registry-title">
            Registry & Gifts
          </h2>
          <p className="registry-subtitle">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following:
          </p>
        </motion.div>

        <div className="registry-grid">
          {registries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="registry-card glass"
            >
              <div className="registry-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <motion.a
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Registry
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;

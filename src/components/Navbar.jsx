import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { weddingConfig } from '../config';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Our Story', href: '#love-story' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Party', href: '#wedding-party' },
    { name: 'Events', href: '#events' },
    { name: 'Attire', href: '#dress-code' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venue', href: '#venue' },
    { name: 'Travel', href: '#travel' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Registry', href: '#registry' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Beach', href: '/beach', isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (item.isRoute) {
      // Let Link handle it
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.href } });
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {weddingConfig.couple.initials}
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link key={item.name} to={item.href} className="nav-link">
                {item.name}
              </Link>
            ) : (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ zIndex: 1100, position: 'relative' }}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="mobile-link"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                </a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Venue from '../components/Venue';
import RSVP from '../components/RSVP';
import AudioPlayer from '../components/AudioPlayer';
import BeachBackground from '../components/BeachBackground';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import { motion, useScroll, useSpring } from 'framer-motion';

import Registry from '../components/Registry';

import Timeline from '../components/Timeline';

import FAQ from '../components/FAQ';
import Guestbook from '../components/Guestbook';
import WeddingParty from '../components/WeddingParty';
import Travel from '../components/Travel';
import Footer from '../components/Footer';
import LoveStory from '../components/LoveStory';
import FloatingRSVP from '../components/FloatingRSVP';
import LoadingScreen from '../components/LoadingScreen';
import ScrollToTop from '../components/ScrollToTop';
import Divider from '../components/Divider';
import WhatsAppChannel from '../components/WhatsAppChannel';

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Force scroll to top on refresh
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      
      {/* 3D Background */}
      <BeachBackground />

      {/* Main Content */}
      <main>
        <Hero />
        
        <Divider />

        <LoveStory />
        <Divider />
        
        {/* <Timeline />
        <Divider /> */}
        
        {/* <WeddingParty />
        <Divider /> */}

        <Events />
        <Divider />
        
        <Gallery />
        <Divider />
        
        <Venue />
        <Divider />
        
        {/* <Travel />
        <Divider /> */}
        
        <FAQ />
        <Divider />
        
        {/* <Guestbook />
        <Divider /> */}
        
        <Registry />
        <Divider />

        <WhatsAppChannel />
        <Divider />
        
        {/* <RSVP /> */}
        <Footer />
      </main>

      {/* Floating Audio Player */}
      <AudioPlayer />
      {/* <FloatingRSVP /> */}
      <ScrollToTop />
    </div>
  );
}

export default Home;

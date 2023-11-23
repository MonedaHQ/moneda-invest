import { motion, useInView, AnimatePresence } from 'framer-motion';

import useScrollPosition from '@/hooks/useScrollPostition';

import Navigation from '@/components/navComponents/mainNav/Navigation';

import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Footer from '@/components/footerComponents/Footer';
import { homeExplore, homeQuickLinks } from '@/data/footerLinks';
import Hero from './Hero';
import OurMission from './OurMission';
import OurCoreValues from './OurCoreValues';
import OurPromise from './OurPromise';

function Manifesto() {
  const scrollPosition = useScrollPosition(200);

  const framerMotionKit = { motion, useInView, AnimatePresence };
  return (
    <>
      <Navigation scrollPosition={scrollPosition} motion={motion} />
      <BurgerNavigation motionKit={framerMotionKit} />
      <Hero />
      <OurMission />
      <OurCoreValues motionKit={framerMotionKit} />
      <OurPromise motionKit={framerMotionKit} />
      <Footer quickLinks={homeQuickLinks} exploreLinks={homeExplore} />
    </>
  );
}

export default Manifesto;

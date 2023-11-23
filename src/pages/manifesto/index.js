import { motion, useInView, AnimatePresence } from 'framer-motion';

import useScrollPosition from '@/hooks/useScrollPostition';

import Navigation from '@/components/navComponents/mainNav/Navigation';

import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Footer from '@/components/footerComponents/Footer';
import OurCoreValues from './OurCoreValues';
import OurPromise from './OurPromise';
import { scrollOffset } from '@/utils/config';
import TypicalHero from '@/components/TypicalHero';
import Introduction from '@/components/Introduction';

const heroContent = {
  title: '“By 2100, a third of people on Earth will be <span>African</span>”',
  citation: 'World Economic Forum',
};

const introductionContent = {
  title: 'Our mission',
  paragraph:
    ' Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution',
};

function Manifesto() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const framerMotionKit = { motion, useInView, AnimatePresence };
  return (
    <>
      <Navigation scrollPosition={scrollPosition} />
      <BurgerNavigation />
      <TypicalHero content={heroContent} />
      <Introduction content={introductionContent} />
      <OurCoreValues motionKit={framerMotionKit} />
      <OurPromise motionKit={framerMotionKit} />
      <Footer />
    </>
  );
}

export default Manifesto;

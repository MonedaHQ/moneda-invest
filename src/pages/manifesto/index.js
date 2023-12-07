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
import MetaTags from '@/components/head';

const heroContent = {
  title: '“By 2100, a third of people on Earth will be <span>African</span>”',
  citation: 'World Economic Forum',
};

const introductionContent = {
  title: 'Our mission',
  paragraph:
    ' Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution',
};

const image = `radial-gradient(
  71.35% 71.35% at 50% 50%,
  rgba(0, 0, 0, .8) 0%,
  rgba(0, 0, 0, .8) 100%
),
url('/images/hero-images/illusion-of-plenty.jpg')`;

function Manifesto() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const framerMotionKit = { motion, useInView, AnimatePresence };
  return (
    <>
      <MetaTags
        title="Manifesto - Moneda Investment Limited"
        description="Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <TypicalHero
        content={heroContent}
        darkBg={true}
        image={image}
        imagePosition="center left"
      />
      <Introduction content={introductionContent} />
      <OurCoreValues motionKit={framerMotionKit} />
      <OurPromise motionKit={framerMotionKit} />
      <Footer />
    </>
  );
}

export default Manifesto;

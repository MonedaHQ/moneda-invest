import Introduction from '@/components/Introduction';
import TypicalHero from '@/components/TypicalHero';
import Footer from '@/components/footerComponents/Footer';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const heroContent = {
  title:
    "“Africa's story has been written by others; we need to own our problems and solutions and <span>write our story</span>”",
  citation: 'Paul Kagame',
};

const introductionContent = {
  title: 'Our story',
  paragraph:
    "We are part of this transformative movement, empowering African businesses to break free from traditional financing models and embrace the boundless opportunities that lie ahead. Together, we are rewriting Africa's story, one success story at a time.",
};

function WhatWeDo() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <Navigation scrollPosition={scrollPosition} />
      <BurgerNavigation />
      <TypicalHero content={heroContent} variant="lg" />
      <Introduction content={introductionContent} />
      <Footer />
    </>
  );
}

export default WhatWeDo;

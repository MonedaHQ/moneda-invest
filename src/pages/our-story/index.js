import { motion, useInView, AnimatePresence } from 'framer-motion';

import useScrollPosition from '@/hooks/useScrollPostition';

import { scrollOffset } from '@/utils/config';

import Navigation from '@/components/navComponents/mainNav/Navigation';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import TypicalHero from '@/components/TypicalHero';
import Introduction from '@/components/Introduction';
import Footer from '@/components/footerComponents/Footer';
import Stories from './Stories';
import MetaTags from '@/components/head';

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

const image = `radial-gradient(
  71.35% 71.35% at 50% 50%,
  rgba(0, 0, 0, .8) 0%,
  rgba(0, 0, 0, .8) 100%
),
url('/images/hero-images/man-the-unfree.jpg')`;

function OurStory() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Our Story - Moneda Investment Limited"
        description="We are part of a transformative movement, empowering African businesses to break free from traditional financing models and embrace the boundless opportunities that lie ahead. Together, we are rewriting Africa's story, one success story at a time."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <TypicalHero
        content={heroContent}
        variant="lg"
        darkBg={true}
        image={image}
        imagePosition="center center"
      />
      <Introduction content={introductionContent} />
      <Stories />
      <Footer />
    </>
  );
}

export default OurStory;

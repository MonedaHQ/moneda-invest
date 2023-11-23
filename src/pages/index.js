import { motion, useInView, AnimatePresence } from 'framer-motion';

import useScrollPosition from '@/hooks/useScrollPostition';

import Navigation from '@/components/navComponents/mainNav/Navigation';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import HeroSection from './index/HeroSection';
import WhyMonedaExists from './index/WhyMonedaExists';
import InvestorRelations from './index/InvestorRelations';
import ProjectPegasus from './index/ProjectPegasus';
import WhyMoneda from './index/WhyMoneda';
import Reports from './index/Reports';
import Newsletter from './index/Newsletter';
import Footer from '@/components/footerComponents/Footer';
import { homeExplore, homeQuickLinks } from '@/data/footerLinks';
import MetaTags from '@/components/head';

function Home() {
  const scrollPosition = useScrollPosition(200);

  const framerMotionKit = { motion, useInView, AnimatePresence };
  return (
    <>
      <MetaTags
        title="Home - Moneda Investment Limited"
        description="We Are Attracted To African Gap"
      />
      <Navigation scrollPosition={scrollPosition} motion={motion} />
      <BurgerNavigation motionKit={framerMotionKit} />
      <HeroSection motionKit={framerMotionKit} />
      <WhyMonedaExists />
      <InvestorRelations motionKit={framerMotionKit} />
      <ProjectPegasus motionKit={framerMotionKit} />
      <WhyMoneda motionKit={framerMotionKit} />
      <Reports />
      <Newsletter motionKit={framerMotionKit} />
      <Footer quickLinks={homeQuickLinks} exploreLinks={homeExplore} />
    </>
  );
}

export default Home;

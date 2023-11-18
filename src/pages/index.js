import Navigation from '@/components/Navigation';
import HeroSection from './index/HeroSection';
import { motion, useInView } from 'framer-motion';
import useScrollPosition from '@/hooks/useScrollPostition';
import WhyMonedaExists from './index/WhyMonedaExists';
import InvestorRelations from './index/InvestorRelations';
import { useRef } from 'react';
import ProjectPegasus from './index/ProjectPegasus';

function Home() {
  const scrollPosition = useScrollPosition(200);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef);

  const framerMotionKit = { motion, inView, inViewRef };
  return (
    <>
      <Navigation scrollPosition={scrollPosition} motion={motion} />
      <HeroSection motionKit={framerMotionKit} />
      <WhyMonedaExists />
      <InvestorRelations motionKit={framerMotionKit} />
      <ProjectPegasus motionKit={framerMotionKit} />
    </>
  );
}

export default Home;

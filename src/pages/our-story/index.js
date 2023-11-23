import Navigation from '@/components/navComponents/mainNav/Navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';

function WhatWeDo() {
  return (
    <>
      <Navigation scrollPosition={110} motion={motion} />
    </>
  );
}

export default WhatWeDo;

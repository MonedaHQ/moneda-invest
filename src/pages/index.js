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
import MetaTags from '@/components/head';
import { scrollOffset } from '@/utils/config';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);

  return (
    <>
      <MetaTags
        title="Home - Moneda Investment Limited"
        description="We Are Attracted To African Gaps"
      />
      <Navigation scrollPosition={scrollPosition} />
      <BurgerNavigation />
      <HeroSection />
      <WhyMonedaExists />
      <InvestorRelations />
      <ProjectPegasus />
      <WhyMoneda />
      {/* <Reports /> */}
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default Home;

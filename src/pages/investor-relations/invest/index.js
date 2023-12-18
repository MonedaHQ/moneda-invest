import Footer from '@/components/footerComponents/Footer';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import InvestPage from './InvestPage';

function Invest() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Become a partner today! - Moneda Investment Limited"
        description="Our carefully crafted treasury products are designed to accommodate varying risk profiles and financial goals, empowering our partners to achieve their aspirations."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={false} />
      <BurgerNavigation />
      <InvestPage />
      <Footer />
    </>
  );
}

export default Invest;

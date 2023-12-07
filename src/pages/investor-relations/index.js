import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';

import MetaTags from '@/components/head';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import TypicalHero from '@/components/TypicalHero';
import Introduction from '@/components/Introduction';
import Features from './Features';
import OurProducts from './features/products/OurProducts';
import Footer from '@/components/footerComponents/Footer';
import BlogPreview from './features/blogPreview/BlogPreview';
import Calculator from '@/components/features/calculator/Calculator';

function InvestorRelations() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const heroContent = {
    title:
      "“Africa is the world's last <span>great frontier</span> of investment opportunity. Here, there is a vast landscape of untapped potential, from burgeoning industries to a growing consumer base. For investors who are willing to take a calculated risk, Africa offers an unparalleled chance to not only generate significant returns but also to make a positive impact on the continent's development.”",
    citation: 'Mo Ibrahim, Sudanese-British billionaire and philanthropist',
  };

  const image = `radial-gradient(
    71.35% 71.35% at 50% 50%,
    rgba(0, 0, 0, .8) 0%,
    rgba(0, 0, 0, .8) 100%
  ),
  url('/images/hero-images/milking-island-ii.jpg')`;

  const introductionContent = {
    title: 'Empowering Investments. Enriching Futures.',
    paragraph:
      'Our carefully crafted treasury products are designed to accommodate varying risk profiles and financial goals, empowering our partners to achieve their aspirations.',
  };

  return (
    <>
      <MetaTags
        title="Investor Relations - Moneda Investment Limited"
        description="Never forget that intelligence rules the world and ignorance carries the burden. Therefore, remove your self as far as possible from ignorance and seek as far as possible to be intelligent"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <TypicalHero
        content={heroContent}
        variant="sm"
        image={image}
        darkBg={true}
        imagePosition="center"
      />
      <Introduction content={introductionContent} />
      <Features />
      <OurProducts />
      <Calculator />
      <BlogPreview />
      <Footer />
    </>
  );
}

export default InvestorRelations;

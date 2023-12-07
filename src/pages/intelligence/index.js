import Introduction from '@/components/Introduction';
import TypicalHero from '@/components/TypicalHero';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import Features from './Features';
import SMEResearch from './SMEResearch';
import Footer from '@/components/footerComponents/Footer';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const heroContent = {
    title:
      '"Never forget that intelligence rules the world and ignorance carries the burden. Therefore, remove your self as far as possible from ignorance and seek as far as possible to be intelligent"',
    citation: 'Marcus Garvey',
  };
  const image = `radial-gradient(
      71.35% 71.35% at 50% 50%,
      rgba(0, 0, 0, .5) 0%,
      rgba(0, 0, 0, .5) 100%
    ),
    url('/images/hero-images/milking-island-i.png')`;

  const introductionContent = {
    title: 'The Present is a Key to The Future',
    paragraph:
      'We are relentless in our quest to acquire data and convert them into valuable information which will drive the change we so desire. With our team of world class analysts who have acquired unrivalled proficiency in business analytics, data science and machine learning, we offer our clients insights that will help them navigate a rapidly evolving market in the most cost-effective way possible.',
  };

  return (
    <>
      <MetaTags
        title="Intelligence - Moneda Investment Limited"
        description="Never forget that intelligence rules the world and ignorance carries the burden. Therefore, remove your self as far as possible from ignorance and seek as far as possible to be intelligent"
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <TypicalHero
        content={heroContent}
        variant="lg"
        image={image}
        darkBg={true}
        imagePosition="center"
      />
      <Introduction content={introductionContent} />
      <Features />
      <SMEResearch />
      <Footer />
    </>
  );
}

export default Home;

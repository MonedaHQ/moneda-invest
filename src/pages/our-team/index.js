import TypicalHero from '@/components/TypicalHero';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import Team from './Team';
import Footer from '@/components/footerComponents/Footer';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const heroContent = {
    title:
      '“Let us remind ourselves of the <span>power of individuals</span> and what potent capacities and opportunities lie in this. No one but us will develop Africa”',
    citation: 'Tony Elumelu',
  };
  const image = `radial-gradient(
    71.35% 71.35% at 50% 50%,
    rgba(0, 0, 0, .8) 0%,
    rgba(0, 0, 0, .8) 100%
  ),
  url('/images/hero-images/fading-riches.jpg')`;

  return (
    <>
      <MetaTags
        title="Meet our team - Moneda Investment Limited"
        description="Let us remind ourselves of the power of individuals and what potent capacities and opportunities lie in this. No one but us will develop Africa"
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
      <Team />
      <Footer />
    </>
  );
}

export default Home;

import Introduction from '@/components/Introduction';
import Section from '@/components/Section';
import TypicalHero from '@/components/TypicalHero';
import Footer from '@/components/footerComponents/Footer';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import Industries from './Industries';
import Services from './Services';
import Clients from './Clients';
import Partners from './Partners';
import TheNumbers from './TheNumbers';

const heroContent = {
  title:
    '“The <span>pursuit of wealth</span> is not a bad thing in itself because without food and comforts which wealth provides, life will be penurious and drab. But always remember that any wealth accumulated on a selfish basis, at the expense of the state in defiance of social justice helps to create a disorganised society in which everybody will eat everybody, and no one person can be safe”',
  citation: 'Chief Obafemi Awolowo',
};

const introductionContent = {
  title: 'What We Do',
  paragraph:
    "We invest in the energy value chain, renewables deployment, and solid minerals, empowering Africa's growth and development through strategic investments.",
};

const image = `radial-gradient(
  71.35% 71.35% at 50% 50%,
  rgba(0, 0, 0, .8) 0%,
  rgba(0, 0, 0, .8) 100%
),
url('/images/hero-images/man-the-unfree-ii.jpg')`;

function WhatWeDo() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="What We Do - Moneda Investment Limited"
        description="We invest in the energy value chain, renewables deployment, and solid minerals, empowering Africa's growth and development through strategic investments."
      />
      <Navigation scrollPosition={scrollPosition} darkHero={true} />
      <BurgerNavigation />
      <TypicalHero
        content={heroContent}
        variant="sm"
        image={image}
        darkBg={true}
        imagePosition="center left"
      />
      <Introduction content={introductionContent} />
      <Industries />
      <Services />
      <Clients />
      <Partners />
      <TheNumbers />
      <Footer />
    </>
  );
}

export default WhatWeDo;

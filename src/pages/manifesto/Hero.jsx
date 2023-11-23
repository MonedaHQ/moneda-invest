import TypicalHero from '@/components/TypicalHero';

function Hero() {
  const heroContent = {
    title: '“By 2100, a third of people on Earth will be <span>African</span>”',
    citation: ' World Economic Forum',
  };

  return <TypicalHero content={heroContent} />;
}

export default Hero;

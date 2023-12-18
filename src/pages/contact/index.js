import Footer from '@/components/footerComponents/Footer';
import MetaTags from '@/components/head';
import BurgerNavigation from '@/components/navComponents/burgerNav/BurgerNavigation';
import Navigation from '@/components/navComponents/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostition';
import { scrollOffset } from '@/utils/config';
import ContactForm from './Contact';

function Contact() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Contact Us - Moneda Investment Limited"
        description="We'd love to hear from you"
      />
      <Navigation scrollPosition={scrollPosition} />
      <BurgerNavigation />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;

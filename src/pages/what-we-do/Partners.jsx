import Marquee from '@/components/Marquee';
import Section from '@/components/Section';
import { partnersData } from '@/data/partnerData';

function Partners() {
  return (
    <Section>
      <Marquee data={partnersData} />
    </Section>
  );
}

export default Partners;

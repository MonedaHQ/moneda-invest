import Marquee from '@/components/Marquee';
import Section from '@/components/Section';
import { clientsData } from '@/data/partnerData';

function Clients() {
  return (
    <Section>
      <Marquee data={clientsData} />
    </Section>
  );
}

export default Clients;

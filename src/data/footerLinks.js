import { FaXTwitter } from 'react-icons/fa6';
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
} from 'react-icons/pi';

export const homeQuickLinks = [
  { label: 'Manifesto', path: '/manifesto' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'What We Do', path: '/what-we-do' },
  { label: 'Our Team', path: '/our-team' },
  // { label: 'Privacy Policy', path: '/privacy-policy' },
];

export const homeExplore = [
  { label: 'Pegasus', path: '/pegasus' },
  { label: 'Investor Relations', path: '/investor-relations' },
  { label: 'Intelligence', path: '/intelligence' },
  { label: 'Reports', path: '/reports' },
];

export const contactDetails = {
  phoneNumber: { path: 'tel:01-23-4567', label: '01-23-4567' },
  email: {
    path: 'mailto:info@monedainvest.com',
    label: 'info@monedainvest.com',
  },
};

export const socialLinks = [
  {
    icon: <PiInstagramLogoFill />,
    path: 'https://www.instagram.com/monedainvest/',
  },
  {
    icon: <PiFacebookLogoFill />,
    path: 'https://www.facebook.com/MonedaInvest',
  },
  { icon: <FaXTwitter />, path: 'https://twitter.com/MonedaInvest' },
  {
    icon: <PiLinkedinLogoFill />,
    path: 'https://www.linkedin.com/company/moneda-invest/mycompany/',
  },
];

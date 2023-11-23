import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

export const homeMenuLinks = [
  {
    path: null,
    label: 'Who We Are',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/manifesto', label: 'Manifesto' },
      { path: '/our-story', label: 'Our Story' },
      { path: '/what-we-do', label: 'What We Do' },
      { path: '/our-team', label: 'Our Team' },
    ],
  },
  {
    path: null,
    label: 'Our Products',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/investor-relations', label: 'Investor Relations' },
      { path: '/intelligence', label: 'Intelligence' },
    ],
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: null,
    icon2: null,
    dropdown: null,
  },

  // {
  //   path: '/investor-relations',
  //   label: 'Investor relations',
  //   icon: null,
  //   icon2: null,
  //   dropdown: null,
  // },
  // {
  //   path: '/intelligence',
  //   label: 'Intelligence',
  //   icon: null,
  //   icon2: null,
  //   dropdown: null,
  // },
  {
    path: '/contact',
    label: 'Contact',
    icon: null,
    icon2: null,
    dropdown: null,
  },
];

import { useState } from 'react';

import Button from '../Button';
import DropDown from './DropDown';

import styles from './styles/navlink.module.css';

function NavLink({ link, motion }) {
  const [isHovered, setIsHovered] = useState(false);

  let icon = null;
  if (link.icon) {
    icon = isHovered ? link.icon2 : link.icon;
  }

  return (
    <li key={link.label}>
      <div className={styles.navLink}>
        <Button
          variant="link-light"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {link.label} {icon}
        </Button>
        {link.dropdown && (
          <DropDown
            dropdownList={link.dropdown}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
            motion={motion}
          />
        )}
      </div>
    </li>
  );
}

export default NavLink;

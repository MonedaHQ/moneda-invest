import Button from '../Button';
import styles from './styles/dropdown.module.css';

function DropDown({ dropdownList, setIsHovered, isHovered, motion }) {
  const dropdown = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.8, duration: 0.2 },
    },
  };
  if (!isHovered) return null;

  return (
    <motion.div
      className={styles.dropDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant={dropdown}
      initial="initial"
      animate="visible"
    >
      <ul className={styles.dropDownList}>
        {dropdownList.map((link) => (
          <li key={link.label}>
            <Button
              variant="link-light"
              action={link.action}
              onClick={() => console.log('here!')}
            >
              {link.label}
            </Button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default DropDown;

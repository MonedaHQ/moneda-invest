import styles from './styles/button.module.css';

function Button({
  children,
  onClick,
  variant,
  onMouseEnter = null,
  onMouseLeave = null,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

export default Button;

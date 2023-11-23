import Link from 'next/link';
import styles from './styles/button.module.css';

function Button({
  children,
  onClick,
  href = null,
  variant,
  onMouseEnter = null,
  onMouseLeave = null,
}) {
  const commonProps = {
    className: `${styles.button} ${styles[variant]}`,
    onClick,
    onMouseEnter,
    onMouseLeave,
  };
  if (href) {
    return (
      <Link {...commonProps} href={href}>
        {children}
      </Link>
    );
  } else {
    return <button {...commonProps}>{children}</button>;
  }
}

export default Button;

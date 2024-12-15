import React from 'react';
import styles from './CTAButton.module.sass';

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default CTAButton;
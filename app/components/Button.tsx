'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { buttonVariants, buttonTap, buttonHover } from '@/app/lib/animations';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'glass';
  className?: string;
  href?: string;
  delay?: number;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  delay = 0,
}: ButtonProps) {
  const baseClasses = 'btn w-full';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-glass';

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileTap={buttonTap}
      whileHover={buttonHover}
      onClick={onClick}
      transition={{ delay }}
    >
      {children}
    </motion.button>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageVariants } from '@/app/lib/animations';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      className={`min-h-screen pt-[var(--header-height)] ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

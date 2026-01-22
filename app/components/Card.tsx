'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerItem } from '@/app/lib/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`card ${className}`}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}

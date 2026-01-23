'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/hooks/useLanguage';
import PageTransition from '@/app/components/PageTransition';
import Button from '@/app/components/Button';
import Confetti from '@/app/components/Confetti';
import { titleVariants, subtitleVariants, staggerContainer, floatVariants } from '@/app/lib/animations';

export default function WelcomePage() {
  const router = useRouter();
  const { lang, t } = useLanguage();

  const handleContinue = () => {
    router.push(`/${lang}/instructions`);
  };

  return (
    <PageTransition>
      <Confetti />
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative floating elements - mix of black and gold */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-24 left-8 w-4 h-4 bg-[var(--accent)] rounded-full"
            variants={floatVariants}
            animate="animate"
          />
          <motion.div
            className="absolute top-40 right-6 w-6 h-6 bg-black/10 rounded-full"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-48 left-12 w-5 h-5 bg-[var(--accent)]/60 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />
          <motion.div
            className="absolute bottom-36 right-10 w-8 h-8 bg-black/10 rounded-full"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 left-4 w-3 h-3 bg-[var(--accent)] rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="absolute top-32 left-1/3 w-2 h-2 bg-[var(--accent)]/80 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
        </div>

        {/* Main content */}
        <motion.div
          className="w-full max-w-lg z-10 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Title */}
          <motion.h1
            className="text-[var(--size-title)] font-extrabold mb-4 leading-tight"
            variants={titleVariants}
            style={{ color: 'var(--text)', whiteSpace: 'pre-line' }}
          >
            {t.welcomeTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[var(--size-subtitle)] mb-12"
            variants={subtitleVariants}
            style={{ color: 'var(--text-muted)' }}
          >
            {t.welcomeSubtitle}
          </motion.p>

          {/* CTA Button */}
          <Button onClick={handleContinue} variant="primary" delay={0.4}>
            {t.welcomeCta}
          </Button>
        </motion.div>
      </div>
    </PageTransition>
  );
}

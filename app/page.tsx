'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { titleVariants, staggerContainer, buttonVariants, buttonTap, buttonHover } from '@/app/lib/animations';

export default function LanguageSelectionPage() {
  const router = useRouter();

  const selectLanguage = (lang: 'en' | 'vi') => {
    router.push(`/${lang}/welcome`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements - mix of black and gold */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-[var(--accent)] rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-8 w-5 h-5 bg-black/10 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-6 w-4 h-4 bg-[var(--accent)]/60 rounded-full"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 right-12 w-6 h-6 bg-black/10 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--accent)]/80 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="w-full max-w-sm z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Logo */}
        <motion.div
          className="text-center mb-8"
          variants={titleVariants}
        >
          <span className="text-3xl font-bold text-black">
            Flodesk
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-2xl font-bold text-center mb-12"
          variants={titleVariants}
          style={{ color: 'var(--text)' }}
        >
          Choose Your Language
          <br />
          <span className="text-[var(--text-muted)] text-lg font-normal">Chọn Ngôn Ngữ</span>
        </motion.h1>

        {/* Language buttons */}
        <div className="space-y-4">
          <motion.button
            className="btn btn-glass w-full text-lg"
            variants={buttonVariants}
            whileTap={buttonTap}
            whileHover={buttonHover}
            onClick={() => selectLanguage('en')}
          >
            <span className="text-2xl">🇺🇸</span>
            <span>English</span>
          </motion.button>

          <motion.button
            className="btn btn-glass w-full text-lg"
            variants={buttonVariants}
            whileTap={buttonTap}
            whileHover={buttonHover}
            onClick={() => selectLanguage('vi')}
          >
            <span className="text-2xl">🇻🇳</span>
            <span>Tiếng Việt</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

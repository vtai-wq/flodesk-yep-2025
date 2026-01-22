'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Language } from '@/app/lib/i18n';
import { languageSwitchVariants } from '@/app/lib/animations';

export default function LanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'vi', flag: '🇻🇳', label: 'VI' },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full glass">
      {languages.map(({ code, flag, label }) => (
        <motion.button
          key={code}
          onClick={() => switchLanguage(code)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            lang === code
              ? 'bg-[var(--primary)] text-white'
              : 'text-[var(--text-muted)] hover:text-white'
          }`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={`${code}-${lang}`}
              variants={languageSwitchVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {flag}
            </motion.span>
          </AnimatePresence>
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
}

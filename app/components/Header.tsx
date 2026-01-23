"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  showLanguageSwitcher?: boolean;
}

export default function Header({ showLanguageSwitcher = true }: HeaderProps) {
  const router = useRouter();
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ height: "var(--header-height)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between h-full px-4 max-w-lg mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-bold text-black"
            onClick={() => {
              router.push(`/`);
            }}
          >
            Flodesk
          </span>
        </div>

        {/* Language Switcher */}
        {showLanguageSwitcher && <LanguageSwitcher />}
      </div>
    </motion.header>
  );
}

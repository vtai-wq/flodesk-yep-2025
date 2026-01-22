"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/hooks/useLanguage";
import PageTransition from "@/app/components/PageTransition";
import Card from "@/app/components/Card";
import {
  titleVariants,
  staggerContainer,
  subtitleVariants,
} from "@/app/lib/animations";

// Highlight special words in gold
function highlightText(text: string) {
  const highlights = ["BONUS POINTS", "ĐIỂM THƯỞNG"];
  const result = text;

  for (const highlight of highlights) {
    if (result.includes(highlight)) {
      return (
        <>
          {result.split(highlight)[0]}
          <span className="text-[var(--accent)] font-bold">{highlight}</span>
          {result.split(highlight)[1]}
        </>
      );
    }
  }
  return text;
}

export default function InstructionsPage() {
  const { t } = useLanguage();

  const steps = [t.step1, t.step2, t.step3];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col p-6">
        <motion.div
          className="w-full max-w-sm mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Title */}
          <motion.h1
            className="text-[var(--size-title)] font-extrabold text-center mb-8 mt-4"
            variants={titleVariants}
            style={{ color: "var(--text)" }}
          >
            {t.instructionsTitle}
          </motion.h1>

          {/* Instruction Steps */}
          <motion.div
            className="space-y-4 mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {steps.map((step, index) => (
              <Card key={index}>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  {highlightText(step)}
                </p>
              </Card>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.p
            className="text-center text-xl font-semibold"
            variants={subtitleVariants}
            style={{ color: "var(--primary)" }}
          >
            {t.instructionsFooter}
          </motion.p>
        </motion.div>
      </div>
    </PageTransition>
  );
}

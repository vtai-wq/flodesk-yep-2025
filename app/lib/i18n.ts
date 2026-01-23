export type Language = "en" | "vi";

export const translations = {
  en: {
    // Language Selection
    chooseLanguage: "Choose Your Language",

    // Welcome Screen
    welcomeTitle: "Welcome to YEP Flodesk 2025!",
    welcomeSubtitle: "Get ready for an epic team adventure! 🎉",
    welcomeCta: "Let's Go!",

    // Instructions Screen
    instructionsTitle: "Mission: Find Your Team 🔍",
    step1: "1️⃣ You've got 2 puzzle pieces – guard them with your life! (jk, just don't lose them 😅)",
    step2: "2️⃣ Hunt down your teammates! Find the ones with matching pieces to complete the picture (6-7 people per team)",
    step3: "3️⃣ Stick your masterpiece on the table to prove your team exists! Mission complete! ✨",
    instructionsFooter: "May the odds be ever in your favor! 🎉",
  },
  vi: {
    // Language Selection
    chooseLanguage: "Chọn Ngôn Ngữ",

    // Welcome Screen
    welcomeTitle: "Chào Mừng Đến YEP Flodesk 2025!",
    welcomeSubtitle: "Sẵn sàng cho cuộc phiêu lưu đội nhóm siêu vui! 🎉",
    welcomeCta: "Bắt Đầu Nào!",

    // Instructions Screen
    instructionsTitle: "Nhiệm Vụ: Tìm Đồng Đội 🔍",
    step1: "1️⃣ Bạn vừa nhận được 2 mảnh ghép – giữ kỹ nhé, đừng để bay mất! 😅",
    step2: "2️⃣ Đi săn đồng đội thôi! Tìm người có mảnh ghép khớp để hoàn thành bức hình (mỗi team 6-7 người)",
    step3: "3️⃣ Dán kiệt tác của team lên bàn để chứng minh team đã form xong! Nhiệm vụ hoàn thành! ✨",
    instructionsFooter: "Chúc các bạn may mắn và vui vẻ nha! 🎉",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key];
}

export function getAllTranslations(lang: Language) {
  return translations[lang];
}

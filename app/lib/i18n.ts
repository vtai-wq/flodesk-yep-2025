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
    instructionsTitle: "Warm-up Game 🎉",
    step1: "1️⃣ You've received 2 image pieces",
    step2: "2️⃣ Find the right table with matching pieces and complete the image together",
    step3: "3️⃣ Complete the image fast – BONUS POINTS are waiting! 🎉",
    instructionsFooter: "Good luck & enjoy the party! 🎉",
  },
  vi: {
    // Language Selection
    chooseLanguage: "Chọn Ngôn Ngữ",

    // Welcome Screen
    welcomeTitle: "Chào Mừng Đến YEP Flodesk 2025!",
    welcomeSubtitle: "Sẵn sàng cho cuộc phiêu lưu đội nhóm siêu vui! 🎉",
    welcomeCta: "Bắt Đầu Nào!",

    // Instructions Screen
    instructionsTitle: "Game Mở Màn 🎉",
    step1: "1️⃣ Bạn vừa nhận được 2 mảnh hình",
    step2: "2️⃣ Tìm đúng bàn có mảnh ghép phù hợp và cùng đồng đội ghép hình hoàn chỉnh",
    step3: "3️⃣ Ghép hình thật nhanh – ĐIỂM THƯỞNG đang chờ 🎉",
    instructionsFooter: "Chúc may mắn & chúc các bạn có buổi tiệc vui vẻ! 🎉",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key];
}

export function getAllTranslations(lang: Language) {
  return translations[lang];
}

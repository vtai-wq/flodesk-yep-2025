'use client';

import { useParams, useRouter, usePathname } from 'next/navigation';
import { Language, getAllTranslations } from '@/app/lib/i18n';

export function useLanguage() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const lang = (params?.lang as Language) || 'en';
  const t = getAllTranslations(lang);

  const switchLanguage = (newLang: Language) => {
    // Replace the language segment in the current path
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'vi') {
      segments[1] = newLang;
    }
    router.push(segments.join('/'));
  };

  return {
    lang,
    t,
    switchLanguage,
  };
}

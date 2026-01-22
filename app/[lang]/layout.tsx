import Header from '@/app/components/Header';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }];
}

export default function LanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

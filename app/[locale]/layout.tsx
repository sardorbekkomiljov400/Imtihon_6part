import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/rounting';
import Header from '@/modules/header/page';
import Footer from '@/modules/footer/page';

 
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* 2. Bodyga Tailwind classlarini qaytaring */}
      <body className="antialiased"> 
        <NextIntlClientProvider messages={messages}>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
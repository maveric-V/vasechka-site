import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vasechka.com'),
  title: {
    default: 'Вектор Васечка — Цифровая трансформация бизнеса',
    template: '%s | Вектор Васечка',
  },
  description:
    'Вертикально интегрированная компания по цифровой трансформации бизнеса. Полный цикл: диагностика, архитектура, внедрение и развитие IT-решений.',
  keywords: [
    'цифровая трансформация',
    'консалтинг',
    'внедрение CRM',
    'внедрение ERP',
    'Bitrix24',
    'автоматизация бизнеса',
    'IT-консалтинг',
  ],
  authors: [{ name: 'Вектор Васечка' }],
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://vasechka.com',
    title: 'Вектор Васечка — Цифровая трансформация бизнеса',
    description:
      'Полный цикл цифровой трансформации: от диагностики до внедрения и развития',
    siteName: 'Вектор Васечка',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

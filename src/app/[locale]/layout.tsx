import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from "next/font/google";
import "../globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AZZO TATTO Portfolio",
  description: "Showcasing the finest tattoo artistry",
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth dark">
      <body className={`${inter.className} bg-[#fafafa] text-[#333333]`}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>

      </body>
    </html>
  );
}
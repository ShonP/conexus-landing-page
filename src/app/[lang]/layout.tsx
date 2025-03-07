import { Metadata } from 'next';
import { getLanguage, languages } from '../../i18n/config';
import { LanguageProvider } from '../../i18n/LanguageProvider';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Geist, Geist_Mono } from 'next/font/google';
import Layout from '../../components/Layout';
import '../../styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  params: Promise<{ lang: string }> | { lang: string }
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  // Await the params since it may be a Promise
  const resolvedParams = await Promise.resolve(params);
  
  // Now we can safely access the lang property
  const language = getLanguage(resolvedParams.lang);
  
  return {
    title: `Conexus - Social Media Automation`,
    description: `Automate your social media presence across Instagram, Twitter, and LinkedIn. Free until June 1, 2025.`,
  };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code,
  }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}) {
  // Await the params since it may be a Promise
  const resolvedParams = await Promise.resolve(params);
  
  // Now we can safely access the lang property
  const language = getLanguage(resolvedParams.lang);

  return (
    <html lang={language.code} dir={language.dir}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider language={language}>
          <ThemeProvider>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
} 
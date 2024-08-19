import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './styles/globals.css';
import ThemeProvider from './hooks/ThemeProvider';
import { AuthProvider } from './store/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper/Wrapper';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Drone-hive',
  description:
    'Створюємо продукти виключно по запитам військових, щоб як можна більше збільшити ефективність використання наших систем',
};

const interTight = Inter_Tight({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={interTight.className}>
      <body>
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main>
              <Wrapper>{children}</Wrapper>
            </main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

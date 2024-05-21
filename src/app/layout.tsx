import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './styles/globals.css';
import ThemeProvider from './hooks/ThemeProvider';
import Header from './components/Header';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drone-hive',
  description:
    'Створюємо продукти виключно по запитам військових, щоб як можна більше збільшити ефективність використання наших систем',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <ThemeProvider>
        <body>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

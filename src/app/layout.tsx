import type { Metadata } from 'next';
import './styles/globals.css';
import ThemeProvider from './hooks/ThemeProvider';
import Header from './components/Header';
import Wrapper from './components/Wrapper/Wrapper';

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
      <body>
        <main>
          <ThemeProvider>
            <Header />
            <Wrapper>{children}</Wrapper>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

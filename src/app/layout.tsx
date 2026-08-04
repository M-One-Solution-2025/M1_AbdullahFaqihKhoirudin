import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AccessibilityProvider } from '@/components/AccessibilityContext';
import { AccessibilityToolbar } from '@/components/AccessibilityToolbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SLB Negeri Surakarta - Portal Resmi Sekolah Luar Biasa Inklusif',
  description:
    'Portal Resmi SLB Negeri Surakarta. Menyediakan layanan pendidikan khusus tunanetra, tunarungu, tunagrahita, tunadaksa, dan autisme dengan fasilitas terintegrasi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AccessibilityProvider>
          {children}
          <AccessibilityToolbar />
        </AccessibilityProvider>
      </body>
    </html>
  );
}

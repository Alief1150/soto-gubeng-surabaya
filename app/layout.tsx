import type { Metadata } from 'next';
import logo from '@/aset/logo.png';
import { brand } from '@/lib/site-data';
import './globals.css';

export const metadata: Metadata = {
  title: brand.name,
  description: brand.tagline,
  icons: {
    icon: [{ url: logo.src, type: 'image/png' }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

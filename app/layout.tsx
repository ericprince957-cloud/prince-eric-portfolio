import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://prince-eric-portfolio.vercel.app'),
  title: 'Prince Eric | Software Engineer & Entrepreneur',
  description: 'The personal portfolio of Prince Eric — software engineer, student-founder and entrepreneur building useful digital products and businesses.',
  keywords: ['Prince Eric', 'Software Engineer', 'Entrepreneur', 'Nigerian Developer', 'Founder', 'Vector Codes'],
  openGraph: { title: 'Prince Eric — Software Engineer & Entrepreneur', description: 'Building technology. Creating opportunities.', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

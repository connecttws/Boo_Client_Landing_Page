import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Layout from '@/components/Layout';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-main min-h-screen flex flex-col`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

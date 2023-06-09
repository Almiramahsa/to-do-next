import Head from 'next/head';
import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import NavLink from '@/components/NavLink';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'to do next',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <body className="bg-gray-950">
          <nav className="p-4 border-b-[1px] border-b-gray-600 ">
            <ul className="space-x-4 text-lg">
              <NavLink href="/"> Home</NavLink>
              <NavLink href="/todonext"> todoNext</NavLink>
            </ul>
          </nav>
          <main className={inter.className}>{children}</main>
        </body>
      </html>
    </>
  );
}

import type { Metadata } from 'next';
import { Cinzel, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['600', '700']
});

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'Atu Server | Minecraft Survival Community',
  description:
    'Atu Serverは、サバイバル・ミニゲーム・イベントを楽しめる、Java版+統合版対応のMinecraftコミュニティです。'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${cinzel.variable} ${noto.variable} bg-leaf-50 font-body text-leaf-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}

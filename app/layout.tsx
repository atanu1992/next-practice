import '@/app/ui/global.css';
import { Ptsans } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Ptsans.className} antialiased`}>{children}</body>
    </html>
  );
}

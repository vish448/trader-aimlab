import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trader AimLab',
  description: 'Trading practice platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}


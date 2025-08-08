import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'VITALABS',
  description: 'AI-powered wellness tracking',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

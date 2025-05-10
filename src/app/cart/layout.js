// app/layout.js or app/layout.tsx
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { SessionProvider } from 'next-auth/react';

export default function CheckoutLayout({ children }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <SessionProvider>{children}</SessionProvider>
    </div>
  );
}

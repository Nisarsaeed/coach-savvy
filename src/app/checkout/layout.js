// app/layout.js or app/layout.tsx
'use client';

import { SessionProvider } from 'next-auth/react';

export default function CheckoutLayout({ children }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <SessionProvider>{children}</SessionProvider>
    </div>
  );
}

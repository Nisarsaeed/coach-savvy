// components/Providers.js
'use client'; // Required to use hooks in a client component

import { Provider } from 'react-redux';
import { store } from '@/store';

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

// app/providers.tsx
'use client'

import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

export function Providers({children}: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <SessionProvider>
          {children}
        </SessionProvider>
      </NextUIProvider>
    </QueryClientProvider>
  )
}
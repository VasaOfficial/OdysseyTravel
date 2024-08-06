'use client'

import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';

export function Providers({children}: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
          </QueryClientProvider>
    </AuthContextProvider>
  )
}
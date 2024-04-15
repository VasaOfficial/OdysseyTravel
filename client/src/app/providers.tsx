'use client'

import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function Providers({children}: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())

  const recapchaKey: string | undefined = process?.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  return (
      <GoogleReCaptchaProvider reCaptchaKey={recapchaKey ?? 'NOT DEFINED'}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
          </QueryClientProvider>
        </AuthContextProvider>
      </GoogleReCaptchaProvider>
  )
}
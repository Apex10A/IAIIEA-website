'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { Toaster as Sonner } from '@/components/ui/sonnertoart'
import StateContextProvider from '@/context/stateCtx'
import { Toaster } from '@/components/ui/toaster'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <StateContextProvider>
        {children}
        <Toaster />
        <Sonner richColors expand={true} position="top-right" />
      </StateContextProvider>
    </SessionProvider>
  )
}

export { Providers }

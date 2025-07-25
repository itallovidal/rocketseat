import './style/global.css'
import { AppRoutes } from '@/pages/AppRoutes.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import * as React from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/themeProvider.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib/reactQuery.ts'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey={'pizzashop-theme'} defaultTheme={'dark'}>
        <Toaster />
        <Helmet titleTemplate={'%s | Pizza Shop'} />
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

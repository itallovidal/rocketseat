import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from '@/pages/auth/signIn.tsx'
import { Dashboard } from '@/pages/app/dashboard/dashboard.tsx'
import { AppLayout } from '@/pages/_layout/appLayout.tsx'
import { AuthLayout } from '@/pages/_layout/authLayout.tsx'
import { SignUp } from '@/pages/auth/signUp.tsx'
import { Orders } from '@/pages/app/orders/orders.tsx'
import { NotFound } from '@/pages/404.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppLayout />}>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/orders'} element={<Orders />} />
        </Route>

        <Route path={'/'} element={<AuthLayout />}>
          <Route path={'/sign-in'} element={<SignIn />} />
          <Route path={'/sign-up'} element={<SignUp />} />
        </Route>

        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

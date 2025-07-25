import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/home.tsx'
import { Article } from '@/pages/article.tsx'
import { AppLayout } from '@/components/app-layout.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<AppLayout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/article'} element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

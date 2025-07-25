import * as React from 'react'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import { NavButton } from '@/components/navButton.tsx'
import { ThemeToggle } from '@/components/theme/themeToggle.tsx'
import { AccountMenu } from '@/components/accountMenu.tsx'

export function DesktopHeader() {
  return (
    <div className={'border-b hidden sm:block'}>
      <div className={'flex h-16 items-center gap-6 px-6'}>
        <Pizza className={'h-6 w-6'} />
        <Separator orientation={'vertical'} className={'h-6'} />
        <nav className={'flex items-center space-x-4 lg:space-x-6'}>
          <NavButton Icon={Home} to={'/'}>
            Home
          </NavButton>
          <NavButton Icon={UtensilsCrossed} to={'/orders'}>
            Pedidos
          </NavButton>
        </nav>
        <div className={'ml-auto flex items-center gap-2'}>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}

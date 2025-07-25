import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Home, Menu, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import * as React from 'react'
import { NavButton } from '@/components/navButton.tsx'
import { ThemeToggle } from '@/components/theme/themeToggle.tsx'
import { AccountMenu } from '@/components/accountMenu.tsx'
import { useQuery } from 'react-query'
import { getManagedRestaurant } from '@/api/getManagedRestaurant.ts'

export function MobileHeader() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })
  return (
    <Drawer direction={'left'}>
      <DrawerTrigger className={'fixed top-4 right-4 z-30 sm:hidden'}>
        <Button>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={'h-screen w-[80%]'}>
        <DrawerHeader>
          <div className={'flex w-full gap-4'}>
            <Pizza className={'h-6 w-6'} />
            <Separator orientation={'vertical'} className={'h-6'} />
            <span>{managedRestaurant?.name}</span>
          </div>
        </DrawerHeader>
        <nav className={'p-4 gap-4 flex flex-col space-y-2 '}>
          <DrawerClose asChild>
            <NavButton Icon={Home} to={'/'}>
              Home
            </NavButton>
          </DrawerClose>

          <DrawerClose asChild>
            <NavButton
              className={'w-full'}
              Icon={UtensilsCrossed}
              to={'/orders'}
            >
              Pedidos
            </NavButton>
          </DrawerClose>
        </nav>
        <div className={'ml-auto flex items-center gap-2'}></div>

        <DrawerFooter className={'flex-row flex'}>
          <AccountMenu />
          <ThemeToggle />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

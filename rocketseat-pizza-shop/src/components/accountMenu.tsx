import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useMutation, useQuery } from 'react-query'
import { getProfile } from '@/api/getProfile.ts'
import { getManagedRestaurant } from '@/api/getManagedRestaurant.ts'
import { ButtonSkeleton } from '@/components/skeletons/ButtonSkeleton.tsx'
import { Dialog, DialogTrigger } from '@/components/ui/dialog.tsx'
import { StoreProfileDialog } from '@/components/storeProfileDialog.tsx'
import { SignOut } from '@/api/signOut.ts'
import { useNavigate } from 'react-router-dom'

export function AccountMenu() {
  const navigation = useNavigate()

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  const { data: managedRestaurant, isLoading: getManagedRestaurantLoading } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    })

  const { mutateAsync: handleSignOut } = useMutation({
    mutationFn: SignOut,
    onSuccess: () => {
      navigation('sign-in', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {getManagedRestaurantLoading ? (
            <ButtonSkeleton />
          ) : (
            <Button className={'flex-1 sm:flex-grow-0'} variant={'outline'}>
              {managedRestaurant?.name} <ChevronDown />
            </Button>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align={'end'} className={'w-56'}>
          <DropdownMenuLabel className={'flex flex-col '}>
            <span>{profile?.name}</span>
            <span className={'text-xs font-normal text-muted-foreground'}>
              {profile?.email}
            </span>
          </DropdownMenuLabel>

          <DialogTrigger asChild>
            <DropdownMenuItem className={'flex justify-between'}>
              <span>Perfil da loja</span>
              <Building />
            </DropdownMenuItem>
          </DialogTrigger>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            asChild
            className={'flex justify-between text-rose-500'}
          >
            <button
              className={'w-full hover:cursor-pointer'}
              onClick={() => handleSignOut()}
            >
              <span className={'font-semibold'}>Sair</span>
              <LogOut />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}

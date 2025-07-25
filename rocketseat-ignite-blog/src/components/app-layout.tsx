import backdrop from '../assets/backdrop.png'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className={'min-h-screen bg-gray-900 pb-24 w-full'}>
      <picture className={'sm:block w-full h-[300px] hidden overflow-hidden'}>
        <img
          className={'w-full object-center object-cover max-h-full'}
          src={backdrop}
          alt="Imagem de fundo"
        />
      </picture>
      <main
        className={'text-white m-auto max-w-grid-width sm:-mt-[150px] relative'}
      >
        <Outlet />
      </main>
    </div>
  )
}

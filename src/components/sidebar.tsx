import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { SidebarItems} from './sidebarItems';
import { CiLogout } from 'react-icons/ci';
import { IoCalendarClearOutline, IoCheckboxOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { BsCookie } from 'react-icons/bs';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import async from '../app/dashboard/page';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { LogoutButton } from './LogoutButton';

const menuItems = [
  {
    icon: <IoCalendarClearOutline/>,
    title: "Inicio",
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline/>,
    title: 'Pendientes',
    path: '/dashboard/rest-todos'
  },
  {
    icon: <IoListOutline/>,
    title: 'Acciones del Servidor',
    path: '/dashboard/servers-todos'
  },
  {
    icon: <BsCookie/>,
    title: 'Cookies',
    path: '/dashboard/cookies'
  },
  {
    icon: <HiOutlineBuildingStorefront/>,
    title: 'Products',
    path: '/dashboard/products'
  },
  {
    icon: <IoPersonOutline/>,
    title: 'Profile',
    path: '/dashboard/profile'
  }
]

export const Sidebar = async () => {
  
  const session = await auth();
  if (!session?.user) {
    redirect('/api/auth/signin');
  }
  const avatar = (session.user.image) ? session.user.image:'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
  const userName = session.user.name ?? 'No Name';
  return (
    <>
      <aside className="ml-[-100%] absolute z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-auto border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="mx-6 px-6 py-4 ">
            <Link href={'/dashboard'} title='Inicio'>
              <Image 
               src={"https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"}
               priority
              className="w-32"
              width={100}
              height={100} 
              alt=''/>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Image src={avatar} 
            priority
            alt=''
            width={100}
            height={100} 
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
              <span className="hidden text-gray-400 lg:block">Administrador</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            {
              menuItems.map(item => (
                <SidebarItems key={item.path} {...item}/>
              ))
            }
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogoutButton/>
        </div>
      </aside>
    </>
  )
}

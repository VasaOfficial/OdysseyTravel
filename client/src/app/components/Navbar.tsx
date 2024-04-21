// Navbar.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/assets/logoWhite.webp'
import { DropdownMenuCheckboxes } from './ui/user-dropdown';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const { user } = UserAuth()

    return ( 
      <nav className="w-full max-w-[90%] absolute z-100 px-8 inset-x-0 top-10 mx-auto">
        <div className="flex justify-between items-center">
          <Link href='/' className=''>
            <Image src={Logo} alt="logo" width={250} height={250}/>
          </Link>
          <div className="flex gap-3">
            {/* Conditional rendering based on user login status 
            flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4
            */}
            {!user ? (
              <>
                <Link className="inline-flex h-[3.1rem] animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50" href='/pages/auth/login'>Login</Link>
                <Link href='/pages/auth/register' className='relative inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                  <div className='absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur' />
                  Register
                </Link>
              </>
            ) : (
              <DropdownMenuCheckboxes />
            )}
          </div>  
        </div>
      </nav>
    );
}

export default Navbar;
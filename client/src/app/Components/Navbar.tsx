import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/assets/logo.webp'
import { DropdownMenuCheckboxes } from './ui/user-dropdown';

function Navbar() {
    return ( 
      <nav className="w-full max-w-[90%] mx-auto">
        <div className="flex justify-between items-center pt-10 max-sm:pt-5">
          <Link href='/'>
            <Image src={Logo} alt="logo" width={250} height={250}/>
          </Link>
          <div className="flex">
            <Link className="hidden sm:block border border-black p-3 mr-4" href='/login'>Login</Link>
            <Link className="hidden sm:block bg-black text-white p-3 mr-4" href='/register'>Register</Link>
            <DropdownMenuCheckboxes />
          </div>  
        </div>
      </nav>
    );
}

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/assets/logo.webp'

function Navbar() {
    return ( 
      <nav className="w-full max-w-[90%] mx-auto">
        <div className="flex justify-between items-center mt-4">
          <Image src={Logo} alt="logo" width={250} height={250}/>
          <div className="flex gap-5">
            <button className="border border-black p-3">
              <Link href='/'>Sign in</Link>
            </button>
            <button className="bg-black text-white p-3">
              <Link href='/'>Register</Link>
            </button>
          </div>  
        </div>
      </nav>
    );
}

export default Navbar;
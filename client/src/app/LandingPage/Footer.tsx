import Image from "next/image";
import Logo from '@/public/assets/logoWhite.webp'
import Link from "next/link";

import phoneIcon from '@/public/assets/footer/phone.webp'
import emailIcon from '@/public/assets/footer/email.webp'
import instagramIcon from '@/public/assets/footer/instagram.webp'
import xIcon from '@/public/assets/footer/X.webp'
import facebookIcon from '@/public/assets/footer/facebook.webp'

function Footer() {
    return ( 
      <footer className="bg-gray-950 text-white w-full">
        <div className="max-w-[80%] mx-auto py-20">
          <Image src={Logo} alt="Logo" width={400} height={400}/>
          <div className="flex mt-10 justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl mb-3">Locations</h1>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">Europe</Link>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">Asia</Link>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">Africa</Link>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">North America</Link>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">South America</Link>
              <Link href='/' className="linkWithLine mb-2 cursor-pointer font-extrabold hover:text-[darkRed]">Oceania</Link>
            </div>
            <div>
              <h1 className="font-bold text-3xl mb-3">Contact</h1>
              <div className="flex mb-3">
                <Image src={emailIcon} alt="email icon" width={35} height={35}/>
                <p className="ml-3 mt-2">travelagency@gmail.com</p>
              </div>
              <div className="flex">
                <Image src={phoneIcon} alt="phone icon" width={35} height={35}/>
                <p className="ml-3 mt-2">032131203192</p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-3xl mb-3">Social Media</h1>
              <div className="flex gap-3">
                <Image className="cursor-pointer" src={instagramIcon} alt="instagram icon" width={35} height={35}/>
                <Image className="cursor-pointer" src={facebookIcon} alt="facebook icon" width={35} height={35}/>
                <Image className="cursor-pointer" src={xIcon} alt="X icon" width={35} height={35}/>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-center border-t">
          <span className="mt-10 text-center text-base leading-6">
          © 2023 Travel Agency. All rights reserved.
          </span>
        </div>
        </div>
      </footer>
    );
}

export default Footer;
import Image from "next/image";
import Logo from '@/public/assets/logoWhite.webp'
import Link from "next/link";
import SocialIcons from "./ui/social-icons";

import phoneIcon from '@/public/assets/footer/phone.webp'
import emailIcon from '@/public/assets/footer/email.webp'

function Footer() {
    return ( 
      <footer className="bg-gray-950 text-white w-full">
        <div className="max-w-[80%] mx-auto py-16">
          <Image src={Logo} alt="Logo" width={400} height={400}/>
          <div className="flex mt-10 justify-between max-lg:flex-col max-lg:items-start max-lg:gap-10 max-lg:justify-center">
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
                <Image src={emailIcon} alt="email icon" width={30} height={30}/>
                <p className="ml-3 mt-2">travelagency@gmail.com</p>
              </div>
              <div className="flex">
                <Image src={phoneIcon} alt="phone icon" width={30} height={30}/>
                <p className="ml-3 mt-2">032131203192</p>
              </div>
            </div>
            <div className="flex flex-col items-center max-lg:items-start">
              <h1 className="font-bold text-3xl mb-3">Social Media</h1>
              <SocialIcons />
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
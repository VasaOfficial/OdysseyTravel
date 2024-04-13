'use client'

import * as React from 'react'
import Image from 'next/image'
import UserLogo from '@/public/assets/user.webp'
import { UserAuth } from '../../context/AuthContext'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function DropdownMenuCheckboxes() {
  const { user, logOut } = UserAuth()

  const handleSignOut = async () => {
    try {
      if (logOut) {
        await logOut();
      } else {
        console.error('logOut function is not defined.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' className="overflow-hidden rounded-full">
          <Image src={UserLogo} width={40} height={40} alt="Avatar" className="overflow-hidden"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          My Account <br />
          <p className='text-gray-400 text-xs'>{user?.displayName ? user.displayName : user?.email}</p>
        </DropdownMenuLabel> 
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Saved</DropdownMenuItem>
        <DropdownMenuItem>Cart</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
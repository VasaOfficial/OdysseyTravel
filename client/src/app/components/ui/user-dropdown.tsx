'use client'

import * as React from 'react'
import Image from 'next/image'
import UserLogo from '@/public/assets/user.webp'

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
          <p className='text-gray-400 text-xs'>dynamicemailhere@gmail.com</p>
        </DropdownMenuLabel> 
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Saved</DropdownMenuItem>
        <DropdownMenuItem>Cart</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
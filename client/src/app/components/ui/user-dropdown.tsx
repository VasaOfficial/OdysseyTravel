'use client'

import * as React from 'react'
import Image from 'next/image'
import UserLogo from '@/public/assets/user.webp'
import { UserAuth } from '../../context/AuthContext'
import Link from 'next/link'

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
        await logOut()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="rounded-full">
          <Image src={UserLogo} width={40} height={40} alt="Avatar" className="overflow-hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Account <br />
          <p className="text-xs text-gray-400">
            {user?.displayName ? user.displayName : user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/pages/auth/protected/saved-destinations">
          <DropdownMenuItem className="cursor-pointer">Saved</DropdownMenuItem>
        </Link>
        <Link href="/pages/auth/protected/cart">
          <DropdownMenuItem className="cursor-pointer">Cart</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

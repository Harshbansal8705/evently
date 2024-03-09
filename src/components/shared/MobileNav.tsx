import React from 'react'
import Menu from '@/assets/icons/menu.svg'
import Logo from '@/assets/images/logo.svg'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'


export default function MobileNav() {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image src={Menu} alt="Menu" width={24} height={24} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                    <Image src={Logo} alt="Evently" width={128} height={38} />
                    <Separator className='border border-gray-50' />
                    <NavItems />
                </SheetContent>
            </Sheet>

        </nav>
    )
}

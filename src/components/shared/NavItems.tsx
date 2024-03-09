'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavItems() {
    const pathname = usePathname()
    const headerLinks = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Create Event',
            href: '/events/create',
        },
        {
            label: 'My Profile',
            href: '/profile',
        }
    ]
    return (
        <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
            {
                headerLinks.map((link, index) => (
                    <li key={index} className={`${pathname === link.href ? 'text-primary' : 'text-gray-500'} flex-center p-medium-16 whitespace-nowrap`}>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

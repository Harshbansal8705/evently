import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/images/logo.svg'

export default function Footer() {
    return (
        <footer className="border-t justify-self-end">
            <div className='flex-center wrapper flex-col sm:flex-row gap-4 p-5 flex text-center'>
                <Link href="/">
                    <Image src={Logo} alt="Evently" width={128} height={38} />
                </Link>

                <p>2024 Evently. All Rights Reserved &copy;</p>
            </div>
        </footer>
    )
}

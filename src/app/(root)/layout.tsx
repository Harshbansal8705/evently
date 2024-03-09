import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function RootLayout({ children }:{ children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
        </>
  )
}

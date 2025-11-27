import Header from '@/components/Header'
import { HeaderCarousel } from '@/components/HeaderCarousel.tsx'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className='bg-[#f5f0f0] p-6 space-y-3 md:space-y-6'>
        <HeaderCarousel />
        <div className='relative overflow-hidden rounded-xl bg-linear-to-r from-thistle-600 via-fuchsia-500 to-fuchsia-600 text-white px-6 py-4 sm:px-10 sm:py-6 shadow-lg'>
          <div className='absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl' />
          <div className='absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl' />

          <div className='relative flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='uppercase tracking-wider text-white/90 text-xs sm:text-sm font-semibold'>Limited Time</p>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm'>
                Extra 15% off New Arrivals
              </h2>
              <p className='text-white/90 text-sm sm:text-base'>Use code
                <span className='mx-2 rounded-md bg-white/15 px-2 py-1 font-mono text-[12px] sm:text-sm'>SHOPLY15</span>
                at checkout. Ends Sunday.
              </p>
            </div>

            <div className='mt-4 md:mt-0 flex items-center gap-3'>
              <Link href='/new-arrivals'>
                <Button className='bg-white text-gray-900 hover:bg-white/90'>Shop Now</Button>
              </Link>
              <Link href='/sale'>
                <Button variant='secondary' className='border-white text-black '>View Deals</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <main className='min-h-[9999px] bg-turquoise-200' >

      </main>
    </>
  )
}

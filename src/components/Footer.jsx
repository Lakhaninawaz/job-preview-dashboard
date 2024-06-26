'use client'
import React from 'react'
import Image from 'next/image'

export default function Footer () {
  return (
    <>
  <div className="max-w-screen-xl px-16 py-4 mx-auto">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <div className="flex gap-2 items-center justify-center text-teal-300 sm:justify-start">
          <Image 
          src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJouUZ-6bZd7TC0fscphGWy39ykXdeZtt5SyEaWmEzIN1bVCuC'} alt='company logo' unoptimized
          width={40}
          height={40}
 />
  <p
          className="text-center text-[#4F4F4F] sm:max-w-xs sm:mx-0 sm:text-left"
        >
          Atlassian
        </p>
        </div>

        <ul className="space-y-4 mt-5 text-sm">
              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Company size</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                1k - 2k Employees
                </p>
              </li>

              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Sector</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                Information Technology, Infrastructure
                </p>
              </li>

              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Founded In</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                2019
                </p>
              </li>
            </ul>
      </div>

      <div
        className="gap-8"
      >
        <div className="text-center sm:text-left">

          <nav className="mt-16">
            <ul className="space-y-4 mt-5 text-sm">
              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Type</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                Private
                </p>
              </li>

              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Funding</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                Bootstrapped
                </p>
              </li>

              <li>
                <p className='text-[#6E6D6D] text-xs font-medium'>Founded By</p>
                <p className="text-[#3D3D3D] my-2 font-medium">
                Scott Farquhar, Mike Cannon-Brookes
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </div>
</>
  )
}
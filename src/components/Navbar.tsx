import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[1150px] flex flex-row h-[130px] space-x-20 items-center'>
        <h1 className='text-[50px] font-bold text-black mb-2 cursor-pointer'>Arch</h1>
        <h2 className='font-light text-gray-400 text-[19px] cursor-pointer'>Portfolio</h2>
        <h2 className='font-light text-gray-400 text-[19px] cursor-pointer'>About Us</h2>
        <h2 className='font-light text-gray-400 text-[19px] cursor-pointer'>Contact</h2>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <div className='w-[1150px] mt-[100px] relative bg-gray-100 flex flex-row h-[100px] space-x-20 items-center'>
        <div className='h-full w-[150px] bg-black flex justify-center items-center'>
            <h1 className='text-[30px] font-bold text-white mb-2 cursor-pointer'>Arch</h1>
        </div>
        <h2 className='font-light text-gray-400 text-[15px] cursor-pointer'>Portfolio</h2>
        <h2 className='font-light text-gray-400 text-[15px] cursor-pointer'>About Us</h2>
        <h2 className='font-light text-gray-400 text-[15px] cursor-pointer'>Contact</h2>
        <div className='absolute cursor-pointer flex justify-center items-center text-white
        transition ease-in-out duration-200 hover:bg-gray-600 w-[200px] h-[60px] bg-slate-900 right-[-100px]'>
            See our Portfolio
        </div>
    </div>
  )
}

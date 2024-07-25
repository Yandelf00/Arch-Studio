import React from 'react'

export default function Team() {
  return (
    <div className='w-[1150px]
    flex justify-end mb-10'>
        <div className='h-[400px] w-[95%] 
        bg-[url("/assets/home/desktop/image-small-team.jpg")] bg-no-repeat bg-cover'>
            <div className='h-full w-full bg-[rgba(0,0,0,0.5)]'>
                <div className='w-1/2 h-full flex flex-col space-y-5 items-start ml-32 justify-center'>
                    <div className='flex flex-col'>
                        <h1 className='text-white text-[40px] font-bold'>Small Team,</h1>
                        <h1 className='text-white text-[40px] font-bold'>big ideas</h1>
                    </div>
                    <button className='text-white w-[270px] h-[70px] bg-slate-900
                    hover:bg-gray-600 transition-colors duration-200 ease-in-out'>See Our Portfolio</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <div className='w-[1150px]  h-[700px]
    flex justify-start bg-no-repeat'>
        <div className='w-[1100px]  h-[700px]
        bg-[url("/assets/home/desktop/image-hero-paramour.jpg")] bg-no-repeat'>
            <div className='bg-[rgba(0,0,0,0.5)] h-full w-full'>
                <div className='pl-20 flex flex-col h-full items-start justify-center w-[40%]'>
                    <h1 className='text-white text-[50px] font-bold'>Project Paramour</h1>
                    <p className='text-white'>Project made for an art museum near 
                        Southwest London. Project Paramour 
                        is a statement of bold, modern architecture.</p>
                    <button>See Our Portfolio</button>
                </div>
            </div>
        </div>
    </div>
  )
}

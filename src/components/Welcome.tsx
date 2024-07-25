import React from 'react'

export default function Welcome() {
  return (
    <div className='relative w-[1150px] mt-[100px] h-[900px]
    flex justify-end '>
        <div className='absolute w-full right-0 top-0'>
            <h1 className='text-gray-100 font-light text-[230px]'>Welcome</h1>
        </div>
        <div className='h-full flex flex-row w-[900px]  '>
            <div className='flex flex-col w-[50%] z-10 pl-20 pr-10 space-y-5 justify-center'>
                <h1 className='text-black text-[50px] font-bold'>Welcome to Arch Studio</h1>     
                <p className='text-gray-400 text-[15px]'>We have a unique network and skillset to help bring your projects 
                    to life. Our small team of highly skilled individuals combined with our large 
                    network put us in a strong position to deliver exceptional results.</p>
                <p className='text-gray-400'>Over the past 10 years, we have worked on all kinds of projects. 
                    From stations to high-rise buildings, we create spaces 
                    that inspire and delight.</p>
                <p className='text-gray-400'>We work closely with our clients so that we understand 
                    the intricacies of each project. This allows us to work in harmony 
                    the surrounding area to create truly stunning projects that will stand the test of time.</p>
            </div> 
            <div className='w-1/2 h-full z-10 flex justify-end items-center '>
                <div className='h-[600px] w-[350px] bg-no-repeat bg-cover
                bg-[url("/assets/home/desktop/image-welcome.jpg")] '>

                </div>
            </div>
        </div>
    </div>
  )
}

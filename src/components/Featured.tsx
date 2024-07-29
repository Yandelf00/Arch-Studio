import React from 'react'

export default function Featured() {
  return (
    <div className='w-[1150px]
    flex mb-10 mt-[150px] justify-end'>
        <div className='w-[95%] flex flex-col gap-10'>
            <div className='w-full flex flex-row justify-between items-center'>
                <h1 className='text-[60px] font-bold'>Featured</h1>
                <button className='text-white w-[240px] h-[70px] bg-slate-900
                hover:bg-gray-600 transition-colors duration-200 ease-in-out'>See All</button>
            </div>
            <div className='w-full flex flex-row justify-between'>
                <div className='h-[500px] w-[30%] relative bg-[url("/assets/portfolio/desktop/image-del-sol.jpg")]'>
                    <div className='absolute inset-0 bg-black opacity-40'>
                    </div>
                    <div className='z-10 absolute bottom-5 left-5 flex flex-col'>
                        <h1 className='text-white text-[20px] font-bold'>Project Del Sol</h1>
                        <h2 className='text-white '>View All Projects</h2>
                    </div>
                    <div className='absolute top-20 opacity-70 right-3'>
                        <h1 className='text-white text-[200px]'>1</h1>
                    </div>
                </div>
                <div className='h-[500px] w-[30%] relative bg-[url("/assets/portfolio/desktop/image-228b.jpg")]'>
                    <div className='absolute inset-0 bg-black opacity-40'>
                    </div>
                    <div className='z-10 absolute bottom-5 left-5 flex flex-col'>
                        <h1 className='text-white text-[20px] font-bold'>228b Tower</h1>
                        <h2 className='text-white '>View All Projects</h2>
                    </div>
                    <div className='absolute top-20 opacity-70 right-3'>
                        <h1 className='text-white text-[200px]'>2</h1>
                    </div>
                </div>
                <div className='h-[500px] relative w-[30%] bg-[url("/assets/portfolio/desktop/image-prototype.jpg")]'>
                    <div className='absolute inset-0 bg-black opacity-40'>
                    </div>
                    <div className='z-10 absolute bottom-5 left-5 flex flex-col'>
                        <h1 className='text-white text-[20px] font-bold'>Le Prototype</h1>
                        <h2 className='text-white '>View All Projects</h2>
                    </div>
                    <div className='absolute top-20 opacity-70 right-3'>
                        <h1 className='text-white text-[200px]'>3</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

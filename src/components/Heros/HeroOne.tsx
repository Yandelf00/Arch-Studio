import React from 'react'


type heroOneProps = {
    bgImage : string
    title : string
    desc : string
}

export default function HeroOne({bgImage, title, desc}:heroOneProps) {
    return (
        <div className={`w-[1100px]  h-[700px]
             bg-no-repeat`}
            style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='bg-[rgba(0,0,0,0.5)] h-full w-full pl-40'>
                    <div className='flex flex-col space-y-16 h-full items-start justify-center w-[60%]'>
                        <h1 className='text-white text-[55px] font-bold'>{title}</h1>
                        <p className='text-white'>{desc}</p>
                        <button className='text-white w-[270px] h-[70px] bg-slate-900
                        hover:bg-gray-600 transition-colors duration-200 ease-in-out'>See Our Portfolio</button>
                    </div>
                </div>
        </div>
    )
}

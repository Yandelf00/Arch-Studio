"use client"
import React, { useState } from 'react'
import HeroOne from './Heros/HeroOne'

export default function Hero() {
    const [hero, setHero] = useState({
        state : 1,
        bgImage : "/assets/home/desktop/image-hero-paramour.jpg",
        title : "Project Paramour",
        desc : "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
    }) 
    const heroOne = {
        state : 1,
        bgImage : "/assets/home/desktop/image-hero-paramour.jpg",
        title : "Project Paramour",
        desc : "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
    }
    const heroTwo = {
        state : 2,
        bgImage : "/assets/home/desktop/image-hero-seraph.jpg",
        title : "Seraph Station",
        desc : "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
    }
    const heroThree = {
        state : 3,
        bgImage : "/assets/home/desktop/image-hero-federal.jpg",
        title : "Federal II Tower",
        desc : "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
    }
    const heroFour = {
        state : 4,
        bgImage : "/assets/home/desktop/image-hero-trinity.jpg",
        title : "Trinity Bank Tower",
        desc : "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
    }

    return (
        <div className='relative w-[1150px] h-[700px]
        flex justify-start bg-no-repeat '>
            <HeroOne bgImage={hero.bgImage} title={hero.title} desc={hero.desc}/>
            <div className='h-[90px] w-[320px] flex flex-row bg-gray-100 left-[-80px] absolute bottom-0'>
                <div onClick={()=>setHero(heroOne)}  className={`w-1/4
                cursor-pointer flex justify-center items-center h-full ${hero.state === 1 ? 'bg-zinc-900 text-white' : ''}`}>01</div>
                <div onClick={()=>setHero(heroTwo)}  className={`w-1/4
                cursor-pointer flex justify-center items-center h-full ${hero.state === 2 ? 'bg-zinc-900 text-white' : ''}`}>02</div>
                <div onClick={()=>setHero(heroThree)}  className={`w-1/4
                cursor-pointer flex justify-center items-center h-full ${hero.state === 3 ? 'bg-zinc-900 text-white' : ''}`}>03</div>
                <div onClick={()=>setHero(heroFour)}  className={`w-1/4
                cursor-pointer flex justify-center items-center h-full ${hero.state === 4 ? 'bg-zinc-900 text-white' : ''}`}>04</div>
            </div>
        </div>
  )
}

"use client"
import React from "react"
import { ParticlesBg } from "../../components/ParticlesBg"
const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-black overflow-x-hidden">

            {/* Particles */}
            <div className="absolute inset-0 z-0">
                <ParticlesBg />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Content */}
            <div className="relative z-20 flex items-center flex-col justify-center min-h-screen text-center">
                <h1 className=' text-white text-7xl font-bold p-8 rounded relative z-10 text-center'>
                    Transform Your Business with <br />
                    <span className="text-[#D4AF37]">
                        Expert IT Solutions
                    </span>
                </h1>
                <p className='text-white text-lg tracking-widest relative text-center'>Ahmad delivers AI-driven web development, SEO, & digital <br />
                    marketing services to help startups and enterprises scale faster.</p>
            </div>

        </section>
    )
}

export default HeroSection
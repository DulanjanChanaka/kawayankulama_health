import Image from 'next/image'
import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className='w-full relative lg:h-[600px] pt-[50px]'>
                {/* <Image src='/Assets/herosection.jpg' width='1024' height='700'  className='top-0 left-0 w-full h-full object-cover'/> */}
                <div className=" w-full h-[500px] lg:h-[650px] bg-[url('https://wallpapercave.com/wp/wp3378892.jpg')] bg-no-repeat bg-center bg-cover" />

                <div className="  lg:leading-10  lg:text-2xl py-7 absolute lg:w-[670px] w-[300px] bottom-20 left-3  text-lg lg:bottom-20 lg:left-52 font-bold leading-8 text-purple-500 bg-purple-50 px-2 lg:px-3 mb-2 rounded-lg bg-opacity-60 ">Public Health Midwife Division Kawayankulama  </div>
                <button className=' bg-purple-500 px-5 py-3 rounded-lg absolute lg:bottom-8 bottom-8 left-3  lg:left-52 '>Get Start</button>
                
            </div>

        </div>
    )
}

export default Homepage
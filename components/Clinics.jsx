
import React from 'react'
import Headline from './Headline'
import Link from 'next/link'
import Image from 'next/image'

const Clinics = () => {
    return (
        <div id='clinics' className='w-full  p-2 lg:mt-[100px] mt-[-1px] bg-purple-100'>
            <div className='px-10 mx-auto flex flex-col justify-center h-full'>
                <Headline title="Clinics" />


                <div className='grid lg:grid-cols-3 gap-10 lg:gap-20 '>




                    <Link href='/weight'>
                        <div className='p-6 bg-purple-200  shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]' >
                            <div className='grid grid-cols  text-center  justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/weight.png' width='94' height='94' alt='/' className='rounded-lg' />
                                </div>
                                <div className=''>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>බර කිරීමේ සායනය </h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* <Link href='/hospital'>
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/hospital.png' width={70} height={70} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>කොබෙයිගනේ රෝහල් </h3>
                                    <h3 className='text-center text-lg font-bold '> සායන</h3>
                                </div>
                            </div>
                        </div>
                    </Link> */}

                    <Link href='/mother'>
                        <div className='p-6 bg-purple-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image src='/Assets/mother.png' width={70} height={70} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>මාතෘ හා ළඳරු ළමා සායන</h3>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>බොරලුවැව </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/moh'>
                        <div className='p-6 bg-purple-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/moh.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>MOH සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/woman'>
                        <div className='p-6 bg-purple-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/women.png' width={70} height={70} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>සුවනාරි / පවුල් සංවිධාන</h3>
                                    <h3 className='text-center text-lg font-bold text-purple-600'> සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href='/threeposha'>
                        <div className='p-6 bg-purple-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols  text-center gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/thriposha.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>ත්‍රිපෝෂ බෙදා දීම </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/medical">
                        <div className='p-6 bg-purple-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/baby.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>ඔබේ දරුවාගේ සායන </h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* <Link href="/telephone">
                        <div className='p-6 bg-slate-50 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-[180px]'>
                            <div className='grid grid-cols text-center  gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src='/Assets/telephone.png' width={94} height={94} alt='/' className='rounded-lg' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-center text-lg font-bold text-purple-600'>දුරකථන අංක </h3>
                                </div>
                            </div>
                        </div>
                    </Link> */}



                </div>
            </div>
        </div>
    )
}

export default Clinics
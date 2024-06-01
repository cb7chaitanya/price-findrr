import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-[#0B1120]'>
      <div className='max-w-full max-h-[100%] flex flex-col justify-center items-center text-white relative z-10'>
        <h1 className='max-w-[80%] text-3xl font-extrabold text-center mt-20 md:text-5xl'>Get the latest price updates for your favourite products</h1>
        <h1 className='text-zinc-400 text-center max-w-[85%] mt-4 md:mt-8 text-xl md:text-2xl'>This is a one stop solution for all your price tracking needs, just enter the product link and we will handle the rest, want to get automatic updates without the hassle of going through the product again and again, don't worry, we got you covered</h1>
        <Button children='Get Started' navigate='/trending' className='bg-blue-600 hover:bg-blue-500 duration-300 mt-8 p-2 rounded-xl'/>
      </div>
    </div>
  )
}

export default page
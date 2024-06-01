import { ProductCard } from '@/components/product-card'
import React from 'react'

const products = [1, 2, 3, 4, 5, 6, 7]
const page = () => {
  return (
    <div className='w-full min-h-screen bg-[#0B1120] text-white'>
        <div className='w-full text-white'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='max-w-[80%] text-3xl font-extrabold text-center mt-12 md:text-5xl'>Trending</h1>
            </div>
            <div className='mt-10 flex'>
                <div className='flex flex-wrap justify-center min-h-0'>
                    {products.map((product, index) => (
                    <ProductCard key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
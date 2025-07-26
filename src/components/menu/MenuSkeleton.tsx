import React from 'react'


const MenuSkeleton = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {[1,2,3,4,5,6].map((id) => (
            <div key={id} className='p-4 border border-gray-400 rounded-lg h-68 space-y-2'>
                <div className='border bg-gray-200 animate-pulse h-[70%]'></div>
                <div className='space-y-2'>
                    <div className='h-4 w-28 bg-gray-200 animate-pulse'></div>
                    <div className='h-4 w-full bg-gray-200 animate-pulse'></div>
                </div>
                <div className='flex justify-between'>
                    <span className='h-4 w-8 bg-gray-200 animate-pulse'></span>
                    <span className='h-4 w-18 bg-gray-300 animate-pulse'></span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MenuSkeleton
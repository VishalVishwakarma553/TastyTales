import React from 'react'


const OrderSkelaton = () => {
  return (
    <div className='w-full grid grid-cols-1 gap-4 my-2'>
      {[1,2,3].map((i) => (
        <div key={i} className='space-y-3 animate-pulse rounded-lg border p-4'>
          <p className='h-4 w-1/2 bg-gray-300 rounded'></p>
          <p className='h-3 w-1/3 bg-gray-200 rounded'></p>
          <div className='grid grid-cols-1 gap-4'>
              {[1,2].map((j) => (
                <div key={j} className='flex justify-between items-center'>
                  <div className='space-y-2'>
                    <div className='h-4 w-24 rounded bg-gray-300'></div>
                    <div className='h-3 w-18 rounded bg-gray-200'></div>
                  </div>
                  <div className='w-12 h-12 rounded bg-gray-300'></div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderSkelaton
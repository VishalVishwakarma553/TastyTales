import MenuList from '@/components/menu/MenuList'
import MenuSkeleton from '@/components/menu/MenuSkeleton'
import React, { Suspense } from 'react'

type Props = {}

const MenuPage = (props: Props) => {
  return (
    <div className='p-4'>
        <div className='my-6'>
            <h1 className='text-3xl font-bold my-3'>Our Delecious Menu</h1>
        </div>
        {/* Suspence is used to show loading while data is fetching from server */}
        <Suspense fallback={<MenuSkeleton />}> 
            <MenuList />
        </Suspense>
        
    </div>
  )
}

export default MenuPage
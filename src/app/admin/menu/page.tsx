import { prisma } from '@/lib/prisma'
import React from 'react'
import MenuTableMotionWrapper from '@/components/MenuTableMotionWrapper'
import ProtectedRoute from '@/components/ProtectedRoute'

type Props = {}

const page = async (props: Props) => {
  const allMenuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return (
    <ProtectedRoute>
      <div className='lg:max-w-6xl lg:mx-auto mx-2'>
        <h1 className='sm:text-3xl text-[27px] font-bold my-6 text-slate-600'>Our Delicious Menu List</h1>
        <MenuTableMotionWrapper allMenuItems={allMenuItems} />
      </div>
    </ProtectedRoute>
  )
}

export default page
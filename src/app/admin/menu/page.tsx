import { prisma } from '@/lib/prisma'
import React from 'react'
import MenuTableMotionWrapper from '@/components/MenuTableMotionWrapper'

type Props = {}

const page = async (props: Props) => {
  const allMenuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return (
    <div className='lg:max-w-6xl lg:mx-auto mx-2'>
      <h1 className='text-3xl font-bold my-6 text-slate-600'>Our Delicious Menu List</h1>
      <MenuTableMotionWrapper allMenuItems={allMenuItems}/>
    </div>
  )
}

export default page
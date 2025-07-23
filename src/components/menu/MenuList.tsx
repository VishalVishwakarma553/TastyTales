import { prisma } from '@/lib/prisma'
import React from 'react'
import ShowMenu from './ShowMenu'

type Props = {}

const MenuList = async(props: Props) => {
    const allMenu = await prisma.menuItem.findMany({orderBy:{createdAt:"desc"}})
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {
            allMenu.map((menuItem, idx) => (
                <ShowMenu key={idx} menuItem={menuItem} />
            ))
        }
    </div>
  )
}

export default MenuList
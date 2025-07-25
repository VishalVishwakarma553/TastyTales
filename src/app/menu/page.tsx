import MenuList from '@/components/menu/MenuList'
import MenuSkeleton from '@/components/menu/MenuSkeleton'
import React, { Suspense } from 'react'
import { prisma } from '@/lib/prisma'
import type { MenuItem } from '@/generated/prisma'
const MenuPage = async({ searchParams }: { searchParams: { search?: string } }) => {
  const search = await searchParams?.search || "";
  const allMenu = await prisma.menuItem.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive"
      }
    },
    orderBy: { createdAt: "desc" }
  })
  return (
    <div className='p-4'>
        <div className='my-6'>
            <h1 className='text-3xl text-slate-700 font-bold my-3'>Our Delecious Menu</h1>
        </div>
        {/* Suspence is used to show loading while data is fetching from server */}
        <Suspense fallback={<MenuSkeleton />}> 
            <MenuList allMenu={allMenu} />
        </Suspense>
    </div>
  )
}

export default MenuPage
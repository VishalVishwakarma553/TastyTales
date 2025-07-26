"use client"
import MenuList from '@/components/menu/MenuList'
import MenuSkeleton from '@/components/menu/MenuSkeleton'
import React, { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import { getMenu } from '@/actions/getMenu'
import type { MenuItem } from '@/generated/prisma'
import { useSearchParams } from 'next/navigation'

const MenuPage = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const [allMenu, setAllMenu] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchMenu = async() => {
      setLoading(true)
      const result = await getMenu(search)
      setAllMenu(result)
      setLoading(false)
    }
    fetchMenu()
  }, [search])
  return (
    <ProtectedRoute>
      <div className='p-4'>
        <div className='my-6'>
          <h1 className='sm:text-3xl text-[27px] text-slate-700 font-bold my-3'>Our Delecious Menu</h1>
        </div>
        {
          loading ? <MenuSkeleton /> : <MenuList allMenu={allMenu} />
        }
        {/* Suspence is used to show loading while data is fetching from server */}
        {/* <Suspense >
          
        </Suspense> */}
      </div>
    </ProtectedRoute>
  )
}

export default MenuPage
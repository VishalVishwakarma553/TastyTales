import DeleteMenuItem from '@/components/DeleteMenuItem'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import UpdateMenu from '@/components/UpdateMenu'
import { prisma } from '@/lib/prisma'
import React from 'react'

type Props = {}

const page = async(props: Props) => {
  const allMenuItems = await prisma.menuItem.findMany({
    orderBy:{createdAt:'desc'}
  })
  return (
    <div className='lg:max-w-6xl lg:mx-auto mx-2'>
      <h1 className='text-3xl font-bold my-4'>Our Delicious Menu List</h1>
      <Card>
        <CardContent>
          <Table>
            <TableCaption>A list of current available menu items</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                allMenuItems.map((menu, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{menu.name}</TableCell>
                    <TableCell>{menu.description}</TableCell>
                    <TableCell>{menu.category}</TableCell>
                    <TableCell>{menu.price}</TableCell>
                    <TableCell>
                      <div className='flex gap-2'>
                        {/* Update Menu Item */}
                        <UpdateMenu menu = {menu} />
                        {/* Delete Menu Item */}
                        <DeleteMenuItem id = {menu.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
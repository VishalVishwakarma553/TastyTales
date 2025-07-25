"use client"
import React from 'react'
import DeleteMenuItem from '@/components/DeleteMenuItem'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import UpdateMenu from '@/components/UpdateMenu'
import {motion} from "framer-motion"
import { MenuItem } from '@/generated/prisma'

const MenuTableMotionWrapper = ({allMenuItems}:{allMenuItems:MenuItem[]}) => {
  return (
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
      >
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
                          <UpdateMenu menu={menu} />
                          {/* Delete Menu Item */}
                          <DeleteMenuItem id={menu.id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
  )
}

export default MenuTableMotionWrapper
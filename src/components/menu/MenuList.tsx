"use client"
import { motion } from "framer-motion"
import React from 'react'
import ShowMenu from './ShowMenu'
import type { MenuItem } from '@/generated/prisma'
import Image from 'next/image'

const MenuList = ({ allMenu }: { allMenu: MenuItem[] }) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {allMenu.length > 0 ?
        allMenu.map((menuItem, idx) => (
          <ShowMenu key={idx} menuItem={menuItem} />
        )) :
        // If particular searched item not available
        <div className="fixed inset-0 flex flex-col justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Image
              src={"/notAvaiable.webp"}
              alt='notAvailable'
              height={200}
              width={300}
              className='object-cover'
            />
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className='text-muted-foreground text-[24px]'>No Such Products Available</motion.p>
          <div>
          </div>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className='text-sm text-muted-foreground'>Try Out Something Else</motion.p>
        </div>
      }
    </div>
  )
}

export default MenuList
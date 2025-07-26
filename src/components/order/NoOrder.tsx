import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { motion } from "framer-motion"


const NoOrder = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-1'>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <Image
          src={"/orderHistory.webp"}
          alt='orderHistory.webp'
          width={300}
          height={400}
          className='object-cover'
        />
      </motion.div>
      <motion.p 
      initial="hidden"
      whileInView={"visible"}
      transition={{duration:0.2, delay:0.1}}
      variants={{
        hidden:{opacity:0, y:40},
        visible:{opacity:1, y:0}
      }}
      className=' text-muted-foreground text-lg'>There are no more orders.</motion.p>
      <Button className="mt-4 bg-green-400 hover:bg-green-500"><Link href="/menu">Back to menu</Link></Button>
    </div>
  )
}

export default NoOrder
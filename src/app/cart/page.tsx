"use client"
import CartItems from '@/components/cart/CartItems'
import CartSummary from '@/components/cart/CartSummary'
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

const Cart = (props: Props) => {
    const cartItems = useStore((store) => store.cart)
  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold my-4'>Your Cart</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
            {
                cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItems key={item.id} item={item} />
                    ))
                ):(
                    <div className='fixed inset-0 flex flex-col justify-center items-center'>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.2}}
                        transition={{duration:0.1}}
                        variants={{
                            hidden:{opacity:0, y:40},
                            visible:{opacity:1, y:0}
                        }}
                        >
                        <Image
                        src={"/cart-image.png"}
                        alt='cart-image.png'
                        height={300}
                        width={300}
                        className='object-cover'
                        />
                        </motion.div>
                        <motion.p className='text-muted-foreground text-[24px]'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.2}}
                        transition={{delay:0.2,duration:0.2}}
                        variants={{
                            hidden:{opacity:0, y:40},
                            visible:{opacity:1, y:0}
                        }}
                        >Your cart is empty</motion.p>
                        <Button className="mt-4 bg-green-400 hover:bg-green-500"><Link href="/menu">Back to menu</Link></Button>
                    </div>
                )
            }
            </div>
            
            {
                cartItems.length > 0 && (
                    <div className='col-span-1'>
                        <CartSummary />
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Cart
"use client"
import CartItems from '@/components/cart/CartItems'
import CartSummary from '@/components/cart/CartSummary'
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/store'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import ProtectedRoute from '@/components/ProtectedRoute'
import Link from 'next/link'

type Props = {}

const Cart = (props: Props) => {
    const cartItems = useStore((store) => store.cart)
    return (
        <ProtectedRoute>
            <div className='max-w-7xl sm:mx-auto overflow-y-hidden mx-2'>
                <div className='flex justify-between items-center'>
                    <h1 className='sm:text-3xl text-[27px] ml-2 text-slate-700 font-bold my-4'>Your Cart</h1>
                    <Button asChild variant="link" className="text-slate-700">
                        <Link href="/order/history">View all Order</Link>
                    </Button>
                </div>
                <div className={`${cartItems.length > 0}?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8':"w-[100vw]"`}>
                    <div className={`${cartItems.length > 0}?"lg:col-span-2":"w-full"`}>
                        {
                            cartItems.length > 0 ? (
                                cartItems.map((item, idx) => (
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <CartItems key={item.id} item={item} />
                                    </motion.div>
                                ))
                            ) : (
                                <div className='flex flex-col justify-center items-center my-8'>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.2 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            visible: { opacity: 1, y: 0 }
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
                                    <motion.p className='text-muted-foreground sm:text-[24px] text-[20px]'
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ delay: 0.2, duration: 0.2 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            visible: { opacity: 1, y: 0 }
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
        </ProtectedRoute>
    )
}

export default Cart
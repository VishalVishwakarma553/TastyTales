"use client"
import { CartItem, useStore } from '@/store/store'
import React from 'react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import Link from 'next/link'



const CartSummary = () => {
    const cartItem = useStore((store) => store.cart)
    const calculateTotal = (cartItem: CartItem[]) => {
        let total = 0
        cartItem.map((item) => total += item.price)
        return total
    }
    const totalPrice = calculateTotal(cartItem)
    const TotalCost = totalPrice + 2
    return (
        <>
        
        <div className='p-6 rounded-lg border space-y-2 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50'>
            <h3 className='text-lg font-medium'>Order Summary</h3>
            <div className='flex justify-between items-center'>
                <span className='font-medium'>Price</span>
                <span>₹{totalPrice}</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='font-medium'>Tax</span>
                <span>₹2.0</span>
            </div>
            <Separator />
            <div className='flex justify-between items-center'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>₹{TotalCost}</span>
            </div>
            <Link href={"/order/address"}>
                <Button className='w-full mt-4 bg-orange-600 hover:bg-orange-700 cursor-pointer hover:scale-95'>Buy All</Button></Link>
        </div>
        </>
    )
}

export default CartSummary
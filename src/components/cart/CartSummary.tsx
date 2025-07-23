"use client"
import { CartItem, useStore } from '@/store/store'
import React from 'react'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'



const CartSummary = () => {
    const cartItem = useStore((store) => store.cart)
    const calculateTotal = (cartItem:CartItem[]) => {
        let total = 0
        cartItem.map((item) => total += item.price)
        return total
    }
    const totalPrice = calculateTotal(cartItem)
    const TotalCost = totalPrice+2
  return (
    <div className='space-y-2'>
        <h3 className='text-lg font-medium'>Order Summary</h3>
        <div className='flex justify-between items-center'>
            <span className='font-medium'>Price</span>
            <span>{totalPrice}</span>
        </div>
        <div className='flex justify-between items-center'>
            <span className='font-medium'>Tax</span>
            <span>$2.0</span>
        </div>
        <Separator />
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Total</span>
            <span className='font-semibold'>{TotalCost}</span>
        </div>
        <Button className='w-full mt-4'>Buy All</Button>
    </div>
  )
}

export default CartSummary
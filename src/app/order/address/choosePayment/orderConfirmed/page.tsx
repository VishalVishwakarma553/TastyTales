"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const OrderConfirmed = (props: Props) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-6">
      {/* ✅ Animated Checkmark */}
      <div className="flex items-center justify-center mb-2">
        <svg className="w-20 h-20 text-green-600" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
          <path className="checkmark__check" fill="none" stroke="currentColor" strokeWidth="3" d="M14 27l7 7 17-17" />
        </svg>
      </div>

      {/* ✅ Confirmation Text */}
      <h1 className="text-2xl font-bold text-gray-800">Order Confirmed!</h1>
      <p className="text-gray-600 mt-2 text-center max-w-sm">
        Thank you for your purchase. Your order has been successfully placed and will be delivered soon.
      </p>

      {/* ✅ Buttons */}
      <div className="flex gap-4 mt-6">
        <Link href={"/menu"}>
          <Button className="bg-orange-500 hover:bg-orange-600 hover:scale-95 cursor-pointer">Continue Shopping</Button></Link>
        <Link href={"/order/history"}>
          <Button variant="outline" className='hover:scale-95 cursor-pointer'>View Order</Button></Link>
      </div>
    </div>
  )
}

export default OrderConfirmed
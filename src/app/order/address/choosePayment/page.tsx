"use client"
import { saveOrder } from '@/actions/makeOrder'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { useStore } from '@/store/store'
import { Banknote, CreditCard, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const ChoosePayment = (props: Props) => {
  const {cart} = useStore()
  const router = useRouter()
  const [timeLeft, setTimeleft] = useState(600) //600 seconds- 10 min
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft((prevTime) => {
        if(prevTime <= 1){
          clearInterval(timer)
          return 0
        }
        return prevTime-1
      })
    }, 1000) //each 1s setInterval will run

    return () => clearInterval(timer)
  },[])
  const leftMinutes = String(Math.floor(timeLeft/60)).padStart(2, "0") //padstart will add if target length 2 is not achieved of string
  const leftSeconds = String(timeLeft%60).padStart(2, "0")

  // Save order handler
  const saveOrderHandler = async() => {
    const result = await saveOrder(cart)
    if(result.success){
      router.push("/order/address/choosePayment/orderConfirmed")
    }else{
      alert("Failed to make order")
    }
  }
  return (
    <div className='grid grid-cols-3 gap-5 mx-2 sm:mx-6'>
      <div className='col-span-2'>
        <h1 className='text-2xl font-bold text-slate-700 my-8'>Step-2: Choose a Payment Option</h1>
        {/* Address Saved */}
        <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
              <path className="checkmark__check" fill="none" stroke="currentColor" strokeWidth="3" d="M14 27l7 7 17-17" />
            </svg>
          </div>
          <div className='flex justify-between items-center w-full'>
            <span className="text-green-700 font-medium">Address Saved</span>
            <Button className='text-blue-900 hover:bg-blue-400/20 cursor-pointer bg-blue-400/10 border-blue-500 hover:scale-95'>Change</Button> 
          </div>
        </div>

        {/* <!-- Payment Option --> */}
        <div className="mt-4 p-4 border rounded-lg">
          <div className='flex justify-between items-center flex-wrap gap-2'>
          <h3 className="text-lg text-slate-800 font-semibold mb-2">Select Payment Option</h3>
          <div>
            Complete your payment in<span className='text-red-600 ml-2'>{leftMinutes}:{leftSeconds}</span>
          </div>
          </div>
          {/* Payment Options */}
          <Separator className='mb-2' />
          <RadioGroup>
            <div className='flex justify-start items-center gap-4 py-4 px-2 rounded-lg hover:bg-blue-300/10 transition-all duration-200'>
              <RadioGroupItem  value='Credit Card' id='r1'/>
              <Label htmlFor='r1' className='cursor-pointer'>Credit / Debit Card</Label>
            </div> 
            <Separator />
            <div className='flex justify-start items-center gap-4 py-4 px-2 rounded-lg hover:bg-blue-300/10 transition-all duration-200'>
              <RadioGroupItem value='UPI / Wallet' id='r2'/>
              <Label htmlFor='r2' className='cursor-pointer'>UPI / Wallet</Label>
            </div>
            <Separator />
            <div className='flex justify-start items-center gap-4 py-4 px-2 rounded-lg hover:bg-blue-300/10 transition-all duration-200'>
              <RadioGroupItem value='Cash on Delivery' id='r3'/>
              <Label htmlFor='r3' className='cursor-pointer'>Cash on Delivery</Label>
            </div>
            <Separator className='mb-6' />
          </RadioGroup>
          <div className='flex justify-end'>
            <Link href={"/order/address/choosePayment/orderConfirmed"}>
          <Button className='bg-orange-400 w-[200px] hover:scale-95 hover:bg-orange-500 cursor-pointer' onClick={saveOrderHandler}>Make Payment</Button></Link>
          </div>
        </div>
      </div>
      {/* TODO - import order details  */}
      <div></div>
    </div>
  )
}

export default ChoosePayment
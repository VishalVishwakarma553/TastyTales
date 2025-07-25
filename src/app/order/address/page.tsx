"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useStore } from '@/store/store'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Address = (props: Props) => {
  const { cart } = useStore()
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className='grid grid-cols-3 gap-5'>
      <h1 className='text-2xl font-bold text-slate-700 my-8'>Step-1: Choose A Address</h1>
      <div className='mx-2 sm:mx-6 col-span-2'>
        <Card className='bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50'>
          <CardHeader>
            <h3 className='text-xl font-semibold text-slate-700'>Delivery Address</h3>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Enter your name..' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Mobile Number</Label>
                <Input id='phone' placeholder='Enter your phone..' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Pincode</Label>
                <Input id='name' placeholder='Enter your pincode..' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='locality'>Locality</Label>
                <Input id='locality' placeholder='Enter your locality..' />
              </div>
            </div>
            <div className='space-y-2'>
              <Label>Address[Area and street]</Label>
              <Textarea placeholder='Enter your area and street..' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label htmlFor='name'>City/District</Label>
                <Input id='name' placeholder='Enter your city..' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='state'>State</Label>
                <Select >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select your state" className='' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Uttar Pradesh'>Uttar Pradesh</SelectItem>
                      <SelectItem value='Bihar'>Bihar</SelectItem>
                      <SelectItem value='Maaharastra'>Maharastra</SelectItem>
                      <SelectItem value='Madhya Pradesh'>Madhya Pradesh</SelectItem>
                      <SelectItem value='Panjab'>Madhya Panjab</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Link href={"/order/address/choosePayment"}>
              <Button className='w-full bg-orange-500 hover:scale-95 hover:bg-orange-600 transition-all cursor-pointer duration-200 mt-3'>Save and Proceed to payment</Button></Link>
          </CardContent>
        </Card>
      </div>
      {/* Todo: Order Details section */}
      <div className='col-span-1'>
        {/* Price Details */}
        <div className='p-4 rounded-lg space-y-3 border bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50'>
          <h3 className='text-xl font-semibold'>Price Details:</h3>
          <Separator />
          <div>
            {cart.map((item) => (
              <div className='flex justify-between'>
                <p>{item.name}</p>
                <p>₹{item.quantity}×{item.price}</p>
              </div>
            ))}
          </div>
          <Separator />
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Total Paylable:</h3>
            <span className='text-lg font-semibold'>₹{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
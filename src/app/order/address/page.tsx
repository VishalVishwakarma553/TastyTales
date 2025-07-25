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
import React, { useState } from 'react'
import {motion} from "framer-motion"
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {}

const Address = (props: Props) => {
  const { cart } = useStore()
  const router = useRouter()
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  // Form Validation
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    pincode:"",
    locality:"",
    address:"",
    city:"",
    state:""
  })
  // change handler
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  // seperate for selectin state 
  const onSelectHandler = (value: string) => {
    setFormData({...formData, state:value})
  }
  const validateField = () => {
    for (const [key, value] of Object.entries(formData)) {
      if(!value.trim()){
        toast.error(`${key} is required`)
        return false
      }
    }
    return true
  }
  const checkFieldHandler = () => {
     if(validateField()){
      router.push("/order/address/choosePayment")
     }
  }
  return (
    <div className='mx-2 sm:mx-6'>
      <h1 className='text-2xl font-bold text-slate-700 my-8'>Step-1: Choose A Address</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        <motion.div 
        initial="hidden"
        whileInView={"visible"}
        transition={{duration:0.2}}
        variants={{
          hidden:{opacity:0, x:100},
          visible:{opacity:1, x:0}
        }}
        className='sm:col-span-2'>
          <Card className='bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50'>
            <CardHeader>
              <h3 className='text-xl font-semibold text-slate-700'>Delivery Address</h3>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' name='name' value={formData.name} onChange={onChangeHandler} placeholder='Enter your name..' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='phone'>Mobile Number</Label>
                  <Input id='phone' name='phone' value={formData.phone} onChange={onChangeHandler} placeholder='Enter your phone..' />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='pincode'>Pincode</Label>
                  <Input id='pincode' name='pincode' value={formData.pincode} onChange={onChangeHandler} placeholder='Enter your pincode..' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='locality'>Locality</Label>
                  <Input id='locality' name='locality' value={formData.locality} onChange={onChangeHandler} placeholder='Enter your locality..' />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='address'>Address[Area and street]</Label>
                <Textarea name='address' value={formData.address} onChange={onChangeHandler} placeholder='Enter your area and street..' />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='city'>City/District</Label>
                  <Input id='city' name='city' value={formData.city} onChange={onChangeHandler} placeholder='Enter your city..' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='state'>State</Label>
                  <Select onValueChange={onSelectHandler}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder="Select your state" className='' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='Uttar Pradesh'>Uttar Pradesh</SelectItem>
                        <SelectItem value='Bihar'>Bihar</SelectItem>
                        <SelectItem value='Maharastra'>Maharastra</SelectItem>
                        <SelectItem value='Madhya Pradesh'>Madhya Pradesh</SelectItem>
                        <SelectItem value='Panjab'>Madhya Panjab</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
                <Button onClick={checkFieldHandler} className='w-full bg-orange-500 hover:scale-95 hover:bg-orange-600 transition-all cursor-pointer duration-200 mt-3'>Save and Proceed to payment</Button>
            </CardContent>
          </Card>
        </motion.div>
        {/* Todo: Order Details section */}
        <div className='sm:col-span-1'>
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
              <h3 className='text-lg font-semibold'>Total Payable:</h3>
              <span className='text-lg font-semibold'>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Address
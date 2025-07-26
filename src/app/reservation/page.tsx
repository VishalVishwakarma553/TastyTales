"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { motion } from "framer-motion"
import ProtectedRoute from '@/components/ProtectedRoute'



const Reservation = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        Email: "",
        Phone: "",
        ReservationData: "",
        ReservationTime: "",
        NumberOfGuest: "",
    })
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const validateInput = () => {
        for (const [key, value] of Object.entries(formData)) {
            if (!value.trim()) {
                toast.error(`${key} is required`)
                return false
            }
        }
        return true
    }
    const onSubmitHandler = () => {
        if (validateInput()) {
            const toastId = toast.loading("Waiting for owner confirmation...");

            setTimeout(() => {
                toast.dismiss(toastId); // Dismiss the loading toast
                toast.success("Your reservation has been confirmed!");
            }, 4000); // 4 seconds delay
        }
    }
    return (
        <ProtectedRoute>
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <Card className='max-w-3xl my-4 sm:my-8 mx-2 sm:mx-auto shadow-lg'>
                    <CardHeader className='text-xl text-slate-700 font-bold'>
                        Make a Reservation
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <Input name='FirstName' value={formData.FirstName} onChange={onChangeHandler} className='' placeholder='First Name' />
                            <Input placeholder='Last Name' />
                        </div>
                        <Input type='email' name='Email' value={formData.Email} onChange={onChangeHandler} placeholder='Email Address' />
                        <Input name='Phone' value={formData.Phone} onChange={onChangeHandler} placeholder='Phone Number' />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <Input name='ReservationData' value={formData.ReservationData} onChange={onChangeHandler} type='date' />
                            <Input name='ReservationTime' value={formData.ReservationTime} onChange={onChangeHandler} type='time' />
                        </div>
                        <Input name='NumberOfGuest' value={formData.NumberOfGuest} onChange={onChangeHandler} placeholder='Number of Guests' />
                        <Textarea placeholder='Special Requests or Dietary Restriction' />
                        <Button onClick={onSubmitHandler} className='w-full bg-orange-500 hover:scale-95 hover:bg-orange-600 transition-all cursor-pointer duration-200 mt-3'>Make Reservation</Button>
                    </CardContent>
                </Card>
            </motion.div>
        </ProtectedRoute>
    )
}

export default Reservation
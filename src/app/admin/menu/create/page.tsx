"use client"
import React, { useActionState, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import UploadImage from '@/components/UploadImage'
import { createMenuAction } from '@/actions/createMenu'
import {motion} from "framer-motion"
type Props = {}

const page = (props: Props) => {
    const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [formState, formAction, isPending] = useActionState(createMenuAction, {errors:{}})
    const handleAction = (formData: FormData) => {
        formData.append("image", imageUrl || "")
        console.log(imageUrl)
        return formAction(formData)
    }
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.2}}
        variants={{
            hidden:{opacity:0, y:40},
            visible:{opacity:1, y:0}
        }}
        className='min-h-screen flex justify-center py-12 items-start mx-2'>
            <Card className='w-full max-w-xl  bg-white/90 shadow-xl border border-yellow-100'>
                <CardHeader>
                    <CardTitle className='flex justify-between items-center '>
                        <h1 className='sm:text-xl text-lg font-semibold text-slate-800'>Add New Menu Item</h1>
                        <Link href={"/admin/menu"}><Button variant={"link"} className='cursor-pointer'>All Menu List</Button></Link>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={handleAction} className='space-y-2'>
                        <div>
                            <Label htmlFor='name' className='font-medium '>Item Name</Label>
                            <Input
                                placeholder='e.g. Pizza'
                                name='name'
                            />
                            {
                                formState.errors.name && (<p className='text-red-500 text-sm'>{formState.errors.name}</p>)
                            }
                        </div>
                        <div>
                            <Label htmlFor='description' className='font-medium '>Description</Label>
                            <Textarea
                                placeholder='Describe here about the item'
                                name='description'
                            />
                            {
                                formState.errors.description && (<p className='text-red-500'>{formState.errors.description}</p>)
                            }
                        </div>
                        <div>
                            <Label htmlFor='Price' className='font-medium '>Price</Label>
                            <Input
                                placeholder='0.00'
                                name='price'
                            />
                            {
                                formState.errors.price && (<p className='text-red-500'>{formState.errors.price}</p>)
                            }
                        </div>
                        <div>
                            <Label htmlFor='category' className='font-medium '>Category</Label>
                            <Select name='category'>
                                <SelectTrigger id="category" className='w-full'>
                                    <SelectValue placeholder="Pizza" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        categories.map((item, idx) => (
                                            <SelectItem key={idx} value={item}>{item}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            {formState.errors.category && (<p className='text-red-500'>{formState.errors.category}</p>)}
                        </div>

                        {/* UploadImage with image kit io */}
                        <div>
                        <UploadImage setImageUrl={setImageUrl} />
                        </div>

                        <Button disabled={isPending || !imageUrl} type='submit' className={`w-full mt-2 ${isPending|| !imageUrl ? "cursor-not-allowed": "cursor-pointer"}`}>
                            {
                                isPending?"Loading":"Add New Menu Item"
                            }
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default page
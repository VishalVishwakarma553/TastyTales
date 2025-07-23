"use client"
import React from 'react'
import type { MenuItem } from '@/generated/prisma'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Image } from '@imagekit/next'
import { Button } from '../ui/button'
import { BadgePlus } from 'lucide-react'
import { useStore } from '@/store/store'
type Props = {
    menuItem: MenuItem
}

const ShowMenu = (props: Props) => {
    const addToCart = useStore((store) => store.addToCart)
    return (
        <Card >
            <CardHeader className=''>
                <Image
                    urlEndpoint="https://ik.imagekit.io/8shhz2fde/"
                    src={props.menuItem.imageUrl}
                    width={400}
                    height={300}
                    alt="menu picture"
                    className='w-full h-56 object-cover rounded-t-lg'
                />
            </CardHeader>
            <CardContent>
                <h3 className='text-lg font-bold'>{props.menuItem.name}</h3>
                <p className='text-muted-foreground text-sm'>{props.menuItem.description}</p>
            </CardContent>
            <CardFooter className='flex justify-between items-center'>
                <span className='font-bold text-2xl text-orange-600'>${props.menuItem.price}</span>
                <Button className='bg-orange-600 hover:bg-orange-700 hover:scale-95 cursor-pointer transition-all duration-200' onClick={() => addToCart(props.menuItem)}>
                    <BadgePlus className='h-4 w-4' />
                    Add to card
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ShowMenu
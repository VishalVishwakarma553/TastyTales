import { Image } from '@imagekit/next'
import React from 'react'
import { CartItem, useStore } from '@/store/store'
import { Button } from '../ui/button'
import { Minus, Plus, X } from 'lucide-react'
import { Input } from '../ui/input'

const CartItems = ({ item }: { item: CartItem }) => {
    const IncreaseQuantity = useStore((store) => store.increaseQuantity)
    const DecreaseQuantity = useStore((store) => store.decreaseQuantity)
    const removeFromCart = useStore((store) => store.removeFromCart)
    return (
        <div className='flex gap-2 p-4 border rounded-lg my-4 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50'>
            <div className='relative w-24 h-24'>
                <Image
                    urlEndpoint="https://ik.imagekit.io/8shhz2fde/"
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className='object-cover rounded-md'
                />
            </div>
            <div className='flex-1'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className='text-lg font-medium'>{item.name}</h3>
                        <p className='text-muted-foreground'>₹{item.price}</p>
                    </div>
                    <Button variant={"outline"} className='hover:scale-95 cursor-pointer' size={"icon"} onClick={() => removeFromCart(item.id)}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <div className='flex gap-2 mt-2'>
                    <Button variant={"outline"} size={"icon"} className='hover:scale-95 cursor-pointer' onClick={() => DecreaseQuantity(item.id)}>
                        <Minus className='h-3 w-3' />
                    </Button>
                    <Input 
                    readOnly
                    className='h-9 w-12 bg-white'
                    value={item.quantity}
                    
                    />
                    <Button variant={"outline"} className='hover:scale-95 cursor-pointer' size={"icon"} onClick={() =>  IncreaseQuantity(item.id)}>
                        <Plus className='w-3 h-3' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartItems
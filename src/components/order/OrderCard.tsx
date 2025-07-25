import { Image } from '@imagekit/next'
import React from 'react'
import NoOrder from './NoOrder'

type Props = {}

const OrderCard = ({ orders }: { orders: any[] }) => {
    return (
        orders.length > 0 ?
            (
                orders.map((order) => (
                    <>
                        {/* Order history card */}
                        <div key={order.id} className='space-y-2 border rounded-lg my-4 bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50 shadow-lg  p-6'>
                            <div className='sm:flex'>
                                <p className='text-lg font-medium'>Order ID: <span className='text-sm sm:text-lg text-muted-foreground'>{order.id} </span></p>
                                <p className='text-lg font-semibold'><span className='hidden sm:inline-flex'>|</span>Total: ₹<span className='text-lg text-muted-foreground'>{order.totalAmount}</span></p>
                            </div>

                            <p className='text-[16px] text-muted-foreground font-normal'>Placed on: {new Date(order.createdAt).toLocaleString()}</p>
                            <div className='grid grid-cols-1  gap-2'>
                                {
                                    order.items.map((item: any) => (
                                        <div key={item.id} className='flex justify-between border-b p-2'>
                                            <div>
                                                <h3 className='text-lg font-bold'>{item.name}</h3>
                                                <p className='text-[16px] text-muted-foreground' >{item.quantity} × ₹{item.price} </p>
                                            </div>
                                            <Image
                                                urlEndpoint='https://ik.imagekit.io/8shhz2fde/'
                                                src={item.imageUrl}
                                                alt={item.name}
                                                width={48}
                                                height={48}
                                                className=' object-cover rounded'
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ))
            ) : <NoOrder />
    )
}

export default OrderCard
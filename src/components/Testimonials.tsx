import { Star } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    const testUser = [
        {
            name: "Surash Jain",
            rating: 5,
            comment: "The best experience I've this year."
        },
        {
            name: "Rahul Keshwan",
            rating: 3,
            comment: "Consistency excellent food and service."
        },
        {
            name: "Jaish Gaur",
            rating: 6,
            comment: "The ambiance is perfect and every dish we tried was flavorful and beautifully presented."
        }
    ]
    return (
        <section className='md:mx-6 sm:mx-4 mx-2 space-y-9 mb-14'>
            <div className='text-center'>
                <h1 className='text-center sm:text-4xl font-bold text-2xl'>What Our Guest Says</h1>
                <p className='sm:text-lg text-[15px] text-muted-foreground text-center'>Don&apos;t just take our word for it - hear from our satisfied customer</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    testUser.map((item, idx) => (
                        <div className='p-6 shadow-md rounded-lg space-y-2 border' key={idx}>
                            <div className='flex gap-2'>
                                {
                                    [...Array(5)].map((_, index) => (
                                        <Star key={index} className={`${index < item.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} />
                                    ))
                                }
                            </div>
                            <p className='italic text-muted-foreground'>{item.comment}</p>
                            <p className='font-semibold text-lg'>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials
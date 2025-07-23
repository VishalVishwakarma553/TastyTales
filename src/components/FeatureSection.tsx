"use client"
import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const FeatureSection = (props: Props) => {
    //     const menuList = await prisma.menuItem.findMany({
    //     orderBy:{createdAt:"desc"},
    //     take:3
    //   })
    return (
        <section className='container mx-auto mt-14'>
            <h1 className='text-center text-4xl font-bold'>Featured Dishes</h1>
            <p className='text-lg text-muted-foreground text-center'>Discover our most popular dishes, carefully crafted by our expert chefs</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                {/* Card-1 */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{duration:1, delay:0.5}}
                viewport={{once:true,amount:0.2}}
                variants={{
                    hidden:{opacity:0, y:40},
                    visible:{opacity:1,y:0}
                }}
                >
                <Card className='pt-0'>
                    <CardHeader className='p-0 relative h-66 '>
                        <Image
                            src="/pasta-carbonara.webp"
                            alt="pasta-carbonara.webp"
                            fill
                            className="object-cover rounded-t-lg"
                        />
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-medium text-lg'>Pasta Carbonara</h1>
                        <p className='text-muted-foreground text-sm'>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                        <div className='mt-3 flex justify-between'>
                            <span className='font-bold text-2xl text-orange-600'>$28</span>
                            <Button className='bg-orange-600 hover:bg-orange-700 hover:scale-95 cursor-pointer transition-all duration-200'>Order Now</Button>
                        </div>
                    </CardContent>
                </Card>
                </motion.div>
                {/* Card-2 */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.2}}
                transition={{delay:0.8, duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:40},
                    visible:{opacity:1, y:0}
                }}
                >
                <Card className='pt-0'>
                    <CardHeader className='p-0 relative h-66 '>
                        <Image
                            src="/pizza-margherita.jpg"
                            alt="pizza-margherita.jpg"
                            fill
                            className="object-cover rounded-t-lg"
                        />
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-medium text-lg'>Pizza Margherita</h1>
                        <p className='text-muted-foreground text-sm'>A traditional Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, basil, and olive oil.</p>
                        <div className='mt-3 flex justify-between'>
                            <span className='font-bold text-2xl text-orange-600'>$34</span>
                            <Button className='bg-orange-600 hover:bg-orange-700 hover:scale-95 cursor-pointer transition-all duration-200'>Order Now</Button>
                        </div>
                    </CardContent>
                </Card>
                </motion.div>
                {/* Card-3 */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{delay:1, duration:1}}
                viewport={{once:true, amount:0.2}}
                variants={{
                    hidden:{opacity:0, y:40},
                    visible:{opacity:1, y:0}
                }}
                >
                <Card className='pt-0'>
                    <CardHeader className='p-0 relative h-66'>
                        <Image
                            src="/truffle-pasta.webp"
                            alt="truffle-pasta.webp"
                            fill
                            className="object-cover rounded-t-lg"
                        />
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-medium text-lg'>Truffle pasta</h1>
                        <p className='text-muted-foreground text-sm'>Indulgent pasta tossed with creamy sauce and aromatic truffle, delivering a rich and luxurious flavor experience.</p>
                        <div className='mt-3 flex justify-between'>
                            <span className='font-bold text-2xl text-orange-600'>$38</span>
                            <Button className='bg-orange-600 hover:bg-orange-700 hover:scale-95 cursor-pointer transition-all duration-200'>Order Now</Button>
                        </div>
                    </CardContent>
                </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default FeatureSection
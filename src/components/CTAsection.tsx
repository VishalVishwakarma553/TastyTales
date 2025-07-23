import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

const CTAsection = (props: Props) => {
    return (
        <section className='py-16 bg-[#16223c] text-primary-foreground my-4 relative dotted-bg '>
            <div className='text-center space-y-2'>
                <h1 className='text-3xl font-bold'>Ready to experience exceptional dining?</h1>
                <p className='text-lg font-medium'>Visit Us Today
to our restaurant</p>
                <div className='flex gap-4 justify-center mt-6'>
                    <Link href="/reservation">
                        <Button className='cursor-pointer bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 hover:scale-105'>Reserve a Table</Button>
                    </Link>
                    <Link href={"/order"}><Button  className='border border-blue-500 cursor-pointer bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 bg-clip-text text-transparent hover:scale-105'>Order Onlne</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default CTAsection
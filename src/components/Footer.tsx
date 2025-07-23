import { Locate, LocateIcon, MapPin, Phone, Pin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className='p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 '>
                <div>
                    <h1 className='text-2xl  font-bold mb-2'>TastyTales</h1>
                    <p className='font-medium'>Authentic flavours, exceptional dining</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>Links</h3>
                    <ul>
                        <Link href="/menu"><li>Menu</li></Link>
                        <Link href="/about"><li >About</li></Link>
                        <Link href="/contact"><li>Contact</li></Link>
                        <Link href="/privacy"><li>Privacy</li></Link>
                    </ul>
                </div>
                <div >
                    <h3 className='font-semibold text-2xl mb-2'>Contact</h3>
                    <p className='flex gap-2 mb-2'><MapPin /> Mumbai,India</p>
                    <p className='flex gap-2'><Phone /> +917281728712</p>
                </div>
            </div>
            <div>
                <p className='text-sm my-8 pt-8 text-center border-t-2'>© {new Date().getFullYear()} TastyTales. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer
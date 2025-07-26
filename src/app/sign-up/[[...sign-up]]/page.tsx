"use client"
import { SignUp } from '@clerk/nextjs'
import {motion} from "framer-motion"

export default function Page() {
    return (
    <motion.div
    initial="hidden"
    whileInView={"visible"}
    transition={{delay:0.2, duration:0.5}}
    variants={{
        hidden: {opacity:0, y:40},
        visible:{opacity:1, y:0}
    }}
    className='flex justify-center py-12 overflow-y-hidden'>
        <SignUp />
    </motion.div>
    )
}
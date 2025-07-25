"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Ghost, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { Button } from '../ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { useStore } from '@/store/store'
import { motion, AnimatePresence } from "framer-motion"
import { redirect, usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const cart = useStore((store) => store.cart)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathName = usePathname()
    // Adding search functionality
    const [search, setSearch] = useState("")
    const router = useRouter()
    useEffect(() => {
        const handler = setTimeout(() => {
            if (search.trim()) {
                router.push(`/menu?search=${search}`)
            } else {
                if (pathName === "/menu") {
                    router.push("/menu");
                }
            }
        }, 500)
        return () => clearTimeout(handler)
    }, [search, router])

    return (
        <header className='sticky top-0 z-50 w-full border-b backdrop-blur-lg bg-gradient-to-r from-green-50 via-yellow-50 to-orange-50'>
            <div className='container flex justify-between h-16 items-center mx-auto'>
                {/* Logo & Main Nav */}
                <div className='flex items-center space-x-6 md:space-x-8'>
                    <Link href="/" className='font-extrabold text-xl bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent tracking-wide drop-shadow border-2 border-blue-300'>
                        TastyTales
                    </Link>
                    <nav className='hidden md:flex space-x-4'>
                        <Link href="/menu" className='font-semibold hover:text-green-600 transition'>Menu</Link>
                        <Link href="/#about" className='font-semibold hover:text-yellow-600 transition'>About</Link>
                        <Link href="/admin/menu/create" className='font-semibold hover:text-orange-500 transition'>Admin</Link>
                    </nav>
                </div>
                {/* Right Section */}
                <div className='flex space-x-3 items-center'>
                    <div className='hidden sm:block relative space-x-6'>
                        <Search className='absolute top-2 left-3 h-5 w-5 text-muted-foreground' />
                        <Input className='pl-10 md:w-[250px] w-[160px] rounded-full shadow-sm focus:ring-2 focus:ring-green-400' placeholder='Search menu...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    {/* Cart */}
                    <Link href="/cart">
                        <Button className="relative cursor-pointer" variant="ghost">
                            <ShoppingCart className='h-5 w-5' />
                            <AnimatePresence>
                                {cart.length > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className='absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-zinc-100 bg-gradient-to-r from-red-500 to-orange-400 rounded-full text-xs font-bold shadow'
                                    >
                                        {cart.length}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Button>
                    </Link>
                    {/* User Auth */}
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    {/* Mobile Menu Button */}
                    <Button size={"icon"} variant={"ghost"} onClick={() => setMenuOpen(!menuOpen)} className='md:hidden cursor-pointer duration-100'>
                        {menuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </Button>
                </div>
            </div>
            {/* Mobile Nav */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden flex flex-col m-2 space-y-4 bg-white/80 rounded-xl shadow-lg p-4'
                    >
                        <Link href="/menu" className='font-medium text-center hover:text-green-600 transition'>Menu</Link>
                        <Link href="/about" className='font-medium text-center hover:text-yellow-600 transition'>About</Link>
                        <Link href="/admin/menu/create" className='font-medium text-center hover:text-orange-500 transition'>Admin</Link>
                        <div className='sm:hidden relative mt-2'>
                            <Search className='absolute top-2 left-3 h-5 w-5 text-muted-foreground' />
                            <Input className='pl-10 w-full rounded-full shadow-sm focus:ring-2 focus:ring-green-400' placeholder='Search menu...' />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar




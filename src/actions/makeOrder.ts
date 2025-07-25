"use server"

import { Prisma } from "@/generated/prisma"
import { prisma } from "@/lib/prisma"
import { CartItem } from "@/store/store"
import { auth } from "@clerk/nextjs/server"


export const saveOrder = async(cart:CartItem[]) => {
    try{
        const {userId} = await auth() ||""
        const totalAmount = cart.reduce((acc, item) => acc + item.price*item.quantity, 0)
        await prisma.order.create({
            data:{
                userId:userId as string ,
                items:cart as unknown as Prisma.InputJsonValue,
                totalAmount,
            }
        })
        return {success:true}
    }catch(error){
        console.log(error)
        return {success: false}
    }
}
export const getOrder = async(startData?:Date, endDate?:Date) => {
    const {userId} = await auth()
    if(!userId){
        return []
    }
    const whereClause:any = {userId}
    if(startData && endDate){
        whereClause.createdAt = {
            gte: startData,
            lte: endDate
        }
    }
    try{
        const OrderHistory = await prisma.order.findMany({
            where:whereClause,
            orderBy:{
                createdAt:"desc"
            }
        })
        return OrderHistory
    }catch(error) {
        console.log(error)
    }
}
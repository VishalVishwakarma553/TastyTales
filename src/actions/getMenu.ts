"use server"
import { prisma } from "@/lib/prisma"
import type { MenuItem } from "@/generated/prisma"

export const getMenu = async (searchKey: string): Promise<MenuItem[]> => {
    try {
        const allMenu = await prisma.menuItem.findMany({
            where: {
                name: {
                    contains: searchKey,
                    mode: "insensitive"
                }
            },
            orderBy: { createdAt: "desc" }
        })
        return allMenu
    } catch(error) {
        console.log("In Error", error)
        return []
    }
}
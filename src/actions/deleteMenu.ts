"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const deleteItem = async (prevState:null, formData:FormData) => {
    try {
        const id = formData.get("id") as string
        await prisma.menuItem.delete({
            where: { id }
        })
        revalidatePath("/admin/menu")
        // Todo after removing redirect showing error in DeleteMenuItem and deleting causes error in console
        redirect("/admin/menu")
    } catch {
        throw new Error("Failed to delete menu item")
    }
}
"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {z} from "zod"

export type createMenuFormState = {
    errors:{
        name ?: string[],
        description ?: string[],
        category ?: string[],
        price ?: string[],
        image ?: string[],
        formError ?: string[]
    }
}

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    description: z.string().min(1, {message: "Description is required"}),
    category: z.string().min(1, {message:"Category is required"}),
    price: z.coerce.number().min(0.01, {message: "Price must be required"}),
    image: z.string().url({message: "Image must be a valid url"}).optional().or(z.literal("")) //allow url to be empty string
})

export const createMenuAction = async(initialState:createMenuFormState, formData:FormData):Promise<createMenuFormState> => {
    console.log(formData)
    const result = formSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        category: formData.get("category"),
        price: formData.get("price"),
        image: formData.get("image")
    })
    console.log(result)
    if(!result.success){
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    try{
        await prisma.menuItem.create({
            data:{
                name:result.data.name,
                description: result.data.description,
                price: result.data.price,
                imageUrl: result.data.image || "",
                category: result.data.category
            }
        })
    }catch(error: unknown){
        if( error instanceof Error){
            return {
                errors:{
                    formError: [error.message]
                }
            }
        }else{
            return {
                errors: {
                    formError: ["An Unexpected Error Occured"]
                }
            }
        }
    }
    revalidatePath("/admin/menu")
    redirect("/admin/menu")
}
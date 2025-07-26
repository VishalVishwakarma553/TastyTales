"use client"
import React, { useActionState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { SquarePen } from 'lucide-react'
import { MenuItem } from '@/generated/prisma'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { updateMenuAction, updateMenuFormState } from '@/actions/updateMenu'


const UpdateMenu = ({ menu }: { menu: MenuItem }) => {
  const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];
  const updateInitialState:updateMenuFormState =  { errors: {} }
  const [formState, formAction, isPending] = useActionState(updateMenuAction,updateInitialState)
  const formHandle = (formData: FormData) => {
    formData.append("id", menu.id)
    return formAction(formData)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='hover:scale-95 cursor-pointer'><SquarePen /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={formHandle}>
          <DialogHeader>
            <DialogTitle>Edit Menu</DialogTitle>
            <DialogDescription>
              Make changes to existed menu here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={menu.name} />
              {
                formState.errors.name && (<p className='text-red-500 text-sm'>{formState.errors.name}</p>)
              }
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" defaultValue={menu.description} />
              {
                formState.errors.description && (<p className='text-red-500 text-sm'>{formState.errors.description}</p>)
              }
            </div>
            <div className="grid gap-3 ">
              <Label htmlFor="category">Category</Label>
              <Select name='category'>
                <SelectTrigger id="category" className='w-full'>
                  <SelectValue placeholder={menu.category} />
                </SelectTrigger>
                <SelectContent>
                  {
                    categories.map((item, idx) => (
                      <SelectItem key={idx} value={item}>{item}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              {
                formState.errors.category && (<p className='text-red-500 text-sm'>{formState.errors.category}</p>)
              }
            </div>
            <div className="grid gap-3 mb-4">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" defaultValue={menu.price} />
              {
                formState.errors.price && (<p className='text-red-500 text-sm'>{formState.errors.price}</p>)
              }
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className='hover:scale-95 cursor-pointer'>Cancel</Button>
            </DialogClose>
            <Button type="submit" className='hover:scale-95 cursor-pointer' disabled={isPending}>{isPending ? "Saving changes" : "Save changes"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

  )
}

export default UpdateMenu
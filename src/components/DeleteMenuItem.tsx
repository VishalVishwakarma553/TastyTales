"use client"
import React, { useActionState } from 'react'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { deleteItem } from '@/actions/deleteMenu'

//React props are object so we write {id: string}
const DeleteMenuItem = ({id}:{id:string}) => {
  // since formState is not used so remove that
    const [, formAction, isPending] = useActionState(deleteItem, null)
    const handleDelete = () => {
      const formData = new FormData()
      formData.append("id", id)
      return formAction(formData)
    }
  return (
    <form action={handleDelete}>
        <Button disabled={isPending} className='cursor-pointer hover:scale-95'>
            <Trash2 className='h-4 w-4' size={"icon"}/>
        </Button>
    </form>
  )
}

export default DeleteMenuItem
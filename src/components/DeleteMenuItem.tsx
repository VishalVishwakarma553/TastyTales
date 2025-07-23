"use client"
import React, { useActionState } from 'react'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { deleteItem } from '@/actions/deleteMenu'

type Props = {}
//React props are object so we write {id: string}
const DeleteMenuItem = ({id}:{id:string}) => {
    const [formState, formAction, isPending] = useActionState(deleteItem, "")
    const handleDelete = () => {
      const formData = new FormData()
      formData.append("id", id)
      return formAction(formData)
    }
  return (
    <form action={handleDelete}>
        <Button disabled={isPending} className='cursor-pointer'>
            <Trash2 className='h-4 w-4' size={"icon"}/>
        </Button>
    </form>
  )
}

export default DeleteMenuItem
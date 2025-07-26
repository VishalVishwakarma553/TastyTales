"use client"
import { RedirectToSignUp, useAuth } from '@clerk/nextjs'
import React from 'react'

type Props = {
    children:React.ReactNode
}

const ProtectedRoute = ({children}: Props) => {
    const {isSignedIn} = useAuth()
    if(!isSignedIn){
        return <RedirectToSignUp />
    }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute
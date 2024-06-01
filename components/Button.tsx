"use client"
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    navigate? : string | string
    children?: React.ReactNode
    className?: string
}

const Button = ({navigate, children, className} : ButtonProps) => {
  return (
    <Link href={navigate ? navigate : ''}><button className={`${className} p-1`}>
        {children}
    </button></Link>
  )
}

export default Button
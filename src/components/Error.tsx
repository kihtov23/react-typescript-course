import React from 'react'

interface ErrorProps{
    error: string
}

export function Error(props : ErrorProps) {
  return (
    <p className='text-center text-red-600'>{props.error}</p>
  )
}
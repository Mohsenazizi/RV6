import React from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {
  const { id } = useParams();

  return (
    <div className='product'>this is product {id}</div>
  )
}

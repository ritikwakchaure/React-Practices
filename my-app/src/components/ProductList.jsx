import React from 'react'

export const ProductList = ({products}) => {
  return (
    <div>
        <h2>Product Names</h2>
        <ul>
            {products.map((product ,index) =>(
                <li key ={index}>{product.name}</li>
            ))}
        </ul>
    </div>
  )
}

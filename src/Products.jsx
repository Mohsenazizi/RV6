import React from 'react';
import { Link } from 'react-router-dom';


export const Products = () => (
  <>
    {
      new Array(100).fill().map((_, index) => (
        <div className='product' key={Date.now() + index}>
          <Link to={`/products/${index}`}>
          {`product ${index}`}
          </Link>
        </div>
      ))
    }
  </>
)

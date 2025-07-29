import React from 'react'
import "./emptyproduct.css"
import { Link } from 'react-router-dom'
import {Heart, Plus} from "lucide-react"
const EmptyProduct = () => {
  return (
    <div className='no-product'>
     <h1><Heart /></h1>
     <h1>No Product Yet</h1>
     <p className='tagline'>Start building your wishlist by adding your first product!</p>
    <Link to="/addproduct"><button><Plus />Add Your First Product</button></Link>
    </div>
  )
}

export default EmptyProduct

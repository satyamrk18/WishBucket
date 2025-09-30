import React from 'react'
import { Link } from 'react-router-dom'
import {Heart, Plus} from "lucide-react"
const EmptyProduct = () => {
  return (
    <div className='w-4/5 border border-gray-300 p-25 mx-auto rounded-lg flex flex-col justify-center items-center'>
     <h1><Heart /></h1>
     <h1>No Product Yet</h1>
     <p className='text-center p-5'>Start building your wishlist by adding your first product!</p>
    <Link to="/addproduct"><button className='bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer text-white flex items-center px-5 py-2.5 border-none rounded-lg font-normal cursor-pointer transition-colors duration-300 no-underline gap-1.25 text-sm'><Plus />Add Your First Product</button></Link>
    </div>
  )
}

export default EmptyProduct

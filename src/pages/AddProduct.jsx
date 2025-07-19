import React from 'react'
import Navbar from "./../components/navbar.jsx"
import "./AddProduct.css"
const AddProduct = () => {
  return (
    <div>
           <Navbar />
     <div className='addproduct'>
       <div className='sideform'></div>
       <div className='cardview'></div>
     </div>
    </div>
  )
}

export default AddProduct

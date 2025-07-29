import React from 'react'
import "./searchbar.css"
const searchbar = ({onChange}) => {
  return (
    <div>
      <input 
      type="text"
      placeholder='search the product title'
      className='searchbar'
      name= "product-title"
      onChange={onChange}/>
    </div>
  )
}

export default searchbar

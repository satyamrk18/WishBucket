import React from 'react'
import {Trash2} from "lucide-react"
const Deletebtn = ({ onClick }) => {
  return (
    <div className='bg-red-600 text-white rounded-2xl p-2 cursor-pointer' onClick={onClick}>
      <Trash2 />
    </div>
  )
}

export default Deletebtn

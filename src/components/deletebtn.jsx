import React from 'react'
import {Trash2} from "lucide-react"
import "./deletebtn.css"
const Deletebtn = ({ onClick }) => {
  return (
    <div className='deletebtn' onClick={onClick}>
      <Trash2 />
    </div>
  )
}

export default Deletebtn

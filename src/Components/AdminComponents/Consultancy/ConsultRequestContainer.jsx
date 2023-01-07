import React from 'react'
import ConsultRequestCard from './ConsultRequestCard'

export default function ConsultRequestContainer() {
  return (
    <div className='py-3 flex'>
      <ConsultRequestCard/>
      <ConsultRequestCard/>
      <ConsultRequestCard/>
      <ConsultRequestCard/>
    </div>
  )
}

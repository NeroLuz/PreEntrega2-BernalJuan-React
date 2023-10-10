import React from 'react'
import { useParams } from 'react-router-dom'

const Joyeria = () => {
  const {categoryId} = useParams()

  return (
    <div>
      <ItemListContainer categoryId={categoryId}/>
    </div>
  )
}

export default Joyeria
import React from 'react'
import { useParams } from 'react-router-dom'

const RopaMujer = () => {
  const {categoryId} = useParams()

  return (
    <div>
      <ItemListContainer categoryId={categoryId}/>
    </div>
  )
}

export default RopaMujer
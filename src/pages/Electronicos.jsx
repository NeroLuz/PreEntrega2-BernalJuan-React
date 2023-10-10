import React from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/Items/ItemListContainer'

const Electronicos = () => {

  const {categoryId} = useParams()

  return (
    <div>
      <ItemListContainer categoryId={categoryId}/>
    </div>
  )
}

export default Electronicos
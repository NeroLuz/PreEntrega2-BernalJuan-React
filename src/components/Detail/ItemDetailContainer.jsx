import React from 'react'
import { useEffect, useState } from 'react'
import withLoading from '../../hoc/withLoading'
import ItemDetail from './ItemDetail'

const ItemDetailHoc = withLoading(ItemDetail)
const ItemDetailContainer = ({id}) => {

  const [item, setItem] = useState({})
  const [loader, setLoader] = useState(false)

  const getData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((rta) => rta.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error))
  }
      
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
    getData()
  }, [])

  return (
    <div>
        <ItemDetailHoc item={item} isLoading={loader}/>
    </div>
  )
}

export default ItemDetailContainer
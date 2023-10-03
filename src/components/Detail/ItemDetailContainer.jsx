import React from 'react'
import { useEffect, useState } from 'react'
import withLoading from '../../hoc/withLoading'
import ItemDetail from './ItemDetail'

const ItemDetailHoc = withLoading(ItemDetail)
const ItemDetailContainer = ({id}) => {

  const [item, setItem] = useState({})
  const [loader, setLoader] = useState(false)

  const getData = () => {
    fetch(`https://perenual.com/api/species/details/${id}?key=sk-p6o0651098edc023b2267`)
      .then((rta) => rta.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error))
  }
      
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      getData()
      setLoader(false)
    }, 2000)
  }, [])

  return (
    <div>
        <ItemDetailHoc item={item} isLoading={loader}/>
    </div>
  )
}

export default ItemDetailContainer
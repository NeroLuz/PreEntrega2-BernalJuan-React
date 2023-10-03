import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import withLoading from '../../hoc/withLoading'
import ItemList from './ItemList'

const ItemListHoc = withLoading(ItemList)
const ItemListContainer = () => {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  const getData = () => {
    fetch("https://perenual.com/api/species-list?key=sk-p6o0651098edc023b2267&page=10")
    .then((rta) => rta.json())
    .then((data) => setData(data.data))
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
      <>
        <ItemListHoc items={data} isLoading={loader}/>
      </>
  )
}

export default ItemListContainer
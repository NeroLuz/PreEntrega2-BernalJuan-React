import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import withLoading from '../../hoc/withLoading'
import ItemList from './ItemList'

const ItemListHoc = withLoading(ItemList)
const ItemListContainer = ({category}) => {

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loader, setLoader] = useState(false)

  const getData = () => {
    fetch("https://fakestoreapi.com/products?limit=18")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      const filteredData = category ? data.filter(item => item.category === category) : data
      setFilteredData(filteredData)
    })
    .catch((error) => console.log(error))

  }

  useEffect(() => {
    setLoader(true)
    getData()
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [category])

  return (
      <>
        <ItemListHoc items={filteredData} isLoading={loader}/>
      </>
  )
}

export default ItemListContainer
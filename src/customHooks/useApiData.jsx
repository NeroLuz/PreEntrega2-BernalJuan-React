import { useEffect } from 'react'
import { useState } from 'react'

const useApiData = (url) => {
    const [data, setData] = useState(null)

    const getData = () => {
      fetch(url)
      .then((rta) => rta.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
    }
  
    useEffect(() => {
      getData()
    }, [])

    return [data]
}

export default useApiData
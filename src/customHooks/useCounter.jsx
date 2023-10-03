import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue)

  const incrementar = () => {
    setCounter(counter + 1)
  }

  const decrementar = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return {counter, incrementar, decrementar}
}

export default useCounter
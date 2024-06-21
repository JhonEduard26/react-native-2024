import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState<number>(0)

  const increaseBy = (value: number) => {
    setCount(count + value)
  }

  return {
    count,
    increaseBy
  }
}
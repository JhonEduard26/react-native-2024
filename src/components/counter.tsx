import { useCounter } from "../hooks/use-counter"

export const Counter = () => {
  const { count, increaseBy } = useCounter()

  return (
    <div>
      <h2>Counter <small>{count}</small></h2>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </div>
  )
}
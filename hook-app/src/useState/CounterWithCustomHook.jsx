import { useCounter } from '../hooks/useCounter'
export const CounterWithCustomHookApp = () => {
  const { counter, increment, reset, decrement } = useCounter()

  return (
    <>
      <h1>Counter with hook : {counter}</h1>

      <hr />
      <button className="btn btn-outline-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-outline-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  )
}

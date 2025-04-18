import "../assets/Style/App.css";
import { useState } from 'react'
import Nuri from '../extra/fame'

const Counter = () => {
  const [count, updateCount] = useState(0)

  const incrementCount = () => {
    // console.log("Incrementing count:", count + 1);
    updateCount(count + 1);
}

const decrementCount = () => {
  if (count > 0) {
      // console.log("Decrementing count:", count - 1);
      updateCount(count - 1);
  }
}

  return (
    <div className="counter">
      {count === 5 ? (
        <Nuri />
      ) : (
        <div>
          <h3>{count}</h3>
          <div className="button-container">
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
          </div>
        </div>
      )}
      <div>
      <button onClick={() => updateCount(() => 0)}>RESET</button>
      </div>
    </div>
  )
}

export default Counter;
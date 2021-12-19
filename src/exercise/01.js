// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, newState) {
  if (typeof newState === 'function') {
    const newSt = newState(state)
    return {...state, ...newSt}
  }

  return {...state, ...newState} // Return an object which contains unchanged state properties
  // from state & changed state from newState
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state // Destructing count from state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

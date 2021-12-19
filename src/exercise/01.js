// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, newState) {
  if (newState.type === 'INCREMENT') {
    // Can also use switch statement for more actions
    return {count: state.count + newState.step}
  }

  return {...state, ...newState} // Return an object which contains unchanged state properties
  // from state & changed state from newState
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state // Destructing count from state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

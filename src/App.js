
import { useState, useEffect } from "react";
import Todolist from './components/Todolist/Todolist.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);


  return (
    <>
      {/* <p>Count: {count}</p>
    <button onClick={() => setCount((c) => c + 1)}>+</button>
    <p>Calculation: {calculation}</p> */}
      <Todolist />
    </>
  );
}

export default App;

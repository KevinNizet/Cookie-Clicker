import { useState } from "react";
import Cookie from "./components/Cookie.jsx";
import Counter from "./components/Counter.jsx";

const score = 10;
const cps = 20;

/* const [score, setScore] = useState(0);
const handleClick = (score) => {
  setScore = score + 1
} */

function App() {
  return (
    <div className="App">
      <Cookie /* onClick={handleClick} */ />
      <Counter score={score} cps={cps} />
    </div>
  );
}

export default App;

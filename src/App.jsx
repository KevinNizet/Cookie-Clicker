import { useState } from "react";
import Cookie from "./components/Cookie.jsx";
import Counter from "./components/Counter.jsx";
import AutoClickersList from "./components/AutoClickersList.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [cps, setCps] = useState(0);

  return (
    <div className="App">
      <Cookie setScore={setScore} />
      <Counter score={score} cps={cps} />
      <AutoClickersList score={score} setCps={setCps} setScore={setScore}/>
    </div>
  );
}

export default App;

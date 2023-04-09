import { useState } from "react";
import Cookie from "./components/Cookie.jsx";
import Counter from "./components/Counter.jsx";
import AutoClickersList from "./components/AutoClickersList.jsx";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Cookie setScore={setScore} />
      <Counter score={score} cps={10} />
      <AutoClickersList/>
    </div>
  );
}

export default App;

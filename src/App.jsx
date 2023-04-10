import { useEffect, useState } from "react";
import Cookie from "./components/Cookie.jsx";
import Counter from "./components/Counter.jsx";
import AutoClickersList from "./components/AutoClickersList.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [cps, setCps] = useState(0);


  /* modification du score avec l'ajout du cps aprés achat des autoclickers */
   /*  configuration du localStorage afin de stocker le score de l'utilisateur dans le cache */
  const generateCookiesEverySecondes = () => {
    setScore((oldScore) => oldScore + cps/10)
  }

/*   cps dans le [] de dépendance, permet de relancer le useEffect à l'initialisation, à chaque fois que la variable du tableau (cps) est modifée */
  useEffect(() => {
    const timer = setInterval(generateCookiesEverySecondes, 100/10)
    return  () => {
      clearInterval(timer)
    }
  }, [cps])
/* création d'un nouvel interval, dès que cps change, on le clear puis on crée un nouvel interval qui prendra la nouvelle valeur de cps (cycle de vie = démontage du composant)
 */

  return (
    <div className="App">
      <Cookie setScore={setScore} />
      <Counter score={score} cps={cps} />
      <AutoClickersList score={score} setCps={setCps} setScore={setScore}/>
    </div>
  );
}

export default App;

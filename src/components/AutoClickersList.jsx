import React from "react";
import AutoClickers from "./AutoClickers";

/* tableau créé à l'extérieur de la fonction pour qu'il ne se recrée pas à nouveau à chaque nouveau rendu de l'application */
//TODO: changer les icônes pour chacun des autoClickers
//FIXME: l'affichage des compostants ne se fait plus depuis l'ajout du composant <Icon/> dans le return de AutoClickers

const autoClickers = [
  {
    name: "Curseur",
    nbBought: 0,
    cps: 0.1,
    icone: "HiOutlineCursorArrowRays",
    price: 15,
  },
  {
    name: "Grand-Mère",
    nbBought: 0,
    cps: 5,
    icone: "HiOutlineCursorArrowRays",
    price: 100,
  },
  {
    name: "Usine",
    nbBought: 0,
    cps: 20,
    icone: "HiOutlineCursorArrowRays",
    price: 1000,
  },
];

const AutoClickersList = () => {
  return (
    <div className="AutoClickersList">
      {/* map sur le tableau d'Autoclickers afin d'obtenir chacune des propriétés des objets présents dans le tableau de données */}
      {autoClickers.map((autoClicker) => {
        return <AutoClickers autoClicker={autoClicker} />;
      })}
    </div>
  );
};

export default AutoClickersList;

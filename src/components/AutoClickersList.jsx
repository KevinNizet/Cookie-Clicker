import React from "react";
import AutoClickers from "./AutoClickers";

/* tableau créé à l'extérieur de la fonction pour qu'il ne se recrée pas à nouveau à chaque nouveau rendu de l'application */

const autoClickers = [
  {
    name: "Curseur",
    nbBought: 0,
    cps: 0.1,
    icone: "HiOutlineCursorClick",
    price: 15,
  },
  {
    name: "Grand-Mère",
    nbBought: 0,
    cps: 5,
    icone: "HiOutlineCake",
    price: 100,
  },
  {
    name: "Usine",
    nbBought: 0,
    cps: 20,
    icone: "HiOutlineOfficeBuilding",
    price: 1000,
  },
];

const AutoClickersList = ({ score, setCps, setScore }) => {
  /* gestion du click sur chacun des autoClickers. Vérification du name de chacun des autoClickers au moment du click via findIndex() */
  const handleBuyAutoClick = (name) => {
    const indexOfAutoClick = autoClickers.findIndex((autoclicker) => {
      return autoclicker.name === name;
    });
    /*   Vérification de la possibilité d'acheter ou non l'autoclicker en fonction du nombre de cookies générés */

    const price = autoClickers[indexOfAutoClick].price;
    const cps = autoClickers[indexOfAutoClick].cps;

    /*  modification impactées si la condition du prix est rencontrée */
    if (score >= price) {
      setCps((oldValue) => oldValue + cps);
      setScore((oldScore) => oldScore - price);
      autoClickers[indexOfAutoClick].price = autoClickers[indexOfAutoClick].price * 2;
      autoClickers[indexOfAutoClick].nbBought++;
    }
  };

  return (
    <div className="AutoClickersList">
      {/* map sur le tableau d'Autoclickers afin d'obtenir chacune des propriétés des objets présents dans le tableau de données */}
      {autoClickers.map((autoClicker) => {
        return (
          <AutoClickers
            autoClicker={autoClicker}
            onClick={handleBuyAutoClick}
          />
        );
      })}
    </div>
  );
};

export default AutoClickersList;

import React from "react";
/* import du module de toutes les icônes de React du dossier hi */
import * as Icons from 'react-icons/hi';


const AutoClickers = ({ autoClicker, onClick }) => {
  /* La variable Icon est un composant. Icons est un objet, on récupère l'icône qui correspond. */
  
  const Icon = Icons[autoClicker.icone]

 /*  appelle la fonction Onclick et lui passe le name de l'autoClicker sur lequel l'utilsateru se trouve */
  const handleClick = () => {
    onClick(autoClicker.name)
  }

  /* export du résultat du map de AutoClickersList dans le compostant AutoClickers */
  return (
    <div className="AutoClickers" onClick={handleClick}>
      <p>
        {/* Pour l'icone, il faut appeller ici le compostant Icon défini plus haut */}
        {autoClicker.nbBought} <Icon/> {autoClicker.name}
      </p>
      <p>{autoClicker.price} cookies</p>
      <span>{autoClicker.cps} cps</span>
    </div>
  );
};

export default AutoClickers;

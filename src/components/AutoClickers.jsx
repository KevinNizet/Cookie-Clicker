import React from "react";
/* import du module de toutes les icônes de React du dossier hi */
import * as Icons from "react-icons/hi";

//FIXME: l'affichage des compostants ne se fait plus depuis l'ajout du composant <Icon/> dans le return de AutoClickers

const AutoClickers = ({ autoClicker }) => {
  /* La variable Icon est un composant. Icons est un Object, on récupère l'icône qui correspond. */
  const Icon = Icons[autoClicker.icon];

  /* export du résultat du map de AutoClickersList dans le compostant AutoClickers */
  return (
    <div className="AutoClickers">
      <p>
        {/* Pour l'icone, il faut appeller ici le compostant Icon défini plus haut */}
        {autoClicker.nbBought} <Icon /> {autoClicker.name}
      </p>
      {autoClicker.price}
    </div>
  );
};

export default AutoClickers;

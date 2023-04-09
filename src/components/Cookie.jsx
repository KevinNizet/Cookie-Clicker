import React from "react";
import cookieImg from "../assets/cookie.jpg";

/* utilisation du state pour mettre à jour le score au moment du clic par l'utilisateur */
const Cookie = ({ setScore }) => {
  const handleClick = () => {
    setScore((oldValue) => oldValue + 1);
  };

  return (
    <button className={"Cookie"} onClick={handleClick}>
      <img src={cookieImg} height={"100%"} alt="Cookie" />
    </button>
  );
};

export default Cookie;

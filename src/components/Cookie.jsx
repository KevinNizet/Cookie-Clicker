import React from "react";
import cookieImg from "../assets/cookie.jpg";

const Cookie = ({ setScore }) => {
  const handleClick = () => {
    setScore((score) => score + 1);
  };

  return (
    <button className={"Cookie"} onClick={handleClick}>
      <img src={cookieImg} height={"100%"} alt="Cookie" />
    </button>
  );
};

export default Cookie;

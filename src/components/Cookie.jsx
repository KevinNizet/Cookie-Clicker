import React from "react";
import cookieImg from "../assets/cookie.jpg";

const Cookie = (/* {click} */) => {
  return (
    <button className={"Cookie"}>
      <img src={cookieImg} height={"100%"} alt="Cookie" /* onClick={click} */ />
    </button>
  );
};

export default Cookie;

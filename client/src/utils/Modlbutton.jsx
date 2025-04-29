import React from "react";

const Modlbutton = ({ modal, setModal }) => {
  return <>{modal ? <div className="bg-red-400">Openi</div> : ""}</>;
};

export default Modlbutton;

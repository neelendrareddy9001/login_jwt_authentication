import React from "react";

const Modlbutton = ({ modal, setModal }) => {
  return <>{modal ? <div className="bg-red-400">Open</div> : ""}</>;
};

export default Modlbutton;

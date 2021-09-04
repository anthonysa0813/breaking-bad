import React, { useEffect, useState } from "react";
import Phrase from "./components/Phrase";
import logo from "./images/logo.svg";
import "./index.css";

const App = () => {
  const [phrase, setPhrase] = useState({});
  const [modePhras, setModePhras] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    getPhrase();
  }, [id]);

  const getPhrase = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/quotes/${id}`
    );
    const data = await response.json();
    setPhrase(data[0]);
    setModePhras(true);
  };

  const nextPhrase = () => {
    setId(id + 1);
  };

  console.log(id);

  return (
    <>
      <div className="wrapper">
        <div className="container-img">
          <img src={logo} alt="" />
        </div>
        {modePhras && <Phrase phrase={phrase} />}
        {/* <button onClick={getPhrase}>Get Phrase</button> */}
        <button onClick={nextPhrase}>Siguiente</button>
      </div>
    </>
  );
};

export default App;

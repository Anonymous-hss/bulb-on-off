import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const bulbContext = createContext();

function App() {
  const [bulbIOn, setBulbOn] = useState(true);

  return (
    <bulbContext.Provider value={{ bulbIOn: bulbIOn, setBulbOn: setBulbOn }}>
      <LightBulb />
    </bulbContext.Provider>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState></BulbState>
      <ToggleBulbState></ToggleBulbState>
    </div>
  );
}

function BulbState() {
  const { bulbIOn } = useContext(bulbContext);
  return <div>{bulbIOn ? "Bulb On" : "Bulb off"}</div>;
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(bulbContext);
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  );
}

export default App;

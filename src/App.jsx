import { useState } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbIOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbIOn={bulbIOn}></BulbState>
      <ToggleBulbState setBulbOn={setBulbOn}></ToggleBulbState>
    </div>
  );
}

function BulbState({ bulbIOn }) {
  return <div>{bulbIOn ? "Bulb On" : "Bulb off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
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

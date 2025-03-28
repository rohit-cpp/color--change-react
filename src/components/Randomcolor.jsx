import React, { useEffect, useState } from "react";

const Randomcolor = () => {
  const [color, setColor] = useState("#000000");

  function handlehexcolor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexcolor);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <div>
        <button
          onClick={handlehexcolor}
          style={{ marginLeft: "40vw", marginTop: "20vw" }}
        >
          Create HEX Color
        </button>
        <div style={{ marginLeft: "24vw", marginTop: "5vw" }}>
          {<h1> The color is {color}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Randomcolor;

import React from "react";
import { Rings } from "svg-loaders-react";

export default function Loader() {
  const changeBackgroundColor = (color) => {
    document.body.style = "background:" + color;
  };

  return (
    <div
      direction="top"
      className="App"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {changeBackgroundColor("black")}
      <Rings />
    </div>
  );
}

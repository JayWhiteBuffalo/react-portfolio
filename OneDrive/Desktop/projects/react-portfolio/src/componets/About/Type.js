import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
      <Typewriter
        options={{
          strings: ["Web Developer", "Sofware Engineer", "MERN-Stacker", "Coffee Drinker"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    );
  }

  export default Type;
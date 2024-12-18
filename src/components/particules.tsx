import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } }, 
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          move: { enable: true, speed: 2, direction: "top", out_mode: "out" },
          size: { value: 3 },
          color: { value: "#FBCB81" },
          opacity: { value: 0.7, random: true },
        },
        fullScreen: { enable: false }, 
        style: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "0",
          overflow: "hidden", 
        },
      }}
    />
  );
};

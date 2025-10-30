"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function BackgroundSparks() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="background-sparks"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#fefefe" }, // same as your gradient background
        fpsLimit: 60,
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: ["#6366f1", "#a78bfa", "#8b5cf6"] }, // Indigo-Purple
          shape: { type: "circle" },
          opacity: { value: 0.6, random: { enable: true, minimumValue: 0.3 } },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "bottom",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: { onHover: { enable: false }, onClick: { enable: false } },
        },
        detectRetina: true,
      }}
    />
  );
}

"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: {
            enable: true,
            speed: 1,
            attract: {
              enable: true,
              distance: 200, // particles move closer to the mouse
            },
            direction: "none", // allows for free movement in any direction
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
          number: { value: 50, density: { enable: true, area: 800 } },
          shape: {
            type: "circle", // shape of particles
            options: {
              polygon: { nb_sides: 5 }, // number of sides for polygon shapes
            },
          },
          stroke: {
            width: 0.5,
            color: "#ffffff",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode:"repulse" // particles will repel away when hovering over the mouse
            },
            onclick: {
              enable: true,
              mode: "push", // particles will be pushed on click
            },
          },
          modes: {
            repulse: {
              distance: 80, // how far particles move away on hover
            },
            push: {
              quantity: 4, // number of particles added on click
            },
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -3,
        pointerEvents: "none",
      }}
    />
  );
}

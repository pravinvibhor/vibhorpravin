
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig: ISourceOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#4fc3dc",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4fc3dc",
        opacity: 0.2,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
    fpsLimit: 60,
    background: {
      color: {
        value: "transparent",
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />;
};

export default ParticlesBackground;

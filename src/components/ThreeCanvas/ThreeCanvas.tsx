import React, { useEffect } from "react";
import { Canvas } from "./ThreeCanvasStyles";
import * as THREE from "three";
import { gsap } from "gsap";
import { generateParticles } from "./Particles";

const PIXEL_RATIO = window.devicePixelRatio;

const ThreeCanvas: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".three-canvas");
    if (!canvas) return console.warn("No canvas for three.js!");

    // ===== START three.js =====

    // SETUP
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(PIXEL_RATIO);
    const group = new THREE.Group();
    scene.add(group);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // LIGHTING
    const light = new THREE.DirectionalLight(0xff0000, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // SHAPES
    const objects = generateParticles();
    group.add(...objects);

    // More helpers

    // Mouse event handler.
    const mouse: { x?: number; y?: number } = { x: undefined, y: undefined };
    const updateMouse = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener("pointermove", updateMouse);

    const scroll: { x?: number; y?: number } = { x: undefined, y: undefined };
    function updateCamera(event: Event) {
      scroll.x = window.scrollX;
      scroll.y = window.scrollY;
    }
    window.addEventListener("scroll", updateCamera);

    const updateDimensions = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      // Do we have a new size?
      if (width !== canvas.width || height !== canvas.height) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    // Animation

    const animate = () => {
      updateDimensions();
      renderer.render(scene, camera);
      gsap.to(group.position, {
        y: mouse.y ? mouse.y * 0.0005 : 0,
        x: mouse.x ? -mouse.x * 0.0005 : 0,
        duration: 1,
      });
      gsap.to(camera.position, {
        y: scroll.y ? -scroll.y * 0.05 : 0,
        // duration: 1,
      });
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // ===== END three.js =====

    return () => {};
  });

  return <Canvas className="three-canvas"></Canvas>;
};

export default ThreeCanvas;

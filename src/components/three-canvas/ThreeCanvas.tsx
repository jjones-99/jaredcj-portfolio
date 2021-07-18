import React, { useEffect } from "react";
import { Canvas } from "./ThreeCanvasStyles";
import * as THREE from "three";
import { render } from "@testing-library/react";

const PIXEL_RATIO = window.devicePixelRatio;

const ThreeCanvas: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".three-canvas");
    if (!canvas) return console.warn("No canvas for three.js!");

    // ===== Helpers for three.js =====

    const getHeight = () => canvas.offsetHeight;
    const getWidth = () => canvas.offsetWidth;

    // ===== START three.js =====

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(getWidth(), getHeight());
    renderer.setPixelRatio(PIXEL_RATIO);
    const camera = new THREE.PerspectiveCamera(75, getWidth() / getHeight(), 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // ===== END three.js =====

    return () => {};
  });

  return <Canvas className="three-canvas"></Canvas>;
};

export default ThreeCanvas;

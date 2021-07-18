import React, { useEffect } from "react";
import { Canvas } from "./ThreeCanvasStyles";
import * as THREE from "three";

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

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // LIGHTING
    const light = new THREE.DirectionalLight(0xff0000, 1);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // SHAPES
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // More helpers

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
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // ===== END three.js =====

    return () => {};
  });

  return <Canvas className="three-canvas"></Canvas>;
};

export default ThreeCanvas;

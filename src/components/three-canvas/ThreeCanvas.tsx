import React, { useEffect } from "react";
import { Canvas } from "./ThreeCanvasStyles";
import * as THREE from "three";
import { gsap } from "gsap";

const PIXEL_RATIO = window.devicePixelRatio;
const TEXTURE_LOADER = new THREE.TextureLoader();

interface IParticle {
  path: string;
  size: number;
  color: string | number | THREE.Color;
  count: number;
}
const PARTICLE_CONFIG: IParticle[] = [
  {
    path: "../../../assets/particles/bolt.png",
    size: 0.3,
    color: 0xf0f000,
    count: 7,
  },
  {
    path: "../../../assets/particles/cloud.png",
    size: 0.5,
    color: 0xffffff,
    count: 13,
  },
  {
    path: "../../../assets/particles/heart.png",
    size: 0.4,
    color: 0xf01313,
    count: 7,
  },
  {
    path: "../../../assets/particles/paw.png",
    size: 0.5,
    color: 0x1313f0,
    count: 13,
  },
  {
    path: "../../../assets/particles/star.png",
    size: 0.4,
    color: 0x13f013,
    count: 17,
  },
];

const generateParticles = (count: number) => {
  const arr = new Float32Array(count * 3); // Three points per particle.
  for (let i = 0; i < count * 3; i++) {
    arr[i] = (Math.random() - 0.5) * 10;
  }
  return arr;
};

const buildParticleMaterials = () => {
  return PARTICLE_CONFIG.map((config) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(generateParticles(config.count), 3)
    );
    const material = new THREE.PointsMaterial({
      size: config.size,
      color: config.color,
      map: TEXTURE_LOADER.load("https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"),
      transparent: true,
    });
    return new THREE.Points(geometry, material);
  });
};

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
    const objects = buildParticleMaterials();
    group.add(...objects);

    // More helpers

    const mouse: { x?: number; y?: number } = { x: undefined, y: undefined };
    const updateMouse = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener("pointermove", updateMouse);

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
      gsap.to(group.rotation, {
        x: mouse.y ? mouse.y * 0.0005 : 0,
        y: mouse.x ? -mouse.x * 0.0005 : 0,
        duration: 1,
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
